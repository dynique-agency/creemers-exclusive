'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage, translations } from '@/contexts/LanguageContext'

const languages = [
  { code: 'nl', name: 'Nederlands' },
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOverHero, setIsOverHero] = useState(true)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = window.innerHeight
      
      setIsScrolled(scrollY > 50)
      setIsOverHero(scrollY < heroHeight - 100) // 100px buffer
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.language-selector')) {
        setIsLanguageMenuOpen(false)
      }
    }

    if (isLanguageMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isLanguageMenuOpen])

  const navigation = [
    { name: translations[language].home, href: '#home' },
    { name: translations[language].about, href: '#about' },
    { name: translations[language].services, href: '#services' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOverHero 
          ? 'bg-transparent' 
          : 'bg-creemers-white/95 backdrop-blur-custom border-b border-creemers-gray-200'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Spacer for centering */}
          <div className="hidden lg:block w-32"></div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className={`font-medium transition-colors duration-300 ${
                  isOverHero 
                    ? 'text-creemers-gray-300 hover:text-creemers-white' 
                    : 'text-creemers-gray-700 hover:text-creemers-black'
                }`}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Desktop Language Selector */}
          <div className="hidden lg:block w-32">
            <div className="flex justify-end">
            <div className="relative language-selector">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-none border transition-colors duration-300 ${
                  isOverHero
                    ? 'border-creemers-gray-500 text-creemers-gray-300 hover:border-creemers-white hover:text-creemers-white'
                    : 'border-creemers-gray-300 text-creemers-gray-700 hover:border-creemers-black hover:text-creemers-black'
                }`}
              >
                <Globe size={16} />
                <span className="text-sm font-medium">
                  {languages.find(lang => lang.code === language)?.name}
                </span>
              </button>

              <AnimatePresence>
                {isLanguageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-40 bg-creemers-white border border-creemers-gray-200 shadow-lg"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as 'nl' | 'en' | 'de')
                          setIsLanguageMenuOpen(false)
                        }}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                          language === lang.code
                            ? 'bg-creemers-gray-100 text-creemers-black'
                            : 'text-creemers-gray-700 hover:bg-creemers-gray-50'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            </div>
          </div>

          {/* Mobile Header with Logo */}
          <div className="lg:hidden flex items-center justify-between w-full">
            {/* Mobile Logo */}
            <div className="flex-1 text-center">
              <h1 className={`text-lg font-light tracking-wider ${
                isOverHero ? 'text-creemers-white' : 'text-creemers-black'
              }`}>
                Creemers <span className="text-sm tracking-widest">EXCLUSIVE</span>
              </h1>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors duration-300 ${
                isOverHero ? 'text-creemers-white' : 'text-creemers-black'
              }`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden border-t backdrop-blur-custom ${
                isOverHero 
                  ? 'border-creemers-gray-600 bg-creemers-black/98' 
                  : 'border-creemers-gray-200 bg-creemers-white/98'
              }`}
            >
              <nav className="py-4 space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2 transition-colors duration-200 ${
                      isOverHero
                        ? 'text-creemers-gray-300 hover:text-creemers-white hover:bg-creemers-gray-800'
                        : 'text-creemers-gray-700 hover:text-creemers-black hover:bg-creemers-gray-50'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* Language Selector in Mobile Menu */}
                <div className="border-t border-creemers-gray-600 mt-4 pt-4">
                  <div className="px-4 mb-2">
                    <span className={`text-sm font-medium ${
                      isOverHero ? 'text-creemers-gray-300' : 'text-creemers-gray-700'
                    }`}>
                      Taal / Language
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-2 px-4">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as 'nl' | 'en' | 'de')
                          setIsMenuOpen(false)
                        }}
                        className={`text-left px-3 py-2 text-sm rounded transition-colors duration-200 ${
                          language === lang.code
                            ? isOverHero
                              ? 'bg-creemers-gray-700 text-creemers-white'
                              : 'bg-creemers-gray-100 text-creemers-black'
                            : isOverHero
                              ? 'text-creemers-gray-300 hover:text-creemers-white hover:bg-creemers-gray-800'
                              : 'text-creemers-gray-700 hover:text-creemers-black hover:bg-creemers-gray-50'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
