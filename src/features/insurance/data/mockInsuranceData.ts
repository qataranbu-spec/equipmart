import { InsuranceProvider, InsurancePolicy, InsuranceClaim, InsuranceQuote, InsuranceAgent, InsuranceListing } from '../types';

export const mockInsuranceProviders: InsuranceProvider[] = [
  {
    id: 'provider-1',
    name: 'Heavy Equipment Shield',
    licenseNumber: 'INS-2024-001',
    rating: 4.8,
    founded: '1985',
    headquarters: 'Chicago, IL',
    specialties: ['Construction Equipment', 'Heavy Machinery', 'Fleet Coverage'],
    coverageTypes: ['Comprehensive', 'Liability', 'Equipment Breakdown', 'Theft'],
    financialStrength: 'A+',
    contactInfo: {
      phone: '1-800-SHIELD-1',
      email: 'info@heavyshield.com',
      website: 'www.heavyshield.com'
    },
    logo: '/insurance-logos/heavy-shield.png',
    description: 'Leading provider of construction equipment insurance with over 35 years of experience.',
    isActive: true
  },
  {
    id: 'provider-2',
    name: 'MachineGuard Insurance',
    licenseNumber: 'INS-2024-002',
    rating: 4.6,
    founded: '1992',
    headquarters: 'Houston, TX',
    specialties: ['Mobile Equipment', 'Contractor Insurance', 'Project Coverage'],
    coverageTypes: ['Mobile Equipment', 'General Liability', 'Environmental', 'Cyber Security'],
    financialStrength: 'A',
    contactInfo: {
      phone: '1-888-MACHINE-1',
      email: 'contact@machineguard.com',
      website: 'www.machineguard.com'
    },
    logo: '/insurance-logos/machine-guard.png',
    description: 'Specialized in mobile equipment and contractor insurance solutions.',
    isActive: true
  },
  {
    id: 'provider-3',
    name: 'Equipment Protector Plus',
    licenseNumber: 'INS-2024-003',
    rating: 4.7,
    founded: '1978',
    headquarters: 'Atlanta, GA',
    specialties: ['Equipment Financing Insurance', 'Lender Protection', 'Collateral Coverage'],
    coverageTypes: ['Collateral Protection', 'Gap Coverage', 'Credit Life', 'Disability'],
    financialStrength: 'A+',
    contactInfo: {
      phone: '1-800-PROTECT-1',
      email: 'info@equipprotector.com',
      website: 'www.equipprotector.com'
    },
    logo: '/insurance-logos/protector-plus.png',
    description: 'Premier provider of equipment financing and lender protection insurance.',
    isActive: true
  }
];

export const mockInsurancePolicies: InsurancePolicy[] = [
  {
    id: 'policy-1',
    providerId: 'provider-1',
    policyNumber: 'HES-2024-001234',
    equipmentId: 'eq-001',
    ownerId: 'user-1',
    coverageType: 'Comprehensive',
    premium: 2400,
    deductible: 1000,
    coverageLimit: 150000,
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    status: 'active',
    paymentFrequency: 'monthly',
    coverageDetails: {
      theft: true,
      vandalism: true,
      naturalDisaster: true,
      equipment_breakdown: true,
      liability: true,
      environmental: false
    },
    documents: ['policy-cert-1.pdf', 'coverage-details-1.pdf']
  },
  {
    id: 'policy-2',
    providerId: 'provider-2',
    policyNumber: 'MG-2024-005678',
    equipmentId: 'eq-002',
    ownerId: 'user-2',
    coverageType: 'Mobile Equipment',
    premium: 1800,
    deductible: 500,
    coverageLimit: 85000,
    startDate: '2024-03-15',
    endDate: '2025-03-14',
    status: 'active',
    paymentFrequency: 'quarterly',
    coverageDetails: {
      theft: true,
      vandalism: true,
      naturalDisaster: false,
      equipment_breakdown: true,
      liability: true,
      environmental: true
    },
    documents: ['policy-cert-2.pdf', 'mobile-coverage-2.pdf']
  }
];

export const mockInsuranceClaims: InsuranceClaim[] = [
  {
    id: 'claim-1',
    policyId: 'policy-1',
    claimNumber: 'CLM-2024-001',
    incidentDate: '2024-08-15',
    reportedDate: '2024-08-16',
    claimType: 'Equipment Damage',
    description: 'Hydraulic system failure during operation causing internal damage.',
    estimatedLoss: 12000,
    status: 'investigating',
    assignedAdjuster: 'John Smith',
    documents: {
      photos: ['damage-1.jpg', 'damage-2.jpg', 'damage-3.jpg'],
      reports: ['incident-report.pdf'],
      receipts: [],
      estimates: ['repair-estimate-1.pdf']
    },
    timeline: [
      { date: '2024-08-16', event: 'Claim reported' },
      { date: '2024-08-17', event: 'Adjuster assigned' },
      { date: '2024-08-20', event: 'Initial inspection completed' },
      { date: '2024-08-22', event: 'Under investigation' }
    ]
  },
  {
    id: 'claim-2',
    policyId: 'policy-2',
    claimNumber: 'CLM-2024-002',
    incidentDate: '2024-07-08',
    reportedDate: '2024-07-08',
    claimType: 'Theft',
    description: 'Equipment stolen from job site overnight.',
    estimatedLoss: 45000,
    status: 'settled',
    assignedAdjuster: 'Sarah Johnson',
    documents: {
      photos: ['theft-site-1.jpg', 'theft-site-2.jpg'],
      reports: ['police-report.pdf', 'security-report.pdf'],
      receipts: ['purchase-receipt.pdf'],
      estimates: []
    },
    timeline: [
      { date: '2024-07-08', event: 'Claim reported' },
      { date: '2024-07-09', event: 'Police report filed' },
      { date: '2024-07-12', event: 'Investigation started' },
      { date: '2024-07-25', event: 'Claim approved' },
      { date: '2024-08-01', event: 'Settlement paid' }
    ],
    settlement: {
      amount: 42000,
      date: '2024-08-01',
      method: 'Bank Transfer'
    }
  }
];

export const mockInsuranceQuotes: InsuranceQuote[] = [
  {
    id: 'quote-1',
    providerId: 'provider-1',
    equipmentId: 'eq-003',
    requesterId: 'user-3',
    coverageType: 'Comprehensive',
    requestedCoverage: {
      coverageLimit: 200000,
      deductible: 2000,
      coverageOptions: ['theft', 'vandalism', 'equipment_breakdown']
    },
    quote: {
      premium: 3200,
      deductible: 2000,
      coverageLimit: 200000,
      paymentOptions: ['monthly', 'quarterly', 'annual'],
      validUntil: '2024-10-15'
    },
    status: 'quoted',
    createdAt: '2024-09-15',
    notes: 'Premium includes 10% multi-equipment discount.'
  },
  {
    id: 'quote-2',
    providerId: 'provider-3',
    equipmentId: 'eq-004',
    requesterId: 'user-4',
    coverageType: 'Gap Coverage',
    requestedCoverage: {
      coverageLimit: 75000,
      deductible: 0,
      coverageOptions: ['gap_coverage', 'credit_protection']
    },
    quote: {
      premium: 950,
      deductible: 0,
      coverageLimit: 75000,
      paymentOptions: ['monthly', 'annual'],
      validUntil: '2024-10-01'
    },
    status: 'pending',
    createdAt: '2024-09-20'
  }
];

export const mockInsuranceAgents: InsuranceAgent[] = [
  {
    id: 'agent-1',
    name: 'Michael Rodriguez',
    providerId: 'provider-1',
    licenseNumber: 'AGT-IL-2024-001',
    specializations: ['Construction Equipment', 'Commercial Lines', 'Fleet Insurance'],
    contactInfo: {
      phone: '312-555-0123',
      email: 'mrodriguez@heavyshield.com',
      office: 'Chicago Downtown Office'
    },
    performance: {
      policiesSold: 145,
      clientSatisfaction: 4.9,
      renewalRate: 92
    },
    territory: ['Illinois', 'Indiana', 'Wisconsin'],
    isActive: true
  },
  {
    id: 'agent-2',
    name: 'Jennifer Walsh',
    providerId: 'provider-2',
    licenseNumber: 'AGT-TX-2024-002',
    specializations: ['Mobile Equipment', 'Contractor Insurance', 'Risk Management'],
    contactInfo: {
      phone: '713-555-0456',
      email: 'jwalsh@machineguard.com',
      office: 'Houston Energy Corridor'
    },
    performance: {
      policiesSold: 128,
      clientSatisfaction: 4.7,
      renewalRate: 89
    },
    territory: ['Texas', 'Louisiana', 'Oklahoma'],
    isActive: true
  }
];

export const mockInsuranceListings: InsuranceListing[] = [
  {
    id: 'listing-1',
    providerId: 'provider-1',
    title: 'Complete Construction Equipment Protection',
    description: 'Comprehensive coverage for all types of construction equipment including excavators, bulldozers, cranes, and more.',
    coverageType: 'Comprehensive',
    equipmentCategories: ['Excavators', 'Bulldozers', 'Cranes', 'Loaders', 'Trucks'],
    features: ['24/7 Claims Support', 'Nationwide Coverage', 'Equipment Replacement', 'Theft Protection'],
    startingPremium: 1200,
    minimumCoverage: 50000,
    maximumCoverage: 500000,
    deductibleOptions: [500, 1000, 2500, 5000],
    paymentOptions: ['Monthly', 'Quarterly', 'Annual'],
    highlights: ['Best Rate Guarantee', '15% Multi-Equipment Discount', 'No Hidden Fees'],
    terms: 'Standard 12-month policy terms with flexible renewal options.',
    isActive: true,
    createdAt: '2024-01-15'
  },
  {
    id: 'listing-2',
    providerId: 'provider-2',
    title: 'Mobile Equipment Contractor Shield',
    description: 'Specialized insurance for contractors with mobile equipment operations and project-based work.',
    coverageType: 'Mobile Equipment',
    equipmentCategories: ['Mobile Cranes', 'Concrete Mixers', 'Utility Trucks', 'Specialized Equipment'],
    features: ['Project-Based Coverage', 'Transit Protection', 'Operator Liability', 'Equipment Breakdown'],
    startingPremium: 800,
    minimumCoverage: 25000,
    maximumCoverage: 300000,
    deductibleOptions: [250, 500, 1000, 2000],
    paymentOptions: ['Monthly', 'Project-Based', 'Annual'],
    highlights: ['Instant Coverage', 'Flexible Terms', 'Contractor Friendly'],
    terms: 'Flexible terms available for short-term and long-term projects.',
    isActive: true,
    createdAt: '2024-02-01'
  },
  {
    id: 'listing-3',
    providerId: 'provider-3',
    title: 'Equipment Financing Protection Plus',
    description: 'Complete protection package for financed equipment including gap coverage and credit protection.',
    coverageType: 'Financing Protection',
    equipmentCategories: ['All Financed Equipment'],
    features: ['Gap Coverage', 'Credit Life Insurance', 'Disability Coverage', 'Collateral Protection'],
    startingPremium: 450,
    minimumCoverage: 15000,
    maximumCoverage: 200000,
    deductibleOptions: [0, 250, 500],
    paymentOptions: ['Monthly', 'Included in Loan Payment'],
    highlights: ['Lender Approved', 'No Medical Exam', 'Instant Approval'],
    terms: 'Coverage term matches loan duration with automatic renewal options.',
    isActive: true,
    createdAt: '2024-02-15'
  }
];