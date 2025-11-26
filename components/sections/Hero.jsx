"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
    const scrollToProjects = () => {
        const element = document.getElementById('projects')
        if (element) {
            const offset = 80
            const bodyRect = document.body.getBoundingClientRect().top
            const elementRect = element.getBoundingClientRect().top
            const elementPosition = elementRect - bodyRect
            const offsetPosition = elementPosition - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })
        }
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float delay-1000" />
            </div>

            <div className="container mx-auto px-4 md:px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    <h2 className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide mb-2">
                        Hello, I&apos;m
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-foreground mb-6">
                        Jean Almario
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
                        Computer Science Student & <span className="text-foreground font-medium">Full Stack Developer</span>
                        <br className="hidden md:block" />
                        passionate about building solutions that matter.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                >
                    <button
                        onClick={scrollToProjects}
                        className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary-foreground bg-primary rounded-full overflow-hidden transition-all hover:shadow-lg hover:scale-105"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View My Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>

                    <Link
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-foreground bg-background border border-border rounded-full hover:bg-accent transition-all hover:scale-105"
                    >
                        Contact Me
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center justify-center gap-6 text-muted-foreground"
                >
                    <a
                        href="https://github.com/Jeann1809"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground hover:scale-110 transition-all"
                        aria-label="GitHub"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jean-almario-7238301ab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground hover:scale-110 transition-all"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                        href="mailto:jalmario@ttu.edu"
                        className="hover:text-foreground hover:scale-110 transition-all"
                        aria-label="Email"
                    >
                        <Mail className="w-6 h-6" />
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-muted-foreground rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    )
}
