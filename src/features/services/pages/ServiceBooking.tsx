import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar,
  Clock,
  MapPin,
  Star,
  Shield,
  CheckCircle,
  AlertCircle,
  DollarSign,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react';
import { useParams } from 'react-router-dom';

const ServiceBooking = () => {
  const { providerId } = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [duration, setDuration] = useState('');
  const [equipmentDetails, setEquipmentDetails] = useState('');
  const [location, setLocation] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');

  // Mock provider data - in real app, this would come from API
  const provider = {
    id: '1',
    name: 'Gulf Technical Services',
    avatar: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=face',
    specialization: 'Heavy Equipment Maintenance',
    rating: 4.9,
    reviews: 234,
    location: 'Dubai, UAE',
    experience: '15+ years',
    verified: true,
    responseTime: '2 hours',
    hourlyRate: 75,
    availability: 'available' as const,
    services: ['Equipment Maintenance', 'Emergency Repair', 'Installation', 'Inspection'],
    certifications: ['ISO 9001', 'OSHA Certified', 'UAE Trade License'],
    completedJobs: 1250,
    description: 'Specialized in heavy equipment maintenance and repair with over 15 years of experience. We provide 24/7 emergency services and have a team of certified technicians.',
    businessHours: '6:00 AM - 10:00 PM',
    phoneNumber: '+971 50 123 4567',
    email: 'info@gulftechnical.ae'
  };

  const availableTimes = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const serviceTypes = [
    { name: 'Routine Maintenance', rate: 75, description: 'Regular equipment servicing and checks' },
    { name: 'Emergency Repair', rate: 120, description: 'Urgent repair services for equipment breakdowns' },
    { name: 'Installation Service', rate: 90, description: 'Professional equipment installation and setup' },
    { name: 'Technical Inspection', rate: 65, description: 'Comprehensive equipment safety inspections' }
  ];

  const calculateEstimatedCost = () => {
    const selectedService = serviceTypes.find(s => s.name === serviceType);
    const rate = selectedService?.rate || provider.hourlyRate;
    const hours = parseInt(duration) || 1;
    return rate * hours;
  };

  const handleBooking = () => {
    // Handle booking logic here
    console.log('Booking details:', {
      providerId,
      selectedDate,
      selectedTime,
      serviceType,
      duration,
      equipmentDetails,
      location,
      additionalNotes,
      estimatedCost: calculateEstimatedCost()
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Book Service</h1>
            <p className="text-muted-foreground">Schedule a service with this provider</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Provider Info */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={provider.avatar} />
                      <AvatarFallback>GT</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{provider.name}</h3>
                      <p className="text-muted-foreground">{provider.specialization}</p>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-medium">{provider.rating}</span>
                        <span className="text-muted-foreground text-sm ml-1">({provider.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Base Rate</span>
                    <span className="font-semibold">${provider.hourlyRate}/hour</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Response Time</span>
                    <span className="font-semibold">{provider.responseTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Experience</span>
                    <span className="font-semibold">{provider.experience}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Location</span>
                    <span className="font-semibold">{provider.location}</span>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium mb-2">Services Offered</h4>
                    <div className="flex flex-wrap gap-2">
                      {provider.services.map((service, index) => (
                        <Badge key={index} variant="secondary">{service}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Certifications</h4>
                    <div className="space-y-2">
                      {provider.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <Shield className="h-4 w-4 text-green-600 mr-2" />
                          {cert}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                      {provider.phoneNumber}
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                      {provider.email}
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      {provider.businessHours}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message Provider
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Schedule Your Service</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Service Type Selection */}
                  <div>
                    <Label className="text-base font-medium">Service Type</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                      {serviceTypes.map((service) => (
                        <Card 
                          key={service.name}
                          className={`cursor-pointer transition-all ${
                            serviceType === service.name 
                              ? 'ring-2 ring-primary bg-primary/5' 
                              : 'hover:bg-muted/50'
                          }`}
                          onClick={() => setServiceType(service.name)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{service.name}</h4>
                              <span className="font-semibold">${service.rate}/hr</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Date and Time Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Preferred Time</Label>
                      <select 
                        className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md mt-2"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                      >
                        <option value="">Select time</option>
                        {availableTimes.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Duration */}
                  <div>
                    <Label htmlFor="duration">Estimated Duration (hours)</Label>
                    <Input
                      id="duration"
                      type="number"
                      min="1"
                      max="12"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      placeholder="e.g., 2"
                      className="mt-2"
                    />
                  </div>

                  {/* Equipment Details */}
                  <div>
                    <Label htmlFor="equipment">Equipment Details</Label>
                    <Textarea
                      id="equipment"
                      value={equipmentDetails}
                      onChange={(e) => setEquipmentDetails(e.target.value)}
                      placeholder="Specify the equipment type, model, year, and current issues (if any)"
                      className="mt-2"
                      rows={3}
                    />
                  </div>

                  {/* Service Location */}
                  <div>
                    <Label htmlFor="location">Service Location</Label>
                    <Input
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Full address where service is needed"
                      className="mt-2"
                    />
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      placeholder="Any specific requirements, access instructions, or additional information"
                      className="mt-2"
                      rows={3}
                    />
                  </div>

                  {/* Cost Estimation */}
                  {serviceType && duration && (
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium flex items-center">
                              <DollarSign className="h-4 w-4 mr-1" />
                              Estimated Cost
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {serviceType} • {duration} hour(s)
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold">${calculateEstimatedCost()}</p>
                            <p className="text-sm text-muted-foreground">Final cost may vary</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Important Notes */}
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-blue-900">Important Information</h4>
                          <ul className="text-sm text-blue-800 mt-1 space-y-1">
                            <li>• Service provider will contact you to confirm availability</li>
                            <li>• Payment is due after service completion</li>
                            <li>• Cancellation is free up to 24 hours before scheduled time</li>
                            <li>• Emergency services may incur additional charges</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button 
                      onClick={handleBooking}
                      className="flex-1"
                      disabled={!selectedDate || !selectedTime || !serviceType || !duration || !location}
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Book Service
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message First
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceBooking;