
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, MapPin, Star, Shield } from 'lucide-react';

const BookEquipment = () => {
  const [rentalPeriod, setRentalPeriod] = useState('daily');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const equipment = {
    title: "Caterpillar 320 Excavator",
    hourlyRate: 150,
    dailyRate: 950,
    weeklyRate: 5500,
    location: "Dubai, UAE",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    supplier: "Heavy Equipment Rentals LLC"
  };

  const calculateTotal = () => {
    if (!startDate || !endDate) return 0;
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    
    switch (rentalPeriod) {
      case 'hourly':
        return days * 8 * equipment.hourlyRate; // Assuming 8 hours per day
      case 'daily':
        return days * equipment.dailyRate;
      case 'weekly':
        return Math.ceil(days / 7) * equipment.weeklyRate;
      default:
        return 0;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-secondary py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Book Equipment</h1>
          <p className="text-muted-foreground">Complete your rental booking</p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Equipment Details */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={equipment.image}
                    alt={equipment.title}
                    className="w-full md:w-64 h-48 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{equipment.title}</h2>
                    <p className="text-muted-foreground mb-4">{equipment.supplier}</p>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{equipment.rating}</span>
                        <span className="text-muted-foreground">({equipment.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{equipment.location}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Hourly Rate</p>
                        <p className="font-semibold">${equipment.hourlyRate}/hr</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Daily Rate</p>
                        <p className="font-semibold">${equipment.dailyRate}/day</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Weekly Rate</p>
                        <p className="font-semibold text-primary">${equipment.weeklyRate}/week</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Form */}
            <Card>
              <CardHeader>
                <CardTitle>Rental Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <Label htmlFor="endDate">End Date</Label>
                    <Input
                      id="endDate"
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      min={startDate || new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="rentalPeriod">Rental Period</Label>
                  <Select value={rentalPeriod} onValueChange={setRentalPeriod}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="deliveryAddress">Delivery Address</Label>
                    <Input id="deliveryAddress" placeholder="Enter delivery address" />
                  </div>
                  <div>
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="construction">Construction</SelectItem>
                        <SelectItem value="excavation">Excavation</SelectItem>
                        <SelectItem value="demolition">Demolition</SelectItem>
                        <SelectItem value="landscaping">Landscaping</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="specialRequirements">Special Requirements</Label>
                  <Input id="specialRequirements" placeholder="Any special requirements or notes" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Equipment:</span>
                  <span className="font-semibold">{equipment.title}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Rental Period:</span>
                  <span className="font-semibold capitalize">{rentalPeriod}</span>
                </div>
                
                {startDate && endDate && (
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-semibold">
                      {Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24))} days
                    </span>
                  </div>
                )}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Cost:</span>
                    <span className="text-primary">${calculateTotal().toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4" />
                    <span>Fully insured equipment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>24/7 technical support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Flexible cancellation</span>
                  </div>
                </div>

                <Button className="w-full" size="lg" disabled={!startDate || !endDate}>
                  Confirm Booking
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By booking, you agree to our Terms & Conditions
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

export default BookEquipment;
