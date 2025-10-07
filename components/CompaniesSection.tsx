'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const companies = [
  { name: 'Bilderberg Hotels', logo: '/bedrijven/bilderberg.png' },
  { name: 'De 4 Jaargetijden', logo: '/bedrijven/de4jaargetijden.png' },
  { name: 'De Gouverneur Maastricht', logo: '/bedrijven/degouverneurmaastricht.png' },
  { name: 'Dormio Resort', logo: '/bedrijven/dormioresort.png' },
  { name: 'Kasteel Elsloo', logo: '/bedrijven/kasteelelsloo.png' },
  { name: 'Van der Valk Hotels', logo: '/bedrijven/vandervalk.png' }
]

export default function CompaniesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative pt-8 pb-20 md:pt-12 md:pb-24 bg-gradient-to-b from-creemers-white via-creemers-gray-50 to-creemers-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="w-24 h-px bg-creemers-black mx-auto mb-6"
            style={{ originX: 0 }}
          />
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm md:text-base font-extralight text-creemers-gray-600 tracking-[0.3em] uppercase mb-4"
          >
            Vertrouwd door
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xs md:text-sm text-creemers-gray-500 font-light tracking-wider"
          >
            Premium hospitality partners
          </motion.p>
        </motion.div>

        {/* Premium Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 lg:gap-16 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.8 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + (index * 0.1),
                ease: "easeOut"
              }}
              className="group relative"
            >
              {/* Hover background effect */}
              <motion.div
                className="absolute inset-0 bg-creemers-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                initial={false}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Logo container */}
              <div className="relative p-4 md:p-6 h-20 md:h-24 lg:h-28 flex items-center justify-center">
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-contain filter brightness-0 contrast-200 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-700 ease-out"
                    priority={index < 4} // Prioritize first 4 logos
                  />
                </motion.div>
              </div>

              {/* Subtle border on hover */}
              <motion.div
                className="absolute inset-0 border border-creemers-gray-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Premium Footer Accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
          className="flex justify-center mt-16 md:mt-20"
          style={{ originX: 0 }}
        >
          <div className="flex items-center space-x-4">
            <div className="w-8 h-px bg-creemers-black"></div>
            <div className="w-2 h-2 bg-creemers-black rotate-45"></div>
            <div className="w-8 h-px bg-creemers-black"></div>
          </div>
        </motion.div>
      </div>

      {/* Subtle gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-creemers-white to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-creemers-white to-transparent pointer-events-none" />
    </section>
  )
}