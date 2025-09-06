import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, MapPin, Phone, Mail, Globe, Shield, Calculator, CheckCircle, AlertCircle } from 'lucide-react';

interface InsuranceProviderStorefrontProps {
  provider: {
    id: string;
    name: string;
    logo?: string;
    description: string;
    location: string;
    rating: number;
    verified: boolean;
    contact: {
      phone: string;
      email: string;
      website?: string;
    };
    policies: Array<{
      id: string;
      name: string;
      type: 'liability' | 'comprehensive' | 'equipment' | 'workers-comp';
      description: string;
      coverage: string[];
      exclusions: string[];
      premiumRange: string;
      deductible: string;
      available: boolean;
      features: string[];
    }>;
    specialties: string[];
    licenses: string[];
    businessHours: string;
    establishedYear: number;
    clientsServed: number;
    claimsProcessed: string;
    avgClaimTime: string;
    financialRating: string;
  };
}

const InsuranceProviderStorefront: React.FC<InsuranceProviderStorefrontProps> = ({ provider }) => {
  const [selectedPolicyType, setSelectedPolicyType] = useState<string>('all');

  const filteredPolicies = selectedPolicyType === 'all' 
    ? provider.policies 
    : provider.policies.filter(policy => policy.type === selectedPolicyType);

  const getPolicyTypeColor = (type: string) => {
    switch (type) {
      case 'liability': return 'bg-red-100 text-red-800';
      case 'comprehensive': return 'bg-blue-100 text-blue-800';
      case 'equipment': return 'bg-green-100 text-green-800';
      case 'workers-comp': return 'bg-orange-100 text-orange-800';
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
                  <Badge variant="secondary">Licensed Provider</Badge>
                )}
                <Badge variant="outline">{provider.financialRating} Rated</Badge>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{provider.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{provider.location}</span>
                </div>
                <span className="text-muted-foreground">Est. {provider.establishedYear}</span>
              </div>
              
              <p className="text-muted-foreground mb-4">{provider.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {provider.specialties.map((specialty) => (
                  <Badge key={specialty} variant="outline">{specialty}</Badge>
                ))}
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-center">
                <div>
                  <div className="font-bold text-lg">{provider.clientsServed.toLocaleString()}+</div>
                  <div className="text-sm text-muted-foreground">Clients Protected</div>
                </div>
                <div>
                  <div className="font-bold text-lg">{provider.claimsProcessed}</div>
                  <div className="text-sm text-muted-foreground">Claims Processed</div>
                </div>
                <div>
                  <div className="font-bold text-lg">{provider.avgClaimTime}</div>
                  <div className="text-sm text-muted-foreground">Avg Claim Time</div>
                </div>
                <div>
                  <div className="font-bold text-lg">{provider.financialRating}</div>
                  <div className="text-sm text-muted-foreground">Financial Rating</div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button>
                  <Shield className="h-4 w-4 mr-2" />
                  Get Quote
                </Button>
                <Button variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Agent
                </Button>
                <Button variant="outline">
                  <Calculator className="h-4 w-4 mr-2" />
                  Premium Calculator
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="policies" className="w-full">
        <TabsList>
          <TabsTrigger value="policies">Insurance Policies</TabsTrigger>
          <TabsTrigger value="calculator">Premium Calculator</TabsTrigger>
          <TabsTrigger value="claims">Claims Process</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
        </TabsList>
        
        <TabsContent value="policies" className="space-y-4">
          {/* Policy Type Filters */}
          <div className="flex gap-2 items-center flex-wrap">
            <Button
              variant={selectedPolicyType === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedPolicyType('all')}
            >
              All Policies
            </Button>
            {Array.from(new Set(provider.policies.map(p => p.type))).map((type) => (
              <Button
                key={type}
                variant={selectedPolicyType === type ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedPolicyType(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
              </Button>
            ))}
          </div>
          
          {/* Policies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredPolicies.map((policy) => (
              <Card key={policy.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{policy.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Badge className={getPolicyTypeColor(policy.type)}>
                          {policy.type.charAt(0).toUpperCase() + policy.type.slice(1).replace('-', ' ')}
                        </Badge>
                      </CardDescription>
                    </div>
                    <Badge variant={policy.available ? "secondary" : "destructive"}>
                      {policy.available ? 'Available' : 'Limited'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{policy.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Premium Range</div>
                      <div className="font-bold text-lg">{policy.premiumRange}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Deductible</div>
                      <div className="font-medium">{policy.deductible}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Coverage Includes
                    </h4>
                    <ul className="space-y-1">
                      {policy.coverage.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-orange-500" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {policy.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {policy.exclusions.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-2 text-orange-600">Important Exclusions</h4>
                      <ul className="space-y-1">
                        {policy.exclusions.map((exclusion, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <AlertCircle className="h-3 w-3 text-orange-500" />
                            {exclusion}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1" disabled={!policy.available}>
                      Get Quote
                    </Button>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="calculator" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Premium Calculator</CardTitle>
              <CardDescription>Calculate your insurance premiums based on your equipment and risk profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                Premium calculator functionality will be implemented here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="claims" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Claims Process</CardTitle>
              <CardDescription>How to file and track your insurance claims</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Report Incident</h3>
                  <p className="text-sm text-muted-foreground">Call our 24/7 claims hotline or file online</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Investigation</h3>
                  <p className="text-sm text-muted-foreground">Our adjusters review your claim and assess damages</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Settlement</h3>
                  <p className="text-sm text-muted-foreground">Receive your settlement within {provider.avgClaimTime}</p>
                </div>
              </div>
              
              <div className="flex gap-2 justify-center">
                <Button>File a Claim</Button>
                <Button variant="outline">Track Existing Claim</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="about" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>About {provider.name}</CardTitle>
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
                <div>
                  <h4 className="font-medium mb-2">Financial Rating</h4>
                  <p className="text-muted-foreground">{provider.financialRating}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Licenses</h4>
                  <div className="flex flex-wrap gap-1">
                    {provider.licenses.map((license, index) => (
                      <Badge key={index} variant="outline" className="text-xs">{license}</Badge>
                    ))}
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

export default InsuranceProviderStorefront;