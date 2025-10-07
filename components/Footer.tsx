'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageSquare, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { useLanguage, translations } from '@/contexts/LanguageContext'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="bg-creemers-black text-creemers-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 border-b border-creemers-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Creemers Exclusive</h3>
              <p className="text-sm sm:text-base text-creemers-gray-300 mb-4 sm:mb-6 leading-relaxed">
                {t.footerDescription}
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="https://wa.me/31624572572"
                  className="p-2 bg-creemers-gray-800 hover:bg-green-500 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title="WhatsApp"
                >
                  <MessageSquare size={20} />
                </motion.a>
                <motion.a
                  href="tel:+31624572572"
                  className="p-2 bg-creemers-gray-800 hover:bg-creemers-white hover:text-creemers-black transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title="Bellen"
                >
                  <Phone size={20} />
                </motion.a>
                <motion.a
                  href="mailto:info@creemersexclusive.nl"
                  className="p-2 bg-creemers-gray-800 hover:bg-creemers-white hover:text-creemers-black transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title="E-mail"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">{t.navigation}</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#about" className="text-creemers-gray-300 hover:text-creemers-white transition-colors duration-300">
                    {t.about}
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-creemers-gray-300 hover:text-creemers-white transition-colors duration-300">
                    {t.services}
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-creemers-gray-300 hover:text-creemers-white transition-colors duration-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-creemers-gray-300 hover:text-creemers-white transition-colors duration-300">
                    {t.faq}
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">{t.services}</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li className="text-sm sm:text-base text-creemers-gray-300">Fine Dining Service</li>
                <li className="text-sm sm:text-base text-creemers-gray-300">Gespecialiseerde Bar Service</li>
                <li className="text-sm sm:text-base text-creemers-gray-300">Evenementenmanagement</li>
                <li className="text-sm sm:text-base text-creemers-gray-300">VIP Service</li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-creemers-gray-400 flex-shrink-0" />
                  <span className="text-creemers-gray-300 text-sm">
                    Limburg en omgeving
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-creemers-gray-400 flex-shrink-0" />
                  <a 
                    href="tel:+31624572572" 
                    className="text-creemers-gray-300 hover:text-creemers-white transition-colors duration-300 text-sm"
                  >
                    +31 6 24 57 25 72
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageSquare size={16} className="text-creemers-gray-400 flex-shrink-0" />
                  <a 
                    href="https://wa.me/31624572572" 
                    className="text-creemers-gray-300 hover:text-creemers-white transition-colors duration-300 text-sm"
                  >
                    WhatsApp: +31 6 24 57 25 72
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-creemers-gray-400 flex-shrink-0" />
                  <a 
                    href="mailto:info@creemersexclusive.nl" 
                    className="text-creemers-gray-300 hover:text-creemers-white transition-colors duration-300 text-sm"
                  >
                    info@creemersexclusive.nl
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-creemers-gray-400 text-sm"
            >
              © {currentYear} Creemers Exclusive. {t.copyright}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm"
            >
              <Link 
                href="/privacy-policy" 
                className="text-creemers-gray-400 hover:text-creemers-white transition-colors duration-300"
              >
                {t.privacyPolicy}
              </Link>
              <Link 
                href="/terms-conditions" 
                className="text-creemers-gray-400 hover:text-creemers-white transition-colors duration-300"
              >
                {t.termsConditions}
              </Link>
              <Link 
                href="/disclaimer" 
                className="text-creemers-gray-400 hover:text-creemers-white transition-colors duration-300"
              >
                {t.disclaimer}
              </Link>
              <Link 
                href="/cookie-policy" 
                className="text-creemers-gray-400 hover:text-creemers-white transition-colors duration-300"
              >
                {t.cookiePolicy}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
