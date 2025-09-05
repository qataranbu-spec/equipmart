import { 
  FinancingCompany, 
  FinancingProduct, 
  LoanApplication, 
  LoanAccount, 
  RecoveryCase,
  CreditProfile,
  FinancingStats 
} from '../types';

export const mockFinancingCompanies: FinancingCompany[] = [
  {
    id: 'fc-1',
    name: 'EquipFund Capital',
    logo: '/placeholder.svg',
    description: 'Leading equipment financing solutions for construction and heavy machinery.',
    established: '2015',
    rating: 4.8,
    reviews: 1247,
    verified: true,
    location: 'Atlanta, GA',
    website: 'https://equipfund.com',
    phone: '(555) 123-4567',
    email: 'info@equipfund.com',
    specializations: ['Heavy Equipment', 'Construction Machinery', 'Agricultural Equipment'],
    minLoanAmount: 10000,
    maxLoanAmount: 2000000,
    minCreditScore: 650,
    averageApprovalTime: '24-48 hours',
    licenseNumbers: ['EFL-2015-001', 'NMLS-1234567'],
    activeLoans: 2847,
    totalFunded: 145000000,
    defaultRate: 2.3
  },
  {
    id: 'fc-2',
    name: 'MachineLend Pro',
    logo: '/placeholder.svg',
    description: 'Flexible financing solutions for small to medium construction businesses.',
    established: '2018',
    rating: 4.6,
    reviews: 892,
    verified: true,
    location: 'Houston, TX',
    website: 'https://machinelend.com',
    phone: '(555) 234-5678',
    email: 'support@machinelend.com',
    specializations: ['Small Equipment', 'Tools & Accessories', 'Commercial Vehicles'],
    minLoanAmount: 5000,
    maxLoanAmount: 500000,
    minCreditScore: 600,
    averageApprovalTime: '2-4 hours',
    licenseNumbers: ['MLF-2018-002', 'NMLS-2345678'],
    activeLoans: 1523,
    totalFunded: 78000000,
    defaultRate: 3.1
  },
  {
    id: 'fc-3',
    name: 'Industrial Finance Solutions',
    logo: '/placeholder.svg',
    description: 'Comprehensive financing and leasing programs for industrial equipment.',
    established: '2010',
    rating: 4.9,
    reviews: 2156,
    verified: true,
    location: 'Chicago, IL',
    website: 'https://indfinance.com',
    phone: '(555) 345-6789',
    email: 'loans@indfinance.com',
    specializations: ['Industrial Machinery', 'Manufacturing Equipment', 'Technology Solutions'],
    minLoanAmount: 25000,
    maxLoanAmount: 5000000,
    minCreditScore: 700,
    averageApprovalTime: '1-2 business days',
    licenseNumbers: ['IFS-2010-003', 'NMLS-3456789'],
    activeLoans: 4521,
    totalFunded: 325000000,
    defaultRate: 1.8
  }
];

export const mockFinancingProducts: FinancingProduct[] = [
  {
    id: 'fp-1',
    companyId: 'fc-1',
    companyName: 'EquipFund Capital',
    name: 'Heavy Equipment Loan',
    type: 'loan',
    description: 'Competitive rates for excavators, bulldozers, cranes, and other heavy construction equipment.',
    minAmount: 50000,
    maxAmount: 2000000,
    minTerm: 24,
    maxTerm: 84,
    interestRateMin: 6.99,
    interestRateMax: 12.99,
    equipmentTypes: ['Excavators', 'Bulldozers', 'Cranes', 'Loaders'],
    creditScoreRequired: 650,
    downPaymentRequired: 15,
    features: [
      'No prepayment penalty',
      'Seasonal payment options',
      'Equipment insurance included',
      'Online account management'
    ],
    eligibilityCriteria: [
      'Minimum 2 years in business',
      'Credit score 650+',
      'Annual revenue $500K+',
      'Equipment must be less than 10 years old'
    ],
    processingFee: 1.5,
    earlyPaymentPenalty: false,
    active: true,
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-08-20T00:00:00Z'
  },
  {
    id: 'fp-2',
    companyId: 'fc-1',
    companyName: 'EquipFund Capital',
    name: 'Equipment Lease Program',
    type: 'lease',
    description: 'Flexible leasing options with end-of-term purchase opportunities.',
    minAmount: 25000,
    maxAmount: 1000000,
    minTerm: 12,
    maxTerm: 60,
    interestRateMin: 5.99,
    interestRateMax: 10.99,
    equipmentTypes: ['All Equipment Types'],
    creditScoreRequired: 650,
    downPaymentRequired: 10,
    features: [
      '$1 buyout option',
      'Fair market value option',
      'Tax advantages',
      'Upgrade options available'
    ],
    eligibilityCriteria: [
      'Minimum 1 year in business',
      'Credit score 650+',
      'Positive cash flow'
    ],
    processingFee: 1.0,
    earlyPaymentPenalty: false,
    active: true,
    createdAt: '2024-02-01T00:00:00Z',
    updatedAt: '2024-08-15T00:00:00Z'
  },
  {
    id: 'fp-3',
    companyId: 'fc-2',
    companyName: 'MachineLend Pro',
    name: 'Quick Approval Loan',
    type: 'loan',
    description: 'Fast approval for smaller equipment purchases with competitive rates.',
    minAmount: 5000,
    maxAmount: 150000,
    minTerm: 12,
    maxTerm: 48,
    interestRateMin: 8.99,
    interestRateMax: 15.99,
    equipmentTypes: ['Small Equipment', 'Tools', 'Vehicles'],
    creditScoreRequired: 600,
    downPaymentRequired: 10,
    features: [
      '2-4 hour approval',
      'Minimal documentation',
      'Online application',
      'Same-day funding available'
    ],
    eligibilityCriteria: [
      'Minimum 6 months in business',
      'Credit score 600+',
      'Monthly revenue $25K+'
    ],
    processingFee: 2.0,
    earlyPaymentPenalty: false,
    active: true,
    createdAt: '2024-03-01T00:00:00Z',
    updatedAt: '2024-08-10T00:00:00Z'
  }
];

export const mockLoanApplications: LoanApplication[] = [
  {
    id: 'la-1',
    productId: 'fp-1',
    companyId: 'fc-1',
    applicantId: 'user-123',
    equipmentId: 'eq-456',
    status: 'under-review',
    requestedAmount: 150000,
    term: 60,
    downPayment: 22500,
    personalInfo: {
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@constructco.com',
      phone: '(555) 123-4567',
      dateOfBirth: '1978-05-15',
      ssn: '***-**-4567',
      address: {
        street: '123 Construction Ave',
        city: 'Atlanta',
        state: 'GA',
        zipCode: '30309'
      }
    },
    businessInfo: {
      businessName: 'Smith Construction LLC',
      businessType: 'LLC',
      yearsInBusiness: 8,
      annualRevenue: 2500000,
      employeeCount: 25,
      taxId: '**-*******',
      businessAddress: {
        street: '456 Business Blvd',
        city: 'Atlanta',
        state: 'GA',
        zipCode: '30309'
      }
    },
    financialInfo: {
      creditScore: 720,
      bankStatements: true,
      taxReturns: true,
      financialStatements: true,
      existingDebt: 485000,
      monthlyIncome: 180000
    },
    documents: [],
    notes: [],
    submittedAt: '2024-08-15T10:30:00Z'
  },
  {
    id: 'la-2',
    productId: 'fp-3',
    companyId: 'fc-2',
    applicantId: 'user-124',
    status: 'approved',
    requestedAmount: 35000,
    term: 36,
    interestRate: 9.5,
    downPayment: 3500,
    monthlyPayment: 1125.67,
    totalPayment: 40524.12,
    personalInfo: {
      firstName: 'Maria',
      lastName: 'Rodriguez',
      email: 'maria@rodriguezcontracting.com',
      phone: '(555) 987-6543',
      dateOfBirth: '1985-09-22',
      ssn: '***-**-9876',
      address: {
        street: '789 Contractor St',
        city: 'Houston',
        state: 'TX',
        zipCode: '77002'
      }
    },
    businessInfo: {
      businessName: 'Rodriguez Contracting',
      businessType: 'Corporation',
      yearsInBusiness: 5,
      annualRevenue: 850000,
      employeeCount: 12,
      taxId: '**-*******',
      businessAddress: {
        street: '321 Industry Dr',
        city: 'Houston',
        state: 'TX',
        zipCode: '77002'
      }
    },
    financialInfo: {
      creditScore: 685,
      bankStatements: true,
      taxReturns: true,
      financialStatements: false,
      existingDebt: 125000,
      monthlyIncome: 65000
    },
    documents: [],
    notes: [],
    submittedAt: '2024-08-10T14:20:00Z',
    reviewedAt: '2024-08-11T09:15:00Z',
    approvedAt: '2024-08-11T15:45:00Z'
  }
];

export const mockLoanAccounts: LoanAccount[] = [
  {
    id: 'acc-1',
    applicationId: 'la-2',
    accountNumber: 'EF-2024-001',
    companyId: 'fc-2',
    borrowerId: 'user-124',
    equipmentId: 'eq-789',
    principalAmount: 31500,
    interestRate: 9.5,
    term: 36,
    monthlyPayment: 1125.67,
    status: 'active',
    currentBalance: 28450.33,
    totalPaid: 5624.67,
    paymentsRemaining: 31,
    nextPaymentDate: '2024-09-15',
    nextPaymentAmount: 1125.67,
    payments: [
      {
        id: 'pay-1',
        accountId: 'acc-1',
        amount: 1125.67,
        principalAmount: 875.67,
        interestAmount: 250.00,
        lateFee: 0,
        paymentDate: '2024-08-15',
        dueDate: '2024-08-15',
        method: 'ach',
        status: 'processed',
        confirmationNumber: 'ACH123456789'
      }
    ],
    originationDate: '2024-08-15',
    firstPaymentDate: '2024-09-15',
    maturityDate: '2027-08-15',
    daysPastDue: 0,
    delinquentAmount: 0,
    lateFeesOwed: 0
  }
];

export const mockRecoveryCases: RecoveryCase[] = [
  {
    id: 'rc-1',
    accountId: 'acc-2',
    borrowerId: 'user-125',
    companyId: 'fc-1',
    status: 'in-progress',
    priority: 'high',
    originalBalance: 75000,
    currentBalance: 68500,
    totalPastDue: 4502.68,
    daysPastDue: 62,
    assignedAgent: 'agent-001',
    recoveryStrategy: 'Payment plan negotiation',
    settlementOffer: 65000,
    activities: [
      {
        id: 'ra-1',
        caseId: 'rc-1',
        type: 'call',
        description: 'Initial contact attempt - left voicemail',
        outcome: 'No response',
        agentId: 'agent-001',
        agentName: 'Sarah Johnson',
        completedDate: '2024-08-20T14:30:00Z',
        nextAction: 'Follow-up call',
        nextActionDate: '2024-08-22T10:00:00Z'
      }
    ],
    equipmentStatus: 'with-borrower',
    equipmentValue: 55000,
    createdAt: '2024-08-18T09:00:00Z',
    lastContactDate: '2024-08-20T14:30:00Z',
    nextActionDate: '2024-08-22T10:00:00Z'
  }
];

export const mockCreditProfiles: CreditProfile[] = [
  {
    id: 'cp-1',
    applicantId: 'user-123',
    creditScore: 720,
    creditBureau: 'experian',
    riskGrade: 'B',
    annualIncome: 180000,
    debtToIncomeRatio: 32.5,
    paymentHistory: 96,
    creditUtilization: 28,
    lengthOfCreditHistory: 15,
    newCreditInquiries: 2,
    publicRecords: 0,
    reportDate: '2024-08-15T00:00:00Z',
    factors: [
      {
        type: 'positive',
        description: 'Excellent payment history',
        impact: 'high'
      },
      {
        type: 'negative',
        description: 'High credit utilization',
        impact: 'medium'
      }
    ]
  }
];

export const mockFinancingStats: FinancingStats = {
  totalApplications: 1247,
  approvalRate: 78.5,
  averageAmount: 125000,
  totalFunded: 145000000,
  activeLoans: 2847,
  recoveryRate: 94.2,
  monthlyRevenue: 1250000,
  portfolioValue: 285000000
};