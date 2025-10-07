'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'nl' | 'en' | 'de'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('nl')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Language translations
export const translations = {
  nl: {
    // Navigation
    home: 'Home',
    about: 'Over Mij',
    services: 'Diensten',
    contact: 'Contact',
    faq: 'FAQ',
    
    // Hero
    heroTitle: 'Creemers',
    heroSubtitle: 'EXCLUSIVE',
    heroTagline: 'HOSPITALITY EXCELLENCE',
    
    // About Section
    aboutTitle: 'Over Tom Creemers',
    aboutSubtitle: 'Waar gastvrijheid een kunst wordt en elke ontmoeting een herinnering',
    aboutStoryTitle: 'Een verhaal van passie en perfectie',
    aboutStory1: 'Het begon met een simpele overtuiging: elke gast verdient een ervaring die hen laat voelen dat ze de enige zijn die telt.',
    aboutStory2: 'Met meer dan een decennium ervaring in de premium hospitality sector, heb ik geleerd dat excellentie niet gaat om perfectie, maar om de kunst om het onmogelijke mogelijk te maken.',
    aboutStory3: 'Mijn kracht? De unieke combinatie van Nederlandse precisie en internationale flair. Vloeiend in vier talen, begrijp ik niet alleen wat gasten zeggen, maar vooral wat ze niet zeggen.',
    
    // Services Section
    servicesTitle: 'Mijn Diensten',
    servicesSubtitle: 'Gespecialiseerde horeca diensten voor veeleisende klanten',
    fineDiningTitle: 'Fine Dining',
    fineDiningShort: 'Perfecte tafelopmaak & wijnservice',
    fineDiningDesc: 'Van perfecte tafelopmaak tot naadloze wijnservice. Ik zorg ervoor dat uw gasten niet alleen eten, maar een culinair verhaal beleven.',
    premiumBarTitle: 'Premium Bar',
    premiumBarShort: 'Cocktails die indruk maken',
    premiumBarDesc: 'Gespecialiseerde barservice voor evenementen en exclusieve bijeenkomsten. Elke cocktail wordt een kunstwerk.',
    eventHospitalityTitle: 'Event Hospitality',
    eventHospitalityShort: 'Evenementen die herinneren worden',
    eventHospitalityDesc: 'Complete hospitality management voor corporate events, privé feesten en speciale gelegenheden.',
    luxuryServiceTitle: 'Luxury Service',
    luxuryServiceShort: 'Voor gasten die het beste verwachten',
    luxuryServiceDesc: 'Exclusieve service voor VIP gasten en premium locaties met de hoogste standaarden van excellentie.',
    
    // About Section Achievements
    fourLanguages: '4 Talen',
    fourLanguagesDesc: 'Native Dutch, vloeiend Engels, Duits en Frans',
    excellence: 'Excellence',
    excellenceDesc: 'Jarenlange ervaring in premium hospitality',
    internationalGuests: 'Internationale Gasten',
    internationalGuestsDesc: 'Gespecialiseerd in meertalige service',
    premiumService: 'Premium Service',
    premiumServiceDesc: 'Exclusieve evenementen en fine dining',
    whatDistinguishesMe: 'Wat mij onderscheidt:',
    
    // Contact Section
    contactTitle: 'Laten We Samenwerken',
    contactSubtitle: 'Klaar om uw evenement tot een onvergetelijke ervaring te maken? Laten we uw visie realiseren met premium hospitality service.',
    directCall: 'Direct Bellen',
    directCallDesc: 'Voor urgente projecten en directe vragen',
    directCallAction: 'Bel Nu',
    whatsapp: 'WhatsApp',
    whatsappDesc: 'Voor snelle vragen en project updates',
    whatsappAction: 'WhatsApp',
    selectDate: 'Selecteer de datum waarop u hulp nodig heeft',
    selectDateDesc: 'Klik op een datum om uw project te plannen',
    bookingModal: 'Project Boeken',
    namePlaceholder: 'Uw naam',
    startTime: 'Starttijd',
    startTimePlaceholder: 'bijv. 09:00 of \'s ochtends\'',
    endTime: 'Eindtijd',
    endTimePlaceholder: 'bijv. 14:30 of \'s middags\'',
    description: 'Beschrijving',
    descriptionPlaceholder: 'Vertel ons over uw project...',
    bookProject: 'Project Boeken',
    cancel: 'Annuleren',
    
    // FAQ Section
    faqTitle: 'Antwoorden Op Uw Vragen',
    faqSubtitle: 'Alles wat u wilt weten over mijn hospitality diensten, boekingen en planning in één overzicht.',
    searchPlaceholder: 'Zoek in FAQ\'s...',
    allCategories: 'Alle',
    servicesPricing: 'Diensten & Prijzen',
    bookingPlanning: 'Boekingen & Planning',
    logisticsLocation: 'Logistiek & Locatie',
    
    // Create Section
    createTitle: 'Klaar om iets bijzonders te creëren?',
    createSubtitle: 'Laten we samen een onvergetelijke ervaring creëren die uw gasten nog jaren zullen herinneren.',
    createButton: 'Laten we beginnen',
    
    // Footer
    footerDescription: 'Premium hospitality services in Limburg en omgeving. Uw vertrouwde partner voor onvergetelijke evenementen.',
    navigation: 'Navigatie',
    copyright: 'Alle rechten voorbehouden.',
    privacyPolicy: 'Privacyverklaring',
    termsConditions: 'Algemene Voorwaarden',
    disclaimer: 'Disclaimer',
    cookiePolicy: 'Cookiebeleid'
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About Me',
    services: 'Services',
    faq: 'FAQ',
    
    // Hero
    heroTitle: 'Creemers',
    heroSubtitle: 'EXCLUSIVE',
    heroTagline: 'HOSPITALITY EXCELLENCE',
    
    // About Section
    aboutTitle: 'About Tom Creemers',
    aboutSubtitle: 'Where hospitality becomes an art and every encounter a memory',
    aboutStoryTitle: 'A story of passion and perfection',
    aboutStory1: 'It started with a simple conviction: every guest deserves an experience that makes them feel like they are the only ones that matter.',
    aboutStory2: 'With more than a decade of experience in the premium hospitality sector, I have learned that excellence is not about perfection, but about the art of making the impossible possible.',
    aboutStory3: 'My strength? The unique combination of Dutch precision and international flair. Fluent in four languages, I understand not only what guests say, but especially what they don\'t say.',
    
    // Services Section
    servicesTitle: 'My Services',
    servicesSubtitle: 'Specialized hospitality services for demanding clients',
    fineDiningTitle: 'Fine Dining',
    fineDiningShort: 'Perfect table setup & wine service',
    fineDiningDesc: 'From perfect table setup to seamless wine service. I ensure your guests don\'t just eat, but experience a culinary story.',
    premiumBarTitle: 'Premium Bar',
    premiumBarShort: 'Cocktails that make an impression',
    premiumBarDesc: 'Specialized bar service for events and exclusive gatherings. Every cocktail becomes a work of art.',
    eventHospitalityTitle: 'Event Hospitality',
    eventHospitalityShort: 'Events that become memories',
    eventHospitalityDesc: 'Complete hospitality management for corporate events, private parties and special occasions.',
    luxuryServiceTitle: 'Luxury Service',
    luxuryServiceShort: 'For guests who expect the best',
    luxuryServiceDesc: 'Exclusive service for VIP guests and premium locations with the highest standards of excellence.',
    
    // About Section Achievements
    fourLanguages: '4 Languages',
    fourLanguagesDesc: 'Native Dutch, fluent English, German and French',
    excellence: 'Excellence',
    excellenceDesc: 'Years of experience in premium hospitality',
    internationalGuests: 'International Guests',
    internationalGuestsDesc: 'Specialized in multilingual service',
    premiumService: 'Premium Service',
    premiumServiceDesc: 'Exclusive events and fine dining',
    whatDistinguishesMe: 'What distinguishes me:',
    
    // Contact Section
    contactTitle: 'Let\'s Work Together',
    contactSubtitle: 'Ready to turn your event into an unforgettable experience? Let\'s realize your vision with premium hospitality service.',
    directCall: 'Direct Call',
    directCallDesc: 'For urgent projects and direct questions',
    directCallAction: 'Call Now',
    whatsapp: 'WhatsApp',
    whatsappDesc: 'For quick questions and project updates',
    whatsappAction: 'WhatsApp',
    selectDate: 'Select the date when you need help',
    selectDateDesc: 'Click on a date to plan your project',
    bookingModal: 'Book Project',
    namePlaceholder: 'Your name',
    startTime: 'Start Time',
    startTimePlaceholder: 'e.g. 09:00 or \'morning\'',
    endTime: 'End Time',
    endTimePlaceholder: 'e.g. 14:30 or \'afternoon\'',
    description: 'Description',
    descriptionPlaceholder: 'Tell us about your project...',
    bookProject: 'Book Project',
    cancel: 'Cancel',
    
    // FAQ Section
    faqTitle: 'Answers to Your Questions',
    faqSubtitle: 'Everything you want to know about my hospitality services, bookings and planning in one overview.',
    searchPlaceholder: 'Search in FAQs...',
    allCategories: 'All',
    servicesPricing: 'Services & Pricing',
    bookingPlanning: 'Bookings & Planning',
    logisticsLocation: 'Logistics & Location',
    
    // Create Section
    createTitle: 'Ready to create something special?',
    createSubtitle: 'Let\'s create an unforgettable experience together that your guests will remember for years to come.',
    createButton: 'Let\'s get started',
    
    // Footer
    footerDescription: 'Premium hospitality services in Limburg and surroundings. Your trusted partner for unforgettable events.',
    navigation: 'Navigation',
    copyright: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    disclaimer: 'Disclaimer',
    cookiePolicy: 'Cookie Policy'
  },
  de: {
    // Navigation
    home: 'Startseite',
    about: 'Über Mich',
    services: 'Dienstleistungen',
    faq: 'FAQ',
    
    // Hero
    heroTitle: 'Creemers',
    heroSubtitle: 'EXCLUSIVE',
    heroTagline: 'GASTRONOMIE EXZELLENZ',
    
    // About Section
    aboutTitle: 'Über Tom Creemers',
    aboutSubtitle: 'Wo Gastfreundschaft zur Kunst wird und jede Begegnung eine Erinnerung',
    aboutStoryTitle: 'Eine Geschichte von Leidenschaft und Perfektion',
    aboutStory1: 'Es begann mit einer einfachen Überzeugung: Jeder Gast verdient eine Erfahrung, die ihn das Gefühl vermittelt, als wäre er der Einzige, der zählt.',
    aboutStory2: 'Mit mehr als einem Jahrzehnt Erfahrung im Premium-Gastronomiebereich habe ich gelernt, dass Exzellenz nicht um Perfektion geht, sondern um die Kunst, das Unmögliche möglich zu machen.',
    aboutStory3: 'Meine Stärke? Die einzigartige Kombination aus niederländischer Präzision und internationalem Flair. Fließend in vier Sprachen verstehe ich nicht nur, was Gäste sagen, sondern besonders, was sie nicht sagen.',
    
    // Services Section
    servicesTitle: 'Meine Dienstleistungen',
    servicesSubtitle: 'Spezialisierte Gastronomiedienstleistungen für anspruchsvolle Kunden',
    fineDiningTitle: 'Fine Dining',
    fineDiningShort: 'Perfekte Tischdekoration & Weinservice',
    fineDiningDesc: 'Von perfekter Tischdekoration bis zu nahtlosem Weinservice. Ich sorge dafür, dass Ihre Gäste nicht nur essen, sondern eine kulinarische Geschichte erleben.',
    premiumBarTitle: 'Premium Bar',
    premiumBarShort: 'Cocktails, die Eindruck machen',
    premiumBarDesc: 'Spezialisierter Barservice für Events und exklusive Zusammenkünfte. Jeder Cocktail wird zu einem Kunstwerk.',
    eventHospitalityTitle: 'Event Hospitality',
    eventHospitalityShort: 'Events, die zu Erinnerungen werden',
    eventHospitalityDesc: 'Komplettes Hospitality-Management für Firmenevents, private Feiern und besondere Anlässe.',
    luxuryServiceTitle: 'Luxus-Service',
    luxuryServiceShort: 'Für Gäste, die das Beste erwarten',
    luxuryServiceDesc: 'Exklusiver Service für VIP-Gäste und Premium-Standorte mit den höchsten Standards der Exzellenz.',
    
    // About Section Achievements
    fourLanguages: '4 Sprachen',
    fourLanguagesDesc: 'Muttersprache Niederländisch, fließend Englisch, Deutsch und Französisch',
    excellence: 'Exzellenz',
    excellenceDesc: 'Jahrelange Erfahrung im Premium-Gastronomiebereich',
    internationalGuests: 'Internationale Gäste',
    internationalGuestsDesc: 'Spezialisiert auf mehrsprachigen Service',
    premiumService: 'Premium-Service',
    premiumServiceDesc: 'Exklusive Events und Fine Dining',
    whatDistinguishesMe: 'Was mich auszeichnet:',
    
    // Contact Section
    contactTitle: 'Lassen Sie uns zusammenarbeiten',
    contactSubtitle: 'Bereit, Ihr Event zu einem unvergesslichen Erlebnis zu machen? Lassen Sie uns Ihre Vision mit Premium-Gastronomiedienstleistungen verwirklichen.',
    directCall: 'Direkt anrufen',
    directCallDesc: 'Für dringende Projekte und direkte Fragen',
    directCallAction: 'Jetzt anrufen',
    whatsapp: 'WhatsApp',
    whatsappDesc: 'Für schnelle Fragen und Projekt-Updates',
    whatsappAction: 'WhatsApp',
    selectDate: 'Wählen Sie das Datum, an dem Sie Hilfe benötigen',
    selectDateDesc: 'Klicken Sie auf ein Datum, um Ihr Projekt zu planen',
    bookingModal: 'Projekt buchen',
    namePlaceholder: 'Ihr Name',
    startTime: 'Startzeit',
    startTimePlaceholder: 'z.B. 09:00 oder \'morgens\'',
    endTime: 'Endzeit',
    endTimePlaceholder: 'z.B. 14:30 oder \'nachmittags\'',
    description: 'Beschreibung',
    descriptionPlaceholder: 'Erzählen Sie uns von Ihrem Projekt...',
    bookProject: 'Projekt buchen',
    cancel: 'Abbrechen',
    
    // FAQ Section
    faqTitle: 'Antworten auf Ihre Fragen',
    faqSubtitle: 'Alles, was Sie über meine Gastronomiedienstleistungen, Buchungen und Planung wissen möchten, in einem Überblick.',
    searchPlaceholder: 'In FAQs suchen...',
    allCategories: 'Alle',
    servicesPricing: 'Dienstleistungen & Preise',
    bookingPlanning: 'Buchungen & Planung',
    logisticsLocation: 'Logistik & Standort',
    
    // Create Section
    createTitle: 'Bereit, etwas Besonderes zu schaffen?',
    createSubtitle: 'Lassen Sie uns gemeinsam ein unvergessliches Erlebnis schaffen, an das sich Ihre Gäste noch Jahre erinnern werden.',
    createButton: 'Lassen Sie uns beginnen',
    
    // Footer
    footerDescription: 'Premium-Gastronomiedienstleistungen in Limburg und Umgebung. Ihr vertrauensvoller Partner für unvergessliche Events.',
    navigation: 'Navigation',
    copyright: 'Alle Rechte vorbehalten.',
    privacyPolicy: 'Datenschutzerklärung',
    termsConditions: 'Allgemeine Geschäftsbedingungen',
    disclaimer: 'Haftungsausschluss',
    cookiePolicy: 'Cookie-Richtlinie'
  }
}
