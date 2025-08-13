import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { AdMarketplace } from '../features/advertising';

const AdMarketplacePage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <AdMarketplace />
      </main>
      <Footer />
    </>
  );
};

export default AdMarketplacePage;