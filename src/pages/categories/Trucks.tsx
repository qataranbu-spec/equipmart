
import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Eye, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Trucks = () => {
  const trucks = [
    {
      id: 1,
      title: "Mercedes-Benz Actros 3348 Dump Truck",
      condition: "New",
      price: 180000,
      location: "Manama, Bahrain",
      year: 2024,
      hours: 0,
      image: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=500&h=300&fit=crop",
      seller: "Truck Masters",
      rating: 4.9,
      views: 112
    },
    {
      id: 2,
      title: "Volvo FMX 8x4 Heavy Duty Truck",
      condition: "Used - Functional",
      price: 95000,
      location: "Dubai, UAE",
      year: 2020,
      hours: 2500,
      image: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=500&h=300&fit=crop",
      seller: "Volvo Trucks ME",
      rating: 4.7,
      views: 89
    },
    {
      id: 3,
      title: "Scania G450 Construction Truck",
      condition: "Refurbished",
      price: 125000,
      location: "Doha, Qatar",
      year: 2019,
      hours: 1800,
      image: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=500&h=300&fit=crop",
      seller: "Scania Gulf",
      rating: 4.6,
      views: 156
    }
  ];

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'New': return 'bg-green-100 text-green-800';
      case 'Used - Functional': return 'bg-blue-100 text-blue-800';
      case 'Refurbished': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-secondary py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Dump Trucks</h1>
          <p className="text-muted-foreground">Heavy-duty trucks for material transport and construction</p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trucks.map((truck) => (
            <Card key={truck.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={truck.image}
                  alt={truck.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={getConditionColor(truck.condition)}>
                    {truck.condition}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 flex items-center space-x-1 bg-black/50 text-white px-2 py-1 rounded text-sm">
                  <Eye className="h-3 w-3" />
                  <span>{truck.views}</span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg">{truck.title}</CardTitle>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    ${truck.price.toLocaleString()}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{truck.rating}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>Year:</span>
                    <span>{truck.year}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Hours:</span>
                    <span>{truck.hours.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{truck.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>Listed 4 days ago</span>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <Link to={`/equipment/${truck.id}`} className="flex-1">
                    <Button className="w-full">View Details</Button>
                  </Link>
                  <Link to="/contact-seller">
                    <Button variant="outline">Contact Seller</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Trucks;
