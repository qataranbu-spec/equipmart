// Core Insurance Types
export * from './marketplace';

export interface InsuranceProvider {
  id: string;
  name: string;
  licenseNumber: string;
  rating: number;
  founded: string;
  headquarters: string;
  specialties: string[];
  coverageTypes: string[];
  financialStrength: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  logo: string;
  description: string;
  isActive: boolean;
}

export interface InsurancePolicy {
  id: string;
  providerId: string;
  policyNumber: string;
  equipmentId?: string;
  ownerId: string;
  coverageType: string;
  premium: number;
  deductible: number;
  coverageLimit: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'pending' | 'expired' | 'cancelled';
  paymentFrequency: 'monthly' | 'quarterly' | 'annual';
  coverageDetails: {
    theft: boolean;
    vandalism: boolean;
    naturalDisaster: boolean;
    equipment_breakdown: boolean;
    liability: boolean;
    environmental: boolean;
  };
  documents: string[];
}

export interface InsuranceClaim {
  id: string;
  policyId: string;
  claimNumber: string;
  incidentDate: string;
  reportedDate: string;
  claimType: string;
  description: string;
  estimatedLoss: number;
  status: 'submitted' | 'under_review' | 'investigating' | 'approved' | 'denied' | 'settled';
  assignedAdjuster?: string;
  documents: {
    photos: string[];
    reports: string[];
    receipts: string[];
    estimates: string[];
  };
  timeline: {
    date: string;
    event: string;
    notes?: string;
  }[];
  settlement?: {
    amount: number;
    date: string;
    method: string;
  };
}

export interface InsuranceQuote {
  id: string;
  providerId: string;
  equipmentId?: string;
  requesterId: string;
  coverageType: string;
  requestedCoverage: {
    coverageLimit: number;
    deductible: number;
    coverageOptions: string[];
  };
  quote: {
    premium: number;
    deductible: number;
    coverageLimit: number;
    paymentOptions: string[];
    validUntil: string;
  };
  status: 'pending' | 'quoted' | 'accepted' | 'expired';
  createdAt: string;
  notes?: string;
}

export interface InsuranceAgent {
  id: string;
  name: string;
  providerId: string;
  licenseNumber: string;
  specializations: string[];
  contactInfo: {
    phone: string;
    email: string;
    office?: string;
  };
  performance: {
    policiesSold: number;
    clientSatisfaction: number;
    renewalRate: number;
  };
  territory: string[];
  isActive: boolean;
}

export interface EquipmentInsurance {
  equipmentId: string;
  category: string;
  make: string;
  model: string;
  year: number;
  value: number;
  usage: string;
  location: string;
  riskFactors: {
    operatingEnvironment: string;
    operatorExperience: string;
    maintenanceHistory: string;
    securityMeasures: string[];
  };
  recommendedCoverage: {
    type: string;
    minimumCoverage: number;
    recommendedDeductible: number;
    estimatedPremium: number;
  }[];
}

export interface ClaimAssessment {
  id: string;
  claimId: string;
  assessorId: string;
  assessmentDate: string;
  damageAssessment: {
    severity: 'minor' | 'moderate' | 'major' | 'total_loss';
    repairEstimate: number;
    replacementCost: number;
    salvageValue: number;
  };
  recommendations: {
    action: 'repair' | 'replace' | 'total_loss';
    preferredVendors: string[];
    timeline: string;
  };
  photos: string[];
  report: string;
  status: 'pending' | 'completed' | 'disputed';
}

// User roles
export type InsuranceUserRole = 'insurance_provider' | 'insurance_agent' | 'equipment_owner' | 'admin';

export interface InsuranceNotification {
  id: string;
  userId: string;
  type: 'policy_renewal' | 'claim_update' | 'payment_due' | 'quote_received';
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  actionUrl?: string;
}