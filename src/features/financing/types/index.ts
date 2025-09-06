// Financing platform types
export * from './marketplace';

export interface FinancingCompany {
  id: string;
  name: string;
  logo: string;
  description: string;
  established: string;
  rating: number;
  reviews: number;
  verified: boolean;
  location: string;
  website: string;
  phone: string;
  email: string;
  specializations: string[];
  minLoanAmount: number;
  maxLoanAmount: number;
  minCreditScore: number;
  averageApprovalTime: string;
  licenseNumbers: string[];
  activeLoans: number;
  totalFunded: number;
  defaultRate: number;
}

export interface FinancingProduct {
  id: string;
  companyId: string;
  companyName: string;
  name: string;
  type: 'loan' | 'lease' | 'insurance' | 'warranty';
  description: string;
  minAmount: number;
  maxAmount: number;
  minTerm: number; // in months
  maxTerm: number; // in months
  interestRateMin: number;
  interestRateMax: number;
  equipmentTypes: string[];
  creditScoreRequired: number;
  downPaymentRequired: number; // percentage
  features: string[];
  eligibilityCriteria: string[];
  processingFee: number;
  earlyPaymentPenalty: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface LoanApplication {
  id: string;
  productId: string;
  companyId: string;
  applicantId: string;
  equipmentId?: string;
  status: 'draft' | 'submitted' | 'under-review' | 'approved' | 'rejected' | 'withdrawn';
  requestedAmount: number;
  term: number; // in months
  interestRate?: number;
  downPayment: number;
  monthlyPayment?: number;
  totalPayment?: number;
  
  // Applicant Information
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    ssn: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
  };
  
  // Business Information
  businessInfo: {
    businessName: string;
    businessType: string;
    yearsInBusiness: number;
    annualRevenue: number;
    employeeCount: number;
    taxId: string;
    businessAddress: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
  };
  
  // Financial Information
  financialInfo: {
    creditScore?: number;
    bankStatements: boolean;
    taxReturns: boolean;
    financialStatements: boolean;
    existingDebt: number;
    monthlyIncome: number;
  };
  
  documents: LoanDocument[];
  notes: LoanNote[];
  submittedAt?: string;
  reviewedAt?: string;
  approvedAt?: string;
  rejectedAt?: string;
  rejectionReason?: string;
}

export interface LoanDocument {
  id: string;
  applicationId: string;
  type: 'id' | 'bank-statement' | 'tax-return' | 'financial-statement' | 'insurance' | 'other';
  name: string;
  url: string;
  uploadedAt: string;
  verified: boolean;
}

export interface LoanNote {
  id: string;
  applicationId: string;
  authorId: string;
  authorName: string;
  content: string;
  createdAt: string;
  internal: boolean; // visible only to financing company
}

export interface LoanAccount {
  id: string;
  applicationId: string;
  accountNumber: string;
  companyId: string;
  borrowerId: string;
  equipmentId?: string;
  
  // Loan Terms
  principalAmount: number;
  interestRate: number;
  term: number; // in months
  monthlyPayment: number;
  
  // Account Status
  status: 'active' | 'paid-off' | 'defaulted' | 'in-recovery';
  currentBalance: number;
  totalPaid: number;
  paymentsRemaining: number;
  nextPaymentDate: string;
  nextPaymentAmount: number;
  
  // Payment History
  payments: LoanPayment[];
  
  // Dates
  originationDate: string;
  firstPaymentDate: string;
  maturityDate: string;
  lastPaymentDate?: string;
  
  // Delinquency Information
  daysPastDue: number;
  delinquentAmount: number;
  lateFeesOwed: number;
}

export interface LoanPayment {
  id: string;
  accountId: string;
  amount: number;
  principalAmount: number;
  interestAmount: number;
  lateFee: number;
  paymentDate: string;
  dueDate: string;
  method: 'ach' | 'check' | 'wire' | 'online' | 'phone';
  status: 'scheduled' | 'processed' | 'failed' | 'returned';
  confirmationNumber?: string;
  notes?: string;
}

export interface RecoveryCase {
  id: string;
  accountId: string;
  borrowerId: string;
  companyId: string;
  status: 'new' | 'in-progress' | 'legal-action' | 'settled' | 'charged-off';
  priority: 'low' | 'medium' | 'high' | 'critical';
  
  // Financial Details
  originalBalance: number;
  currentBalance: number;
  totalPastDue: number;
  daysPastDue: number;
  
  // Recovery Information
  assignedAgent?: string;
  recoveryStrategy: string;
  settlementOffer?: number;
  acceptedSettlement?: number;
  
  // Activities
  activities: RecoveryActivity[];
  
  // Equipment Information
  equipmentStatus: 'with-borrower' | 'repossessed' | 'sold' | 'auctioned';
  equipmentValue?: number;
  
  // Dates
  createdAt: string;
  lastContactDate?: string;
  nextActionDate?: string;
  closedAt?: string;
}

export interface RecoveryActivity {
  id: string;
  caseId: string;
  type: 'call' | 'email' | 'letter' | 'visit' | 'legal' | 'payment' | 'settlement';
  description: string;
  outcome: string;
  agentId: string;
  agentName: string;
  scheduledDate?: string;
  completedDate: string;
  nextAction?: string;
  nextActionDate?: string;
}

export interface CreditProfile {
  id: string;
  applicantId: string;
  creditScore: number;
  creditBureau: 'experian' | 'equifax' | 'transunion';
  riskGrade: 'A' | 'B' | 'C' | 'D' | 'F';
  annualIncome: number;
  debtToIncomeRatio: number;
  paymentHistory: number; // percentage
  creditUtilization: number; // percentage
  lengthOfCreditHistory: number; // in years
  newCreditInquiries: number;
  publicRecords: number;
  reportDate: string;
  factors: CreditFactor[];
}

export interface CreditFactor {
  type: 'positive' | 'negative' | 'neutral';
  description: string;
  impact: 'high' | 'medium' | 'low';
}

export interface FinancingCalculation {
  loanAmount: number;
  downPayment: number;
  interestRate: number;
  term: number; // in months
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  paymentSchedule: PaymentScheduleItem[];
}

export interface PaymentScheduleItem {
  paymentNumber: number;
  paymentDate: string;
  principalAmount: number;
  interestAmount: number;
  totalPayment: number;
  remainingBalance: number;
}

export interface FinancingFilters {
  search: string;
  productType: string[];
  minAmount: number;
  maxAmount: number;
  maxRate: number;
  minTerm: number;
  maxTerm: number;
  equipmentType: string[];
  creditScoreMin: number;
  companyRating: number;
  verified: boolean;
  sortBy: 'rate' | 'amount' | 'term' | 'rating' | 'approval-time';
  sortOrder: 'asc' | 'desc';
}

export interface FinancingStats {
  totalApplications: number;
  approvalRate: number;
  averageAmount: number;
  totalFunded: number;
  activeLoans: number;
  recoveryRate: number;
  monthlyRevenue: number;
  portfolioValue: number;
}