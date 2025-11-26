"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Github, ExternalLink, Calendar, Youtube } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

export function ProjectModal({ project, isOpen, onClose }) {
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

    if (!isOpen || !project) return null

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
                    className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-accent transition-colors z-10"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="p-6 md:p-8">
                        <div className="mb-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                                    {project.category}
                                </span>
                                <span className="flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                                    <Calendar className="w-3 h-3" />
                                    {project.period}
                                </span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">{project.title}</h2>
                            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                        </div>

                        {/* Images Grid */}
                        {project.images && project.images.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {project.images.map((img, idx) => (
                                    <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border border-border">
                                        <Image
                                            src={img}
                                            alt={`${project.title} screenshot ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h3 className="font-bold text-lg mb-4">Key Features</h3>
                                <ul className="space-y-2">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-4">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {project.achievements && project.achievements.length > 0 && (
                                    <div className="mt-6">
                                        <h3 className="font-bold text-lg mb-4">Achievements</h3>
                                        <ul className="space-y-2">
                                            {project.achievements.map((achievement, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="mt-1.5 w-1.5 h-1.5 bg-accent-foreground rounded-full shrink-0" />
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                                >
                                    <Github className="w-4 h-4" />
                                    View Code
                                </a>
                            )}
                            {project.visitPage && (
                                <a
                                    href={project.visitPage}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors font-medium"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Live Demo
                                </a>
                            )}
                            {project.videoDemo && (
                                <a
                                    href={project.videoDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors font-medium"
                                >
                                    <Youtube className="w-4 h-4" />
                                    Watch Demo
                                </a>
                            )}
                            {project.githubFrontend && (
                                <a
                                    href={project.githubFrontend}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                                >
                                    <Github className="w-4 h-4" />
                                    Frontend Code
                                </a>
                            )}
                            {project.githubBackend && (
                                <a
                                    href={project.githubBackend}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                                >
                                    <Github className="w-4 h-4" />
                                    Backend Code
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}
