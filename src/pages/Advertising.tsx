import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { AdvertisingDashboard } from '../features/advertising';

const Advertising = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <AdvertisingDashboard />
      </main>
      <Footer />
    </>
  );
};

export default Advertising;