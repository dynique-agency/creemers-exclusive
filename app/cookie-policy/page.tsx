import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookiebeleid - Creemers Exclusive',
  description: 'Cookiebeleid voor Creemers Exclusive website',
}

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-creemers-white">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-creemers-black mb-8">
            Cookiebeleid
          </h1>
          
          <div className="prose prose-lg max-w-none text-creemers-gray-700">
            <p className="text-xl mb-8">
              Deze cookieverklaring legt uit hoe Creemers Exclusive cookies gebruikt op onze website 
              en hoe u uw voorkeuren kunt beheren.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">1. Wat zijn cookies?</h2>
              <p className="mb-4">
                Cookies zijn kleine tekstbestanden die op uw computer, tablet of smartphone worden 
                opgeslagen wanneer u onze website bezoekt. Deze bestanden helpen ons om de website 
                beter te laten functioneren en uw ervaring te verbeteren.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">2. Welke cookies gebruiken wij?</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-creemers-black mb-4">Essentiële Cookies</h3>
                <p className="mb-4">
                  Deze cookies zijn noodzakelijk voor het functioneren van de website en kunnen 
                  niet worden uitgeschakeld.
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Session cookies voor website functionaliteit</li>
                  <li>Cookies voor beveiliging en fraudepreventie</li>
                  <li>Cookies voor het onthouden van uw voorkeuren</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-creemers-black mb-4">Analytische Cookies</h3>
                <p className="mb-4">
                  Deze cookies helpen ons te begrijpen hoe bezoekers onze website gebruiken.
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Google Analytics voor website statistieken</li>
                  <li>Cookies voor het meten van prestaties</li>
                  <li>Cookies voor het verbeteren van gebruikerservaring</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-creemers-black mb-4">Functionele Cookies</h3>
                <p className="mb-4">
                  Deze cookies verbeteren de functionaliteit van de website.
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Cookies voor het onthouden van taalvoorkeuren</li>
                  <li>Cookies voor contactformulieren</li>
                  <li>Cookies voor sociale media integratie</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">3. Doeleinden van Cookies</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Het waarborgen van de technische werking van de website</li>
                <li>Het verbeteren van de gebruikerservaring</li>
                <li>Het analyseren van website gebruik en prestaties</li>
                <li>Het personaliseren van content en aanbiedingen</li>
                <li>Het onthouden van uw voorkeuren en instellingen</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">4. Cookie Beheer</h2>
              <p className="mb-4">
                U kunt uw cookie voorkeuren beheren via:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Uw webbrowser instellingen</li>
                <li>Onze cookie banner (indien van toepassing)</li>
                <li>Specifieke cookie beheer tools</li>
              </ul>
              
              <div className="bg-creemers-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Browser Instellingen</h3>
                <ul className="list-disc pl-6 text-sm">
                  <li><strong>Chrome:</strong> Instellingen → Privacy en beveiliging → Cookies</li>
                  <li><strong>Firefox:</strong> Opties → Privacy en beveiliging → Cookies</li>
                  <li><strong>Safari:</strong> Voorkeuren → Privacy → Cookies</li>
                  <li><strong>Edge:</strong> Instellingen → Cookies en site-machtigingen</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">5. Cookies van Derden</h2>
              <p className="mb-4">
                Onze website kan cookies van derden bevatten voor:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Google Analytics voor website analyse</li>
                <li>Sociale media platforms (indien geïntegreerd)</li>
                <li>Kaarten en locatieservices</li>
                <li>Videoplatforms (indien gebruikt)</li>
              </ul>
              <p className="mb-4">
                Deze derde partijen hebben hun eigen cookiebeleid. Wij adviseren u om deze 
                beleidsregels te raadplegen voor meer informatie.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">6. Bewaartermijnen</h2>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Session cookies:</strong> Worden verwijderd bij het sluiten van de browser</li>
                <li><strong>Permanente cookies:</strong> Blijven bestaan tot de vervaldatum</li>
                <li><strong>Analytische cookies:</strong> Maximaal 2 jaar</li>
                <li><strong>Functionele cookies:</strong> Maximaal 1 jaar</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">7. Uw Rechten</h2>
              <p className="mb-4">
                U heeft het recht om:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Toestemming voor cookies in te trekken</li>
                <li>Cookies te verwijderen uit uw browser</li>
                <li>Cookie voorkeuren aan te passen</li>
                <li>Informatie op te vragen over gebruikte cookies</li>
                <li>Bezwaar te maken tegen cookie gebruik</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">8. Gevolgen van Cookie Uitschakeling</h2>
              <p className="mb-4">
                Het uitschakelen van cookies kan gevolgen hebben voor:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Functionaliteit van de website</li>
                <li>Gebruikerservaring en personalisatie</li>
                <li>Beschikbaarheid van bepaalde functies</li>
                <li>Website prestaties en snelheid</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">9. Updates</h2>
              <p className="mb-4">
                Dit cookiebeleid kan van tijd tot tijd worden bijgewerkt. Wijzigingen worden 
                op deze pagina gepubliceerd. Wij adviseren regelmatig te controleren op updates.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">10. Contact</h2>
              <p className="mb-4">
                Voor vragen over ons cookiebeleid kunt u contact met ons opnemen:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>E-mail: info@creemersexclusive.nl</li>
                <li>Telefoon: +31 6 24 57 25 72</li>
                <li>WhatsApp: +31 6 24 57 25 72</li>
              </ul>
            </section>

            <div className="bg-creemers-gray-50 p-6 rounded-lg">
              <p className="text-sm text-creemers-gray-600">
                <strong>Laatste update:</strong> {new Date().toLocaleDateString('nl-NL')}
              </p>
              <p className="text-sm text-creemers-gray-600 mt-2">
                <strong>Versie:</strong> 1.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
