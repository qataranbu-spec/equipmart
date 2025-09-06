// Storefront types
export interface StorefrontBase {
  id: string;
  name: string;
  logo?: string;
  description: string;
  location: string;
  rating: number;
  verified: boolean;
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
  establishedYear?: number;
}

export interface SupplierStorefrontData extends StorefrontBase {
  categories: string[];
  products: Array<{
    id: string;
    name: string;
    category: string;
    price: number;
    image: string;
    inStock: boolean;
    description: string;
  }>;
  certifications: string[];
  businessHours: string;
}

export interface ServiceProviderStorefrontData extends StorefrontBase {
  reviewCount: number;
  services: Array<{
    id: string;
    name: string;
    category: string;
    description: string;
    price: string;
    duration: string;
    available: boolean;
  }>;
  specialties: string[];
  certifications: string[];
  businessHours: string;
  responseTime: string;
  teamSize: number;
  projectsCompleted: number;
  portfolio: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    completedDate: string;
  }>;
}