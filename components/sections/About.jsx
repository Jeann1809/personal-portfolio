"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function About() {
    return (
        <section id="about" className="py-20 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl">
                            <Image
                                src="/Jean.jpeg"
                                alt="Jean Almario"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-serif font-semibold mb-6 text-foreground">
                            Passionate about technology and innovation
                        </h3>
                        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                I am a Computer Science student at Texas Tech University with a strong interest in software development, web technologies, and machine learning. I have experience building full-stack applications, developing APIs, and working with multiple technologies.
                            </p>
                            <p>
                                I am passionate about solving problems, collaborating in team environments, and continuously learning new skills to expand my technical expertise. Beyond academics and projects, I stay active by playing soccer and going to the gym, always striving for balance and growth in both personal and professional aspects of my life.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="p-4 bg-background rounded-lg border border-border shadow-sm">
                                <h4 className="font-bold text-foreground text-xl mb-1">2027</h4>
                                <p className="text-sm text-muted-foreground">Expected Graduation</p>
                            </div>
                            <div className="p-4 bg-background rounded-lg border border-border shadow-sm">
                                <h4 className="font-bold text-foreground text-xl mb-1">3.8+</h4>
                                <p className="text-sm text-muted-foreground">GPA</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
