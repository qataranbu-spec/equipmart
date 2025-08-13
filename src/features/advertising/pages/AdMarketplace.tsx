import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Grid, List } from 'lucide-react';
import { AdCard } from '../components/AdCard';
import { Advertisement } from '../types';
import { toast } from 'sonner';

const AdMarketplace = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  // Mock advertisements data
  const ads: Advertisement[] = [
    {
      id: '1',
      title: 'Premium CAT Excavator 320D - Like New Condition',
      description: 'Excellent condition Caterpillar 320D excavator with only 1,500 hours. Perfect for heavy construction work. Includes full maintenance history and warranty.',
      advertiser: 'Heavy Equipment Dubai',
      category: 'equipment',
      type: 'featured',
      price: 85000,
      budget: 1500,
      status: 'active',
      startDate: '2024-01-01',
      endDate: '2024-02-01',
      targetAudience: ['contractors', 'construction companies'],
      location: 'Dubai, UAE',
      images: ['/api/placeholder/400/300'],
      clicks: 245,
      impressions: 3420,
      contactInfo: {
        phone: '+971 50 123 4567',
        email: 'sales@heavyequip.ae',
        website: 'https://heavyequip.ae'
      },
      createdAt: '2024-01-01',
      updatedAt: '2024-01-15'
    },
    {
      id: '2',
      title: 'Professional Equipment Rental Services',
      description: '24/7 equipment rental services with maintenance included. Wide range of construction equipment available.',
      advertiser: 'Al Faris Equipment',
      category: 'services',
      type: 'banner',
      price: 0,
      budget: 2000,
      status: 'active',
      startDate: '2024-01-10',
      endDate: '2024-02-10',
      targetAudience: ['contractors', 'developers'],
      location: 'Abu Dhabi, UAE',
      images: ['/api/placeholder/400/300'],
      clicks: 189,
      impressions: 2100,
      contactInfo: {
        phone: '+971 50 987 6543',
        email: 'rentals@alfaris.ae'
      },
      createdAt: '2024-01-10',
      updatedAt: '2024-01-20'
    },
    {
      id: '3',
      title: 'Komatsu PC200 Parts & Components',
      description: 'Genuine Komatsu parts and components for PC200 series. Fast delivery across MENA region.',
      advertiser: 'Komatsu Parts Center',
      category: 'parts',
      type: 'sponsored',
      price: 15000,
      budget: 800,
      status: 'active',
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      targetAudience: ['mechanics', 'service centers'],
      location: 'Riyadh, KSA',
      images: ['/api/placeholder/400/300'],
      clicks: 98,
      impressions: 1560,
      contactInfo: {
        phone: '+966 50 456 7890',
        email: 'parts@komatsu-me.com'
      },
      createdAt: '2024-01-15',
      updatedAt: '2024-01-25'
    },
    {
      id: '4',
      title: 'Live Equipment Auction - January 30th',
      description: 'Major construction equipment auction featuring excavators, bulldozers, and cranes. Preview available.',
      advertiser: 'Gulf Auctions',
      category: 'auctions',
      type: 'featured',
      price: 0,
      budget: 1200,
      status: 'active',
      startDate: '2024-01-20',
      endDate: '2024-01-30',
      targetAudience: ['buyers', 'dealers'],
      location: 'Kuwait City, Kuwait',
      images: ['/api/placeholder/400/300'],
      clicks: 167,
      impressions: 2890,
      contactInfo: {
        phone: '+965 50 234 5678',
        email: 'auctions@gulf-auctions.com'
      },
      createdAt: '2024-01-20',
      updatedAt: '2024-01-22'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'equipment', label: 'Equipment' },
    { value: 'services', label: 'Services' },
    { value: 'parts', label: 'Parts' },
    { value: 'rentals', label: 'Rentals' },
    { value: 'auctions', label: 'Auctions' },
    { value: 'training', label: 'Training' },
    { value: 'jobs', label: 'Jobs' }
  ];

  const adTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'featured', label: 'Featured' },
    { value: 'banner', label: 'Banner' },
    { value: 'sponsored', label: 'Sponsored' },
    { value: 'premium', label: 'Premium' },
    { value: 'listing', label: 'Regular Listing' }
  ];

  const filteredAds = ads.filter(ad => {
    const matchesSearch = ad.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ad.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ad.advertiser.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || ad.category === categoryFilter;
    const matchesType = typeFilter === 'all' || ad.type === typeFilter;
    return matchesSearch && matchesCategory && matchesType;
  });

  const handleContactAd = (ad: Advertisement) => {
    toast.success(`Contacting ${ad.advertiser}...`);
    // In a real app, this would open a contact modal or redirect to contact page
  };

  const featuredAds = filteredAds.filter(ad => ad.type === 'featured');
  const otherAds = filteredAds.filter(ad => ad.type !== 'featured');

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Advertisement Marketplace</h1>
        <p className="text-xl text-muted-foreground">
          Discover premium construction equipment, services, and opportunities
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold">{ads.length}</p>
            <p className="text-muted-foreground">Active Ads</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold">{ads.filter(ad => ad.category === 'equipment').length}</p>
            <p className="text-muted-foreground">Equipment</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold">{ads.filter(ad => ad.category === 'services').length}</p>
            <p className="text-muted-foreground">Services</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold">{featuredAds.length}</p>
            <p className="text-muted-foreground">Featured</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search advertisements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map(cat => (
                  <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {adTypes.map(type => (
                  <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex gap-2">
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
        </CardContent>
      </Card>

      {/* Featured Ads Section */}
      {featuredAds.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            Featured Advertisements
            <Badge className="bg-purple-500">Premium</Badge>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAds.map(ad => (
              <AdCard 
                key={ad.id} 
                ad={ad} 
                onContact={handleContactAd}
              />
            ))}
          </div>
        </div>
      )}

      {/* Regular Ads */}
      <div>
        <h2 className="text-2xl font-bold mb-6">
          All Advertisements ({filteredAds.length})
        </h2>
        
        {filteredAds.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No advertisements found matching your criteria.</p>
            <p className="text-muted-foreground">Try adjusting your search or filters.</p>
          </div>
        ) : (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {otherAds.map(ad => (
              <AdCard 
                key={ad.id} 
                ad={ad} 
                onContact={handleContactAd}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdMarketplace;