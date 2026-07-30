export default function Terms() {
  return (
    <div className="flex flex-col w-full pt-24">
      <section className="py-20 md:py-28 border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-xs font-bold tracking-[0.16em] uppercase text-accent mb-6">Legal</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-sm">Last updated: April 2025 · Lab1 GmbH</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl space-y-14 text-sm text-muted-foreground leading-relaxed">

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">1. Scope and Parties</h2>
            <p>
              These Terms of Service ("Terms") govern all contracts between Lab1 GmbH, Mühlenkamp 12, 22303 Hamburg, Germany, registered at the Commercial Register of the Local Court Frankfurt am Main under HRB [Number], represented by Managing Director Alexander Auer ("Lab1", "we", "us"), and its enterprise customers ("Customer").
            </p>
            <p>
              These Terms apply exclusively to businesses, legal entities, and professionals acting in the exercise of their trade or profession. <strong className="text-white">The DAC platform is not offered to consumers.</strong> By activating API access or signing an order form, the Customer agrees to these Terms.
            </p>
            <p>
              The inclusion of the Customer's own general terms and conditions is hereby expressly rejected unless Lab1 has agreed to them in writing.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">2. Service Description</h2>
            <p>
              Lab1 operates the Diagnostic Agent Core (DAC) — an agentic AI infrastructure platform that enables enterprise customers to integrate diagnostic intelligence into their clinical, sports, or health network workflows. The DAC platform consists of:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white">Orchestration Layer:</strong> Data validation, context assembly, and routing across diagnostic inputs submitted via the API</li>
              <li><strong className="text-white">Interpretation Layer:</strong> Specialised AI agents (biomarker, pattern, consolidation) that analyse submitted diagnostic data and generate structured clinical context</li>
              <li><strong className="text-white">Output Layer:</strong> Structured recommendations, care guidance, longitudinal insights, and alert signals delivered back via the API</li>
            </ul>
            <p>
              Access to the platform is provided via a documented REST API and, where agreed, a dashboard interface. Lab1 reserves the right to update, extend, or modify the platform; material changes affecting existing integrations are communicated with reasonable advance notice.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">3. Contract Conclusion and API Access</h2>
            <p>
              A binding contract is formed when Lab1 and the Customer execute a written or electronic order form, master service agreement, or when Lab1 activates API credentials following acceptance of these Terms by the Customer's authorised representative.
            </p>
            <p>
              API credentials are personal to the Customer's organisation and must not be shared with third parties. The Customer is responsible for all activity occurring under their credentials.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">4. Subscription, Pricing, and Payment</h2>
            <p>
              The DAC platform is offered on a subscription basis at the tier and pricing agreed in the applicable order form. Unless stated otherwise:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Subscription fees are billed monthly or annually in advance</li>
              <li>Usage overages beyond the agreed API call volume are billed at the overage rate specified in the order form</li>
              <li>Invoices are due within 14 days of the invoice date</li>
              <li>Late payments accrue interest at 9 percentage points above the base rate per annum (§ 288(2) BGB)</li>
              <li>Lab1 may adjust pricing with 60 days' written notice; if the Customer does not accept the new pricing, they may terminate the subscription at the end of the current billing period</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">5. Customer Obligations</h2>
            <p>The Customer undertakes to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Obtain all necessary legal bases and, where required, explicit consents from patients or end users before submitting their health data to the DAC API, in compliance with GDPR Art. 9 and any applicable national health data law</li>
              <li>Use the platform only for lawful purposes and within the agreed use case</li>
              <li>Maintain technical and organisational measures to protect API credentials and prevent unauthorised access</li>
              <li>Not reverse engineer, decompile, or attempt to extract the underlying models or agent logic of the DAC</li>
              <li>Not submit data exceeding agreed volume limits without prior written agreement</li>
              <li>Notify Lab1 promptly of any security incident affecting API credentials or data transmitted to the platform</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">6. Data Processing Agreement</h2>
            <p>
              Where the Customer submits personal data (including health data) to the DAC API, Lab1 acts as a data processor within the meaning of Art. 28 GDPR, and the Customer is the data controller. A Data Processing Agreement ("DPA") — forming part of the contract — governs the processing of such data. The DPA specifies:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>The categories of data processed and the processing purposes</li>
              <li>Technical and organisational security measures</li>
              <li>The sub-processor chain and notification procedures</li>
              <li>Data deletion and return obligations upon contract termination</li>
            </ul>
            <p>
              Enterprise customers receive the DPA as part of the onboarding process. No health data may be submitted to the API prior to execution of a DPA.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">7. AI-Generated Outputs — Not Medical Advice</h2>
            <p>
              The outputs produced by the DAC platform — including recommendations, care guidance, biomarker interpretations, pattern analyses, and alerts — are generated by AI models and are provided <strong className="text-white">for informational and decision-support purposes only</strong>. They do not constitute:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Medical advice, diagnosis, or treatment within the meaning of applicable medical law</li>
              <li>A substitute for the professional clinical judgment of a licensed healthcare professional</li>
              <li>A certified medical device output unless separately agreed and documented in writing</li>
            </ul>
            <p>
              The Customer is solely responsible for how DAC outputs are used, communicated to, or acted upon by patients, athletes, or other end users. The Customer's clinical and scientific staff must apply appropriate professional judgment to all platform outputs before any clinical action is taken.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">8. Availability and Service Levels</h2>
            <p>
              Lab1 aims to maintain platform availability of 99.5% measured monthly, excluding scheduled maintenance windows communicated with at least 24 hours' notice and force majeure events. Service level commitments, including any credits for availability failures, are set out in the applicable order form or service level agreement.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">9. Confidentiality</h2>
            <p>
              Each party agrees to keep confidential all non-public information received from the other party in connection with the contract ("Confidential Information"), and to use it solely for the purposes of performing or receiving the services. Confidential Information does not include information that: (a) is or becomes publicly available through no breach of this clause; (b) was already known to the receiving party prior to disclosure; or (c) is independently developed without reference to the Confidential Information.
            </p>
            <p>
              This obligation survives termination of the contract for a period of three years.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">10. Liability and Limitation of Liability</h2>
            <p>Lab1 is liable without limitation for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Intentional misconduct or gross negligence</li>
              <li>Injury to life, body, or health caused by Lab1's fault</li>
              <li>Liability under mandatory statutory provisions (including the German Product Liability Act)</li>
            </ul>
            <p>
              For negligent breach of a material contractual obligation ("cardinal obligation"), Lab1's liability is limited to the contractually typical and foreseeable damage. In all other cases, Lab1's aggregate liability per contract year is capped at the total fees paid by the Customer to Lab1 in the 12 months preceding the event giving rise to the claim.
            </p>
            <p>
              Lab1 is not liable for: (a) clinical decisions made by the Customer's staff based on DAC outputs; (b) inaccuracies in data submitted by the Customer; (c) the Customer's failure to obtain required patient consents; or (d) third-party systems used by the Customer to integrate or act on DAC outputs.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">11. Term and Termination</h2>
            <p>
              Subscription contracts run for the initial term specified in the order form (typically 12 months) and automatically renew for successive periods of equal length unless either party gives written notice of non-renewal at least 60 days before the end of the then-current term.
            </p>
            <p>
              Either party may terminate the contract for cause (außerordentliche Kündigung) with immediate effect if: (a) the other party materially breaches the contract and fails to remedy the breach within 30 days of written notice; or (b) the other party becomes insolvent or subject to insolvency proceedings.
            </p>
            <p>
              Upon termination, Lab1 will disable API access, and the parties will comply with the DPA's data deletion and return obligations within 30 days.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">12. Applicable Law and Jurisdiction</h2>
            <p>
              These Terms are governed by the law of the Federal Republic of Germany, excluding the UN Convention on Contracts for the International Sale of Goods (CISG). The exclusive place of jurisdiction for all disputes arising from or in connection with these Terms is Frankfurt am Main, Germany, provided the Customer is a merchant (Kaufmann), a legal entity under public law, or a public law special fund.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white">13. Alternative Dispute Resolution</h2>
            <p>
              Lab1 is neither obligated nor willing to participate in dispute resolution proceedings before a consumer arbitration board. These Terms apply exclusively to business customers; the EU Online Dispute Resolution platform is not applicable.
            </p>
          </div>

          <div className="border-t border-border/40 pt-10 text-foreground/60 space-y-1">
            <p className="font-semibold text-white">Lab1 GmbH</p>
            <p>Mühlenkamp 12, 22303 Hamburg, Germany</p>
            <p>Email: <a href="mailto:support@lab1.de" className="text-accent hover:underline">support@lab1.de</a></p>
            <p>Managing Director: Alexander Auer</p>
          </div>

        </div>
      </section>
    </div>
  );
}
