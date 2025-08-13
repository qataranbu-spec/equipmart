import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const TermsOfService = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose max-w-none text-justify">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Beta Release Notice:</strong> This is a beta version of EQP MART for user testing purposes. 
                Features and terms may change during the beta period.
              </p>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mb-6">
          <strong>Last Updated:</strong> January 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">
            By accessing and using EQP MART ("Platform"), you accept and agree to be bound by the terms 
            and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
          <p className="mb-4">
            EQP MART is a construction equipment marketplace connecting buyers primarily in the MENA and GCC 
            regions with sellers worldwide during this beta testing phase.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Beta Testing Program</h2>
          <p className="mb-4">
            This Platform is currently in beta testing. By participating, you acknowledge that:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Features may be incomplete, experimental, or subject to change</li>
            <li>Data entered during beta testing may not be preserved</li>
            <li>Service availability may be intermittent</li>
            <li>Your feedback helps improve the Platform</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Accounts and Registration</h2>
          <p className="mb-4">
            To access certain features, you must register for an account. You agree to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain the security of your password and account</li>
            <li>Accept responsibility for all activities under your account</li>
            <li>Notify us immediately of any unauthorized use</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Marketplace Operations</h2>
          
          <h3 className="text-xl font-medium mb-3">For Buyers (MENA/GCC Region)</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>You may browse, search, and inquire about construction equipment</li>
            <li>Participate in auctions and place bids in good faith</li>
            <li>Comply with all applicable local laws and regulations</li>
            <li>Honor purchase commitments made through the Platform</li>
          </ul>

          <h3 className="text-xl font-medium mb-3">For Sellers (Global)</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide accurate descriptions and images of equipment</li>
            <li>Ensure legal ownership and right to sell listed equipment</li>
            <li>Comply with export/import regulations for international sales</li>
            <li>Honor all sales commitments made through the Platform</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Prohibited Uses</h2>
          <p className="mb-4">You may not use the Platform to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>List stolen, counterfeit, or illegal equipment</li>
            <li>Engage in fraudulent or deceptive practices</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Interfere with Platform operations or other users</li>
            <li>Circumvent the Platform for direct transactions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. International Trade Compliance</h2>
          <p className="mb-4">
            Given our global marketplace serving MENA/GCC buyers, you acknowledge:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Compliance with international trade laws and sanctions</li>
            <li>Responsibility for obtaining necessary import/export licenses</li>
            <li>Understanding of customs duties and procedures</li>
            <li>Awareness of regional regulations in target markets</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Payment and Fees</h2>
          <p className="mb-4">
            During beta testing, certain fees may be waived or modified. Standard terms will apply upon full launch:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Transaction fees may apply to completed sales</li>
            <li>Listing fees may apply for premium features</li>
            <li>Payment processing fees as applicable</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
          <p className="mb-4">
            EQP MART operates as a marketplace platform. We are not responsible for:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>The condition, authenticity, or legality of listed equipment</li>
            <li>The ability or failure of users to complete transactions</li>
            <li>Equipment quality, delivery, or post-sale support</li>
            <li>Disputes between buyers and sellers</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
          <p className="mb-4">
            The Platform and its original content remain the property of EQP MART. You may not:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Reproduce, distribute, or create derivative works</li>
            <li>Use our trademarks without permission</li>
            <li>Reverse engineer or attempt to extract source code</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Privacy and Data Protection</h2>
          <p className="mb-4">
            Your privacy is important to us. Please review our Privacy Policy, which governs 
            how we collect, use, and protect your information, especially considering our 
            operations across multiple jurisdictions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Dispute Resolution</h2>
          <p className="mb-4">
            For disputes arising from Platform use:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>First attempt resolution through our support team</li>
            <li>Consider mediation for commercial disputes</li>
            <li>Jurisdiction will be determined based on applicable law</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Modifications</h2>
          <p className="mb-4">
            We reserve the right to modify these terms at any time, especially during the beta phase. 
            Continued use of the Platform constitutes acceptance of modified terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
          <p className="mb-4">
            For questions about these Terms of Service, please contact us at:
          </p>
          <p className="mb-2">Email: legal@eqpmart.com</p>
          <p className="mb-2">Address: Dubai, UAE</p>
        </section>

        <div className="bg-gray-50 p-6 rounded-lg mt-8">
          <p className="text-sm text-gray-600">
            These Terms of Service are effective as of January 2025 and will remain in effect during the beta testing period.
            By continuing to use EQP MART, you agree to be bound by these terms.
          </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;