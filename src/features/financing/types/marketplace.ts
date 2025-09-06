// Equipment marketplace types extending financing features

export interface EquipmentListing {
  id: string;
  title: string;
  equipmentType: string;
  brand: string;
  model: string;
  year: number;
  condition: 'Excellent' | 'Good' | 'Fair' | 'Poor' | 'Repossessed';
  price: number;
  currency: string;
  description: string;
  specifications: Record<string, string>;
  location: {
    city: string;
    state: string;
    country: string;
  };
  images: string[];
  inspectionReport?: {
    uploadedAt: string;
    fileUrl: string;
    reportBy: string;
    rating: number;
  };
  seller: {
    id: string;
    name: string;
    type: 'NBFC' | 'Bank' | 'Dealer' | 'Contractor';
    rating: number;
    verified: boolean;
  };
  status: 'Active' | 'Pending Approval' | 'Sold' | 'Under Negotiation' | 'Rejected';
  isRepossessed: boolean;
  financingOptions?: {
    available: boolean;
    minDownPayment: number;
    maxTenure: number;
    interestRate: number;
  };
  viewCount: number;
  createdAt: string;
  updatedAt: string;
  approvedAt?: string;
  approvedBy?: string;
}

export interface EquipmentOffer {
  id: string;
  listingId: string;
  listing: EquipmentListing;
  buyerId: string;
  buyerName: string;
  buyerEmail: string;
  offerAmount: number;
  currency: string;
  message: string;
  conditions: string[];
  financingRequired: boolean;
  financingDetails?: {
    downPayment: number;
    loanAmount: number;
    tenure: number;
  };
  inspectionRequested: boolean;
  status: 'Pending' | 'Accepted' | 'Rejected' | 'Countered' | 'Withdrawn';
  counterOffer?: {
    amount: number;
    message: string;
    createdAt: string;
  };
  createdAt: string;
  expiresAt: string;
}

export interface EscrowTransaction {
  id: string;
  offerId: string;
  offer: EquipmentOffer;
  buyerId: string;
  sellerId: string;
  amount: number;
  currency: string;
  status: 'Initiated' | 'Funded' | 'Released' | 'Disputed' | 'Cancelled';
  timeline: {
    initiated: string;
    funded?: string;
    inspectionComplete?: string;
    released?: string;
    disputed?: string;
  };
  documents: {
    id: string;
    name: string;
    type: 'invoice' | 'receipt' | 'inspection' | 'transfer' | 'other';
    uploadedBy: string;
    uploadedAt: string;
    fileUrl: string;
  }[];
  disputeReason?: string;
  adminNotes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserWishlist {
  id: string;
  userId: string;
  listings: EquipmentListing[];
  createdAt: string;
  updatedAt: string;
}

export interface MarketplaceAnalytics {
  totalListings: number;
  activeListings: number;
  soldListings: number;
  pendingApproval: number;
  totalOffers: number;
  acceptedOffers: number;
  averagePrice: number;
  averageDaysToSell: number;
  topCategories: Array<{
    category: string;
    count: number;
    averagePrice: number;
  }>;
  monthlyStats: Array<{
    month: string;
    listings: number;
    sales: number;
    revenue: number;
  }>;
  sellerStats: Array<{
    sellerId: string;
    sellerName: string;
    sellerType: string;
    totalListings: number;
    soldItems: number;
    totalRevenue: number;
    averageRating: number;
  }>;
}

export interface MarketplaceFilter {
  category?: string;
  brand?: string;
  condition?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  yearRange?: {
    min: number;
    max: number;
  };
  location?: string;
  sellerType?: string;
  isRepossessed?: boolean;
  financingAvailable?: boolean;
}

export interface UserRole {
  id: string;
  userId: string;
  role: 'Buyer' | 'Seller' | 'Financier' | 'Admin';
  permissions: string[];
  verified: boolean;
  createdAt: string;
}