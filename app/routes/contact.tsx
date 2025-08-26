import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, ChevronDown, ChevronUp, CheckCircle, AlertCircle } from "lucide-react"
import { Form, useActionData, useNavigation } from "react-router"
import { submitContactForm } from "../actions/contact"

export const action = submitContactForm

export default function Contact() {
    const formRef = useRef(null)
    const formInView = useInView(formRef, { once: false, threshold: 0.2 })
    
    const contactRef = useRef(null)
    const contactInView = useInView(contactRef, { once: false, threshold: 0.2 })

    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
    const actionData = useActionData<typeof action>()
    const navigation = useNavigation()
    const isSubmitting = navigation.state === "submitting"


    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index)
    }

    const faqData = [
        {
            question: "What's your typical project timeline?",
            answer: "Project timelines vary depending on complexity, but most web projects take 2-6 weeks from start to finish. I'll provide a detailed timeline during our initial consultation."
        },
        {
            question: "Do you work with international clients?",
            answer: "Absolutely! I work with clients worldwide and am comfortable with different time zones. We can schedule meetings that work for both of us."
        },
        {
            question: "What technologies do you specialize in?",
            answer: "I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various databases. I stay current with the latest tools and best practices."
        },
        {
            question: "Do you provide ongoing support after project completion?",
            answer: "Yes! I offer ongoing maintenance and support packages to ensure your project continues to run smoothly and stays up-to-date with security patches and feature updates."
        }
    ]

    return (
        <div className="min-h-screen bg-[#25262a]">
            {/* Header Section */}
           

            <div className="bg-[#2d2e32] py-28">
                {/* Contact Information & Form Section */}
                <section className="px-6 py-20 lg:px-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Left - Contact Information */}
                            <motion.div
                                ref={contactRef}
                                className="space-y-8"
                                initial={{ opacity: 0, x: -50 }}
                                animate={contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            >
                                <div className="space-y-6">
                                    <h2 className="text-3xl lg:text-4xl font-bold font-heading text-white">
                                        Let's Start a Conversation
                                    </h2>
                                    <p className="text-gray-400 leading-relaxed">
                                        Ready to transform your ideas into reality? I'm here to help you build 
                                        innovative solutions that make a difference. Reach out and let's create 
                                        something amazing together.
                                    </p>
                                </div>

                                {/* Contact Details */}
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center">
                                            <Mail className="w-6 h-6 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold">Email</h3>
                                            <p className="text-gray-400">gyankwadwomends2001@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center">
                                            <Phone className="w-6 h-6 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold">Phone</h3>
                                            <p className="text-gray-400">+233 (0) 593 125 184</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center">
                                            <MapPin className="w-6 h-6 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold">Location</h3>
                                            <p className="text-gray-400">Accra, Ghana</p>
                                        </div>
                                    </div>
                                </div>

                                
                            </motion.div>

                            {/* Right - Contact Form */}
                            <motion.div
                                ref={formRef}
                                initial={{ opacity: 0, x: 50 }}
                                animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                            >
                                <div className="bg-[#25262a] rounded-3xl p-8 shadow-sm">
                                    {/* Status Message */}
                                    {actionData && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                                                actionData.success 
                                                    ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                                                    : 'bg-red-500/20 border border-red-500/30 text-red-300'
                                            }`}
                                        >
                                            {actionData.success ? (
                                                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                            ) : (
                                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                            )}
                                            <span className="text-sm font-medium">{actionData.message}</span>
                                        </motion.div>
                                    )}

                                    <Form method="post" className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-white font-medium mb-2">
                                                    Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    className="w-full px-4 py-3 bg-[#2d2e32] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-white font-medium mb-2">
                                                    Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    className="w-full px-4 py-3 bg-[#2d2e32] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                                                    placeholder="your.email@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-white font-medium mb-2">
                                                Subject *
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                required
                                                className="w-full px-4 py-3 bg-[#2d2e32] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                                                placeholder="What's this about?"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-white font-medium mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={6}
                                                required
                                                className="w-full px-4 py-3 bg-[#2d2e32] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors resize-none"
                                                placeholder="Tell me about your project or just say hello..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-[#FFAF29] hover:bg-[#e89d24] disabled:bg-gray-600 disabled:cursor-not-allowed text-black disabled:text-gray-400 font-medium px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                                        >
                                            <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </Form>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="px-6 py-20 lg:px-12">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-white mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-gray-400">
                                Quick answers to common questions about working together
                            </p>
                        </motion.div>

                        <div className="space-y-4">
                            {faqData.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                                    className="bg-[#25262a] rounded-2xl overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#25262a]/80 transition-colors duration-200"
                                    >
                                        <h3 className="text-white font-semibold text-lg pr-4">
                                            {faq.question}
                                        </h3>
                                        {openFaqIndex === index ? (
                                            <ChevronUp className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        )}
                                    </button>
                                    
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: openFaqIndex === index ? "auto" : 0,
                                            opacity: openFaqIndex === index ? 1 : 0
                                        }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-4">
                                            <p className="text-gray-400 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}