import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Upload, X, DollarSign, MapPin, Calendar, Shield } from 'lucide-react';
import { toast } from 'sonner';

export default function ListEquipmentPage() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    condition: '',
    location: '',
    dailyRate: '',
    weeklyRate: '',
    monthlyRate: '',
    securityDeposit: '',
    minRentalPeriod: '1',
    maxRentalPeriod: '90',
    deliveryAvailable: false,
    deliveryRadius: '25',
    deliveryFee: '0',
    specifications: {
      brand: '',
      model: '',
      year: '',
      hours: '',
      weight: '',
      power: ''
    }
  });

  const [images, setImages] = useState<File[]>([]);

  const handleInputChange = (field: string, value: string | boolean) => {
    if (field.startsWith('specifications.')) {
      const specField = field.split('.')[1];
      setFormData(prev => ({
        ...prev,
        specifications: {
          ...prev.specifications,
          [specField]: value as string
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).slice(0, 8 - images.length);
      setImages(prev => [...prev, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast.success('Equipment listed successfully!');
    console.log('Form data:', formData);
    console.log('Images:', images);
  };

  const calculateWeeklyRate = () => {
    const daily = parseFloat(formData.dailyRate) || 0;
    return Math.round(daily * 7 * 0.85); // 15% weekly discount
  };

  const calculateMonthlyRate = () => {
    const daily = parseFloat(formData.dailyRate) || 0;
    return Math.round(daily * 30 * 0.75); // 25% monthly discount
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">List Equipment for Rent</h1>
          <p className="text-muted-foreground">Add your construction equipment to the rental marketplace</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Equipment Title *</Label>
                  <Input
                    placeholder="e.g., CAT 320 Hydraulic Excavator"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Excavators">Excavators</SelectItem>
                      <SelectItem value="Bulldozers">Bulldozers</SelectItem>
                      <SelectItem value="Cranes">Cranes</SelectItem>
                      <SelectItem value="Loaders">Loaders</SelectItem>
                      <SelectItem value="Concrete Mixers">Concrete Mixers</SelectItem>
                      <SelectItem value="Trucks">Trucks</SelectItem>
                      <SelectItem value="Generators">Generators</SelectItem>
                      <SelectItem value="Compactors">Compactors</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Description *</Label>
                <Textarea
                  placeholder="Provide detailed description of the equipment, its condition, and any special features..."
                  rows={4}
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Condition *</Label>
                  <Select value={formData.condition} onValueChange={(value) => handleInputChange('condition', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Excellent">Excellent</SelectItem>
                      <SelectItem value="Very Good">Very Good</SelectItem>
                      <SelectItem value="Good">Good</SelectItem>
                      <SelectItem value="Fair">Fair</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Location *</Label>
                  <Input
                    placeholder="City, State"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Equipment Specifications */}
          <Card>
            <CardHeader>
              <CardTitle>Equipment Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label>Brand</Label>
                  <Input
                    placeholder="e.g., Caterpillar"
                    value={formData.specifications.brand}
                    onChange={(e) => handleInputChange('specifications.brand', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Model</Label>
                  <Input
                    placeholder="e.g., 320D"
                    value={formData.specifications.model}
                    onChange={(e) => handleInputChange('specifications.model', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Year</Label>
                  <Input
                    placeholder="e.g., 2020"
                    value={formData.specifications.year}
                    onChange={(e) => handleInputChange('specifications.year', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Hours</Label>
                  <Input
                    placeholder="e.g., 2500"
                    value={formData.specifications.hours}
                    onChange={(e) => handleInputChange('specifications.hours', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Operating Weight</Label>
                  <Input
                    placeholder="e.g., 20,300 kg"
                    value={formData.specifications.weight}
                    onChange={(e) => handleInputChange('specifications.weight', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Engine Power</Label>
                  <Input
                    placeholder="e.g., 122 kW"
                    value={formData.specifications.power}
                    onChange={(e) => handleInputChange('specifications.power', e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photos */}
          <Card>
            <CardHeader>
              <CardTitle>Photos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <div className="space-y-2">
                    <p className="text-lg font-medium">Upload Equipment Photos</p>
                    <p className="text-sm text-muted-foreground">
                      Add up to 8 high-quality photos. First photo will be the main image.
                    </p>
                  </div>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <Label htmlFor="image-upload" className="inline-block">
                    <Button type="button" className="mt-4">Choose Files</Button>
                  </Label>
                </div>

                {images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Equipment ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg border"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="absolute -top-2 -right-2 h-6 w-6 p-0 rounded-full"
                          onClick={() => removeImage(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                        {index === 0 && (
                          <Badge className="absolute bottom-2 left-2 text-xs">Main</Badge>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Pricing & Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label>Daily Rate ($) *</Label>
                  <Input
                    type="number"
                    placeholder="0"
                    value={formData.dailyRate}
                    onChange={(e) => {
                      handleInputChange('dailyRate', e.target.value);
                      // Auto-calculate weekly and monthly rates
                      if (e.target.value) {
                        setFormData(prev => ({
                          ...prev,
                          weeklyRate: calculateWeeklyRate().toString(),
                          monthlyRate: calculateMonthlyRate().toString()
                        }));
                      }
                    }}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Weekly Rate ($)</Label>
                  <Input
                    type="number"
                    placeholder="0"
                    value={formData.weeklyRate}
                    onChange={(e) => handleInputChange('weeklyRate', e.target.value)}
                  />
                  {formData.dailyRate && (
                    <p className="text-xs text-muted-foreground">
                      Suggested: ${calculateWeeklyRate()}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Monthly Rate ($)</Label>
                  <Input
                    type="number"
                    placeholder="0"
                    value={formData.monthlyRate}
                    onChange={(e) => handleInputChange('monthlyRate', e.target.value)}
                  />
                  {formData.dailyRate && (
                    <p className="text-xs text-muted-foreground">
                      Suggested: ${calculateMonthlyRate()}
                    </p>
                  )}
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label>Security Deposit ($) *</Label>
                  <Input
                    type="number"
                    placeholder="0"
                    value={formData.securityDeposit}
                    onChange={(e) => handleInputChange('securityDeposit', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Min Rental Period (days) *</Label>
                  <Select value={formData.minRentalPeriod} onValueChange={(value) => handleInputChange('minRentalPeriod', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 day</SelectItem>
                      <SelectItem value="3">3 days</SelectItem>
                      <SelectItem value="7">1 week</SelectItem>
                      <SelectItem value="30">1 month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Max Rental Period (days)</Label>
                  <Input
                    type="number"
                    placeholder="90"
                    value={formData.maxRentalPeriod}
                    onChange={(e) => handleInputChange('maxRentalPeriod', e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Options */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Delivery Options
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="delivery"
                  checked={formData.deliveryAvailable}
                  onCheckedChange={(checked) => handleInputChange('deliveryAvailable', checked)}
                />
                <Label htmlFor="delivery">I offer delivery service</Label>
              </div>

              {formData.deliveryAvailable && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Delivery Radius (km)</Label>
                    <Input
                      type="number"
                      placeholder="25"
                      value={formData.deliveryRadius}
                      onChange={(e) => handleInputChange('deliveryRadius', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Delivery Fee ($)</Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={formData.deliveryFee}
                      onChange={(e) => handleInputChange('deliveryFee', e.target.value)}
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline">Save as Draft</Button>
            <Button type="submit">List Equipment</Button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}