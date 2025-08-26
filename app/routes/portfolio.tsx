import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Link } from "react-router"
import image from "../components/images/Macbook-Air-www.lawplusgh.com.png"
import phone from "../components/images/iPhone-13-PRO-www.lawplusgh.com.png"
import pos from "../components/images/Macbook-Air-pos-online-rho.vercel.app.png"
import dotty from "../components/images/Macbook-Air-dottycoaching.com.png"
import dottyphone from "../components/images/iPhone-14-Plus-dottycoaching.com.png"
import addentech from "../components/images/Macbook-Air-www.addentech.com.png"
import addentechv2 from "../components/images/Macbook-Air-addentech-v2.vercel.app.png"
import svd from "../components/images/Macbook-Air-svd.dennislawgh.com.png"
import svdphone from "../components/images/iPhone-13-PRO-svd.dennislawgh.com.png"
import cstsghana from "../components/images/Macbook-Air-www.cstsghana.com.png"
import cstsghanapphone from "../components/images/iPhone-14-Plus-www.cstsghana.com.png"
import incrediblewomen from "../components/images/Macbook-Air-incrediblewomenofsubstance.com.png"
import incrediblewomenphone from "../components/images/iPhone-14-Plus-incrediblewomenofsubstance.com.png"

export default function Portfolio() {
    const project1Ref = useRef(null)
    const project1InView = useInView(project1Ref, { once: false, threshold: 0.2 })
    
    const project2Ref = useRef(null)
    const project2InView = useInView(project2Ref, { once: false, threshold: 0.2 })
    
    const project3Ref = useRef(null)
    const project3InView = useInView(project3Ref, { once: false, threshold: 0.2 })
    
    const project4Ref = useRef(null)
    const project4InView = useInView(project4Ref, { once: false, threshold: 0.2 })
    
    const project5Ref = useRef(null)
    const project5InView = useInView(project5Ref, { once: false, threshold: 0.2 })
    
    const project6Ref = useRef(null)
    const project6InView = useInView(project6Ref, { once: false, threshold: 0.2 })
    
    const project7Ref = useRef(null)
    const project7InView = useInView(project7Ref, { once: false, threshold: 0.2 })
    
    const project8Ref = useRef(null)
    const project8InView = useInView(project8Ref, { once: false, threshold: 0.2 })

    const projects = [
        {
            id: 1,
            title: "LawPlus Ghana",
            description: "The world is evolving rapidly, and so is the way we solve problems. At LawPlus, we recognize that information is everywhere, but true value lies in expertise, judgment, and results. Our mission is to simplify complex legal issues and deliver practical solutions you can rely on.",
            images: { laptop: image, phone: phone },
            link: "https://lawplusgh.com",
            circleColor: "from-[#25262a] via-[#64f4ab] to-[#64f4ab]",
            layout: "imageRight"
        },
        {
            id: 2,
            title: "Point of Sale System",
            description: "A comprehensive point of sale system designed for modern businesses. Features include inventory management, sales tracking, customer management, and detailed analytics. Built with scalability and ease of use in mind.",
            images: { laptop: pos },
            link: "https://pos-online-rho.vercel.app",
            circleColor: "from-[#25262a] via-[#FFAF29] to-[#FFAF29]",
            layout: "imageLeft"
        },
        {
            id: 3,
            title: "Dotty Coaching Platform",
            description: "A comprehensive coaching platform designed to empower individuals and organizations. Features include personalized coaching programs, progress tracking, resource libraries, and interactive workshops for personal development.",
            images: { laptop: dotty, phone: dottyphone },
            link: "https://dottycoaching.com",
            circleColor: "from-[#25262a] via-[#64f4ab] to-[#64f4ab]",
            layout: "imageRight"
        },
        {
            id: 4,
            title: "AddeTech Solutions",
            description: "A comprehensive technology solutions platform offering web development, mobile applications, and digital transformation services. Features modern design, responsive layouts, and cutting-edge technology implementations for businesses of all sizes.",
            images: { laptop: addentech },
            link: "https://www.addentech.com",
            circleColor: "from-[#25262a] via-[#3b82f6] to-[#3b82f6]",
            layout: "imageLeft"
        },
        {
            id: 5,
            title: "SVD Law Firm",
            description: "A professional legal services platform for SVD Law Firm. Features comprehensive legal consultation services, case management, client portal, and legal resource center. Built to provide seamless communication between lawyers and clients.",
            images: { laptop: svd, phone: svdphone },
            link: "https://svd.dennislawgh.com",
            circleColor: "from-[#25262a] via-[#10b981] to-[#10b981]",
            layout: "imageRight"
        },
        {
            id: 6,
            title: "CSTS Ghana",
            description: "A comprehensive educational platform for CSTS Ghana. Features course management, student enrollment, academic resources, and administrative tools. Designed to streamline educational processes and enhance learning experiences.",
            images: { laptop: cstsghana, phone: cstsghanapphone },
            link: "https://www.cstsghana.com",
            circleColor: "from-[#25262a] via-[#f59e0b] to-[#f59e0b]",
            layout: "imageLeft"
        },
        {
            id: 7,
            title: "Incredible Women of Substance",
            description: "An inspiring platform celebrating and empowering women of substance. Features success stories, mentorship programs, networking opportunities, and resources for personal and professional development. Built to connect and uplift women across various industries.",
            images: { laptop: incrediblewomen, phone: incrediblewomenphone },
            link: "https://incrediblewomenofsubstance.com",
            circleColor: "from-[#25262a] via-[#ec4899] to-[#ec4899]",
            layout: "imageRight"
        },
        {
            id: 8,
            title: "AddeTech Solutions v2",
            description: "The evolved version of AddeTech Solutions platform featuring enhanced user experience, advanced service offerings, and modern design patterns. Includes improved performance, mobile responsiveness, and comprehensive digital solution showcases.",
            images: { laptop: addentechv2 },
            link: "https://addentech-v2.vercel.app",
            circleColor: "from-[#25262a] via-[#8b5cf6] to-[#8b5cf6]",
            layout: "imageLeft"
        }
    ]

    return (
        <div className="min-h-screen bg-[#25262a] overflow-x-hidden w-full max-w-full">
           

            <div className="bg-[#2d2e32] overflow-x-hidden w-full max-w-full">
                {/* Project 1 */}
                <section ref={project1Ref} className="px-6 py-20 lg:px-12 overflow-hidden">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full max-w-full">
                            {/* Content - Order 2 on mobile, 1 on lg */}
                            <motion.div
                                className="space-y-6 w-full max-w-full order-2 lg:order-1"
                                initial={{ opacity: 0, x: -50 }}
                                animate={project1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            >
                                <div className="relative">
                                    {/* Large Circle */}
                                    <motion.div
                                        className={`w-64 h-64 lg:w-60 lg:h-60 rounded-full bg-gradient-to-t ${projects[0].circleColor} relative flex items-center justify-center mx-auto lg:mx-0`}
                                        initial={{ x: -200, opacity: 0 }}
                                        animate={project1InView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    >
                                        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-[#2d2e32]"></div>
                                    </motion.div>
                                </div>

                                <div className="text-center text-white lg:text-left space-y-4">
                                    <h2 className="text-3xl lg:text-4xl font-bold font-heading">
                                        {projects[0].title}
                                    </h2>

                                    <p className="leading-relaxed max-w-md mx-auto lg:mx-0">
                                        {projects[0].description}
                                    </p>

                                    <Link to={projects[0].link} target="_blank" rel="noopener noreferrer">
                                        <button className="text-orange-400 hover:text-orange-300 font-medium flex items-center gap-2 mx-auto lg:mx-0 transition-colors">
                                            <span>→</span>
                                            Visit site
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Project Mockups - Order 1 on mobile, 2 on lg */}
                            <motion.div
                                className="relative flex gap-4 w-full max-w-full overflow-hidden order-1 lg:order-2"
                                initial={{ opacity: 0, x: 50 }}
                                animate={project1InView ? { 
                                    opacity: 1, 
                                    x: 0,
                                    rotate: [0, -0.5, 0.5, -0.5, 0],
                                    scale: [1, 1.01, 1]
                                } : { opacity: 0, x: 50 }}
                                transition={{ 
                                    duration: 0.7, 
                                    ease: "easeOut", 
                                    delay: 0.2,
                                    rotate: { duration: 0.5, delay: 0.4 },
                                    scale: { duration: 0.3, delay: 0.4 }
                                }}
                            >
                                {projects[0].images.phone && (
                                    <img src={projects[0].images.phone} className="w-12 sm:w-16 md:w-20 lg:w-24 self-center flex-shrink-0" alt={`${projects[0].title} mobile view`} />
                                )}
                                <img src={projects[0].images.laptop} className="w-full max-w-xs sm:max-w-sm md:max-w-md flex-shrink-0" alt={`${projects[0].title} desktop view`} />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Project 2 */}
                <section ref={project2Ref} className="px-6 py-20 lg:px-12 overflow-hidden">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-full">
                            {/* Project Mockups - Order 2 on mobile, 1 on lg */}
                            <motion.div
                                className="relative flex w-full max-w-full overflow-hidden order-2 lg:order-1"
                                initial={{ opacity: 0, x: -50 }}
                                animate={project2InView ? { 
                                    opacity: 1, 
                                    x: 0,
                                    rotate: [0, 0.5, -0.5, 0.5, 0],
                                    scale: [1, 1.01, 1]
                                } : { opacity: 0, x: -50 }}
                                transition={{ 
                                    duration: 0.7, 
                                    ease: "easeOut",
                                    rotate: { duration: 0.6, delay: 0.3 },
                                    scale: { duration: 0.4, delay: 0.3 }
                                }}
                            >
                                <img src={projects[1].images.laptop} className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl" alt={`${projects[1].title} desktop view`} />
                            </motion.div>

                            {/* Content - Order 1 on mobile, 2 on lg */}
                            <motion.div
                                className="space-y-6 order-1 lg:order-2"
                                initial={{ opacity: 0, x: 50 }}
                                animate={project2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                            >
                                <div className="relative">
                                    {/* Large Circle */}
                                    <motion.div
                                        className={`w-64 h-64 lg:w-60 lg:h-60 rounded-full bg-gradient-to-t ${projects[1].circleColor} relative flex items-center justify-center ml-auto`}
                                        initial={{ x: 200, opacity: 0 }}
                                        animate={project2InView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    >
                                        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-[#2d2e32]"></div>
                                    </motion.div>
                                </div>

                                <div className="text-center text-white lg:text-left space-y-4">
                                    <h2 className="text-3xl lg:text-4xl font-bold font-heading">
                                        {projects[1].title}
                                    </h2>

                                    <p className="leading-relaxed max-w-md mx-auto lg:mx-0">
                                        {projects[1].description}
                                    </p>

                                    <Link to={projects[1].link} target="_blank" rel="noopener noreferrer">
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

                {/* Project 3 */}
                <section ref={project3Ref} className="px-6 py-20 lg:px-12 overflow-hidden">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full max-w-full">
                            {/* Content - Order 2 on mobile, 1 on lg */}
                            <motion.div
                                className="space-y-6 order-2 lg:order-1"
                                initial={{ opacity: 0, x: -50 }}
                                animate={project3InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            >
                                <div className="relative">
                                    {/* Large Circle */}
                                    <motion.div
                                        className={`w-64 h-64 lg:w-60 lg:h-60 rounded-full bg-gradient-to-t ${projects[2].circleColor} relative flex items-center justify-center mx-auto lg:mx-0`}
                                        initial={{ x: -200, opacity: 0 }}
                                        animate={project3InView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    >
                                        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-[#2d2e32]"></div>
                                    </motion.div>
                                </div>

                                <div className="text-center text-white lg:text-left space-y-4">
                                    <h2 className="text-3xl lg:text-4xl font-bold font-heading">
                                        {projects[2].title}
                                    </h2>

                                    <p className="leading-relaxed max-w-md mx-auto lg:mx-0">
                                        {projects[2].description}
                                    </p>

                                    <Link to={projects[2].link} target="_blank" rel="noopener noreferrer">
                                        <button className="text-orange-400 hover:text-orange-300 font-medium flex items-center gap-2 mx-auto lg:mx-0 transition-colors">
                                            <span>→</span>
                                            View project
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Project Mockups - Order 1 on mobile, 2 on lg */}
                            <motion.div
                                className="relative flex gap-4 w-full max-w-full overflow-hidden order-1 lg:order-2"
                                initial={{ opacity: 0, x: 50 }}
                                animate={project3InView ? { 
                                    opacity: 1, 
                                    x: 0,
                                    rotate: [0, -1, 1, -0.5, 0],
                                    scale: [1, 1.02, 1],
                                    y: [0, -2, 2, 0]
                                } : { opacity: 0, x: 50 }}
                                transition={{ 
                                    duration: 0.7, 
                                    ease: "easeOut", 
                                    delay: 0.2,
                                    rotate: { duration: 0.8, delay: 0.5 },
                                    scale: { duration: 0.5, delay: 0.5 },
                                    y: { duration: 0.6, delay: 0.5 }
                                }}
                            >
                                {projects[2].images.phone && (
                                    <img src={projects[2].images.phone} className="w-12 sm:w-16 md:w-20 lg:w-24 self-center flex-shrink-0" alt={`${projects[2].title} mobile view`} />
                                )}
                                <img src={projects[2].images.laptop} className="w-full max-w-xs sm:max-w-sm md:max-w-md flex-shrink-0" alt={`${projects[2].title} desktop view`} />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Project 4 */}
                <section ref={project4Ref} className="px-6 py-20 lg:px-12 overflow-hidden">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-full">
                            {/* Project Mockups - Order 2 on mobile, 1 on lg */}
                            <motion.div
                                className="relative flex w-full max-w-full overflow-hidden order-2 lg:order-1"
                                initial={{ opacity: 0, x: -50 }}
                                animate={project4InView ? { 
                                    opacity: 1, 
                                    x: 0,
                                    rotate: [0, -0.5, 0.5, -0.5, 0],
                                    scale: [1, 1.01, 1]
                                } : { opacity: 0, x: -50 }}
                                transition={{ 
                                    duration: 0.7, 
                                    ease: "easeOut",
                                    rotate: { duration: 0.7, delay: 0.4 },
                                    scale: { duration: 0.4, delay: 0.4 }
                                }}
                            >
                                <img src={projects[3].images.laptop} className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl" alt={`${projects[3].title} desktop view`} />
                            </motion.div>

                            {/* Content - Order 1 on mobile, 2 on lg */}
                            <motion.div
                                className="space-y-6 order-1 lg:order-2"
                                initial={{ opacity: 0, x: 50 }}
                                animate={project4InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                            >
                                <div className="relative">
                                    {/* Large Circle */}
                                    <motion.div
                                        className={`w-64 h-64 lg:w-60 lg:h-60 rounded-full bg-gradient-to-t ${projects[3].circleColor} relative flex items-center justify-center ml-auto`}
                                        initial={{ x: 200, opacity: 0 }}
                                        animate={project4InView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    >
                                        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-[#2d2e32]"></div>
                                    </motion.div>
                                </div>

                                <div className="text-center text-white lg:text-left space-y-4">
                                    <h2 className="text-3xl lg:text-4xl font-bold font-heading">
                                        {projects[3].title}
                                    </h2>

                                    <p className="leading-relaxed max-w-md mx-auto lg:mx-0">
                                        {projects[3].description}
                                    </p>

                                    <Link to={projects[3].link} target="_blank" rel="noopener noreferrer">
                                        <button className="text-orange-400 hover:text-orange-300 font-medium flex items-center gap-2 mx-auto lg:mx-0 transition-colors">
                                            <span>→</span>
                                            View project
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Project 5 */}
                <section ref={project5Ref} className="px-6 py-20 lg:px-12 overflow-hidden">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full max-w-full">
                            {/* Content - Order 2 on mobile, 1 on lg */}
                            <motion.div
                                className="space-y-6 order-2 lg:order-1"
                                initial={{ opacity: 0, x: -50 }}
                                animate={project5InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            >
                                <div className="relative">
                                    {/* Large Circle */}
                                    <motion.div
                                        className={`w-64 h-64 lg:w-60 lg:h-60 rounded-full bg-gradient-to-t ${projects[4].circleColor} relative flex items-center justify-center mx-auto lg:mx-0`}
                                        initial={{ x: -200, opacity: 0 }}
                                        animate={project5InView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    >
                                        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-[#2d2e32]"></div>
                                    </motion.div>
                                </div>

                                <div className="text-center text-white lg:text-left space-y-4">
                                    <h2 className="text-3xl lg:text-4xl font-bold font-heading">
                                        {projects[4].title}
                                    </h2>

                                    <p className="leading-relaxed max-w-md mx-auto lg:mx-0">
                                        {projects[4].description}
                                    </p>

                                    <Link to={projects[4].link} target="_blank" rel="noopener noreferrer">
                                        <button className="text-orange-400 hover:text-orange-300 font-medium flex items-center gap-2 mx-auto lg:mx-0 transition-colors">
                                            <span>→</span>
                                            View project
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Project Mockups - Order 1 on mobile, 2 on lg */}
                            <motion.div
                                className="relative flex gap-4 w-full max-w-full overflow-hidden order-1 lg:order-2"
                                initial={{ opacity: 0, x: 50 }}
                                animate={project5InView ? { 
                                    opacity: 1, 
                                    x: 0,
                                    rotate: [0, 1, -1, 0.5, 0],
                                    scale: [1, 1.02, 1],
                                    y: [0, -3, 3, -1, 0]
                                } : { opacity: 0, x: 50 }}
                                transition={{ 
                                    duration: 0.7, 
                                    ease: "easeOut", 
                                    delay: 0.2,
                                    rotate: { duration: 0.9, delay: 0.6 },
                                    scale: { duration: 0.6, delay: 0.6 },
                                    y: { duration: 0.8, delay: 0.6 }
                                }}
                            >
                                {projects[4].images.phone && (
                                    <img src={projects[4].images.phone} className="w-12 sm:w-16 md:w-20 lg:w-24 self-center flex-shrink-0" alt={`${projects[4].title} mobile view`} />
                                )}
                                <img src={projects[4].images.laptop} className="w-full max-w-xs sm:max-w-sm md:max-w-md flex-shrink-0" alt={`${projects[4].title} desktop view`} />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Project 6 */}
                <section ref={project6Ref} className="px-6 py-20 lg:px-12 overflow-hidden">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-full">
                            {/* Project Mockups - Order 2 on mobile, 1 on lg */}
                            <motion.div
                                className="relative flex w-full max-w-full overflow-hidden order-2 lg:order-1"
                                initial={{ opacity: 0, x: -50 }}
                                animate={project6InView ? { 
                                    opacity: 1, 
                                    x: 0,
                                    rotate: [0, -1, 1, -0.5, 0],
                                    scale: [1, 1.02, 1]
                                } : { opacity: 0, x: -50 }}
                                transition={{ 
                                    duration: 0.7, 
                                    ease: "easeOut",
                                    rotate: { duration: 1, delay: 0.5 },
                                    scale: { duration: 0.7, delay: 0.5 },
                                    x: { duration: 0.8, delay: 0.5 }
                                }}
                            >
                                <img src={projects[5].images.laptop} className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl" alt={`${projects[5].title} desktop view`} />
                            </motion.div>

                            {/* Content - Order 1 on mobile, 2 on lg */}
                            <motion.div
                                className="space-y-6 order-1 lg:order-2"
                                initial={{ opacity: 0, x: 50 }}
                                animate={project6InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                            >
                                <div className="relative">
                                    {/* Large Circle */}
                                    <motion.div
                                        className={`w-64 h-64 lg:w-60 lg:h-60 rounded-full bg-gradient-to-t ${projects[5].circleColor} relative flex items-center justify-center ml-auto`}
                                        initial={{ x: 200, opacity: 0 }}
                                        animate={project6InView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    >
                                        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-[#2d2e32]"></div>
                                    </motion.div>
                                </div>

                                <div className="text-center text-white lg:text-left space-y-4">
                                    <h2 className="text-3xl lg:text-4xl font-bold font-heading">
                                        {projects[5].title}
                                    </h2>

                                    <p className="leading-relaxed max-w-md mx-auto lg:mx-0">
                                        {projects[5].description}
                                    </p>

                                    <Link to={projects[5].link} target="_blank" rel="noopener noreferrer">
                                        <button className="text-orange-400 hover:text-orange-300 font-medium flex items-center gap-2 mx-auto lg:mx-0 transition-colors">
                                            <span>→</span>
                                            View project
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Project 7 */}
                <section ref={project7Ref} className="px-6 py-20 lg:px-12 overflow-hidden">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full max-w-full">
                            {/* Content - Order 2 on mobile, 1 on lg */}
                            <motion.div
                                className="space-y-6 order-2 lg:order-1"
                                initial={{ opacity: 0, x: -50 }}
                                animate={project7InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            >
                                <div className="relative">
                                    {/* Large Circle */}
                                    <motion.div
                                        className={`w-64 h-64 lg:w-60 lg:h-60 rounded-full bg-gradient-to-t ${projects[6].circleColor} relative flex items-center justify-center mx-auto lg:mx-0`}
                                        initial={{ x: -200, opacity: 0 }}
                                        animate={project7InView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    >
                                        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-[#2d2e32]"></div>
                                    </motion.div>
                                </div>

                                <div className="text-center text-white lg:text-left space-y-4">
                                    <h2 className="text-3xl lg:text-4xl font-bold font-heading">
                                        {projects[6].title}
                                    </h2>

                                    <p className="leading-relaxed max-w-md mx-auto lg:mx-0">
                                        {projects[6].description}
                                    </p>

                                    <Link to={projects[6].link} target="_blank" rel="noopener noreferrer">
                                        <button className="text-orange-400 hover:text-orange-300 font-medium flex items-center gap-2 mx-auto lg:mx-0 transition-colors">
                                            <span>→</span>
                                            Visit site
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Project Mockups - Order 1 on mobile, 2 on lg */}
                            <motion.div
                                className="relative flex gap-4 w-full max-w-full overflow-hidden order-1 lg:order-2"
                                initial={{ opacity: 0, x: 50 }}
                                animate={project7InView ? { 
                                    opacity: 1, 
                                    x: 0,
                                    rotate: [0, -1, 1, -0.5, 0],
                                    scale: [1, 1.02, 1],
                                    y: [0, -2, 2, -1, 0]
                                } : { opacity: 0, x: 50 }}
                                transition={{ 
                                    duration: 0.7, 
                                    ease: "easeOut", 
                                    delay: 0.2,
                                    rotate: { duration: 0.8, delay: 0.4 },
                                    scale: { duration: 0.5, delay: 0.4 },
                                    y: { duration: 0.7, delay: 0.4 }
                                }}
                            >
                                {projects[6].images.phone && (
                                    <img src={projects[6].images.phone} className="w-12 sm:w-16 md:w-20 lg:w-24 self-center flex-shrink-0" alt={`${projects[6].title} mobile view`} />
                                )}
                                <img src={projects[6].images.laptop} className="w-full max-w-xs sm:max-w-sm md:max-w-md flex-shrink-0" alt={`${projects[6].title} desktop view`} />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Project 8 */}
                <section ref={project8Ref} className="px-6 py-20 lg:px-12 overflow-hidden">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-full">
                            {/* Project Mockups - Order 2 on mobile, 1 on lg */}
                            <motion.div
                                className="relative flex w-full max-w-full overflow-hidden order-2 lg:order-1"
                                initial={{ opacity: 0, x: -50 }}
                                animate={project8InView ? { 
                                    opacity: 1, 
                                    x: 0,
                                    rotate: [0, -1, 1, -0.5, 0],
                                    scale: [1, 1.02, 1]
                                } : { opacity: 0, x: -50 }}
                                transition={{ 
                                    duration: 0.7, 
                                    ease: "easeOut",
                                    rotate: { duration: 0.9, delay: 0.6 },
                                    scale: { duration: 0.6, delay: 0.6 },
                                    x: { duration: 0.7, delay: 0.6 }
                                }}
                            >
                                <img src={projects[7].images.laptop} className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl" alt={`${projects[7].title} desktop view`} />
                            </motion.div>

                            {/* Content - Order 1 on mobile, 2 on lg */}
                            <motion.div
                                className="space-y-6 order-1 lg:order-2"
                                initial={{ opacity: 0, x: 50 }}
                                animate={project8InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                            >
                                <div className="relative">
                                    {/* Large Circle */}
                                    <motion.div
                                        className={`w-64 h-64 lg:w-60 lg:h-60 rounded-full bg-gradient-to-t ${projects[7].circleColor} relative flex items-center justify-center ml-auto`}
                                        initial={{ x: 200, opacity: 0 }}
                                        animate={project8InView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    >
                                        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-[#2d2e32]"></div>
                                    </motion.div>
                                </div>

                                <div className="text-center text-white lg:text-left space-y-4">
                                    <h2 className="text-3xl lg:text-4xl font-bold font-heading">
                                        {projects[7].title}
                                    </h2>

                                    <p className="leading-relaxed max-w-md mx-auto lg:mx-0">
                                        {projects[7].description}
                                    </p>

                                    <Link to={projects[7].link} target="_blank" rel="noopener noreferrer">
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

                {/* Contact CTA Section */}
                <section className="px-6 py-20 lg:px-12">
                    <motion.div
                        className="max-w-6xl mx-auto text-center bg-[#25262a] rounded-3xl shadow-sm"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="space-y-8 py-16">
                            <h2 className="text-4xl lg:text-3xl font-bold text-white font-heading">
                                Like What You See?
                            </h2>

                            <p className="text-white max-w-2xl mx-auto leading-relaxed">
                                Ready to bring your ideas to life? Let's collaborate and create something amazing together. 
                                I'm always excited to work on new projects and challenges.
                            </p>

                            <Link to="/contact">
                                <button className="bg-[#FFAF29] hover:bg-[#e89d24] text-black font-medium px-8 py-4 rounded-lg transition-colors">
                                    Start a Project
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </section>
            </div>
        </div>
    )
}