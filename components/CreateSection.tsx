'use client'

import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { useLanguage, translations } from '@/contexts/LanguageContext'

export default function CreateSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section ref={ref} className="py-20 bg-creemers-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-fixed bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/resources/contactbackground2.png)',
            backgroundSize: 'cover',
            opacity: 0.6,
            filter: 'blur(0px)'
          }}
        />
        <div className="absolute inset-0 bg-creemers-black/40"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-creemers-white mb-6">
              {t.createTitle}
            </h2>
            
            <div className="w-16 h-px bg-creemers-white mx-auto mb-8"></div>
            
            <p className="text-lg text-creemers-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.createSubtitle}
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center space-x-3 px-8 py-4 bg-creemers-white text-creemers-black font-light tracking-wide hover:bg-creemers-gray-100 transition-all duration-300 border border-creemers-white hover:border-creemers-gray-100"
              >
                <span>{t.createButton}</span>
                <ArrowRight 
                  size={20} 
                  className="group-hover:translate-x-1 transition-transform duration-300" 
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}