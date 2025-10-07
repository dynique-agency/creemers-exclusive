import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacyverklaring - Creemers Exclusive',
  description: 'Privacyverklaring voor Creemers Exclusive hospitality diensten',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-creemers-white">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-creemers-black mb-8">
            Privacyverklaring
          </h1>
          
          <div className="prose prose-lg max-w-none text-creemers-gray-700">
            <p className="text-xl mb-8">
              Deze privacyverklaring beschrijft hoe Creemers Exclusive omgaat met uw persoonlijke gegevens 
              in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG/GDPR).
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">1. Wie zijn wij?</h2>
              <p className="mb-4">
                Creemers Exclusive is een eenmanszaak die premium hospitality diensten verleent. 
                Wij zijn verantwoordelijk voor de verwerking van uw persoonlijke gegevens.
              </p>
              <div className="bg-creemers-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Contactgegevens:</h3>
                <p>E-mail: info@creemersexclusive.nl</p>
                <p>Telefoon: +31 6 24 57 25 72</p>
                <p>WhatsApp: +31 6 24 57 25 72</p>
                <p>Locatie: Limburg en omgeving</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">2. Welke gegevens verzamelen wij?</h2>
              <p className="mb-4">Wij kunnen de volgende gegevens van u verzamelen:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Naam en contactgegevens (e-mailadres, telefoonnummer)</li>
                <li>Adresgegevens (voor dienstverlening op locatie)</li>
                <li>Projectdetails en voorkeuren</li>
                <li>Communicatie met ons (WhatsApp berichten, e-mails)</li>
                <li>Website gebruikersgegevens (via cookies)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">3. Waarom verzamelen wij deze gegevens?</h2>
              <p className="mb-4">Wij verwerken uw gegevens voor:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Het verlenen van onze hospitality diensten</li>
                <li>Het afhandelen van boekingen en projecten</li>
                <li>Communicatie over onze diensten</li>
                <li>Het verbeteren van onze dienstverlening</li>
                <li>Het voldoen aan wettelijke verplichtingen</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">4. Wettelijke grondslag</h2>
              <p className="mb-4">Wij verwerken uw gegevens op basis van:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Overeenkomst:</strong> Voor het uitvoeren van onze diensten</li>
                <li><strong>Toestemming:</strong> Voor marketingcommunicatie</li>
                <li><strong>Gerechtvaardigd belang:</strong> Voor het verbeteren van onze diensten</li>
                <li><strong>Wettelijke verplichting:</strong> Voor administratieve doeleinden</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">5. Hoe lang bewaren wij uw gegevens?</h2>
              <p className="mb-4">
                Wij bewaren uw gegevens niet langer dan noodzakelijk voor de doeleinden waarvoor 
                zij zijn verzameld. Over het algemeen bewaren wij:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Klantgegevens: 7 jaar na laatste contact</li>
                <li>Projectgegevens: 5 jaar na voltooiing</li>
                <li>Marketinggegevens: tot u zich afmeldt</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">6. Uw rechten</h2>
              <p className="mb-4">U heeft de volgende rechten:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Inzagerecht:</strong> U kunt opvragen welke gegevens wij van u hebben</li>
                <li><strong>Rectificatie:</strong> U kunt onjuiste gegevens laten corrigeren</li>
                <li><strong>Verwijdering:</strong> U kunt vragen om verwijdering van uw gegevens</li>
                <li><strong>Beperking:</strong> U kunt de verwerking beperken</li>
                <li><strong>Gegevensportabiliteit:</strong> U kunt uw gegevens overzetten</li>
                <li><strong>Bezwaar:</strong> U kunt bezwaar maken tegen verwerking</li>
              </ul>
              <p className="mb-4">
                Voor het uitoefenen van deze rechten kunt u contact met ons opnemen via 
                info@creemersexclusive.nl.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">7. Beveiliging</h2>
              <p className="mb-4">
                Wij nemen passende technische en organisatorische maatregelen om uw gegevens 
                te beschermen tegen ongeautoriseerde toegang, verlies of diefstal.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">8. Cookies</h2>
              <p className="mb-4">
                Onze website gebruikt cookies om de gebruikerservaring te verbeteren. 
                Voor meer informatie verwijzen wij naar ons cookiebeleid.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">9. Klachten</h2>
              <p className="mb-4">
                Als u klachten heeft over de verwerking van uw gegevens, kunt u contact 
                met ons opnemen. U kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">10. Wijzigingen</h2>
              <p className="mb-4">
                Deze privacyverklaring kan van tijd tot tijd worden bijgewerkt. 
                Wijzigingen worden op deze pagina gepubliceerd.
              </p>
            </section>

            <div className="bg-creemers-gray-50 p-6 rounded-lg">
              <p className="text-sm text-creemers-gray-600">
                <strong>Laatste update:</strong> {new Date().toLocaleDateString('nl-NL')}
              </p>
              <p className="text-sm text-creemers-gray-600 mt-2">
                <strong>Contact:</strong> Voor vragen over deze privacyverklaring kunt u contact opnemen 
                via info@creemersexclusive.nl of +31 6 24 57 25 72.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
