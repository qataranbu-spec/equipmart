// Rental platform types
export interface RentalEquipment {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  dailyRate: number;
  weeklyRate: number;
  monthlyRate: number;
  location: string;
  availability: 'available' | 'rented' | 'maintenance';
  specifications: Record<string, string>;
  owner: {
    id: string;
    name: string;
    rating: number;
    verified: boolean;
  };
  minRentalPeriod: number; // in days
  maxRentalPeriod: number; // in days
  deliveryAvailable: boolean;
  deliveryRadius: number; // in km
  securityDeposit: number;
  createdAt: string;
  updatedAt: string;
}

export interface RentalBooking {
  id: string;
  equipmentId: string;
  equipment: RentalEquipment;
  renterId: string;
  renterName: string;
  renterEmail: string;
  renterPhone: string;
  ownerId: string;
  startDate: string;
  endDate: string;
  totalDays: number;
  dailyRate: number;
  totalAmount: number;
  securityDeposit: number;
  status: 'pending' | 'confirmed' | 'active' | 'completed' | 'cancelled';
  deliveryAddress?: string;
  specialRequirements?: string;
  projectType?: string;
  paymentStatus: 'pending' | 'partial' | 'paid' | 'refunded';
  createdAt: string;
  updatedAt: string;
}

export interface RentalRequest {
  id: string;
  equipmentType: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  budget: {
    min: number;
    max: number;
    period: 'daily' | 'weekly' | 'monthly';
  };
  projectDetails: string;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
    company?: string;
  };
  status: 'open' | 'matched' | 'closed';
  responses: RentalResponse[];
  createdAt: string;
}

export interface RentalResponse {
  id: string;
  requestId: string;
  providerId: string;
  providerName: string;
  equipmentId: string;
  proposedRate: number;
  message: string;
  createdAt: string;
}

export interface RentalAnalytics {
  totalRevenue: number;
  totalBookings: number;
  utilizationRate: number;
  averageRating: number;
  monthlyRevenue: Array<{
    month: string;
    revenue: number;
    bookings: number;
  }>;
  equipmentPerformance: Array<{
    equipmentId: string;
    equipmentName: string;
    revenue: number;
    utilizationRate: number;
    bookings: number;
  }>;
}