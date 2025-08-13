import React, { useState } from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { 
  Heart,
  Bookmark,
  Users,
  Wrench,
  MessageCircle,
  Search,
  Star,
  Shield,
  Building2,
  DollarSign,
  Calendar,
  Eye,
  Trash2,
  Filter,
  MapPin,
  Clock
} from 'lucide-react';

const FavoritesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('people');

  const favoritePeople = [
    {
      id: 1,
      name: "Ahmed Al-Rashid",
      company: "Emirates Construction",
      role: "buyer",
      location: "Dubai, UAE",
      rating: 4.8,
      verified: true,
      savedDate: "2024-07-15",
      avatar: null,
      projects: 45,
      specialties: ["Infrastructure", "Commercial"]
    },
    {
      id: 2,
      name: "Sarah Johnson",
      company: "Gulf Equipment Rental",
      role: "supplier",
      location: "Qatar",
      rating: 4.9,
      verified: true,
      savedDate: "2024-06-20",
      avatar: null,
      inventory: 250,
      specialties: ["Excavators", "Cranes"]
    }
  ];

  const favoriteEquipment = [
    {
      id: 1,
      name: "Caterpillar 320D Excavator",
      category: "Excavators",
      condition: "Excellent",
      year: 2020,
      hours: 1200,
      price: 125000,
      location: "Dubai, UAE",
      seller: "Al Habtoor Equipment",
      savedDate: "2024-08-01",
      image: null,
      verified: true
    },
    {
      id: 2,
      name: "Liebherr LTM 1050-3.1 Crane",
      category: "Cranes",
      condition: "Good",
      year: 2019,
      hours: 2500,
      price: 450000,
      location: "Abu Dhabi, UAE",
      seller: "Emirates Cranes",
      savedDate: "2024-07-28",
      image: null,
      verified: true
    }
  ];

  const favoriteServices = [
    {
      id: 1,
      title: "Heavy Equipment Maintenance",
      provider: "GCC Maintenance Solutions",
      category: "Maintenance",
      rating: 4.9,
      location: "Dubai, UAE",
      price: "From $150/hour",
      verified: true,
      savedDate: "2024-07-22",
      responseTime: "2 hours",
      completedJobs: 890
    },
    {
      id: 2,
      title: "Equipment Transportation",
      provider: "Gulf Transport Services",
      category: "Logistics",
      rating: 4.7,
      location: "Regional Coverage",
      price: "From $2.5/km",
      verified: true,
      savedDate: "2024-07-18",
      responseTime: "4 hours",
      completedJobs: 1250
    }
  ];

  const handleRemoveFavorite = (type: string, id: number) => {
    console.log(`Removing ${type} favorite:`, id);
  };

  const PersonCard = ({ person }: any) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-lg font-semibold text-primary">
                {person.name.split(' ').map((n: string) => n[0]).join('')}
              </span>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-semibold text-lg">{person.name}</h3>
                {person.verified && (
                  <Badge variant="secondary" className="text-xs">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground mb-2">{person.company}</p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Building2 className="h-4 w-4 mr-1" />
                  {person.location}
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                  {person.rating}
                </div>
              </div>
            </div>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleRemoveFavorite('person', person.id)}
          >
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
          </Button>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {person.specialties.map((specialty: string, idx: number) => (
            <Badge key={idx} variant="outline" className="text-xs">
              {specialty}
            </Badge>
          ))}
        </div>

        <div className="flex items-center text-xs text-muted-foreground mb-4">
          <Clock className="h-3 w-3 mr-1" />
          Saved on {new Date(person.savedDate).toLocaleDateString()}
        </div>

        <div className="flex space-x-2">
          <Button size="sm" className="flex-1">
            <MessageCircle className="h-4 w-4 mr-2" />
            Message
          </Button>
          <Button size="sm" variant="outline">
            <Eye className="h-4 w-4 mr-2" />
            View Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const EquipmentCard = ({ equipment }: any) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="font-semibold text-lg">{equipment.name}</h3>
              {equipment.verified && (
                <Badge variant="secondary" className="text-xs">
                  <Shield className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground mb-2">{equipment.seller}</p>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleRemoveFavorite('equipment', equipment.id)}
          >
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
          </Button>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Year:</span>
            <span>{equipment.year}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Hours:</span>
            <span>{equipment.hours.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Condition:</span>
            <Badge variant="outline" className="text-xs">
              {equipment.condition}
            </Badge>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Location:</span>
            <span>{equipment.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="text-xl font-bold text-primary">
            ${equipment.price.toLocaleString()}
          </div>
          <div className="text-xs text-muted-foreground">
            Saved on {new Date(equipment.savedDate).toLocaleDateString()}
          </div>
        </div>

        <div className="flex space-x-2">
          <Button size="sm" className="flex-1">
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
          <Button size="sm" variant="outline">
            <MessageCircle className="h-4 w-4 mr-2" />
            Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const ServiceCard = ({ service }: any) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="font-semibold text-lg">{service.title}</h3>
              {service.verified && (
                <Badge variant="secondary" className="text-xs">
                  <Shield className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground mb-2">{service.provider}</p>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleRemoveFavorite('service', service.id)}
          >
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
          </Button>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Category:</span>
            <Badge variant="outline" className="text-xs">
              {service.category}
            </Badge>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Rating:</span>
            <div className="flex items-center">
              <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
              {service.rating}
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Response Time:</span>
            <span>{service.responseTime}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Completed Jobs:</span>
            <span>{service.completedJobs}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-semibold text-primary">
            {service.price}
          </div>
          <div className="text-xs text-muted-foreground">
            Saved on {new Date(service.savedDate).toLocaleDateString()}
          </div>
        </div>

        <div className="flex space-x-2">
          <Button size="sm" className="flex-1">
            Request Quote
          </Button>
          <Button size="sm" variant="outline">
            <MessageCircle className="h-4 w-4 mr-2" />
            Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">My Favorites</h1>
            <p className="text-muted-foreground">
              Keep track of interesting people, equipment, and services for easy access later.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search favorites..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary mb-1">{favoritePeople.length}</div>
                <p className="text-sm text-muted-foreground">Favorite People</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary mb-1">{favoriteEquipment.length}</div>
                <p className="text-sm text-muted-foreground">Saved Equipment</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary mb-1">{favoriteServices.length}</div>
                <p className="text-sm text-muted-foreground">Bookmarked Services</p>
              </CardContent>
            </Card>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="people">
                <Users className="h-4 w-4 mr-2" />
                People ({favoritePeople.length})
              </TabsTrigger>
              <TabsTrigger value="equipment">
                <Wrench className="h-4 w-4 mr-2" />
                Equipment ({favoriteEquipment.length})
              </TabsTrigger>
              <TabsTrigger value="services">
                <Bookmark className="h-4 w-4 mr-2" />
                Services ({favoriteServices.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="people" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {favoritePeople.map((person) => (
                  <PersonCard key={person.id} person={person} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="equipment" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {favoriteEquipment.map((equipment) => (
                  <EquipmentCard key={equipment.id} equipment={equipment} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="services" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {favoriteServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FavoritesPage;