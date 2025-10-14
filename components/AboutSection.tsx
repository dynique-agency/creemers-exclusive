'use client'

import { motion } from 'framer-motion'
import { Globe, Award, Users, Coffee, Star, CheckCircle } from 'lucide-react'
import { useLanguage, translations } from '@/contexts/LanguageContext'

const getAchievements = (t: any) => [
  {
    icon: Globe,
    title: t.fourLanguages,
    description: t.fourLanguagesDesc
  },
  {
    icon: Award,
    title: t.excellence,
    description: t.excellenceDesc
  },
  {
    icon: Users,
    title: t.internationalGuests,
    description: t.internationalGuestsDesc
  },
  {
    icon: Star,
    title: t.premiumService,
    description: t.premiumServiceDesc
  }
]


export default function AboutSection() {
  const { language } = useLanguage()
  const t = translations[language]
  const achievements = getAchievements(t)

  return (
    <section id="about" className="section-padding bg-creemers-white relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-creemers-black mb-4 sm:mb-6 tracking-wide">
            {t.aboutTitle}
          </h2>
          <div className="w-16 sm:w-24 h-px bg-creemers-black mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-creemers-gray-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
            {t.aboutSubtitle}
          </p>
        </motion.div>

        {/* Main Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-20">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-creemers-black mb-6 sm:mb-8 leading-tight">
                {t.aboutStoryTitle}
              </h3>
              
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-creemers-gray-700 leading-relaxed">
                <p dangerouslySetInnerHTML={{ 
                  __html: t.aboutStory1.replace(/\*\*(.*?)\*\*/g, '<span class="font-medium text-creemers-gray-800">$1</span>')
                }} />
                
                <p dangerouslySetInnerHTML={{ 
                  __html: t.aboutStory2.replace(/\*\*(.*?)\*\*/g, '<span class="font-medium text-creemers-gray-800">$1</span>')
                }} />
                
                <p dangerouslySetInnerHTML={{ 
                  __html: t.aboutStory3.replace(/\*\*(.*?)\*\*/g, '<span class="font-medium text-creemers-gray-800">$1</span>')
                }} />

                {/* Network Section */}
                <div className="mt-8 p-6 bg-creemers-gray-50 rounded-lg border-l-4 border-creemers-black">
                  <p className="text-base sm:text-lg text-creemers-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ 
                    __html: t.aboutNetwork.replace(/\*\*(.*?)\*\*/g, '<span class="font-medium text-creemers-gray-800">$1</span>')
                  }} />
                  
                  <p className="text-base sm:text-lg text-creemers-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ 
                    __html: t.aboutCollaboration.replace(/\*\*(.*?)\*\*/g, '<span class="font-medium text-creemers-gray-800">$1</span>')
                  }} />
                </div>
              </div>
            </div>

            {/* Key Differentiators */}
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-creemers-black mb-4">{t.whatDistinguishesUs}</h4>
              <div className="space-y-3">
                {[
                  "Een <span className='font-bold'>uitgebreid netwerk</span> van top ZZP'ers en specialisten",
                  "Anticiperen op behoeften <span className='italic'>voordat</span> ze uitgesproken worden",
                  "Naadloze communicatie in <span className='font-bold'>4 talen</span>",
                  "Aandacht voor de <span className='italic'>kleinste details</span> die het verschil maken",
                  "Een <span className='font-bold'>persoonlijke benadering</span> die verder gaat dan service"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle size={20} className="text-creemers-black flex-shrink-0" />
                    <span className="text-creemers-gray-700" dangerouslySetInnerHTML={{ __html: item }} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/resources/IMG_7929.JPG"
                alt="Tom Creemers - Hospitality Professional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-2xl font-light mb-1 tracking-wide">
                  Tom Creemers
                </h4>
                <p className="text-white/90 font-light tracking-wide text-sm">
                  Hospitality Excellence
                </p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-creemers-black rotate-45"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-creemers-gray-400 rotate-45"></div>
          </motion.div>
        </div>

        {/* Background Image Strip */}
        <div 
          className="relative w-full h-32 md:h-40 lg:h-48 my-16 md:my-20 rounded-lg overflow-hidden shadow-lg"
          style={{
            backgroundImage: `url('/resources/background1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay for better text readability if needed */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 lg:mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              viewport={{ once: true, margin: "-30px" }}
              className="text-center p-6 border border-creemers-gray-200 hover:border-creemers-black transition-all duration-300 group"
            >
              <achievement.icon 
                size={32} 
                className="mx-auto mb-4 text-creemers-black group-hover:scale-110 transition-transform duration-300" 
              />
              <h4 className="text-lg font-medium text-creemers-black mb-2">
                {achievement.title}
              </h4>
              <p className="text-sm text-creemers-gray-600 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>


        {/* Companies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center py-12"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-sm md:text-base font-extralight text-creemers-gray-600 tracking-[0.3em] uppercase mb-2">
              Werkzaam geweest bij
            </h3>
            <p className="text-sm text-creemers-gray-500 mb-4">Toonaangevende hotels en restaurants</p>
            <div className="w-16 h-px bg-creemers-black mx-auto"></div>
          </motion.div>

          {/* Company Logos */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 items-center">
            {[
              { name: 'Bilderberg Hotels', logo: '/bedrijven/bilderberg.png' },
              { name: 'De 4 Jaargetijden', logo: '/bedrijven/de4jaargetijden.png' },
              { name: 'De Gouverneur Maastricht', logo: '/bedrijven/degouverneurmaastricht.png' },
              { name: 'Dormio Resort', logo: '/bedrijven/dormioresort.png' },
              { name: 'Kasteel Elsloo', logo: '/bedrijven/kasteelelsloo.png' },
              { name: 'Van der Valk Hotels', logo: '/bedrijven/vandervalk.png' }
            ].map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex justify-center group"
              >
                <div className="relative h-12 md:h-16 w-auto opacity-60 group-hover:opacity-80 transition-all duration-500 grayscale hover:grayscale-0">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="object-contain filter brightness-0 contrast-200 max-h-full max-w-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}