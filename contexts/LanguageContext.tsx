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
    about: 'Over Ons',
    services: 'Diensten',
    contact: 'Contact',
    faq: 'FAQ',
    
    // Hero
    heroTitle: 'Creemers',
    heroSubtitle: 'EXCLUSIVE',
    heroTagline: 'HOSPITALITY EXCELLENCE',
    
    // About Section
    aboutTitle: 'Over Ons',
    aboutSubtitle: 'Waar gastvrijheid een kunst wordt en elke ontmoeting een herinnering',
    aboutStoryTitle: 'Mijn verhaal',
    aboutStory1: 'Ik ben **Tom Creemers** en ik heb één passie: **gastvrijheid die raakt**. Niet de standaard service, maar die momenten waarop gasten voelen dat alles precies klopt.',
    aboutStory2: '**Bijna de helft van mijn leven** werk ik in de horeca. Van kleine restaurants tot grote evenementen. Ik heb geleerd dat het draait om **anticiperen op wat gasten nodig hebben**, voordat ze het zelf weten.',
    aboutStory3: 'Mijn achtergrond? **Nederlandse grondigheid** gecombineerd met **internationale ervaring**. Vier talen, jarenlange ervaring, en vooral: **oog voor detail** waar anderen overheen kijken.',
    aboutNetwork: 'Ik werk met een **klein, betrouwbaar netwerk** van professionals. Mensen die net als ik geloven in **kwaliteit boven kwantiteit**. Samen zorgen we ervoor dat elk project **naadloos verloopt**.',
    aboutCollaboration: 'Of het nu een **familiebijeenkomst** is of een **zakelijk evenement**, ik zorg ervoor dat alles **perfect geregeld** is. Van de eerste planning tot de laatste glazen die worden afgeruimd.',
    
    // Services Section
    servicesTitle: 'Mijn Diensten',
    servicesSubtitle: 'Alle horeca diensten - van casual tot premium, groot en klein',
    restaurantService: 'Restaurant Service',
    restaurantServiceShort: 'Alle restaurant diensten',
    restaurantServiceDesc: 'Van casual dining tot fine dining. Wij helpen bij alle aspecten van restaurant service - van tafelopmaak tot gastcommunicatie en alles daartussenin.',
    barService: 'Bar Service',
    barServiceShort: 'Complete bar ondersteuning',
    barServiceDesc: 'Van eenvoudige drankenservice tot gespecialiseerde cocktails. Wij verzorgen bar management voor elke gelegenheid - groot of klein.',
    eventService: 'Evenementen Service',
    eventServiceShort: 'Evenementen van alle soorten',
    eventServiceDesc: 'Corporate events, privé feesten, bruiloften of zakelijke bijeenkomsten. Wij bieden complete hospitality ondersteuning voor elke schaal.',
    cateringService: 'Catering Service',
    cateringServiceShort: 'Catering voor elke behoefte',
    cateringServiceDesc: 'Van intieme diners tot grootschalige evenementen. Wij zorgen voor professionele catering service die past bij uw budget en wensen.',
    
    // About Section Achievements
    fourLanguages: '4 Talen',
    fourLanguagesDesc: 'Native Dutch, vloeiend Engels, Duits en Frans',
    excellence: 'Excellence',
    excellenceDesc: 'Jarenlange ervaring in premium hospitality',
    internationalGuests: 'Internationale Gasten',
    internationalGuestsDesc: 'Gespecialiseerd in meertalige service',
    premiumService: 'Premium Service',
    premiumServiceDesc: 'Exclusieve evenementen en fine dining',
    whatDistinguishesUs: 'Wat ons onderscheidt:',
    
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
    about: 'About Us',
    services: 'Services',
    faq: 'FAQ',
    
    // Hero
    heroTitle: 'Creemers',
    heroSubtitle: 'EXCLUSIVE',
    heroTagline: 'HOSPITALITY EXCELLENCE',
    
    // About Section
    aboutTitle: 'About Us',
    aboutSubtitle: 'Where hospitality becomes an art and every encounter a memory',
    aboutStoryTitle: 'My story',
    aboutStory1: 'I am **Tom Creemers** and I have one passion: **hospitality that touches**. Not standard service, but those moments when guests feel that everything is just right.',
    aboutStory2: '**Nearly half my life** I have worked in hospitality. From small restaurants to large events. I have learned that it\'s about **anticipating what guests need**, before they know it themselves.',
    aboutStory3: 'My background? **Dutch thoroughness** combined with **international experience**. Four languages, years of experience, and above all: **attention to detail** that others overlook.',
    aboutNetwork: 'I work with a **small, reliable network** of professionals. People who, like me, believe in **quality over quantity**. Together we ensure that every project **runs seamlessly**.',
    aboutCollaboration: 'Whether it\'s a **family gathering** or a **business event**, I make sure everything is **perfectly organized**. From the first planning to the last glasses being cleared away.',
    
    // Services Section
    servicesTitle: 'My Services',
    servicesSubtitle: 'All hospitality services - from casual to premium, large and small',
    restaurantService: 'Restaurant Service',
    restaurantServiceShort: 'All restaurant services',
    restaurantServiceDesc: 'From casual dining to fine dining. We help with all aspects of restaurant service - from table setup to guest communication and everything in between.',
    barService: 'Bar Service',
    barServiceShort: 'Complete bar support',
    barServiceDesc: 'From simple beverage service to specialized cocktails. We provide bar management for any occasion - large or small.',
    eventService: 'Event Service',
    eventServiceShort: 'Events of all kinds',
    eventServiceDesc: 'Corporate events, private parties, weddings or business meetings. We provide complete hospitality support for any scale.',
    cateringService: 'Catering Service',
    cateringServiceShort: 'Catering for every need',
    cateringServiceDesc: 'From intimate dinners to large-scale events. We provide professional catering service that fits your budget and needs.',
    
    // About Section Achievements
    fourLanguages: '4 Languages',
    fourLanguagesDesc: 'Native Dutch, fluent English, German and French',
    excellence: 'Excellence',
    excellenceDesc: 'Years of experience in premium hospitality',
    internationalGuests: 'International Guests',
    internationalGuestsDesc: 'Specialized in multilingual service',
    premiumService: 'Premium Service',
    premiumServiceDesc: 'Exclusive events and fine dining',
    whatDistinguishesUs: 'What distinguishes us:',
    
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
    about: 'Über Uns',
    services: 'Dienstleistungen',
    faq: 'FAQ',
    
    // Hero
    heroTitle: 'Creemers',
    heroSubtitle: 'EXCLUSIVE',
    heroTagline: 'GASTRONOMIE EXZELLENZ',
    
    // About Section
    aboutTitle: 'Über Uns',
    aboutSubtitle: 'Wo Gastfreundschaft zur Kunst wird und jede Begegnung eine Erinnerung',
    aboutStoryTitle: 'Meine Geschichte',
    aboutStory1: 'Ich bin **Tom Creemers** und ich habe eine Leidenschaft: **Gastfreundschaft, die berührt**. Nicht Standard-Service, sondern diese Momente, in denen Gäste spüren, dass alles stimmt.',
    aboutStory2: '**Fast die Hälfte meines Lebens** arbeite ich in der Gastronomie. Von kleinen Restaurants bis zu großen Events. Ich habe gelernt, dass es darum geht, **zu antizipieren, was Gäste brauchen**, bevor sie es selbst wissen.',
    aboutStory3: 'Mein Hintergrund? **Niederländische Gründlichkeit** kombiniert mit **internationaler Erfahrung**. Vier Sprachen, jahrelange Erfahrung und vor allem: **Aufmerksamkeit für Details**, die andere übersehen.',
    aboutNetwork: 'Ich arbeite mit einem **kleinen, zuverlässigen Netzwerk** von Fachkräften. Menschen, die wie ich an **Qualität vor Quantität** glauben. Zusammen sorgen wir dafür, dass jedes Projekt **nahtlos läuft**.',
    aboutCollaboration: 'Ob es eine **Familiengathering** oder ein **Business-Event** ist, ich sorge dafür, dass alles **perfekt organisiert** ist. Von der ersten Planung bis zu den letzten Gläsern, die abgeräumt werden.',
    
    // Services Section
    servicesTitle: 'Meine Dienstleistungen',
    servicesSubtitle: 'Alle Gastronomiedienstleistungen - von casual bis premium, groß und klein',
    restaurantService: 'Restaurant-Service',
    restaurantServiceShort: 'Alle Restaurant-Dienstleistungen',
    restaurantServiceDesc: 'Von Casual Dining bis Fine Dining. Wir helfen bei allen Aspekten des Restaurant-Services - von Tischdekoration bis Gästekommunikation und allem dazwischen.',
    barService: 'Bar-Service',
    barServiceShort: 'Komplette Bar-Unterstützung',
    barServiceDesc: 'Von einfachem Getränkeservice bis zu spezialisierten Cocktails. Wir bieten Bar-Management für jede Gelegenheit - groß oder klein.',
    eventService: 'Event-Service',
    eventServiceShort: 'Events aller Art',
    eventServiceDesc: 'Firmenevents, private Feiern, Hochzeiten oder Geschäftstreffen. Wir bieten komplette Hospitality-Unterstützung für jede Größenordnung.',
    cateringService: 'Catering-Service',
    cateringServiceShort: 'Catering für jeden Bedarf',
    cateringServiceDesc: 'Von intimen Dinners bis zu großangelegten Events. Wir bieten professionellen Catering-Service, der zu Ihrem Budget und Ihren Wünschen passt.',
    
    // About Section Achievements
    fourLanguages: '4 Sprachen',
    fourLanguagesDesc: 'Muttersprache Niederländisch, fließend Englisch, Deutsch und Französisch',
    excellence: 'Exzellenz',
    excellenceDesc: 'Jahrelange Erfahrung im Premium-Gastronomiebereich',
    internationalGuests: 'Internationale Gäste',
    internationalGuestsDesc: 'Spezialisiert auf mehrsprachigen Service',
    premiumService: 'Premium-Service',
    premiumServiceDesc: 'Exklusive Events und Fine Dining',
    whatDistinguishesUs: 'Was uns auszeichnet:',
    
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
