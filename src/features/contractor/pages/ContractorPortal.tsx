import React, { useState } from 'react';
import { Search, Filter, Clock, DollarSign, CheckCircle, AlertTriangle, Building2, Users, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface Equipment {
  id: string;
  name: string;
  type: 'buy' | 'rent';
  price: number;
  availability: 'available' | 'limited' | 'unavailable';
  vendor: string;
  location: string;
  specs: string;
  image: string;
  verified: boolean;
  responseTime: string;
}

interface Project {
  id: string;
  name: string;
  status: 'planning' | 'active' | 'completed';
  equipmentNeeded: number;
  equipmentRented: number;
  budget: number;
  spent: number;
  deadline: string;
}

const ContractorPortal: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [equipmentType, setEquipmentType] = useState<'all' | 'buy' | 'rent'>('all');
  const [availability, setAvailability] = useState<string>('all');

  // Mock data for equipment listings
  const equipment: Equipment[] = [
    {
      id: '1',
      name: 'CAT 320D2 Excavator',
      type: 'rent',
      price: 2500,
      availability: 'available',
      vendor: 'Premier Equipment',
      location: 'Austin, TX',
      specs: '20-ton, GPS Ready',
      image: '/placeholder.svg',
      verified: true,
      responseTime: '< 2 hours'
    },
    {
      id: '2',
      name: 'John Deere 644K Loader',
      type: 'buy',
      price: 185000,
      availability: 'limited',
      vendor: 'Lone Star Heavy Equipment',
      location: 'Dallas, TX',
      specs: '2019, 1,200 hours',
      image: '/placeholder.svg',
      verified: true,
      responseTime: '< 1 hour'
    },
    {
      id: '3',
      name: 'Komatsu PC210 Excavator',
      type: 'rent',
      price: 1800,
      availability: 'available',
      vendor: 'Texas Construction Rentals',
      location: 'Houston, TX',
      specs: '21-ton, Hydraulic Thumb',
      image: '/placeholder.svg',
      verified: true,
      responseTime: '< 30 mins'
    }
  ];

  // Mock data for current projects
  const projects: Project[] = [
    {
      id: '1',
      name: 'Downtown Office Complex',
      status: 'active',
      equipmentNeeded: 12,
      equipmentRented: 8,
      budget: 150000,
      spent: 89500,
      deadline: '2024-06-15'
    },
    {
      id: '2',
      name: 'Highway 35 Expansion',
      status: 'planning',
      equipmentNeeded: 25,
      equipmentRented: 0,
      budget: 320000,
      spent: 0,
      deadline: '2024-08-30'
    }
  ];

  const filteredEquipment = equipment.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = equipmentType === 'all' || item.type === equipmentType;
    const matchesAvailability = availability === 'all' || item.availability === availability;
    return matchesSearch && matchesType && matchesAvailability;
  });

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-primary/10 text-primary border-primary/20';
      case 'limited': return 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20';
      case 'unavailable': return 'bg-destructive/10 text-destructive border-destructive/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getProjectStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-primary/10 text-primary border-primary/20';
      case 'planning': return 'bg-blue-500/10 text-blue-700 border-blue-500/20';
      case 'completed': return 'bg-green-500/10 text-green-700 border-green-500/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Contractor Portal
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Unified platform for medium-large construction firms to buy, rent, and manage equipment with real-time availability and transparent pricing
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Building2 className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">2,500+</p>
                      <p className="text-sm text-muted-foreground">Equipment Available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Users className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">150+</p>
                      <p className="text-sm text-muted-foreground">Verified Vendors</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">&lt; 1hr</p>
                      <p className="text-sm text-muted-foreground">Avg Response Time</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">98%</p>
                      <p className="text-sm text-muted-foreground">Success Rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Dashboard */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="search" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="search">Equipment Search</TabsTrigger>
                <TabsTrigger value="projects">Project Management</TabsTrigger>
                <TabsTrigger value="vendors">Vendor Dashboard</TabsTrigger>
              </TabsList>

              {/* Equipment Search Tab */}
              <TabsContent value="search" className="space-y-6">
                {/* Search and Filters */}
                <Card>
                  <CardHeader>
                    <CardTitle>Find Equipment - Buy or Rent Instantly</CardTitle>
                    <CardDescription>Search across all verified vendors with real-time availability</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                      <div className="flex-1">
                        <Input
                          placeholder="Search equipment (e.g., excavator, crane, loader)"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full"
                        />
                      </div>
                      <Select value={equipmentType} onValueChange={(value: any) => setEquipmentType(value)}>
                        <SelectTrigger className="w-full md:w-[200px]">
                          <SelectValue placeholder="Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Buy & Rent</SelectItem>
                          <SelectItem value="buy">Buy Only</SelectItem>
                          <SelectItem value="rent">Rent Only</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select value={availability} onValueChange={setAvailability}>
                        <SelectTrigger className="w-full md:w-[200px]">
                          <SelectValue placeholder="Availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                          <SelectItem value="available">Available</SelectItem>
                          <SelectItem value="limited">Limited</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="outline">
                        <Filter className="h-4 w-4 mr-2" />
                        More Filters
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Equipment Listings */}
                <div className="grid gap-6">
                  {filteredEquipment.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="w-full md:w-48 h-32 bg-muted rounded-lg flex items-center justify-center">
                            <Building2 className="h-16 w-16 text-muted-foreground" />
                          </div>
                          <div className="flex-1 space-y-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                <p className="text-muted-foreground">{item.specs}</p>
                                <div className="flex items-center space-x-2 mt-2">
                                  <MapPin className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-sm text-muted-foreground">{item.location}</span>
                                  {item.verified && <CheckCircle className="h-4 w-4 text-primary" />}
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-2xl font-bold">
                                  ${item.price.toLocaleString()}
                                  {item.type === 'rent' && <span className="text-sm font-normal">/day</span>}
                                </p>
                                <Badge className={getAvailabilityColor(item.availability)} variant="outline">
                                  {item.availability}
                                </Badge>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <div className="text-sm">
                                  <span className="font-medium">Vendor: </span>
                                  <span className="text-muted-foreground">{item.vendor}</span>
                                </div>
                                <div className="text-sm">
                                  <span className="font-medium">Response: </span>
                                  <span className="text-primary">{item.responseTime}</span>
                                </div>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="outline">View Details</Button>
                                <Button className="bg-primary text-primary-foreground">
                                  {item.type === 'rent' ? 'Book Rental' : 'Request Quote'}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Project Management Tab */}
              <TabsContent value="projects" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Equipment Tracking</CardTitle>
                    <CardDescription>Monitor equipment usage, costs, and availability across all projects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {projects.map((project) => (
                        <Card key={project.id}>
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="text-lg font-semibold">{project.name}</h3>
                                <Badge className={getProjectStatusColor(project.status)} variant="outline">
                                  {project.status}
                                </Badge>
                              </div>
                              <div className="text-right">
                                <p className="text-sm text-muted-foreground">Deadline</p>
                                <p className="font-medium">{project.deadline}</p>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              <div className="text-center p-4 bg-muted/50 rounded-lg">
                                <p className="text-2xl font-bold">{project.equipmentRented}/{project.equipmentNeeded}</p>
                                <p className="text-sm text-muted-foreground">Equipment</p>
                              </div>
                              <div className="text-center p-4 bg-muted/50 rounded-lg">
                                <p className="text-2xl font-bold">${project.spent.toLocaleString()}</p>
                                <p className="text-sm text-muted-foreground">Spent</p>
                              </div>
                              <div className="text-center p-4 bg-muted/50 rounded-lg">
                                <p className="text-2xl font-bold">${(project.budget - project.spent).toLocaleString()}</p>
                                <p className="text-sm text-muted-foreground">Remaining</p>
                              </div>
                              <div className="text-center p-4 bg-muted/50 rounded-lg">
                                <p className="text-2xl font-bold">{Math.round((project.spent / project.budget) * 100)}%</p>
                                <p className="text-sm text-muted-foreground">Budget Used</p>
                              </div>
                            </div>
                            
                            <div className="flex space-x-2 mt-4">
                              <Button variant="outline">View Details</Button>
                              <Button>Add Equipment</Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Vendor Dashboard Tab */}
              <TabsContent value="vendors" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Vendor Management</CardTitle>
                    <CardDescription>Manage relationships with all your equipment vendors in one place</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Vendor Performance */}
                      <div className="space-y-4">
                        <h3 className="font-semibold">Top Performing Vendors</h3>
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">Premier Equipment</span>
                              <Badge className="bg-green-500/10 text-green-700 border-green-500/20">98% Rating</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">15 orders, $125K total</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">Texas Construction Rentals</span>
                              <Badge className="bg-green-500/10 text-green-700 border-green-500/20">96% Rating</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">22 orders, $89K total</p>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Recent Orders */}
                      <div className="space-y-4">
                        <h3 className="font-semibold">Recent Orders</h3>
                        <Card>
                          <CardContent className="p-4">
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="font-medium">CAT 320D2 Excavator</span>
                                <Badge className="bg-primary/10 text-primary border-primary/20">Active</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">Premier Equipment</p>
                              <p className="text-sm">$2,500/day • 7 days remaining</p>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="font-medium">Komatsu PC210</span>
                                <Badge className="bg-yellow-500/10 text-yellow-700 border-yellow-500/20">Pending</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">Lone Star Heavy Equipment</p>
                              <p className="text-sm">Quote pending approval</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Quick Actions */}
                      <div className="space-y-4">
                        <h3 className="font-semibold">Quick Actions</h3>
                        <div className="space-y-2">
                          <Button className="w-full justify-start">
                            <Calendar className="h-4 w-4 mr-2" />
                            Schedule Delivery
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <DollarSign className="h-4 w-4 mr-2" />
                            Request Bulk Quote
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <AlertTriangle className="h-4 w-4 mr-2" />
                            Report Issue
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <Users className="h-4 w-4 mr-2" />
                            Find New Vendors
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContractorPortal;