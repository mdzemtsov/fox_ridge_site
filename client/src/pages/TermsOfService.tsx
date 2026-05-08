import { motion } from "framer-motion";
import { Link } from "wouter";

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50 pt-32 pb-24">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-8">Terms of Service</h1>
          <p className="text-stone-500 mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

          <div className="prose prose-stone max-w-none">
            <p>
              These Terms of Service ("Terms") govern your access to and use of the Fox Ridge Equity Partners website (the "Website"). By accessing or using the Website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Website.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">1. Informational Purposes Only; No Investment Advice</h2>
            <p>
              The content provided on this Website is for informational and educational purposes only. Nothing on this Website constitutes investment, legal, tax, or other advice, nor should it be relied upon in making an investment or other decision. You should obtain relevant and specific professional advice before making any investment decision.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">2. No Offer or Solicitation</h2>
            <p>
              Nothing on this Website shall be construed as an offer to sell, or a solicitation of an offer to buy, any security, investment product, or service. Any such offer or solicitation will be made only by means of a confidential private placement memorandum and related offering documents, and only in jurisdictions where permitted by law.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">3. Forward-Looking Statements</h2>
            <p>
              Certain information on this Website may contain forward-looking statements, which are subject to risks and uncertainties and speak only as of the date on which they are made. The words "believe", "expect", "anticipate", "optimistic", "intend", "aim", "will" or similar expressions are intended to identify forward-looking statements. Fox Ridge Equity Partners undertakes no obligation to update publicly or revise any forward-looking statements.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">4. Past Performance</h2>
            <p>
              Past performance is not indicative of future results. No representation is being made that any investment will or is likely to achieve profits or losses similar to those achieved in the past, or that significant losses will be avoided.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">5. Intellectual Property</h2>
            <p>
              The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Fox Ridge Equity Partners, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">6. Limitation of Liability</h2>
            <p>
              In no event will Fox Ridge Equity Partners, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Website, any websites linked to it, any content on the Website or such other websites.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">7. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
              <br />
              <a href="mailto:partners@foxridgeequity.com" className="text-secondary hover:underline">partners@foxridgeequity.com</a>
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-stone-200 flex flex-col sm:flex-row gap-4 items-start">
            <Link href="/" className="text-secondary font-semibold hover:underline text-sm">← Back to Home</Link>
            <Link href="/privacy-policy" className="text-secondary font-semibold hover:underline text-sm">Privacy Policy →</Link>
            <Link href="/contact" className="text-secondary font-semibold hover:underline text-sm">Contact Us →</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
