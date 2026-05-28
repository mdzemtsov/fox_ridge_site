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
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">Terms of Service</h1>
          <p className="text-stone-500 mb-2">Effective Date: May 28, 2026</p>
          <p className="text-stone-500 mb-12">Last Updated: May 28, 2026</p>

          <div className="prose prose-stone max-w-none space-y-2">

            <p className="text-stone-600 leading-relaxed">
              These Terms of Service ("Terms") govern your access to and use of the website <strong>foxridgeequity.com</strong> (the "Website") operated by FoxRidge Equity Partners, a trade name (DBA) of <strong>Consulting Point LLC</strong>, a Florida limited liability company ("Company," "we," "our," or "us"). By accessing or using the Website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Website.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">1. Informational Purposes Only; No Investment Advice</h2>
            <p className="text-stone-600 leading-relaxed">
              The content provided on this Website is for informational and educational purposes only. Nothing on this Website constitutes investment, legal, tax, accounting, or other professional advice, nor should it be relied upon in making any investment or other decision. You should obtain relevant and specific professional advice before making any investment decision. The Company is not a registered investment adviser, broker-dealer, or financial planner.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">2. No Offer or Solicitation</h2>
            <p className="text-stone-600 leading-relaxed">
              Nothing on this Website shall be construed as an offer to sell, or a solicitation of an offer to buy, any security, investment product, or service. Any such offer or solicitation will be made only by means of a confidential private placement memorandum and related offering documents, and only to accredited investors in jurisdictions where permitted by applicable law.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">3. Forward-Looking Statements</h2>
            <p className="text-stone-600 leading-relaxed">
              Certain information on this Website may contain forward-looking statements, which are subject to known and unknown risks, uncertainties, and other factors that may cause actual results to differ materially from those expressed or implied. Forward-looking statements speak only as of the date on which they are made. The Company undertakes no obligation to update publicly or revise any forward-looking statements, whether as a result of new information, future events, or otherwise.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">4. Past Performance</h2>
            <p className="text-stone-600 leading-relaxed">
              Past performance is not indicative of future results. No representation is being made that any investment will or is likely to achieve profits or losses similar to those achieved in the past. All return figures, IRR projections, equity multiples, and other financial metrics presented on this Website are illustrative and based on assumptions that may not materialize. Real estate investments involve substantial risk, including the possible loss of all principal invested.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">5. Intellectual Property</h2>
            <p className="text-stone-600 leading-relaxed">
              The Website and its entire contents, features, and functionality — including but not limited to all information, software, text, displays, images, video, audio, market research reports, investment analyses, and the design, selection, and arrangement thereof — are owned by the Company, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="text-stone-600 leading-relaxed">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Website without the prior written consent of the Company, except as permitted by these Terms for your own personal, non-commercial use.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">6. Prohibited Uses</h2>
            <p className="text-stone-600">You agree not to use the Website:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-600">
              <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li>To transmit any unsolicited or unauthorized advertising or promotional material.</li>
              <li>To impersonate or attempt to impersonate the Company, a Company employee, or any other person or entity.</li>
              <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Website.</li>
              <li>To attempt to gain unauthorized access to any portion of the Website or any other systems or networks connected to it.</li>
            </ul>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-stone-600 leading-relaxed">
              THE WEBSITE AND ALL CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. THE COMPANY DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. THE COMPANY DOES NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">8. Limitation of Liability</h2>
            <p className="text-stone-600 leading-relaxed">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL THE COMPANY, ITS AFFILIATES, LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES — INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES — ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF, OR INABILITY TO USE, THE WEBSITE OR ANY CONTENT THEREON, EVEN IF THE COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="text-stone-600 leading-relaxed">
              IN NO EVENT SHALL THE COMPANY'S TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATING TO THESE TERMS OR YOUR USE OF THE WEBSITE EXCEED ONE HUNDRED U.S. DOLLARS ($100.00).
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">9. Indemnification</h2>
            <p className="text-stone-600 leading-relaxed">
              You agree to defend, indemnify, and hold harmless the Company and its affiliates, licensors, service providers, employees, agents, officers, and directors from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Website.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">10. Third-Party Links</h2>
            <p className="text-stone-600 leading-relaxed">
              The Website may contain links to third-party websites. These links are provided for your convenience only. The Company has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">11. Governing Law</h2>
            <p className="text-stone-600 leading-relaxed">
              These Terms and any dispute or claim arising out of or related to them, their subject matter, or their formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of the <strong>State of Florida</strong>, without giving effect to any choice or conflict of law provision or rule.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">12. Dispute Resolution</h2>
            <p className="text-stone-600 leading-relaxed">
              <strong>Informal Resolution:</strong> Before filing any formal legal claim, you agree to first contact us at <a href="mailto:partners@foxridgeequity.com" className="text-secondary hover:underline">partners@foxridgeequity.com</a> and attempt to resolve the dispute informally. We will attempt to resolve the dispute within 30 days of receiving your notice.
            </p>
            <p className="text-stone-600 leading-relaxed mt-4">
              <strong>Binding Arbitration:</strong> If the dispute cannot be resolved informally, you and the Company agree that any dispute, claim, or controversy arising out of or relating to these Terms or the Website shall be resolved by binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules, rather than in court. The arbitration shall be conducted in <strong>Miami-Dade County, Florida</strong>. The arbitrator's award shall be final and binding and may be entered as a judgment in any court of competent jurisdiction.
            </p>
            <p className="text-stone-600 leading-relaxed mt-4">
              <strong>Class Action Waiver:</strong> You agree that any arbitration or proceeding shall be limited to the dispute between you and the Company individually. To the fullest extent permitted by law, you waive the right to participate in a class action lawsuit or class-wide arbitration.
            </p>
            <p className="text-stone-600 leading-relaxed mt-4">
              <strong>Exceptions:</strong> Nothing in this section shall prevent either party from seeking injunctive or other equitable relief in a court of competent jurisdiction to prevent irreparable harm pending the outcome of arbitration.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">13. Jurisdiction and Venue</h2>
            <p className="text-stone-600 leading-relaxed">
              For any matters not subject to arbitration, you consent to the exclusive jurisdiction of the state and federal courts located in <strong>Miami-Dade County, Florida</strong>, and you waive any objection to the laying of venue in such courts.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">14. Changes to These Terms</h2>
            <p className="text-stone-600 leading-relaxed">
              We reserve the right to update or modify these Terms at any time. We will post any changes on this page with an updated "Last Updated" date. Your continued use of the Website after any changes constitutes your acceptance of the revised Terms.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">15. Severability and Waiver</h2>
            <p className="text-stone-600 leading-relaxed">
              If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The failure of the Company to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">16. Entire Agreement</h2>
            <p className="text-stone-600 leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and the Company regarding your use of the Website and supersede all prior and contemporaneous agreements, representations, and understandings.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">17. Contact Information</h2>
            <p className="text-stone-600 leading-relaxed">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-stone-100 border border-stone-200 p-6 mt-4 text-stone-700 text-sm space-y-1">
              <p><strong>FoxRidge Equity Partners</strong> (a DBA of Consulting Point LLC)</p>
              <p>Email: <a href="mailto:partners@foxridgeequity.com" className="text-secondary hover:underline">partners@foxridgeequity.com</a></p>
              <p>State of Organization: Florida, USA</p>
            </div>
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
