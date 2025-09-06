import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { ExternalLink } from 'lucide-react';

const Sitemap = () => {
  const sitePages = [
    {
      category: "Main Pages",
      pages: [
        { name: "Home", path: "/" },
        { name: "Dashboard", path: "/dashboard" },
        { name: "Equipment Finder", path: "/equipments-finder" },
        { name: "Contact Us", path: "/contact-us" },
      ]
    },
    {
      category: "Marketplace & Equipment",
      pages: [
        { name: "Marketplace", path: "/marketplace" },
        { name: "Buy Equipment", path: "/marketplace/buy" },
        { name: "Sell Equipment", path: "/marketplace/sell" },
        { name: "Book Equipment", path: "/book-equipment" },
        { name: "Contact Seller", path: "/contact-seller" },
        { name: "Manufacturers", path: "/manufacturers" },
      ]
    },
    {
      category: "Equipment Categories",
      pages: [
        { name: "Excavators", path: "/categories/excavators" },
        { name: "Cranes", path: "/categories/cranes" },
        { name: "Bulldozers", path: "/categories/bulldozers" },
        { name: "Loaders", path: "/categories/loaders" },
        { name: "Trucks", path: "/categories/trucks" },
        { name: "Concrete Mixers", path: "/categories/concrete-mixers" },
      ]
    },
    {
      category: "Rental Platform",
      pages: [
        { name: "Rentals", path: "/rentals" },
        { name: "Browse Rentals", path: "/rentals/browse" },
        { name: "My Rentals", path: "/rentals/my-rentals" },
        { name: "Rental Requests", path: "/rentals/requests" },
        { name: "List Equipment for Rent", path: "/rentals/seller/list-equipment" },
        { name: "Rental Listings", path: "/rentals/seller/listings" },
        { name: "Rental Bookings", path: "/rentals/seller/bookings" },
      ]
    },
    {
      category: "Auction Platform",
      pages: [
        { name: "Auctions", path: "/auctions" },
        { name: "Browse Live Auctions", path: "/browse-live-auctions" },
        { name: "Register to Bid", path: "/register-to-bid" },
        { name: "Watch List", path: "/auction/watch-list" },
        { name: "Consign Equipment", path: "/auction/consign-equipment" },
      ]
    },
    {
      category: "Services Platform",
      pages: [
        { name: "Services", path: "/services" },
        { name: "Services Marketplace", path: "/services/marketplace" },
        { name: "Service Buyer Dashboard", path: "/services/buyer/dashboard" },
        { name: "Service Provider Dashboard", path: "/services/provider/dashboard" },
        { name: "Service Messages", path: "/services/messages" },
        { name: "Find Service Providers", path: "/find-service-providers" },
        { name: "Register as Provider", path: "/register-as-provider" },
        { name: "Post Service Request", path: "/post-service-request" },
        { name: "Join as Service Provider", path: "/join-as-service-provider" },
        { name: "Contractor Portal", path: "/contractor-portal" },
      ]
    },
    {
      category: "Network & Community",
      pages: [
        { name: "Networking Hub", path: "/networking-hub" },
        { name: "Buyer Network", path: "/buyer-network" },
        { name: "Supplier Network", path: "/supplier-network" },
        { name: "Experts Network", path: "/experts-network" },
        { name: "Explore Network", path: "/explore-network" },
        { name: "Join Buyer Network", path: "/join-buyer-network" },
        { name: "Explore Buyers", path: "/explore-buyers" },
        { name: "Find Experts", path: "/find-experts" },
        { name: "Join as Expert", path: "/join-as-expert" },
        { name: "Become Supplier", path: "/become-supplier" },
        { name: "Connections", path: "/connections" },
        { name: "Messages", path: "/messages" },
        { name: "Favorites", path: "/favorites" },
      ]
    },
    {
      category: "Financing Platform",
      pages: [
        { name: "Financing", path: "/financing" },
        { name: "Buyer Financing Dashboard", path: "/financing/buyer/dashboard" },
        { name: "Loan Application", path: "/financing/buyer/apply" },
        { name: "Company Dashboard", path: "/financing/company/dashboard" },
        { name: "Product Management", path: "/financing/company/products" },
        { name: "Recovery Center", path: "/financing/company/recovery" },
        { name: "Buyer Marketplace", path: "/financing/marketplace/buyer" },
        { name: "Seller Dashboard", path: "/financing/marketplace/seller" },
        { name: "Financier Dashboard", path: "/financing/marketplace/financier" },
      ]
    },
    {
      category: "Insurance Platform",
      pages: [
        { name: "Insurance Marketplace", path: "/insurance/marketplace" },
        { name: "Buyer Insurance Dashboard", path: "/insurance/buyer/dashboard" },
        { name: "Provider Dashboard", path: "/insurance/provider/dashboard" },
      ]
    },
    {
      category: "Procurement Platform",
      pages: [
        { name: "Procurement", path: "/procurement" },
        { name: "Create RFQ", path: "/procurement/create-rfq" },
        { name: "Active RFQs", path: "/procurement/active-rfqs" },
        { name: "Supplier Management", path: "/procurement/supplier-management" },
        { name: "E-Auction", path: "/procurement/e-auction" },
      ]
    },
    {
      category: "Advertising",
      pages: [
        { name: "Advertising", path: "/advertising" },
        { name: "Ad Marketplace", path: "/ad-marketplace" },
      ]
    },
    {
      category: "Spare Parts",
      pages: [
        { name: "Spare Parts", path: "/spare-parts" },
        { name: "Supplier Dashboard", path: "/supplier-dashboard" },
      ]
    },
    {
      category: "Business & Investment",
      pages: [
        { name: "Start Free Trial", path: "/start-free-trial" },
        { name: "Request Demo", path: "/request-demo" },
        { name: "Investor Proposal", path: "/investor-proposal" },
        { name: "Partnership Opportunity", path: "/partnership-opportunity" },
      ]
    },
    {
      category: "Authentication",
      pages: [
        { name: "Login", path: "/login" },
        { name: "Register", path: "/register" },
      ]
    },
    {
      category: "Legal & Policies",
      pages: [
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Privacy Policy", path: "/privacy-policy" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Site Map</h1>
            <p className="text-muted-foreground text-lg">
              Complete navigation guide to all pages and features on EQP+MART platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitePages.map((section, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4 text-primary">
                  {section.category}
                </h2>
                <ul className="space-y-2">
                  {section.pages.map((page, pageIndex) => (
                    <li key={pageIndex}>
                      <Link 
                        to={page.path}
                        className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-muted rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">About EQP+MART</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              EQP+MART is the world's leading construction equipment marketplace and e-procurement platform. 
              We provide comprehensive solutions for buying, selling, renting, financing, and insuring construction equipment, 
              along with connecting industry professionals through our extensive network.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Equipment Categories</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-muted-foreground">Active Listings</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground">Countries Served</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-muted-foreground">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sitemap;