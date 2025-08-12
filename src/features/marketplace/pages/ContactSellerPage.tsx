
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Star, Shield, Clock } from 'lucide-react';

const ContactSeller = () => {
  const [inquiryType, setInquiryType] = useState('');
  const [message, setMessage] = useState('');

  const seller = {
    name: "Heavy Equipment LLC",
    rating: 4.8,
    reviews: 156,
    verified: true,
    location: "Dubai, UAE",
    responseTime: "Usually responds within 2 hours",
    phone: "+971 4 123 4567",
    email: "sales@heavyequipment.ae",
    establishedYear: 2015,
    totalSales: 450
  };

  const equipment = {
    title: "Caterpillar 320 Excavator",
    price: 85000,
    condition: "Used - Functional",
    year: 2020,
    hours: 1200,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop"
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-secondary py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Contact Seller</h1>
          <p className="text-muted-foreground">Get in touch with the equipment seller</p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Equipment Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6 p-4 bg-secondary rounded-lg">
                  <img
                    src={equipment.image}
                    alt={equipment.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold">{equipment.title}</h3>
                    <p className="text-primary font-bold">${equipment.price.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">{equipment.condition} • {equipment.year} • {equipment.hours.toLocaleString()} hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Send Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="inquiryType">Inquiry Type</Label>
                  <Select value={inquiryType} onValueChange={setInquiryType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="purchase">Purchase Inquiry</SelectItem>
                      <SelectItem value="inspection">Inspection Request</SelectItem>
                      <SelectItem value="financing">Financing Options</SelectItem>
                      <SelectItem value="shipping">Shipping & Delivery</SelectItem>
                      <SelectItem value="technical">Technical Questions</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell the seller about your interest in this equipment..."
                    rows={6}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="newsletter" className="rounded" />
                  <Label htmlFor="newsletter" className="text-sm">
                    Subscribe to seller's newsletter for equipment updates
                  </Label>
                </div>

                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Seller Information */}
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{seller.name}</CardTitle>
                  {seller.verified && (
                    <Shield className="h-5 w-5 text-green-600" />
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{seller.rating}</span>
                  <span className="text-muted-foreground">({seller.reviews} reviews)</span>
                </div>

                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{seller.location}</span>
                </div>

                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{seller.responseTime}</span>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Established:</span>
                    <span className="font-semibold">{seller.establishedYear}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Sales:</span>
                    <span className="font-semibold">{seller.totalSales}+ units</span>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{seller.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{seller.email}</span>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" className="w-full">
                    View All Listings
                  </Button>
                  <Button variant="outline" className="w-full">
                    Call Seller
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactSeller;
