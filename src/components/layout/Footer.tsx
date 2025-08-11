
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <span className="text-xl font-bold">EQP+MART</span>
            </div>
            <p className="text-muted-foreground mb-4">
              The world's leading construction equipment marketplace and e-procurement platform.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="font-semibold mb-4">Marketplace</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/marketplace" className="hover:text-primary">Buy Equipment</Link></li>
              <li><Link to="/marketplace/sell" className="hover:text-primary">Sell Equipment</Link></li>
              <li><Link to="/rentals" className="hover:text-primary">Rentals</Link></li>
              <li><Link to="/auctions" className="hover:text-primary">Auctions</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            </ul>
          </div>

          {/* Networks */}
          <div>
            <h3 className="font-semibold mb-4">Networks</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/buyer-network" className="hover:text-primary">Buyer Network</Link></li>
              <li><Link to="/supplier-network" className="hover:text-primary">Supplier Network</Link></li>
              <li><Link to="/experts-network" className="hover:text-primary">Experts Network</Link></li>
              <li><Link to="/procurement" className="hover:text-primary">E-Procurement</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@eqpmart.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Dubai, UAE</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 EQP+MART. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
