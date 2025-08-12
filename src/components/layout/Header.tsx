import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, ShoppingCart, Bell, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AuthModal from '../../features/auth/components/AuthModal';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNetworksDropdown, setShowNetworksDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<'login' | 'signup'>('login');
  const openLoginModal = () => {
    setAuthModalTab('login');
    setAuthModalOpen(true);
  };
  const openSignupModal = () => {
    setAuthModalTab('signup');
    setAuthModalOpen(true);
  };
  return <>
      <header className="bg-white shadow-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-bold text-primary">EQP+MART</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/marketplace" className="text-foreground hover:text-primary transition-colors">
                Marketplace
              </Link>
              <Link to="/rentals" className="text-foreground hover:text-primary transition-colors">
                Rentals
              </Link>
              <Link to="/services" className="text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/auctions" className="text-foreground hover:text-primary transition-colors">
                Auctions
              </Link>
              <Link to="/procurement" className="text-foreground hover:text-primary transition-colors">E-Trade</Link>
              <div className="relative" onMouseEnter={() => setShowCompanyDropdown(true)} onMouseLeave={() => setShowCompanyDropdown(false)}>
                <button className="flex items-center text-foreground hover:text-primary transition-colors">
                  Company
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                {showCompanyDropdown && <div className="absolute top-full left-0 mt-1 bg-white border border-border rounded-lg shadow-lg py-2 w-48 z-50">
                    <Link to="/investor-proposal" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary">
                      Investor Proposal
                    </Link>
                    <Link to="/partnership-opportunity" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary">
                      Partnership Program
                    </Link>
                  </div>}
              </div>
              <div className="relative" onMouseEnter={() => setShowNetworksDropdown(true)} onMouseLeave={() => setShowNetworksDropdown(false)}>
                <button className="flex items-center text-foreground hover:text-primary transition-colors">
                  Networks
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                {showNetworksDropdown && <div className="absolute top-full left-0 mt-1 bg-white border border-border rounded-lg shadow-lg py-2 w-48 z-50">
                    <Link to="/buyer-network" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary">
                      Buyer Network
                    </Link>
                    <Link to="/supplier-network" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary">
                      Supplier Network
                    </Link>
                    <Link to="/experts-network" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary">
                      Experts Network
                    </Link>
                  </div>}
              </div>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input type="text" placeholder="Search equipment..." className="pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-64" />
              </div>
              
              {isLoggedIn ? <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Bell className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                  <Link to="/dashboard">
                    <Button variant="ghost" size="sm">
                      <User className="h-4 w-4" />
                    </Button>
                  </Link>
                </div> : <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" onClick={openLoginModal}>
                    Login
                  </Button>
                  <Button size="sm" onClick={openSignupModal}>
                    Sign Up
                  </Button>
                </div>}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-4">
                <Link to="/marketplace" className="text-foreground hover:text-primary transition-colors">
                  Marketplace
                </Link>
                <Link to="/rentals" className="text-foreground hover:text-primary transition-colors">
                  Rentals
                </Link>
                <Link to="/services" className="text-foreground hover:text-primary transition-colors">
                  Services
                </Link>
                <Link to="/auctions" className="text-foreground hover:text-primary transition-colors">
                  Auctions
                </Link>
                <Link to="/procurement" className="text-foreground hover:text-primary transition-colors">
                  E-Procurement
                </Link>
                <div className="border-l-2 border-primary pl-4 mb-4">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Company</p>
                  <Link to="/investor-proposal" className="block text-foreground hover:text-primary transition-colors mb-2">
                    Investor Proposal
                  </Link>
                  <Link to="/partnership-opportunity" className="block text-foreground hover:text-primary transition-colors">
                    Partnership Program
                  </Link>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Networks</p>
                  <Link to="/buyer-network" className="block text-foreground hover:text-primary transition-colors mb-2">
                    Buyer Network
                  </Link>
                  <Link to="/supplier-network" className="block text-foreground hover:text-primary transition-colors mb-2">
                    Supplier Network
                  </Link>
                  <Link to="/experts-network" className="block text-foreground hover:text-primary transition-colors">
                    Experts Network
                  </Link>
                </div>
                <div className="pt-4 border-t border-border">
                  <Button variant="outline" size="sm" className="w-full mb-2" onClick={openLoginModal}>
                    Login
                  </Button>
                  <Button size="sm" className="w-full" onClick={openSignupModal}>
                    Sign Up
                  </Button>
                </div>
              </nav>
            </div>}
        </div>
      </header>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} defaultTab={authModalTab} />
    </>;
};
export default Header;