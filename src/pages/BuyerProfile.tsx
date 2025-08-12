
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Building2,
  MapPin,
  Star,
  DollarSign,
  Calendar,
  Phone,
  Mail,
  Globe,
  Shield,
  Award,
  MessageCircle,
  Package,
  TrendingUp,
  Clock
} from 'lucide-react';

const BuyerProfile = () => {
  const buyer = {
    name: "Emirates Construction Group",
    type: "General Contractor",
    location: "Dubai, UAE",
    established: "1998",
    employees: "500+",
    rating: 4.9,
    reviews: 156,
    verified: true,
    website: "www.emiratesconstruction.ae",
    phone: "+971 4 123 4567",
    email: "contact@emiratesconstruction.ae"
  };

  const stats = [
    { label: "Annual Spending", value: "$4.2M", icon: DollarSign },
    { label: "Completed Projects", value: "45", icon: Award },
    { label: "Active Projects", value: "12", icon: TrendingUp },
    { label: "Equipment Purchased", value: "180+", icon: Package }
  ];

  const currentNeeds = [
    { category: "Excavators", quantity: "5 units", urgency: "High", budget: "$750K" },
    { category: "Cranes", quantity: "3 units", urgency: "Medium", budget: "$1.2M" },
    { category: "Dump Trucks", quantity: "8 units", urgency: "Low", budget: "$600K" }
  ];

  const recentProjects = [
    {
      name: "Al Habtoor City Extension",
      status: "Active",
      duration: "18 months",
      equipment: ["Cranes", "Excavators", "Concrete Mixers"]
    },
    {
      name: "Dubai Marina Tower",
      status: "Completed",
      duration: "24 months", 
      equipment: ["Tower Cranes", "Concrete Pumps", "Hoists"]
    },
    {
      name: "Business Bay Bridge",
      status: "Active",
      duration: "12 months",
      equipment: ["Bridge Cranes", "Pile Drivers", "Concrete Mixers"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <h1 className="text-3xl font-bold mr-4">{buyer.name}</h1>
                  {buyer.verified && (
                    <Badge className="bg-green-100 text-green-800">
                      <Shield className="h-4 w-4 mr-1" />
                      Verified Buyer
                    </Badge>
                  )}
                </div>
                <p className="text-lg text-muted-foreground mb-4">{buyer.type}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    {buyer.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    Established {buyer.established}
                  </div>
                  <div className="flex items-center">
                    <Building2 className="h-4 w-4 mr-2 text-muted-foreground" />
                    {buyer.employees} employees
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-2 fill-yellow-400 text-yellow-400" />
                    {buyer.rating} ({buyer.reviews} reviews)
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2 mt-6 md:mt-0">
                <Button>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <Button variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="needs">Current Needs</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Company Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Emirates Construction Group is a leading construction company in the UAE, 
                    specializing in high-rise buildings, infrastructure development, and large-scale 
                    commercial projects. With over 25 years of experience, we have successfully 
                    completed numerous landmark projects across the Middle East.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Specializations</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">High-rise Construction</Badge>
                        <Badge variant="outline">Infrastructure</Badge>
                        <Badge variant="outline">Commercial Buildings</Badge>
                        <Badge variant="outline">Residential Projects</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Certifications</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">ISO 9001</Badge>
                        <Badge variant="outline">ISO 14001</Badge>
                        <Badge variant="outline">OHSAS 18001</Badge>
                        <Badge variant="outline">Dubai Municipality</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="needs" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Equipment Needs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {currentNeeds.map((need, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{need.category}</h4>
                          <Badge variant={need.urgency === 'High' ? 'destructive' : need.urgency === 'Medium' ? 'default' : 'secondary'}>
                            {need.urgency} Priority
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                          <div>Quantity: {need.quantity}</div>
                          <div>Budget: {need.budget}</div>
                          <div>
                            <Clock className="h-4 w-4 inline mr-1" />
                            Needed ASAP
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentProjects.map((project, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{project.name}</h4>
                          <div className="flex items-center space-x-2">
                            <Badge variant={project.status === 'Active' ? 'default' : 'secondary'}>
                              {project.status}
                            </Badge>
                            <Button size="sm" variant="outline" onClick={() => window.location.href = `/project-profile/${index + 1}`}>
                              View Details
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">Duration: {project.duration}</p>
                        <div>
                          <p className="text-sm font-medium mb-2">Equipment Used:</p>
                          <div className="flex flex-wrap gap-1">
                            {project.equipment.map((item, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-muted-foreground" />
                      <span>{buyer.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-muted-foreground" />
                      <span>{buyer.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 mr-3 text-muted-foreground" />
                      <span>{buyer.website}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3 text-muted-foreground" />
                      <span>Sheikh Zayed Road, Dubai, UAE</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t">
                    <h4 className="font-semibold mb-4">Business Hours</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>8:00 AM - 6:00 PM GST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>9:00 AM - 2:00 PM GST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BuyerProfile;
