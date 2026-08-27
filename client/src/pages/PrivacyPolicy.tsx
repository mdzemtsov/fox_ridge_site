import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50 pt-32 pb-24">
      <div className="container max-w-4xl">
        <div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">Privacy Policy</h1>
          <p className="text-stone-500 mb-2">Effective Date: May 28, 2026</p>
          <p className="text-stone-500 mb-12">Last Updated: August 26, 2026</p>

          <div className="prose prose-stone max-w-none space-y-2">

            <p className="text-stone-600 leading-relaxed">
              FoxRidge Equity Partners, a trade name (DBA) of <strong>Consulting Point LLC</strong>, a Florida limited liability company ("we," "our," or "us"), respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit <strong>foxridgeequity.com</strong> (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>
            <p className="text-stone-600 leading-relaxed">
              By accessing or using our Website, you agree to this Privacy Policy. If you do not agree, please discontinue use of the Website.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">1. Information We Collect</h2>
            <p className="text-stone-600">We collect information in the following ways:</p>
            <h3 className="text-lg font-bold text-stone-800 mt-6 mb-2">a. Information You Provide Directly</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-600">
              <li><strong>Confidential-Introduction Form:</strong> Full name, email address, investor type, country or region, U.S. person status, indicative capital capacity, current interest, preferred time zone, optional message content, and the required privacy/contact-consent acknowledgement that you submit.</li>
              <li><strong>Detailed-Materials Requests:</strong> If you request a confidential introduction in connection with detailed materials, we use the same initial-introduction information to review the request. This form is not investor verification.</li>
            </ul>
            <h3 className="text-lg font-bold text-stone-800 mt-6 mb-2">b. Information Collected Automatically</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-600">
              <li><strong>Log Data:</strong> IP address, browser type and version, operating system, referring URL, pages visited, and time/date of visit.</li>
              <li><strong>Device Information:</strong> Hardware model, operating system version, and unique device identifiers.</li>
            </ul>
            <h3 className="text-lg font-bold text-stone-800 mt-6 mb-2">c. Cookies and Similar Technologies</h3>
            <p className="text-stone-600 leading-relaxed">
              Our Website uses the following types of cookies and browser storage:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-600">
              <li><strong>Theme preference:</strong> We use browser localStorage only to remember your selected display theme. The current public site does not use browser storage for investor verification, automatic lead-capture popups, or Investor Portal access.</li>
              <li><strong>Analytics Cookies:</strong> We do not currently use third-party analytics services (e.g., Google Analytics). If we add analytics in the future, this policy will be updated and a cookie consent banner will be displayed.</li>
              <li><strong>No Advertising Cookies:</strong> We do not use advertising, retargeting, or tracking cookies of any kind.</li>
            </ul>
            <p className="text-stone-600">
              You may control cookies and browser storage through your browser settings. Disabling storage may affect selected site preferences or session behavior.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">2. How We Use Your Information</h2>
            <p className="text-stone-600">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-600">
              <li>Respond to your inquiries and communicate with you about potential investment partnerships.</li>
              <li>Route a submitted confidential-introduction inquiry to FoxRidge’s designated operational inbox for individual review and send an automated confirmation of receipt to the email address submitted through the form.</li>
              <li>Present our Website and its contents to you.</li>
              <li>Comply with applicable legal and regulatory obligations.</li>
              <li>Improve and maintain our Website.</li>
              <li>Protect the security and integrity of our Website and business operations.</li>
            </ul>
            <p className="text-stone-600">
              We do not use your personal information for automated decision-making or profiling.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">3. Data Retention</h2>
            <p className="text-stone-600 leading-relaxed">
              We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-600">
              <li><strong>Confidential-introduction submissions:</strong> Routed through a Vercel-hosted endpoint, written to a private Vercel Blob store, and sent through Resend as an operational notification to <strong>partners@foxridgeequity.com</strong> and as an automated confirmation of receipt to the email address submitted through the form. The reviewed application source does not implement automated deletion; the retention schedule for these records must be administered under FoxRidge’s internal policy and applicable legal requirements.</li>
              <li><strong>Hosting and security logs:</strong> May be retained by the applicable hosting provider for security and operational purposes according to its service configuration.</li>
              <li><strong>Browser storage data</strong> (theme preference): Stored locally in your browser until you clear browser storage or change the preference.</li>
            </ul>
            <p className="text-stone-600">
              FoxRidge’s internal retention and deletion process for confidential-introduction records must be applied to the private record store; the reviewed website source does not itself automate deletion or anonymization.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">4. Disclosure of Your Information</h2>
            <p className="text-stone-600 leading-relaxed">
              We do not sell, trade, rent, or otherwise transfer your personal information to third parties for their own marketing purposes. We may disclose personal information in the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-600">
              <li><strong>Form routing, private storage, and email notification:</strong> The confidential-introduction implementation uses Vercel-hosted form routing, a private Vercel Blob store, and Resend to send the submitted inquiry as an operational notification to <strong>partners@foxridgeequity.com</strong> and an automated confirmation of receipt to the email address submitted through the form. No CRM is configured in the reviewed website source. Any additional provider will be evaluated and reflected in this policy as appropriate.</li>
              <li><strong>Legal Compliance:</strong> To comply with any applicable law, regulation, court order, or governmental request.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of all or a portion of our assets, with appropriate confidentiality protections.</li>
              <li><strong>Protection of Rights:</strong> To enforce our Terms of Service or protect the rights, property, or safety of FoxRidge Equity Partners / Consulting Point LLC, our users, or others.</li>
            </ul>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">5. Data Security</h2>
            <p className="text-stone-600 leading-relaxed">
              We implement reasonable administrative, technical, and physical safeguards designed to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. Our Website is served over HTTPS with TLS encryption. However, no method of transmission over the internet or method of electronic storage is 100% secure. We cannot guarantee absolute security of your information.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">6. Your Rights — California Residents (CCPA)</h2>
            <p className="text-stone-600 leading-relaxed">
              If you are a California resident, the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA) provide you with specific rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-600">
              <li><strong>Right to Know:</strong> You have the right to request that we disclose what personal information we have collected about you, the categories of sources, the purposes for collection, and the categories of third parties with whom we share it.</li>
              <li><strong>Right to Delete:</strong> You have the right to request deletion of personal information we have collected from you, subject to certain exceptions.</li>
              <li><strong>Right to Correct:</strong> You have the right to request correction of inaccurate personal information.</li>
              <li><strong>Right to Opt-Out of Sale or Sharing:</strong> <strong>We do not sell or share your personal information</strong> with third parties for cross-context behavioral advertising. There is nothing to opt out of at this time.</li>
              <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your CCPA rights.</li>
            </ul>
            <p className="text-stone-600">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:partners@foxridgeequity.com" className="text-secondary hover:underline">partners@foxridgeequity.com</a>.
              We will respond to verifiable consumer requests within 45 days.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">7. Your Rights — Other Jurisdictions</h2>
            <p className="text-stone-600 leading-relaxed">
              If you submit a confidential-introduction inquiry from outside the United States, your information may be routed through and stored using the website’s hosting, private-storage, and operational email-notification services, including Vercel and Resend. The reviewed application source does not implement a visitor-selected storage location or separate regional processing workflow. Depending on your country or state of residence, you may have additional rights under applicable data protection laws. To exercise a request regarding your information, please contact us at the address below.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">8. Children's Privacy</h2>
            <p className="text-stone-600 leading-relaxed">
              Our Website is not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you believe we have inadvertently collected such information, please contact us immediately and we will take steps to delete it.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">9. Third-Party Links</h2>
            <p className="text-stone-600 leading-relaxed">
              Our Website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-stone-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will post any changes on this page with an updated "Last Updated" date. Your continued use of the Website after any changes constitutes your acceptance of the revised policy. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">11. Contact Information</h2>
            <p className="text-stone-600 leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-stone-100 border border-stone-200 p-6 mt-4 text-stone-700 text-sm space-y-1">
              <p><strong>FoxRidge Equity Partners</strong> (a DBA of Consulting Point LLC)</p>
              <p>Email: <a href="mailto:partners@foxridgeequity.com" className="text-secondary hover:underline">partners@foxridgeequity.com</a></p>
              <p>State of Organization: Florida, USA</p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-stone-200 flex flex-col sm:flex-row gap-4 items-start">
            <Link href="/" className="text-secondary font-semibold hover:underline text-sm">← Back to Home</Link>
            <Link href="/terms-of-service" className="text-secondary font-semibold hover:underline text-sm">Terms of Service →</Link>
            <Link href="/contact" className="text-secondary font-semibold hover:underline text-sm">Contact Us →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
