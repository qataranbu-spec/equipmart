import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  FileText, 
  Upload, 
  Calendar, 
  MapPin, 
  DollarSign,
  Plus,
  X,
  AlertCircle
} from 'lucide-react';

interface ServiceRequestFormProps {
  onSubmit: (requestData: any) => void;
  isSubmitting?: boolean;
}

export const ServiceRequestForm: React.FC<ServiceRequestFormProps> = ({
  onSubmit,
  isSubmitting = false
}) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    equipmentType: '',
    equipmentBrand: '',
    equipmentModel: '',
    equipmentYear: '',
    location: '',
    address: '',
    startDate: '',
    endDate: '',
    priority: 'medium',
    budget: '',
    description: '',
    requirements: [''],
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    attachments: []
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const serviceCategories = [
    'Equipment Maintenance',
    'Transportation & Logistics',
    'Installation Services',
    'Operator Services',
    'Technical Support',
    'Emergency Repair',
    'Inspection Services',
    'Training Services'
  ];

  const equipmentTypes = [
    'Excavators',
    'Cranes',
    'Bulldozers',
    'Loaders',
    'Trucks',
    'Concrete Mixers',
    'Compactors',
    'Generators'
  ];

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    'Over $50,000',
    'Hourly Rate',
    'To be discussed'
  ];

  const handleAddRequirement = () => {
    setFormData(prev => ({
      ...prev,
      requirements: [...prev.requirements, '']
    }));
  };

  const handleRemoveRequirement = (index: number) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index)
    }));
  };

  const handleRequirementChange = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.map((req, i) => i === index ? value : req)
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.category) newErrors.category = 'Service category is required';
    if (!formData.equipmentType) newErrors.equipmentType = 'Equipment type is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.contactName.trim()) newErrors.contactName = 'Contact name is required';
    if (!formData.contactEmail.trim()) newErrors.contactEmail = 'Contact email is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit({
        ...formData,
        requirements: formData.requirements.filter(req => req.trim() !== ''),
        submittedAt: new Date().toISOString()
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="h-5 w-5 mr-2" />
          Post New Service Request
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Basic Information</h3>
            
            <div>
              <Label htmlFor="title">Request Title *</Label>
              <Input
                id="title"
                placeholder="e.g., Excavator Maintenance Service Required"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className={errors.title ? 'border-destructive' : ''}
              />
              {errors.title && (
                <div className="flex items-center text-sm text-destructive mt-1">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.title}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Service Category *</Label>
                <Select 
                  value={formData.category} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                >
                  <SelectTrigger className={errors.category ? 'border-destructive' : ''}>
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.category && (
                  <div className="flex items-center text-sm text-destructive mt-1">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.category}
                  </div>
                )}
              </div>

              <div>
                <Label>Equipment Type *</Label>
                <Select 
                  value={formData.equipmentType} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, equipmentType: value }))}
                >
                  <SelectTrigger className={errors.equipmentType ? 'border-destructive' : ''}>
                    <SelectValue placeholder="Select equipment" />
                  </SelectTrigger>
                  <SelectContent>
                    {equipmentTypes.map((equipment) => (
                      <SelectItem key={equipment} value={equipment}>
                        {equipment}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.equipmentType && (
                  <div className="flex items-center text-sm text-destructive mt-1">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.equipmentType}
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="equipmentBrand">Equipment Brand</Label>
                <Input
                  id="equipmentBrand"
                  placeholder="e.g., Caterpillar"
                  value={formData.equipmentBrand}
                  onChange={(e) => setFormData(prev => ({ ...prev, equipmentBrand: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="equipmentModel">Model</Label>
                <Input
                  id="equipmentModel"
                  placeholder="e.g., 320D"
                  value={formData.equipmentModel}
                  onChange={(e) => setFormData(prev => ({ ...prev, equipmentModel: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="equipmentYear">Year</Label>
                <Input
                  id="equipmentYear"
                  type="number"
                  placeholder="e.g., 2020"
                  value={formData.equipmentYear}
                  onChange={(e) => setFormData(prev => ({ ...prev, equipmentYear: e.target.value }))}
                />
              </div>
            </div>
          </div>

          {/* Location and Timeline */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Location & Timeline</h3>
            
            <div>
              <Label htmlFor="location" className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Service Location *
              </Label>
              <Input
                id="location"
                placeholder="City, State"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                className={errors.location ? 'border-destructive' : ''}
              />
              {errors.location && (
                <div className="flex items-center text-sm text-destructive mt-1">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.location}
                </div>
              )}
            </div>

            <div>
              <Label htmlFor="address">Detailed Address</Label>
              <Input
                id="address"
                placeholder="Street address (optional)"
                value={formData.address}
                onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="startDate" className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Start Date *
                </Label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                  className={errors.startDate ? 'border-destructive' : ''}
                />
                {errors.startDate && (
                  <div className="flex items-center text-sm text-destructive mt-1">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.startDate}
                  </div>
                )}
              </div>
              <div>
                <Label htmlFor="endDate">End Date (Optional)</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, endDate: e.target.value }))}
                />
              </div>
              <div>
                <Label>Priority Level</Label>
                <Select 
                  value={formData.priority} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, priority: value }))}
                >
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
            </div>
          </div>

          {/* Budget and Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Budget & Details</h3>
            
            <div>
              <Label className="flex items-center">
                <DollarSign className="h-4 w-4 mr-1" />
                Budget Range
              </Label>
              <Select 
                value={formData.budget} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="description">Detailed Description *</Label>
              <Textarea
                id="description"
                placeholder="Provide detailed information about your service requirements, current issues, expected outcomes, and any specific preferences..."
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className={errors.description ? 'border-destructive' : ''}
              />
              {errors.description && (
                <div className="flex items-center text-sm text-destructive mt-1">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.description}
                </div>
              )}
            </div>

            {/* Requirements List */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <Label>Specific Requirements</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleAddRequirement}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Requirement
                </Button>
              </div>
              <div className="space-y-2">
                {formData.requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Input
                      placeholder="e.g., Must have certified technicians"
                      value={requirement}
                      onChange={(e) => handleRequirementChange(index, e.target.value)}
                    />
                    {formData.requirements.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleRemoveRequirement(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="contactName">Full Name *</Label>
                <Input
                  id="contactName"
                  placeholder="Your full name"
                  value={formData.contactName}
                  onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                  className={errors.contactName ? 'border-destructive' : ''}
                />
                {errors.contactName && (
                  <div className="flex items-center text-sm text-destructive mt-1">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.contactName}
                  </div>
                )}
              </div>
              <div>
                <Label htmlFor="contactEmail">Email Address *</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.contactEmail}
                  onChange={(e) => setFormData(prev => ({ ...prev, contactEmail: e.target.value }))}
                  className={errors.contactEmail ? 'border-destructive' : ''}
                />
                {errors.contactEmail && (
                  <div className="flex items-center text-sm text-destructive mt-1">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.contactEmail}
                  </div>
                )}
              </div>
              <div>
                <Label htmlFor="contactPhone">Phone Number</Label>
                <Input
                  id="contactPhone"
                  placeholder="+971 50 123 4567"
                  value={formData.contactPhone}
                  onChange={(e) => setFormData(prev => ({ ...prev, contactPhone: e.target.value }))}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-2 pt-4 border-t">
            <Button type="button" variant="outline">
              Save as Draft
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>Processing...</>
              ) : (
                <>
                  <FileText className="h-4 w-4 mr-2" />
                  Post Service Request
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};