'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, Calendar, MessageSquare, Star, CheckCircle, ArrowRight, Zap, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { useRef, useState, useCallback } from 'react'
import { useLanguage, translations } from '@/contexts/LanguageContext'

const getContactMethods = (t: any) => [
  {
    icon: Phone,
    title: t.directCall,
    description: t.directCallDesc,
    value: '+31 6 2457 2572',
    action: t.directCallAction,
    color: 'text-creemers-white',
    bgColor: 'bg-creemers-black',
    accentColor: 'bg-green-500',
    hoverEffect: 'scale-105 shadow-lg'
  },
  {
    icon: MessageSquare,
    title: t.whatsapp,
    description: t.whatsappDesc,
    value: '+31 6 2457 2572',
    action: t.whatsappAction,
    color: 'text-creemers-white',
    bgColor: 'bg-green-500',
    accentColor: 'bg-green-600',
    hoverEffect: 'scale-105 shadow-lg shadow-green-200'
  }
]

const projectTypes = [
  'Corporate Events',
  'Private Dining',
  'Wedding Planning',
  'VIP Service',
  'Catering',
  'Bar Service',
  'Event Management',
  'Consulting'
]

const testimonials = [
  {
    name: 'Sarah van der Berg',
    company: 'Event Solutions',
    message: 'Tom\'s attention to detail is exceptional. Our corporate events have never been smoother.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    company: 'Luxury Hotels Group',
    message: 'Professional, reliable, and delivers beyond expectations every time.',
    rating: 5
  }
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProjectType, setSelectedProjectType] = useState<string>('')
  const { language } = useLanguage()
  const t = translations[language]
  const contactMethods = getContactMethods(t)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    budget: '',
    timeline: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  // Calendar states
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDates, setSelectedDates] = useState<Date[]>([])
  const [showCalendar, setShowCalendar] = useState(false)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [isMultiDaySelection, setIsMultiDaySelection] = useState(false)
  const [bookingData, setBookingData] = useState({
    name: '',
    startTime: '',
    endTime: '',
    description: ''
  })
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false)

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }, [])

  const handleProjectTypeSelect = useCallback((type: string) => {
    setSelectedProjectType(type)
    setFormData(prev => ({ ...prev, projectType: type }))
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
        budget: '',
        timeline: ''
      })
      setSelectedProjectType('')
    }, 3000)
  }, [])

  // Calendar functions
  const getDaysInMonth = useCallback((date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()
    
    const days = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }
    
    return days
  }, [])

  const isDateAvailable = useCallback((date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date >= today
  }, [])

  const handleDateSelect = useCallback((date: Date) => {
    if (!isDateAvailable(date)) return
    
    if (isMultiDaySelection) {
      setSelectedDates(prev => {
        const dateString = date.toDateString()
        const isSelected = prev.some(d => d.toDateString() === dateString)
        
        if (isSelected) {
          return prev.filter(d => d.toDateString() !== dateString)
        } else {
          return [...prev, date].sort((a, b) => a.getTime() - b.getTime())
        }
      })
    } else {
      setSelectedDates([date])
      setShowBookingModal(true)
    }
  }, [isDateAvailable, isMultiDaySelection])

  const handleBookingSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsBookingSubmitted(true)
    
    // Create date range string
    const dateRange = selectedDates.length === 1 
      ? selectedDates[0].toLocaleDateString('nl-NL')
      : selectedDates.length > 1
      ? `${selectedDates[0].toLocaleDateString('nl-NL')} t/m ${selectedDates[selectedDates.length - 1].toLocaleDateString('nl-NL')}`
      : 'Geen datum geselecteerd'

    // Create WhatsApp message
    const message = `Hallo Tom, ik heb een project voor je:
    
Naam: ${bookingData.name}
Project periode: ${dateRange}
Start tijd: ${bookingData.startTime}
Eind tijd: ${bookingData.endTime}
Project details: ${bookingData.description}

Graag hoor ik van je!`
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/31624572572?text=${encodeURIComponent(message)}`
    
    // Simulate delay then redirect
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setTimeout(() => {
      setIsBookingSubmitted(false)
      setBookingData({
        name: '',
        startTime: '',
        endTime: '',
        description: ''
      })
      setShowBookingModal(false)
      setSelectedDates([])
      setIsMultiDaySelection(false)
    }, 2000)
  }, [bookingData, selectedDates])

  const monthNames = [
    'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni',
    'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'
  ]

  const dayNames = ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za']

  return (
    <section ref={ref} id="contact" className="section-padding bg-creemers-black text-creemers-white relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-fixed bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/resources/contactbackground.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'left center',
            opacity: 0.8,
            filter: 'blur(0px)'
          }}
        />
        <div 
          className="w-full h-full bg-fixed bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/resources/contactbackground2.png)',
            backgroundSize: 'contain',
            opacity: 0.8,
            filter: 'blur(0px)',
            backgroundPosition: 'right center'
          }}
        />
        <div className="absolute inset-0 bg-creemers-black/30"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="inline-flex items-center space-x-2 bg-creemers-white/10 px-4 py-2 rounded-full mb-6"
          >
            <Zap size={16} className="text-creemers-white" />
            <span className="text-sm font-medium">Premium Hospitality Service</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Laten We <span className="text-creemers-gray-300">Samenwerken</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-creemers-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-creemers-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Klaar om uw evenement tot een onvergetelijke ervaring te maken? 
            <br />Laten we uw visie realiseren met premium hospitality service.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 max-w-4xl mx-auto px-4"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group cursor-pointer relative"
            >
              <div className="bg-creemers-white border border-creemers-gray-200 p-8 hover:border-creemers-black transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
                
                {/* Icon with accent */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 ${method.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative`}>
                    <method.icon size={32} className={method.color} />
                    {/* WhatsApp accent for WhatsApp method */}
                    {method.title === 'WhatsApp' && (
                      <motion.div
                        className="absolute -top-1 -right-1 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Sparkles size={12} className="text-white" />
                      </motion.div>
                    )}
                  </div>
                  {/* Subtle ring effect */}
                  <motion.div
                    className={`absolute inset-0 w-16 h-16 border-2 border-creemers-gray-300 rounded-full`}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                <h3 className="text-2xl font-bold text-creemers-black mb-3 relative z-10">{method.title}</h3>
                <p className="text-creemers-gray-600 mb-4 relative z-10">{method.description}</p>
                <p className="text-creemers-black font-semibold mb-6 text-lg relative z-10">{method.value}</p>
                
                {/* Action button with enhanced styling */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center text-creemers-black font-medium group-hover:text-creemers-gray-700 transition-colors duration-300">
                    <span>{method.action}</span>
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  {method.title === 'WhatsApp' && (
                    <div className="text-xs text-green-600 font-medium">
                      Online
                    </div>
                  )}
                </div>

                {/* Hover overlay effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-creemers-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Calendar Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-creemers-white border border-creemers-gray-200 p-8 relative overflow-hidden">
            
            <div className="text-center mb-8 relative z-10">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-creemers-black flex items-center justify-center relative group">
                  <Calendar size={24} className="text-creemers-white group-hover:scale-110 transition-transform duration-300" />
                  <motion.div
                    className="absolute inset-0 border-2 border-creemers-gray-300 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-creemers-black">
                    Selecteer Project Datum
                  </h3>
                  <p className="text-creemers-gray-600">
                    Wanneer heeft u mij nodig voor uw evenement of project?
                  </p>
                </div>
              </div>
            </div>

            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6 relative z-10">
              <motion.button
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}
                className="p-3 hover:bg-creemers-gray-100 transition-colors duration-200 rounded-full group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={24} className="text-creemers-black group-hover:text-creemers-gray-700 transition-colors duration-200" />
              </motion.button>
              
              <div className="text-center">
                <h4 className="text-xl font-bold text-creemers-black mb-1">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h4>
                <div className="w-16 h-0.5 bg-creemers-black mx-auto"></div>
              </div>
              
              <motion.button
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}
                className="p-3 hover:bg-creemers-gray-100 transition-colors duration-200 rounded-full group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={24} className="text-creemers-black group-hover:text-creemers-gray-700 transition-colors duration-200" />
              </motion.button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mb-4 relative z-10">
              {dayNames.map((day) => (
                <div key={day} className="p-3 text-center text-sm font-semibold text-creemers-gray-600 border-b border-creemers-gray-200">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 relative z-10">
              {getDaysInMonth(currentDate).map((day, index) => (
                <motion.button
                  key={index}
                  onClick={() => day && handleDateSelect(day)}
                  disabled={!day || !isDateAvailable(day)}
                  className={`p-3 text-center text-sm transition-all duration-300 rounded-lg relative group ${
                    !day
                      ? 'invisible'
                      : !isDateAvailable(day)
                      ? 'text-creemers-gray-300 cursor-not-allowed'
                      : selectedDates.some(d => d.toDateString() === day.toDateString())
                      ? 'bg-creemers-black text-creemers-white shadow-lg'
                      : 'text-creemers-black hover:bg-creemers-gray-100 hover:shadow-md'
                  }`}
                  whileHover={day && isDateAvailable(day) && !selectedDates.some(d => d.toDateString() === day.toDateString()) ? { 
                    scale: 1.1,
                    y: -2
                  } : {}}
                  whileTap={day && isDateAvailable(day) ? { scale: 0.95 } : {}}
                >
                  {day?.getDate()}
                  {/* Subtle indicator for today */}
                  {day && day.toDateString() === new Date().toDateString() && !selectedDates.some(d => d.toDateString() === day.toDateString()) && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-creemers-gray-400 rounded-full"></div>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Selection Mode Toggle */}
            <div className="mt-6 mb-4 relative z-10">
              <div className="flex items-center justify-center space-x-4">
                <motion.button
                  onClick={() => {
                    setIsMultiDaySelection(false)
                    setSelectedDates([])
                  }}
                  className={`px-6 py-3 text-sm border transition-all duration-300 rounded-lg font-medium ${
                    !isMultiDaySelection
                      ? 'bg-creemers-black text-creemers-white border-creemers-black shadow-md'
                      : 'bg-creemers-white text-creemers-gray-700 border-creemers-gray-300 hover:border-creemers-black hover:shadow-sm'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Één dag
                </motion.button>
                <motion.button
                  onClick={() => {
                    setIsMultiDaySelection(true)
                    setSelectedDates([])
                  }}
                  className={`px-6 py-3 text-sm border transition-all duration-300 rounded-lg font-medium ${
                    isMultiDaySelection
                      ? 'bg-creemers-black text-creemers-white border-creemers-black shadow-md'
                      : 'bg-creemers-white text-creemers-gray-700 border-creemers-gray-300 hover:border-creemers-black hover:shadow-sm'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Meerdere dagen
                </motion.button>
              </div>
            </div>

            {/* Selected Dates Display */}
            {selectedDates.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-6 bg-gradient-to-r from-creemers-gray-50 to-creemers-gray-100 border border-creemers-gray-200 rounded-lg relative z-10"
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-creemers-black font-semibold text-sm">
                    Geselecteerde {selectedDates.length === 1 ? 'datum' : 'datums'}:
                  </p>
                  {isMultiDaySelection && (
                    <motion.button
                      onClick={() => setSelectedDates([])}
                      className="text-xs text-creemers-gray-600 hover:text-creemers-black underline transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Wis selectie
                    </motion.button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedDates.map((date, index) => (
                    <motion.span 
                      key={index} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-creemers-black text-creemers-white px-3 py-1 text-xs rounded-full font-medium"
                    >
                      {date.toLocaleDateString('nl-NL')}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            {isMultiDaySelection && selectedDates.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center relative z-10"
              >
                <motion.button
                  onClick={() => setShowBookingModal(true)}
                  className="bg-creemers-black text-creemers-white px-8 py-3 font-semibold hover:bg-creemers-gray-800 transition-colors duration-300 rounded-lg shadow-md hover:shadow-lg flex items-center space-x-2 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar size={20} />
                  <span>Ga naar Project Details</span>
                </motion.button>
              </motion.div>
            )}

            <div className="mt-6 text-center relative z-10">
              <p className="text-creemers-gray-600 text-sm">
                {isMultiDaySelection 
                  ? "Klik op meerdere datums om een periode te selecteren"
                  : "Klik op een datum om aan te geven wanneer u mij nodig heeft"
                }
              </p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {showBookingModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowBookingModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-creemers-white border border-creemers-gray-200 p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-creemers-black">
                  Project Details
                </h3>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="p-2 hover:bg-creemers-gray-100 transition-colors duration-200"
                >
                  <X size={24} className="text-creemers-black" />
                </button>
              </div>

              <div className="mb-6 p-4 bg-creemers-gray-100">
                <p className="text-creemers-black font-semibold mb-2">
                  Project periode:
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedDates.map((date, index) => (
                    <span key={index} className="bg-creemers-black text-creemers-white px-2 py-1 text-sm">
                      {date.toLocaleDateString('nl-NL')}
                    </span>
                  ))}
                </div>
                {selectedDates.length > 1 && (
                  <p className="text-creemers-gray-600 text-sm mt-2">
                    Van {selectedDates[0].toLocaleDateString('nl-NL')} t/m {selectedDates[selectedDates.length - 1].toLocaleDateString('nl-NL')}
                  </p>
                )}
              </div>

              {isBookingSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2 text-creemers-black">Project Aanvraag Verzonden!</h4>
                  <p className="text-creemers-gray-600">
                    Uw project details worden via WhatsApp verzonden. Ik neem zo snel mogelijk contact op!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="bookingName" className="block text-sm font-medium text-creemers-gray-700 mb-2">
                      Uw Naam *
                    </label>
                    <input
                      type="text"
                      id="bookingName"
                      required
                      value={bookingData.name}
                      onChange={(e) => setBookingData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 bg-creemers-white border border-creemers-gray-300 text-creemers-black placeholder-creemers-gray-500 focus:border-creemers-black focus:outline-none transition-colors duration-300"
                      placeholder="Uw naam"
                    />
                  </div>


                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="bookingStartTime" className="block text-sm font-medium text-creemers-gray-700 mb-2">
                        Start Tijd *
                      </label>
                      <input
                        type="text"
                        id="bookingStartTime"
                        required
                        value={bookingData.startTime}
                        onChange={(e) => setBookingData(prev => ({ ...prev, startTime: e.target.value }))}
                        className="w-full px-4 py-3 bg-creemers-white border border-creemers-gray-300 text-creemers-black placeholder-creemers-gray-500 focus:border-creemers-black focus:outline-none transition-colors duration-300"
                        placeholder="bijv. 09:00, 14:30, of 's ochtends"
                      />
                    </div>
                    <div>
                      <label htmlFor="bookingEndTime" className="block text-sm font-medium text-creemers-gray-700 mb-2">
                        Eind Tijd *
                      </label>
                      <input
                        type="text"
                        id="bookingEndTime"
                        required
                        value={bookingData.endTime}
                        onChange={(e) => setBookingData(prev => ({ ...prev, endTime: e.target.value }))}
                        className="w-full px-4 py-3 bg-creemers-white border border-creemers-gray-300 text-creemers-black placeholder-creemers-gray-500 focus:border-creemers-black focus:outline-none transition-colors duration-300"
                        placeholder="bijv. 17:00, 23:30, of 's avonds"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bookingDescription" className="block text-sm font-medium text-creemers-gray-700 mb-2">
                      Project Beschrijving *
                    </label>
                    <textarea
                      id="bookingDescription"
                      required
                      rows={3}
                      value={bookingData.description}
                      onChange={(e) => setBookingData(prev => ({ ...prev, description: e.target.value }))}
                      className="w-full px-4 py-3 bg-creemers-white border border-creemers-gray-300 text-creemers-black placeholder-creemers-gray-500 focus:border-creemers-black focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Vertel me over uw project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isBookingSubmitted}
                    className="w-full bg-creemers-black text-creemers-white px-8 py-3 font-semibold hover:bg-creemers-gray-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isBookingSubmitted ? (
                      <>
                        <div className="w-5 h-5 border-2 border-creemers-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Verzenden...</span>
                      </>
                    ) : (
                      <>
                        <MessageSquare size={20} />
                        <span>Verstuur Project Aanvraag</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}