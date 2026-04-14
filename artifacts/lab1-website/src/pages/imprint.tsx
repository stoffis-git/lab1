export default function Imprint() {
  return (
    <div className="flex flex-col w-full pt-24">
      <section className="py-20 md:py-28 border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-xs font-bold tracking-[0.16em] uppercase text-accent mb-6">Legal</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Impressum
          </h1>
          <p className="text-muted-foreground text-sm">Angaben gemäß § 5 TMG</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl space-y-14 text-sm text-muted-foreground leading-relaxed">

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">Anbieter</h2>
            <div className="border border-border rounded-xl p-5 text-foreground/80 space-y-1">
              <p className="font-semibold text-white">Lab1 GmbH</p>
              <p>Europa-Allee 42</p>
              <p>60327 Frankfurt am Main</p>
              <p>Deutschland</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">Kontakt</h2>
            <p>
              E-Mail: <a href="mailto:support@lab1.de" className="text-accent hover:underline">support@lab1.de</a>
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">Vertretungsberechtigte Geschäftsführer</h2>
            <p>Alexander Auer</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">Handelsregister</h2>
            <p>Amtsgericht Frankfurt am Main</p>
            <p>HRB [Nummer]</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">Umsatzsteuer-Identifikationsnummer</h2>
            <p>
              Gemäß § 27a Umsatzsteuergesetz: DE[Nummer]
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">Verantwortlich für den Inhalt</h2>
            <p>
              Gemäß § 18 Abs. 2 MStV:
            </p>
            <p>
              Alexander Auer<br />
              Europa-Allee 42, 60327 Frankfurt am Main
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">Haftungsausschluss</h2>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
            </p>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">Online-Streitbeilegung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p>
              Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Das Angebot von Lab1 GmbH richtet sich ausschließlich an Unternehmen.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
