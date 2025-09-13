import React, { useState } from 'react';
import { Search, Filter, Package, Truck, Shield, Clock, Star, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface SparePart {
  id: string;
  partNumber: string;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  type: 'OEM' | 'Aftermarket' | 'Refurbished';
  compatibility: string[];
  price: number;
  availability: 'in-stock' | 'limited' | 'out-of-stock' | 'on-order';
  quantity: number;
  supplier: {
    id: string;
    name: string;
    location: string;
    rating: number;
    verified: boolean;
    responseTime: string;
  };
  specifications: Record<string, string>;
  images: string[];
  warranty: string;
  leadTime: string;
  minOrderQuantity: number;
}

interface RFQRequest {
  partNumber: string;
  partName: string;
  brand: string;
  quantity: number;
  targetPrice: number;
  urgency: 'low' | 'medium' | 'high' | 'urgent';
  specifications: string;
  deliveryLocation: string;
  requiredBy: string;
}

const SparePartsMarketplace: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [partType, setPartType] = useState<'all' | 'OEM' | 'Aftermarket' | 'Refurbished'>('all');
  const [availability, setAvailability] = useState('all');
  const [isRFQDialogOpen, setIsRFQDialogOpen] = useState(false);
  const [rfqData, setRFQData] = useState<RFQRequest>({
    partNumber: '',
    partName: '',
    brand: '',
    quantity: 1,
    targetPrice: 0,
    urgency: 'medium',
    specifications: '',
    deliveryLocation: '',
    requiredBy: ''
  });

  // Mock data for spare parts
  const spareParts: SparePart[] = [
    {
      id: '1',
      partNumber: 'CAT-123456',
      name: 'Hydraulic Filter',
      brand: 'Caterpillar',
      category: 'Filters',
      subcategory: 'Hydraulic Filters',
      type: 'OEM',
      compatibility: ['CAT 320D', 'CAT 325D', 'CAT 330D'],
      price: 89.99,
      availability: 'in-stock',
      quantity: 25,
      supplier: {
        id: '1',
        name: 'Heavy Equipment Parts Co.',
        location: 'Houston, TX',
        rating: 4.8,
        verified: true,
        responseTime: '< 2 hours'
      },
      specifications: {
        'Height': '6.5 inches',
        'Outer Diameter': '4.2 inches',
        'Thread': '1-14 UNF-2B',
        'Material': 'Steel'
      },
      images: ['/placeholder.svg'],
      warranty: '12 months',
      leadTime: '1-2 business days',
      minOrderQuantity: 1
    },
    {
      id: '2',
      partNumber: 'KOM-789012',
      name: 'Track Chain Assembly',
      brand: 'Komatsu',
      category: 'Undercarriage',
      subcategory: 'Track Chains',
      type: 'Aftermarket',
      compatibility: ['PC200-8', 'PC220-8', 'PC240-8'],
      price: 2499.99,
      availability: 'limited',
      quantity: 3,
      supplier: {
        id: '2',
        name: 'Global Parts Distributor',
        location: 'Los Angeles, CA',
        rating: 4.6,
        verified: true,
        responseTime: '< 4 hours'
      },
      specifications: {
        'Length': '40 links',
        'Pin Diameter': '35mm',
        'Pitch': '216mm',
        'Material': 'Hardened Steel'
      },
      images: ['/placeholder.svg'],
      warranty: '6 months',
      leadTime: '3-5 business days',
      minOrderQuantity: 1
    },
    {
      id: '3',
      partNumber: 'JD-345678',
      name: 'Engine Air Filter',
      brand: 'John Deere',
      category: 'Filters',
      subcategory: 'Air Filters',
      type: 'OEM',
      compatibility: ['644K', '724K', '744K'],
      price: 45.99,
      availability: 'in-stock',
      quantity: 50,
      supplier: {
        id: '3',
        name: 'Midwest Heavy Parts',
        location: 'Chicago, IL',
        rating: 4.9,
        verified: true,
        responseTime: '< 1 hour'
      },
      specifications: {
        'Length': '12.5 inches',
        'Width': '8.2 inches',
        'Height': '2.1 inches',
        'Material': 'Pleated Paper'
      },
      images: ['/placeholder.svg'],
      warranty: '6 months',
      leadTime: 'Same day',
      minOrderQuantity: 1
    }
  ];

  const categories = ['All', 'Engine Parts', 'Filters', 'Hydraulics', 'Undercarriage', 'Electrical', 'Cooling System', 'Transmission'];
  const brands = ['All', 'Caterpillar', 'Komatsu', 'John Deere', 'Volvo', 'Hitachi', 'Liebherr', 'Case'];

  const filteredParts = spareParts.filter(part => {
    const matchesSearch = part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         part.partNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         part.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || part.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesBrand = selectedBrand === 'all' || part.brand.toLowerCase() === selectedBrand.toLowerCase();
    const matchesType = partType === 'all' || part.type === partType;
    const matchesAvailability = availability === 'all' || part.availability === availability;

    return matchesSearch && matchesCategory && matchesBrand && matchesType && matchesAvailability;
  });

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'in-stock': return 'bg-primary/10 text-primary border-primary/20';
      case 'limited': return 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20';
      case 'out-of-stock': return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'on-order': return 'bg-blue-500/10 text-blue-700 border-blue-500/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'OEM': return 'bg-green-500/10 text-green-700 border-green-500/20';
      case 'Aftermarket': return 'bg-blue-500/10 text-blue-700 border-blue-500/20';
      case 'Refurbished': return 'bg-purple-500/10 text-purple-700 border-purple-500/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const handleRFQSubmit = () => {
    console.log('RFQ submitted:', rfqData);
    setIsRFQDialogOpen(false);
    // Reset form
    setRFQData({
      partNumber: '',
      partName: '',
      brand: '',
      quantity: 1,
      targetPrice: 0,
      urgency: 'medium',
      specifications: '',
      deliveryLocation: '',
      requiredBy: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Spare Parts Marketplace
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Find OEM and aftermarket parts for construction equipment from verified suppliers worldwide
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Package className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">50K+</p>
                      <p className="text-sm text-muted-foreground">Parts Available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">500+</p>
                      <p className="text-sm text-muted-foreground">Verified Suppliers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">&lt; 1 Day</p>
                      <p className="text-sm text-muted-foreground">Avg Lead Time</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Star className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">4.8/5</p>
                      <p className="text-sm text-muted-foreground">Avg Rating</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4 items-end">
                  <div className="flex-1">
                    <Label htmlFor="search">Search Parts</Label>
                    <Input
                      id="search"
                      placeholder="Enter part number, name, or brand"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div className="w-full lg:w-48">
                    <Label htmlFor="category">Category</Label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category} value={category.toLowerCase()}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full lg:w-48">
                    <Label htmlFor="brand">Brand</Label>
                    <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {brands.map(brand => (
                          <SelectItem key={brand} value={brand.toLowerCase()}>
                            {brand}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full lg:w-48">
                    <Label htmlFor="type">Type</Label>
                    <Select value={partType} onValueChange={(value: any) => setPartType(value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="OEM">OEM</SelectItem>
                        <SelectItem value="Aftermarket">Aftermarket</SelectItem>
                        <SelectItem value="Refurbished">Refurbished</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full lg:w-48">
                    <Label htmlFor="availability">Availability</Label>
                    <Select value={availability} onValueChange={setAvailability}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="in-stock">In Stock</SelectItem>
                        <SelectItem value="limited">Limited</SelectItem>
                        <SelectItem value="on-order">On Order</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Dialog open={isRFQDialogOpen} onOpenChange={setIsRFQDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline">
                        Create RFQ
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Request for Quotation</DialogTitle>
                        <DialogDescription>
                          Can't find what you're looking for? Submit an RFQ and let suppliers come to you.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="rfq-part-number">Part Number</Label>
                            <Input
                              id="rfq-part-number"
                              value={rfqData.partNumber}
                              onChange={(e) => setRFQData({...rfqData, partNumber: e.target.value})}
                              placeholder="e.g., CAT-123456"
                            />
                          </div>
                          <div>
                            <Label htmlFor="rfq-part-name">Part Name</Label>
                            <Input
                              id="rfq-part-name"
                              value={rfqData.partName}
                              onChange={(e) => setRFQData({...rfqData, partName: e.target.value})}
                              placeholder="e.g., Hydraulic Filter"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="rfq-brand">Brand</Label>
                            <Input
                              id="rfq-brand"
                              value={rfqData.brand}
                              onChange={(e) => setRFQData({...rfqData, brand: e.target.value})}
                              placeholder="e.g., Caterpillar"
                            />
                          </div>
                          <div>
                            <Label htmlFor="rfq-quantity">Quantity</Label>
                            <Input
                              id="rfq-quantity"
                              type="number"
                              value={rfqData.quantity}
                              onChange={(e) => setRFQData({...rfqData, quantity: parseInt(e.target.value)})}
                              min="1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="rfq-target-price">Target Price ($)</Label>
                            <Input
                              id="rfq-target-price"
                              type="number"
                              value={rfqData.targetPrice}
                              onChange={(e) => setRFQData({...rfqData, targetPrice: parseFloat(e.target.value)})}
                              min="0"
                              step="0.01"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="rfq-urgency">Urgency</Label>
                            <Select value={rfqData.urgency} onValueChange={(value: any) => setRFQData({...rfqData, urgency: value})}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="low">Low</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="high">High</SelectItem>
                                <SelectItem value="urgent">Urgent</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="rfq-required-by">Required By</Label>
                            <Input
                              id="rfq-required-by"
                              type="date"
                              value={rfqData.requiredBy}
                              onChange={(e) => setRFQData({...rfqData, requiredBy: e.target.value})}
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="rfq-delivery-location">Delivery Location</Label>
                          <Input
                            id="rfq-delivery-location"
                            value={rfqData.deliveryLocation}
                            onChange={(e) => setRFQData({...rfqData, deliveryLocation: e.target.value})}
                            placeholder="City, State or ZIP"
                          />
                        </div>
                        <div>
                          <Label htmlFor="rfq-specifications">Specifications & Notes</Label>
                          <Textarea
                            id="rfq-specifications"
                            value={rfqData.specifications}
                            onChange={(e) => setRFQData({...rfqData, specifications: e.target.value})}
                            placeholder="Additional specifications, compatibility requirements, or special notes..."
                            rows={3}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setIsRFQDialogOpen(false)}>
                          Cancel
                        </Button>
                        <Button onClick={handleRFQSubmit}>
                          Submit RFQ
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>

            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">
                {filteredParts.length} parts found
              </h2>
              <Select defaultValue="relevance">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="brand">Brand A-Z</SelectItem>
                  <SelectItem value="availability">Availability</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Parts Grid */}
            <div className="grid gap-6">
              {filteredParts.map((part) => (
                <Card key={part.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Part Image */}
                      <div className="w-full lg:w-48 h-32 bg-muted rounded-lg flex items-center justify-center">
                        <Package className="h-16 w-16 text-muted-foreground" />
                      </div>

                      {/* Part Details */}
                      <div className="flex-1 space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-semibold">{part.name}</h3>
                            <p className="text-muted-foreground">Part #: {part.partNumber}</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge className={getTypeColor(part.type)} variant="outline">
                                {part.type}
                              </Badge>
                              <Badge variant="outline">{part.brand}</Badge>
                              <Badge variant="outline">{part.category}</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold">${part.price.toFixed(2)}</p>
                            <Badge className={getAvailabilityColor(part.availability)} variant="outline">
                              {part.availability.replace('-', ' ')}
                            </Badge>
                            <p className="text-sm text-muted-foreground mt-1">
                              {part.quantity} in stock
                            </p>
                          </div>
                        </div>

                        {/* Compatibility */}
                        <div>
                          <h4 className="font-medium mb-2">Compatible with:</h4>
                          <div className="flex flex-wrap gap-1">
                            {part.compatibility.map((model, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {model}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Supplier Info */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="font-medium">{part.supplier.name}</span>
                                {part.supplier.verified && <Shield className="h-4 w-4 text-primary" />}
                              </div>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <MapPin className="h-3 w-3" />
                                  <span>{part.supplier.location}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Star className="h-3 w-3" />
                                  <span>{part.supplier.rating}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{part.supplier.responseTime}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Inquiry
                            </Button>
                            <Button variant="outline" size="sm">
                              <Phone className="h-4 w-4 mr-2" />
                              Call
                            </Button>
                            <Button size="sm">
                              Get Quote
                            </Button>
                          </div>
                        </div>

                        {/* Additional Info */}
                        <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t">
                          <div className="flex items-center space-x-4">
                            <span>Warranty: {part.warranty}</span>
                            <span>Lead time: {part.leadTime}</span>
                            <span>MOQ: {part.minOrderQuantity}</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
  );
};

export default SparePartsMarketplace;