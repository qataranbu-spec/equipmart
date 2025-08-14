import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Wrench, 
  Users, 
  MapPin, 
  Star, 
  Clock, 
  CheckCircle,
  Truck,
  Shield,
  Award,
  Phone,
  Calendar,
  DollarSign,
  Fuel,
  Package,
  UserCheck,
  FileText,
  ClipboardCheck,
  Search,
  BadgeCheck,
  Gavel
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceCategories = [
    {
      title: "Fuel Door Delivery",
      description: "Diesel at site, usage tracking",
      icon: Fuel,
      providers: 89,
      avgRating: 4.7
    },
    {
      title: "Lubricants & Consumables Delivery",
      description: "DEF, oils, filters delivered to site",
      icon: Package,
      providers: 124,
      avgRating: 4.8
    },
    {
      title: "Mobile Repair Services",
      description: "On-site diagnostics and minor repairs",
      icon: Wrench,
      providers: 156,
      avgRating: 4.9
    },
    {
      title: "Spare Parts Express Delivery",
      description: "Same-day critical parts logistics",
      icon: Package,
      providers: 78,
      avgRating: 4.8
    },
    {
      title: "Operator Leasing",
      description: "Trained operator staffing",
      icon: UserCheck,
      providers: 267,
      avgRating: 4.6
    },
    {
      title: "Subscription Support Bundles",
      description: "All-in-one: service, fuel, insurance, analytics",
      icon: FileText,
      providers: 134,
      avgRating: 4.9
    },
    {
      title: "Equipment Financing",
      description: "Loans, leases, EaaS",
      icon: DollarSign,
      providers: 45,
      avgRating: 4.7
    },
    {
      title: "Equipment Insurance",
      description: "Damage, theft, liability, downtime coverage",
      icon: Shield,
      providers: 67,
      avgRating: 4.8
    },
    {
      title: "Equipment Appraisals",
      description: "Professional valuation for insurance, financing, and sales",
      icon: Search,
      providers: 34,
      avgRating: 4.9
    },
    {
      title: "Equipment Inspections",
      description: "Safety assessments, compliance checks, pre-purchase inspections",
      icon: ClipboardCheck,
      providers: 52,
      avgRating: 4.8
    },
    {
      title: "Certifications",
      description: "Equipment compliance, operator certifications, safety standards",
      icon: BadgeCheck,
      providers: 28,
      avgRating: 4.9
    },
    {
      title: "Asset Liquidation",
      description: "Equipment fleet disposal, auctions, and asset recovery services",
      icon: Gavel,
      providers: 19,
      avgRating: 4.7
    }
  ];

  const featuredProviders = [
    {
      id: 1,
      name: "Gulf Technical Services",
      specialization: "Excavator & Crane Maintenance",
      rating: 4.9,
      reviews: 234,
      location: "Dubai, UAE",
      experience: "15+ years",
      certified: true,
      hourlyRate: 75,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      services: ["Maintenance", "Repair", "Installation"]
    },
    {
      id: 2,
      name: "Emirates Heavy Transport",
      specialization: "Equipment Transportation",
      rating: 4.8,
      reviews: 189,
      location: "Abu Dhabi, UAE",
      experience: "12+ years",
      certified: true,
      hourlyRate: 120,
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop",
      services: ["Transportation", "Logistics", "Delivery"]
    },
    {
      id: 3,
      name: "Al Naboodah Technical",
      specialization: "Multi-Equipment Services",
      rating: 4.7,
      reviews: 312,
      location: "Sharjah, UAE",
      experience: "20+ years",
      certified: true,
      hourlyRate: 85,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
      services: ["Maintenance", "Operators", "Training"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Construction Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with certified service providers for maintenance, transportation, 
              installation, and technical support for your construction equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services/marketplace">
                <Button size="lg">Browse Marketplace</Button>
              </Link>
              <Link to="/find-service-providers">
                <Button size="lg">Find Service Providers</Button>
              </Link>
              <Link to="/register-as-provider">
                <Button variant="outline" size="lg">Register as Provider</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Service Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Service Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <category.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-base font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground mb-3 text-xs">{category.description}</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-muted-foreground">{category.providers} providers</span>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                      <span>{category.avgRating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Service Providers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Featured Service Providers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProviders.map((provider) => (
              <Card key={provider.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={provider.image} 
                    alt={provider.name}
                    className="w-full h-48 object-cover"
                  />
                  {provider.certified && (
                    <Badge className="absolute top-3 right-3 bg-green-100 text-green-800">
                      <Shield className="h-3 w-3 mr-1" />
                      Certified
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{provider.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{provider.specialization}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      {provider.location}
                    </div>
                    <div className="flex items-center text-sm">
                      <Award className="h-4 w-4 mr-2 text-muted-foreground" />
                      {provider.experience} experience
                    </div>
                    <div className="flex items-center text-sm">
                      <Star className="h-4 w-4 mr-2 fill-yellow-400 text-yellow-400" />
                      {provider.rating} ({provider.reviews} reviews)
                    </div>
                    <div className="flex items-center text-sm">
                      <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                      From ${provider.hourlyRate}/hour
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {provider.services.map((service, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link to="/contact-us" className="flex-1">
                      <Button className="w-full">
                        <Phone className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      <Calendar className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Service Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Use Our Service Network?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Certified Professionals</h3>
                <p className="text-muted-foreground">
                  All service providers are certified, insured, and have proven track records in the industry.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">24/7 Emergency Support</h3>
                <p className="text-muted-foreground">
                  Emergency breakdown services and urgent repairs available around the clock.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
                <p className="text-muted-foreground">
                  All services come with quality guarantees and comprehensive warranty coverage.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Post Your Requirement</h3>
              <p className="text-muted-foreground text-sm">Describe your service needs and equipment details</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Receive Quotes</h3>
              <p className="text-muted-foreground text-sm">Get competitive quotes from verified providers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Choose Provider</h3>
              <p className="text-muted-foreground text-sm">Compare and select the best service provider</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Get Service</h3>
              <p className="text-muted-foreground text-sm">Receive professional service with quality guarantee</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Construction Services?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Connect with thousands of certified service providers across the region. 
            Get competitive quotes and professional service for all your equipment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/post-service-request">
              <Button size="lg">Post Service Request</Button>
            </Link>
            <Link to="/join-as-service-provider">
              <Button variant="outline" size="lg">Join as Service Provider</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
