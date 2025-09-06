import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, MapPin, Phone, Mail, Globe, Filter } from 'lucide-react';

interface SupplierStorefrontProps {
  supplier: {
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
    categories: string[];
    products: Array<{
      id: string;
      name: string;
      category: string;
      price: number;
      image: string;
      inStock: boolean;
      description: string;
    }>;
    certifications: string[];
    businessHours: string;
    establishedYear: number;
  };
}

const SupplierStorefront: React.FC<SupplierStorefrontProps> = ({ supplier }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all' 
    ? supplier.products 
    : supplier.products.filter(product => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header Section */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center">
                {supplier.logo ? (
                  <img src={supplier.logo} alt={supplier.name} className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <div className="text-2xl font-bold text-muted-foreground">
                    {supplier.name.charAt(0)}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold">{supplier.name}</h1>
                {supplier.verified && (
                  <Badge variant="secondary">Verified</Badge>
                )}
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{supplier.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{supplier.location}</span>
                </div>
                <span className="text-muted-foreground">Est. {supplier.establishedYear}</span>
              </div>
              
              <p className="text-muted-foreground mb-4">{supplier.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {supplier.categories.map((category) => (
                  <Badge key={category} variant="outline">{category}</Badge>
                ))}
              </div>
              
              <div className="flex gap-2">
                <Button>
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </Button>
                <Button variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Message
                </Button>
                {supplier.contact.website && (
                  <Button variant="outline">
                    <Globe className="h-4 w-4 mr-2" />
                    Website
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="products" className="w-full">
        <TabsList>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
          <TabsTrigger value="contact">Contact Info</TabsTrigger>
        </TabsList>
        
        <TabsContent value="products" className="space-y-4">
          {/* Product Filters */}
          <div className="flex gap-2 items-center">
            <Filter className="h-4 w-4" />
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('all')}
            >
              All Products
            </Button>
            {Array.from(new Set(supplier.products.map(p => p.category))).map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-sm line-clamp-2">{product.name}</h3>
                      <Badge variant={product.inStock ? "secondary" : "destructive"} className="text-xs">
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </Badge>
                    </div>
                    
                    <p className="text-xs text-muted-foreground line-clamp-2">{product.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">${product.price.toLocaleString()}</span>
                      <Button size="sm" disabled={!product.inStock}>
                        {product.inStock ? 'Inquire' : 'Notify Me'}
                      </Button>
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
              <CardTitle>About Our Company</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{supplier.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Business Hours</h4>
                  <p className="text-muted-foreground">{supplier.businessHours}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Established</h4>
                  <p className="text-muted-foreground">{supplier.establishedYear}</p>
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
                {supplier.certifications.map((cert, index) => (
                  <Badge key={index} variant="outline" className="p-2 justify-center">
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{supplier.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>{supplier.contact.email}</span>
                  </div>
                  {supplier.contact.website && (
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span>{supplier.contact.website}</span>
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-medium mb-2">Location</h4>
                  <p className="text-muted-foreground">{supplier.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SupplierStorefront;