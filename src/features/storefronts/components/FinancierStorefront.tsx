import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, MapPin, Phone, Mail, Globe, DollarSign, Calendar, CheckCircle } from 'lucide-react';

interface FinancierStorefrontProps {
  financier: {
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
    products: Array<{
      id: string;
      name: string;
      type: 'loan' | 'lease' | 'rental' | 'insurance';
      description: string;
      interestRate: string;
      minAmount: number;
      maxAmount: number;
      term: string;
      requirements: string[];
      features: string[];
      processingTime: string;
      available: boolean;
    }>;
    specialties: string[];
    licenses: string[];
    businessHours: string;
    establishedYear: number;
    totalFunded: string;
    clientsServed: number;
    approvalRate: string;
    avgProcessingTime: string;
  };
}

const FinancierStorefront: React.FC<FinancierStorefrontProps> = ({ financier }) => {
  const [selectedProductType, setSelectedProductType] = useState<string>('all');

  const filteredProducts = selectedProductType === 'all' 
    ? financier.products 
    : financier.products.filter(product => product.type === selectedProductType);

  const getProductTypeColor = (type: string) => {
    switch (type) {
      case 'loan': return 'bg-blue-100 text-blue-800';
      case 'lease': return 'bg-green-100 text-green-800';
      case 'rental': return 'bg-orange-100 text-orange-800';
      case 'insurance': return 'bg-purple-100 text-purple-800';
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
                {financier.logo ? (
                  <img src={financier.logo} alt={financier.name} className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <div className="text-2xl font-bold text-muted-foreground">
                    {financier.name.charAt(0)}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold">{financier.name}</h1>
                {financier.verified && (
                  <Badge variant="secondary">Licensed Financier</Badge>
                )}
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{financier.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{financier.location}</span>
                </div>
                <span className="text-muted-foreground">Est. {financier.establishedYear}</span>
              </div>
              
              <p className="text-muted-foreground mb-4">{financier.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {financier.specialties.map((specialty) => (
                  <Badge key={specialty} variant="outline">{specialty}</Badge>
                ))}
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-center">
                <div>
                  <div className="font-bold text-lg">{financier.totalFunded}</div>
                  <div className="text-sm text-muted-foreground">Total Funded</div>
                </div>
                <div>
                  <div className="font-bold text-lg">{financier.clientsServed}+</div>
                  <div className="text-sm text-muted-foreground">Clients Served</div>
                </div>
                <div>
                  <div className="font-bold text-lg">{financier.approvalRate}</div>
                  <div className="text-sm text-muted-foreground">Approval Rate</div>
                </div>
                <div>
                  <div className="font-bold text-lg">{financier.avgProcessingTime}</div>
                  <div className="text-sm text-muted-foreground">Avg Processing</div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button>
                  <Phone className="h-4 w-4 mr-2" />
                  Apply Now
                </Button>
                <Button variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Get Pre-Qualified
                </Button>
                <Button variant="outline">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Calculate Payment
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="products" className="w-full">
        <TabsList>
          <TabsTrigger value="products">Financing Products</TabsTrigger>
          <TabsTrigger value="calculator">Payment Calculator</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="licenses">Licenses</TabsTrigger>
        </TabsList>
        
        <TabsContent value="products" className="space-y-4">
          {/* Product Type Filters */}
          <div className="flex gap-2 items-center flex-wrap">
            <Button
              variant={selectedProductType === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedProductType('all')}
            >
              All Products
            </Button>
            {Array.from(new Set(financier.products.map(p => p.type))).map((type) => (
              <Button
                key={type}
                variant={selectedProductType === type ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedProductType(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}s
              </Button>
            ))}
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Badge className={getProductTypeColor(product.type)}>
                          {product.type.charAt(0).toUpperCase() + product.type.slice(1)}
                        </Badge>
                      </CardDescription>
                    </div>
                    <Badge variant={product.available ? "secondary" : "destructive"}>
                      {product.available ? 'Available' : 'Limited'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{product.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Interest Rate</div>
                      <div className="font-bold text-lg">{product.interestRate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Processing Time</div>
                      <div className="font-medium">{product.processingTime}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Min Amount</div>
                      <div className="font-medium">${product.minAmount.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Max Amount</div>
                      <div className="font-medium">${product.maxAmount.toLocaleString()}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Requirements</h4>
                    <ul className="space-y-1">
                      {product.requirements.map((req, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1" disabled={!product.available}>
                      Apply Now
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
              <CardTitle>Payment Calculator</CardTitle>
              <CardDescription>Calculate your monthly payments for equipment financing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                Payment calculator functionality will be implemented here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="about" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>About {financier.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{financier.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Business Hours</h4>
                  <p className="text-muted-foreground">{financier.businessHours}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Service Area</h4>
                  <p className="text-muted-foreground">{financier.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="licenses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Licenses & Regulatory Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {financier.licenses.map((license, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 border rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-medium">{license}</span>
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

export default FinancierStorefront;