import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { TwoColumnLayout } from '@/components/layout/TwoColumnLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Store, 
  TrendingUp, 
  Globe,
  Shield,
  Award,
  Users,
  DollarSign,
  CheckCircle,
  Star,
  Building2,
  Package,
  BarChart3,
  Handshake
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SupplierNetwork = () => {
  const supplierTiers = [
    {
      title: "Authorized Dealers",
      count: 1240,
      description: "Official equipment brand dealers and distributors",
      benefits: ["Brand authorization", "Factory warranties", "OEM parts"]
    },
    {
      title: "Rental Companies",
      count: 890,
      description: "Professional equipment rental and leasing companies",
      benefits: ["Maintained fleet", "Flexible terms", "Quick delivery"]
    },
    {
      title: "Independent Dealers",
      count: 2560,
      description: "Independent equipment dealers and brokers",
      benefits: ["Competitive pricing", "Diverse inventory", "Local expertise"]
    },
    {
      title: "Manufacturers",
      count: 156,
      description: "Equipment manufacturers selling direct",
      benefits: ["Factory direct", "Custom options", "Best pricing"]
    }
  ];

  const topSuppliers = [
    {
      id: 1,
      name: "Al Futtaim Equipment",
      type: "Authorized Dealer",
      location: "Dubai, UAE",
      inventory: 850,
      sales: "$45M",
      rating: 4.9,
      verified: true,
      specialties: ["Caterpillar", "Volvo", "JCB"],
      yearsActive: 25
    },
    {
      id: 2,
      name: "Gulf Construction Equipment",
      type: "Independent Dealer",
      location: "Riyadh, KSA",
      inventory: 1200,
      sales: "$32M",
      rating: 4.8,
      verified: true,
      specialties: ["Komatsu", "Liebherr", "Hitachi"],
      yearsActive: 18
    },
    {
      id: 3,
      name: "Emirates Rental Solutions",
      type: "Rental Company",
      location: "Abu Dhabi, UAE",
      inventory: 650,
      sales: "$28M",
      rating: 4.7,
      verified: true,
      specialties: ["Rental Fleet", "Maintenance", "Logistics"],
      yearsActive: 12
    }
  ];

  const networkAdvantages = [
    {
      icon: Globe,
      title: "Global Market Access",
      description: "Reach buyers in over 45 countries with our international platform"
    },
    {
      icon: TrendingUp,
      title: "Sales Growth",
      description: "Average 35% increase in sales for active network members"
    },
    {
      icon: Shield,
      title: "Verified Buyers",
      description: "All buyers are financially verified and pre-qualified"
    },
    {
      icon: BarChart3,
      title: "Market Intelligence",
      description: "Access real-time market data and pricing insights"
    }
  ];

  const membershipBenefits = [
    "Priority listing in search results",
    "Dedicated account management",
    "Advanced analytics dashboard",
    "Lead generation tools",
    "Marketing co-op opportunities",
    "Network events and training"
  ];

  const [selectedTier, setSelectedTier] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const sidebarContent = (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium mb-2 block">Supplier Type</label>
        <select 
          value={selectedTier} 
          onChange={(e) => setSelectedTier(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="all">All Types</option>
          <option value="Authorized Dealers">Authorized Dealers</option>
          <option value="Rental Companies">Rental Companies</option>
          <option value="Independent Dealers">Independent Dealers</option>
          <option value="Manufacturers">Manufacturers</option>
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
          <option value="KSA">Saudi Arabia</option>
          <option value="Qatar">Qatar</option>
          <option value="Kuwait">Kuwait</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Specialty</label>
        <select 
          value={selectedSpecialty} 
          onChange={(e) => setSelectedSpecialty(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="all">All Specialties</option>
          <option value="Caterpillar">Caterpillar</option>
          <option value="Komatsu">Komatsu</option>
          <option value="Volvo">Volvo</option>
          <option value="JCB">JCB</option>
        </select>
      </div>

      <div className="pt-4 border-t">
        <h4 className="font-medium mb-3">Quick Filters</h4>
        <div className="space-y-2">
          <Button variant="outline" size="sm" className="w-full justify-start">
            Premium Suppliers
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start">
            High Volume
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start">
            Fast Delivery
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Supplier Network</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join the world's largest network of construction equipment suppliers. 
              Connect with global buyers, grow your business, and access exclusive opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/become-supplier">
                <Button size="lg">
                  <Store className="h-5 w-5 mr-2" />
                  Become a Supplier
                </Button>
              </Link>
              <Link to="/explore-network">
                <Button variant="outline" size="lg">Explore Network</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TwoColumnLayout 
        sidebar={sidebarContent}
        sidebarTitle="Filter Suppliers"
        defaultSidebarWidth={320}
      >
        {/* Network Stats */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">4,800+</div>
                <h3 className="font-semibold mb-1">Active Suppliers</h3>
                <p className="text-sm text-muted-foreground">Verified companies</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">$3.2B</div>
                <h3 className="font-semibold mb-1">Annual Sales</h3>
                <p className="text-sm text-muted-foreground">Through platform</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">52</div>
                <h3 className="font-semibold mb-1">Countries</h3>
                <p className="text-sm text-muted-foreground">Supplier presence</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">96%</div>
                <h3 className="font-semibold mb-1">Satisfaction</h3>
                <p className="text-sm text-muted-foreground">Supplier rating</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Supplier Tiers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Supplier Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supplierTiers.map((tier, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{tier.title}</CardTitle>
                      <p className="text-muted-foreground mt-2">{tier.description}</p>
                    </div>
                    <Badge variant="secondary">{tier.count} suppliers</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {tier.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Top Suppliers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Featured Suppliers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topSuppliers.map((supplier) => (
              <Card key={supplier.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{supplier.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{supplier.type}</p>
                    </div>
                    {supplier.verified && (
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
                      {supplier.location}
                    </div>
                    <div className="flex items-center text-sm">
                      <Star className="h-4 w-4 mr-2 fill-yellow-400 text-yellow-400" />
                      {supplier.rating} rating • {supplier.yearsActive} years
                    </div>
                    <div className="flex items-center text-sm">
                      <Package className="h-4 w-4 mr-2 text-muted-foreground" />
                      {supplier.inventory} units in stock
                    </div>
                    <div className="flex items-center text-sm">
                      <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                      {supplier.sales} annual sales
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {supplier.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link to="/contact-us" className="flex-1">
                      <Button className="w-full" size="sm">
                        <Handshake className="h-4 w-4 mr-2" />
                        Connect
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Network Advantages */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Network Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {networkAdvantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <advantage.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Membership Benefits */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Membership Benefits</h2>
              <p className="text-muted-foreground mb-6">
                Join our exclusive supplier network and unlock premium features designed to 
                accelerate your business growth and connect you with serious buyers.
              </p>
              <div className="space-y-3">
                {membershipBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-primary/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Success Story</h3>
                <blockquote className="text-muted-foreground mb-4">
                  "Joining the EQP+MART supplier network increased our sales by 45% in the first year. 
                  The quality of leads and global reach is unmatched."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-bold">AF</span>
                  </div>
                  <div>
                    <p className="font-semibold">Ahmed Fares</p>
                    <p className="text-sm text-muted-foreground">CEO, Gulf Equipment Trading</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
              <h3 className="font-semibold mb-2">Apply</h3>
              <p className="text-muted-foreground text-sm">Submit your company information and business credentials</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Verify</h3>
              <p className="text-muted-foreground text-sm">Complete our verification process and quality assessment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Onboard</h3>
              <p className="text-muted-foreground text-sm">Set up your profile and list your inventory</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Grow</h3>
              <p className="text-muted-foreground text-sm">Start connecting with buyers and growing your business</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Supplier Network?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Become part of the world's leading construction equipment marketplace. 
            Access global buyers, premium tools, and unlimited growth opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/become-supplier">
              <Button size="lg">Become a Supplier</Button>
            </Link>
            <Link to="/contact-us">
              <Button variant="outline" size="lg">Learn More</Button>
            </Link>
          </div>
        </section>
      </TwoColumnLayout>

      <Footer />
    </div>
  );
};

export default SupplierNetwork;
