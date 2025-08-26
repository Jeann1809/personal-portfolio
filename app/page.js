'use client'

import { useEffect, useState } from 'react'
import ProjectModal from './components/ProjectModal'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Project data
  const projects = [
    {
      id: 1,
      title: 'Full-Stack E-Commerce',
      period: 'January 2025 - Present',
      description: 'Developed and deployed a production-ready MERN/Next.js e-commerce platform with JWT authentication, role-based access, and payment integration. Built RESTful API for products, users, carts, and orders, and implemented an admin dashboard with search, filtering, and performance optimizations, achieving 20+ live sales.',
      techStack: ['RESTful API', 'Next.js', 'JWT authentication','MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Stripe'],
      features: [
        'Role-based access control (Admin/Customer)',
        'JWT authentication and authorization',
        'Product catalog with search and filters',
        'Shopping cart and checkout system',
        'Payment integration with Stripe',
        'Admin dashboard for inventory management',
        'Order tracking and management'
      ],
      achievements: [
        '20+ completed sales on live site',
        'Optimized frontend bundle and API caching',
        'Improved page load performance'
      ],
      images: [
        '/ecommerce-1.jpg',
        '/ecommerce-2.jpg',
        '/ecommerce-3.jpg'
      ],
      github: 'https://github.com/yourusername/ecommerce-app',
      liveDemo: 'https://your-ecommerce-app.com'
    },
    {
      id: 2,
      title: 'Wine Quality Prediction',
      period: 'December 2023 - January 2024',
      description: 'Built a machine learning model in Python to classify wine quality using chemical features. Implemented logistic regression with gradient descent, performed EDA and preprocessing, and evaluated performance with scikit-learn metrics, achieving 76% accuracy and 0.77 F1-score.',
      techStack: ['Python', 'Logistic regression', 'Pandas', 'scikit-learn', 'Matplotlib', 'EDA', 'Data preprocessing', 'Model evaluation'],
      features: [
        'Logistic regression implementation from scratch',
        'Gradient descent optimization',
        'Exploratory data analysis and visualization',
        'Data normalization and preprocessing',
        'Train/test split and cross-validation',
        'Comprehensive model evaluation metrics'
      ],
      achievements: [
        '76% accuracy on test set',
        '78% precision score',
        '0.77 F1-score'
      ],
      images: [
        'https://i.imgur.com/bt20gKP.png',
        'https://i.imgur.com/5v8L5ed.png',
        'https://i.imgur.com/yTk4U11.png',
        'https://i.imgur.com/6wd0Rbw.png',
        'https://i.imgur.com/AxPWr1Q.png',
        'https://i.imgur.com/xZP98a2.png'
      ],
      github: 'https://github.com/Jeann1809/Wine-Quality-Predictor'
    },
    {
      id: 3,
      title: 'Web Developer Intern',
      period: 'May 2024 - July 2024',
      description: 'Contributed to the company\'s platform by developing responsive Angular frontend features and building a Node.js/Express backend module to automate PDF-to-Excel reporting. Improved operational efficiency and collaborated in an Agile team using Git and code reviews to deliver production-ready solutions.',
      techStack: ['Angular', 'Node.js', 'Express.js', 'Git', 'Agile', 'PDF-to-Excel', 'Excel file generation', 'Responsive web design', 'Git version control', 'Code reviews'],
      features: [
        'Frontend development with Angular',
        'Backend API development with Node.js/Express',
        'PDF data extraction and automation',
        'Excel file generation and formatting',
        'Responsive web design implementation',
        'Git version control and collaboration'
      ],
      achievements: [
        'Reduced manual reporting time through automation',
        'Collaborated with team of 4+ developers',
        'Delivered production-ready features'
      ],
      images: [
        'https://i.imgur.com/EyRlqSc.png',
        'https://i.imgur.com/BV0tqeu.png',
        'https://i.imgur.com/4lZ5JTB.png',
        'https://i.imgur.com/CIjnFIR.png'
      ],
      visitPage: 'https://hse-colombia.com'
    }
  ]

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const scrollToContact = () => {
    document.getElementById('contact-section').scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  const scrollToProjects = () => {
    document.getElementById('projects-section').scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText('jalmario@ttu.edu')
      // Show visual feedback
      const button = document.querySelector('[data-email-button]')
      if (button) {
        const originalText = button.querySelector('.email-text').textContent
        button.querySelector('.email-text').textContent = 'Copied!'
        button.classList.add('bg-green-100', 'text-green-800')
        
        setTimeout(() => {
          button.querySelector('.email-text').textContent = originalText
          button.classList.remove('bg-green-100', 'text-green-800')
        }, 2000)
      }
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/jean-almario-7238301ab', '_blank')
  }

  const handlePhoneClick = async () => {
    try {
      await navigator.clipboard.writeText('+1 806 5598812')
      // Show visual feedback
      const button = document.querySelector('[data-phone-button]')
      if (button) {
        const originalText = button.querySelector('.phone-text').textContent
        button.querySelector('.phone-text').textContent = 'Copied!'
        button.classList.add('bg-green-100', 'text-green-800')
        
        setTimeout(() => {
          button.querySelector('.phone-text').textContent = originalText
          button.classList.remove('bg-green-100', 'text-green-800')
        }, 2000)
      }
    } catch (err) {
      console.error('Failed to copy phone number:', err)
    }
  }

  const handleResumeDownload = () => {
    const confirmed = window.confirm('Would you like to download Jean Almario\'s resume?')
    if (confirmed) {
      const link = document.createElement('a')
      link.href = '/resume.pdf'
      link.download = 'Jean_Almario_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-warm-gray via-white to-cool-gray"></div>
        
        {/* Floating Elements */}
        <div className={`absolute top-20 left-20 w-32 h-32 bg-charcoal/5 rounded-full blur-xl transition-all duration-1000 ${isLoaded ? 'animate-float' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-32 right-32 w-24 h-24 bg-soft-black/10 rounded-full blur-lg transition-all duration-1000 delay-300 ${isLoaded ? 'animate-float' : 'opacity-0'}`}></div>
        <div className={`absolute top-1/2 right-20 w-16 h-16 bg-gray-300/20 rounded-full blur-md transition-all duration-1000 delay-500 ${isLoaded ? 'animate-float' : 'opacity-0'}`}></div>
        
        {/* Main Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Greeting */}
          <div className={`mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`}>
            <p className="text-gray-600 font-sans text-lg mb-4 tracking-wider">Hello, I'm</p>
          </div>
          
          {/* Name */}
          <div className={`mb-8 transition-all duration-1000 delay-400 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-6xl md:text-8xl font-elegant font-bold text-charcoal leading-tight">
              Jean
            </h1>
          </div>
          
          {/* Title */}
          <div className={`mb-12 transition-all duration-1000 delay-600 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl md:text-3xl font-sans font-light text-gray-600 tracking-wide">
              Computer Science Student
            </h2>
          </div>
          
          {/* Description */}
          <div className={`mb-16 transition-all duration-1000 delay-800 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg md:text-xl text-gray-500 font-sans font-light leading-relaxed max-w-2xl mx-auto">
              Passionate about building solutions that matter.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-1000 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`}>
            <button 
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-charcoal text-white font-sans font-medium tracking-wide rounded-lg overflow-hidden transition-all duration-300 hover:bg-soft-black hover-lift"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal to-soft-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={scrollToContact}
              className="group px-8 py-4 border-2 border-charcoal text-charcoal font-sans font-medium tracking-wide rounded-lg transition-all duration-300 hover:bg-charcoal hover:text-white hover-lift"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${isLoaded ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-warm-gray">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 delay-200 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-elegant font-semibold text-charcoal mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-charcoal mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 delay-400 ${isLoaded ? 'animate-slide-in-left opacity-100' : 'opacity-0 -translate-x-8'}`}>
              <p className="text-lg text-gray-600 font-sans font-light leading-relaxed mb-6">
              I am a Computer Science student at Texas Tech University with a strong interest in software development, web technologies, and machine learning. I have experience building full-stack applications, developing APIs, and working with multiple technologies.
              </p>
              <p className="text-lg text-gray-600 font-sans font-light leading-relaxed">
              I am passionate about solving problems, collaborating in team environments, and continuously learning new skills to expand my technical expertise. Beyond academics and projects, I stay active by playing soccer and going to the gym, always striving for balance and growth in both personal and professional aspects of my life.
              </p>
            </div>
            
            <div className={`transition-all duration-1000 delay-600 ${isLoaded ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-8'}`}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift">
                <h3 className="text-2xl font-elegant font-semibold text-charcoal mb-6">Skills & Technologies</h3>
                <div className="space-y-4">
                  {['Python', 'Java', 'C', 'JavaScript', 'React','Next.js', 'Node.js', 'JWT', 'AWS'].map((skill, index) => (
                    <div key={skill} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-charcoal rounded-full"></div>
                      <span className="text-gray-700 font-sans font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects-section" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 delay-200 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-elegant font-semibold text-charcoal mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-charcoal mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                onClick={() => openProjectModal(project)}
                className={`bg-warm-gray p-8 rounded-2xl transition-all duration-1000 delay-${(index + 1) * 200} hover-lift cursor-pointer ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`}
              >
                <div className="mb-4">
                  {project.id === 1 && (
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
                      Deployed • 20+ Sales
                    </span>
                  )}
                  {project.id === 2 && (
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
                      ML Project • 2024
                    </span>
                  )}
                  {project.id === 3 && (
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
                      Internship • HSE Colombia
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-elegant font-semibold text-charcoal mb-3">{project.title}</h3>
                <p className="text-sm text-gray-500 font-sans font-medium mb-4">{project.period}</p>
                <p className="text-gray-600 font-sans font-light leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-charcoal/10 text-charcoal px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-24 px-6 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`mb-16 transition-all duration-1000 delay-200 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-elegant font-semibold mb-6">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
          
          <div className={`mb-12 transition-all duration-1000 delay-400 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl text-gray-300 font-sans font-light leading-relaxed max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Choose your preferred way to get in touch.
            </p>
          </div>
          
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-1 transition-all duration-1000 delay-600 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`}>
            {/* Email Button */}
            <button 
              onClick={handleEmailClick}
              data-email-button
              className="group bg-white text-charcoal w-32 rounded-xl font-sans font-medium transition-all duration-300 hover:bg-gray-50 hover-lift flex flex-col items-center justify-center space-y-2 relative overflow-hidden"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-charcoal/5 rounded-full group-hover:bg-charcoal/10 transition-colors duration-300">
                <img src="/email.svg" alt="Email" className="w-8 h-8" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-white text-charcoal font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 email-text">
                Email
              </div>
            </button>
            
            {/* LinkedIn Button */}
            <button 
              onClick={handleLinkedInClick}
              className="group bg-white text-charcoal w-32 p-4 rounded-xl font-sans font-medium transition-all duration-300 hover:bg-gray-50 hover-lift flex flex-col items-center justify-center space-y-2 relative overflow-hidden"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-charcoal/5 rounded-full group-hover:bg-charcoal/10 transition-colors duration-300">
                <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-white text-charcoal font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                LinkedIn
              </div>
            </button>
            
            {/* Phone Button */}
            <button 
              onClick={handlePhoneClick}
              data-phone-button
              className="group bg-white text-charcoal w-32 p-4 rounded-xl font-sans font-medium transition-all duration-300 hover:bg-gray-50 hover-lift flex flex-col items-center justify-center space-y-2 relative overflow-hidden"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-charcoal/5 rounded-full group-hover:bg-charcoal/10 transition-colors duration-300">
                <img src="/phone.svg" alt="Phone" className="w-8 h-8" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-white text-charcoal font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 phone-text">
                Phone
              </div>
            </button>
            
            {/* Resume Download Button */}
            <button 
              onClick={handleResumeDownload}
              className="group bg-white text-charcoal w-32 p-4 rounded-xl font-sans font-medium transition-all duration-300 hover:bg-gray-50 hover-lift flex flex-col items-center justify-center space-y-2 relative overflow-hidden"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-charcoal/5 rounded-full group-hover:bg-charcoal/10 transition-colors duration-300">
                <img src="/resume.svg" alt="Resume" className="w-8 h-8" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-white text-charcoal font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Resume
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeProjectModal}
        />
      )}
    </main>
  )
}
