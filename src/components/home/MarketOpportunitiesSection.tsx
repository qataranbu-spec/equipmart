import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Building, Truck, Wrench, Package, Zap, Shield, MapPin, Users, BarChart3, Leaf, RotateCcw, Hammer, Award, Fuel, CreditCard, Cpu, TreePine, HardHat } from 'lucide-react';

const MarketOpportunitiesSection = () => {
  const primaryOpportunities = [
    {
      icon: Building,
      title: "OEM Equipment Sales",
      description: "High demand for earthmoving, lifting, road machinery (CAT, Komatsu, JCB)"
    },
    {
      icon: BarChart3,
      title: "Authorized Dealerships", 
      description: "Regional dealership franchises – spare parts, AMC, rentals"
    },
    {
      icon: Truck,
      title: "Heavy Equipment Rental",
      description: "Fast-growing due to cost-sensitive contractors; high demand for cranes, boom lifts"
    },
    {
      icon: MapPin,
      title: "Import & Distribution",
      description: "Equipment from China, Europe, India is widely imported and redistributed"
    }
  ];

  const secondaryOpportunities = [
    {
      icon: RotateCcw,
      title: "Used Equipment Trade",
      description: "Strong demand for good-quality second-hand equipment across MENA"
    },
    {
      icon: Hammer,
      title: "Auction Platforms",
      description: "Online & physical auctions growing – opportunity for platforms like IronPlanet"
    },
    {
      icon: Wrench,
      title: "Refurbishment & Rebuild Centers",
      description: "Localized remanufacturing reduces import cost; opportunity for OEM-partnered workshops"
    },
    {
      icon: Award,
      title: "Equipment Certifications",
      description: "Growing need for quality verification, especially for resale"
    }
  ];

  const alliedOpportunities = [
    {
      icon: Fuel,
      title: "Lubricants & DEF Supply",
      description: "Demand for OEM-certified fluids, especially for Tier-4 compliant machines"
    },
    {
      icon: Package,
      title: "Spare Parts Supply Chains",
      description: "Opportunity for B2B e-commerce and regional warehousing"
    },
    {
      icon: Truck,
      title: "Tyres, Tracks, Attachments",
      description: "Local demand for aftermarket brands and heavy-duty attachments"
    },
    {
      icon: Wrench,
      title: "Hydraulic System Specialists",
      description: "MRO services for pumps, hoses, actuators"
    },
    {
      icon: Zap,
      title: "Battery & Electric Components",
      description: "As electric equipment increases (esp. indoor), this is a growing sub-market"
    }
  ];

  const servicesOpportunities = [
    {
      icon: Shield,
      title: "Preventive & Predictive Maintenance",
      description: "Highly demanded due to harsh site conditions (dust, heat)"
    },
    {
      icon: CreditCard,
      title: "Equipment Financing & Leasing",
      description: "Demand for Islamic finance-compliant equipment leasing (Ijara)"
    },
    {
      icon: Shield,
      title: "Insurance & Risk Services",
      description: "Equipment & operator liability insurance, bundled services"
    },
    {
      icon: Fuel,
      title: "On-Site Fuel Delivery",
      description: "Growing fast (e.g., FuelBuddy, Repos exploring UAE/Saudi entry)"
    },
    {
      icon: BarChart3,
      title: "Fleet Management & Telematics",
      description: "GPS, usage analytics, theft prevention; opportunity for SaaS platforms"
    },
    {
      icon: Users,
      title: "Operator Training & Certification",
      description: "Demand for certified operators for cranes, MEWPs, especially in UAE/KSA"
    },
    {
      icon: Truck,
      title: "Logistics & Heavy Haulage",
      description: "Oversized load handling services for remote or cross-border projects"
    }
  ];

  const digitalOpportunities = [
    {
      icon: MapPin,
      title: "Rental Marketplaces (B2B apps)",
      description: "Underdeveloped digital rental ecosystems – room for regional players"
    },
    {
      icon: Zap,
      title: "IoT & AI for Equipment Monitoring",
      description: "Startups can offer white-labeled solutions for local fleets"
    },
    {
      icon: Building,
      title: "BIM-Equipment Integration",
      description: "Equipment usage optimization based on project models"
    },
    {
      icon: TreePine,
      title: "Green Construction Solutions",
      description: "Demand for electric, hybrid, and low-emission machines + retrofits"
    },
    {
      icon: CreditCard,
      title: "Construction Fintech",
      description: "Platforms offering financing + asset lifecycle management"
    }
  ];

  const entryPoints = [
    {
      icon: RotateCcw,
      title: "Cross-border used equipment trading",
      description: "High import/export activity with Africa & South Asia"
    },
    {
      icon: MapPin,
      title: "On-site diesel & lube delivery", 
      description: "Reduces site delays, growing in remote desert projects"
    },
    {
      icon: Wrench,
      title: "Maintenance-as-a-Service",
      description: "Outsourced equipment care in major urban projects"
    },
    {
      icon: Building,
      title: "Local remanufacturing hubs",
      description: "Saves on cost and import duties; OEM partnerships likely"
    },
    {
      icon: HardHat,
      title: "Equipment Operator Placement Services",
      description: "High need for certified manpower, safety compliance"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Market Opportunities in MENA</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the diverse market segments and high-potential entry points within the region.
          </p>
        </div>

        {/* High-Potential Entry Points */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="text-lg px-4 py-2 mb-4">Niche</Badge>
            <h3 className="text-3xl font-bold mb-4">High-Potential Entry Points for Entrepreneurs & SMEs</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entryPoints.map((entry, index) => {
              const IconComponent = entry.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{entry.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {entry.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Primary Market Opportunities */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Primary Market Opportunities</h3>
            <p className="text-lg text-muted-foreground">
              These are core businesses directly involved in selling or deploying construction equipment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {primaryOpportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-3">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {opportunity.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Secondary Market Opportunities */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Secondary Market Opportunities</h3>
            <p className="text-lg text-muted-foreground">
              These are businesses that support or trade in used, rebuilt, or surplus machinery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryOpportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {opportunity.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Allied Market Opportunities */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Allied Market Opportunities</h3>
            <p className="text-lg text-muted-foreground">
              These involve industries that provide products or services alongside construction machinery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alliedOpportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {opportunity.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Services & Support Market Opportunities */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Services & Support Market Opportunities</h3>
            <p className="text-lg text-muted-foreground">
              Encompasses lifecycle and on-site support services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesOpportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-3">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {opportunity.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Digital & Emerging Tech Opportunities */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Badge variant="outline" className="text-lg px-4 py-2 mb-4">Digital Area</Badge>
            <h3 className="text-3xl font-bold mb-4">Digital & Emerging Tech Opportunities</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalOpportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-3">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {opportunity.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunitiesSection;