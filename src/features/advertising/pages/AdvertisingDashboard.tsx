import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Search, Filter, Eye, MousePointer, DollarSign, TrendingUp } from 'lucide-react';
import { AdCard } from '../components/AdCard';
import { CreateAdForm } from '../components/CreateAdForm';
import { Advertisement } from '../types';
import { toast } from 'sonner';

const AdvertisingDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  
  // Mock data
  const [ads, setAds] = useState<Advertisement[]>([
    {
      id: '1',
      title: 'CAT 320D Excavator for Sale',
      description: 'Well-maintained Caterpillar 320D excavator with low hours. Perfect for construction and excavation work.',
      advertiser: 'Heavy Equipment Solutions',
      category: 'equipment',
      type: 'featured',
      price: 85000,
      budget: 1000,
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
      title: 'Construction Equipment Rental Services',
      description: 'Premium equipment rental services with 24/7 support and maintenance included.',
      advertiser: 'Al Faris Equipment Rental',
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
    }
  ]);

  const stats = [
    {
      title: 'Total Ads',
      value: ads.length,
      icon: Eye,
      change: '+12%'
    },
    {
      title: 'Active Ads',
      value: ads.filter(ad => ad.status === 'active').length,
      icon: TrendingUp,
      change: '+8%'
    },
    {
      title: 'Total Clicks',
      value: ads.reduce((sum, ad) => sum + ad.clicks, 0),
      icon: MousePointer,
      change: '+25%'
    },
    {
      title: 'Revenue',
      value: ads.reduce((sum, ad) => sum + ad.budget, 0),
      icon: DollarSign,
      change: '+15%'
    }
  ];

  const filteredAds = ads.filter(ad => {
    const matchesSearch = ad.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ad.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || ad.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleCreateAd = (adData: Partial<Advertisement>) => {
    const newAd: Advertisement = {
      id: Date.now().toString(),
      advertiser: 'Your Company',
      ...adData as Advertisement
    };
    setAds([...ads, newAd]);
    setShowCreateForm(false);
    toast.success('Advertisement created successfully!');
  };

  const handleContactAd = (ad: Advertisement) => {
    toast.success(`Contact information for ${ad.title} copied to clipboard`);
  };

  if (showCreateForm) {
    return (
      <div className="container mx-auto p-6">
        <CreateAdForm 
          onSubmit={handleCreateAd}
          onCancel={() => setShowCreateForm(false)}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Advertising Dashboard</h1>
          <p className="text-muted-foreground">Manage your advertisements and track performance</p>
        </div>
        <Button onClick={() => setShowCreateForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Create Ad
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="ads">My Ads</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value.toLocaleString()}</p>
                    </div>
                    <stat.icon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="mt-2 flex items-center text-sm">
                    <span className="text-green-600">{stat.change}</span>
                    <span className="text-muted-foreground ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {ads.slice(0, 3).map(ad => (
                  <div key={ad.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{ad.title}</p>
                      <p className="text-sm text-muted-foreground">{ad.clicks} clicks, {ad.impressions} impressions</p>
                    </div>
                    <Badge className={ad.status === 'active' ? 'bg-green-500' : 'bg-gray-500'}>
                      {ad.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ads" className="space-y-6">
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search advertisements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="paused">Paused</SelectItem>
                <SelectItem value="expired">Expired</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAds.map(ad => (
              <AdCard 
                key={ad.id} 
                ad={ad} 
                onContact={handleContactAd}
                showAnalytics={true}
              />
            ))}
          </div>

          {filteredAds.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No advertisements found matching your criteria.</p>
              <Button className="mt-4" onClick={() => setShowCreateForm(true)}>
                Create Your First Ad
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Total Impressions</span>
                    <span className="font-semibold">{ads.reduce((sum, ad) => sum + ad.impressions, 0).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Clicks</span>
                    <span className="font-semibold">{ads.reduce((sum, ad) => sum + ad.clicks, 0).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average CTR</span>
                    <span className="font-semibold">
                      {(ads.reduce((sum, ad) => sum + (ad.clicks / ad.impressions), 0) / ads.length * 100).toFixed(2)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Spend</span>
                    <span className="font-semibold">${ads.reduce((sum, ad) => sum + ad.budget, 0).toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Performing Ads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ads.sort((a, b) => b.clicks - a.clicks).slice(0, 5).map(ad => (
                    <div key={ad.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium truncate">{ad.title}</p>
                        <p className="text-sm text-muted-foreground">{ad.clicks} clicks</p>
                      </div>
                      <Badge variant="outline">
                        {((ad.clicks / ad.impressions) * 100).toFixed(1)}% CTR
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdvertisingDashboard;