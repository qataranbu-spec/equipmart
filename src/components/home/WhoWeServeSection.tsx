import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Building, Truck, Calendar, Wrench, Settings, HardHat, CreditCard } from 'lucide-react';

const WhoWeServeSection = () => {
  const customers = [
    {
      icon: Building,
      title: "Construction Contractors",
      description: "Medium-large construction firms, project managers",
      needs: [
        "Need to buy/rent equipment quickly",
        "Deal with multiple fragmented vendors", 
        "Poor inventory visibility & rental tracking"
      ],
      valueProps: [
        "Unified platform to search, rent, or buy equipment instantly",
        "Transparent pricing & verified listings",
        "Real-time availability & easy booking",
        "Arabic dashboard for field teams"
      ]
    },
    {
      icon: Truck,
      title: "Equipment Vendors & Dealers", 
      description: "New & used equipment sellers, OEM reps",
      needs: [
        "Low online sales",
        "Overreliance on brokers",
        "Limited digital inventory tools"
      ],
      valueProps: [
        "Free/paid storefronts with ERP-backed inventory",
        "Vendor dashboard with leads, analytics, and CRM",
        "Access to buyers across GCC",
        "Auction tools for idle/surplus units"
      ]
    },
    {
      icon: Calendar,
      title: "Rental & Leasing Companies",
      description: "Equipment rental fleets, short-term leasing firms", 
      needs: [
        "Equipment idle time",
        "Manual booking & invoicing",
        "Low digital visibility"
      ],
      valueProps: [
        "Real-time rental booking system",
        "ERP-integrated availability & invoicing",
        "Custom rate structures",
        "Onboarding support for fleet upload"
      ]
    },
    {
      icon: Wrench,
      title: "Service Providers",
      description: "Mechanics, inspection firms, on-site repair technicians",
      needs: [
        "Inconsistent demand",
        "No single platform for lead generation", 
        "Poor visibility to contractors"
      ],
      valueProps: [
        "Service marketplace with verified profiles",
        "Direct job bookings from vendors or contractors",
        "Local SEO, calendar, chat & task tools"
      ]
    },
    {
      icon: Settings,
      title: "Spare Parts Sellers",
      description: "Dealers, importers, aftermarket part suppliers",
      needs: [
        "Fragmented sourcing",
        "Inventory mismatch",
        "Lack of searchable online listings"
      ],
      valueProps: [
        "Searchable marketplace for OEM & aftermarket parts",
        "Category & brand tagging",
        "Easy inquiries, RFQs, and logistics add-ons"
      ]
    },
    {
      icon: HardHat,
      title: "Small Contractors & Subcontractors",
      description: "Individual builders, SME firms",
      needs: [
        "Limited equipment access",
        "Cost-sensitive rentals",
        "Informal processes"
      ],
      valueProps: [
        "Affordable rental options with short terms",
        "Mobile-first interface in Arabic",
        "Access to financing/leasing (future roadmap)"
      ]
    },
    {
      icon: CreditCard,
      title: "Equipment Financiers",
      description: "Banks, NBFCs, leasing companies, equipment financing firms",
      needs: [
        "High default rates on equipment loans",
        "Poor asset tracking & recovery processes",
        "Limited visibility into equipment usage"
      ],
      valueProps: [
        "Integrated financing marketplace with verified borrowers",
        "Real-time equipment tracking & usage monitoring",
        "Automated recovery tools for repossessed assets",
        "Credit scoring & risk assessment integration"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Who We Serve</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform is designed to empower all key players in the construction equipment ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customers.map((customer, index) => {
            const IconComponent = customer.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{customer.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {customer.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-sm mb-3 text-destructive">Needs & Pain Points:</h4>
                  <ul className="space-y-1">
                    {customer.needs.map((need, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        {need}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-3 text-primary">Our Value Proposition:</h4>
                  <ul className="space-y-1">
                    {customer.valueProps.map((prop, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {prop}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;