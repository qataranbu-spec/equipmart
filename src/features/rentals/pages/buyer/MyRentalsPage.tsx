import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Calendar, DollarSign } from 'lucide-react';
import BookingCard from '../../components/BookingCard';
import { RentalBooking } from '../../types';
import { toast } from 'sonner';

// Mock data
const mockBookings: RentalBooking[] = [
  {
    id: '1',
    equipmentId: '1',
    equipment: {
      id: '1',
      title: 'CAT 320 Hydraulic Excavator',
      category: 'Excavators',
      description: 'Professional grade excavator',
      images: ['/placeholder.svg'],
      dailyRate: 450,
      weeklyRate: 2800,
      monthlyRate: 10500,
      location: 'Houston, TX',
      availability: 'rented',
      specifications: {},
      owner: {
        id: 'owner1',
        name: 'Construction Solutions Inc.',
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
    renterId: 'user1',
    renterName: 'John Doe',
    renterEmail: 'john@example.com',
    renterPhone: '+1-555-0123',
    ownerId: 'owner1',
    startDate: '2024-02-01',
    endDate: '2024-02-07',
    totalDays: 7,
    dailyRate: 450,
    totalAmount: 3150,
    securityDeposit: 2000,
    status: 'active',
    deliveryAddress: '123 Construction Site Rd, Houston, TX',
    specialRequirements: 'Need early morning delivery at 6 AM',
    projectType: 'Foundation excavation',
    paymentStatus: 'paid',
    createdAt: '2024-01-25T00:00:00Z',
    updatedAt: '2024-01-30T00:00:00Z'
  },
  {
    id: '2',
    equipmentId: '2',
    equipment: {
      id: '2',
      title: 'Komatsu PC210 Excavator',
      category: 'Excavators',
      description: 'Reliable excavator',
      images: ['/placeholder.svg'],
      dailyRate: 380,
      weeklyRate: 2400,
      monthlyRate: 9000,
      location: 'Dallas, TX',
      availability: 'available',
      specifications: {},
      owner: {
        id: 'owner2',
        name: 'Heavy Equipment Rentals',
        rating: 4.6,
        verified: true
      },
      minRentalPeriod: 3,
      maxRentalPeriod: 60,
      deliveryAvailable: true,
      deliveryRadius: 30,
      securityDeposit: 1800,
      createdAt: '2024-01-20T00:00:00Z',
      updatedAt: '2024-01-20T00:00:00Z'
    },
    renterId: 'user1',
    renterName: 'John Doe',
    renterEmail: 'john@example.com',
    renterPhone: '+1-555-0123',
    ownerId: 'owner2',
    startDate: '2024-01-15',
    endDate: '2024-01-20',
    totalDays: 5,
    dailyRate: 380,
    totalAmount: 1900,
    securityDeposit: 1800,
    status: 'completed',
    paymentStatus: 'paid',
    createdAt: '2024-01-10T00:00:00Z',
    updatedAt: '2024-01-21T00:00:00Z'
  }
];

export default function MyRentalsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const filteredBookings = mockBookings.filter(booking => {
    // Search filter
    if (searchQuery && !booking.equipment.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Status filter
    if (statusFilter !== 'all' && booking.status !== statusFilter) {
      return false;
    }

    return true;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'oldest':
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      case 'amount-high':
        return b.totalAmount - a.totalAmount;
      case 'amount-low':
        return a.totalAmount - b.totalAmount;
      default:
        return 0;
    }
  });

  const activeBookings = filteredBookings.filter(b => ['pending', 'confirmed', 'active'].includes(b.status));
  const completedBookings = filteredBookings.filter(b => ['completed', 'cancelled'].includes(b.status));

  const handleBookingAction = (action: string, bookingId: string) => {
    switch (action) {
      case 'cancel':
        toast.success('Booking cancelled successfully');
        break;
      case 'extend':
        toast.success('Extension request sent');
        break;
      case 'review':
        toast.success('Review submitted');
        break;
      default:
        break;
    }
  };

  const getTotalStats = () => {
    const totalSpent = mockBookings
      .filter(b => b.status === 'completed')
      .reduce((sum, b) => sum + b.totalAmount, 0);
    
    const totalDays = mockBookings
      .filter(b => b.status === 'completed')
      .reduce((sum, b) => sum + b.totalDays, 0);

    return { totalSpent, totalDays };
  };

  const { totalSpent, totalDays } = getTotalStats();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Rentals</h1>
          <p className="text-muted-foreground">Manage your current and past equipment rentals</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card rounded-lg p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Rentals</p>
                <p className="text-3xl font-bold">{activeBookings.length}</p>
              </div>
              <Calendar className="h-8 w-8 text-primary" />
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Spent</p>
                <p className="text-3xl font-bold">${totalSpent.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Days Rented</p>
                <p className="text-3xl font-bold">{totalDays}</p>
              </div>
              <Calendar className="h-8 w-8 text-primary" />
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mb-6 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search by equipment name..."
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
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="amount-high">Amount: High to Low</SelectItem>
                <SelectItem value="amount-low">Amount: Low to High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Rental Tabs */}
        <Tabs defaultValue="active" className="space-y-6">
          <TabsList>
            <TabsTrigger value="active" className="flex items-center gap-2">
              Active
              <Badge variant="secondary">{activeBookings.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex items-center gap-2">
              History
              <Badge variant="secondary">{completedBookings.length}</Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-6">
            {activeBookings.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No active rentals</p>
                <Button asChild>
                  <a href="/rentals/browse">Browse Equipment</a>
                </Button>
              </div>
            ) : (
              <div className="grid gap-6">
                {activeBookings.map((booking) => (
                  <BookingCard
                    key={booking.id}
                    booking={booking}
                    onAction={handleBookingAction}
                    viewType="renter"
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="completed" className="space-y-6">
            {completedBookings.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No rental history</p>
              </div>
            ) : (
              <div className="grid gap-6">
                {completedBookings.map((booking) => (
                  <BookingCard
                    key={booking.id}
                    booking={booking}
                    onAction={handleBookingAction}
                    viewType="renter"
                    showActions={false}
                  />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}