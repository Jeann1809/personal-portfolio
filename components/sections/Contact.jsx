"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, Copy, Check, ArrowUpRight } from "lucide-react"

export function Contact() {
    const [copiedEmail, setCopiedEmail] = useState(false)
    const [copiedPhone, setCopiedPhone] = useState(false)

    const copyToClipboard = async (text, type) => {
        try {
            await navigator.clipboard.writeText(text)
            if (type === 'email') {
                setCopiedEmail(true)
                setTimeout(() => setCopiedEmail(false), 2000)
            } else {
                setCopiedPhone(true)
                setTimeout(() => setCopiedPhone(false), 2000)
            }
        } catch (err) {
            console.error('Failed to copy:', err)
        }
    }

    return (
        <section id="contact" className="pt-10 pb-20 md:pt-16 md:pb-32 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        I&apos;m always interested in new opportunities and exciting projects.
                        Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {/* Contact Methods */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground">Email</h3>
                                    <p className="text-sm text-muted-foreground">jalmario@ttu.edu</p>
                                </div>
                                <button
                                    onClick={() => copyToClipboard('jalmario@ttu.edu', 'email')}
                                    className="ml-auto p-2 hover:bg-accent rounded-full transition-colors"
                                    aria-label="Copy email"
                                >
                                    {copiedEmail ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
                                </button>
                            </div>
                        </div>

                        <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground">Phone</h3>
                                    <p className="text-sm text-muted-foreground">+1 806 559 8812</p>
                                </div>
                                <button
                                    onClick={() => copyToClipboard('+1 806 559 8812', 'phone')}
                                    className="ml-auto p-2 hover:bg-accent rounded-full transition-colors"
                                    aria-label="Copy phone number"
                                >
                                    {copiedPhone ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
                                </button>
                            </div>
                        </div>

                        <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <Linkedin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground">LinkedIn</h3>
                                    <p className="text-sm text-muted-foreground">Connect with me</p>
                                </div>
                                <a
                                    href="https://www.linkedin.com/in/jean-almario-7238301ab"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-auto p-2 hover:bg-accent rounded-full transition-colors"
                                >
                                    <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-card p-8 rounded-2xl border border-border shadow-lg"
                    >
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="How can I help you?"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
