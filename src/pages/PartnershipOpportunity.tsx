import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PartnershipHero from '../components/partnership/PartnershipHero';
import EcosystemOpportunity from '../components/partnership/EcosystemOpportunity';
import PartnershipTiers from '../components/partnership/PartnershipTiers';
import CommunityBenefits from '../components/partnership/CommunityBenefits';
import SuccessStories from '../components/partnership/SuccessStories';
import PartnershipApplication from '../components/partnership/PartnershipApplication';

const PartnershipOpportunity = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PartnershipHero />
        <EcosystemOpportunity />
        <PartnershipTiers />
        <CommunityBenefits />
        <SuccessStories />
        <PartnershipApplication />
      </main>
      <Footer />
    </div>
  );
};

export default PartnershipOpportunity;