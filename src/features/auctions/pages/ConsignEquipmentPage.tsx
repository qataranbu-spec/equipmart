
import React, { useState } from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, DollarSign, Calendar, Truck, Shield } from 'lucide-react';

const ConsignEquipment = () => {
  const [reservePrice, setReservePrice] = useState('');
  const [auctionDuration, setAuctionDuration] = useState('');

  const benefits = [
    {
      icon: DollarSign,
      title: "Maximize Your Returns",
      description: "Our auction platform typically achieves 95-105% of market value for quality equipment."
    },
    {
      icon: Calendar,
      title: "Flexible Timing",
      description: "Choose when to list your equipment with our flexible auction scheduling."
    },
    {
      icon: Truck,
      title: "Full Service Support",
      description: "We handle inspection, photography, marketing, and logistics for you."
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Guaranteed payment and secure transaction processing for all sales."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-secondary py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Consign Your Equipment</h1>
          <p className="text-muted-foreground">Get the best value for your equipment through our auction platform</p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Consignment Form */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Equipment Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="manufacturer">Manufacturer</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select manufacturer" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="caterpillar">Caterpillar</SelectItem>
                        <SelectItem value="komatsu">Komatsu</SelectItem>
                        <SelectItem value="liebherr">Liebherr</SelectItem>
                        <SelectItem value="volvo">Volvo</SelectItem>
                        <SelectItem value="john-deere">John Deere</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="model">Model</Label>
                    <Input id="model" placeholder="Enter equipment model" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="year">Year</Label>
                    <Input id="year" type="number" placeholder="2020" min="1990" max="2024" />
                  </div>
                  <div>
                    <Label htmlFor="hours">Hours</Label>
                    <Input id="hours" type="number" placeholder="1200" />
                  </div>
                  <div>
                    <Label htmlFor="serialNumber">Serial Number</Label>
                    <Input id="serialNumber" placeholder="Enter serial number" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="category">Equipment Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excavators">Excavators</SelectItem>
                      <SelectItem value="bulldozers">Bulldozers</SelectItem>
                      <SelectItem value="loaders">Loaders</SelectItem>
                      <SelectItem value="cranes">Cranes</SelectItem>
                      <SelectItem value="trucks">Trucks</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="condition">Condition</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                      <SelectItem value="poor">Poor</SelectItem>
                      <SelectItem value="parts-only">Parts Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide detailed information about your equipment, including condition, maintenance history, attachments, etc."
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="location">Current Location</Label>
                  <Input id="location" placeholder="City, Country" />
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Auction Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="reservePrice">Reserve Price (USD)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        id="reservePrice"
                        type="number"
                        value={reservePrice}
                        onChange={(e) => setReservePrice(e.target.value)}
                        placeholder="75000"
                        className="pl-8"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Minimum price you're willing to accept
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="auctionDuration">Auction Duration</Label>
                    <Select value={auctionDuration} onValueChange={setAuctionDuration}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-days">3 Days</SelectItem>
                        <SelectItem value="5-days">5 Days</SelectItem>
                        <SelectItem value="7-days">7 Days</SelectItem>
                        <SelectItem value="10-days">10 Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="startDate">Preferred Start Date</Label>
                  <Input
                    id="startDate"
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="h-5 w-5" />
                  <span>Equipment Photos</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Upload Photos</h3>
                  <p className="text-muted-foreground mb-4">
                    Add high-quality photos of your equipment. Include exterior, interior, and any damage.
                  </p>
                  <Button variant="outline">
                    Choose Files
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Maximum 20 photos, 10MB each. JPG, PNG formats supported.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits & Contact */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Why Consign With Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex space-x-3">
                    <benefit.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sm">{benefit.title}</h4>
                      <p className="text-xs text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Commission Structure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Sale Price</span>
                  <span className="text-sm font-semibold">Commission Rate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Up to $50,000</span>
                  <span className="text-sm">8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">$50,001 - $100,000</span>
                  <span className="text-sm">6%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">$100,001+</span>
                  <span className="text-sm">4%</span>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    No listing fees. Commission only charged on successful sales.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="contactName">Contact Name</Label>
                  <Input id="contactName" placeholder="Your full name" />
                </div>
                <div>
                  <Label htmlFor="contactEmail">Email</Label>
                  <Input id="contactEmail" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="contactPhone">Phone Number</Label>
                  <Input id="contactPhone" placeholder="+1 (555) 123-4567" />
                </div>
                
                <Button className="w-full" size="lg">
                  Submit Consignment Request
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Our team will review your submission and contact you within 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ConsignEquipment;
