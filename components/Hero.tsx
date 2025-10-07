'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    id: 1,
    image: '/resources/hero1.png',
    title: 'Excellence in Hospitality',
    description: 'Tom Creemers - Your trusted partner in premium hospitality services'
  },
  {
    id: 2,
    image: '/resources/hero2.png',
    title: 'Multilingual Expertise',
    description: 'Native Dutch, fluent English, German, and French for international excellence'
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLElement>(null)

  // Simple scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Calculate parallax values - smoother effect
  const parallaxY = scrollY * 0.3  // Background moves slower (foto blijft langer zichtbaar)
  const textY = scrollY * 0.1      // Text moves much slower

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative h-screen overflow-hidden"
    >
      {/* Slide Container */}
      <div className="relative h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* Background Image with Parallax */}
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                transform: `translateY(${parallaxY}px)`,
                backgroundImage: `url(${slides[currentSlide].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />
            
            {/* Text Content - Always Visible */}
            <div 
              className="relative z-10 h-full flex items-center justify-center"
              style={{
                transform: `translateY(${textY}px)`
              }}
            >
              <div className="text-center max-w-4xl mx-auto px-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${currentSlide}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white"
                  >
                    {/* Chique Logo Design */}
                    <div className="mb-8 sm:mb-12">
                      {/* Main Logo */}
                      <div className="flex flex-col items-center">
                        {/* CREEMERS - Chique en dun */}
                        <h1 
                          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-thin leading-none"
                          style={{ 
                            textShadow: '2px 2px 12px rgba(0,0,0,0.9)',
                            fontFamily: 'Inter, sans-serif',
                            letterSpacing: '0.1em',
                            fontWeight: '100',
                            textTransform: 'uppercase'
                          }}
                        >
                          Creemers
                        </h1>
                        
                        {/* Decorative line */}
                        <div 
                          className="w-12 sm:w-16 h-px my-3 sm:my-4"
                          style={{ 
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)',
                            boxShadow: '0 0 8px rgba(255,255,255,0.4)'
                          }}
                        />
                        
                        {/* EXCLUSIVE - Elegant en dun */}
                        <h2 
                          className="text-xs sm:text-sm md:text-lg lg:text-xl font-extralight tracking-[0.4em] sm:tracking-[0.6em]"
                          style={{ 
                            textShadow: '1px 1px 8px rgba(0,0,0,0.8)',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: '100',
                            letterSpacing: '0.6em'
                          }}
                        >
                          EXCLUSIVE
                        </h2>
                        
                        {/* Small tagline */}
                        <p 
                          className="text-xs sm:text-xs md:text-xs lg:text-sm mt-2 tracking-[0.2em] sm:tracking-[0.4em] opacity-70 px-4"
                          style={{ 
                            textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: '200',
                            letterSpacing: '0.5em'
                          }}
                        >
                          HOSPITALITY EXCELLENCE
                        </p>
                      </div>
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 p-4 bg-black/30 backdrop-blur-sm border border-white/30 text-white hover:bg-black/50 hover:border-white/50 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 p-4 bg-black/30 backdrop-blur-sm border border-white/30 text-white hover:bg-black/50 hover:border-white/50 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}