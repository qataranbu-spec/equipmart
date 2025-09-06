import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, MapPin, Phone, Mail, Globe, Clock, BookOpen, Award, Users } from 'lucide-react';

interface ExpertStorefrontProps {
  expert: {
    id: string;
    name: string;
    title: string;
    photo?: string;
    description: string;
    location: string;
    rating: number;
    reviewCount: number;
    verified: boolean;
    contact: {
      phone: string;
      email: string;
      website?: string;
      linkedin?: string;
    };
    expertise: string[];
    services: Array<{
      id: string;
      name: string;
      category: string;
      description: string;
      duration: string;
      price: string;
      deliveryMethod: 'remote' | 'on-site' | 'both';
      available: boolean;
    }>;
    experience: Array<{
      title: string;
      company: string;
      duration: string;
      description: string;
    }>;
    education: Array<{
      degree: string;
      institution: string;
      year: string;
    }>;
    certifications: string[];
    languages: string[];
    availability: string;
    responseTime: string;
    yearsExperience: number;
    consultationsCompleted: number;
    clientSatisfaction: string;
    hourlyRate: string;
  };
}

const ExpertStorefront: React.FC<ExpertStorefrontProps> = ({ expert }) => {
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string>('all');

  const filteredServices = selectedServiceCategory === 'all' 
    ? expert.services 
    : expert.services.filter(service => service.category === selectedServiceCategory);

  const getDeliveryMethodBadge = (method: string) => {
    switch (method) {
      case 'remote': return 'bg-blue-100 text-blue-800';
      case 'on-site': return 'bg-green-100 text-green-800';
      case 'both': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header Section */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center">
                {expert.photo ? (
                  <img src={expert.photo} alt={expert.name} className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <div className="text-3xl font-bold text-muted-foreground">
                    {expert.name.charAt(0)}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold">{expert.name}</h1>
                {expert.verified && (
                  <Badge variant="secondary">Verified Expert</Badge>
                )}
              </div>
              
              <h2 className="text-xl text-muted-foreground mb-2">{expert.title}</h2>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{expert.rating}</span>
                  <span className="text-muted-foreground">({expert.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{expert.location}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Responds in {expert.responseTime}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">{expert.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {expert.expertise.slice(0, 6).map((skill) => (
                  <Badge key={skill} variant="outline">{skill}</Badge>
                ))}
                {expert.expertise.length > 6 && (
                  <Badge variant="secondary">+{expert.expertise.length - 6} more</Badge>
                )}
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-center">
                <div>
                  <div className="font-bold text-lg">{expert.yearsExperience}+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="font-bold text-lg">{expert.consultationsCompleted}+</div>
                  <div className="text-sm text-muted-foreground">Consultations</div>
                </div>
                <div>
                  <div className="font-bold text-lg">{expert.clientSatisfaction}</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div>
                  <div className="font-bold text-lg">{expert.hourlyRate}</div>
                  <div className="text-sm text-muted-foreground">Hourly Rate</div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button>
                  <Phone className="h-4 w-4 mr-2" />
                  Book Consultation
                </Button>
                <Button variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <Button variant="outline">
                  <Clock className="h-4 w-4 mr-2" />
                  Check Availability
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="services" className="w-full">
        <TabsList>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="credentials">Credentials</TabsTrigger>
          <TabsTrigger value="availability">Availability</TabsTrigger>
        </TabsList>
        
        <TabsContent value="services" className="space-y-4">
          {/* Service Category Filters */}
          <div className="flex gap-2 items-center flex-wrap">
            <Button
              variant={selectedServiceCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedServiceCategory('all')}
            >
              All Services
            </Button>
            {Array.from(new Set(expert.services.map(s => s.category))).map((category) => (
              <Button
                key={category}
                variant={selectedServiceCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedServiceCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                      <CardDescription>{service.category}</CardDescription>
                    </div>
                    <div className="flex flex-col gap-1">
                      <Badge variant={service.available ? "secondary" : "destructive"}>
                        {service.available ? 'Available' : 'Booked'}
                      </Badge>
                      <Badge className={getDeliveryMethodBadge(service.deliveryMethod)} variant="outline">
                        {service.deliveryMethod === 'both' ? 'Remote/On-site' : service.deliveryMethod}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                      <div className="font-medium">{service.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Price</div>
                      <div className="font-bold text-lg">{service.price}</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1" disabled={!service.available}>
                      {service.available ? 'Book Now' : 'Join Waitlist'}
                    </Button>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="experience" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {expert.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-muted pl-4 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-lg">{exp.title}</h3>
                    <Badge variant="outline">{exp.duration}</Badge>
                  </div>
                  <div className="text-muted-foreground font-medium mb-2">{exp.company}</div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="credentials" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {expert.education.map((edu, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="font-medium">{edu.degree}</div>
                    <div className="text-muted-foreground">{edu.institution}</div>
                    <div className="text-sm text-muted-foreground">{edu.year}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {expert.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 border rounded">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-1">
                    {expert.languages.map((lang, index) => (
                      <Badge key={index} variant="outline">{lang}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Expertise Areas</h4>
                  <div className="flex flex-wrap gap-1">
                    {expert.expertise.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="availability" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Availability & Booking
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Current Availability</h4>
                  <p className="text-muted-foreground">{expert.availability}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Response Time</h4>
                  <p className="text-muted-foreground">{expert.responseTime}</p>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-4">Book a Consultation</h4>
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    Schedule a consultation to discuss your project needs and get expert advice.
                  </div>
                  <div className="flex gap-2">
                    <Button>Book 30min Call</Button>
                    <Button variant="outline">Book 60min Session</Button>
                    <Button variant="outline">Custom Consultation</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExpertStorefront;