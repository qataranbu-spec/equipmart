import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import InvestorHero from '../components/investor/InvestorHero';
import MarketOpportunity from '../components/investor/MarketOpportunity';
import BusinessModel from '../components/investor/BusinessModel';
import InvestmentTiers from '../components/investor/InvestmentTiers';
import TeamSection from '../components/investor/TeamSection';
import InvestmentForm from '../components/investor/InvestmentForm';

const InvestorProposal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <InvestorHero />
        <MarketOpportunity />
        <BusinessModel />
        <InvestmentTiers />
        <TeamSection />
        <InvestmentForm />
      </main>
      <Footer />
    </div>
  );
};

export default InvestorProposal;