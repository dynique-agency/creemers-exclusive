'use client'

import { motion, useInView } from 'framer-motion'
import { Utensils, Wine, Users2, Star, ChevronDown, ArrowRight } from 'lucide-react'
import React, { useRef, useState, useCallback, useMemo } from 'react'
import { useLanguage, translations } from '@/contexts/LanguageContext'

const getServices = (t: any, language: string) => [
  {
    icon: Utensils,
    title: t.fineDiningTitle,
    shortDesc: t.fineDiningShort,
    description: t.fineDiningDesc,
    features: language === 'nl' ? ['Wijnservice', 'Tafelopmaak', 'Menu-expertise', 'Gastcommunicatie'] : 
             language === 'en' ? ['Wine Service', 'Table Setup', 'Menu Expertise', 'Guest Communication'] :
             ['Weinservice', 'Tischdekoration', 'Menü-Expertise', 'Gästekommunikation']
  },
  {
    icon: Wine,
    title: t.premiumBarTitle,
    shortDesc: t.premiumBarShort,
    description: t.premiumBarDesc,
    features: language === 'nl' ? ['Cocktail bereiding', 'Wijn selectie', 'Bar management', 'Guest interaction'] :
             language === 'en' ? ['Cocktail Preparation', 'Wine Selection', 'Bar Management', 'Guest Interaction'] :
             ['Cocktail-Zubereitung', 'Weinauswahl', 'Bar-Management', 'Gästeinteraktion']
  },
  {
    icon: Users2,
    title: t.eventHospitalityTitle,
    shortDesc: t.eventHospitalityShort,
    description: t.eventHospitalityDesc,
    features: language === 'nl' ? ['Event planning', 'Staff coordination', 'Guest management', 'Quality control'] :
             language === 'en' ? ['Event Planning', 'Staff Coordination', 'Guest Management', 'Quality Control'] :
             ['Event-Planung', 'Personal-Koordination', 'Gästemanagement', 'Qualitätskontrolle']
  },
  {
    icon: Star,
    title: t.luxuryServiceTitle,
    shortDesc: t.luxuryServiceShort,
    description: t.luxuryServiceDesc,
    features: language === 'nl' ? ['Personalized service', 'Discretion', 'Anticipation', 'Excellence'] :
             language === 'en' ? ['Personalized Service', 'Discretion', 'Anticipation', 'Excellence'] :
             ['Personalisierter Service', 'Diskretion', 'Antizipation', 'Exzellenz']
  }
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const { language } = useLanguage()
  const t = translations[language]
  const services = getServices(t, language)

  // Advanced JavaScript: useCallback for performance optimization
  const toggleService = useCallback((index: number) => {
    setExpandedService(prev => prev === index ? null : index)
  }, [])

  // Advanced JavaScript: useMemo for expensive computations
  const serviceStats = useMemo(() => {
    return services.map((service, index) => ({
      ...service,
      id: index,
      priority: service.features.length,
      complexity: service.description.length > 100 ? 'high' : 'medium',
      category: service.title.includes('Dining') || service.title.includes('Bar') ? 'culinary' : 'service'
    }))
  }, [])

  // Advanced JavaScript: Intersection Observer for smart loading
  const [visibleServices, setVisibleServices] = useState<Set<number>>(new Set())
  
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([])
  
  const observeServices = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleServices(prev => new Set(Array.from(prev).concat([index])))
          }
        })
      },
      { threshold: 0.1 }
    )

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  // Advanced JavaScript: Custom hook simulation with useEffect
  React.useEffect(() => {
    observeServices()
  }, [observeServices])

  return (
    <section ref={ref} id="services" className="section-padding bg-creemers-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-creemers-black mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mijn Diensten
          </motion.h2>
          <motion.div 
            className="w-16 sm:w-24 h-px bg-creemers-black mx-auto mb-4 sm:mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ originX: 0 }}
          />
          <motion.p 
            className="text-base sm:text-lg text-creemers-gray-600 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Gespecialiseerde horeca diensten voor veeleisende klanten
          </motion.p>
        </motion.div>

        {/* Services Accordion with Advanced JS Features */}
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16 px-4">
          {serviceStats.map((service, index) => (
            <motion.div
              key={service.id}
              ref={(el) => { serviceRefs.current[index] = el }}
              data-index={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`border transition-all duration-300 relative overflow-hidden ${
                hoveredService === index 
                  ? 'border-creemers-black shadow-lg shadow-creemers-gray-200/50' 
                  : 'border-creemers-gray-200 hover:border-creemers-black hover:shadow-lg hover:shadow-creemers-gray-200/50'
              }`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Premium overlay effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-creemers-black/5 to-transparent transition-opacity duration-300 ${
                hoveredService === index ? 'opacity-100' : 'opacity-0'
              }`} />
              
              {/* Service complexity indicator */}
              <div className={`absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-300 ${
                service.complexity === 'high' ? 'bg-creemers-black' : 'bg-creemers-gray-400'
              }`} />
              {/* Service Header with Advanced Features */}
              <button
                onClick={() => toggleService(index)}
                className={`w-full p-6 flex items-center justify-between transition-colors duration-200 relative z-10 ${
                  hoveredService === index ? 'bg-creemers-gray-50/80' : 'hover:bg-creemers-gray-50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative group">
                    <motion.div 
                      className="w-12 h-12 bg-creemers-black rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <motion.div
                        animate={{ 
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut"
                        }}
                      >
                        <service.icon size={20} className="text-creemers-white" strokeWidth={1.5} />
                      </motion.div>
                    </motion.div>
                    {/* Subtle pulsing ring */}
                    <motion.div
                      className="absolute inset-0 border-2 border-creemers-gray-300 rounded-full"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                    <div className="text-left">
                     <motion.h3 
                       className="text-xl font-medium text-creemers-black mb-1 flex items-center gap-2"
                       initial={{ opacity: 0, x: -20 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ duration: 0.5, delay: index * 0.1 }}
                     >
                       {service.title}
                       {/* Category badge */}
                       <span className={`text-xs px-2 py-1 rounded-full ${
                         service.category === 'culinary' 
                           ? 'bg-creemers-black text-creemers-white' 
                           : 'bg-creemers-gray-200 text-creemers-gray-700'
                       }`}>
                         {service.category}
                       </span>
                     </motion.h3>
                     <motion.p 
                       className="text-sm text-creemers-gray-600"
                       initial={{ opacity: 0, x: -20 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                     >
                       {service.shortDesc}
                       {/* Priority indicator */}
                       <span className="ml-2 text-xs text-creemers-gray-500">
                         ({service.priority} features)
                       </span>
                     </motion.p>
                    </div>
                </div>
                
                <motion.div
                  animate={{ rotate: expandedService === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} className="text-creemers-gray-500" />
                </motion.div>
              </button>

              {/* Expandable Content */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedService === index ? "auto" : 0,
                  opacity: expandedService === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 border-t border-creemers-gray-100 relative">
                  {/* Smart visibility indicator */}
                  {visibleServices.has(index) && (
                    <div className="absolute top-2 right-2 w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                  )}
                  
                  <div className="pt-6">
                    <p className="text-creemers-gray-700 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                          className="flex items-center group cursor-pointer"
                          title={`Feature ${featureIndex + 1} of ${service.features.length}`}
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 bg-creemers-black rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"
                            whileHover={{ scale: 1.25 }}
                          ></motion.div>
                          <span className="text-sm text-creemers-gray-700 group-hover:text-creemers-black transition-colors duration-200">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Performance metrics */}
                    <div className="mt-6 pt-4 border-t border-creemers-gray-100">
                      <div className="flex items-center justify-between text-xs text-creemers-gray-500">
                        <span>Complexity: {service.complexity}</span>
                        <span>Category: {service.category}</span>
                        <span>Features: {service.priority}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>


        {/* Call to Action - Compact with Advanced Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center relative"
        >
          {/* Performance indicator */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-xl font-light text-creemers-black mb-3">
              Klaar om uw evenement te perfectioneren?
              <span className="block text-sm font-normal text-creemers-gray-600 mt-2">
                {serviceStats.length} gespecialiseerde diensten beschikbaar
              </span>
            </h3>
          </motion.div>
          <motion.a
            href="#contact"
            className="group inline-flex items-center space-x-2 px-6 py-3 bg-creemers-black text-creemers-white font-light tracking-wide hover:bg-creemers-gray-800 transition-all duration-300 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            title={`Contact voor ${serviceStats.filter(s => s.category === 'culinary').length} culinaire & ${serviceStats.filter(s => s.category === 'service').length} service opties`}
          >
            <span className="relative z-10">Project bespreken</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}