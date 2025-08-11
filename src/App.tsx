
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
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  )
}

export default App
