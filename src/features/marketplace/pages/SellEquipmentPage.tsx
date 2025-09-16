
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, Camera, DollarSign, Users, TrendingUp, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SellEquipment = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    brand: '',
    model: '',
    year: '',
    hours: '',
    condition: '',
    price: '',
    location: '',
    description: '',
    contactName: '',
    contactEmail: '',
    contactPhone: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Listing Submitted",
      description: "Your equipment listing has been submitted for review. We'll contact you within 24 hours.",
    });
  };

  const benefits = [
    {
      icon: Users,
      title: "Reach Millions of Buyers",
      description: "Connect with buyers from around the world through our global marketplace"
    },
    {
      icon: DollarSign,
      title: "Get Best Prices",
      description: "Our auction system and competitive marketplace ensure you get the best value"
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Access real-time market data and pricing analytics for informed decisions"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Verified buyers, secure payments, and transaction protection"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Sell Your Construction Equipment</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of sellers on EQP+MART. List your equipment and reach millions of potential buyers worldwide.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <benefit.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Create Your Equipment Listing</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Basic Information</h3>
                    
                    <div>
                      <Label htmlFor="title">Listing Title *</Label>
                      <Input
                        id="title"
                        placeholder="e.g., 2019 CAT 320D Excavator - Excellent Condition"
                        value={formData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="category">Category *</Label>
                        <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="excavators">Excavators</SelectItem>
                            <SelectItem value="loaders">Loaders</SelectItem>
                            <SelectItem value="dozers">Dozers</SelectItem>
                            <SelectItem value="cranes">Cranes</SelectItem>
                            <SelectItem value="trucks">Trucks</SelectItem>
                            <SelectItem value="compactors">Compactors</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="brand">Brand *</Label>
                        <Select value={formData.brand} onValueChange={(value) => handleInputChange('brand', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select brand" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="caterpillar">Caterpillar</SelectItem>
                            <SelectItem value="komatsu">Komatsu</SelectItem>
                            <SelectItem value="volvo">Volvo</SelectItem>
                            <SelectItem value="jcb">JCB</SelectItem>
                            <SelectItem value="liebherr">Liebherr</SelectItem>
                            <SelectItem value="hitachi">Hitachi</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="model">Model *</Label>
                        <Input
                          id="model"
                          placeholder="e.g., 320D"
                          value={formData.model}
                          onChange={(e) => handleInputChange('model', e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="year">Year *</Label>
                        <Input
                          id="year"
                          placeholder="e.g., 2019"
                          value={formData.year}
                          onChange={(e) => handleInputChange('year', e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="hours">Operating Hours</Label>
                        <Input
                          id="hours"
                          placeholder="e.g., 2500"
                          value={formData.hours}
                          onChange={(e) => handleInputChange('hours', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="condition">Condition *</Label>
                        <Select value={formData.condition} onValueChange={(value) => handleInputChange('condition', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select condition" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="excellent">Excellent</SelectItem>
                            <SelectItem value="good">Good</SelectItem>
                            <SelectItem value="fair">Fair</SelectItem>
                            <SelectItem value="poor">Poor</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="price">Asking Price (USD) *</Label>
                        <Input
                          id="price"
                          placeholder="e.g., 85000"
                          value={formData.price}
                          onChange={(e) => handleInputChange('price', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="location">Location *</Label>
                      <Input
                        id="location"
                        placeholder="e.g., Dubai, UAE"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="description">Description *</Label>
                      <Textarea
                        id="description"
                        placeholder="Provide detailed information about your equipment, including maintenance history, modifications, and any additional features..."
                        rows={4}
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Photos Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Photos</h3>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                      <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <h4 className="font-medium mb-2">Upload Equipment Photos</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Add up to 20 high-quality photos. First photo will be the main image.
                      </p>
                      <Button type="button" variant="outline">
                        <Camera className="h-4 w-4 mr-2" />
                        Choose Photos
                      </Button>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Contact Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contactName">Contact Name *</Label>
                        <Input
                          id="contactName"
                          placeholder="Your full name"
                          value={formData.contactName}
                          onChange={(e) => handleInputChange('contactName', e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="contactEmail">Email Address *</Label>
                        <Input
                          id="contactEmail"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.contactEmail}
                          onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="contactPhone">Phone Number *</Label>
                      <Input
                        id="contactPhone"
                        placeholder="+971 50 123 4567"
                        value={formData.contactPhone}
                        onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Listing for Review
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Listing Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">High-Quality Photos</h4>
                  <p className="text-sm text-muted-foreground">
                    Include clear photos from multiple angles, interior, exterior, and any damage or wear.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Detailed Description</h4>
                  <p className="text-sm text-muted-foreground">
                    Provide comprehensive details about maintenance, modifications, and operational history.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Competitive Pricing</h4>
                  <p className="text-sm text-muted-foreground">
                    Research similar equipment on our platform to set a competitive price.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pricing Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Get a free market valuation for your equipment based on current market data.
                </p>
                <Button variant="outline" className="w-full">
                  Get Free Valuation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellEquipment;
