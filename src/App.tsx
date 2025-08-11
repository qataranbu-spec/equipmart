
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from "@/components/ui/toaster"
import './App.css'

// Import pages
import Index from './pages/Index'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Marketplace from './pages/Marketplace'
import BuyEquipment from './pages/BuyEquipment'
import SellEquipment from './pages/SellEquipment'
import Rentals from './pages/Rentals'
import Services from './pages/Services'
import Auctions from './pages/Auctions'
import Procurement from './pages/Procurement'
import BuyerNetwork from './pages/BuyerNetwork'
import SupplierNetwork from './pages/SupplierNetwork'
import ExpertsNetwork from './pages/ExpertsNetwork'
import EquipmentDetails from './pages/EquipmentDetails'
import NotFound from './pages/NotFound'

// Import new pages
import BookEquipment from './pages/BookEquipment'
import ContactSeller from './pages/ContactSeller'
import BrowseLiveAuctions from './pages/BrowseLiveAuctions'
import RegisterToBid from './pages/RegisterToBid'
import FindExperts from './pages/FindExperts'
import JoinAsExpert from './pages/JoinAsExpert'
import BecomeSupplier from './pages/BecomeSupplier'
import ExploreNetwork from './pages/ExploreNetwork'

// Import buyer network pages
import JoinBuyerNetwork from './pages/JoinBuyerNetwork'
import ExploreBuyers from './pages/ExploreBuyers'
import BuyerProfile from './pages/BuyerProfile'
import BuyerContact from './pages/BuyerContact'

// Import category pages
import Excavators from './pages/categories/Excavators'
import Cranes from './pages/categories/Cranes'
import Bulldozers from './pages/categories/Bulldozers'
import Loaders from './pages/categories/Loaders'
import Trucks from './pages/categories/Trucks'
import ConcreteMixers from './pages/categories/ConcreteMixers'

// Import auction pages
import BidNow from './pages/auction/BidNow'
import WatchList from './pages/auction/WatchList'
import ConsignEquipment from './pages/auction/ConsignEquipment'

// Import procurement pages
import StartFreeTrial from './pages/StartFreeTrial'
import RequestDemo from './pages/RequestDemo'

// Import service pages
import FindServiceProviders from './pages/FindServiceProviders'
import RegisterAsProvider from './pages/RegisterAsProvider'
import PostServiceRequest from './pages/PostServiceRequest'
import JoinAsServiceProvider from './pages/JoinAsServiceProvider'
import ContactUs from './pages/ContactUs'

// Import admin components
import { AdminLayout } from './components/admin/AdminLayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import EquipmentManagement from './pages/admin/equipment/EquipmentManagement'
import AuctionManagement from './pages/admin/auctions/AuctionManagement'
import UserManagement from './pages/admin/users/UserManagement'
import ServiceManagement from './pages/admin/services/ServiceManagement'
import Analytics from './pages/admin/analytics/Analytics'
import Settings from './pages/admin/settings/Settings'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/marketplace/buy" element={<BuyEquipment />} />
          <Route path="/marketplace/sell" element={<SellEquipment />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/services" element={<Services />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/procurement" element={<Procurement />} />
          <Route path="/buyer-network" element={<BuyerNetwork />} />
          <Route path="/supplier-network" element={<SupplierNetwork />} />
          <Route path="/experts-network" element={<ExpertsNetwork />} />
          <Route path="/equipment/:id" element={<EquipmentDetails />} />
          
          {/* New routes */}
          <Route path="/book-equipment" element={<BookEquipment />} />
          <Route path="/contact-seller" element={<ContactSeller />} />
          <Route path="/browse-live-auctions" element={<BrowseLiveAuctions />} />
          <Route path="/register-to-bid" element={<RegisterToBid />} />
          
          {/* Buyer network routes */}
          <Route path="/join-buyer-network" element={<JoinBuyerNetwork />} />
          <Route path="/explore-buyers" element={<ExploreBuyers />} />
          <Route path="/buyer-profile" element={<BuyerProfile />} />
          <Route path="/buyer-contact" element={<BuyerContact />} />
          
          {/* Category routes */}
          <Route path="/categories/excavators" element={<Excavators />} />
          <Route path="/categories/cranes" element={<Cranes />} />
          <Route path="/categories/bulldozers" element={<Bulldozers />} />
          <Route path="/categories/loaders" element={<Loaders />} />
          <Route path="/categories/trucks" element={<Trucks />} />
          <Route path="/categories/concrete-mixers" element={<ConcreteMixers />} />
          
          {/* Auction routes */}
          <Route path="/auction/bid" element={<BidNow />} />
          <Route path="/auction/watch" element={<WatchList />} />
          <Route path="/auction/consign" element={<ConsignEquipment />} />
          
          {/* Procurement routes */}
          <Route path="/start-free-trial" element={<StartFreeTrial />} />
          <Route path="/request-demo" element={<RequestDemo />} />
          
          {/* Service routes */}
          <Route path="/find-service-providers" element={<FindServiceProviders />} />
          <Route path="/register-as-provider" element={<RegisterAsProvider />} />
          <Route path="/post-service-request" element={<PostServiceRequest />} />
          <Route path="/join-as-service-provider" element={<JoinAsServiceProvider />} />
          <Route path="/contact-us" element={<ContactUs />} />
          
          {/* New expert network routes */}
          <Route path="/find-experts" element={<FindExperts />} />
          <Route path="/join-as-expert" element={<JoinAsExpert />} />
          
          {/* New supplier network routes */}
          <Route path="/become-supplier" element={<BecomeSupplier />} />
          <Route path="/explore-network" element={<ExploreNetwork />} />
          
          {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="equipment" element={<EquipmentManagement />} />
            <Route path="equipment/categories" element={<div className="p-6">Equipment Categories - Coming Soon</div>} />
            <Route path="equipment/inventory" element={<div className="p-6">Equipment Inventory - Coming Soon</div>} />
            <Route path="equipment/pricing" element={<div className="p-6">Equipment Pricing - Coming Soon</div>} />
            <Route path="auctions" element={<AuctionManagement />} />
            <Route path="auctions/live" element={<div className="p-6">Live Auctions - Coming Soon</div>} />
            <Route path="auctions/scheduled" element={<div className="p-6">Scheduled Auctions - Coming Soon</div>} />
            <Route path="auctions/completed" element={<div className="p-6">Completed Auctions - Coming Soon</div>} />
            <Route path="users" element={<UserManagement />} />
            <Route path="users/buyers" element={<div className="p-6">Buyers Management - Coming Soon</div>} />
            <Route path="users/suppliers" element={<div className="p-6">Suppliers Management - Coming Soon</div>} />
            <Route path="users/experts" element={<div className="p-6">Experts Management - Coming Soon</div>} />
            <Route path="users/providers" element={<div className="p-6">Service Providers Management - Coming Soon</div>} />
            <Route path="services" element={<ServiceManagement />} />
            <Route path="services/requests" element={<div className="p-6">Service Requests - Coming Soon</div>} />
            <Route path="services/providers" element={<div className="p-6">Service Providers - Coming Soon</div>} />
            <Route path="services/categories" element={<div className="p-6">Service Categories - Coming Soon</div>} />
            <Route path="network/buyers" element={<div className="p-6">Buyer Network - Coming Soon</div>} />
            <Route path="network/suppliers" element={<div className="p-6">Supplier Network - Coming Soon</div>} />
            <Route path="network/experts" element={<div className="p-6">Expert Network - Coming Soon</div>} />
            <Route path="network/partnerships" element={<div className="p-6">Partnerships - Coming Soon</div>} />
            <Route path="content/pages" element={<div className="p-6">Content Pages - Coming Soon</div>} />
            <Route path="content/blog" element={<div className="p-6">Blog Management - Coming Soon</div>} />
            <Route path="content/media" element={<div className="p-6">Media Library - Coming Soon</div>} />
            <Route path="content/seo" element={<div className="p-6">SEO Settings - Coming Soon</div>} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="analytics/users" element={<div className="p-6">User Analytics - Coming Soon</div>} />
            <Route path="analytics/sales" element={<div className="p-6">Sales Reports - Coming Soon</div>} />
            <Route path="analytics/traffic" element={<div className="p-6">Traffic Reports - Coming Soon</div>} />
            <Route path="settings/general" element={<Settings />} />
            <Route path="settings/permissions" element={<div className="p-6">Permissions - Coming Soon</div>} />
            <Route path="settings/integrations" element={<div className="p-6">Integrations - Coming Soon</div>} />
            <Route path="settings/backup" element={<div className="p-6">Backup Settings - Coming Soon</div>} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  )
}

export default App
