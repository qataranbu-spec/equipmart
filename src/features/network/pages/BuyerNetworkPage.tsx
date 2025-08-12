import React, { useState } from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import { TwoColumnLayout } from '@/components/layout/TwoColumnLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  ShoppingBag, 
  TrendingUp, 
  Globe,
  Shield,
  Award,
  MessageCircle,
  Calendar,
  DollarSign,
  CheckCircle,
  Star,
  Building2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const BuyerNetwork = () => {
  const buyerCategories = [
    {
      title: "General Contractors",
      count: 2840,
      description: "Large construction companies with diverse project portfolios",
      avgSpending: "$2.5M annually"
    },
    {
      title: "Equipment Rental Companies",
      count: 1567,
      description: "Rental fleet operators expanding their inventory",
      avgSpending: "$1.8M annually"
    },
    {
      title: "Infrastructure Developers",
      count: 892,
      description: "Government and private infrastructure projects",
      avgSpending: "$5.2M annually"
    },
    {
      title: "Mining Companies",
      count: 634,
      description: "Mining operations requiring specialized equipment",
      avgSpending: "$3.1M annually"
    }
  ];

  const networkBenefits = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with buyers worldwide across all major markets"
    },
    {
      icon: Shield,
      title: "Verified Buyers",
      description: "All buyers are financially verified and pre-qualified"
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Access real-time market trends and pricing data"
    },
    {
      icon: MessageCircle,
      title: "Direct Communication",
      description: "Connect directly with decision makers"
    }
  ];

  const featuredBuyers = [
    {
      id: 1,
      name: "Emirates Construction Group",
      type: "General Contractor",
      location: "Dubai, UAE",
      projects: 45,
      spending: "$4.2M",
      rating: 4.9,
      verified: true,
      currentNeeds: ["Excavators", "Cranes", "Dump Trucks"]
    },
    {
      id: 2,
      name: "Gulf Infrastructure Ltd",
      type: "Infrastructure Developer", 
      location: "Qatar",
      projects: 12,
      spending: "$8.5M",
      rating: 4.8,
      verified: true,
      currentNeeds: ["Road Equipment", "Concrete Mixers"]
    },
    {
      id: 3,
      name: "Al Habtoor Equipment Rental",
      type: "Rental Company",
      location: "Abu Dhabi, UAE",
      projects: 28,
      spending: "$2.1M",
      rating: 4.7,
      verified: true,
      currentNeeds: ["Loaders", "Bulldozers", "Graders"]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedSpending, setSelectedSpending] = useState('all');

  const sidebarContent = (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium mb-2 block">Category</label>
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="all">All Categories</option>
          <option value="General Contractors">General Contractors</option>
          <option value="Equipment Rental Companies">Equipment Rental Companies</option>
          <option value="Infrastructure Developers">Infrastructure Developers</option>
          <option value="Mining Companies">Mining Companies</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Location</label>
        <select 
          value={selectedLocation} 
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="all">All Locations</option>
          <option value="UAE">UAE</option>
          <option value="Qatar">Qatar</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Kuwait">Kuwait</option>
          <option value="Bahrain">Bahrain</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Annual Spending</label>
        <select 
          value={selectedSpending} 
          onChange={(e) => setSelectedSpending(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="all">Any Amount</option>
          <option value="1-2M">$1M - $2M</option>
          <option value="2-5M">$2M - $5M</option>
          <option value="5M+">$5M+</option>
        </select>
      </div>

      <div className="pt-4 border-t">
        <h4 className="font-medium mb-3">Quick Filters</h4>
        <div className="space-y-2">
          <Button variant="outline" size="sm" className="w-full justify-start">
            Verified Only
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start">
            Active Projects
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start">
            Premium Members
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Buyer Network</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with thousands of verified equipment buyers worldwide. 
              Access a global network of contractors, rental companies, and infrastructure developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join-buyer-network">
                <Button size="lg">
                  <Users className="h-5 w-5 mr-2" />
                  Join Buyer Network
                </Button>
              </Link>
              <Link to="/explore-buyers">
                <Button variant="outline" size="lg">Explore Buyers</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TwoColumnLayout 
        sidebar={sidebarContent}
        sidebarTitle="Filter Buyers"
        defaultSidebarWidth={300}
      >
        {/* Network Stats */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">6,500+</div>
                <h3 className="font-semibold mb-1">Active Buyers</h3>
                <p className="text-sm text-muted-foreground">Verified companies</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">$2.8B</div>
                <h3 className="font-semibold mb-1">Annual Volume</h3>
                <p className="text-sm text-muted-foreground">Equipment purchases</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">45</div>
                <h3 className="font-semibold mb-1">Countries</h3>
                <p className="text-sm text-muted-foreground">Global presence</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <h3 className="font-semibold mb-1">Satisfaction</h3>
                <p className="text-sm text-muted-foreground">Buyer rating</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Buyer Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Buyer Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {buyerCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <p className="text-muted-foreground mt-2">{category.description}</p>
                    </div>
                    <Badge variant="secondary">{category.count} buyers</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Average Spending:</span>
                    <span className="font-semibold text-primary">{category.avgSpending}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Buyers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Featured Buyers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBuyers.map((buyer) => (
              <Card key={buyer.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{buyer.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{buyer.type}</p>
                    </div>
                    {buyer.verified && (
                      <Badge className="bg-green-100 text-green-800">
                        <Shield className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm">
                      <Building2 className="h-4 w-4 mr-2 text-muted-foreground" />
                      {buyer.location}
                    </div>
                    <div className="flex items-center text-sm">
                      <Star className="h-4 w-4 mr-2 fill-yellow-400 text-yellow-400" />
                      {buyer.rating} rating • {buyer.projects} projects
                    </div>
                    <div className="flex items-center text-sm">
                      <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                      {buyer.spending} annual spending
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Current Needs:</p>
                    <div className="flex flex-wrap gap-1">
                      {buyer.currentNeeds.map((need, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {need}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link to="/buyer-contact" className="flex-1">
                      <Button className="w-full" size="sm">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Connect
                      </Button>
                    </Link>
                    <Link to="/buyer-profile">
                      <Button variant="outline" size="sm">
                        Profile
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Network Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Network Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {networkBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How to Join */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">How to Join the Network</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Register</h3>
              <p className="text-muted-foreground text-sm">Create your buyer profile with company details</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Verify</h3>
              <p className="text-muted-foreground text-sm">Complete financial and business verification</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Connect</h3>
              <p className="text-muted-foreground text-sm">Access global supplier network and marketplace</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Purchase</h3>
              <p className="text-muted-foreground text-sm">Buy equipment with exclusive network benefits</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Buyer Network?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Access exclusive deals, verified suppliers, and a global network of equipment professionals. 
            Join thousands of successful buyers who trust our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join-buyer-network">
              <Button size="lg">Join Network</Button>
            </Link>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </section>
      </TwoColumnLayout>

      <Footer />
    </div>
  );
};

export default BuyerNetwork;
