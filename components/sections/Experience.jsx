"use client"

import { motion } from "framer-motion"
import { experience } from "@/lib/data"
import { Briefcase, Calendar } from "lucide-react"

export function Experience() {
    return (
        <section id="experience" className="pt-20 pb-10 md:pt-32 md:pb-16 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                        Experience
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-12">
                        {experience.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-8 md:pl-0"
                            >
                                {/* Timeline Line (Desktop) */}
                                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

                                <div className={`md:flex items-start justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Timeline Dot (Desktop) */}
                                    <div className="hidden md:block absolute left-1/2 top-0 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background" />

                                    {/* Content */}
                                    <div className="md:w-[calc(50%-2rem)] bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center gap-2 text-primary mb-2">
                                            <Briefcase className="w-4 h-4" />
                                            <span className="font-medium text-sm">{item.company}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-foreground mb-1">{item.role}</h3>

                                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                                            <Calendar className="w-4 h-4" />
                                            <span>{item.period}</span>
                                        </div>

                                        <p className="text-muted-foreground mb-4 leading-relaxed">
                                            {item.description}
                                        </p>

                                        <ul className="space-y-2 mb-4">
                                            {item.achievements.map((achievement, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {item.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Empty space for the other side of timeline */}
                                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
