import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Plus, Search, Edit, Trash2, Eye, Calendar, DollarSign, TrendingUp, Settings } from 'lucide-react';
import { RentalEquipment } from '../../types';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

// Mock data for seller's equipment
const mockSellerEquipment: RentalEquipment[] = [
  {
    id: '1',
    title: 'CAT 320 Hydraulic Excavator',
    category: 'Excavators',
    description: 'Professional grade excavator perfect for construction projects',
    images: ['/placeholder.svg'],
    dailyRate: 450,
    weeklyRate: 2800,
    monthlyRate: 10500,
    location: 'Houston, TX',
    availability: 'available',
    specifications: {
      'Operating Weight': '20,300 kg',
      'Engine Power': '122 kW',
      'Bucket Capacity': '1.2 m³'
    },
    owner: {
      id: 'seller1',
      name: 'My Equipment Co.',
      rating: 4.8,
      verified: true
    },
    minRentalPeriod: 1,
    maxRentalPeriod: 90,
    deliveryAvailable: true,
    deliveryRadius: 50,
    securityDeposit: 2000,
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  },
  {
    id: '2',
    title: 'Komatsu Bulldozer D65',
    category: 'Bulldozers',
    description: 'Heavy-duty bulldozer for earthmoving projects',
    images: ['/placeholder.svg'],
    dailyRate: 520,
    weeklyRate: 3200,
    monthlyRate: 12000,
    location: 'Houston, TX',
    availability: 'rented',
    specifications: {
      'Operating Weight': '17,800 kg',
      'Engine Power': '155 kW'
    },
    owner: {
      id: 'seller1',
      name: 'My Equipment Co.',
      rating: 4.8,
      verified: true
    },
    minRentalPeriod: 3,
    maxRentalPeriod: 60,
    deliveryAvailable: true,
    deliveryRadius: 40,
    securityDeposit: 2500,
    createdAt: '2024-01-10T00:00:00Z',
    updatedAt: '2024-01-10T00:00:00Z'
  }
];

export default function RentalListingsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedEquipment, setSelectedEquipment] = useState<RentalEquipment | null>(null);
  const [showSettingsDialog, setShowSettingsDialog] = useState(false);

  const filteredEquipment = mockSellerEquipment.filter(equipment => {
    // Search filter
    if (searchQuery && 
        !equipment.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !equipment.category.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Status filter
    if (statusFilter !== 'all' && equipment.availability !== statusFilter) {
      return false;
    }

    return true;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'oldest':
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      case 'price-high':
        return b.dailyRate - a.dailyRate;
      case 'price-low':
        return a.dailyRate - b.dailyRate;
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const handleToggleAvailability = (equipmentId: string) => {
    const equipment = mockSellerEquipment.find(e => e.id === equipmentId);
    if (equipment) {
      const newStatus = equipment.availability === 'available' ? 'maintenance' : 'available';
      toast.success(`Equipment status updated to ${newStatus}`);
    }
  };

  const handleDeleteListing = (equipmentId: string) => {
    const equipment = mockSellerEquipment.find(e => e.id === equipmentId);
    if (equipment) {
      toast.success(`${equipment.title} removed from listings`);
    }
  };

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'available': return 'default';
      case 'rented': return 'destructive';
      case 'maintenance': return 'secondary';
      default: return 'default';
    }
  };

  const getListingStats = () => {
    const available = mockSellerEquipment.filter(e => e.availability === 'available').length;
    const rented = mockSellerEquipment.filter(e => e.availability === 'rented').length;
    const totalRevenue = mockSellerEquipment
      .filter(e => e.availability === 'rented')
      .reduce((sum, e) => sum + e.dailyRate * 30, 0); // Rough monthly estimate

    return { available, rented, totalRevenue };
  };

  const { available, rented, totalRevenue } = getListingStats();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Equipment Listings</h1>
            <p className="text-muted-foreground">Manage your rental equipment inventory</p>
          </div>
          
          <div className="flex gap-3">
            <Button asChild>
              <Link to="/rentals/seller/list-equipment">
                <Plus className="h-4 w-4 mr-2" />
                Add Equipment
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-card rounded-lg p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Listings</p>
                <p className="text-3xl font-bold">{mockSellerEquipment.length}</p>
              </div>
              <Eye className="h-8 w-8 text-primary" />
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Available</p>
                <p className="text-3xl font-bold">{available}</p>
              </div>
              <Calendar className="h-8 w-8 text-green-500" />
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Currently Rented</p>
                <p className="text-3xl font-bold">{rented}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-500" />
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                <p className="text-3xl font-bold">${totalRevenue.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mb-6 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="rented">Currently Rented</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="title">By Title</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Equipment Grid */}
        {filteredEquipment.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No equipment listings found</p>
            <Button asChild>
              <Link to="/rentals/seller/list-equipment">Add Your First Equipment</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredEquipment.map((equipment) => (
              <Card key={equipment.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{equipment.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{equipment.category}</Badge>
                        <Badge variant={getAvailabilityColor(equipment.availability)}>
                          {equipment.availability}
                        </Badge>
                        {equipment.deliveryAvailable && (
                          <Badge variant="outline">Delivery Available</Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedEquipment(equipment)}
                          >
                            <Settings className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Equipment Settings</DialogTitle>
                          </DialogHeader>
                          
                          <div className="space-y-6">
                            <div className="flex items-center justify-between">
                              <div>
                                <Label>Available for Rent</Label>
                                <p className="text-sm text-muted-foreground">
                                  Toggle availability status
                                </p>
                              </div>
                              <Switch
                                checked={equipment.availability === 'available'}
                                onCheckedChange={() => handleToggleAvailability(equipment.id)}
                              />
                            </div>
                            
                            <Separator />
                            
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-muted-foreground">Daily Rate:</span>
                                <p className="font-medium">${equipment.dailyRate}</p>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Security Deposit:</span>
                                <p className="font-medium">${equipment.securityDeposit}</p>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Min Period:</span>
                                <p className="font-medium">{equipment.minRentalPeriod} days</p>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Max Period:</span>
                                <p className="font-medium">{equipment.maxRentalPeriod} days</p>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/rentals/seller/edit/${equipment.id}`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteListing(equipment.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <img
                        src={equipment.images[0]}
                        alt={equipment.title}
                        className="w-full h-32 object-cover rounded-lg border"
                      />
                    </div>

                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-muted-foreground">Description:</span>
                        <p className="text-sm line-clamp-2">{equipment.description}</p>
                      </div>
                      
                      <div>
                        <span className="text-sm text-muted-foreground">Location:</span>
                        <p className="text-sm font-medium">{equipment.location}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="text-center">
                          <div className="font-semibold">${equipment.dailyRate}</div>
                          <div className="text-xs text-muted-foreground">Daily</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold">${equipment.weeklyRate}</div>
                          <div className="text-xs text-muted-foreground">Weekly</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold">${equipment.monthlyRate}</div>
                          <div className="text-xs text-muted-foreground">Monthly</div>
                        </div>
                      </div>

                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="outline" asChild>
                          <Link to={`/rentals/${equipment.id}`}>View Public</Link>
                        </Button>
                        <Button size="sm" asChild>
                          <Link to={`/rentals/seller/analytics/${equipment.id}`}>
                            View Analytics
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}