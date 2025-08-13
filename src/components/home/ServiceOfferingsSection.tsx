import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

const ServiceOfferingsSection = () => {
  const coreServices = [
    {
      icon: "⛽",
      title: "Fuel Door Delivery",
      description: "Diesel at site, usage tracking",
      benefits: "Contractors, fleet operators",
      driver: "Time savings, fuel theft control"
    },
    {
      icon: "🛢️", 
      title: "Lubricants & Consumables Delivery",
      description: "DEF, oils, filters delivered to site",
      benefits: "Maintenance teams",
      driver: "Scheduled maintenance, less downtime"
    },
    {
      icon: "🔧",
      title: "Mobile Repair Services", 
      description: "On-site diagnostics and minor repairs",
      benefits: "Site managers, rental users",
      driver: "Quick service without hauling back"
    },
    {
      icon: "📦",
      title: "Spare Parts Express Delivery",
      description: "Same-day critical parts logistics", 
      benefits: "Workshop managers",
      driver: "Downtime reduction, critical during peak work periods"
    },
    {
      icon: "👨‍💼",
      title: "Operator Leasing",
      description: "Trained operator staffing",
      benefits: "Small contractors, remote sites", 
      driver: "Skill shortages, regulatory compliance"
    },
    {
      icon: "📋",
      title: "Subscription Support Bundles",
      description: "All-in-one: service, fuel, insurance, analytics",
      benefits: "Large projects, fleet managers",
      driver: "Efficiency, simplified billing, uptime optimization"
    }
  ];

  const additionalServices = [
    {
      icon: "💰",
      title: "Equipment Financing",
      description: "Loans, leases, EaaS",
      benefits: "Buyers, renters, dealers",
      driver: "CAPEX avoidance, flexible terms"
    },
    {
      icon: "🛡️",
      title: "Equipment Insurance", 
      description: "Damage, theft, liability, downtime coverage",
      benefits: "Owners, renters, project owners",
      driver: "Risk mitigation, mandated by finance/rentals"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Service Market Core Offerings</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond equipment, we provide essential services to keep your projects running smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {coreServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-3xl">{service.icon}</div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Who Benefits:</h4>
                  <p className="text-sm text-muted-foreground">{service.benefits}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Growth Driver:</h4>
                  <p className="text-sm text-muted-foreground">{service.driver}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {additionalServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-3xl">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Who Benefits:</h4>
                  <p className="text-sm text-muted-foreground">{service.benefits}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Growth Driver:</h4>
                  <p className="text-sm text-muted-foreground">{service.driver}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferingsSection;