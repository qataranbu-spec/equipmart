
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Hero from '../components/home/Hero';
import FeaturesSection from '../components/home/FeaturesSection';
import StatsSection from '../components/home/StatsSection';
import CategoriesSection from '../components/home/CategoriesSection';
import Footer from '../components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturesSection />
      <StatsSection />
      <CategoriesSection />
      <Footer />
    </div>
  );
};

export default Index;
