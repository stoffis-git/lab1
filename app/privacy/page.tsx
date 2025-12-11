import TextSection from '@/components/TextSection';
import Footer from '@/components/Footer';
import './page.css';

export default function Privacy() {
  return (
    <main>
      <TextSection background="white" maxWidth={800}>
        <h2 className="text-section__headline">Privacy Policy</h2>
        <p className="text-section__meta">Lab1 GmbH</p>

        <h3>1) Introduction and Contact Details of the Controller</h3>
        <p>
          <strong>1.1</strong> We are pleased that you are visiting our website and thank you for your interest. Below, we inform you about how we handle your personal data when using our website. Personal data is all data with which you can be personally identified.
        </p>
        <p>
          <strong>1.2</strong> The controller responsible for data processing on this website within the meaning of the General Data Protection Regulation (GDPR) is Lab1 GmbH, Europa-Allee 42, 60327 Frankfurt am Main, Germany, Tel.: [Phone Number], Email: support@lab1.de. The controller responsible for processing personal data is the natural or legal person who, alone or jointly with others, determines the purposes and means of processing personal data.
        </p>
        <p>
          <strong>1.3 Data Protection Officer:</strong><br />
          If you have any questions about data protection, you can contact our Data Protection Officer:<br />
          [Name of Data Protection Officer]<br />
          Email: datenschutz@lab1.de
        </p>

        <h3>2) Data Collection When Visiting Our Website</h3>
        <p>
          <strong>2.1</strong> When you use our website purely for information purposes, i.e., if you do not register or otherwise provide us with information, we only collect data that your browser transmits to the page server (so-called "server log files"). When you access our website, we collect the following data that is technically necessary for us to display the website to you:
        </p>
        <ul className="simple-list">
          <li>Our visited website</li>
          <li>Date and time at the time of access</li>
          <li>Amount of data sent in bytes</li>
          <li>Source/reference from which you arrived at the page</li>
          <li>Browser used</li>
          <li>Operating system used</li>
          <li>IP address used (possibly in anonymized form)</li>
        </ul>
        <p>
          Processing is carried out in accordance with Art. 6 Para. 1 lit. f GDPR based on our legitimate interest in improving the stability and functionality of our website. The data is not passed on or used in any other way. However, we reserve the right to subsequently check the server log files if there are concrete indications of illegal use.
        </p>
        <p>
          <strong>2.2</strong> For security reasons and to protect the transmission of personal data and other confidential content (e.g., orders, inquiries, test results), this website uses SSL or TLS encryption. You can recognize an encrypted connection by the character string "https://" and the lock symbol in your browser line.
        </p>

        <h3>3) Hosting & Content Delivery Network</h3>
        <p>
          <strong>3.1 Shopify</strong>
        </p>
        <p>
          We use the system of the following provider for hosting our website and displaying page content: Shopify International Limited, Victoria Buildings, 2nd Floor, 1-2 Haddington Road, Dublin 4, D04 XN32, Ireland ("Shopify")
        </p>
        <p>
          Data is also transferred to: Shopify Inc., 150 Elgin St, Ottawa, ON K2P 1L4, Canada
        </p>
        <p>
          All data collected on our website is processed on the provider's servers. We have concluded a data processing agreement with the provider that ensures the protection of our site visitors' data and prohibits unauthorized disclosure to third parties.
        </p>
        <p>
          For data transfers to Canada, an adequate level of data protection is guaranteed by an adequacy decision of the European Commission.
        </p>
        <p>
          <strong>3.2 Cloudflare</strong>
        </p>
        <p>
          We use a Content Delivery Network from the following provider: Cloudflare Inc., 101 Townsend St. San Francisco, CA 94107, USA
        </p>
        <p>
          This service enables us to deliver large media files such as graphics, page content, or scripts faster via a network of regionally distributed servers. Processing is carried out to safeguard our legitimate interest in improving the stability and functionality of our website in accordance with Art. 6 Para. 1 lit. f GDPR. We have concluded a data processing agreement with the provider that ensures the protection of our site visitors' data and prohibits unauthorized disclosure to third parties.
        </p>
        <p>
          For data transfers to the USA, the provider has joined the EU-US Data Privacy Framework, which ensures compliance with the European level of data protection on the basis of an adequacy decision by the European Commission.
        </p>

        <h3>4) Cookies</h3>
        <p>
          To make visiting our website attractive and to enable the use of certain functions, we use cookies, i.e., small text files that are stored on your device. Some of these cookies are automatically deleted after closing the browser (so-called "session cookies"), while others remain on your device for longer and enable the storage of page settings (so-called "persistent cookies"). In the latter case, you can see the storage duration in the overview of your web browser's cookie settings.
        </p>
        <p>
          If personal data is also processed by individual cookies used by us, processing is carried out in accordance with Art. 6 Para. 1 lit. b GDPR either to perform the contract, in accordance with Art. 6 Para. 1 lit. a GDPR in the event of consent being given, or in accordance with Art. 6 Para. 1 lit. f GDPR to safeguard our legitimate interests in the best possible functionality of the website and a customer-friendly and effective design of the page visit.
        </p>
        <p>
          You can set your browser so that you are informed about the setting of cookies and can decide individually about their acceptance or exclude the acceptance of cookies for certain cases or in general.
        </p>
        <p>
          Please note that if you do not accept cookies, the functionality of our website may be limited.
        </p>

        <h3>5) Contact</h3>
        <p>
          When you contact us (e.g., via contact form or email), personal data is processed exclusively for the purpose of processing and responding to your request and only to the extent necessary for this purpose.
        </p>
        <p>
          The legal basis for processing this data is our legitimate interest in responding to your request in accordance with Art. 6 Para. 1 lit. f GDPR. If your contact aims at a contract, the additional legal basis for processing is Art. 6 Para. 1 lit. b GDPR. Your data will be deleted when it is clear from the circumstances that the matter in question has been conclusively clarified and provided there are no legal retention obligations to the contrary.
        </p>

        <h3>6) Data Processing When Opening a Customer Account</h3>
        <p>
          In accordance with Art. 6 Para. 1 lit. b GDPR, personal data continues to be collected and processed to the extent necessary if you provide it to us when opening a customer account. You can see which data is required to open an account in the input mask of the corresponding form on our website.
        </p>
        <p>
          You can delete your customer account at any time by sending a message to the controller's address stated above. After deletion of your customer account, your data will be deleted provided that all contracts concluded via it have been fully processed, there are no legal retention periods to the contrary, and we have no legitimate interest in continuing to store the data.
        </p>
        <p>
          <strong>Special Feature Core Line:</strong> If you set up a customer account for using the Core Line, your DNA and blood test results will additionally be stored in your password-protected account and can be accessed by you at any time. You can request deletion of this health data at any time separately (see Section 7).
        </p>

        <h3>7) Processing of Special Categories of Personal Data (Health Data) - Core Line</h3>
        <p>
          <strong>7.1 General Information on Health Data</strong>
        </p>
        <p>
          As part of our Core Line offering, we process special categories of personal data within the meaning of Art. 9 Para. 1 GDPR, namely health data. This includes:
        </p>
        <ul className="simple-list">
          <li>DNA test results (genetic data)</li>
          <li>Blood test results (biomarker values)</li>
          <li>Product recommendations derived from them</li>
          <li>Historical data over time (changes in biomarkers)</li>
        </ul>
        <p>
          The processing of this sensitive data is carried out exclusively on the basis of your <strong>explicit consent</strong> in accordance with Art. 9 Para. 2 lit. a GDPR in conjunction with Art. 7 GDPR.
        </p>
        <p>
          <strong>7.2 Purposes of Processing Health Data</strong>
        </p>
        <p>We process your health data exclusively for the following purposes:</p>
        <ol className="simple-list">
          <li><strong>Laboratory Analysis:</strong> Evaluation of your DNA and blood samples by certified partner laboratories</li>
          <li><strong>Algorithmic Product Recommendation:</strong> Calculation of personalized supplement formulas based on your genetic variants and biomarker values</li>
          <li><strong>Progress Tracking:</strong> Tracking biomarker changes over time to adjust product formulas (Formula Rotation)</li>
          <li><strong>Customer Service:</strong> Answering your questions about your test results</li>
          <li><strong>Quality Assurance:</strong> Anonymized statistical evaluation to improve our algorithms and product formulas</li>
        </ol>
        <p>
          <strong>No Disclosure for Other Purposes:</strong> Your health data will NOT be used for advertising purposes, NOT be disclosed to insurance companies, employers, or other third parties, and NOT be used for genetic research, unless you provide separate, voluntary consent for this.
        </p>
        <p>
          <strong>7.3 Legal Basis for Processing</strong>
        </p>
        <p>
          The processing of your health data is based on your <strong>explicit consent</strong> in accordance with Art. 9 Para. 2 lit. a GDPR in conjunction with Art. 7 GDPR. You provide this consent:
        </p>
        <ul className="simple-list">
          <li>When ordering a test kit by checking the corresponding checkbox in the ordering process</li>
          <li>By signing the consent form included with the test kit</li>
          <li>By sending the sample to the partner laboratory</li>
        </ul>
        <p>
          Your consent is <strong>voluntary</strong>. You can <strong>withdraw your consent at any time with effect for the future</strong>, without affecting the lawfulness of processing based on consent before its withdrawal. Upon withdrawal, your health data will be deleted immediately, provided there are no legal retention obligations.
        </p>
        <p>
          <strong>7.4 Data Recipients (Partner Laboratories)</strong>
        </p>
        <p>
          Your samples and the associated personal data (name, date of birth, sample number) are passed on to the following certified partner laboratories for analysis:
        </p>
        <p>
          <strong>DNA Test:</strong><br />
          [Name of DNA Laboratory]<br />
          [Address]<br />
          [Certification: e.g., ISO 15189, CAP-accredited]
        </p>
        <p>
          <strong>Blood Test:</strong><br />
          [Name of Blood Laboratory]<br />
          [Address]<br />
          [Certification: e.g., ISO 15189]
        </p>
        <p>
          We have concluded <strong>Data Processing Agreements (DPA)</strong> in accordance with Art. 28 GDPR with all partner laboratories, which ensure that:
        </p>
        <ul className="simple-list">
          <li>The laboratories only process your data on our instructions</li>
          <li>Strict confidentiality is maintained</li>
          <li>Appropriate technical and organizational measures are taken to protect your data</li>
          <li>No disclosure to further third parties takes place</li>
          <li>Data is deleted or returned after completion of the analysis</li>
        </ul>
        <p>
          <strong>7.5 Data Security and Encryption</strong>
        </p>
        <p>Your health data is processed with the highest security standards:</p>
        <ul className="simple-list">
          <li><strong>Transport:</strong> Encrypted transmission via SSL/TLS (at least TLS 1.2)</li>
          <li><strong>Storage:</strong> Encrypted database storage (AES-256)</li>
          <li><strong>Access:</strong> Strictly limited access only for authorized employees with two-factor authentication</li>
          <li><strong>Samples:</strong> Pseudonymization through sample numbers (laboratories do not know your name)</li>
          <li><strong>Separation:</strong> Genetic data and identification data are stored separately</li>
        </ul>
        <p>
          <strong>7.6 Storage Duration of Health Data</strong>
        </p>
        <p>Your health data is stored as follows:</p>
        <table className="privacy-table">
          <thead>
            <tr>
              <th>Data Type</th>
              <th>Storage Duration</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Raw Data (DNA Test)</strong></td>
              <td>Duration of business relationship</td>
              <td>For product adjustment and customer service</td>
            </tr>
            <tr>
              <td><strong>Raw Data (Blood Tests)</strong></td>
              <td>Duration of business relationship + 3 months after last test</td>
              <td>Progress monitoring</td>
            </tr>
            <tr>
              <td><strong>Test Result Reports (PDF)</strong></td>
              <td>Duration of business relationship</td>
              <td>Always accessible for you</td>
            </tr>
            <tr>
              <td><strong>Product Recommendations</strong></td>
              <td>Duration of business relationship</td>
              <td>Documentation of formulas</td>
            </tr>
            <tr>
              <td><strong>Anonymized Statistics</strong></td>
              <td>Unlimited</td>
              <td>Quality assurance (no traceability to you)</td>
            </tr>
          </tbody>
        </table>
        <p>
          After termination of the business relationship (account closure or 12 months of inactivity for Core Line), all personalized health data will be deleted, provided there are no legal retention obligations (e.g., commercial law retention of invoices for 10 years).
        </p>
        <p>
          <strong>You can request immediate deletion of your health data at any time</strong> (see Section 7.9 - Your Rights).
        </p>
        <p>
          <strong>7.7 No Disclosure to Third Parties</strong>
        </p>
        <p>Your health data will <strong>NOT</strong> be disclosed to:</p>
        <ul className="simple-list">
          <li>❌ Insurance companies (health, life, disability insurance)</li>
          <li>❌ Employers</li>
          <li>❌ Authorities (except in case of legal obligation)</li>
          <li>❌ Research institutions (without separate consent)</li>
          <li>❌ Advertising partners</li>
          <li>❌ Other customers or users</li>
        </ul>
        <p><strong>Exceptions (only with separate consent):</strong></p>
        <ul className="simple-list">
          <li>Voluntary participation in research projects (anonymized or pseudonymized)</li>
          <li>Disclosure to doctors or naturopaths named by you at your express request</li>
        </ul>
        <p>
          <strong>7.8 Special Feature: Medical Second Opinion</strong>
        </p>
        <p>
          If abnormalities occur in your test results that could indicate serious health problems (e.g., extremely high homocysteine value {">"} 20 μmol/L, ferritin {"<"} 10 ng/mL), we may point this out and recommend that you consult a doctor. However, we do <strong>not</strong> transmit any of your data to doctors unless you expressly instruct us to do so.
        </p>
        <p>
          <strong>7.9 Your Rights Regarding Your Health Data</strong>
        </p>
        <p>You have the following special rights:</p>
        <p>
          <strong>Right of Access (Art. 15 GDPR):</strong><br />
          You can request a copy of all your stored health data in machine-readable format (JSON, CSV) at any time.
        </p>
        <p>
          <strong>Right to Rectification (Art. 16 GDPR):</strong><br />
          If you believe that your health data is incorrect, you can request correction. Please note: Laboratory test results are objective measured values and cannot be changed retrospectively. If you doubt the accuracy, you can request retesting.
        </p>
        <p>
          <strong>Right to Erasure (Art. 17 GDPR):</strong><br />
          You can request the <strong>immediate and complete deletion</strong> of your health data at any time. This includes:
        </p>
        <ul className="simple-list">
          <li>All DNA test results</li>
          <li>All blood test results</li>
          <li>All product recommendations derived from them</li>
          <li>All historical data</li>
        </ul>
        <p>
          <strong>Important:</strong> After deletion, we can no longer create personalized product recommendations. Current subscriptions may need to be terminated. Anonymized data for quality assurance remains (no traceability to you).
        </p>
        <p>
          <strong>Right to Restriction of Processing (Art. 18 GDPR):</strong><br />
          You can request that your health data is temporarily not processed (e.g., while you have the accuracy verified).
        </p>
        <p>
          <strong>Right to Data Portability (Art. 20 GDPR):</strong><br />
          You can receive your health data in a structured, commonly used, and machine-readable format and have it transmitted to another provider.
        </p>
        <p>
          <strong>Right to Withdraw Consent (Art. 7 Para. 3 GDPR):</strong><br />
          You can withdraw your consent to the processing of your health data at any time. After withdrawal, your data will be deleted (see above).
        </p>
        <p>
          <strong>How to Exercise Your Rights:</strong><br />
          Email: datenschutz@lab1.de<br />
          Letter: Lab1 GmbH, Data Protection, Europa-Allee 42, 60327 Frankfurt am Main<br />
          Via your customer account: Settings → Privacy → Delete Health Data
        </p>
        <p>
          We respond to inquiries within <strong>30 days</strong> (may be extended to 60 days for complex inquiries with justification).
        </p>
        <p>
          <strong>7.10 Right to Lodge a Complaint with the Supervisory Authority</strong>
        </p>
        <p>
          You have the right to lodge a complaint with the competent data protection supervisory authority regarding the processing of your health data:
        </p>
        <p>
          <strong>Hessian Commissioner for Data Protection and Freedom of Information</strong><br />
          Gustav-Stresemann-Ring 1<br />
          65189 Wiesbaden, Germany<br />
          Phone: +49 611 1408 - 0<br />
          Email: poststelle@datenschutz.hessen.de<br />
          Website: https://datenschutz.hessen.de
        </p>

        <h3>8) Use of Customer Data for Direct Marketing</h3>
        <p>
          <strong>8.1 Registration for Our Email Newsletter</strong>
        </p>
        <p>
          If you register for our email newsletter, we will regularly send you information about our offers. The only mandatory information for sending the newsletter is your email address. Providing additional data is voluntary and will be used to address you personally. For newsletter dispatch, we use the so-called double opt-in procedure, which ensures that you only receive newsletters after you have expressly confirmed your consent to receive newsletters by clicking a verification link sent to the specified email address.
        </p>
        <p>
          By activating the confirmation link, you give us your consent to use your personal data in accordance with Art. 6 Para. 1 lit. a GDPR. We store your IP address entered by the Internet Service Provider (ISP) as well as the date and time of registration to be able to trace possible misuse of your email address at a later time.
        </p>
        <p>
          You can unsubscribe from the newsletter at any time via the link provided in the newsletter or by sending a corresponding message to the controller mentioned at the beginning.
        </p>
        <p>
          <strong>Important:</strong> Newsletters do <strong>NOT</strong> contain personalized health information or test results. You can only find these in your password-protected customer account.
        </p>
        <p>
          <strong>8.2 Sending Email Newsletter to Existing Customers</strong>
        </p>
        <p>
          If you have provided us with your email address when purchasing goods or services, we reserve the right to regularly send you offers for similar goods or services from our range by email. For this purpose, we do not need to obtain separate consent from you in accordance with Section 7 Para. 3 UWG. Data processing is based solely on our legitimate interest in personalized direct advertising in accordance with Art. 6 Para. 1 lit. f GDPR.
        </p>
        <p>
          You are entitled to object to the use of your email address for the aforementioned advertising purpose at any time with effect for the future by sending a message to the controller mentioned at the beginning.
        </p>
        <p>
          <strong>8.3 Klaviyo</strong>
        </p>
        <p>
          Our email newsletters and other promotional email communication are sent via this provider: Klaviyo, Inc., 125 Summer St., Ste 600, Boston, MA 02110, USA
        </p>
        <p>
          Based on our legitimate interest in effective and user-friendly email marketing, we pass on your data provided during registration to this provider in accordance with Art. 6 Para. 1 lit. f GDPR.
        </p>
        <p>
          We have concluded a data processing agreement with the provider that protects the data of our site visitors and prohibits disclosure to third parties.
        </p>
        <p>
          For data transfers to the USA, the provider has joined the EU-US Data Privacy Framework.
        </p>
        <p>
          <strong>Important:</strong> <strong>NO health data</strong> is transmitted to Klaviyo. Newsletter dispatch only uses general marketing data (name, email, purchase history).
        </p>
        <p>
          <strong>8.4 Test Kit Shipping Notifications (Core Line)</strong>
        </p>
        <p>
          If you subscribe to a Core Line subscription, you will receive automatic email notifications:
        </p>
        <ul className="simple-list">
          <li><strong>5-7 days before</strong> shipping a new blood test kit (quarterly)</li>
          <li><strong>Upon shipping</strong> of the test kit (tracking information)</li>
          <li><strong>Upon receipt of sample</strong> at the laboratory (confirmation)</li>
          <li><strong>Upon availability</strong> of test results</li>
        </ul>
        <p>
          These notifications are <strong>necessary for contract fulfillment</strong> in accordance with Art. 6 Para. 1 lit. b GDPR and cannot be unsubscribed from (would otherwise impair your contract performance).
        </p>

        <h3>9) Data Processing for Order Fulfillment</h3>
        <p>
          <strong>9.1</strong> To the extent necessary for contract processing for delivery and payment purposes, the personal data we collect is passed on to the commissioned transport company and the commissioned credit institution in accordance with Art. 6 Para. 1 lit. b GDPR.
        </p>
        <p>
          <strong>Special Feature Test Kits:</strong> When ordering Core Line test kits, your contact details (name, date of birth) are additionally passed on to the partner laboratory so that the sample can be correctly assigned. The disclosure is made in accordance with Art. 6 Para. 1 lit. b GDPR (contract fulfillment) and Art. 9 Para. 2 lit. a GDPR (consent for health data).
        </p>
        <p>
          <strong>9.2 Disclosure of Personal Data to Shipping Service Providers</strong>
        </p>
        <p>
          <strong>DPD</strong>
        </p>
        <p>
          We use the following transport service provider: DPD Deutschland GmbH, Wailandtstraße 1, 63741 Aschaffenburg, Germany
        </p>
        <p>
          We pass on your email address and/or telephone number to the provider in accordance with Art. 6 Para. 1 lit. a GDPR before delivery for the purpose of coordinating a delivery date, provided you have given your express consent for this in the ordering process.
        </p>
        <p>
          <strong>Important:</strong> DPD packages with test kits are <strong>neutrally packaged</strong> without indication of the contents (health data protection).
        </p>
        <p>
          <strong>9.3 Use of Payment Service Providers</strong>
        </p>
        <p>
          <strong>PayPal</strong>
        </p>
        <p>
          The following provider's online payment methods are available on this website: PayPal (Europe) S.a.r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg
        </p>
        <p>
          When selecting a payment method from the provider, your payment data is passed on for payment processing in accordance with Art. 6 Para. 1 lit. b GDPR.
        </p>
        <p>
          <strong>Shopify Payments / Stripe</strong>
        </p>
        <p>
          The following provider's online payment methods are available on this website: Stripe Payments Europe Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Ireland
        </p>
        <p>
          When selecting a payment method, your payment data is passed on for payment processing in accordance with Art. 6 Para. 1 lit. b GDPR.
        </p>
        <p>
          <strong>Important:</strong> <strong>NO health data</strong> is transmitted to payment service providers. Product descriptions in payment transactions are generic (e.g., "Lab1 Core Line Subscription") without details on test results.
        </p>

        <h3>10) Online Marketing</h3>
        <p>
          <strong>10.1 Google Ads & Meta Pixel</strong>
        </p>
        <p>
          We use online marketing tools (Google Ads, Meta Pixel) to display advertising.
        </p>
        <p>
          <strong>Important:</strong> These tools are <strong>ONLY used for Essential Line</strong> (standard supplements). <strong>Core Line customers</strong> (with health data) are <strong>NOT</strong> addressed through retargeting or personalized advertising to protect your health data.
        </p>
        <p>
          All marketing processing only takes place with your express consent in accordance with Art. 6 Para. 1 lit. a GDPR via our cookie consent tool.
        </p>

        <h3>11) Web Analysis Services</h3>
        <p>
          <strong>11.1 Google Analytics 4</strong>
        </p>
        <p>
          This website uses Google Analytics 4, a web analysis service by Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Ireland.
        </p>
        <p>
          <strong>Important:</strong> For Core Line customers, <strong>anonymized analyses</strong> are carried out. Pages with health data (test results, product recommendations) are <strong>excluded</strong> from Google Analytics.
        </p>
        <p>
          Processing only takes place with your consent in accordance with Art. 6 Para. 1 lit. a GDPR via our cookie consent tool.
        </p>
        <p>
          We have concluded a data processing agreement with Google.
        </p>

        <h3>12) Site Functionalities</h3>
        <p>
          <strong>12.1 Google Maps</strong>
        </p>
        <p>
          This website uses Google Maps by Google Ireland Limited to display our location.
        </p>
        <p>
          Processing is carried out in accordance with Art. 6 Para. 1 lit. f GDPR based on our legitimate interest.
        </p>
        <p>
          <strong>12.2 Typeform</strong>
        </p>
        <p>
          We use the following provider for online forms and surveys: TYPEFORM SL, Carrer de Can Rabia 3-5, 4th Floor, 08017 Barcelona, Spain
        </p>
        <p>
          <strong>Important:</strong> Health data is <strong>NOT</strong> collected via Typeform forms. For Core Line consents, we use internal, GDPR-compliant forms.
        </p>

        <h3>13) Tools and Miscellaneous</h3>
        <p>
          <strong>Cookie Consent Tool</strong>
        </p>
        <p>
          This website uses a cookie consent tool to obtain effective user consent for consent-required cookies and cookie-based applications.
        </p>
        <p>
          The tool sets technically necessary cookies to store your cookie preferences. Processing is carried out in accordance with Art. 6 Para. 1 lit. c and f GDPR.
        </p>

        <h3>14) Rights of the Data Subject</h3>
        <p>
          <strong>14.1</strong> Applicable data protection law grants you the following data subject rights (information and intervention rights) vis-à-vis the controller with regard to the processing of your personal data:
        </p>
        <ul className="simple-list">
          <li><strong>Right of Access</strong> in accordance with Art. 15 GDPR</li>
          <li><strong>Right to Rectification</strong> in accordance with Art. 16 GDPR</li>
          <li><strong>Right to Erasure</strong> in accordance with Art. 17 GDPR</li>
          <li><strong>Right to Restriction of Processing</strong> in accordance with Art. 18 GDPR</li>
          <li><strong>Right to Notification</strong> in accordance with Art. 19 GDPR</li>
          <li><strong>Right to Data Portability</strong> in accordance with Art. 20 GDPR</li>
          <li><strong>Right to Withdraw Consent</strong> in accordance with Art. 7 Para. 3 GDPR</li>
          <li><strong>Right to Lodge a Complaint</strong> in accordance with Art. 77 GDPR</li>
        </ul>
        <p>
          <strong>Special Consideration for Health Data:</strong> See detailed rights in Section 7.9.
        </p>
        <p>
          <strong>14.2 RIGHT TO OBJECT</strong>
        </p>
        <p>
          IF WE PROCESS YOUR PERSONAL DATA BASED ON A BALANCE OF INTERESTS DUE TO OUR OVERRIDING LEGITIMATE INTEREST, YOU HAVE THE RIGHT TO OBJECT TO THIS PROCESSING AT ANY TIME WITH EFFECT FOR THE FUTURE FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION.
        </p>
        <p>
          IF YOU EXERCISE YOUR RIGHT TO OBJECT, WE WILL END THE PROCESSING OF THE DATA CONCERNED.
        </p>
        <p>
          IF YOUR PERSONAL DATA IS PROCESSED BY US FOR DIRECT MARKETING PURPOSES, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF PERSONAL DATA CONCERNING YOU FOR THE PURPOSE OF SUCH ADVERTISING.
        </p>

        <h3>15) Duration of Storage of Personal Data</h3>
        <p>
          The duration of storage of personal data is determined by the respective legal basis, the processing purpose and – if applicable – additionally by the respective legal retention period.
        </p>
        <p>
          <strong>Special Storage Periods for Health Data:</strong> See detailed table in Section 7.6.
        </p>
        <p>
          When processing personal data on the basis of express consent in accordance with Art. 6 Para. 1 lit. a GDPR, the data concerned is stored until you withdraw your consent.
        </p>
        <p>
          If legal retention periods exist (e.g., commercial and tax retention periods of 6-10 years), data is routinely deleted after these periods expire, provided it is no longer required for contract fulfillment.
        </p>

        <hr className="privacy-divider" />

        <h3>Contact</h3>
        <p>
          <strong>Lab1 GmbH</strong><br />
          Europa-Allee 42<br />
          60327 Frankfurt am Main<br />
          Germany
        </p>
        <p>
          Email: support@lab1.de<br />
          Privacy: datenschutz@lab1.de<br />
          Phone: [Phone Number]
        </p>

        <p className="text-section__meta">© 2025 Lab1 GmbH. All rights reserved.</p>
      </TextSection>

      <Footer
        logo="Lab1"
        tagline="Personalized nutrition for the body you have, not the one you're supposed to want."
        columns={[
          {
            title: 'Explore',
            links: [
              { label: 'Products', href: '/get-started' },
              { label: 'How it works', href: '/how-it-works' },
            ],
          },
          {
            title: 'Learn',
            links: [
              { label: 'About Lab1', href: '/about' },
              { label: 'Science', href: '/science' },
              { label: 'FAQ', href: '/faq' },
            ],
          },
          {
            title: 'Connect',
            links: [
              { label: 'Contact', href: '/contact' },
              { label: 'Locations', href: '/locations' },
            ],
          },
        ]}
        copyright="© 2025 Lab1. All rights reserved."
        legalLinks={[
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Terms of Service', href: '/terms' },
        ]}
      />
    </main>
  );
}
