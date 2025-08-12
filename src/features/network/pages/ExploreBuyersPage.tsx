
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search,
  Filter,
  MapPin,
  Star,
  Building2,
  DollarSign,
  Shield,
  MessageCircle,
  Eye
} from 'lucide-react';

const ExploreBuyers = () => {
  const buyers = [
    {
      id: 1,
      name: "Emirates Construction Group",
      type: "General Contractor",
      location: "Dubai, UAE",
      projects: 45,
      spending: "$4.2M",
      rating: 4.9,
      verified: true,
      currentNeeds: ["Excavators", "Cranes", "Dump Trucks"],
      activeProjects: 12
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
      currentNeeds: ["Road Equipment", "Concrete Mixers"],
      activeProjects: 8
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
      currentNeeds: ["Loaders", "Bulldozers", "Graders"],
      activeProjects: 15
    },
    {
      id: 4,
      name: "Saudi Mining Corporation",
      type: "Mining Company",
      location: "Riyadh, KSA",
      projects: 8,
      spending: "$12.3M",
      rating: 4.9,
      verified: true,
      currentNeeds: ["Mining Equipment", "Heavy Trucks"],
      activeProjects: 5
    },
    {
      id: 5,
      name: "Kuwait Construction Co.",
      type: "General Contractor",
      location: "Kuwait City, Kuwait",
      projects: 22,
      spending: "$3.7M",
      rating: 4.6,
      verified: true,
      currentNeeds: ["Cranes", "Concrete Pumps"],
      activeProjects: 9
    },
    {
      id: 6,
      name: "Oman Heavy Industries",
      type: "Infrastructure Developer",
      location: "Muscat, Oman",
      projects: 15,
      spending: "$6.1M",
      rating: 4.8,
      verified: true,
      currentNeeds: ["Asphalt Equipment", "Compactors"],
      activeProjects: 7
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Explore Buyers</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect with verified equipment buyers from around the world. 
            Browse profiles, view current needs, and start building business relationships.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card p-6 rounded-lg border mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search buyers..."
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Buyer Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="contractor">General Contractors</SelectItem>
                <SelectItem value="rental">Rental Companies</SelectItem>
                <SelectItem value="infrastructure">Infrastructure Developers</SelectItem>
                <SelectItem value="mining">Mining Companies</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="uae">UAE</SelectItem>
                <SelectItem value="saudi">Saudi Arabia</SelectItem>
                <SelectItem value="qatar">Qatar</SelectItem>
                <SelectItem value="kuwait">Kuwait</SelectItem>
                <SelectItem value="oman">Oman</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {buyers.length} verified buyers
          </p>
        </div>

        {/* Buyers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {buyers.map((buyer) => (
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
                    {buyer.rating} rating • {buyer.projects} completed projects
                  </div>
                  <div className="flex items-center text-sm">
                    <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                    {buyer.spending} annual spending
                  </div>
                  <div className="flex items-center text-sm">
                    <Eye className="h-4 w-4 mr-2 text-muted-foreground" />
                    {buyer.activeProjects} active projects
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
                  <Button className="flex-1" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Connect
                  </Button>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Buyers
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExploreBuyers;
