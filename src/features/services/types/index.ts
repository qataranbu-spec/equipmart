// Services types
export interface ServiceProvider {
  id: string;
  name: string;
  avatar?: string;
  specialization: string;
  rating: number;
  reviews: number;
  location: string;
  experience: string;
  verified: boolean;
  responseTime: string;
  hourlyRate: number;
  availability: 'available' | 'busy' | 'offline';
  services: string[];
  certifications: string[];
  completedJobs: number;
  description: string;
  portfolio?: ServiceProviderPortfolio[];
  businessHours?: BusinessHours;
  insuranceInfo?: InsuranceInfo;
}

export interface ServiceProviderPortfolio {
  id: string;
  title: string;
  description: string;
  images: string[];
  completedDate: string;
  clientName: string;
  category: string;
  equipmentUsed: string[];
}

export interface BusinessHours {
  monday: TimeSlot;
  tuesday: TimeSlot;
  wednesday: TimeSlot;
  thursday: TimeSlot;
  friday: TimeSlot;
  saturday: TimeSlot;
  sunday: TimeSlot;
  timezone: string;
}

export interface TimeSlot {
  open: string;
  close: string;
  closed: boolean;
}

export interface InsuranceInfo {
  provider: string;
  policyNumber: string;
  coverage: number;
  expiryDate: string;
  verified: boolean;
}

export interface ServiceRequest {
  id: string;
  title: string;
  category: string;
  equipmentType: string;
  equipmentBrand?: string;
  equipmentModel?: string;
  equipmentYear?: string;
  location: string;
  address?: string;
  budget: string;
  startDate: string;
  endDate?: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in-progress' | 'completed' | 'cancelled';
  description: string;
  requirements: string[];
  postedDate: string;
  proposals: ServiceProposal[];
  clientId: string;
  clientName: string;
  clientRating: number;
  attachments?: Attachment[];
  contactInfo: ContactInfo;
}

export interface ServiceProposal {
  id: string;
  serviceRequestId: string;
  providerId: string;
  providerName: string;
  proposedPrice: number;
  proposedTimeline: string;
  description: string;
  attachments?: Attachment[];
  submittedDate: string;
  status: 'pending' | 'accepted' | 'rejected' | 'withdrawn';
  validUntil: string;
}

export interface Attachment {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
  uploadedDate: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone?: string;
  preferredContact: 'email' | 'phone' | 'both';
}

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  subcategories: ServiceSubcategory[];
  providerCount: number;
  averageRating: number;
}

export interface ServiceSubcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface ServiceReview {
  id: string;
  serviceId: string;
  providerId: string;
  clientId: string;
  clientName: string;
  rating: number;
  title: string;
  comment: string;
  images?: string[];
  createdDate: string;
  verified: boolean;
  helpful: number;
}

export interface ServiceFilters {
  search: string;
  category: string;
  location: string;
  equipmentType: string;
  minRating: number;
  maxRate: number;
  availability: string;
  verified: boolean;
  experience: string;
  radius?: number;
  responseTime?: string;
  sortBy: 'rating' | 'price' | 'distance' | 'reviews' | 'availability';
  sortOrder: 'asc' | 'desc';
}

export interface ServiceMessage {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  senderType: 'client' | 'provider';
  message: string;
  attachments?: Attachment[];
  timestamp: string;
  read: boolean;
}

export interface ServiceConversation {
  id: string;
  serviceRequestId?: string;
  proposalId?: string;
  clientId: string;
  providerId: string;
  clientName: string;
  providerName: string;
  lastMessage: ServiceMessage;
  unreadCount: number;
  createdDate: string;
  status: 'active' | 'archived' | 'closed';
}