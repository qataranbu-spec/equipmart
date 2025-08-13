// Advertisement types
export interface Advertisement {
  id: string;
  title: string;
  description: string;
  advertiser: string;
  category: AdCategory;
  type: AdType;
  price: number;
  budget: number;
  status: AdStatus;
  startDate: string;
  endDate: string;
  targetAudience: string[];
  location: string;
  images: string[];
  clicks: number;
  impressions: number;
  contactInfo: {
    phone: string;
    email: string;
    website?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export type AdCategory = 
  | 'equipment' 
  | 'services' 
  | 'parts' 
  | 'rentals' 
  | 'auctions' 
  | 'training'
  | 'jobs';

export type AdType = 
  | 'featured' 
  | 'banner' 
  | 'listing' 
  | 'sponsored' 
  | 'premium';

export type AdStatus = 
  | 'draft' 
  | 'pending' 
  | 'active' 
  | 'paused' 
  | 'expired' 
  | 'rejected';

export interface AdPackage {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // in days
  features: string[];
  maxImages: number;
  priority: number;
  type: AdType;
}

export interface AdAnalytics {
  adId: string;
  impressions: number;
  clicks: number;
  ctr: number; // click-through rate
  cost: number;
  conversions: number;
  date: string;
}