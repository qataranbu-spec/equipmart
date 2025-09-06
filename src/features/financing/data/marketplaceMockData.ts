import { EquipmentListing, EquipmentOffer, EscrowTransaction, MarketplaceAnalytics, UserRole } from '../types/marketplace';

export const mockEquipmentListings: EquipmentListing[] = [
  {
    id: "listing-1",
    title: "Caterpillar 320 Excavator - Excellent Condition",
    equipmentType: "Excavator",
    brand: "Caterpillar",
    model: "320",
    year: 2020,
    condition: "Excellent",
    price: 125000,
    currency: "USD",
    description: "Well-maintained excavator with low operating hours. Perfect for construction and excavation projects.",
    specifications: {
      "Engine Power": "121 HP",
      "Operating Weight": "20,500 kg",
      "Bucket Capacity": "1.0 m³",
      "Max Digging Depth": "6.5 m",
      "Operating Hours": "1,200 hrs"
    },
    location: {
      city: "Houston",
      state: "Texas",
      country: "USA"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inspectionReport: {
      uploadedAt: "2024-01-15T10:00:00Z",
      fileUrl: "/inspection-reports/cat-320-report.pdf",
      reportBy: "Certified Inspector Inc.",
      rating: 9.2
    },
    seller: {
      id: "seller-1",
      name: "Houston Heavy Equipment",
      type: "Dealer",
      rating: 4.8,
      verified: true
    },
    status: "Active",
    isRepossessed: false,
    financingOptions: {
      available: true,
      minDownPayment: 25000,
      maxTenure: 60,
      interestRate: 8.5
    },
    viewCount: 145,
    createdAt: "2024-01-10T09:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    approvedAt: "2024-01-11T14:30:00Z",
    approvedBy: "admin-1"
  },
  {
    id: "listing-2",
    title: "Repossessed Komatsu Bulldozer D65EX",
    equipmentType: "Bulldozer",
    brand: "Komatsu",
    model: "D65EX",
    year: 2018,
    condition: "Repossessed",
    price: 89000,
    currency: "USD",
    description: "Bank repossessed bulldozer in good working condition. Ideal for earthmoving operations.",
    specifications: {
      "Engine Power": "190 HP",
      "Operating Weight": "18,900 kg",
      "Blade Capacity": "3.7 m³",
      "Ground Pressure": "42 kPa",
      "Operating Hours": "3,500 hrs"
    },
    location: {
      city: "Phoenix",
      state: "Arizona",
      country: "USA"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    seller: {
      id: "nbfc-1",
      name: "Southwest Equipment Finance",
      type: "NBFC",
      rating: 4.5,
      verified: true
    },
    status: "Active",
    isRepossessed: true,
    financingOptions: {
      available: true,
      minDownPayment: 17800,
      maxTenure: 48,
      interestRate: 9.2
    },
    viewCount: 89,
    createdAt: "2024-01-12T11:00:00Z",
    updatedAt: "2024-01-13T16:20:00Z",
    approvedAt: "2024-01-13T09:15:00Z",
    approvedBy: "admin-2"
  },
  {
    id: "listing-3",
    title: "John Deere 544K Wheel Loader - Fair Condition",
    equipmentType: "Wheel Loader",
    brand: "John Deere",
    model: "544K",
    year: 2016,
    condition: "Fair",
    price: 95000,
    currency: "USD",
    description: "Reliable wheel loader with some wear but mechanically sound. Good for material handling.",
    specifications: {
      "Engine Power": "164 HP",
      "Operating Weight": "16,580 kg",
      "Bucket Capacity": "2.7 m³",
      "Lift Capacity": "7,200 kg",
      "Operating Hours": "4,800 hrs"
    },
    location: {
      city: "Denver",
      state: "Colorado",
      country: "USA"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    seller: {
      id: "contractor-1",
      name: "Mountain Construction Co.",
      type: "Contractor",
      rating: 4.3,
      verified: true
    },
    status: "Under Negotiation",
    isRepossessed: false,
    viewCount: 67,
    createdAt: "2024-01-08T14:30:00Z",
    updatedAt: "2024-01-14T11:45:00Z",
    approvedAt: "2024-01-09T10:20:00Z",
    approvedBy: "admin-1"
  }
];

export const mockEquipmentOffers: EquipmentOffer[] = [
  {
    id: "offer-1",
    listingId: "listing-1",
    listing: mockEquipmentListings[0],
    buyerId: "buyer-1",
    buyerName: "Metro Construction LLC",
    buyerEmail: "procurement@metroconstruction.com",
    offerAmount: 118000,
    currency: "USD",
    message: "We're interested in this excavator for our upcoming project. The offer is valid for 7 days.",
    conditions: ["Inspection required", "Financing pre-approved", "Delivery included"],
    financingRequired: true,
    financingDetails: {
      downPayment: 23600,
      loanAmount: 94400,
      tenure: 48
    },
    inspectionRequested: true,
    status: "Pending",
    createdAt: "2024-01-16T09:30:00Z",
    expiresAt: "2024-01-23T09:30:00Z"
  },
  {
    id: "offer-2",
    listingId: "listing-2",
    listing: mockEquipmentListings[1],
    buyerId: "buyer-2",
    buyerName: "Desert Earthworks Inc.",
    buyerEmail: "buyers@desertearthworks.com",
    offerAmount: 85000,
    currency: "USD",
    message: "Cash offer for immediate purchase. Can close within 3 business days.",
    conditions: ["Cash purchase", "As-is condition accepted"],
    financingRequired: false,
    inspectionRequested: false,
    status: "Accepted",
    createdAt: "2024-01-14T15:20:00Z",
    expiresAt: "2024-01-21T15:20:00Z"
  }
];

export const mockEscrowTransactions: EscrowTransaction[] = [
  {
    id: "escrow-1",
    offerId: "offer-2",
    offer: mockEquipmentOffers[1],
    buyerId: "buyer-2",
    sellerId: "nbfc-1",
    amount: 85000,
    currency: "USD",
    status: "Funded",
    timeline: {
      initiated: "2024-01-15T10:00:00Z",
      funded: "2024-01-15T14:30:00Z",
      inspectionComplete: "2024-01-16T11:00:00Z"
    },
    documents: [
      {
        id: "doc-1",
        name: "Purchase Agreement",
        type: "invoice",
        uploadedBy: "seller",
        uploadedAt: "2024-01-15T12:00:00Z",
        fileUrl: "/documents/purchase-agreement.pdf"
      },
      {
        id: "doc-2",
        name: "Equipment Inspection Report",
        type: "inspection",
        uploadedBy: "buyer",
        uploadedAt: "2024-01-16T11:00:00Z",
        fileUrl: "/documents/inspection-report.pdf"
      }
    ],
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-16T11:00:00Z"
  }
];

export const mockMarketplaceAnalytics: MarketplaceAnalytics = {
  totalListings: 147,
  activeListings: 89,
  soldListings: 34,
  pendingApproval: 24,
  totalOffers: 256,
  acceptedOffers: 78,
  averagePrice: 125000,
  averageDaysToSell: 18,
  topCategories: [
    { category: "Excavators", count: 45, averagePrice: 135000 },
    { category: "Bulldozers", count: 38, averagePrice: 165000 },
    { category: "Wheel Loaders", count: 32, averagePrice: 98000 },
    { category: "Cranes", count: 22, averagePrice: 245000 },
    { category: "Dump Trucks", count: 10, averagePrice: 85000 }
  ],
  monthlyStats: [
    { month: "Oct 2023", listings: 23, sales: 12, revenue: 1480000 },
    { month: "Nov 2023", listings: 28, sales: 15, revenue: 1875000 },
    { month: "Dec 2023", listings: 31, sales: 18, revenue: 2240000 },
    { month: "Jan 2024", listings: 34, sales: 21, revenue: 2625000 }
  ],
  sellerStats: [
    {
      sellerId: "seller-1",
      sellerName: "Houston Heavy Equipment",
      sellerType: "Dealer",
      totalListings: 23,
      soldItems: 12,
      totalRevenue: 1560000,
      averageRating: 4.8
    },
    {
      sellerId: "nbfc-1",
      sellerName: "Southwest Equipment Finance",
      sellerType: "NBFC",
      totalListings: 18,
      soldItems: 15,
      totalRevenue: 1340000,
      averageRating: 4.5
    }
  ]
};

export const mockUserRoles: UserRole[] = [
  {
    id: "role-1",
    userId: "user-1",
    role: "Buyer",
    permissions: ["browse_listings", "make_offers", "view_analytics"],
    verified: true,
    createdAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "role-2",
    userId: "user-2",
    role: "Seller",
    permissions: ["create_listings", "manage_offers", "view_analytics"],
    verified: true,
    createdAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "role-3",
    userId: "user-3",
    role: "Financier",
    permissions: ["create_recovery_listings", "manage_offers", "view_detailed_analytics"],
    verified: true,
    createdAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "role-4",
    userId: "user-4",
    role: "Admin",
    permissions: ["approve_listings", "manage_users", "view_all_analytics", "manage_platform"],
    verified: true,
    createdAt: "2024-01-01T00:00:00Z"
  }
];