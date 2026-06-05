"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Briefcase, Calendar } from "lucide-react"
import { useEffect } from "react"

export function ExperienceModal({ item, isOpen, onClose }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    if (!isOpen || !item) return null

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-accent transition-colors z-10"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="p-6 md:p-8">
                        <div className="mb-6">
                            <div className="flex items-center gap-2 text-primary mb-2">
                                <Briefcase className="w-4 h-4" />
                                <span className="font-medium text-sm">{item.company}</span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
                                {item.role}
                            </h2>

                            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                                <Calendar className="w-4 h-4" />
                                <span>{item.period}</span>
                            </div>

                            <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-bold text-lg mb-3">Highlights</h3>
                            <ul className="space-y-3">
                                {item.achievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-3">Tech Stack</h3>
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
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}
