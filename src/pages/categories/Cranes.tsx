
import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Eye, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cranes = () => {
  const cranes = [
    {
      id: 1,
      title: "Liebherr LTM 1050-3.1 Mobile Crane",
      condition: "New",
      price: 450000,
      location: "Riyadh, KSA",
      year: 2024,
      hours: 0,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop",
      seller: "Crane Solutions ME",
      rating: 4.9,
      views: 156
    },
    {
      id: 2,
      title: "Tadano GR-1000XL Rough Terrain Crane",
      condition: "Used - Functional",
      price: 285000,
      location: "Dubai, UAE",
      year: 2021,
      hours: 850,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop",
      seller: "Heavy Lift Solutions",
      rating: 4.7,
      views: 203
    },
    {
      id: 3,
      title: "Manitowoc MLC650 Crawler Crane",
      condition: "Refurbished",
      price: 780000,
      location: "Abu Dhabi, UAE",
      year: 2020,
      hours: 1200,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop",
      seller: "Gulf Crane Rentals",
      rating: 4.8,
      views: 178
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
          <h1 className="text-3xl font-bold mb-2">Cranes</h1>
          <p className="text-muted-foreground">Heavy lifting solutions for your construction projects</p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cranes.map((crane) => (
            <Card key={crane.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={crane.image}
                  alt={crane.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={getConditionColor(crane.condition)}>
                    {crane.condition}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 flex items-center space-x-1 bg-black/50 text-white px-2 py-1 rounded text-sm">
                  <Eye className="h-3 w-3" />
                  <span>{crane.views}</span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg">{crane.title}</CardTitle>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    ${crane.price.toLocaleString()}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{crane.rating}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>Year:</span>
                    <span>{crane.year}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Hours:</span>
                    <span>{crane.hours.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{crane.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>Listed 1 day ago</span>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <Link to={`/equipment/${crane.id}`} className="flex-1">
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

export default Cranes;
