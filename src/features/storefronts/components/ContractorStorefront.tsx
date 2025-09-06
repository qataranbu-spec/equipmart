import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, MapPin, Phone, Mail, Globe, Users, Calendar, Award, Briefcase } from 'lucide-react';

interface ContractorStorefrontProps {
  contractor: {
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
      priceRange: string;
      duration: string;
      equipment: string[];
    }>;
    specialties: string[];
    certifications: string[];
    licenses: string[];
    businessHours: string;
    establishedYear: number;
    teamSize: number;
    projectsCompleted: number;
    serviceRadius: string;
    portfolio: Array<{
      id: string;
      title: string;
      description: string;
      category: string;
      image: string;
      completedDate: string;
      client: string;
      value: string;
    }>;
    equipment: Array<{
      id: string;
      name: string;
      type: string;
      specifications: string[];
    }>;
  };
}

const ContractorStorefront: React.FC<ContractorStorefrontProps> = ({ contractor }) => {
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string>('all');

  const filteredServices = selectedServiceCategory === 'all' 
    ? contractor.services 
    : contractor.services.filter(service => service.category === selectedServiceCategory);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header Section */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center">
                {contractor.logo ? (
                  <img src={contractor.logo} alt={contractor.name} className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <div className="text-2xl font-bold text-muted-foreground">
                    {contractor.name.charAt(0)}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold">{contractor.name}</h1>
                {contractor.verified && (
                  <Badge variant="secondary">Licensed Contractor</Badge>
                )}
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{contractor.rating}</span>
                  <span className="text-muted-foreground">({contractor.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{contractor.location}</span>
                </div>
                <span className="text-muted-foreground">Est. {contractor.establishedYear}</span>
              </div>
              
              <p className="text-muted-foreground mb-4">{contractor.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {contractor.specialties.map((specialty) => (
                  <Badge key={specialty} variant="outline">{specialty}</Badge>
                ))}
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-center">
                <div>
                  <div className="font-bold text-lg">{contractor.projectsCompleted}+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="font-bold text-lg">{contractor.teamSize}</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
                <div>
                  <div className="font-bold text-lg">{contractor.serviceRadius}</div>
                  <div className="text-sm text-muted-foreground">Service Radius</div>
                </div>
                <div>
                  <div className="font-bold text-lg">{contractor.rating}/5</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button>
                  <Phone className="h-4 w-4 mr-2" />
                  Get Quote
                </Button>
                <Button variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Message
                </Button>
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Consultation
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
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="equipment">Equipment</TabsTrigger>
          <TabsTrigger value="credentials">Credentials</TabsTrigger>
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
            {Array.from(new Set(contractor.services.map(s => s.category))).map((category) => (
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
                    <Badge variant="outline">{service.priceRange}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Typical Duration:</span>
                      <span className="text-sm font-medium">{service.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Price Range:</span>
                      <span className="text-sm font-medium">{service.priceRange}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Equipment Used</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.equipment.map((item, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">{item}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1">Request Quote</Button>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="portfolio" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contractor.portfolio.map((project) => (
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
                    
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Client:</span>
                        <span className="font-medium">{project.client}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Value:</span>
                        <span className="font-medium">{project.value}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Completed:</span>
                        <span className="font-medium">{project.completedDate}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      View Project Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="equipment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Our Equipment Fleet</CardTitle>
              <CardDescription>Professional-grade equipment for all your construction needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {contractor.equipment.map((item) => (
                  <Card key={item.id} className="hover:shadow-sm transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        <h3 className="font-medium">{item.name}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{item.type}</p>
                      <ul className="space-y-1">
                        {item.specifications.map((spec, index) => (
                          <li key={index} className="text-xs text-muted-foreground flex items-center gap-1">
                            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="credentials" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {contractor.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 border rounded">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge className="h-5 w-5" />
                  Licenses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {contractor.licenses.map((license, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 border rounded">
                      <Badge className="h-4 w-4 text-green-500" />
                      <span className="font-medium">{license}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Business Hours</h4>
                  <p className="text-muted-foreground">{contractor.businessHours}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Service Area</h4>
                  <p className="text-muted-foreground">{contractor.serviceRadius} from {contractor.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContractorStorefront;