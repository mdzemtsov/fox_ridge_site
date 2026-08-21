import { motion } from "framer-motion";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50 pt-32 pb-24">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">Privacy Policy</h1>
          <p className="text-stone-500 mb-2">Effective Date: May 28, 2026</p>
          <p className="text-stone-500 mb-12">Last Updated: August 21, 2026</p>

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
              <li><strong>Contact Form Submissions:</strong> Name, email address, phone number, country of residence, and any message content you submit through our contact form.</li>
              <li><strong>Consent Notices:</strong> Relevant forms may ask you to acknowledge applicable notices before submitting your information.</li>
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
              <li><strong>Preferences and session controls:</strong> We use browser localStorage for theme preferences and the Investor Portal’s browser-session record, and sessionStorage to avoid repeatedly displaying the Investor List popup during the same browser session. These controls do not independently verify investor eligibility.</li>
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
              <li><strong>Contact form submissions:</strong> Retained for up to <strong>3 years</strong> from the date of submission, or until you request deletion, whichever comes first.</li>
              <li><strong>Server log data:</strong> Retained for up to <strong>90 days</strong> for security and operational purposes.</li>
              <li><strong>Browser storage data</strong> (theme preferences, Investor Portal browser-session record, and popup session preference): Stored locally in your browser only; retained according to the relevant feature’s session or expiry setting, or until you clear your browser data.</li>
            </ul>
            <p className="text-stone-600">
              After the applicable retention period, personal data is securely deleted or anonymized.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">4. Disclosure of Your Information</h2>
            <p className="text-stone-600 leading-relaxed">
              We do not sell, trade, rent, or otherwise transfer your personal information to third parties for their own marketing purposes. We may disclose personal information in the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-600">
              <li><strong>Service Providers:</strong> To trusted third-party vendors who assist us in operating our Website or conducting our business (e.g., email service providers, web hosting), subject to confidentiality obligations.</li>
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
              Depending on your country or state of residence, you may have additional rights under applicable data protection laws (including GDPR for EU/EEA residents, PIPEDA for Canadian residents, or other applicable frameworks). These rights may include the right to access, rectify, erase, restrict processing of, or port your personal data, and the right to object to processing. To exercise any such rights, please contact us at the address below.
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
        </motion.div>
      </div>
    </div>
  );
}
