'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useLanguage, translations } from '@/contexts/LanguageContext'

export default function ChatButton() {
  const { language } = useLanguage()
  const t = translations[language]

  const handleChatClick = () => {
    // WhatsApp chat link
    const whatsappMessage = language === 'nl' 
      ? 'Hallo! Ik heb een vraag over uw hospitality diensten.'
      : language === 'en'
      ? 'Hello! I have a question about your hospitality services.'
      : 'Hallo! Ich habe eine Frage zu Ihren Gastronomiedienstleistungen.'
    
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/31624572572?text=${encodedMessage}`, '_blank')
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay: 2, 
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleChatClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Start WhatsApp chat"
    >
      <div className="relative">
        <MessageCircle size={20} className="sm:w-6 sm:h-6" />
        
        {/* Online indicator - pulsating green dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse">
          <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
        </div>
      </div>
      
      {/* Tooltip - Hidden on mobile, shown on hover for desktop */}
      <div className="hidden sm:block absolute bottom-full right-0 mb-2 px-3 py-2 bg-creemers-black text-creemers-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {language === 'nl' ? 'Chat met ons - Online' : 
         language === 'en' ? 'Chat with us - Online' : 
         'Mit uns chatten - Online'}
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-creemers-black"></div>
      </div>
    </motion.button>
  )
}
