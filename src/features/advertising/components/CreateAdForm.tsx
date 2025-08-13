import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Upload, X } from 'lucide-react';
import { format } from 'date-fns';
import { Advertisement, AdCategory, AdType } from '../types';
import { toast } from 'sonner';

interface CreateAdFormProps {
  onSubmit: (ad: Partial<Advertisement>) => void;
  onCancel: () => void;
  initialData?: Partial<Advertisement>;
}

export const CreateAdForm: React.FC<CreateAdFormProps> = ({ onSubmit, onCancel, initialData }) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    description: initialData?.description || '',
    category: initialData?.category || 'equipment' as AdCategory,
    type: initialData?.type || 'listing' as AdType,
    price: initialData?.price || 0,
    budget: initialData?.budget || 0,
    location: initialData?.location || '',
    targetAudience: initialData?.targetAudience || [],
    contactPhone: initialData?.contactInfo?.phone || '',
    contactEmail: initialData?.contactInfo?.email || '',
    contactWebsite: initialData?.contactInfo?.website || '',
    startDate: initialData?.startDate ? new Date(initialData.startDate) : new Date(),
    endDate: initialData?.endDate ? new Date(initialData.endDate) : new Date(),
    images: initialData?.images || []
  });

  const [audienceTag, setAudienceTag] = useState('');

  const categories: AdCategory[] = ['equipment', 'services', 'parts', 'rentals', 'auctions', 'training', 'jobs'];
  const adTypes: AdType[] = ['listing', 'featured', 'banner', 'sponsored', 'premium'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.contactPhone) {
      toast.error('Please fill in all required fields');
      return;
    }

    const adData: Partial<Advertisement> = {
      ...formData,
      contactInfo: {
        phone: formData.contactPhone,
        email: formData.contactEmail,
        website: formData.contactWebsite
      },
      startDate: formData.startDate.toISOString(),
      endDate: formData.endDate.toISOString(),
      status: 'draft',
      clicks: 0,
      impressions: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    onSubmit(adData);
  };

  const addAudienceTag = () => {
    if (audienceTag.trim() && !formData.targetAudience.includes(audienceTag.trim())) {
      setFormData({
        ...formData,
        targetAudience: [...formData.targetAudience, audienceTag.trim()]
      });
      setAudienceTag('');
    }
  };

  const removeAudienceTag = (tag: string) => {
    setFormData({
      ...formData,
      targetAudience: formData.targetAudience.filter(t => t !== tag)
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Create Advertisement</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter advertisement title"
                  required
                />
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value: AdCategory) => 
                  setFormData({ ...formData, category: value })
                }>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => (
                      <SelectItem key={cat} value={cat}>
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="type">Advertisement Type</Label>
                <Select value={formData.type} onValueChange={(value: AdType) => 
                  setFormData({ ...formData, type: value })
                }>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {adTypes.map(type => (
                      <SelectItem key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                    placeholder="0"
                  />
                </div>
                <div>
                  <Label htmlFor="budget">Budget ($)</Label>
                  <Input
                    id="budget"
                    type="number"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: Number(e.target.value) })}
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="City, Country"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {format(formData.startDate, "PPP")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.startDate}
                        onSelect={(date) => date && setFormData({ ...formData, startDate: date })}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <Label>End Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {format(formData.endDate, "PPP")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.endDate}
                        onSelect={(date) => date && setFormData({ ...formData, endDate: date })}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div>
                <Label htmlFor="contactPhone">Contact Phone *</Label>
                <Input
                  id="contactPhone"
                  value={formData.contactPhone}
                  onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                  placeholder="+1 234 567 8900"
                  required
                />
              </div>

              <div>
                <Label htmlFor="contactEmail">Contact Email</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  placeholder="contact@example.com"
                />
              </div>

              <div>
                <Label htmlFor="contactWebsite">Website (optional)</Label>
                <Input
                  id="contactWebsite"
                  value={formData.contactWebsite}
                  onChange={(e) => setFormData({ ...formData, contactWebsite: e.target.value })}
                  placeholder="https://example.com"
                />
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe your advertisement..."
              rows={4}
              required
            />
          </div>

          <div>
            <Label>Target Audience Tags</Label>
            <div className="flex gap-2 mb-2">
              <Input
                value={audienceTag}
                onChange={(e) => setAudienceTag(e.target.value)}
                placeholder="Enter audience tag"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addAudienceTag())}
              />
              <Button type="button" onClick={addAudienceTag}>Add</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.targetAudience.map(tag => (
                <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                  {tag}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => removeAudienceTag(tag)} />
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <Label>Images</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-600">
                Click to upload images or drag and drop
              </p>
              <Button type="button" variant="outline" className="mt-2">
                Choose Files
              </Button>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="flex-1">
              Create Advertisement
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};