import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from "@/components/ui/toaster"
import './App.css'

// Import pages
import Index from './pages/Index'
import Dashboard from './pages/Dashboard'
import Rentals from './pages/Rentals'
import Services from './pages/Services'
import Procurement from './pages/Procurement'
import NotFound from './pages/NotFound'

// Import feature modules
import { 
  LoginPage, 
  RegisterPage 
} from './features/auth'
import { 
  MarketplacePage, 
  BuyEquipmentPage, 
  SellEquipmentPage, 
  EquipmentDetailsPage,
  BookEquipmentPage,
  ContactSellerPage 
} from './features/marketplace'
import {
  ServicesMarketplace
} from './features/services'
import { 
  AuctionsPage,
  BrowseLiveAuctionsPage, 
  RegisterToBidPage,
  BidNowPage,
  WatchListPage,
  ConsignEquipmentPage
} from './features/auctions'
import { 
  BuyerNetworkPage, 
  SupplierNetworkPage, 
  ExpertsNetworkPage,
  ExploreNetworkPage,
  JoinBuyerNetworkPage,
  ExploreBuyersPage,
  BuyerProfilePage,
  BuyerContactPage,
  ProjectProfilePage,
  FindExpertsPage,
  JoinAsExpertPage,
  BecomeSupplierPage,
  ConnectionsPage,
  MessagesPage,
  FavoritesPage,
  NetworkingHubPage
} from './features/network'
import { 
  AdminLayout,
  AdminDashboardPage,
  EquipmentManagement,
  AuctionManagement,
  UserManagement,
  ServiceManagement,
  Analytics,
  Settings
} from './features/admin'

// Import category pages
import Excavators from './pages/categories/Excavators'
import Cranes from './pages/categories/Cranes'
import Bulldozers from './pages/categories/Bulldozers'
import Loaders from './pages/categories/Loaders'
import Trucks from './pages/categories/Trucks'
import ConcreteMixers from './pages/categories/ConcreteMixers'

// Import procurement pages
import StartFreeTrial from './pages/StartFreeTrial'
import RequestDemo from './pages/RequestDemo'
import InvestorProposal from './pages/InvestorProposal'
import PartnershipOpportunity from './pages/PartnershipOpportunity'

// Import service pages
import FindServiceProviders from './pages/FindServiceProviders'
import RegisterAsProvider from './pages/RegisterAsProvider'
import PostServiceRequest from './pages/PostServiceRequest'
import JoinAsServiceProvider from './pages/JoinAsServiceProvider'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/marketplace/buy" element={<BuyEquipmentPage />} />
          <Route path="/marketplace/sell" element={<SellEquipmentPage />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/marketplace" element={<ServicesMarketplace />} />
          <Route path="/auctions" element={<AuctionsPage />} />
          <Route path="/procurement" element={<Procurement />} />
          <Route path="/buyer-network" element={<BuyerNetworkPage />} />
          <Route path="/supplier-network" element={<SupplierNetworkPage />} />
          <Route path="/experts-network" element={<ExpertsNetworkPage />} />
          <Route path="/equipment/:id" element={<EquipmentDetailsPage />} />
          
          {/* Additional routes */}
          <Route path="/book-equipment" element={<BookEquipmentPage />} />
          <Route path="/contact-seller" element={<ContactSellerPage />} />
          <Route path="/browse-live-auctions" element={<BrowseLiveAuctionsPage />} />
          <Route path="/register-to-bid" element={<RegisterToBidPage />} />
          <Route path="/find-experts" element={<FindExpertsPage />} />
          <Route path="/join-as-expert" element={<JoinAsExpertPage />} />
          <Route path="/become-supplier" element={<BecomeSupplierPage />} />
          <Route path="/explore-network" element={<ExploreNetworkPage />} />
          <Route path="/join-buyer-network" element={<JoinBuyerNetworkPage />} />
          <Route path="/explore-buyers" element={<ExploreBuyersPage />} />
          <Route path="/buyer-profile/:id" element={<BuyerProfilePage />} />
          <Route path="/buyer-contact/:id" element={<BuyerContactPage />} />
          <Route path="/project-profile/:id" element={<ProjectProfilePage />} />
          <Route path="/connections" element={<ConnectionsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/networking-hub" element={<NetworkingHubPage />} />
          
          {/* Category routes */}
          <Route path="/categories/excavators" element={<Excavators />} />
          <Route path="/categories/cranes" element={<Cranes />} />
          <Route path="/categories/bulldozers" element={<Bulldozers />} />
          <Route path="/categories/loaders" element={<Loaders />} />
          <Route path="/categories/trucks" element={<Trucks />} />
          <Route path="/categories/concrete-mixers" element={<ConcreteMixers />} />

          {/* Auction routes */}
          <Route path="/auction/bid-now/:id" element={<BidNowPage />} />
          <Route path="/auction/watch-list" element={<WatchListPage />} />
          <Route path="/auction/consign-equipment" element={<ConsignEquipmentPage />} />
          
          {/* Service & procurement routes */}
          <Route path="/start-free-trial" element={<StartFreeTrial />} />
          <Route path="/request-demo" element={<RequestDemo />} />
          <Route path="/investor-proposal" element={<InvestorProposal />} />
          <Route path="/partnership-opportunity" element={<PartnershipOpportunity />} />
          <Route path="/find-service-providers" element={<FindServiceProviders />} />
          <Route path="/register-as-provider" element={<RegisterAsProvider />} />
          <Route path="/post-service-request" element={<PostServiceRequest />} />
          <Route path="/join-as-service-provider" element={<JoinAsServiceProvider />} />
          <Route path="/contact-us" element={<ContactUs />} />
          
          {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path="equipment" element={<EquipmentManagement />} />
            <Route path="auctions" element={<AuctionManagement />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="services" element={<ServiceManagement />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  )
}

export default App