// Procurement feature types

export interface RFQ {
  id: string;
  title: string;
  description: string;
  category: string;
  budget: number;
  deadline: Date;
  status: 'draft' | 'published' | 'closed' | 'awarded';
  requirements: RFQRequirement[];
  attachments?: string[];
  createdAt: Date;
  updatedAt: Date;
  responses: RFQResponse[];
}

export interface RFQRequirement {
  id: string;
  description: string;
  quantity: number;
  specifications: string;
  deliveryLocation: string;
  deliveryDate: Date;
}

export interface RFQResponse {
  id: string;
  rfqId: string;
  supplierId: string;
  supplierName: string;
  proposedPrice: number;
  deliveryTime: string;
  proposal: string;
  attachments?: string[];
  status: 'pending' | 'accepted' | 'rejected';
  submittedAt: Date;
}

export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  category: string;
  certifications: string[];
  rating: number;
  totalProjects: number;
  status: 'active' | 'inactive' | 'pending';
  joinedAt: Date;
  lastActivity: Date;
}

export interface Auction {
  id: string;
  title: string;
  description: string;
  category: string;
  startingPrice: number;
  currentPrice: number;
  reservePrice?: number;
  startDate: Date;
  endDate: Date;
  status: 'upcoming' | 'active' | 'ended' | 'cancelled';
  participants: number;
  highestBidder?: string;
  items: AuctionItem[];
  createdAt: Date;
}

export interface AuctionItem {
  id: string;
  name: string;
  description: string;
  quantity: number;
  condition: string;
  estimatedValue: number;
  images?: string[];
}

export interface Bid {
  id: string;
  auctionId: string;
  bidderId: string;
  bidderName: string;
  amount: number;
  timestamp: Date;
  status: 'active' | 'outbid' | 'winning';
}