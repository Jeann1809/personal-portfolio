"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projects } from "@/lib/data"
import { ProjectModal } from "@/components/ui/ProjectModal"
import { ArrowUpRight } from "lucide-react"

export function Projects() {
    const [activeFilter, setActiveFilter] = useState("All")
    const [selectedProject, setSelectedProject] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const categories = ["All", ...new Set(projects.map((p) => p.category))]

    const categoryColors = {
        "AI/ML": "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800",
        "Web Development": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
        "Backend": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
        "Systems Programming": "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800",
        "default": "bg-primary/10 text-primary border-primary/20"
    }

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter((p) => p.category === activeFilter)

    const openModal = (project) => {
        setSelectedProject(project)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedProject(null)
    }

    return (
        <section id="projects" className="pt-10 pb-20 md:pt-16 md:pb-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />

                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category
                                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                onClick={() => openModal(project)}
                                className="group relative bg-card border border-border rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="p-6 md:p-8 h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className={`px-3 py-1 text-xs font-medium rounded-full border ${categoryColors[project.category] || categoryColors.default}`}>
                                            {project.category}
                                        </span>
                                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.techStack.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 3 && (
                                            <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium">
                                                +{project.techStack.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </section>
    )
}
