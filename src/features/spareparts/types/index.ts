// Spare Parts Platform Types

export interface SparePart {
  id: string;
  partNumber: string;
  name: string;
  description: string;
  brand: string;
  manufacturer: string;
  category: string;
  subcategory: string;
  type: 'OEM' | 'Aftermarket' | 'Refurbished';
  
  // Compatibility & Application
  compatibility: string[]; // Equipment models this part fits
  applicationNotes: string;
  interchangeableWith: string[]; // Other part numbers that are compatible
  
  // Pricing & Availability
  price: number;
  currency: string;
  availability: 'in-stock' | 'limited' | 'out-of-stock' | 'on-order' | 'discontinued';
  quantity: number;
  minOrderQuantity: number;
  maxOrderQuantity?: number;
  bulkPricing?: BulkPricing[];
  
  // Technical Specifications
  specifications: Record<string, string>;
  dimensions?: {
    length?: number;
    width?: number;
    height?: number;
    diameter?: number;
    weight?: number;
  };
  materials?: string[];
  
  // Supplier Information
  supplier: SparePartSupplier;
  manufacturerWarranty: string;
  supplierWarranty: string;
  returnPolicy: string;
  
  // Logistics
  leadTime: string;
  shippingWeight: number;
  shippingDimensions?: {
    length: number;
    width: number;
    height: number;
  };
  hazardousMaterial: boolean;
  
  // Media & Documentation
  images: string[];
  documents: PartDocument[];
  videos?: string[];
  
  // Performance & Analytics
  views: number;
  inquiries: number;
  orders: number;
  rating: number;
  reviews: number;
  
  // Metadata
  tags: string[];
  keywords: string[];
  seoTitle?: string;
  seoDescription?: string;
  status: 'active' | 'inactive' | 'pending' | 'discontinued';
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  lastViewedAt?: string;
}

export interface BulkPricing {
  minQuantity: number;
  maxQuantity?: number;
  price: number;
  discount?: number;
}

export interface PartDocument {
  id: string;
  name: string;
  type: 'datasheet' | 'manual' | 'certificate' | 'drawing' | 'catalog';
  url: string;
  size: number;
  uploadedAt: string;
}

export interface SparePartSupplier {
  id: string;
  name: string;
  companyType: 'dealer' | 'importer' | 'manufacturer' | 'distributor' | 'aftermarket';
  location: string;
  address: Address;
  contact: ContactInfo;
  
  // Credentials & Verification
  verified: boolean;
  certifications: string[];
  businessLicense: string;
  taxId: string;
  
  // Performance Metrics
  rating: number;
  totalReviews: number;
  responseTime: string; // e.g., "< 2 hours"
  fulfillmentRate: number;
  onTimeDelivery: number;
  qualityRating: number;
  communicationRating: number;
  
  // Business Details
  yearsInBusiness: number;
  totalParts: number;
  specialties: string[];
  servicesOffered: string[];
  
  // Logistics Capabilities
  shippingMethods: ShippingMethod[];
  shippingRegions: string[];
  domesticShipping: boolean;
  internationalShipping: boolean;
  
  // Business Hours & Availability
  businessHours: BusinessHours;
  timezone: string;
  languages: string[];
  
  // Membership & Subscriptions
  membershipLevel: 'basic' | 'premium' | 'enterprise';
  subscriptionPlan: string;
  featuresEnabled: string[];
  
  // Statistics
  totalOrders: number;
  totalRevenue: number;
  averageOrderValue: number;
  repeatCustomerRate: number;
  
  createdAt: string;
  lastActiveAt: string;
  status: 'active' | 'inactive' | 'suspended';
}

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface ContactInfo {
  primaryPhone: string;
  secondaryPhone?: string;
  email: string;
  website?: string;
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface ShippingMethod {
  name: string;
  carrier: string;
  estimatedDays: string;
  trackingAvailable: boolean;
  insuranceAvailable: boolean;
}

export interface BusinessHours {
  monday: DayHours;
  tuesday: DayHours;
  wednesday: DayHours;
  thursday: DayHours;
  friday: DayHours;
  saturday: DayHours;
  sunday: DayHours;
}

export interface DayHours {
  open: string;
  close: string;
  closed: boolean;
}

export interface SparePartInquiry {
  id: string;
  partId: string;
  partNumber: string;
  partName: string;
  supplierId: string;
  
  // Customer Information
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerCompany?: string;
  customerAddress?: Address;
  
  // Inquiry Details
  quantity: number;
  targetPrice?: number;
  urgency: 'low' | 'medium' | 'high' | 'urgent';
  requiredBy?: string;
  
  // Additional Requirements
  message: string;
  specifications?: string;
  customRequirements?: string;
  deliveryLocation: string;
  
  // Status & Tracking
  status: 'new' | 'viewed' | 'responded' | 'quoted' | 'negotiating' | 'accepted' | 'rejected' | 'closed';
  responses: InquiryResponse[];
  
  // Metadata
  source: 'website' | 'email' | 'phone' | 'rfq' | 'marketplace';
  referenceNumber: string;
  createdAt: string;
  updatedAt: string;
  closedAt?: string;
}

export interface InquiryResponse {
  id: string;
  responderId: string;
  responderName: string;
  responderRole: 'supplier' | 'customer';
  message: string;
  quotedPrice?: number;
  quotedQuantity?: number;
  leadTime?: string;
  validUntil?: string;
  attachments?: string[];
  createdAt: string;
}

export interface RFQ {
  id: string;
  rfqNumber: string;
  title: string;
  description: string;
  
  // Customer Information
  customerId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerCompany: string;
  customerAddress: Address;
  
  // RFQ Details
  parts: RFQPart[];
  totalEstimatedValue: number;
  currency: string;
  
  // Requirements
  deliveryLocation: string;
  requiredBy: string;
  paymentTerms?: string;
  shippingTerms?: string;
  specialRequirements?: string;
  
  // Status & Responses
  status: 'draft' | 'published' | 'closed' | 'awarded' | 'cancelled';
  responses: RFQResponse[];
  publishedAt?: string;
  closingDate: string;
  awardedTo?: string;
  
  // Visibility & Distribution
  visibility: 'public' | 'invited' | 'private';
  invitedSuppliers: string[];
  categories: string[];
  tags: string[];
  
  // Metadata
  createdAt: string;
  updatedAt: string;
  version: number;
}

export interface RFQPart {
  partNumber?: string;
  partName: string;
  description: string;
  quantity: number;
  targetPrice?: number;
  specifications?: Record<string, string>;
  brand?: string;
  alternativeAccepted: boolean;
  notes?: string;
}

export interface RFQResponse {
  id: string;
  rfqId: string;
  supplierId: string;
  supplierName: string;
  supplierEmail: string;
  
  // Response Details
  parts: RFQPartResponse[];
  totalPrice: number;
  currency: string;
  leadTime: string;
  validUntil: string;
  
  // Terms & Conditions
  paymentTerms: string;
  shippingTerms: string;
  warranty: string;
  notes?: string;
  
  // Attachments & Documents
  attachments: string[];
  alternativeProposals?: AlternativeProposal[];
  
  // Status & Evaluation
  status: 'draft' | 'submitted' | 'under-review' | 'shortlisted' | 'selected' | 'rejected';
  score?: number;
  evaluationNotes?: string;
  
  // Metadata
  submittedAt: string;
  updatedAt: string;
  viewedAt?: string;
  respondedAt?: string;
}

export interface RFQPartResponse {
  partNumber: string;
  partName: string;
  brand: string;
  type: 'OEM' | 'Aftermarket' | 'Refurbished';
  unitPrice: number;
  quantity: number;
  totalPrice: number;
  availability: string;
  leadTime: string;
  specifications?: Record<string, string>;
  notes?: string;
}

export interface AlternativeProposal {
  id: string;
  title: string;
  description: string;
  parts: RFQPartResponse[];
  totalPrice: number;
  advantages: string[];
  notes?: string;
}

export interface PartCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  parentId?: string;
  children?: PartCategory[];
  level: number;
  sortOrder: number;
  
  // SEO & Metadata
  seoTitle?: string;
  seoDescription?: string;
  keywords: string[];
  
  // Statistics
  partCount: number;
  supplierCount: number;
  
  // Display
  icon?: string;
  image?: string;
  featured: boolean;
  status: 'active' | 'inactive';
  
  createdAt: string;
  updatedAt: string;
}

export interface SparePartOrder {
  id: string;
  orderNumber: string;
  type: 'purchase' | 'quotation';
  
  // Customer Information
  customerId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerCompany?: string;
  
  // Order Details
  parts: OrderPart[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  currency: string;
  
  // Addresses
  billingAddress: Address;
  shippingAddress: Address;
  
  // Status & Fulfillment
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
  fulfillmentStatus: 'pending' | 'processing' | 'shipped' | 'delivered';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  
  // Logistics
  shippingMethod: string;
  trackingNumber?: string;
  estimatedDelivery?: string;
  actualDelivery?: string;
  
  // Metadata
  source: 'website' | 'inquiry' | 'rfq' | 'phone' | 'email';
  referenceNumber?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  
  // Supplier Information
  supplierId: string;
  supplierName: string;
}

export interface OrderPart {
  partId: string;
  partNumber: string;
  partName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  specifications?: Record<string, string>;
  notes?: string;
}

export interface SearchFilters {
  query?: string;
  categories?: string[];
  brands?: string[];
  manufacturers?: string[];
  types?: ('OEM' | 'Aftermarket' | 'Refurbished')[];
  priceRange?: {
    min: number;
    max: number;
  };
  availability?: ('in-stock' | 'limited' | 'out-of-stock' | 'on-order')[];
  suppliers?: string[];
  locations?: string[];
  compatibility?: string[];
  specifications?: Record<string, string>;
  tags?: string[];
  featured?: boolean;
  inStockOnly?: boolean;
  verifiedSuppliersOnly?: boolean;
}

export interface SearchResult {
  parts: SparePart[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  filters: {
    categories: FilterOption[];
    brands: FilterOption[];
    types: FilterOption[];
    suppliers: FilterOption[];
    priceRanges: PriceRange[];
  };
}

export interface FilterOption {
  value: string;
  label: string;
  count: number;
}

export interface PriceRange {
  min: number;
  max: number;
  label: string;
  count: number;
}