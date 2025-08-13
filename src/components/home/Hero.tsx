
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Wrench, Gavel, ShoppingBag } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-2xl font-semibold text-white/80 mb-4 tracking-widest">EQP MART</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Shop Smart, Live Better
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Our platform is designed to empower all key players in the construction equipment ecosystem. 
            From contractors to dealers, rental companies to service providers - we've got you covered.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/marketplace">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Explore Marketplace
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Browse Services
              </Button>
            </Link>
          </div>

          {/* Quick Access Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <Link to="/marketplace" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <ShoppingBag className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold">Equipment Trading</h3>
              <p className="text-sm text-white/80">Buy, sell & rent construction equipment</p>
            </Link>
            
            <Link to="/services" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <Wrench className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold">Service Market</h3>
              <p className="text-sm text-white/80">Maintenance, repairs & operator services</p>
            </Link>
            
            <Link to="/network" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <Truck className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold">Professional Network</h3>
              <p className="text-sm text-white/80">Connect with industry professionals</p>
            </Link>
            
            <Link to="/auctions" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <Gavel className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold">Real-time Solutions</h3>
              <p className="text-sm text-white/80">Live auctions & instant booking</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
