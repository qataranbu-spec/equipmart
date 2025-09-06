// Mock data for storefront demonstrations
import { SupplierStorefrontData, ServiceProviderStorefrontData } from '../types';

export const mockSupplierData: SupplierStorefrontData = {
  id: "supplier-1",
  name: "Heavy Equipment Solutions",
  description: "Leading supplier of construction and heavy equipment parts with over 20 years of experience.",
  location: "Atlanta, GA",
  rating: 4.8,
  verified: true,
  contact: {
    phone: "(555) 123-4567",
    email: "sales@heavyequipsolutions.com",
    website: "https://heavyequipsolutions.com"
  },
  establishedYear: 2003,
  categories: ["Excavator Parts", "Bulldozer Components", "Hydraulic Systems", "Engine Parts"],
  products: [
    {
      id: "prod-1",
      name: "Hydraulic Cylinder - CAT 320D",
      category: "Excavator Parts",
      price: 2500,
      image: "/placeholder.svg",
      inStock: true,
      description: "OEM quality hydraulic cylinder for Caterpillar 320D excavator"
    },
    {
      id: "prod-2", 
      name: "Track Chain Assembly",
      category: "Excavator Parts",
      price: 3200,
      image: "/placeholder.svg",
      inStock: true,
      description: "Heavy-duty track chain assembly for various excavator models"
    },
    {
      id: "prod-3",
      name: "Engine Oil Filter Kit",
      category: "Engine Parts",
      price: 150,
      image: "/placeholder.svg",
      inStock: false,
      description: "Complete engine oil filter kit for diesel engines"
    }
  ],
  certifications: ["ISO 9001:2015", "OEM Certified", "Quality Assured Parts"],
  businessHours: "Monday-Friday: 8AM-6PM, Saturday: 9AM-4PM"
};

export const mockServiceProviderData: ServiceProviderStorefrontData = {
  id: "provider-1",
  name: "Elite Construction Services",
  description: "Full-service construction and equipment maintenance company serving the Southeast region.",
  location: "Charlotte, NC",
  rating: 4.9,
  reviewCount: 247,
  verified: true,
  contact: {
    phone: "(555) 987-6543",
    email: "info@eliteconstruction.com",
    website: "https://eliteconstruction.com"
  },
  establishedYear: 2010,
  services: [
    {
      id: "service-1",
      name: "Equipment Maintenance",
      category: "Maintenance",
      description: "Comprehensive maintenance services for all heavy equipment types",
      price: "$150-300/hour",
      duration: "2-8 hours",
      available: true
    },
    {
      id: "service-2",
      name: "Site Preparation",
      category: "Construction",
      description: "Complete site preparation and excavation services",
      price: "$2,500-15,000",
      duration: "1-5 days",
      available: true
    }
  ],
  specialties: ["Heavy Equipment Repair", "Site Development", "Emergency Services"],
  certifications: ["Licensed Contractor", "OSHA Certified", "Insured & Bonded"],
  businessHours: "24/7 Emergency Service Available",
  responseTime: "2 hours",
  teamSize: 25,
  projectsCompleted: 500,
  portfolio: [
    {
      id: "project-1",
      title: "Shopping Center Development",
      description: "Complete site preparation for 50,000 sq ft retail center",
      image: "/placeholder.svg",
      category: "Commercial",
      completedDate: "March 2024"
    }
  ]
};