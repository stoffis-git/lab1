export default function Privacy() {
  return (
    <div className="flex flex-col w-full pt-24">
      <section className="py-20 md:py-28 border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-xs font-bold tracking-[0.16em] uppercase text-accent mb-6">Legal</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm">Last updated: April 2025 · Lab1 GmbH</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl space-y-14 text-sm text-muted-foreground leading-relaxed">

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">1. Introduction and Controller</h2>
            <p>
              We are pleased that you are visiting our website. Below we inform you about how we handle personal data when you use our site and our services. Personal data is any information that can be used to identify you directly or indirectly.
            </p>
            <p>
              The controller responsible for data processing on this website is:
            </p>
            <div className="border border-border rounded-xl p-5 text-foreground/80 space-y-1">
              <p className="font-semibold text-white">Lab1 GmbH</p>
              <p>Mühlenkamp 12, 22303 Hamburg, Germany</p>
              <p>Email: <a href="mailto:support@lab1.de" className="text-accent hover:underline">support@lab1.de</a></p>
              <p>Data Protection: <a href="mailto:datenschutz@lab1.de" className="text-accent hover:underline">datenschutz@lab1.de</a></p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">2. Data Collected When You Visit Our Website</h2>
            <p>
              When you visit our website for informational purposes only — without registering or submitting any information — we collect only the data your browser automatically transmits to our server (server log files). This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Pages visited and time of access</li>
              <li>Volume of data transferred</li>
              <li>Referring URL</li>
              <li>Browser type and operating system</li>
              <li>IP address (anonymised where possible)</li>
            </ul>
            <p>
              Processing is based on Art. 6(1)(f) GDPR — our legitimate interest in the stable operation and security of our website. Data is not shared with third parties and is not used for any other purpose. We reserve the right to review log files if there is specific evidence of unlawful use.
            </p>
            <p>
              All data transmissions on this site are protected by SSL/TLS encryption, indicated by "https://" in your browser address bar.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">3. Hosting</h2>
            <p>
              Our website is hosted by Vercel Inc., 340 Pine Street, Suite 1201, San Francisco, CA 94104, USA. Vercel processes data on our behalf under a Data Processing Agreement in accordance with Art. 28 GDPR. For transfers to the USA, Vercel participates in the EU–US Data Privacy Framework, ensuring an adequate level of data protection recognised by the European Commission.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">4. Cookies</h2>
            <p>
              We use only technically necessary cookies required to operate the website. We do not deploy advertising, tracking, or analytics cookies. No cookie consent banner is required for strictly necessary cookies under Art. 6(1)(f) GDPR.
            </p>
            <p>
              You can configure your browser to block or delete cookies at any time. Please note that disabling cookies may affect certain website functions.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">5. Contact</h2>
            <p>
              When you contact us via our contact form or by email, we process your data exclusively to handle and respond to your enquiry. The legal basis is Art. 6(1)(f) GDPR (legitimate interest in responding to enquiries), or Art. 6(1)(b) GDPR if your enquiry relates to a contractual matter. Data is deleted once the matter has been conclusively resolved, subject to any applicable retention obligations.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">6. Enterprise Customer Accounts and Platform Access</h2>
            <p>
              If you create an enterprise customer account or receive API access to the DAC platform, we process the following data to provide the service:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Account registration data (company name, contact person, email address)</li>
              <li>API credentials and access logs (request timestamps, endpoint usage, error rates)</li>
              <li>Billing information (processed via our payment provider under a separate DPA)</li>
              <li>Support communications</li>
            </ul>
            <p>
              The legal basis is Art. 6(1)(b) GDPR (performance of contract). Access logs are retained for up to 90 days for security and debugging purposes, and thereafter in anonymised form for capacity planning.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">7. Processing of Health Data — Lab1 as Data Processor</h2>
            <p>
              The DAC platform processes diagnostic and health data (including biomarker values and related clinical context) submitted by enterprise customers through the API. In this capacity, <strong className="text-white">Lab1 acts as a data processor</strong> within the meaning of Art. 28 GDPR. The enterprise customer (clinic, sports organisation, health network, or similar) is the data controller responsible for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Obtaining valid legal bases and, where required, explicit consent from their patients or members for the processing of health data</li>
              <li>Providing appropriate data subject information under Art. 13/14 GDPR</li>
              <li>Ensuring the accuracy and lawfulness of data submitted to the API</li>
            </ul>
            <p>
              Lab1 processes health data submitted through the API exclusively on documented instructions from the enterprise customer, as defined in the Data Processing Agreement (DPA) concluded between Lab1 and the customer prior to platform access. Lab1 does not use submitted health data for any purpose beyond service delivery and does not disclose it to third parties outside the agreed sub-processor chain.
            </p>
            <p>
              The legal basis for Lab1's own processing in this context is Art. 28 GDPR (processor contract) in conjunction with Art. 9(2)(h) GDPR where applicable.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">8. Sub-processors</h2>
            <p>
              To provide the DAC platform, Lab1 engages the following categories of sub-processors, each bound by a Data Processing Agreement:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-white">Cloud infrastructure and hosting:</strong> Vercel Inc. (USA — EU–US Data Privacy Framework)</li>
              <li><strong className="text-white">AI inference infrastructure:</strong> Providers used to run the agent models; identity disclosed to enterprise customers on request</li>
              <li><strong className="text-white">Billing:</strong> Payment processor operating under its own regulatory compliance framework</li>
            </ul>
            <p>
              Enterprise customers are notified of changes to the sub-processor list in advance in accordance with the DPA.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">9. Your Rights as a Data Subject</h2>
            <p>Under applicable data protection law you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-white">Access</strong> (Art. 15 GDPR): obtain confirmation of whether and which personal data we hold about you</li>
              <li><strong className="text-white">Rectification</strong> (Art. 16 GDPR): request correction of inaccurate data</li>
              <li><strong className="text-white">Erasure</strong> (Art. 17 GDPR): request deletion, subject to legal retention obligations</li>
              <li><strong className="text-white">Restriction</strong> (Art. 18 GDPR): request temporary suspension of processing</li>
              <li><strong className="text-white">Data portability</strong> (Art. 20 GDPR): receive your data in a structured, machine-readable format</li>
              <li><strong className="text-white">Withdrawal of consent</strong> (Art. 7(3) GDPR): where processing is based on consent, you may withdraw at any time without affecting prior lawful processing</li>
              <li><strong className="text-white">Object</strong> (Art. 21 GDPR): object to processing based on legitimate interests</li>
            </ul>
            <p>
              To exercise your rights, contact us at <a href="mailto:datenschutz@lab1.de" className="text-accent hover:underline">datenschutz@lab1.de</a>. We respond within 30 days, extendable to 60 days for complex requests with notification.
            </p>
            <p>
              Note: For health data processed on behalf of an enterprise customer, please contact that customer directly as the data controller. We will forward processor-level requests to the relevant customer as required by the DPA.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">10. Retention Periods</h2>
            <p>
              We retain personal data only for as long as necessary for the stated purpose or as required by law. Website log files are deleted after 30 days. Customer account data is retained for the duration of the contractual relationship and deleted within 90 days of contract termination, unless longer retention is required by commercial or tax law (typically 6–10 years for invoices and financial records). Health data processed on behalf of enterprise customers is deleted or returned in accordance with the DPA upon contract termination.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">11. Right to Lodge a Complaint</h2>
            <p>
              You have the right to lodge a complaint with a supervisory authority. The authority responsible for Lab1 GmbH is:
            </p>
            <div className="border border-border rounded-xl p-5 text-foreground/80 space-y-1">
              <p className="font-semibold text-white">Der Hessische Beauftragte für Datenschutz und Informationsfreiheit</p>
              <p>Gustav-Stresemann-Ring 1, 65189 Wiesbaden, Germany</p>
              <p>Phone: +49 611 1408-0</p>
              <p>Email: <a href="mailto:poststelle@datenschutz.hessen.de" className="text-accent hover:underline">poststelle@datenschutz.hessen.de</a></p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
