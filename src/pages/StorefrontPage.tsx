import React from 'react';
import { useParams } from 'react-router-dom';
import { 
  SupplierStorefront, 
  ServiceProviderStorefront, 
  FinancierStorefront, 
  InsuranceProviderStorefront, 
  ContractorStorefront, 
  ExpertStorefront 
} from '@/features/storefronts';
import { mockSupplierData, mockServiceProviderData } from '@/features/storefronts/data/mockData';
import NotFound from './NotFound';

const StorefrontPage: React.FC = () => {
  const { type, id } = useParams<{ type: string; id: string }>();

  if (!type || !id) {
    return <NotFound />;
  }

  const renderStorefront = () => {
    // In a real app, you'd fetch data based on type and id
    // For now, using simplified mock data with the ID from URL
    
    switch (type) {
      case 'supplier':
        return <SupplierStorefront supplier={{
          ...mockSupplierData,
          id: id,
          establishedYear: mockSupplierData.establishedYear || 2000
        }} />;
      case 'service-provider':
        return <ServiceProviderStorefront provider={{
          ...mockServiceProviderData,
          id: id
        }} />;
      case 'financier':
        return <FinancierStorefront financier={{
          id,
          name: "Sample Financier",
          description: "Sample financier description",
          location: "Sample Location",
          rating: 4.5,
          verified: true,
          contact: { phone: "555-0123", email: "contact@example.com" },
          products: [],
          specialties: ["Equipment Financing", "Working Capital"],
          licenses: ["Licensed Financial Institution"],
          businessHours: "9AM-5PM",
          establishedYear: 2000,
          totalFunded: "$500M+",
          clientsServed: 1000,
          approvalRate: "85%",
          avgProcessingTime: "2 days"
        }} />;
      case 'insurance-provider':
        return <InsuranceProviderStorefront provider={{
          id,
          name: "Sample Insurance Provider", 
          description: "Sample insurance provider description",
          location: "Sample Location",
          rating: 4.5,
          verified: true,
          contact: { phone: "555-0123", email: "contact@example.com" },
          policies: [],
          specialties: ["Equipment Insurance", "Liability Coverage"],
          licenses: ["State Insurance License"],
          businessHours: "8AM-6PM",
          establishedYear: 1995,
          clientsServed: 5000,
          claimsProcessed: "95%",
          avgClaimTime: "7 days",
          financialRating: "A+"
        }} />;
      case 'contractor':
        return <ContractorStorefront contractor={{
          id,
          name: "Sample Contractor",
          description: "Sample contractor description", 
          location: "Sample Location",
          rating: 4.5,
          reviewCount: 50,
          verified: true,
          contact: { phone: "555-0123", email: "contact@example.com" },
          services: [],
          specialties: ["Construction", "Maintenance"],
          certifications: ["Licensed", "Insured"],
          licenses: ["General Contractor License"],
          businessHours: "8AM-6PM",
          establishedYear: 2005,
          teamSize: 10,
          projectsCompleted: 100,
          serviceRadius: "50 miles",
          portfolio: [],
          equipment: []
        }} />;
      case 'expert':
        return <ExpertStorefront expert={{
          id,
          name: "Sample Expert",
          title: "Equipment Specialist",
          description: "Sample expert description",
          location: "Sample Location", 
          rating: 4.5,
          reviewCount: 25,
          verified: true,
          contact: { phone: "555-0123", email: "contact@example.com" },
          expertise: ["Equipment consulting"],
          services: [],
          experience: [],
          education: [],
          certifications: ["Certified Professional"],
          languages: ["English"],
          availability: "Full-time",
          responseTime: "1 hour",
          yearsExperience: 10,
          consultationsCompleted: 200,
          clientSatisfaction: "95%",
          hourlyRate: "$100-200"
        }} />;
      default:
        return <NotFound />;
    }
  };

  return renderStorefront();
};

export default StorefrontPage;