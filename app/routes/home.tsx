import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import image from "../components/images/Macbook-Air-www.lawplusgh.com.png"
import phone from "../components/images/iPhone-13-PRO-www.lawplusgh.com.png"
import pos from "../components/images/Macbook-Air-pos-online-rho.vercel.app.png"
import tes from "../components/images/i.png"
import { Link } from "react-router"

export default function Home() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [isDownloading, setIsDownloading] = useState(false)

    const testimonials = [
        {
            id: 1,
            name: "David Mensah",
            role: "CEO at LawPlus Ghana",
            text: "Mends delivered our legal services platform with exceptional attention to detail. The website perfectly captures our brand and has significantly improved our client engagement. His technical expertise and understanding of our needs made the entire process seamless.",
            image: tes
        },
        {
            id: 2,
            name: "Sarah Osei",
            role: "Operations Manager at AddeTech",
            text: "Working with Mends on our company website was outstanding. He transformed our vision into a modern, responsive platform that showcases our services perfectly. The code quality and performance optimization exceeded our expectations.",
            image: tes
        },
        {
            id: 3,
            name: "Emmanuel Kweku",
            role: "Business Owner",
            text: "Mends built our point-of-sale system from the ground up. The application is robust, user-friendly, and has streamlined our entire business operations. His problem-solving skills and dedication to quality are remarkable. Highly recommended!",
            image: tes
        }
    ]

    const heroRef = useRef(null)
    const heroInView = useInView(heroRef, { once: false, threshold: 0.2 })

    const skillsRef = useRef(null)
    const skillsInView = useInView(skillsRef, { once: false, threshold: 0.2 })

    const project1Ref = useRef(null)
    const project1InView = useInView(project1Ref, { once: false, threshold: 0.2 })

    const project2Ref = useRef(null)
    const project2InView = useInView(project2Ref, { once: false, threshold: 0.2 })

    const statsRef = useRef(null)
    const statsInView = useInView(statsRef, { once: false, threshold: 0.2 })

    const testimonialRef = useRef(null)
    const testimonialInView = useInView(testimonialRef, { once: false, threshold: 0.2 })

    const contactRef = useRef(null)
    const contactInView = useInView(contactRef, { once: false, threshold: 0.2 })

    // Auto-play functionality for testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)
        }, 8000) // Change every 8 seconds

        return () => clearInterval(interval)
    }, [testimonials.length])

    return (
        <div className="min-h-screen bg-[#25262a]">
            <section ref={heroRef} className="relative text-white px-4 pt-16 pb-16 sm:px-6 md:pt-20 md:pb-20 lg:px-12 lg:pt-32">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: -50 }}
                            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                            <div className="text-[#64f4ab] text-sm font-medium flex items-center gap-2">
                                <span className="w-8 h-px bg-[#64f4ab]"></span>
                                Introducing
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
                                Hello <br />
                                <span className="">I'm Mends</span> <br />
                                <span className="">Gyan</span>
                            </h1>

                            <div className="space-y-4 ">
                                <p>
                                    A passionate <span className="font-semibold">Software Developer</span> with a focus
                                    on building modern, scalable, and user-friendly applications.
                                </p>
                                <div className="space-y-1">
                                    <p>💻 Crafting clean and efficient code</p>
                                    <p>🚀 Turning ideas into real-world solutions</p>
                                    <p>📱 Web & Mobile Development</p>
                                </div>
                            </div>

                            <Link to="/portfolio">
                                <button className="bg-[#FFAF29] hover:bg-[#e89d24] text-black font-medium px-6 py-3 sm:px-8 rounded-lg transition-colors">
                                    Browse Projects
                                </button>
                            </Link>
                        </motion.div>


                        {/* Right Content */}
                        <motion.div
                            className="relative flex justify-center lg:justify-end"
                            initial={{ opacity: 0, x: 50 }}
                            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        >
                            <div className="relative">
                                {/* Main circular background */}
                                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[35rem] lg:h-[35rem] rounded-full bg-[#64f4ab] shadow-sm relative flex items-center justify-center mx-auto">
                                    {/* Profile image placeholder - replace with actual image */}
                                    <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-[26rem] lg:h-[26rem] shadow-sm rounded-full bg-[#25262a] flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                                        <img src={null} alt="Profile" />
                                    </div>

                                    {/* Skill badges */}
                                    <div className="absolute top-8 left-4 sm:top-12 sm:left-8 md:top-16 md:left-12 lg:top-20 lg:left-10 bg-[#25262a] shadow-sm px-2 py-2 sm:px-3 sm:py-3 rounded-full text-sm font-medium">
                                        <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" sm:width="25" sm:height="25" md:width="30" md:height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a23 23 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16zm6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a23 23 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9" /></svg>
                                    </div>
                                    <div className="absolute top-8 right-4 sm:top-12 sm:right-8 md:top-16 md:right-12 lg:top-20 lg:right-10 bg-[#25262a] shadow-sm px-2 py-2 sm:px-3 sm:py-3 animate-spin rounded-full text-sm font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" sm:width="25" sm:height="25" md:width="30" md:height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M21.7 6.53c.01.02.01.05.01.08v4.29c0 .1-.06.22-.15.27l-3.61 2.08v4.11c0 .11-.05.21-.15.27l-7.52 4.33c-.02.01-.04.04-.06.04H10s0-.03-.04-.04l-7.52-4.33a.32.32 0 0 1-.15-.27V4.5c0-.05 0-.08.01-.1c0-.01.01-.02.01-.03c0-.02.01-.03.02-.05c0-.01.01-.02.02-.03l.03-.03l.03-.03c.01-.01.02-.02.03-.02L6.2 2.04c.1-.04.22-.04.3 0l3.78 2.17c.01.01.02.01.03.02l.03.03l.03.03c.01.01.02.02.02.03c.01.02.02.03.02.05c0 .01.01.02.01.03c.01.03.01.05.01.1v8l3.14-1.78V6.61c0-.03 0-.06.01-.08l.01-.03s.01-.03.02-.05c0-.01.01-.02.02-.03l.03-.03l.03-.03c.01-.01.02-.02.03-.02l3.78-2.17c.08-.06.2-.06.3 0l3.76 2.17c.01 0 .02.01.03.02l.03.03l.03.03c.01.01.01.02.02.03c.01.02.01.05.02.05s.01 0 .01.03m-.61 4.19V7.15l-3.14 1.8v3.55zm-3.76 6.46V13.6l-6.9 3.94v3.61zM2.91 5v12.18l6.9 3.97v-3.61l-3.6-2.04H6.2c-.01 0-.02 0-.03-.03c-.01 0-.02-.01-.03-.02l-.03-.03c-.01-.01-.01-.02-.02-.03c-.01-.02-.01-.03-.02-.04c0-.02-.01-.03-.01-.04c-.01-.01-.01-.03-.01-.04V6.82zm3.45-2.32L3.23 4.5l3.13 1.78L9.5 4.5zm3.45 10.2V5L6.67 6.82v7.87zm7.83-8.08L14.5 6.61l3.14 1.8l3.13-1.8zm-.31 4.15l-3.14-1.8v3.57l3.14 1.78zM10.12 17L17 13.06l-3.12-1.8L7 15.23z" /></svg>
                                    </div>
                                    <div className="absolute bottom-8 left-4 sm:bottom-12 sm:left-8 md:bottom-16 md:left-12 lg:bottom-20 lg:left-10 bg-[#25262a] shadow-sm px-2 py-2 sm:px-3 sm:py-3 rounded-full text-2xl sm:text-3xl md:text-4xl font-medium">
                                        <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" sm:width="25" sm:height="25" md:width="30" md:height="30" viewBox="0 0 512 314"><defs><linearGradient id="SVGn7WyXdQM" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%"><stop offset="0%" stopColor="#41873f" /><stop offset="32.88%" stopColor="#418b3d" /><stop offset="63.52%" stopColor="#419637" /><stop offset="93.19%" stopColor="#3fa92d" /><stop offset="100%" stopColor="#3fae2a" /></linearGradient><linearGradient id="SVGYUHp3cUc" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%"><stop offset="13.76%" stopColor="#41873f" /><stop offset="40.32%" stopColor="#54a044" /><stop offset="71.36%" stopColor="#66b848" /><stop offset="90.81%" stopColor="#6cc04a" /></linearGradient><linearGradient id="SVGvU14yb0S" x1="-4413.77%" x2="5327.93%" y1="13.43%" y2="13.43%"><stop offset="9.192%" stopColor="#6cc04a" /><stop offset="28.64%" stopColor="#66b848" /><stop offset="59.68%" stopColor="#54a044" /><stop offset="86.24%" stopColor="#41873f" /></linearGradient><linearGradient id="SVGsgCB2mOc" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%"><stop offset="9.192%" stopColor="#6cc04a" /><stop offset="28.64%" stopColor="#66b848" /><stop offset="59.68%" stopColor="#54a044" /><stop offset="86.24%" stopColor="#41873f" /></linearGradient><linearGradient id="SVGgyHjFbjQ" x1="-9713.77%" x2="27.93%" y1="36.21%" y2="36.21%"><stop offset="9.192%" stopColor="#6cc04a" /><stop offset="28.64%" stopColor="#66b848" /><stop offset="59.68%" stopColor="#54a044" /><stop offset="86.24%" stopColor="#41873f" /></linearGradient><linearGradient id="SVGKboQA3ft" x1="-103.861%" x2="100.797%" y1="50.275%" y2="50.275%"><stop offset="9.192%" stopColor="#6cc04a" /><stop offset="28.64%" stopColor="#66b848" /><stop offset="59.68%" stopColor="#54a044" /><stop offset="86.24%" stopColor="#41873f" /></linearGradient><linearGradient id="SVGGrjLcbXr" x1="130.613%" x2="4.393%" y1="-211.069%" y2="201.605%"><stop offset="0%" stopColor="#41873f" /><stop offset="32.88%" stopColor="#418b3d" /><stop offset="63.52%" stopColor="#419637" /><stop offset="93.19%" stopColor="#3fa92d" /><stop offset="100%" stopColor="#3fae2a" /></linearGradient><path id="SVGA41zMIsC" d="M57.903 1.85a5.96 5.96 0 0 0-5.894 0L3.352 29.933c-1.85 1.04-2.89 3.005-2.89 5.085v56.286c0 2.08 1.156 4.045 2.89 5.085l48.657 28.085a5.96 5.96 0 0 0 5.894 0l48.658-28.085c1.849-1.04 2.89-3.005 2.89-5.085V35.019c0-2.08-1.157-4.045-2.89-5.085z" /></defs><g fill="none"><path fill="#539e43" d="M253.11 313.094c-1.733 0-3.351-.462-4.854-1.271l-15.371-9.13c-2.312-1.272-1.156-1.734-.462-1.965c3.12-1.04 3.698-1.272 6.934-3.12c.347-.232.81-.116 1.156.115l11.789 7.05c.462.231 1.04.231 1.386 0l46.115-26.698c.462-.231.694-.694.694-1.271v-53.28c0-.579-.232-1.04-.694-1.272l-46.115-26.582c-.462-.232-1.04-.232-1.386 0l-46.115 26.582c-.462.231-.694.809-.694 1.271v53.28c0 .463.232 1.04.694 1.272l12.598 7.281c6.819 3.467 11.095-.578 11.095-4.623v-52.587c0-.693.578-1.387 1.387-1.387h5.894c.694 0 1.387.578 1.387 1.387v52.587c0 9.13-4.97 14.447-13.638 14.447c-2.658 0-4.738 0-10.633-2.89l-12.135-6.934c-3.005-1.733-4.854-4.97-4.854-8.437v-53.28c0-3.467 1.849-6.704 4.854-8.437l46.114-26.698c2.89-1.618 6.82-1.618 9.709 0l46.114 26.698c3.005 1.733 4.855 4.97 4.855 8.437v53.28c0 3.467-1.85 6.704-4.855 8.437l-46.114 26.698c-1.503.694-3.236 1.04-4.854 1.04m14.216-36.637c-20.225 0-24.386-9.246-24.386-17.105c0-.694.578-1.387 1.387-1.387h6.01c.693 0 1.271.462 1.271 1.156c.925 6.125 3.583 9.13 15.834 9.13c9.708 0 13.87-2.196 13.87-7.397c0-3.005-1.157-5.2-16.297-6.703c-12.598-1.272-20.457-4.045-20.457-14.1c0-9.362 7.86-14.91 21.035-14.91c14.793 0 22.075 5.086 23 16.18q0 .521-.347 1.041c-.232.231-.578.462-.925.462h-6.01c-.578 0-1.156-.462-1.271-1.04c-1.387-6.356-4.97-8.437-14.447-8.437c-10.633 0-11.905 3.699-11.905 6.472c0 3.352 1.503 4.392 15.834 6.241c14.216 1.85 20.92 4.508 20.92 14.447c-.116 10.171-8.437 15.95-23.116 15.95" /><path fill="#333" d="M110.028 104.712c0-2.08-1.156-4.046-3.005-5.086l-49.004-28.2c-.81-.463-1.734-.694-2.658-.81h-.463c-.924 0-1.849.347-2.658.81l-49.004 28.2c-1.85 1.04-3.005 3.005-3.005 5.086l.116 75.817c0 1.04.578 2.08 1.502 2.543c.925.578 2.08.578 2.89 0l29.125-16.643c1.849-1.04 3.005-3.005 3.005-5.085v-35.482c0-2.08 1.155-4.045 3.005-5.085l12.366-7.166c.925-.578 1.965-.81 3.005-.81s2.08.232 2.89.81l12.366 7.166c1.85 1.04 3.005 3.004 3.005 5.085v35.482c0 2.08 1.156 4.045 3.005 5.085l29.125 16.643a2.82 2.82 0 0 0 3.005 0c.925-.463 1.503-1.503 1.503-2.543zM345.571.347c-.924-.463-2.08-.463-2.89 0c-.924.578-1.502 1.502-1.502 2.542v75.125c0 .693-.346 1.386-1.04 1.849q-1.04.519-2.08 0l-12.251-7.05a5.96 5.96 0 0 0-5.895 0l-49.004 28.316c-1.849 1.04-3.005 3.005-3.005 5.085v56.516c0 2.08 1.156 4.046 3.005 5.086l49.004 28.316a5.96 5.96 0 0 0 5.895 0l49.004-28.316c1.849-1.04 3.005-3.005 3.005-5.086V21.844c0-2.196-1.156-4.16-3.005-5.201zm-4.507 143.776c0 .578-.231 1.04-.694 1.271l-16.758 9.708a1.71 1.71 0 0 1-1.503 0l-16.758-9.708c-.463-.231-.694-.809-.694-1.271v-19.417c0-.578.231-1.04.694-1.271l16.758-9.709a1.71 1.71 0 0 1 1.503 0l16.758 9.709c.463.23.694.809.694 1.271zm167.584-19.879c1.85-1.04 2.89-3.005 2.89-5.086v-13.753c0-2.08-1.156-4.045-2.89-5.085l-48.657-28.2a5.96 5.96 0 0 0-5.895 0l-49.004 28.315c-1.85 1.04-3.005 3.005-3.005 5.085v56.517c0 2.08 1.156 4.045 3.005 5.085l48.657 27.738c1.85 1.04 4.046 1.04 5.78 0L489 178.45c.925-.463 1.503-1.503 1.503-2.543s-.578-2.08-1.503-2.543l-49.235-28.316c-.925-.578-1.503-1.502-1.503-2.542v-17.683c0-1.04.578-2.08 1.503-2.543l15.371-8.784a2.82 2.82 0 0 1 3.005 0l15.372 8.784c.925.578 1.502 1.502 1.502 2.543v13.869c0 1.04.578 2.08 1.503 2.542a2.82 2.82 0 0 0 3.005 0z" /><path fill="#539e43" d="M456.292 121.585a1.05 1.05 0 0 1 1.156 0l9.362 5.432c.346.232.577.578.577 1.04v10.865c0 .462-.23.809-.577 1.04l-9.362 5.432a1.05 1.05 0 0 1-1.156 0l-9.361-5.432c-.347-.231-.578-.578-.578-1.04v-10.864c0-.463.23-.81.578-1.04z" /><g transform="translate(134.068 70.501)"><mask id="SVGag4sAb1K" fill="#fff"><use href="#SVGA41zMIsC" /></mask><use fill="url(#SVGn7WyXdQM)" href="#SVGA41zMIsC" /><g mask="url(#SVGag4sAb1K)"><path d="M51.893 1.85L3.121 29.933C1.27 30.974 0 32.94 0 35.02v56.286c0 1.387.578 2.658 1.502 3.698L56.285 1.156c-1.387-.231-3.005-.116-4.392.693m4.739 123.204c.462-.116.925-.347 1.387-.578l48.773-28.085c1.85-1.04 3.005-3.005 3.005-5.085V35.019c0-1.502-.694-3.005-1.734-4.045z" /><path fill="url(#SVGYUHp3cUc)" d="M106.676 29.934L57.788 1.85a8 8 0 0 0-1.503-.578L1.502 95.12a6.1 6.1 0 0 0 1.619 1.387l48.888 28.085c1.387.809 3.005 1.04 4.507.577l51.432-94.078c-.347-.462-.81-.81-1.272-1.156" /></g><g mask="url(#SVGag4sAb1K)"><path d="M109.797 91.305V35.019c0-2.08-1.271-4.045-3.12-5.085L57.786 1.85a5.1 5.1 0 0 0-1.848-.693l53.511 91.42c.231-.347.347-.809.347-1.271M3.12 29.934C1.272 30.974 0 32.94 0 35.02v56.286c0 2.08 1.387 4.045 3.12 5.085l48.889 28.085q1.734 1.04 3.814.693L3.467 29.818z" /><path fill="url(#SVGvU14yb0S)" fillRule="evenodd" d="m50.391.809l-.693.347h.924z" transform="translate(0 -9.246)" /><path fill="url(#SVGsgCB2mOc)" fillRule="evenodd" d="M106.792 105.636c1.387-.809 2.427-2.196 2.89-3.698L56.053 10.402c-1.387-.231-2.89-.116-4.16.693L3.351 39.065l52.355 95.465a8 8 0 0 0 2.196-.693z" transform="translate(0 -9.246)" /><path fill="url(#SVGgyHjFbjQ)" fillRule="evenodd" d="m111.3 104.712l-.347-.578v.809z" transform="translate(0 -9.246)" /><path fill="url(#SVGKboQA3ft)" fillRule="evenodd" d="m106.792 105.636l-48.773 28.085a7 7 0 0 1-2.196.693l.925 1.734l54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814" transform="translate(0 -9.246)" /><path fill="url(#SVGGrjLcbXr)" fillRule="evenodd" d="m106.792 105.636l-48.773 28.085a7 7 0 0 1-2.196.693l.925 1.734l54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814" transform="translate(0 -9.246)" /></g></g></g></svg>
                                    </div>
                                    <div className="absolute bottom-8 right-4 sm:bottom-12 sm:right-8 md:bottom-16 md:right-12 lg:bottom-20 lg:right-10 bg-[#25262a] shadow-sm px-2 py-2 sm:px-3 sm:py-3 rounded-full text-sm font-medium">
                                        <svg className="animate-spin text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" sm:width="25" sm:height="25" md:width="30" md:height="30" viewBox="0 0 128 128"><path fill="#439934" fillRule="evenodd" d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296c.472 6.095.256 12.147-1.029 18.142c-.035.165-.109.32-.164.48c-.403.001-.814-.049-1.208.012c-3.329.523-6.655 1.065-9.981 1.604c-3.438.557-6.881 1.092-10.313 1.687c-1.216.21-2.721-.041-3.212 1.641c-.014.046-.154.054-.235.08l.166-10.051l-.169-24.252l1.602-.275c2.62-.429 5.24-.864 7.862-1.281c3.129-.497 6.261-.98 9.392-1.465c1.381-.215 2.764-.412 4.148-.618" clipRule="evenodd" /><path fill="#45a538" fillRule="evenodd" d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37c-8.717-8.222-15.093-17.899-18.233-29.566c-.865-3.211-1.442-6.474-1.627-9.792c-.13-2.322-.318-4.665-.154-6.975c.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702q2.638 7.77 5.242 15.551c5.458 16.3 10.909 32.604 16.376 48.9c.107.318.384.579.583.866z" clipRule="evenodd" /><path fill="#46a037" fillRule="evenodd" d="M88.038 42.812c-1.384.206-2.768.403-4.149.616c-3.131.485-6.263.968-9.392 1.465c-2.622.417-5.242.852-7.862 1.281l-1.602.275l-.012-1.045c-.053-.859-.144-1.717-.154-2.576c-.069-5.478-.112-10.956-.18-16.434c-.042-3.429-.105-6.857-.175-10.285c-.043-2.13-.089-4.261-.185-6.388c-.052-1.143-.236-2.28-.311-3.423c-.042-.657.016-1.319.029-1.979c.817 1.583 1.616 3.178 2.456 4.749c1.327 2.484 3.441 4.314 5.344 6.311c7.523 7.892 12.864 17.068 16.193 27.433" clipRule="evenodd" /><path fill="#409433" fillRule="evenodd" d="M65.036 80.753c.081-.026.222-.034.235-.08c.491-1.682 1.996-1.431 3.212-1.641c3.432-.594 6.875-1.13 10.313-1.687c3.326-.539 6.652-1.081 9.981-1.604c.394-.062.805-.011 1.208-.012c-.622 2.22-1.112 4.488-1.901 6.647c-.896 2.449-1.98 4.839-3.131 7.182a49 49 0 0 1-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548c-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23l-1.214-1.038l-1.256-2.753a41.4 41.4 0 0 1-1.394-9.838l.023-.561l.171-2.426c.057-.828.133-1.655.168-2.485c.129-2.982.241-5.964.359-8.946" clipRule="evenodd" /><path fill="#4faa41" fillRule="evenodd" d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947c-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913c-2.75-8.209-5.467-16.431-8.213-24.642a4499 4499 0 0 0-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6168 6168 0 0 1 6.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198c.116.349.308.671.491 1.062l.67-.78z" clipRule="evenodd" /><path fill="#4aa73c" fillRule="evenodd" d="M43.155 32.227c.21.274.511.516.617.826a4499 4499 0 0 1 6.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642c1.662 4.961 3.362 9.911 5.062 14.913l.765-.289l-.171 2.426l-.155.559c-.266 2.656-.49 5.318-.814 7.968c-.163 1.328-.509 2.632-.772 3.947c-.198-.287-.476-.548-.583-.866c-5.467-16.297-10.918-32.6-16.376-48.9a3889 3889 0 0 0-5.242-15.551c-.089-.263-.34-.469-.516-.702z" clipRule="evenodd" /><path fill="#57ae47" fillRule="evenodd" d="m65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062c-2.913-8.731-5.812-17.468-8.728-26.198a6168 6168 0 0 0-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769q2.52 7.382 5.003 14.778c1.547 4.604 3.071 9.215 4.636 13.813c.105.308.47.526.714.786l.012 1.045q.087 12.124.171 24.251" clipRule="evenodd" /><path fill="#60b24f" fillRule="evenodd" d="M65.021 45.404c-.244-.26-.609-.478-.714-.786c-1.565-4.598-3.089-9.209-4.636-13.813q-2.483-7.395-5.003-14.778c-.099-.287-.371-.514-.562-.769c1.969-1.928 3.877-3.925 5.925-5.764c1.821-1.634 3.285-3.386 3.352-5.968c.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979c.075 1.143.259 2.28.311 3.423c.096 2.127.142 4.258.185 6.388c.069 3.428.132 6.856.175 10.285c.067 5.478.111 10.956.18 16.434c.008.861.098 1.718.152 2.577" clipRule="evenodd" /><path fill="#a9aa88" fillRule="evenodd" d="M62.598 107.085c.263-1.315.609-2.62.772-3.947c.325-2.649.548-5.312.814-7.968l.066-.01l.066.011a41.4 41.4 0 0 0 1.394 9.838c-.176.232-.425.439-.518.701c-.727 2.05-1.412 4.116-2.143 6.166c-.1.28-.378.498-.574.744l-.747-2.566z" clipRule="evenodd" /><path fill="#b6b598" fillRule="evenodd" d="M62.476 112.621c.196-.246.475-.464.574-.744c.731-2.05 1.417-4.115 2.143-6.166c.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722z" clipRule="evenodd" /><path fill="#c2c1a7" fillRule="evenodd" d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624c-.839 2.403-1.64 4.819-2.485 7.222c-.107.305-.404.544-.614.812q-.164-2.079-.331-4.158" clipRule="evenodd" /><path fill="#cecdb7" fillRule="evenodd" d="M63.503 120.763c.209-.269.506-.508.614-.812c.845-2.402 1.646-4.818 2.485-7.222c.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477c-.575 1.614-1.117 3.24-1.694 4.854c-.119.333-.347.627-.525.938c-.158-.207-.441-.407-.454-.623c-.051-.841-.016-1.688-.013-2.533" clipRule="evenodd" /><path fill="#dbdac7" fillRule="evenodd" d="M63.969 123.919c.178-.312.406-.606.525-.938c.578-1.613 1.119-3.239 1.694-4.854c.065-.183.263-.319.398-.477l.012 3.64l-1.218 3.124z" clipRule="evenodd" /><path fill="#ebe9dc" fillRule="evenodd" d="m65.38 124.415l1.218-3.124l.251 3.696z" clipRule="evenodd" /><path fill="#cecdb7" fillRule="evenodd" d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23z" clipRule="evenodd" /><path fill="#4faa41" fillRule="evenodd" d="m64.316 95.172l-.066-.011l-.066.01l.155-.559z" clipRule="evenodd" /></svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="bg-[#2d2e32]">
                {/* Skills Section */}
                <section id="about" ref={skillsRef} className="px-4 py-16 sm:px-6 md:py-20 lg:px-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
                            {/* Left Side - 2x2 Grid of Skills */}
                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
                                initial={{ opacity: 0, y: 50 }}
                                animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                {/* Web Development */}
                                <div className="text-center bg-[#25262a] text-white shadow-sm rounded-3xl p-8">
                                    <div className="w-20 h-20  mx-auto mb-4 rounded-full border-2 border-green-400 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold  mb-3">Web Development</h3>
                                    <p className=" text-sm">Building modern, responsive web applications using React, Next.js, and TypeScript</p>
                                </div>

                                {/* Mobile Development */}
                                <div className="text-center bg-[#25262a] text-white shadow-sm rounded-3xl p-8">
                                    <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-green-400 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold  mb-3">Mobile Development</h3>
                                    <p className=" text-sm">Creating cross-platform mobile apps with React Native </p>
                                </div>

                                {/* API Development */}
                                <div className="text-center bg-[#25262a] text-white shadow-sm rounded-3xl p-8">
                                    <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-green-400 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold  mb-3">API Development</h3>
                                    <p className=" text-sm">Building robust RESTful APIs with Larevel, Node.js </p>
                                </div>

                                {/* Database Design */}
                                <div className="text-center bg-[#25262a] text-white shadow-sm rounded-3xl p-8">
                                    <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-green-400 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold  mb-3">Database Design</h3>
                                    <p className=" text-sm">Designing efficient database schemas with PostgreSQL, MongoDB, and MYSQL</p>
                                </div>
                            </motion.div>

                            {/* Right Side - Why Hire Me Section */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={skillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                className="text-white"
                            >
                                <p className="text-green-400 text-sm font-medium mb-4">My Skills</p>
                                <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 leading-tight">
                                    Why Hire Me For Next Project?
                                </h2>
                                <p className=" leading-relaxed">
                                    As a <span className="font-medium">Software Developer</span>, I specialize in building
                                    modern, scalable, and user-friendly applications that solve real-world problems.
                                    With expertise in <span className="font-medium">web development, APIs, and database design</span>,
                                    I bring both technical skills and creativity to every project.
                                </p>
                                <p className=" leading-relaxed">
                                    The tech world is constantly evolving, and I thrive on learning new tools and
                                    adapting to emerging trends. My focus is not just on writing code, but on
                                    delivering <span className="font-medium">efficient, maintainable, and impactful solutions</span>
                                    that help businesses and individuals succeed.
                                </p>

                                <ul className="list-disc list-inside  space-y-2">
                                    <li>💻 Strong foundation in <span className="font-medium">frontend & backend development</span></li>
                                    <li>⚡ Passion for creating clean, efficient, and scalable code</li>
                                    <li>🚀 Experienced in modern frameworks and agile development</li>
                                    <li>🤝 Dedicated to collaboration, problem-solving, and continuous learning</li>
                                </ul>
                                <button
                                    onClick={() => {
                                        setIsDownloading(true)
                                        window.location.href = 'https://docs.google.com/document/d/1JX93bVMMuV5178ubpeAT3RXhwCYlEjgq/export?format=pdf'
                                        // Reset downloading state after a short delay
                                        setTimeout(() => setIsDownloading(false), 2000)
                                    }}
                                    disabled={isDownloading}
                                    className={`mt-6 text-black font-medium px-8 py-4 rounded-lg transition-colors flex items-center gap-2 ${isDownloading
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-[#FFAF29] hover:bg-[#e89d24]'
                                        }`}
                                >
                                    {isDownloading ? (
                                        <>
                                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Downloading...
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            Download CV
                                        </>
                                    )}
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </section>


                {/* Project Showcase Section */}
                <section ref={project1Ref} className="px-6 py-20 lg:px-12 ">
                    <div className="max-w-7xl mx-auto">

                        <div className="pb-20 flex justify-between">
                            <p className="text-4xl font-semibold font-heading text-white">
                                Projects
                            </p>
                            <Link to="/portfolio">
                                <button className="text-orange-400 hover:text-orange-300 font-medium flex items-center gap-2 mx-auto lg:mx-0 transition-colors">
                                    <span>→</span>
                                    View all projects
                                </button>
                            </Link>

                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Content - Order 2 on mobile, 1 on lg */}
                            <motion.div
                                className="space-y-6 order-2 lg:order-1"
                                initial={{ opacity: 0, x: -50 }}
                                animate={project1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            >
                                <div className="relative">
                                    {/* Large Golden Circle */}
                                    <motion.div
                                        className="w-64 h-64 lg:w-60 lg:h-60 rounded-full bg-gradient-to-t from-[#25262a] via-[#64f4ab] to-[#64f4ab] relative flex items-center justify-center mx-auto lg:mx-0"
                                        initial={{ x: -200, opacity: 0 }}
                                        animate={project1InView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    >
                                        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-[#2d2e32]"></div>
                                    </motion.div>
                                </div>

                                <div className="text-center text-white lg:text-left space-y-4">
                                    <h2 className="text-3xl lg:text-4xl font-bold font-heading">
                                        LawPlus Landing Page
                                    </h2>

                                    <p className=" leading-relaxed max-w-md mx-auto lg:mx-0">
                                        The world is evolving rapidly, and so is the way we solve problems. At LawPlus, we recognize that information is everywhere, but true value lies in expertise, judgment, and results. Our mission is to simplify complex legal issues and deliver practical solutions you can rely on.
                                    </p>

                                    <Link to="https://www.lawplusgh.com/">
                                        <button className="text-orange-400 hover:text-orange-300 font-medium flex items-center gap-2 mx-auto lg:mx-0 transition-colors">
                                            <span>→</span>
                                            Visit site
                                        </button></Link>
                                </div>
                            </motion.div>

                            {/* Project Mockups - Order 1 on mobile, 2 on lg */}
                            <motion.div
                                className="relative flex gap-4 order-1 lg:order-2"
                                initial={{ opacity: 0, x: 50 }}
                                animate={project1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                            >

                                {/* Mobile view - responsive phone image */}
                                <img src={phone} className="w-16 sm:w-20 md:w-24 lg:w-32 self-center flex-shrink-0" />
                                <img src={image} className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex-shrink-0" />
                            </motion.div>
                        </div>


                    </div>
                </section>

                <section ref={project2Ref} className="px-6 py-20 lg:px-12 ">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            {/* Project Mockups - Order 2 on mobile, 1 on lg */}
                            <motion.div
                                className="relative flex order-2 lg:order-1"
                                initial={{ opacity: 0, x: -50 }}
                                animate={project2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            >

                                {/* Main Restaurant Design Mockup */}
                                <img src={pos} className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl" />
                            </motion.div>

                            {/* Content - Order 1 on mobile, 2 on lg */}
                            <motion.div
                                className="space-y-6 order-1 lg:order-2"
                                initial={{ opacity: 0, x: 50 }}
                                animate={project2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                            >
                                <div className="relative">
                                    {/* Large Golden Circle */}
                                    <motion.div
                                        className="w-64 h-64 lg:w-60 lg:h-60 rounded-full bg-gradient-to-t from-[#25262a] via-[#FFAF29] to-[#FFAF29] relative flex items-center justify-center ml-auto"
                                        initial={{ x: 200, opacity: 0 }}
                                        animate={project2InView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    >
                                        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-[#2d2e32]"></div>
                                    </motion.div>
                                </div>

                                <div className="text-center text-white lg:text-left space-y-4">
                                    <h2 className="text-3xl lg:text-4xl font-bold font-heading">
                                        Point of Sale
                                    </h2>

                                    <p className=" leading-relaxed max-w-md mx-auto lg:mx-0">
                                        The world is evolving rapidly, and so is the way we solve problems. At LawPlus, we recognize that information is everywhere, but true value lies in expertise, judgment, and results. Our mission is to simplify complex legal issues and deliver practical solutions you can rely on.
                                    </p>

                                    <Link to="https://pos-online-rho.vercel.app/">
                                        <button className="text-orange-400 hover:text-orange-300 font-medium flex items-center gap-2 mx-auto lg:mx-0 transition-colors">
                                            <span>→</span>
                                            Visit site
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>


                <section ref={statsRef} className="px-4 py-16 sm:px-6 md:py-20 lg:px-12">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="flex flex-col sm:flex-row gap-2 sm:gap-4"
                            initial={{ opacity: 0, y: 50 }}
                            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="text-center flex flex-col justify-center bg-[#25262a] text-white shadow-sm rounded-t-3xl sm:rounded-tl-3xl sm:rounded-tr-none sm:rounded-bl-3xl p-8 sm:p-16 md:p-20 lg:p-24">
                                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-heading text-green-400 mb-2 sm:mb-3">20</h3>
                                <p className="text-sm sm:text-base">Happy Clients</p>
                            </div>
                            <div className="text-center flex flex-col justify-center bg-[#25262a] text-white shadow-sm p-8 sm:p-16 md:p-20 lg:p-24">
                                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-heading text-green-400 mb-2 sm:mb-3">10</h3>
                                <p className="text-sm sm:text-base">Projects Done</p>
                            </div>
                            <div className="text-center flex flex-col justify-center bg-[#25262a] text-white shadow-sm p-8 sm:p-16 md:p-20 lg:p-24">
                                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-heading text-green-400 mb-2 sm:mb-3">4+</h3>
                                <p className="text-sm sm:text-base">Years Experience</p>
                            </div>
                            <div className="text-center flex flex-col justify-center bg-[#25262a] text-white shadow-sm rounded-b-3xl sm:rounded-bl-none sm:rounded-tr-3xl sm:rounded-br-3xl p-8 sm:p-16 md:p-20 lg:p-24">
                                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-heading text-green-400 mb-2 sm:mb-3">100%</h3>
                                <p className="text-sm sm:text-base">Satisfaction</p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section ref={testimonialRef} className="px-4 py-16 sm:px-6 md:py-20 lg:px-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            {/* Left - Profile Image */}
                            <motion.div
                                className="flex justify-center lg:justify-start"
                                initial={
                                    currentTestimonial === 0
                                        ? { opacity: 0, rotateY: -180 }
                                        : currentTestimonial === 2
                                            ? { opacity: 0, y: 50 }
                                            : { opacity: 0, scale: 0.8 }
                                }
                                animate={
                                    testimonialInView
                                        ? currentTestimonial === 0
                                            ? { opacity: 1, rotateY: 0 }
                                            : currentTestimonial === 2
                                                ? { opacity: 1, y: 0 }
                                                : { opacity: 1, scale: 1 }
                                        : currentTestimonial === 0
                                            ? { opacity: 0, rotateY: -180 }
                                            : currentTestimonial === 2
                                                ? { opacity: 0, y: 50 }
                                                : { opacity: 0, scale: 0.8 }
                                }
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                key={currentTestimonial}
                            >
                                <div className="w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 bg-gray-300 rounded-3xl overflow-hidden mx-auto lg:mx-0">
                                    <img
                                        src={testimonials[currentTestimonial].image}
                                        alt={testimonials[currentTestimonial].name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>

                            {/* Right - Testimonial Content */}
                            <motion.div
                                className="space-y-6"
                                initial={
                                    currentTestimonial === 0
                                        ? { opacity: 0, rotateX: -90 }
                                        : currentTestimonial === 2
                                            ? { opacity: 0, y: 50 }
                                            : { opacity: 0, x: 50 }
                                }
                                animate={
                                    testimonialInView
                                        ? currentTestimonial === 0
                                            ? { opacity: 1, rotateX: 0 }
                                            : currentTestimonial === 2
                                                ? { opacity: 1, y: 0 }
                                                : { opacity: 1, x: 0 }
                                        : currentTestimonial === 0
                                            ? { opacity: 0, rotateX: -90 }
                                            : currentTestimonial === 2
                                                ? { opacity: 0, y: 50 }
                                                : { opacity: 0, x: 50 }
                                }
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                key={`content-${currentTestimonial}`}
                            >
                                {/* Quote Icon */}
                                <div className="text-6xl text-green-400">
                                    "
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed">
                                    {testimonials[currentTestimonial].text}
                                </p>

                                {/* Author Info */}
                                <div>
                                    <h4 className="text-green-400 font-semibold text-base sm:text-lg">{testimonials[currentTestimonial].name}</h4>
                                    <p className="text-gray-400 text-sm sm:text-base">{testimonials[currentTestimonial].role}</p>
                                </div>

                                {/* Navigation Dots */}
                                <div className="flex gap-3 pt-4">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentTestimonial(index)}
                                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentTestimonial ? 'bg-orange-400' : 'bg-gray-600 hover:bg-gray-500'
                                                }`}
                                            aria-label={`View testimonial ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                {/* Navigation Arrows */}
                                <div className="flex gap-4 pt-2">
                                    <button
                                        onClick={() => setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                                        className="text-green-400 hover:text-green-300 transition-colors duration-200"
                                        aria-label="Previous testimonial"
                                    >
                                        ← Previous
                                    </button>
                                    <button
                                        onClick={() => setCurrentTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
                                        className="text-green-400 hover:text-green-300 transition-colors duration-200"
                                        aria-label="Next testimonial"
                                    >
                                        Next →
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section ref={contactRef} className="px-4 py-16 sm:px-6 md:py-20 lg:px-12 relative overflow-hidden">
                    {/* Decorative Elements */}


                    <motion.div
                        className="max-w-6xl mx-auto text-center relative z-10 bg-[#25262a] rounded-3xl shadow-sm"
                        initial={{ opacity: 0, y: 50 }}
                        animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >

                        <div className="space-y-6 sm:space-y-8 py-12 sm:py-16 px-4 sm:px-6">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-heading">
                                Lets Work Together
                            </h2>

                            <p className="text-white text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                                Technology is changing how we live, work, and learn. As a software developer, I create simple, reliable, and user-friendly solutions. By working together, we can turn your ideas into real digital products that make an impact.
                            </p>

                            <Link to="/contact">
                            <button className="bg-[#FFAF29] hover:bg-[#e89d24] text-black font-medium px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-colors">
                                Contact Me
                            </button>
                            </Link>
                        </div>
                    </motion.div>
                </section>
            </div>
        </div>
    )
}
