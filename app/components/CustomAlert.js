'use client'

import { useEffect, useState } from 'react'

export default function CustomAlert({ 
  isOpen, 
  onClose, 
  title, 
  message, 
  type = 'info',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel 
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      setTimeout(() => setIsVisible(false), 300)
    }
  }, [isOpen])

  if (!isOpen && !isVisible) return null

  const handleConfirm = () => {
    onConfirm?.()
    onClose()
  }

  const handleCancel = () => {
    onCancel?.()
    onClose()
  }

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return {
          icon: '✓',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          iconColor: 'text-green-600',
          titleColor: 'text-green-800',
          textColor: 'text-green-700'
        }
      case 'warning':
        return {
          icon: '⚠',
          bgColor: 'bg-amber-50',
          borderColor: 'border-amber-200',
          iconColor: 'text-amber-600',
          titleColor: 'text-amber-800',
          textColor: 'text-amber-700'
        }
      case 'error':
        return {
          icon: '✕',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          iconColor: 'text-red-600',
          titleColor: 'text-red-800',
          textColor: 'text-red-700'
        }
      default:
        return {
          icon: 'ℹ',
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
          iconColor: 'text-blue-600',
          titleColor: 'text-blue-800',
          textColor: 'text-blue-700'
        }
    }
  }

  const styles = getTypeStyles()

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div 
        className={`${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} 
          transform transition-all duration-300 ease-out
          ${styles.bgColor} border ${styles.borderColor} rounded-2xl shadow-2xl
          max-w-md w-full p-6 relative overflow-hidden`}
      >
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-current to-transparent rounded-full"></div>
        </div>
        
        {/* Icon */}
        <div className={`text-4xl ${styles.iconColor} mb-4 text-center`}>
          {styles.icon}
        </div>
        
        {/* Title */}
        <h3 className={`text-xl font-elegant font-semibold ${styles.titleColor} text-center mb-3`}>
          {title}
        </h3>
        
        {/* Message */}
        <p className={`text-center ${styles.textColor} mb-6 leading-relaxed`}>
          {message}
        </p>
        
        {/* Buttons */}
        <div className="flex gap-3 justify-center">
          {onCancel && (
            <button
              onClick={handleCancel}
              className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-xl font-sans font-medium 
                hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 hover-lift"
            >
              {cancelText}
            </button>
          )}
          
          <button
            onClick={handleConfirm}
            className={`px-6 py-2.5 bg-charcoal text-white rounded-xl font-sans font-medium 
              hover:bg-soft-black transition-all duration-200 hover-lift shadow-lg`}
          >
            {confirmText}
          </button>
        </div>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 
            p-1 rounded-full hover:bg-white/20 transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
