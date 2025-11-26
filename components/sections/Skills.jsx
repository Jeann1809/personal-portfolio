"use client"

import { motion } from "framer-motion"
import { skills } from "@/lib/data"

export function Skills() {
    // Group skills for better organization (optional, but good for display)
    // For now, we'll just display them as a cloud since the data is a flat array

    return (
        <section id="skills" className="pt-20 pb-10 md:pt-32 md:pb-16 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                        Skills & Technologies
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="px-6 py-3 bg-background border border-border rounded-full shadow-sm hover:shadow-md hover:border-primary/50 transition-all cursor-default"
                            >
                                <span className="font-medium text-foreground">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
