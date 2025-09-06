// Insurance Marketplace Types
export interface InsuranceListing {
  id: string;
  providerId: string;
  title: string;
  description: string;
  coverageType: string;
  equipmentCategories: string[];
  features: string[];
  startingPremium: number;
  minimumCoverage: number;
  maximumCoverage: number;
  deductibleOptions: number[];
  paymentOptions: string[];
  highlights: string[];
  terms: string;
  isActive: boolean;
  createdAt: string;
}

export interface PolicyApplication {
  id: string;
  applicantId: string;
  providerId: string;
  listingId: string;
  step: number;
  totalSteps: number;
  status: 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected';
  applicationData: {
    personalInfo: {
      name: string;
      email: string;
      phone: string;
      address: string;
    };
    businessInfo?: {
      companyName: string;
      businessType: string;
      yearsInBusiness: number;
      annualRevenue: number;
    };
    equipmentInfo: {
      equipmentId?: string;
      category: string;
      make: string;
      model: string;
      year: number;
      value: number;
      usage: string;
      location: string;
    };
    coveragePreferences: {
      coverageType: string;
      coverageLimit: number;
      deductible: number;
      additionalCoverage: string[];
    };
    riskAssessment: {
      operatingEnvironment: string;
      safetyProtocols: string[];
      previousClaims: number;
      securityMeasures: string[];
    };
  };
  documents: {
    type: string;
    name: string;
    url: string;
    uploaded: boolean;
  }[];
  createdAt: string;
  updatedAt: string;
}

export interface ClaimDocument {
  id: string;
  claimId: string;
  type: 'photo' | 'report' | 'invoice' | 'receipt' | 'estimate' | 'other';
  name: string;
  url: string;
  uploadedBy: string;
  uploadedAt: string;
  verified: boolean;
}

export interface InsuranceCalculation {
  equipmentValue: number;
  equipmentAge: number;
  usageType: string;
  location: string;
  riskFactors: {
    factor: string;
    impact: number;
  }[];
  basePremium: number;
  adjustments: {
    factor: string;
    percentage: number;
    amount: number;
  }[];
  finalPremium: number;
  confidence: number;
}

export interface RiskProfile {
  equipmentId: string;
  riskScore: number;
  factors: {
    category: string;
    risk: 'low' | 'medium' | 'high';
    description: string;
    impact: number;
  }[];
  recommendations: string[];
  lastAssessed: string;
}

export interface PolicyRenewal {
  id: string;
  policyId: string;
  currentTerm: {
    startDate: string;
    endDate: string;
    premium: number;
  };
  renewalTerm: {
    startDate: string;
    endDate: string;
    premium: number;
    changes: string[];
  };
  status: 'pending' | 'offered' | 'accepted' | 'declined';
  deadlineDate: string;
  remindersSent: number;
  notes?: string;
}

export interface InsuranceFilter {
  coverageTypes?: string[];
  providers?: string[];
  premiumRange?: {
    min: number;
    max: number;
  };
  coverageRange?: {
    min: number;
    max: number;
  };
  deductibles?: number[];
  equipmentCategories?: string[];
  paymentFrequency?: string[];
  ratings?: number[];
}

export interface InsuranceAnalytics {
  totalPolicies: number;
  activePolicies: number;
  totalPremiumCollected: number;
  averagePremium: number;
  claimsRatio: number;
  topProviders: {
    name: string;
    policies: number;
    premiums: number;
  }[];
  coverageByCategory: {
    category: string;
    policies: number;
    claims: number;
    premiums: number;
  }[];
  monthlyTrends: {
    month: string;
    newPolicies: number;
    renewals: number;
    claims: number;
    premiums: number;
  }[];
}