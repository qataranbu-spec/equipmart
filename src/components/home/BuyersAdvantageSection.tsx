import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { Search, DollarSign, CheckCircle, Calendar, MessageCircle, FileText, Truck } from 'lucide-react';

const BuyersAdvantageSection = () => {
  const buyerTypes = [
    {
      icon: "🏗️",
      title: "Construction Contractors",
      description: "Medium-large construction firms and project managers.",
      benefits: [
        "Instantly search, rent, or buy equipment",
        "Access transparent pricing and verified listings", 
        "Benefit from real-time availability and easy booking",
        "Utilize an Arabic dashboard for field teams"
      ]
    },
    {
      icon: "🏢",
      title: "Small Contractors & Subcontractors",
      description: "Individual builders and SME firms with cost-sensitive needs.",
      benefits: [
        "Find affordable rental options with short terms",
        "Enjoy a mobile-first interface available in Arabic",
        "Access future financing/leasing options"
      ]
    },
    {
      icon: "🛒",
      title: "Equipment Buyers (New & Used)",
      description: "Individuals or companies looking to purchase equipment for long-term use.",
      benefits: [
        "Browse a wide selection of new and quality used equipment",
        "Compare prices and specifications from multiple vendors",
        "Secure transactions with verified sellers"
      ]
    },
    {
      icon: "🔧",
      title: "Maintenance & Workshop Teams", 
      description: "Teams responsible for equipment upkeep and needing spare parts.",
      benefits: [
        "Access a searchable marketplace for OEM & aftermarket parts",
        "Benefit from category & brand tagging for easy sourcing",
        "Streamline inquiries, RFQs, and logistics add-ons for parts delivery"
      ]
    }
  ];

  const opportunities = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Vast Equipment Selection",
      description: "Access a comprehensive catalog of construction equipment, from heavy machinery to specialized tools, available for rent or purchase."
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Transparent & Competitive Pricing", 
      description: "Compare prices from multiple verified vendors, ensuring you get the best deals with no hidden costs."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Verified Listings & Quality Assurance",
      description: "Rest assured with verified equipment listings and seller profiles, ensuring reliability and quality."
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Real-time Availability & Instant Booking",
      description: "Check equipment availability in real-time and book instantly, reducing project delays and downtime."
    }
  ];

  const benefits = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Effortless Search & Discovery",
      description: "Use advanced filters and categories to quickly find the exact equipment or parts you need, saving valuable time."
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Direct Communication with Vendors", 
      description: "Communicate directly with equipment vendors and service providers for inquiries, negotiations, and support."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Streamlined Rental & Purchase Process",
      description: "Manage your rentals, purchases, and service bookings through an intuitive dashboard, from inquiry to completion."
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Integrated Logistics & Services",
      description: "Arrange for equipment transport, on-site services, and spare parts delivery directly through the platform."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your Next Equipment: A Buyer's Advantage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover, compare, and acquire the construction equipment you need, efficiently and transparently, on EQP MART.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/marketplace">
              <Button size="lg" className="w-full sm:w-auto">
                Start Browsing
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Who Can Be a Buyer */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Who Can Be a Buyer?</h3>
            <p className="text-lg text-muted-foreground">
              Our marketplace caters to all types of construction professionals and businesses in the MENA region.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {buyerTypes.map((buyer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-3xl">{buyer.icon}</div>
                    <div>
                      <CardTitle className="text-xl">{buyer.title}</CardTitle>
                      <CardDescription>{buyer.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3 text-primary">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {buyer.benefits.map((benefit, idx) => (
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

        {/* Opportunities for Buyers */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Opportunities for Buyers</h3>
            <p className="text-lg text-muted-foreground">
              Discover the significant advantages of sourcing your equipment through EQP MART.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4 text-primary">
                    {opportunity.icon}
                  </div>
                  <CardTitle className="text-xl">{opportunity.title}</CardTitle>
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

        {/* How to Maximize Your Benefits */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">How to Maximize Your Benefits</h3>
            <p className="text-lg text-muted-foreground">
              Our platform provides intuitive tools and dedicated support to help you find exactly what you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-3 text-primary">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Find Your Next Equipment?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Start exploring the vast selection of construction equipment on EQP MART today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/marketplace">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Browse Equipment
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Get Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyersAdvantageSection;