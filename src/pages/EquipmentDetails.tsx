
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Calendar, Eye, Heart, Share2, Phone, Mail, MessageCircle, Shield, Star } from 'lucide-react';

const EquipmentDetails = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  // In a real app, this would fetch data based on the ID
  const equipment = {
    id: 1,
    title: "Caterpillar 320 Excavator",
    condition: "Used - Functional",
    price: 85000,
    currency: "USD",
    location: "Dubai, UAE",
    year: 2020,
    hours: 1200,
    category: "Excavators",
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581094289988-3eca55c3a5e2?w=800&h=600&fit=crop"
    ],
    seller: {
      name: "Heavy Equipment LLC",
      verified: true,
      rating: 4.8,
      totalReviews: 156,
      memberSince: "2019",
      responseTime: "2 hours",
      phone: "+971 50 123 4567",
      email: "sales@heavyequipment.ae"
    },
    specifications: {
      "Engine Model": "Cat C7.1 ACERT",
      "Engine Power": "159 hp (119 kW)",
      "Operating Weight": "20,500 kg",
      "Bucket Capacity": "1.2 m³",
      "Max Digging Depth": "6.7 m",
      "Max Reach": "10.1 m",
      "Travel Speed": "5.5 km/h",
      "Fuel Tank": "400 L"
    },
    description: "This Caterpillar 320 Excavator is in excellent working condition with only 1,200 operating hours. Recently serviced with all maintenance records available. Features air conditioning, GPS tracking system, and hydraulic thumb attachment. Perfect for medium to large construction projects.",
    features: [
      "Air Conditioning",
      "GPS Tracking",
      "Hydraulic Thumb",
      "LED Lighting",
      "Backup Camera",
      "Quick Coupler"
    ],
    views: 234,
    listedDate: "2024-01-15"
  };

  const getConditionColor = (condition) => {
    switch (condition) {
      case 'New': return 'bg-green-100 text-green-800';
      case 'Used - Functional': return 'bg-blue-100 text-blue-800';
      case 'Used - Non-Functional': return 'bg-red-100 text-red-800';
      case 'Refurbished': return 'bg-purple-100 text-purple-800';
      case 'Parts Only': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/marketplace" className="hover:text-primary">Marketplace</Link>
          <span className="mx-2">/</span>
          <Link to={`/marketplace?category=${equipment.category}`} className="hover:text-primary">
            {equipment.category}
          </Link>
          <span className="mx-2">/</span>
          <span>{equipment.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-[4/3] relative">
                  <img
                    src={equipment.images[activeImage]}
                    alt={equipment.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getConditionColor(equipment.condition)}>
                      {equipment.condition}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => setIsFavorited(!isFavorited)}
                      className="bg-white/90 hover:bg-white"
                    >
                      <Heart className={`h-4 w-4 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2 p-4">
                  {equipment.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 ${
                        activeImage === index ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Equipment Details */}
            <Card>
              <CardHeader>
                <h1 className="text-3xl font-bold">{equipment.title}</h1>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{equipment.views} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Listed on {new Date(equipment.listedDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{equipment.location}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="specifications">Specifications</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="description" className="mt-4">
                    <p className="text-muted-foreground leading-relaxed">{equipment.description}</p>
                  </TabsContent>
                  
                  <TabsContent value="specifications" className="mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(equipment.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-border">
                          <span className="font-medium">{key}</span>
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="features" className="mt-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {equipment.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Price and Seller Info */}
          <div className="space-y-6">
            {/* Price Card */}
            <Card>
              <CardHeader>
                <div className="text-3xl font-bold text-primary">
                  ${equipment.price.toLocaleString()}
                </div>
                <p className="text-muted-foreground">
                  Year: {equipment.year} | Hours: {equipment.hours.toLocaleString()}
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" size="lg">
                  Contact Seller
                </Button>
                <Button variant="outline" className="w-full">
                  Request Quote
                </Button>
                <Button variant="outline" className="w-full">
                  Schedule Inspection
                </Button>
              </CardContent>
            </Card>

            {/* Seller Info */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Seller Information</h3>
                  {equipment.seller.verified && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium">{equipment.seller.name}</h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(equipment.seller.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {equipment.seller.rating} ({equipment.seller.totalReviews} reviews)
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Member since:</span>
                    <span>{equipment.seller.memberSince}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Response time:</span>
                    <span>{equipment.seller.responseTime}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Seller
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Safety Tips */}
            <Card>
              <CardHeader>
                <h3 className="font-semibold text-orange-600">Safety Tips</h3>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Always inspect equipment in person before purchase</p>
                <p>• Verify seller credentials and business registration</p>
                <p>• Use secure payment methods</p>
                <p>• Request maintenance records and certificates</p>
                <p>• Consider third-party inspection services</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EquipmentDetails;
