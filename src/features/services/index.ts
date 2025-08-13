// Services feature exports
export { default as ServicesPage } from '../../pages/Services';
export { default as FindServiceProvidersPage } from '../../pages/FindServiceProviders';
export { default as RegisterAsProviderPage } from '../../pages/RegisterAsProvider';
export { default as PostServiceRequestPage } from '../../pages/PostServiceRequest';
export { default as JoinAsServiceProviderPage } from '../../pages/JoinAsServiceProvider';

// Enhanced marketplace exports
export { ServicesMarketplace } from './pages/ServicesMarketplace';

// Buyer and Seller Dashboard exports
export { default as ServiceBuyerDashboard } from './pages/buyer/ServiceBuyerDashboard';
export { default as ServiceProviderDashboard } from './pages/seller/ServiceProviderDashboard';

// Service Management exports
export { default as ServiceBooking } from './pages/ServiceBooking';
export { default as ServiceMessaging } from './pages/ServiceMessaging';

// Component exports
export { ServiceProviderCard } from './components/ServiceProviderCard';
export { ServiceRequestCard } from './components/ServiceRequestCard';
export { ServiceFilters } from './components/ServiceFilters';
export { ServiceRequestForm } from './components/ServiceRequestForm';

// Types
export * from './types';