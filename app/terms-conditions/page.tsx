import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden - Creemers Exclusive',
  description: 'Algemene voorwaarden voor Creemers Exclusive hospitality diensten',
}

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-creemers-white">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-creemers-black mb-8">
            Algemene Voorwaarden
          </h1>
          
          <div className="prose prose-lg max-w-none text-creemers-gray-700">
            <p className="text-xl mb-8">
              Deze algemene voorwaarden zijn van toepassing op alle diensten van Creemers Exclusive 
              en regelen de rechten en plichten tussen ons en onze klanten.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">1. Definities</h2>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Creemers Exclusive:</strong> Eenmanszaak onder leiding van Tom Creemers</li>
                <li><strong>Klant:</strong> De natuurlijke of rechtspersoon die diensten afneemt</li>
                <li><strong>Diensten:</strong> Alle hospitality diensten die wij verlenen</li>
                <li><strong>Overeenkomst:</strong> De overeenkomst tussen ons en de klant</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">2. Toepasselijkheid</h2>
              <p className="mb-4">
                Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten tussen 
                Creemers Exclusive en klanten, tenzij uitdrukkelijk anders overeengekomen.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">3. Aanbieding en Totstandkoming</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Onze aanbiedingen zijn vrijblijvend en onder voorbehoud van beschikbaarheid</li>
                <li>Een overeenkomst komt tot stand door wederzijdse aanvaarding</li>
                <li>Wijzigingen moeten schriftelijk worden overeengekomen</li>
                <li>Verbalen en mondelinge afspraken zijn slechts bindend na schriftelijke bevestiging</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">4. Prijzen en Betaling</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Alle prijzen zijn exclusief BTW, tenzij anders vermeld</li>
                <li>Prijzen kunnen worden aangepast bij onvoorziene omstandigheden</li>
                <li>Betaling dient plaats te vinden volgens de overeengekomen voorwaarden</li>
                <li>Bij late betaling zijn wij gerechtigd rente en kosten in rekening te brengen</li>
                <li>Wij behouden ons het recht voor om de dienstverlening op te schorten bij wanbetaling</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">5. Uitvoering Diensten</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Wij streven ernaar alle diensten naar beste kunnen uit te voeren</li>
                <li>De klant dient alle noodzakelijke informatie tijdig te verstrekken</li>
                <li>Wijzigingen tijdens uitvoering kunnen extra kosten met zich meebrengen</li>
                <li>De klant dient toegang te verlenen tot de locatie en benodigde faciliteiten</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">6. Annulering en Wijziging</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Annuleringen dienen schriftelijk te geschieden</li>
                <li>Bij annulering binnen 48 uur kunnen annuleringskosten worden berekend</li>
                <li>Bij annulering binnen 24 uur worden 100% van de kosten in rekening gebracht</li>
                <li>Wijzigingen zijn mogelijk in overleg en kunnen extra kosten met zich meebrengen</li>
                <li>Bij overmacht zijn beide partijen gerechtigd de overeenkomst op te zeggen</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">7. Aansprakelijkheid</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Onze aansprakelijkheid is beperkt tot het bedrag van de overeenkomst</li>
                <li>Wij zijn niet aansprakelijk voor indirecte schade</li>
                <li>De klant is verantwoordelijk voor schade aan eigendommen van derden</li>
                <li>Wij zijn niet aansprakelijk voor schade door overmacht</li>
                <li>De klant dient passende verzekeringen te hebben afgesloten</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">8. Intellectueel Eigendom</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Alle rechten op onze diensten en werkwijzen blijven bij ons</li>
                <li>De klant verkrijgt geen eigendom van onze methoden of concepten</li>
                <li>Het is niet toegestaan onze werkwijzen te kopiëren of na te bootsen</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">9. Geheimhouding</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Beide partijen verplichten zich tot geheimhouding van vertrouwelijke informatie</li>
                <li>Deze verplichting blijft bestaan na beëindiging van de overeenkomst</li>
                <li>Uitzonderingen gelden voor wettelijke verplichtingen</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">10. Geschillen</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Geschillen worden bij voorkeur in onderling overleg opgelost</li>
                <li>Bij onenigheid kunnen geschillen worden voorgelegd aan de bevoegde rechter</li>
                <li>Nederlands recht is van toepassing</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-creemers-black mb-6">11. Slotbepalingen</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Indien een bepaling nietig is, blijven de overige bepalingen van kracht</li>
                <li>Wijzigingen van deze voorwaarden worden schriftelijk medegedeeld</li>
                <li>Deze voorwaarden kunnen door ons eenzijdig worden gewijzigd</li>
              </ul>
            </section>

            <div className="bg-creemers-gray-50 p-6 rounded-lg">
              <p className="text-sm text-creemers-gray-600">
                <strong>Laatste update:</strong> {new Date().toLocaleDateString('nl-NL')}
              </p>
              <p className="text-sm text-creemers-gray-600 mt-2">
                <strong>Contact:</strong> Voor vragen over deze algemene voorwaarden kunt u contact opnemen 
                via info@creemersexclusive.nl of +31 6 24 57 25 72.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
