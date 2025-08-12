
import React from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
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
  Clock,
  DollarSign,
  Award,
  MessageCircle,
  Calendar
} from 'lucide-react';

const FindExperts = () => {
  const experts = [
    {
      id: 1,
      name: "Dr. Hassan Al-Mahmoud",
      title: "Senior Equipment Appraiser",
      specialization: "Heavy Machinery Valuation",
      rating: 4.9,
      reviews: 287,
      hourlyRate: 250,
      location: "Dubai, UAE",
      availability: "Available",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Sarah Thompson",
      title: "Technical Consultant",
      specialization: "Mining Equipment Engineering",
      rating: 4.8,
      reviews: 156,
      hourlyRate: 220,
      location: "Perth, Australia",
      availability: "Busy until Feb 15",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Marco Rossi",
      title: "Maintenance Specialist",
      specialization: "Caterpillar & Komatsu Equipment",
      rating: 4.9,
      reviews: 342,
      hourlyRate: 180,
      location: "Milan, Italy",
      availability: "Available",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Find an Expert</h1>
          <p className="text-muted-foreground text-lg">
            Connect with certified construction equipment experts worldwide
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card p-6 rounded-lg border mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search by name or expertise..."
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Specialization" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="appraisal">Equipment Appraisal</SelectItem>
                <SelectItem value="technical">Technical Consultation</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
                <SelectItem value="training">Training</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="uae">UAE</SelectItem>
                <SelectItem value="saudi">Saudi Arabia</SelectItem>
                <SelectItem value="australia">Australia</SelectItem>
                <SelectItem value="italy">Italy</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Expert Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experts.map((expert) => (
            <Card key={expert.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">
                        {expert.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">{expert.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{expert.title}</p>
                    </div>
                  </div>
                  <Badge 
                    className={expert.availability === 'Available' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'}
                  >
                    {expert.availability}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-primary mb-3">{expert.specialization}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    {expert.location}
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="h-4 w-4 mr-2 fill-yellow-400 text-yellow-400" />
                    {expert.rating} ({expert.reviews} reviews)
                  </div>
                  <div className="flex items-center text-sm">
                    <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                    ${expert.hourlyRate}/hour
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button className="flex-1" size="sm" disabled={expert.availability !== 'Available'}>
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline">Load More Experts</Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FindExperts;
