import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import CreateSection from '@/components/CreateSection'
import ServicesSection from '@/components/ServicesSection'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <CreateSection />
      <ServicesSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
