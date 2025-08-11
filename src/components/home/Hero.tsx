
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Wrench, Gavel, ShoppingBag } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Construction Equipment Marketplace
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Buy, sell, rent equipment. Access e-procurement solutions and B2B e-commerce tools.
            The complete platform for construction equipment business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/marketplace">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Browse Equipment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/become-supplier">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Start Selling
              </Button>
            </Link>
          </div>

          {/* Quick Access Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <Link to="/marketplace" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <ShoppingBag className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold">Buy Equipment</h3>
              <p className="text-sm text-white/80">New, used, refurbished</p>
            </Link>
            
            <Link to="/rentals" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <Truck className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold">Rent Equipment</h3>
              <p className="text-sm text-white/80">Daily, weekly, monthly</p>
            </Link>
            
            <Link to="/services" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <Wrench className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold">Get Services</h3>
              <p className="text-sm text-white/80">Maintenance, logistics</p>
            </Link>
            
            <Link to="/auctions" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <Gavel className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold">Auctions</h3>
              <p className="text-sm text-white/80">Bid on equipment</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
