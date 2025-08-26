import "dotenv/config";
import { PassThrough } from "node:stream";
import type { EntryContext } from "react-router";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext
) {
  const userAgent = request.headers.get("user-agent");

  // Ensure requests from bots and SPA Mode renders wait for all content to load before responding
  // https://react.dev/reference/react-dom/server/renderToPipeableStream#waiting-for-all-content-to-load-for-crawlers-and-static-generation
  const waitForAllReady = (userAgent && isbot(userAgent)) || routerContext.isSpaMode;

  const body = new PassThrough();
  const stream = createReadableStreamFromReadable(body);

  const { pipe, abort } = renderToPipeableStream(
    <ServerRouter context={routerContext} url={request.url} />,
    {
      [waitForAllReady ? "onAllReady" : "onShellReady"]() {
        responseHeaders.set("Content-Type", "text/html");
        pipe(body);
      },
      onShellError(error: unknown) {
        console.error(error);
        responseStatusCode = 500;
        responseHeaders.set("Content-Type", "text/html");
        body.end('<h1>Something went wrong</h1>');
      },
      onError(error: unknown) {
        console.error(error);
        responseStatusCode = 500;
      },
    }
  );

  // Automatically timeout the React renderer after 10 seconds, which ensures the
  // response will always close/end and that a proper error message is delivered
  // to the client in development.
  setTimeout(abort, 10_000);

  return new Response(stream, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}