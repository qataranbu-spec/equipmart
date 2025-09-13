import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from "@/components/ui/toaster"
import './App.css'

// Import pages
import Index from './pages/Index'
import UserManualsIndex from './pages/manuals/UserManualsIndex'
import BuyerManual from './pages/manuals/BuyerManual'
import SupplierManual from './pages/manuals/SupplierManual'
import ServiceProviderManual from './pages/manuals/ServiceProviderManual'
import InsuranceProviderManual from './pages/manuals/InsuranceProviderManual'
import FinancierManual from './pages/manuals/FinancierManual'
import ContractorManual from './pages/manuals/ContractorManual'
import ExpertManual from './pages/manuals/ExpertManual'
import AdminManual from './pages/manuals/AdminManual'
import Dashboard from './pages/Dashboard'
import Rentals from './pages/Rentals'
import Services from './pages/Services'
import Procurement from './pages/Procurement'
import NotFound from './pages/NotFound'
import EquipmentsFinderPage from './pages/EquipmentsFinderPage'
import CategoriesPage from './pages/CategoriesPage'

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
  EquipmentProfilePage,
  BookEquipmentPage,
  ContactSellerPage 
} from './features/marketplace'
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
  AdvertisementManagement,
  Analytics,
  Settings,
  CategoryManagement
} from './features/admin'
import { MarketplaceManagement } from './features/admin/pages/marketplace'
import { 
  FinancingMarketplace, 
  BuyerFinancingDashboard, 
  LoanApplicationPage, 
  CompanyDashboard, 
  ProductManagement, 
  RecoveryCenter,
  BuyerMarketplace,
  SellerDashboard,
  FinancierDashboard
} from './features/financing'
import {
  InsuranceMarketplace,
  BuyerInsuranceDashboard,
  ProviderDashboard
} from './features/insurance'

// Import advertisement pages
import Advertising from './pages/Advertising'
import AdMarketplace from './pages/AdMarketplace'

// Import category pages
import Excavators from './pages/categories/Excavators'
import Cranes from './pages/categories/Cranes'
import Bulldozers from './pages/categories/Bulldozers'
import Loaders from './pages/categories/Loaders'
import Trucks from './pages/categories/Trucks'
import ConcreteMixers from './pages/categories/ConcreteMixers'
import Manufacturers from './pages/Manufacturers'

// Import procurement pages
import StartFreeTrial from './pages/StartFreeTrial'
import RequestDemo from './pages/RequestDemo'
import InvestorProposal from './pages/InvestorProposal'
import PartnershipOpportunity from './pages/PartnershipOpportunity'
import EquipmentFinancierProposal from './pages/EquipmentFinancierProposal'
import ConstructionContractorProposal from './pages/ConstructionContractorProposal'

// Import E-Procurement pages
import {
  CreateRFQPage,
  ActiveRFQsPage,
  SupplierManagementPage,
  EAuctionPage
} from './features/procurement'

// Import Financing pages - already imported above
import {
  BrowseRentalsPage,
  MyRentalsPage,
  RentalRequestsPage,
  ListEquipmentPage,
  RentalListingsPage,
  RentalBookingsPage
} from './features/rentals'

// Import service pages
import FindServiceProviders from './pages/FindServiceProviders'
import RegisterAsProvider from './pages/RegisterAsProvider'
import PostServiceRequest from './pages/PostServiceRequest'
import JoinAsServiceProvider from './pages/JoinAsServiceProvider'
import { 
  ServicesMarketplace,
  ServiceBuyerDashboard,
  ServiceProviderDashboard,
  ServiceBooking,
  ServiceMessaging
} from './features/services'
import { ContractorPortal } from './features/contractor'
import { SparePartsMarketplace, SupplierDashboard } from './features/spareparts'
import ContactUs from './pages/ContactUs'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Sitemap from './pages/Sitemap'
import StorefrontPage from './pages/StorefrontPage'

// Import layout components
import { BuyerDashboardLayout, SellerDashboardLayout } from './components/layouts'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* User Manual Routes */}
          <Route path="/manuals" element={<UserManualsIndex />} />
          <Route path="/manuals/buyer" element={<BuyerManual />} />
          <Route path="/manuals/supplier" element={<SupplierManual />} />
          <Route path="/manuals/service-provider" element={<ServiceProviderManual />} />
          <Route path="/manuals/insurance-provider" element={<InsuranceProviderManual />} />
          <Route path="/manuals/financier" element={<FinancierManual />} />
          <Route path="/manuals/contractor" element={<ContractorManual />} />
          <Route path="/manuals/expert" element={<ExpertManual />} />
          <Route path="/manuals/admin" element={<AdminManual />} />
          
          <Route path="/equipments-finder" element={<EquipmentsFinderPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* Buyer Portal - Protected Routes with Dashboard Layout */}
          <Route path="/buyer" element={<BuyerDashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="marketplace" element={<MarketplacePage />} />
            <Route path="marketplace/buy" element={<BuyEquipmentPage />} />
            <Route path="rentals/browse" element={<BrowseRentalsPage />} />
            <Route path="rentals/my-rentals" element={<MyRentalsPage />} />
            <Route path="rentals/requests" element={<RentalRequestsPage />} />
            <Route path="financing/dashboard" element={<BuyerFinancingDashboard />} />
            <Route path="financing/apply" element={<LoanApplicationPage />} />
            <Route path="financing/marketplace" element={<BuyerMarketplace />} />
            <Route path="insurance/dashboard" element={<BuyerInsuranceDashboard />} />
            <Route path="insurance/marketplace" element={<InsuranceMarketplace />} />
            <Route path="services/dashboard" element={<ServiceBuyerDashboard />} />
            <Route path="services/marketplace" element={<ServicesMarketplace />} />
            <Route path="services/messages" element={<ServiceMessaging />} />
             <Route path="procurement/create-rfq" element={<CreateRFQPage />} />
             <Route path="procurement/active-rfqs" element={<ActiveRFQsPage />} />
             <Route path="procurement/supplier-management" element={<SupplierManagementPage />} />
             <Route path="procurement/e-auction" element={<EAuctionPage />} />
             <Route path="messages" element={<MessagesPage />} />
           </Route>

          {/* Seller Portal - Protected Routes with Dashboard Layout */}
          <Route path="/seller" element={<SellerDashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="marketplace/sell" element={<SellEquipmentPage />} />
            <Route path="rentals/list-equipment" element={<ListEquipmentPage />} />
            <Route path="rentals/listings" element={<RentalListingsPage />} />
            <Route path="rentals/bookings" element={<RentalBookingsPage />} />
            <Route path="financing/company/dashboard" element={<CompanyDashboard />} />
            <Route path="financing/company/products" element={<ProductManagement />} />
            <Route path="financing/company/recovery" element={<RecoveryCenter />} />
            <Route path="financing/marketplace/seller" element={<SellerDashboard />} />
            <Route path="financing/marketplace/financier" element={<FinancierDashboard />} />
            <Route path="insurance/provider/dashboard" element={<ProviderDashboard />} />
            <Route path="services/provider/dashboard" element={<ServiceProviderDashboard />} />
            <Route path="supplier-dashboard" element={<SupplierDashboard />} />
          </Route>

          {/* Legacy routes - maintain backwards compatibility */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/browse-equipment" element={<Dashboard />} />
          {/* Marketplace routes - Wrapped in appropriate layouts */}
          <Route path="/marketplace" element={<BuyerDashboardLayout />}>
            <Route index element={<MarketplacePage />} />
            <Route path="buy" element={<BuyEquipmentPage />} />
          </Route>
          <Route path="/marketplace/sell" element={<SellerDashboardLayout />}>
            <Route index element={<SellEquipmentPage />} />
          </Route>
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/services" element={<Services />} />
          <Route path="/advertising" element={<Advertising />} />
          <Route path="/ad-marketplace" element={<AdMarketplace />} />
          <Route path="/auctions" element={<AuctionsPage />} />
          <Route path="/procurement" element={<Procurement />} />
          <Route path="/buyer-network" element={<BuyerNetworkPage />} />
          <Route path="/supplier-network" element={<SupplierNetworkPage />} />
          <Route path="/experts-network" element={<ExpertsNetworkPage />} />
          <Route path="/equipment/:id" element={<EquipmentDetailsPage />} />
          <Route path="/equipment-profile/:id" element={<EquipmentProfilePage />} />
          
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
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/excavators" element={<Excavators />} />
          <Route path="/categories/cranes" element={<Cranes />} />
          <Route path="/categories/bulldozers" element={<Bulldozers />} />
          <Route path="/categories/loaders" element={<Loaders />} />
          <Route path="/categories/trucks" element={<Trucks />} />
          <Route path="/categories/concrete-mixers" element={<ConcreteMixers />} />
          <Route path="/manufacturers" element={<Manufacturers />} />

          {/* Auction routes */}
          <Route path="/auction/bid-now/:id" element={<BidNowPage />} />
          <Route path="/auction/watch-list" element={<WatchListPage />} />
          <Route path="/auction/consign-equipment" element={<ConsignEquipmentPage />} />
          
          {/* Service & procurement routes */}
          <Route path="/start-free-trial" element={<StartFreeTrial />} />
          <Route path="/request-demo" element={<RequestDemo />} />
          <Route path="/investor-proposal" element={<InvestorProposal />} />
          <Route path="/partnership-opportunity" element={<PartnershipOpportunity />} />
          <Route path="/equipment-financier-proposal" element={<EquipmentFinancierProposal />} />
          <Route path="/construction-contractor-proposal" element={<ConstructionContractorProposal />} />
          
          {/* E-Procurement routes - Wrapped in Buyer Layout */}
          <Route path="/procurement" element={<BuyerDashboardLayout />}>
            <Route path="create-rfq" element={<CreateRFQPage />} />
            <Route path="active-rfqs" element={<ActiveRFQsPage />} />
            <Route path="supplier-management" element={<SupplierManagementPage />} />
            <Route path="e-auction" element={<EAuctionPage />} />
          </Route>
          
          {/* Rental Platform Routes - Buyer Portal */}
          <Route path="/rentals" element={<BuyerDashboardLayout />}>
            <Route path="browse" element={<BrowseRentalsPage />} />
            <Route path="my-rentals" element={<MyRentalsPage />} />
            <Route path="requests" element={<RentalRequestsPage />} />
          </Route>

          {/* Rental Platform Routes - Seller Portal */}
          <Route path="/rentals/seller" element={<SellerDashboardLayout />}>
            <Route path="list-equipment" element={<ListEquipmentPage />} />
            <Route path="listings" element={<RentalListingsPage />} />
            <Route path="bookings" element={<RentalBookingsPage />} />
          </Route>
          
          {/* Service Platform Routes */}
          <Route path="/services/marketplace" element={<ServicesMarketplace />} />
          <Route path="/services/buyer" element={<BuyerDashboardLayout />}>
            <Route path="dashboard" element={<ServiceBuyerDashboard />} />
          </Route>
          <Route path="/services/provider" element={<SellerDashboardLayout />}>
            <Route path="dashboard" element={<ServiceProviderDashboard />} />
          </Route>
          <Route path="/services/booking/:providerId" element={<ServiceBooking />} />
          <Route path="/services/messages" element={<ServiceMessaging />} />
          <Route path="/find-service-providers" element={<FindServiceProviders />} />
          <Route path="/register-as-provider" element={<RegisterAsProvider />} />
          <Route path="/post-service-request" element={<PostServiceRequest />} />
          <Route path="/join-as-service-provider" element={<JoinAsServiceProvider />} />
          
          {/* Contractor Portal */}
          <Route path="/contractor-portal" element={<ContractorPortal />} />
          
           {/* Financing Platform Routes - Wrapped in Buyer Layout */}
            <Route path="/financing" element={<FinancingMarketplace />} />
            <Route path="/financing/buyer" element={<BuyerDashboardLayout />}>
              <Route path="dashboard" element={<BuyerFinancingDashboard />} />
              <Route path="apply" element={<LoanApplicationPage />} />
            </Route>
            
            {/* Financing Company Routes - Wrapped in Seller Layout */}
            <Route path="/financing/company" element={<SellerDashboardLayout />}>
              <Route path="dashboard" element={<CompanyDashboard />} />
              <Route path="products" element={<ProductManagement />} />
              <Route path="recovery" element={<RecoveryCenter />} />
            </Route>
            
            {/* Financing Marketplace Routes - Wrapped in appropriate layouts */}
            <Route path="/financing/marketplace" element={<BuyerDashboardLayout />}>
              <Route path="buyer" element={<BuyerMarketplace />} />
            </Route>
            <Route path="/financing/marketplace" element={<SellerDashboardLayout />}>
              <Route path="seller" element={<SellerDashboard />} />
              <Route path="financier" element={<FinancierDashboard />} />
            </Route>
            
            {/* Insurance Platform Routes */}
            <Route path="/insurance/marketplace" element={<InsuranceMarketplace />} />
            <Route path="/insurance/buyer" element={<BuyerDashboardLayout />}>
              <Route path="dashboard" element={<BuyerInsuranceDashboard />} />
            </Route>
            <Route path="/insurance/provider" element={<SellerDashboardLayout />}>
              <Route path="dashboard" element={<ProviderDashboard />} />
            </Route>
          
          {/* Spare Parts Platform */}
        <Route path="/spare-parts" element={<BuyerDashboardLayout />}>
          <Route index element={<SparePartsMarketplace />} />
        </Route>
          <Route path="/supplier" element={<SellerDashboardLayout />}>
            <Route path="dashboard" element={<SupplierDashboard />} />
          </Route>
          {/* Legacy route for backwards compatibility */}
          <Route path="/supplier-dashboard" element={<SupplierDashboard />} />
          
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/sitemap" element={<Sitemap />} />
          
          {/* Storefront routes */}
          <Route path="/storefront/:type/:id" element={<StorefrontPage />} />
          
          {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path="equipment" element={<EquipmentManagement />} />
            <Route path="categories" element={<CategoryManagement />} />
            <Route path="auctions" element={<AuctionManagement />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="services" element={<ServiceManagement />} />
             <Route path="advertisements" element={<AdvertisementManagement />} />
             <Route path="marketplace" element={<MarketplaceManagement />} />
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