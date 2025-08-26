import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/_layout.tsx", [
        route("/","routes/home.tsx"),
        route("/portfolio","routes/portfolio.tsx"),
        route("/contact","routes/contact.tsx"),
    ]),

] satisfies RouteConfig;
