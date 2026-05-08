import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50 pt-32 pb-24">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-8">Privacy Policy</h1>
          <p className="text-stone-500 mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

          <div className="prose prose-stone max-w-none">
            <p>
              Fox Ridge Equity Partners ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit the website foxridgeequity.com (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">1. Information We Collect</h2>
            <p>
              We collect several types of information from and about users of our Website, including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Personal Information:</strong> Information by which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline.</li>
              <li><strong>Usage Details:</strong> Information about your internet connection, the equipment you use to access our Website, and usage details collected automatically as you navigate through the site.</li>
            </ul>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">2. How We Use Your Information</h2>
            <p>
              We use information that we collect about you or that you provide to us, including any personal information:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>To present our Website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us, including investment materials and partnership details.</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
              <li>In any other way we may describe when you provide the information.</li>
            </ul>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">3. Disclosure of Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal identification information to others. We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>To our subsidiaries and affiliates.</li>
              <li>To contractors, service providers, and other third parties we use to support our business.</li>
              <li>To fulfill the purpose for which you provide it.</li>
              <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
            </ul>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">4. Data Security</h2>
            <p>
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">5. Contact Information</h2>
            <p>
              To ask questions or comment about this privacy policy and our privacy practices, contact us at:
              <br />
              <a href="mailto:partners@foxridgeequity.com" className="text-secondary hover:underline">partners@foxridgeequity.com</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
