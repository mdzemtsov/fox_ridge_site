import { Link } from "wouter";

export default function Disclosures() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 pb-24 pt-32">
      <div className="container max-w-4xl">
        <div>
          <h1 className="mb-4 font-display text-4xl font-bold text-stone-900 md:text-5xl">Disclosures</h1>
          <p className="mb-12 text-stone-500">Last Updated: September 29, 2026</p>

          <div className="prose prose-stone max-w-none space-y-2">
            <p className="leading-relaxed text-stone-600">
              FoxRidge Equity Partners is a trade name (DBA) of Consulting Point LLC, a Florida limited liability company (together, “FoxRidge,” “we,” or “us”). These disclosures apply to general information made available through foxridgeequity.com and FoxRidge’s related communications and materials. They supplement our Terms of Service and Privacy Policy. The definitive documents for a particular transaction govern that transaction.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-stone-900">General information; no advice</h2>
            <p className="leading-relaxed text-stone-600">
              The website, research, presentations, sample deal materials, emails, and introductory conversations are provided for general informational and educational purposes. They are not individualized investment, legal, tax, accounting, or financial advice or a recommendation that any person acquire, hold, or dispose of an investment. FoxRidge is not acting as your investment adviser, broker-dealer, attorney, accountant, or tax adviser through these communications. Each prospective capital partner should conduct independent due diligence and consult its own qualified advisers regarding its circumstances.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-stone-900">No offer through the website</h2>
            <p className="leading-relaxed text-stone-600">
              General descriptions of FoxRidge’s strategy, target markets, partnership model, or illustrative transactions are not the terms of a current investment opportunity. No investment decision should be made on the basis of this website or an introductory discussion. An offer to invest, if any, will be made only to eligible persons in jurisdictions where permitted, through the applicable issuer’s definitive offering and transaction documents. Those documents, and not this page or any summary, will describe the investment, terms, fees and expenses, conflicts, investor qualifications, risk factors, governance rights, and transfer restrictions. FoxRidge may decline any inquiry or proposed investment in its discretion, subject to applicable law.
            </p>
            <p className="leading-relaxed text-stone-600">
              Interests in an asset-specific entity may constitute securities. Any offering of such interests must comply with an available registration exemption and applicable federal, state, and non-U.S. requirements. Where an offering relies on Rule 506(c) of Regulation D, all purchasers must be accredited investors, and the issuer must take reasonable steps to verify that status before a sale. An expression of interest, meeting, or access to preliminary materials does not establish eligibility or create any right to invest.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-stone-900">Transaction-specific structure and rights</h2>
            <p className="leading-relaxed text-stone-600">
              FoxRidge describes an asset-specific approach in which a prospective capital partner evaluates a particular multifamily property before committing capital and FoxRidge generally undertakes sourcing, financing, closing, asset management, and operating oversight. This describes an intended model, not a promise that any property will be acquired or any particular financing, ownership percentage, governance right, co-investment amount, distribution, or exit will be available. The legal structure, FoxRidge’s capital contribution, reserved matters, consent rights, fees, and responsibilities are determined separately for each transaction and are effective only as stated in executed definitive documents. Lender terms and approval are outside FoxRidge’s sole control.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-stone-900">Investment risks and illiquidity</h2>
            <p className="leading-relaxed text-stone-600">
              Real estate investments are speculative and involve substantial risk, including the possible loss of all invested capital. Risks may include changes in property values, rents, occupancy, operating costs, taxes, insurance, interest rates, financing availability or terms, construction and capital expenditures, environmental conditions, severe weather, regulatory requirements, and the performance of property managers and other counterparties. Leverage can magnify losses and create refinancing or repayment risk. Distributions may be delayed, reduced, or unavailable. An investment may be illiquid, subject to transfer restrictions, and held for longer than anticipated. A prospective investor must review the risk factors in the documents for the specific opportunity.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-stone-900">Estimates and forward-looking information</h2>
            <p className="leading-relaxed text-stone-600">
              Underwriting, budgets, targets, projections, expected hold periods, return illustrations, and statements about future markets or performance reflect assumptions and judgments as of the date stated. They are not guarantees. Actual events and results may differ materially, and FoxRidge undertakes no duty to update such information except as required by law or the applicable documents. Illustrations and sample deals may omit transaction-specific details and should not be treated as an available offering or a prediction of results.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-stone-900">Principal experience and past performance</h2>
            <p className="leading-relaxed text-stone-600">
              Descriptions of transactions, properties, units, or exits involving FoxRidge’s principals refer to their cumulative career participation, including work at other firms and with other sponsors. They are not the historical performance or investment record of FoxRidge Equity Partners or Consulting Point LLC as an entity. Roles, ownership, capital at risk, and outcomes may have differed across those transactions. Past performance does not predict or guarantee future results.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-stone-900">Third-party information</h2>
            <p className="leading-relaxed text-stone-600">
              Market data, research, opinions, and other information may come from third-party sources believed to be useful. FoxRidge has not necessarily independently verified every item, and sources, estimates, and conditions may change. References to third parties do not imply endorsement, affiliation, or any guarantee of accuracy or future performance. Nothing here limits any rights or remedies that cannot lawfully be excluded.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-stone-900">International investors</h2>
            <p className="leading-relaxed text-stone-600">
              Information on this website is not directed to a person in any jurisdiction where its distribution or the contemplated activity would be unlawful. A non-U.S. investor’s ability to participate depends on the applicable offering, investor status, local law, U.S. and foreign tax considerations, identification and compliance review, sanctions restrictions, and definitive documents. No jurisdiction or investor is automatically eligible. FoxRidge does not provide individualized cross-border legal, tax, immigration, or investment advice.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-stone-900">Contact</h2>
            <p className="leading-relaxed text-stone-600">
              Questions about these disclosures may be sent to <a href="mailto:partners@foxridgeequity.com" className="text-secondary hover:underline">partners@foxridgeequity.com</a>. For information about personal data collected through the website, see our <Link href="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>.
            </p>
          </div>

          <div className="mt-16 flex flex-col items-start gap-4 border-t border-stone-200 pt-8 sm:flex-row">
            <Link href="/" className="text-sm font-semibold text-secondary hover:underline">← Back to Home</Link>
            <Link href="/privacy-policy" className="text-sm font-semibold text-secondary hover:underline">Privacy Policy →</Link>
            <Link href="/terms-of-service" className="text-sm font-semibold text-secondary hover:underline">Terms of Service →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
