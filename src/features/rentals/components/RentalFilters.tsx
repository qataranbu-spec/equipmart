import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { CalendarDays, Filter, X } from 'lucide-react';
import { useState } from 'react';

export interface RentalFilters {
  category: string;
  location: string;
  priceRange: [number, number];
  startDate: string;
  endDate: string;
  deliveryAvailable: boolean;
  verified: boolean;
  minDuration: number;
  maxDuration: number;
}

interface RentalFiltersProps {
  filters: RentalFilters;
  onFiltersChange: (filters: RentalFilters) => void;
  onClearFilters: () => void;
}

const categories = [
  'All Categories',
  'Excavators',
  'Bulldozers',
  'Cranes',
  'Loaders',
  'Concrete Mixers',
  'Trucks',
  'Generators',
  'Compactors'
];

export default function RentalFilters({ 
  filters, 
  onFiltersChange, 
  onClearFilters 
}: RentalFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const updateFilter = (key: keyof RentalFilters, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Less' : 'More'}
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onClearFilters}
            >
              <X className="h-4 w-4" />
              Clear
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Basic Filters - Always Visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label>Category</Label>
            <Select 
              value={filters.category} 
              onValueChange={(value) => updateFilter('category', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Location</Label>
            <Input
              placeholder="Enter location"
              value={filters.location}
              onChange={(e) => updateFilter('location', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Start Date</Label>
            <Input
              type="date"
              value={filters.startDate}
              onChange={(e) => updateFilter('startDate', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>End Date</Label>
            <Input
              type="date"
              value={filters.endDate}
              onChange={(e) => updateFilter('endDate', e.target.value)}
            />
          </div>
        </div>

        {/* Advanced Filters - Expandable */}
        {isExpanded && (
          <div className="space-y-6 pt-4 border-t">
            <div className="space-y-3">
              <Label>Price Range (Daily Rate)</Label>
              <div className="px-2">
                <Slider
                  value={filters.priceRange}
                  onValueChange={(value) => updateFilter('priceRange', value as [number, number])}
                  max={5000}
                  min={50}
                  step={50}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>${filters.priceRange[0]}</span>
                  <span>${filters.priceRange[1]}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Min Duration (days)</Label>
                <Input
                  type="number"
                  min="1"
                  value={filters.minDuration}
                  onChange={(e) => updateFilter('minDuration', parseInt(e.target.value) || 1)}
                />
              </div>

              <div className="space-y-2">
                <Label>Max Duration (days)</Label>
                <Input
                  type="number"
                  min="1"
                  value={filters.maxDuration}
                  onChange={(e) => updateFilter('maxDuration', parseInt(e.target.value) || 365)}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="delivery"
                  checked={filters.deliveryAvailable}
                  onCheckedChange={(checked) => updateFilter('deliveryAvailable', checked)}
                />
                <Label htmlFor="delivery">Delivery Available</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="verified"
                  checked={filters.verified}
                  onCheckedChange={(checked) => updateFilter('verified', checked)}
                />
                <Label htmlFor="verified">Verified Owners Only</Label>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}