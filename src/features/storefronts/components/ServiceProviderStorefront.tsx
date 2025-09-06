import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, MapPin, Phone, Mail, Globe, Clock, Users, Award } from 'lucide-react';

interface ServiceProviderStorefrontProps {
  provider: {
    id: string;
    name: string;
    logo?: string;
    description: string;
    location: string;
    rating: number;
    reviewCount: number;
    verified: boolean;
    contact: {
      phone: string;
      email: string;
      website?: string;
    };
    services: Array<{
      id: string;
      name: string;
      category: string;
      description: string;
      price: string;
      duration: string;
      available: boolean;
    }>;
    specialties: string[];
    certifications: string[];
    businessHours: string;
    responseTime: string;
    teamSize: number;
    projectsCompleted: number;
    portfolio: Array<{
      id: string;
      title: string;
      description: string;
      image: string;
      category: string;
      completedDate: string;
    }>;
  };
}

const ServiceProviderStorefront: React.FC<ServiceProviderStorefrontProps> = ({ provider }) => {
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string>('all');

  const filteredServices = selectedServiceCategory === 'all' 
    ? provider.services 
    : provider.services.filter(service => service.category === selectedServiceCategory);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header Section */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center">
                {provider.logo ? (
                  <img src={provider.logo} alt={provider.name} className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <div className="text-2xl font-bold text-muted-foreground">
                    {provider.name.charAt(0)}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold">{provider.name}</h1>
                {provider.verified && (
                  <Badge variant="secondary">Verified Provider</Badge>
                )}
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{provider.rating}</span>
                  <span className="text-muted-foreground">({provider.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{provider.location}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Responds in {provider.responseTime}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">{provider.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {provider.specialties.map((specialty) => (
                  <Badge key={specialty} variant="outline">{specialty}</Badge>
                ))}
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-center">
                <div>
                  <div className="font-bold text-lg">{provider.projectsCompleted}+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="font-bold text-lg">{provider.teamSize}</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
                <div>
                  <div className="font-bold text-lg">{provider.rating}</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
                <div>
                  <div className="font-bold text-lg">{provider.responseTime}</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button>
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
                <Button variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Get Quote
                </Button>
                <Button variant="outline">Book Service</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="services" className="w-full">
        <TabsList>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
        </TabsList>
        
        <TabsContent value="services" className="space-y-4">
          {/* Service Filters */}
          <div className="flex gap-2 items-center flex-wrap">
            <Button
              variant={selectedServiceCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedServiceCategory('all')}
            >
              All Services
            </Button>
            {Array.from(new Set(provider.services.map(s => s.category))).map((category) => (
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredServices.map((service) => (
              <Card key={service.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                      <CardDescription>{service.category}</CardDescription>
                    </div>
                    <Badge variant={service.available ? "secondary" : "destructive"}>
                      {service.available ? 'Available' : 'Unavailable'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="font-bold text-lg">{service.price}</div>
                      <div className="text-sm text-muted-foreground">Duration: {service.duration}</div>
                    </div>
                    <Button disabled={!service.available}>
                      {service.available ? 'Book Service' : 'Contact for Availability'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="portfolio" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {provider.portfolio.map((project) => (
              <Card key={project.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-video bg-muted rounded-lg mb-3 flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium line-clamp-2">{project.title}</h3>
                      <Badge variant="outline" className="text-xs">{project.category}</Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                    
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Completed: {project.completedDate}</span>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="about" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>About Our Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{provider.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Business Hours</h4>
                  <p className="text-muted-foreground">{provider.businessHours}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Service Area</h4>
                  <p className="text-muted-foreground">{provider.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="certifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Certifications & Qualifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {provider.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 border rounded-lg">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ServiceProviderStorefront;