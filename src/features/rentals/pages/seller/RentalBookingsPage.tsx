import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar as CalendarIcon, Search, DollarSign, Clock } from 'lucide-react';
import BookingCard from '../../components/BookingCard';
import { RentalBooking } from '../../types';
import { toast } from 'sonner';

// Mock data for seller's bookings
const mockSellerBookings: RentalBooking[] = [
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
    renterId: 'buyer1',
    renterName: 'John Construction',
    renterEmail: 'john@construction.com',
    renterPhone: '+1-555-0123',
    ownerId: 'seller1',
    startDate: '2024-02-15',
    endDate: '2024-02-22',
    totalDays: 7,
    dailyRate: 450,
    totalAmount: 3150,
    securityDeposit: 2000,
    status: 'pending',
    deliveryAddress: '456 Construction Ave, Houston, TX',
    specialRequirements: 'Need delivery before 8 AM. Site has limited access.',
    projectType: 'Foundation work',
    paymentStatus: 'pending',
    createdAt: '2024-02-01T00:00:00Z',
    updatedAt: '2024-02-01T00:00:00Z'
  },
  {
    id: '2',
    equipmentId: '2',
    equipment: {
      id: '2',
      title: 'Komatsu Bulldozer D65',
      category: 'Bulldozers',
      description: 'Heavy-duty bulldozer',
      images: ['/placeholder.svg'],
      dailyRate: 520,
      weeklyRate: 3200,
      monthlyRate: 12000,
      location: 'Houston, TX',
      availability: 'rented',
      specifications: {},
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
      securityDeposit: 2500,
      createdAt: '2024-01-10T00:00:00Z',
      updatedAt: '2024-01-10T00:00:00Z'
    },
    renterId: 'buyer2',
    renterName: 'ABC Development',
    renterEmail: 'contact@abcdev.com',
    renterPhone: '+1-555-0456',
    ownerId: 'seller1',
    startDate: '2024-02-01',
    endDate: '2024-02-14',
    totalDays: 14,
    dailyRate: 520,
    totalAmount: 7280,
    securityDeposit: 2500,
    status: 'active',
    paymentStatus: 'paid',
    createdAt: '2024-01-20T00:00:00Z',
    updatedAt: '2024-02-01T00:00:00Z'
  }
];

export default function RentalBookingsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const filteredBookings = mockSellerBookings.filter(booking => {
    // Search filter
    if (searchQuery && 
        !booking.equipment.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !booking.renterName.toLowerCase().includes(searchQuery.toLowerCase())) {
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
      case 'start-date':
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
      default:
        return 0;
    }
  });

  const pendingBookings = filteredBookings.filter(b => b.status === 'pending');
  const activeBookings = filteredBookings.filter(b => ['confirmed', 'active'].includes(b.status));
  const completedBookings = filteredBookings.filter(b => ['completed', 'cancelled'].includes(b.status));

  const handleBookingAction = (action: string, bookingId: string) => {
    const booking = mockSellerBookings.find(b => b.id === bookingId);
    if (!booking) return;

    switch (action) {
      case 'confirm':
        toast.success(`Booking for ${booking.equipment.title} confirmed`);
        break;
      case 'decline':
        toast.success(`Booking for ${booking.equipment.title} declined`);
        break;
      case 'start':
        toast.success(`Rental for ${booking.equipment.title} marked as started`);
        break;
      case 'complete':
        toast.success(`Rental for ${booking.equipment.title} marked as complete`);
        break;
      case 'cancel':
        toast.success(`Booking for ${booking.equipment.title} cancelled`);
        break;
      default:
        break;
    }
  };

  const getTotalStats = () => {
    const totalRevenue = mockSellerBookings
      .filter(b => b.status === 'completed')
      .reduce((sum, b) => sum + b.totalAmount, 0);
    
    const pendingRevenue = mockSellerBookings
      .filter(b => ['pending', 'confirmed', 'active'].includes(b.status))
      .reduce((sum, b) => sum + b.totalAmount, 0);

    return { totalRevenue, pendingRevenue };
  };

  const { totalRevenue, pendingRevenue } = getTotalStats();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Rental Bookings</h1>
          <p className="text-muted-foreground">Manage incoming rental requests and active bookings</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-card rounded-lg p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Requests</p>
                <p className="text-3xl font-bold">{pendingBookings.length}</p>
              </div>
              <Clock className="h-8 w-8 text-orange-500" />
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Rentals</p>
                <p className="text-3xl font-bold">{activeBookings.length}</p>
              </div>
              <CalendarIcon className="h-8 w-8 text-primary" />
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Revenue</p>
                <p className="text-3xl font-bold">${pendingRevenue.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-500" />
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
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
                placeholder="Search by equipment or renter name..."
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
                <SelectItem value="start-date">By Start Date</SelectItem>
                <SelectItem value="amount-high">Amount: High to Low</SelectItem>
                <SelectItem value="amount-low">Amount: Low to High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Booking Tabs */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList>
            <TabsTrigger value="pending" className="flex items-center gap-2">
              Pending
              <Badge variant="secondary">{pendingBookings.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="active" className="flex items-center gap-2">
              Active
              <Badge variant="secondary">{activeBookings.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex items-center gap-2">
              History
              <Badge variant="secondary">{completedBookings.length}</Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-6">
            {pendingBookings.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No pending booking requests</p>
              </div>
            ) : (
              <div className="grid gap-6">
                {pendingBookings.map((booking) => (
                  <BookingCard
                    key={booking.id}
                    booking={booking}
                    onAction={handleBookingAction}
                    viewType="owner"
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="active" className="space-y-6">
            {activeBookings.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No active rentals</p>
              </div>
            ) : (
              <div className="grid gap-6">
                {activeBookings.map((booking) => (
                  <BookingCard
                    key={booking.id}
                    booking={booking}
                    onAction={handleBookingAction}
                    viewType="owner"
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
                    viewType="owner"
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