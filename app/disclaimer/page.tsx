import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer - Creemers Exclusive',
  description: 'Disclaimer voor Creemers Exclusive hospitality diensten',
}

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-creemers-white">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-creemers-black mb-8">
            Disclaimer
          </h1>
          
          <div className="prose prose-lg max-w-none text-creemers-gray-700">
            <p className="text-xl mb-8">
              Deze disclaimer bevat belangrijke informatie over het gebruik van onze website 
              en diensten. Lees deze disclaimer aandachtig door.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">1. Algemeen</h2>
              <p className="mb-4">
                Creemers Exclusive streeft ernaar om alle informatie op deze website accuraat 
                en actueel te houden. Desondanks kunnen wij niet garanderen dat alle informatie 
                volledig, juist of actueel is.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">2. Informatie op de Website</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Alle informatie op deze website is uitsluitend bedoeld als algemene informatie</li>
                <li>Wij streven naar juistheid, maar kunnen fouten niet uitsluiten</li>
                <li>Informatie kan zonder voorafgaande kennisgeving worden gewijzigd</li>
                <li>Wij adviseren altijd persoonlijk contact voor specifieke vragen</li>
                <li>Foto's en afbeeldingen zijn illustratief en kunnen afwijken van werkelijkheid</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">3. Aansprakelijkheid Uitgesloten</h2>
              <p className="mb-4">
                Creemers Exclusive aanvaardt geen aansprakelijkheid voor:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Directe of indirecte schade door gebruik van deze website</li>
                <li>Schade door onjuiste of onvolledige informatie</li>
                <li>Schade door technische storingen of onderbrekingen</li>
                <li>Schade door virussen of andere schadelijke software</li>
                <li>Schade door gebruik van externe links</li>
                <li>Schade door het niet kunnen gebruiken van de website</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">4. Externe Links</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Onze website kan links bevatten naar externe websites</li>
                <li>Wij hebben geen controle over deze externe websites</li>
                <li>Wij aanvaarden geen aansprakelijkheid voor inhoud van externe websites</li>
                <li>Het gebruik van externe links is op eigen risico</li>
                <li>Externe websites hebben hun eigen voorwaarden en privacybeleid</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">5. Diensten en Producten</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Beschrijvingen van diensten zijn indicatief</li>
                <li>Specifieke uitvoering kan afwijken van beschrijvingen</li>
                <li>Prijzen kunnen zonder voorafgaande kennisgeving worden gewijzigd</li>
                <li>Beschikbaarheid van diensten is onder voorbehoud</li>
                <li>Wij adviseren altijd persoonlijk contact voor definitieve afspraken</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">6. Intellectueel Eigendom</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Alle rechten op de inhoud van deze website berusten bij Creemers Exclusive</li>
                <li>Het is niet toegestaan om inhoud zonder toestemming te kopiëren</li>
                <li>Gebruik van afbeeldingen of teksten vereist schriftelijke toestemming</li>
                <li>Inbreuk op intellectueel eigendom wordt niet getolereerd</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">7. Gebruik van de Website</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Deze website is uitsluitend bedoeld voor informatiedoeleinden</li>
                <li>Het is niet toegestaan om de website te gebruiken voor illegale doeleinden</li>
                <li>Wij behouden ons het recht voor om toegang te weigeren</li>
                <li>Misbruik van de website kan leiden tot aansprakelijkheid</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">8. Technische Aspecten</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Wij streven naar optimale werking van de website</li>
                <li>Technische storingen kunnen niet volledig worden uitgesloten</li>
                <li>Wij aanvaarden geen aansprakelijkheid voor technische problemen</li>
                <li>Gebruikers dienen zelf voor adequate beveiliging te zorgen</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">9. Wijzigingen</h2>
              <p className="mb-4">
                Deze disclaimer kan zonder voorafgaande kennisgeving worden gewijzigd. 
                Wij adviseren regelmatig te controleren op wijzigingen.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">10. Toepasselijk Recht</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Op deze disclaimer is Nederlands recht van toepassing</li>
                <li>Geschillen worden voorgelegd aan de bevoegde Nederlandse rechter</li>
                <li>Indien bepalingen nietig zijn, blijven overige bepalingen van kracht</li>
              </ul>
            </section>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Belangrijke Opmerking</h3>
              <p className="text-red-700 mb-4">
                Deze disclaimer heeft beperkte juridische waarde en kan niet alle aansprakelijkheden uitsluiten. 
                Voor specifieke juridische vragen adviseren wij om juridisch advies in te winnen.
              </p>
              <p className="text-red-700">
                Creemers Exclusive streeft naar transparante en eerlijke dienstverlening. 
                Bij vragen of onduidelijkheden kunt u altijd contact met ons opnemen.
              </p>
            </div>

            <div className="bg-creemers-gray-50 p-6 rounded-lg mt-8">
              <p className="text-sm text-creemers-gray-600">
                <strong>Laatste update:</strong> {new Date().toLocaleDateString('nl-NL')}
              </p>
              <p className="text-sm text-creemers-gray-600 mt-2">
                <strong>Contact:</strong> Voor vragen over deze disclaimer kunt u contact opnemen 
                via info@creemersexclusive.nl of +31 6 24 57 25 72.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
