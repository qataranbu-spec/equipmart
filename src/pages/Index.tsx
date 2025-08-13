
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Hero from '../components/home/Hero';
import FeaturesSection from '../components/home/FeaturesSection';
import StatsSection from '../components/home/StatsSection';

import WhoWeServeSection from '../components/home/WhoWeServeSection';
import KeyFeaturesSection from '../components/home/KeyFeaturesSection';
import ServiceOfferingsSection from '../components/home/ServiceOfferingsSection';
import BuyersAdvantageSection from '../components/home/BuyersAdvantageSection';
import VendorPartnershipSection from '../components/home/VendorPartnershipSection';
import MarketOpportunitiesSection from '../components/home/MarketOpportunitiesSection';
import Footer from '../components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhoWeServeSection />
      <BuyersAdvantageSection />
      <VendorPartnershipSection />
      <MarketOpportunitiesSection />
      <KeyFeaturesSection />
      <ServiceOfferingsSection />
      <StatsSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
