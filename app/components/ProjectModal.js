'use client'

import { useState } from 'react'

export default function ProjectModal({ project, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!isOpen || !project) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-elegant font-bold text-charcoal mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 font-sans">{project.period}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              ×
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Image Carousel */}
          {project.images && project.images.length > 0 && (
            <div className="mb-8">
              <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-auto max-h-96 object-contain"
                />
                
                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-charcoal p-2 rounded-full shadow-lg transition-all"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-charcoal p-2 rounded-full shadow-lg transition-all"
                    >
                      →
                    </button>
                  </>
                )}
                
                {/* Image Indicators */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex 
                            ? 'bg-charcoal' 
                            : 'bg-white/60 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Left Column */}
            <div>
              <h3 className="text-xl font-elegant font-semibold text-charcoal mb-4">
                Project Overview
              </h3>
              <p className="text-gray-600 font-sans leading-relaxed mb-4">
                {project.description}
              </p>
              
              <h4 className="text-lg font-elegant font-semibold text-charcoal mb-3">
                Key Features
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-charcoal mt-1">•</span>
                    <span className="text-gray-600 font-sans">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-xl font-elegant font-semibold text-charcoal mb-4">
                Technical Details
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-sans font-medium text-charcoal mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-xs bg-charcoal/10 text-charcoal px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.achievements && (
                  <div>
                    <h4 className="font-sans font-medium text-charcoal mb-2">Achievements</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, index) => (
                        <li key={index} className="text-sm text-gray-600 font-sans">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-elegant font-semibold text-charcoal mb-4">
              Project Links
            </h3>
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-charcoal text-white px-6 py-3 rounded-lg hover:bg-soft-black transition-colors"
                >
                  <span>📁</span>
                  <span>View on GitHub</span>
                </a>
              )}
              
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <span>🌐</span>
                  <span>Live Demo</span>
                </a>
              )}

              {project.visitPage && (
                <a
                  href={project.visitPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <span>🌐</span>
                  <span>Visit Project</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
