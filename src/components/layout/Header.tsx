import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, ShoppingCart, Bell, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AuthModal from '../../features/auth/components/AuthModal';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMarketplaceDropdown, setShowMarketplaceDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showBusinessDropdown, setShowBusinessDropdown] = useState(false);
  const [showNetworksDropdown, setShowNetworksDropdown] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<'login' | 'signup'>('login');

  // Timeout refs for hover delays
  const marketplaceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const businessTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const networksTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const openLoginModal = () => {
    setAuthModalTab('login');
    setAuthModalOpen(true);
  };

  const openSignupModal = () => {
    setAuthModalTab('signup');
    setAuthModalOpen(true);
  };

  // Improved hover handlers with delays
  const handleDropdownEnter = (dropdown: 'marketplace' | 'services' | 'business' | 'networks') => {
    const timeoutRef = dropdown === 'marketplace' ? marketplaceTimeoutRef 
                    : dropdown === 'services' ? servicesTimeoutRef
                    : dropdown === 'business' ? businessTimeoutRef
                    : networksTimeoutRef;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const setter = dropdown === 'marketplace' ? setShowMarketplaceDropdown
                 : dropdown === 'services' ? setShowServicesDropdown
                 : dropdown === 'business' ? setShowBusinessDropdown
                 : setShowNetworksDropdown;
    
    setter(true);
  };

  const handleDropdownLeave = (dropdown: 'marketplace' | 'services' | 'business' | 'networks') => {
    const timeoutRef = dropdown === 'marketplace' ? marketplaceTimeoutRef 
                    : dropdown === 'services' ? servicesTimeoutRef
                    : dropdown === 'business' ? businessTimeoutRef
                    : networksTimeoutRef;

    const setter = dropdown === 'marketplace' ? setShowMarketplaceDropdown
                 : dropdown === 'services' ? setShowServicesDropdown
                 : dropdown === 'business' ? setShowBusinessDropdown
                 : setShowNetworksDropdown;

    timeoutRef.current = setTimeout(() => {
      setter(false);
    }, 150);
  };
  return <>
      <header className="bg-white shadow-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">EQP</span>
              </div>
              <span className="text-2xl font-bold text-primary">MART</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* Marketplace Group */}
              <div className="relative group" onMouseEnter={() => handleDropdownEnter('marketplace')} onMouseLeave={() => handleDropdownLeave('marketplace')}>
                <button className="flex items-center text-foreground hover:text-primary transition-colors py-2">
                  Marketplace
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                {showMarketplaceDropdown && <div className="absolute top-full left-0 pt-1">
                    <div className="bg-background border border-border rounded-lg shadow-lg py-3 w-56 z-50">
                      <p className="text-xs font-semibold text-muted-foreground px-4 pb-2 mb-2 border-b border-border">Marketplace</p>
                      <Link to="/marketplace" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">
                        Buy & Sell
                      </Link>
                      <Link to="/rentals" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">
                        Rentals
                      </Link>
                      <Link to="/auctions" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">
                        Auctions
                      </Link>
                      <Link to="/services" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">
                        Services
                      </Link>
                      <div className="border-t border-border my-2"></div>
                      <p className="text-xs font-semibold text-muted-foreground px-4 pb-2">Financing</p>
                      <Link to="/financing/marketplace/buyer" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">
                        Equipment Finance
                      </Link>
                      <Link to="/financing/buyer/dashboard" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">
                        Loan Dashboard
                      </Link>
                    </div>
                  </div>}
              </div>
              
              {/* Services & Solutions Group */}
              <div className="relative group" onMouseEnter={() => handleDropdownEnter('services')} onMouseLeave={() => handleDropdownLeave('services')}>
                <button className="flex items-center text-foreground hover:text-primary transition-colors py-2">
                  Services & Solutions
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                 {showServicesDropdown && <div className="absolute top-full left-0 pt-1">
                     <div className="bg-background border border-border rounded-lg shadow-lg py-3 w-56 z-50">
                       <p className="text-xs font-semibold text-muted-foreground px-4 pb-2 mb-2 border-b border-border">Services & Solutions</p>
                        <Link to="/procurement" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">
                          E-Trade
                        </Link>
                        <Link to="/financing/company/dashboard" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">
                          Financing Solutions
                        </Link>
                        <Link to="/financing/marketplace/seller" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">
                          Equipment Liquidation
                        </Link>
                     </div>
                   </div>}
              </div>
              
              {/* Business Group */}
              <div className="relative group" onMouseEnter={() => handleDropdownEnter('business')} onMouseLeave={() => handleDropdownLeave('business')}>
                <button className="flex items-center text-foreground hover:text-primary transition-colors py-2">
                  Business
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                {showBusinessDropdown && <div className="absolute top-full left-0 pt-1">
                    <div className="bg-background border border-border rounded-lg shadow-lg py-3 w-56 z-50">
                      <p className="text-xs font-semibold text-muted-foreground px-4 pb-2 mb-2 border-b border-border">Business</p>
                      <Link to="/investor-proposal" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">
                        Investor Proposal
                      </Link>
                      <Link to="/partnership-opportunity" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">
                        Partnership Program
                      </Link>
                    </div>
                  </div>}
              </div>
              
              {/* Networks Group */}
              <div className="relative group" onMouseEnter={() => handleDropdownEnter('networks')} onMouseLeave={() => handleDropdownLeave('networks')}>
                <button className="flex items-center text-foreground hover:text-primary transition-colors py-2">
                  Networks
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                {showNetworksDropdown && <div className="absolute top-full left-0 pt-1">
                    <div className="bg-background border border-border rounded-lg shadow-lg py-3 w-56 z-50">
                      <p className="text-xs font-semibold text-muted-foreground px-4 pb-2 mb-2 border-b border-border">Networks</p>
                      <Link to="/networking-hub" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">
                        Networking Hub
                      </Link>
                      <Link to="/buyer-network" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">
                        Buyer Network
                      </Link>
                      <Link to="/supplier-network" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">
                        Supplier Network
                      </Link>
                      <Link to="/experts-network" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">
                        Experts Network
                      </Link>
                    </div>
                  </div>}
              </div>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
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
                {/* Core Marketplace */}
                <div className="border-l-2 border-primary pl-4 mb-4">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Marketplace</p>
                  <Link to="/marketplace" className="block text-foreground hover:text-primary transition-colors mb-2">
                    Buy & Sell
                  </Link>
                  <Link to="/rentals" className="block text-foreground hover:text-primary transition-colors mb-2">
                    Rentals
                  </Link>
                  <Link to="/auctions" className="block text-foreground hover:text-primary transition-colors mb-2">
                    Auctions
                  </Link>
                  <Link to="/services" className="block text-foreground hover:text-primary transition-colors mb-2">
                    Services
                  </Link>
                  <Link to="/financing/marketplace/buyer" className="block text-foreground hover:text-primary transition-colors">
                    Equipment Finance
                  </Link>
                </div>
                
                {/* Services & Solutions */}
                <div className="border-l-2 border-primary pl-4 mb-4">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Services & Solutions</p>
                  <Link to="/procurement" className="block text-foreground hover:text-primary transition-colors mb-2">
                    E-Trade
                  </Link>
                  <Link to="/financing/company/dashboard" className="block text-foreground hover:text-primary transition-colors">
                    Financing Solutions
                  </Link>
                </div>
                
                {/* Business & Partnerships */}
                <div className="border-l-2 border-primary pl-4 mb-4">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Business</p>
                  <Link to="/investor-proposal" className="block text-foreground hover:text-primary transition-colors mb-2">
                    Investor Proposal
                  </Link>
                  <Link to="/partnership-opportunity" className="block text-foreground hover:text-primary transition-colors">
                    Partnership Program
                  </Link>
                </div>
                
                {/* Networks & Community */}
                <div className="border-l-2 border-primary pl-4 mb-4">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Networks</p>
                  <Link to="/networking-hub" className="block text-foreground hover:text-primary transition-colors mb-2">
                    Networking Hub
                  </Link>
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