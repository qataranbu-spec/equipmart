import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                <strong>Beta Release Notice:</strong> This Privacy Policy applies to our beta version. 
                Data practices may evolve as we prepare for full launch.
              </p>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mb-6">
          <strong>Last Updated:</strong> January 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            EQP MART ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
            This privacy policy explains how we collect, use, and safeguard your information when you use our 
            construction equipment marketplace platform.
          </p>
          <p className="mb-4">
            Given our focus on serving buyers in the MENA and GCC regions with sellers worldwide, we comply with 
            applicable privacy laws in these jurisdictions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl font-medium mb-3">Personal Information</h3>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Registration Data:</strong> Name, email address, phone number, company information</li>
            <li><strong>Profile Information:</strong> Business type, location, preferences</li>
            <li><strong>Identity Verification:</strong> Government ID, business license (for sellers)</li>
            <li><strong>Payment Information:</strong> Billing address, payment method details</li>
          </ul>

          <h3 className="text-xl font-medium mb-3">Equipment and Transaction Data</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Equipment listings, descriptions, and images</li>
            <li>Bid history and transaction records</li>
            <li>Communication between buyers and sellers</li>
            <li>Service requests and support inquiries</li>
          </ul>

          <h3 className="text-xl font-medium mb-3">Technical Information</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>IP address and location data</li>
            <li>Device information and browser type</li>
            <li>Usage patterns and platform interactions</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          
          <h3 className="text-xl font-medium mb-3">Platform Operations</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Create and manage your account</li>
            <li>Process transactions and facilitate trades</li>
            <li>Verify identity and prevent fraud</li>
            <li>Provide customer support</li>
          </ul>

          <h3 className="text-xl font-medium mb-3">Communication</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Send transaction notifications and updates</li>
            <li>Provide platform news and feature updates</li>
            <li>Respond to inquiries and support requests</li>
            <li>Market research during beta testing</li>
          </ul>

          <h3 className="text-xl font-medium mb-3">Legal and Compliance</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Comply with applicable laws and regulations</li>
            <li>Respond to legal requests and court orders</li>
            <li>Enforce our Terms of Service</li>
            <li>Protect against fraud and abuse</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
          <p className="mb-4">We may share your information in the following circumstances:</p>
          
          <h3 className="text-xl font-medium mb-3">With Other Users</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Business contact information for legitimate transactions</li>
            <li>Public equipment listings and seller profiles</li>
            <li>Bid information in auction contexts</li>
          </ul>

          <h3 className="text-xl font-medium mb-3">Service Providers</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Payment processors for transaction handling</li>
            <li>Cloud hosting and data storage services</li>
            <li>Identity verification services</li>
            <li>Customer support and communication tools</li>
          </ul>

          <h3 className="text-xl font-medium mb-3">Legal Requirements</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Government agencies when required by law</li>
            <li>Law enforcement for fraud prevention</li>
            <li>Customs and trade authorities for international transactions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. International Data Transfers</h2>
          <p className="mb-4">
            As a global marketplace serving MENA/GCC buyers and worldwide sellers, your data may be 
            transferred to and processed in countries outside your residence, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Cloud servers in secure data centers</li>
            <li>Service providers in various jurisdictions</li>
            <li>Partner offices for support and operations</li>
          </ul>
          <p className="mb-4">
            We ensure appropriate safeguards are in place for international transfers, including 
            contractual protections and compliance with applicable data protection laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
          <p className="mb-4">We implement comprehensive security measures to protect your data:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Encryption:</strong> Data encrypted in transit and at rest</li>
            <li><strong>Access Controls:</strong> Limited access to authorized personnel only</li>
            <li><strong>Monitoring:</strong> Continuous security monitoring and threat detection</li>
            <li><strong>Regular Audits:</strong> Periodic security assessments and updates</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Your Rights and Choices</h2>
          <p className="mb-4">Depending on your location, you may have the following rights:</p>
          
          <h3 className="text-xl font-medium mb-3">Access and Control</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Access your personal data we hold</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Delete your account and associated data</li>
            <li>Export your data in a portable format</li>
          </ul>

          <h3 className="text-xl font-medium mb-3">Communication Preferences</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Opt out of marketing communications</li>
            <li>Choose notification preferences</li>
            <li>Manage cookie and tracking preferences</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
          <p className="mb-4">We retain your data for different periods based on:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Account Data:</strong> Until account deletion or as required by law</li>
            <li><strong>Transaction Records:</strong> 7 years for tax and legal compliance</li>
            <li><strong>Communications:</strong> 3 years for support and dispute resolution</li>
            <li><strong>Beta Testing Data:</strong> May be retained to improve the platform</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Cookies and Tracking</h2>
          <p className="mb-4">We use cookies and similar technologies for:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Essential platform functionality</li>
            <li>User preference and settings</li>
            <li>Analytics and performance monitoring</li>
            <li>Security and fraud prevention</li>
          </ul>
          <p className="mb-4">
            You can control cookie preferences through your browser settings or our cookie management tool.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
          <p className="mb-4">
            Our platform is designed for business use and is not intended for individuals under 18. 
            We do not knowingly collect personal information from minors.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Regional Privacy Laws</h2>
          
          <h3 className="text-xl font-medium mb-3">GDPR (European Users)</h3>
          <p className="mb-4">
            If you're in the EU/EEA, you have additional rights under GDPR, including data portability, 
            the right to object to processing, and the right to lodge complaints with supervisory authorities.
          </p>

          <h3 className="text-xl font-medium mb-3">GCC Privacy Regulations</h3>
          <p className="mb-4">
            We comply with applicable privacy laws in GCC countries, including UAE Data Protection Law 
            and Saudi Arabia's Personal Data Protection Law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Updates to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy, especially during the beta period. We'll notify you of 
            significant changes via email or platform notifications. Continued use constitutes acceptance 
            of the updated policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
          <p className="mb-4">
            For privacy-related questions or to exercise your rights, contact us at:
          </p>
          <p className="mb-2"><strong>Email:</strong> privacy@eqpmart.com</p>
          <p className="mb-2"><strong>Data Protection Officer:</strong> dpo@eqpmart.com</p>
          <p className="mb-2"><strong>Address:</strong> Dubai, UAE</p>
        </section>

        <div className="bg-green-50 p-6 rounded-lg mt-8">
          <p className="text-sm text-green-700">
            <strong>Beta Testing Notice:</strong> During beta testing, we may collect additional feedback and usage data 
            to improve our platform. This data helps us serve the MENA/GCC construction equipment market better. 
            Your participation helps build a better marketplace for the region.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;