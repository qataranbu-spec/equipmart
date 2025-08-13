// Contractor platform types

export interface ContractorEquipment {
  id: string;
  name: string;
  type: 'buy' | 'rent';
  price: number;
  availability: 'available' | 'limited' | 'unavailable';
  vendor: string;
  location: string;
  specs: string;
  image: string;
  verified: boolean;
  responseTime: string;
  category: string;
  condition?: 'new' | 'used' | 'refurbished';
  hoursMeter?: number;
  year?: number;
  features?: string[];
}

export interface ContractorProject {
  id: string;
  name: string;
  status: 'planning' | 'active' | 'completed' | 'on-hold';
  equipmentNeeded: number;
  equipmentRented: number;
  equipmentOwned: number;
  budget: number;
  spent: number;
  deadline: string;
  location: string;
  projectManager: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  equipment: ContractorEquipmentAssignment[];
}

export interface ContractorEquipmentAssignment {
  id: string;
  equipmentId: string;
  equipmentName: string;
  vendor: string;
  startDate: string;
  endDate: string;
  dailyRate?: number;
  totalCost: number;
  status: 'reserved' | 'active' | 'completed' | 'cancelled';
  location: string;
}

export interface ContractorVendor {
  id: string;
  name: string;
  rating: number;
  totalOrders: number;
  totalSpent: number;
  responseTime: string;
  location: string;
  specialties: string[];
  verified: boolean;
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
  performance: {
    onTimeDelivery: number;
    qualityRating: number;
    communicationRating: number;
  };
}

export interface ContractorOrder {
  id: string;
  equipmentId: string;
  equipmentName: string;
  vendorId: string;
  vendorName: string;
  projectId: string;
  projectName: string;
  type: 'buy' | 'rent';
  status: 'pending' | 'confirmed' | 'active' | 'completed' | 'cancelled';
  startDate: string;
  endDate?: string;
  dailyRate?: number;
  totalCost: number;
  deliveryLocation: string;
  specialRequirements?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContractorDashboardStats {
  totalProjects: number;
  activeRentals: number;
  monthlySpend: number;
  equipmentUtilization: number;
  topVendors: ContractorVendor[];
  recentOrders: ContractorOrder[];
  upcomingDeliveries: {
    id: string;
    equipmentName: string;
    vendor: string;
    deliveryDate: string;
    location: string;
  }[];
}

export interface EquipmentSearchFilters {
  category?: string;
  type?: 'buy' | 'rent' | 'all';
  availability?: 'available' | 'limited' | 'all';
  priceRange?: {
    min: number;
    max: number;
  };
  location?: string;
  vendor?: string;
  condition?: 'new' | 'used' | 'refurbished';
  features?: string[];
}