import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Search, 
  MapPin, 
  Filter, 
  Star,
  DollarSign,
  Clock,
  X
} from 'lucide-react';

interface ServiceFiltersProps {
  filters: {
    search: string;
    category: string;
    location: string;
    equipmentType: string;
    minRating: number;
    maxRate: number;
    availability: string;
    verified: boolean;
    experience: string;
  };
  onFiltersChange: (filters: any) => void;
  onClearFilters: () => void;
  activeFiltersCount: number;
}

export const ServiceFilters: React.FC<ServiceFiltersProps> = ({
  filters,
  onFiltersChange,
  onClearFilters,
  activeFiltersCount
}) => {
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

  const locations = [
    'Dubai, UAE',
    'Abu Dhabi, UAE',
    'Sharjah, UAE',
    'Ajman, UAE',
    'Ras Al Khaimah, UAE',
    'Fujairah, UAE',
    'Umm Al Quwain, UAE'
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center text-lg">
            <Filter className="h-5 w-5 mr-2" />
            Filters
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {activeFiltersCount}
              </Badge>
            )}
          </CardTitle>
          {activeFiltersCount > 0 && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onClearFilters}
              className="text-xs"
            >
              <X className="h-3 w-3 mr-1" />
              Clear All
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Search */}
        <div>
          <Label htmlFor="search">Search</Label>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Search providers, services..."
              className="pl-10"
              value={filters.search}
              onChange={(e) => onFiltersChange({ ...filters, search: e.target.value })}
            />
          </div>
        </div>

        {/* Service Category */}
        <div>
          <Label>Service Category</Label>
          <Select 
            value={filters.category} 
            onValueChange={(value) => onFiltersChange({ ...filters, category: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All categories</SelectItem>
              {serviceCategories.map((category) => (
                <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Equipment Type */}
        <div>
          <Label>Equipment Type</Label>
          <Select 
            value={filters.equipmentType} 
            onValueChange={(value) => onFiltersChange({ ...filters, equipmentType: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="All equipment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All equipment</SelectItem>
              {equipmentTypes.map((equipment) => (
                <SelectItem key={equipment} value={equipment.toLowerCase()}>
                  {equipment}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Location */}
        <div>
          <Label>Location</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Select 
              value={filters.location} 
              onValueChange={(value) => onFiltersChange({ ...filters, location: value })}
            >
              <SelectTrigger className="pl-10">
                <SelectValue placeholder="All locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All locations</SelectItem>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Minimum Rating */}
        <div>
          <Label className="flex items-center">
            <Star className="h-4 w-4 mr-1" />
            Minimum Rating
          </Label>
          <Select 
            value={filters.minRating.toString()} 
            onValueChange={(value) => onFiltersChange({ ...filters, minRating: parseInt(value) })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Any rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Any rating</SelectItem>
              <SelectItem value="3">3+ stars</SelectItem>
              <SelectItem value="4">4+ stars</SelectItem>
              <SelectItem value="4.5">4.5+ stars</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Maximum Hourly Rate */}
        <div>
          <Label className="flex items-center">
            <DollarSign className="h-4 w-4 mr-1" />
            Maximum Rate ($/hour)
          </Label>
          <Input
            type="number"
            placeholder="No limit"
            value={filters.maxRate || ''}
            onChange={(e) => onFiltersChange({ ...filters, maxRate: parseInt(e.target.value) || 0 })}
          />
        </div>

        {/* Availability */}
        <div>
          <Label className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            Availability
          </Label>
          <Select 
            value={filters.availability} 
            onValueChange={(value) => onFiltersChange({ ...filters, availability: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Any availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any availability</SelectItem>
              <SelectItem value="available">Available now</SelectItem>
              <SelectItem value="within-week">Available this week</SelectItem>
              <SelectItem value="within-month">Available this month</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Experience Level */}
        <div>
          <Label>Experience Level</Label>
          <Select 
            value={filters.experience} 
            onValueChange={(value) => onFiltersChange({ ...filters, experience: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Any experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any experience</SelectItem>
              <SelectItem value="entry">1-2 years</SelectItem>
              <SelectItem value="intermediate">3-5 years</SelectItem>
              <SelectItem value="experienced">6-10 years</SelectItem>
              <SelectItem value="expert">10+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Additional Options */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="verified"
            checked={filters.verified}
            onChange={(e) => onFiltersChange({ ...filters, verified: e.target.checked })}
            className="rounded border-border"
          />
          <Label htmlFor="verified" className="text-sm cursor-pointer">
            Verified providers only
          </Label>
        </div>
      </CardContent>
    </Card>
  );
};