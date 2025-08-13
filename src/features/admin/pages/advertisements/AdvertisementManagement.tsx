import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Search, Filter, MoreHorizontal, Eye, Edit, Trash2, Check, X, TrendingUp, DollarSign, MousePointer } from 'lucide-react';
import { Advertisement } from '../../../advertising/types';
import { toast } from 'sonner';

const AdvertisementManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedAd, setSelectedAd] = useState<Advertisement | null>(null);

  // Mock data
  const [advertisements, setAdvertisements] = useState<Advertisement[]>([
    {
      id: '1',
      title: 'CAT 320D Excavator for Sale',
      description: 'Well-maintained Caterpillar 320D excavator with low hours.',
      advertiser: 'Heavy Equipment Solutions',
      category: 'equipment',
      type: 'featured',
      price: 85000,
      budget: 1500,
      status: 'active',
      startDate: '2024-01-01',
      endDate: '2024-02-01',
      targetAudience: ['contractors'],
      location: 'Dubai, UAE',
      images: ['/api/placeholder/400/300'],
      clicks: 245,
      impressions: 3420,
      contactInfo: {
        phone: '+971 50 123 4567',
        email: 'sales@heavyequip.ae'
      },
      createdAt: '2024-01-01',
      updatedAt: '2024-01-15'
    },
    {
      id: '2',
      title: 'Equipment Rental Services',
      description: 'Professional equipment rental with 24/7 support.',
      advertiser: 'Al Faris Equipment',
      category: 'services',
      type: 'banner',
      price: 0,
      budget: 2000,
      status: 'pending',
      startDate: '2024-01-10',
      endDate: '2024-02-10',
      targetAudience: ['contractors'],
      location: 'Abu Dhabi, UAE',
      images: [],
      clicks: 0,
      impressions: 0,
      contactInfo: {
        phone: '+971 50 987 6543',
        email: 'rentals@alfaris.ae'
      },
      createdAt: '2024-01-10',
      updatedAt: '2024-01-10'
    },
    {
      id: '3',
      title: 'Komatsu Parts Sale',
      description: 'Genuine Komatsu parts at discounted prices.',
      advertiser: 'Parts Direct',
      category: 'parts',
      type: 'sponsored',
      price: 15000,
      budget: 800,
      status: 'rejected',
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      targetAudience: ['mechanics'],
      location: 'Riyadh, KSA',
      images: ['/api/placeholder/400/300'],
      clicks: 0,
      impressions: 0,
      contactInfo: {
        phone: '+966 50 456 7890',
        email: 'parts@direct.com'
      },
      createdAt: '2024-01-15',
      updatedAt: '2024-01-16'
    }
  ]);

  const stats = [
    {
      title: 'Total Ads',
      value: advertisements.length,
      icon: TrendingUp,
      color: 'text-blue-600'
    },
    {
      title: 'Active Ads',
      value: advertisements.filter(ad => ad.status === 'active').length,
      icon: Check,
      color: 'text-green-600'
    },
    {
      title: 'Total Revenue',
      value: `$${advertisements.reduce((sum, ad) => sum + ad.budget, 0).toLocaleString()}`,
      icon: DollarSign,
      color: 'text-purple-600'
    },
    {
      title: 'Total Clicks',
      value: advertisements.reduce((sum, ad) => sum + ad.clicks, 0),
      icon: MousePointer,
      color: 'text-orange-600'
    }
  ];

  const getStatusBadge = (status: string) => {
    const colors = {
      active: 'bg-green-500',
      pending: 'bg-yellow-500',
      paused: 'bg-gray-500',
      expired: 'bg-red-500',
      rejected: 'bg-red-600',
      draft: 'bg-blue-500'
    };
    return (
      <Badge className={colors[status as keyof typeof colors]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const getTypeBadge = (type: string) => {
    const colors = {
      featured: 'bg-purple-500',
      banner: 'bg-blue-500',
      sponsored: 'bg-orange-500',
      premium: 'bg-gold-500',
      listing: 'bg-gray-500'
    };
    return (
      <Badge className={colors[type as keyof typeof colors]}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </Badge>
    );
  };

  const filteredAds = advertisements.filter(ad => {
    const matchesSearch = ad.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ad.advertiser.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || ad.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (adId: string, newStatus: string) => {
    setAdvertisements(prev => 
      prev.map(ad => 
        ad.id === adId 
          ? { ...ad, status: newStatus as Advertisement['status'], updatedAt: new Date().toISOString() }
          : ad
      )
    );
    toast.success(`Advertisement ${newStatus === 'active' ? 'approved' : newStatus}`);
  };

  const handleDeleteAd = (adId: string) => {
    setAdvertisements(prev => prev.filter(ad => ad.id !== adId));
    toast.success('Advertisement deleted successfully');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Advertisement Management</h1>
          <p className="text-muted-foreground">
            Review, approve, and manage all platform advertisements
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
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
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending Review</SelectItem>
                <SelectItem value="paused">Paused</SelectItem>
                <SelectItem value="expired">Expired</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Advertisements Table */}
      <Card>
        <CardHeader>
          <CardTitle>Advertisements ({filteredAds.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Advertisement</TableHead>
                <TableHead>Advertiser</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAds.map((ad) => (
                <TableRow key={ad.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{ad.title}</p>
                      <p className="text-sm text-muted-foreground">{ad.location}</p>
                    </div>
                  </TableCell>
                  <TableCell>{ad.advertiser}</TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {ad.category.charAt(0).toUpperCase() + ad.category.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>{getTypeBadge(ad.type)}</TableCell>
                  <TableCell>{getStatusBadge(ad.status)}</TableCell>
                  <TableCell>${ad.budget.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <p>{ad.clicks} clicks</p>
                      <p className="text-muted-foreground">{ad.impressions} impressions</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <p>{new Date(ad.createdAt).toLocaleDateString()}</p>
                      <p className="text-muted-foreground">
                        {new Date(ad.endDate).toLocaleDateString()}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <Dialog>
                          <DialogTrigger asChild>
                            <DropdownMenuItem onSelect={(e) => {
                              e.preventDefault();
                              setSelectedAd(ad);
                            }}>
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                          </DialogTrigger>
                        </Dialog>
                        
                        {ad.status === 'pending' && (
                          <>
                            <DropdownMenuItem 
                              onClick={() => handleStatusChange(ad.id, 'active')}
                              className="text-green-600"
                            >
                              <Check className="h-4 w-4 mr-2" />
                              Approve
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              onClick={() => handleStatusChange(ad.id, 'rejected')}
                              className="text-red-600"
                            >
                              <X className="h-4 w-4 mr-2" />
                              Reject
                            </DropdownMenuItem>
                          </>
                        )}
                        
                        {ad.status === 'active' && (
                          <DropdownMenuItem onClick={() => handleStatusChange(ad.id, 'paused')}>
                            <X className="h-4 w-4 mr-2" />
                            Pause
                          </DropdownMenuItem>
                        )}
                        
                        <DropdownMenuItem 
                          onClick={() => handleDeleteAd(ad.id)}
                          className="text-red-600"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Ad Details Dialog */}
      {selectedAd && (
        <Dialog open={!!selectedAd} onOpenChange={() => setSelectedAd(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedAd.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Advertiser</p>
                  <p className="text-muted-foreground">{selectedAd.advertiser}</p>
                </div>
                <div>
                  <p className="font-medium">Category</p>
                  <Badge variant="outline">
                    {selectedAd.category.charAt(0).toUpperCase() + selectedAd.category.slice(1)}
                  </Badge>
                </div>
              </div>
              
              <div>
                <p className="font-medium mb-2">Description</p>
                <p className="text-muted-foreground">{selectedAd.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Contact Info</p>
                  <p className="text-sm">{selectedAd.contactInfo.phone}</p>
                  <p className="text-sm">{selectedAd.contactInfo.email}</p>
                </div>
                <div>
                  <p className="font-medium">Performance</p>
                  <p className="text-sm">{selectedAd.clicks} clicks</p>
                  <p className="text-sm">{selectedAd.impressions} impressions</p>
                </div>
              </div>
              
              {selectedAd.images.length > 0 && (
                <div>
                  <p className="font-medium mb-2">Images</p>
                  <div className="flex gap-2">
                    {selectedAd.images.map((image, index) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`Ad image ${index + 1}`}
                        className="w-20 h-20 object-cover rounded"
                      />
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex gap-2 pt-4">
                {selectedAd.status === 'pending' && (
                  <>
                    <Button 
                      onClick={() => {
                        handleStatusChange(selectedAd.id, 'active');
                        setSelectedAd(null);
                      }}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Approve
                    </Button>
                    <Button 
                      variant="destructive"
                      onClick={() => {
                        handleStatusChange(selectedAd.id, 'rejected');
                        setSelectedAd(null);
                      }}
                    >
                      Reject
                    </Button>
                  </>
                )}
                <Button variant="outline" onClick={() => setSelectedAd(null)}>
                  Close
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default AdvertisementManagement;