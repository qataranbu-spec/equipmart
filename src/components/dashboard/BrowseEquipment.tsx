import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Search, Filter, Grid, List, MapPin, Calendar, Eye, Heart, ShoppingCart } from 'lucide-react';

interface BrowseEquipmentProps {
  onEquipmentSelect?: (equipmentId: number) => void;
}

export function BrowseEquipment({ onEquipmentSelect }: BrowseEquipmentProps) {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const equipmentData = [
    {
      id: 1,
      title: "Caterpillar 320 Excavator",
      condition: "Used - Functional",
      price: 85000,
      currency: "USD",
      location: "Dubai, UAE",
      year: 2020,
      hours: 1200,
      category: "Excavators",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop",
      seller: "Heavy Equipment LLC",
      verified: true,
      views: 234
    },
    {
      id: 2,
      title: "Liebherr LTM 1050-3.1 Mobile Crane",
      condition: "New",
      price: 450000,
      currency: "USD",
      location: "Riyadh, KSA",
      year: 2024,
      hours: 0,
      category: "Cranes",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop",
      seller: "Crane Solutions ME",
      verified: true,
      views: 156
    },
    {
      id: 3,
      title: "John Deere 850K Crawler Dozer",
      condition: "Refurbished",
      price: 125000,
      currency: "USD",
      location: "Abu Dhabi, UAE",
      year: 2019,
      hours: 800,
      category: "Bulldozers",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&h=300&fit=crop",
      seller: "Desert Equipment",
      verified: true,
      views: 89
    },
    {
      id: 4,
      title: "Komatsu PC200-8 Hydraulic Excavator",
      condition: "Used - Non-Functional",
      price: 35000,
      currency: "USD",
      location: "Doha, Qatar",
      year: 2018,
      hours: 3500,
      category: "Excavators",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop",
      seller: "Parts & Repairs Co",
      verified: false,
      views: 67
    },
    {
      id: 5,
      title: "Volvo L120H Wheel Loader",
      condition: "Used - Functional",
      price: 95000,
      currency: "USD",
      location: "Kuwait City, Kuwait",
      year: 2021,
      hours: 950,
      category: "Loaders",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
      seller: "Gulf Machinery",
      verified: true,
      views: 198
    },
    {
      id: 6,
      title: "Mercedes-Benz Actros 3348 Dump Truck",
      condition: "New",
      price: 180000,
      currency: "USD",
      location: "Manama, Bahrain",
      year: 2024,
      hours: 0,
      category: "Trucks",
      image: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=500&h=300&fit=crop",
      seller: "Truck Masters",
      verified: true,
      views: 112
    }
  ];

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'New': return 'bg-green-100 text-green-800';
      case 'Used - Functional': return 'bg-blue-100 text-blue-800';
      case 'Used - Non-Functional': return 'bg-red-100 text-red-800';
      case 'Refurbished': return 'bg-purple-100 text-purple-800';
      case 'Parts Only': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredEquipment = equipmentData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesCondition = selectedCondition === 'all' || item.condition === selectedCondition;
    
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(p => p.replace('+', ''));
      const minPrice = parseInt(min) || 0;
      const maxPrice = max ? parseInt(max) : Infinity;
      matchesPrice = item.price >= minPrice && item.price <= maxPrice;
    }
    
    return matchesSearch && matchesCategory && matchesCondition && matchesPrice;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold mb-2">Browse Equipment</h1>
        <p className="text-muted-foreground">Find the perfect equipment for your construction needs</p>
      </div>

      {/* Search and Controls */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search equipment..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filter Toggle and View Controls */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="Excavators">Excavators</SelectItem>
                      <SelectItem value="Cranes">Cranes</SelectItem>
                      <SelectItem value="Bulldozers">Bulldozers</SelectItem>
                      <SelectItem value="Loaders">Loaders</SelectItem>
                      <SelectItem value="Trucks">Trucks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Condition</label>
                  <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Conditions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Conditions</SelectItem>
                      <SelectItem value="New">New</SelectItem>
                      <SelectItem value="Used - Functional">Used - Functional</SelectItem>
                      <SelectItem value="Used - Non-Functional">Used - Non-Functional</SelectItem>
                      <SelectItem value="Refurbished">Refurbished</SelectItem>
                      <SelectItem value="Parts Only">Parts Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Price Range</label>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any Price" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Price</SelectItem>
                      <SelectItem value="0-50000">$0 - $50,000</SelectItem>
                      <SelectItem value="50000-100000">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100000-200000">$100,000 - $200,000</SelectItem>
                      <SelectItem value="200000+">$200,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Results Count */}
        <div>
          <p className="text-sm text-muted-foreground">
            Showing {filteredEquipment.length} of {equipmentData.length} results
          </p>
        </div>
      </div>

      {/* Equipment Grid/List */}
      <div className={`grid gap-4 ${viewMode === 'grid' ? 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
        {filteredEquipment.map((equipment) => (
          <Card key={equipment.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={equipment.image}
                alt={equipment.title}
                className="w-full h-40 object-cover"
              />
              <div className="absolute top-2 left-2">
                <Badge className={getConditionColor(equipment.condition)}>
                  {equipment.condition}
                </Badge>
              </div>
              <div className="absolute top-2 right-2 flex items-center space-x-1 bg-black/50 text-white px-2 py-1 rounded text-xs">
                <Eye className="h-3 w-3" />
                <span>{equipment.views}</span>
              </div>
            </div>
            
            <CardHeader className="pb-3">
              <h3 className="font-semibold text-sm line-clamp-2">{equipment.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-primary">
                  ${equipment.price.toLocaleString()}
                </span>
                {equipment.verified && (
                  <Badge variant="secondary" className="text-xs">✓ Verified</Badge>
                )}
              </div>
            </CardHeader>
            
            <CardContent className="py-0">
              <div className="space-y-1 text-xs text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Year:</span>
                  <span>{equipment.year}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Hours:</span>
                  <span>{equipment.hours.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-3 w-3" />
                  <span className="truncate">{equipment.location}</span>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="pt-3 flex gap-2">
              <Link to={`/equipment/${equipment.id}`} className="flex-1">
                <Button size="sm" className="w-full">
                  <Eye className="h-3 w-3 mr-1" />
                  View
                </Button>
              </Link>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => onEquipmentSelect?.(equipment.id)}
              >
                <Heart className="h-3 w-3" />
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => onEquipmentSelect?.(equipment.id)}
              >
                <ShoppingCart className="h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredEquipment.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No equipment found matching your criteria.</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedCondition('all');
              setPriceRange('all');
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}