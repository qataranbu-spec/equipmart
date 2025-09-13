
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Search, Filter, MapPin, Calendar, Truck, Star, Heart } from 'lucide-react';

const BuyEquipment = () => {
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [searchQuery, setSearchQuery] = useState('');

  const equipmentData = [
    {
      id: 1,
      name: 'CAT 320D Excavator',
      price: 85000,
      year: 2019,
      hours: 2500,
      location: 'Dubai, UAE',
      condition: 'Excellent',
      seller: 'Dubai Equipment Co.',
      rating: 4.8,
      image: '/placeholder.svg',
      featured: true
    },
    {
      id: 2,
      name: 'Komatsu PC200 Excavator',
      price: 72000,
      year: 2018,
      hours: 3200,
      location: 'Abu Dhabi, UAE',
      condition: 'Good',
      seller: 'Al Hamra Machinery',
      rating: 4.6,
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 3,
      name: 'Volvo L120F Wheel Loader',
      price: 95000,
      year: 2020,
      hours: 1800,
      location: 'Sharjah, UAE',
      condition: 'Excellent',
      seller: 'Emirates Heavy Equipment',
      rating: 4.9,
      image: '/placeholder.svg',
      featured: true
    },
    {
      id: 4,
      name: 'JCB 3CX Backhoe Loader',
      price: 45000,
      year: 2017,
      hours: 4200,
      location: 'Ajman, UAE',
      condition: 'Good',
      seller: 'Gulf Equipment Trading',
      rating: 4.4,
      image: '/placeholder.svg',
      featured: false
    }
  ];

  const filteredEquipment = equipmentData.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    item.price >= priceRange[0] && item.price <= priceRange[1]
  );

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Buy Construction Equipment</h1>
          <p className="text-muted-foreground text-lg">
            Find the perfect construction equipment for your projects. Browse through thousands of verified listings.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-3">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search equipment, brand, model..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <Button className="w-full">
            <Filter className="h-4 w-4 mr-2" />
            Advanced Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excavators">Excavators</SelectItem>
                      <SelectItem value="loaders">Loaders</SelectItem>
                      <SelectItem value="dozers">Dozers</SelectItem>
                      <SelectItem value="cranes">Cranes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Condition</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Conditions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-4 block">
                    Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={1000000}
                    min={0}
                    step={5000}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dubai">Dubai</SelectItem>
                      <SelectItem value="abu-dhabi">Abu Dhabi</SelectItem>
                      <SelectItem value="sharjah">Sharjah</SelectItem>
                      <SelectItem value="ajman">Ajman</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Year</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Years" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2021">2021</SelectItem>
                      <SelectItem value="2020">2020</SelectItem>
                      <SelectItem value="2019">2019</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Equipment Listings */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Showing {filteredEquipment.length} equipment listings
              </p>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="year-new">Year: Newest First</SelectItem>
                  <SelectItem value="year-old">Year: Oldest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredEquipment.map((equipment) => (
                <Card key={equipment.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={equipment.image}
                      alt={equipment.name}
                      className="w-full h-48 object-cover"
                    />
                    {equipment.featured && (
                      <Badge className="absolute top-2 left-2 bg-primary">
                        Featured
                      </Badge>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{equipment.name}</h3>
                      <Badge variant="outline">{equipment.condition}</Badge>
                    </div>
                    
                    <p className="text-2xl font-bold text-primary mb-3">
                      ${equipment.price.toLocaleString()}
                    </p>
                    
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {equipment.year} • {equipment.hours.toLocaleString()} hours
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {equipment.location}
                      </div>
                      <div className="flex items-center">
                        <Truck className="h-4 w-4 mr-2" />
                        {equipment.seller}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-2 fill-yellow-400 text-yellow-400" />
                        {equipment.rating} rating
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button className="flex-1">View Details</Button>
                      <Button variant="outline" className="flex-1">Contact Seller</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BuyEquipment;
