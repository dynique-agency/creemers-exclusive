'use client'

import { motion, useInView } from 'framer-motion'
import { ChevronDown, HelpCircle, MessageSquare, Phone, Clock, Star, Calendar, MapPin } from 'lucide-react'
import { useRef, useState, useCallback } from 'react'

const faqCategories = [
  {
    title: 'Diensten & Prijzen',
    icon: HelpCircle,
    color: 'text-creemers-black',
    bgColor: 'bg-creemers-gray-100'
  },
  {
    title: 'Boekingen & Planning',
    icon: Calendar,
    color: 'text-creemers-black',
    bgColor: 'bg-creemers-gray-100'
  },
  {
    title: 'Logistiek & Locatie',
    icon: MapPin,
    color: 'text-creemers-black',
    bgColor: 'bg-creemers-gray-100'
  }
]

const faqs = [
  {
    id: 1,
    category: 'Diensten & Prijzen',
    question: 'Wat zijn uw tarieven voor hospitality diensten?',
    answer: 'Mijn tarieven zijn afhankelijk van de omvang en complexiteit van uw evenement. Voor een gedetailleerde offerte neem ik graag persoonlijk contact met u op. Ik bied transparante prijzen zonder verborgen kosten.',
    popular: true
  },
  {
    id: 2,
    category: 'Diensten & Prijzen',
    question: 'Welke diensten biedt u aan?',
    answer: 'Ik bied complete hospitality diensten: fine dining service, gespecialiseerde barservice, evenementenmanagement en VIP service. Elke service wordt op maat gemaakt voor uw specifieke behoeften en locatie.',
    popular: false
  },
  {
    id: 3,
    category: 'Boekingen & Planning',
    question: 'Hoe ver van tevoren moet ik reserveren?',
    answer: 'Voor optimale planning raad ik aan om minstens 2-4 weken van tevoren contact op te nemen. Voor grote evenementen of tijdens drukke periodes is 6-8 weken ideaal. Voor last-minute verzoeken ben ik ook beschikbaar.',
    popular: true
  },
  {
    id: 4,
    category: 'Boekingen & Planning',
    question: 'Werkt u ook in het weekend en op feestdagen?',
    answer: 'Ja, ik ben 7 dagen per week beschikbaar, inclusief weekends en feestdagen. Voor feestdagen kunnen er aanvullende tarieven gelden. Bespreek uw specifieke data graag persoonlijk.',
    popular: false
  },
  {
    id: 5,
    category: 'Logistiek & Locatie',
    question: 'In welke regio\'s bent u actief?',
    answer: 'Ik werk voornamelijk in Limburg en omgeving, maar ben mobiel beschikbaar voor evenementen in de hele regio. Voor evenementen verder weg overleg ik graag de mogelijkheden en eventuele reiskosten.',
    popular: true
  },
]

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle')
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleFAQ = useCallback((id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
  }, [expandedFAQ])

  const filteredFAQs = useCallback(() => {
    let filtered = faqs

    // Filter by category
    if (selectedCategory !== 'Alle') {
      filtered = filtered.filter(faq => faq.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return filtered
  }, [selectedCategory, searchQuery])

  const categories = ['Alle', ...Array.from(new Set(faqs.map(faq => faq.category)))]

  return (
    <section ref={ref} id="faq" className="section-padding bg-creemers-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-creemers-black/10 px-4 py-2 rounded-full mb-6"
          >
            <HelpCircle size={16} className="text-creemers-black" />
            <span className="text-sm font-medium">Veelgestelde Vragen</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Antwoorden Op <span className="text-creemers-gray-600">Uw Vragen</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-creemers-black mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-creemers-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Alles wat u wilt weten over mijn hospitality diensten, 
            <br />boekingen en planning in één overzicht.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-12"
        >
          {/* Search Bar */}
          <div className="mb-6 sm:mb-8">
            <div className="relative max-w-md mx-auto px-4">
              <input
                type="text"
                placeholder="Zoek in FAQ's..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 pl-10 sm:pl-12 bg-creemers-gray-50 border border-creemers-gray-200 text-creemers-black placeholder-creemers-gray-500 focus:border-creemers-black focus:outline-none transition-colors duration-300 rounded-lg text-sm sm:text-base"
              />
              <HelpCircle size={18} className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-creemers-gray-500" />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-lg border transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-creemers-black text-creemers-white border-creemers-black shadow-md'
                    : 'bg-creemers-white text-creemers-gray-700 border-creemers-gray-300 hover:border-creemers-black hover:shadow-sm'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16 px-4"
        >
          {filteredFAQs().map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="border border-creemers-gray-200 hover:border-creemers-black transition-all duration-300 relative overflow-hidden"
            >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-4 sm:p-6 flex items-center justify-between hover:bg-creemers-gray-50 transition-colors duration-200 group"
                >
                <div className="flex items-center space-x-4 text-left">
                  {faq.popular && (
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-yellow-500 fill-current" />
                      <span className="text-xs text-yellow-600 font-medium">Populair</span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-creemers-black group-hover:text-creemers-gray-700 transition-colors duration-200">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-creemers-gray-600 mt-1">
                      {faq.category}
                    </p>
                  </div>
                </div>
                
                <motion.div
                  animate={{ rotate: expandedFAQ === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={24} className="text-creemers-gray-500" />
                </motion.div>
              </button>

              {/* Expandable Content */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedFAQ === faq.id ? "auto" : 0,
                  opacity: expandedFAQ === faq.id ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-creemers-gray-100">
                  <div className="pt-3 sm:pt-4">
                    <p className="text-sm sm:text-base text-creemers-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center bg-creemers-gray-50 p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-creemers-black mb-4">
            Vraag niet gevonden?
          </h3>
          <p className="text-creemers-gray-600 mb-6 max-w-2xl mx-auto">
            Ik help u graag persoonlijk verder. Neem direct contact op via WhatsApp of bel me voor een vrijblijvend gesprek.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/31624572572"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare size={20} />
              <span>WhatsApp</span>
            </motion.a>
            <motion.a
              href="tel:+31612345678"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-creemers-black text-creemers-white font-semibold rounded-lg hover:bg-creemers-gray-800 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={20} />
              <span>Direct Bellen</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
