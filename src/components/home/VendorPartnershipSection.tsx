import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { Store, Users, Wrench, Package, TrendingUp, Target, BarChart3, Settings } from 'lucide-react';

const VendorPartnershipSection = () => {
  const vendorTypes = [
    {
      icon: "🏪",
      title: "Equipment Vendors & Dealers",
      description: "New & used equipment sellers, OEM representatives looking to expand their digital reach.",
      benefits: [
        "Free/paid storefronts with ERP-backed inventory integration",
        "Vendor dashboard with leads, analytics, and CRM tools",
        "Access to a broad base of buyers across the GCC region",
        "Auction tools for managing idle or surplus units"
      ]
    },
    {
      icon: "📅",
      title: "Rental & Leasing Companies",
      description: "Companies with equipment rental fleets and short-term leasing firms aiming to optimize utilization.",
      benefits: [
        "Real-time rental booking system to minimize idle time",
        "ERP-integrated availability and automated invoicing",
        "Ability to set custom rate structures for different clients",
        "Onboarding support for seamless fleet upload and management"
      ]
    },
    {
      icon: "🔧",
      title: "Service Providers",
      description: "Mechanics, inspection firms, and on-site repair technicians seeking consistent demand.",
      benefits: [
        "Dedicated service marketplace with verified profiles",
        "Direct job bookings from contractors and equipment owners",
        "Enhanced local SEO, integrated calendar, chat, and task management tools"
      ]
    },
    {
      icon: "⚙️",
      title: "Spare Parts Sellers",
      description: "Dealers, importers, and aftermarket part suppliers looking for a searchable online presence.",
      benefits: [
        "Searchable marketplace for both OEM and aftermarket parts",
        "Advanced category and brand tagging for easy discovery",
        "Streamlined inquiry, RFQ (Request for Quote), and logistics add-on processes"
      ]
    }
  ];

  const opportunities = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Expanded Market Reach",
      description: "Connect with a vast network of construction contractors and buyers across the entire MENA region, breaking geographical barriers."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Increased Sales & Rentals",
      description: "Leverage our unified platform to showcase your inventory to a targeted audience, driving higher sales volumes and equipment utilization."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data-Driven Insights",
      description: "Access comprehensive analytics on leads, customer behavior, and market trends to make informed business decisions."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Optimized Operations",
      description: "Reduce reliance on traditional brokers, streamline inventory management, and automate booking/invoicing processes."
    }
  ];

  const platformFeatures = [
    {
      icon: <Store className="h-6 w-6" />,
      title: "Create Your Storefront",
      description: "Set up your personalized digital storefront to showcase your equipment, parts, or services with detailed listings and high-quality images."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Manage Inventory & Bookings",
      description: "Integrate your existing ERP or use our intuitive dashboard for real-time inventory updates, availability, and seamless booking management."
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Engage with Buyers",
      description: "Utilize our built-in communication tools, CRM features, and lead management system to connect directly with interested customers."
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Utilize Advanced Tools",
      description: "Take advantage of auction tools for surplus assets, custom rate structures for rentals, and analytics to track your performance."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Partner with EQP MART: Grow Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Unlock new opportunities and streamline your operations by becoming a vendor on the 
            leading construction equipment marketplace in the MENA region with EQP MART.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/become-supplier">
              <Button size="lg" className="w-full sm:w-auto">
                Join as a Vendor
              </Button>
            </Link>
            <Link to="/partnership">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Who Can Be a Vendor */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Who Can Be a Vendor?</h3>
            <p className="text-lg text-muted-foreground">
              Our marketplace is designed to support a diverse range of businesses within the construction equipment ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vendorTypes.map((vendor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-3xl">{vendor.icon}</div>
                    <div>
                      <CardTitle className="text-xl">{vendor.title}</CardTitle>
                      <CardDescription>{vendor.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3 text-primary">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {vendor.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Opportunities for Vendors */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Opportunities for Vendors</h3>
            <p className="text-lg text-muted-foreground">
              Discover the significant advantages of listing your offerings on EQP MART.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4 text-primary">
                    {opportunity.icon}
                  </div>
                  <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {opportunity.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How to Reap the Benefits */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">How to Reap the Benefits</h3>
            <p className="text-lg text-muted-foreground">
              Our platform provides intuitive tools and dedicated support to help you maximize your presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-3 text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Join EQP MART today and start growing your construction equipment business in the MENA region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/become-supplier">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Register as a Vendor
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Contact Our Sales Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorPartnershipSection;