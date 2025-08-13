import { useState, useMemo } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, SlidersHorizontal, Grid3X3, List } from 'lucide-react';
import RentalCard from '../../components/RentalCard';
import RentalFilters, { RentalFilters as FilterType } from '../../components/RentalFilters';
import { RentalEquipment } from '../../types';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Mock data
const mockRentals: RentalEquipment[] = [
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
      'Bucket Capacity': '1.2 m³',
      'Max Digging Depth': '6.5 m'
    },
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
  {
    id: '2',
    title: 'Komatsu PC210 Excavator',
    category: 'Excavators',
    description: 'Reliable excavator with excellent fuel efficiency',
    images: ['/placeholder.svg'],
    dailyRate: 380,
    weeklyRate: 2400,
    monthlyRate: 9000,
    location: 'Dallas, TX',
    availability: 'available',
    specifications: {
      'Operating Weight': '21,200 kg',
      'Engine Power': '123 kW',
      'Bucket Capacity': '1.0 m³'
    },
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
  }
];

export default function BrowseRentalsPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterType>({
    category: 'All Categories',
    location: '',
    priceRange: [50, 5000],
    startDate: '',
    endDate: '',
    deliveryAvailable: false,
    verified: false,
    minDuration: 1,
    maxDuration: 365
  });

  const filteredRentals = useMemo(() => {
    return mockRentals.filter(rental => {
      // Search query filter
      if (searchQuery && !rental.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !rental.category.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Category filter
      if (filters.category !== 'All Categories' && rental.category !== filters.category) {
        return false;
      }

      // Location filter
      if (filters.location && !rental.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }

      // Price range filter
      if (rental.dailyRate < filters.priceRange[0] || rental.dailyRate > filters.priceRange[1]) {
        return false;
      }

      // Delivery filter
      if (filters.deliveryAvailable && !rental.deliveryAvailable) {
        return false;
      }

      // Verified filter
      if (filters.verified && !rental.owner.verified) {
        return false;
      }

      // Duration filters
      if (rental.minRentalPeriod > filters.maxDuration || rental.maxRentalPeriod < filters.minDuration) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.dailyRate - b.dailyRate;
        case 'price-high':
          return b.dailyRate - a.dailyRate;
        case 'rating':
          return b.owner.rating - a.owner.rating;
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });
  }, [searchQuery, filters, sortBy]);

  const handleBook = (equipmentId: string) => {
    navigate(`/rentals/${equipmentId}/book`);
  };

  const clearFilters = () => {
    setFilters({
      category: 'All Categories',
      location: '',
      priceRange: [50, 5000],
      startDate: '',
      endDate: '',
      deliveryAvailable: false,
      verified: false,
      minDuration: 1,
      maxDuration: 365
    });
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Browse Equipment Rentals</h1>
          <p className="text-muted-foreground">
            Find the perfect construction equipment for your next project
          </p>
        </div>

        {/* Search and Controls */}
        <div className="mb-6 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search equipment by name, category, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {filteredRentals.length} equipment available
            </p>

            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Most Relevant</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest Listed</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mb-6">
            <RentalFilters
              filters={filters}
              onFiltersChange={setFilters}
              onClearFilters={clearFilters}
            />
          </div>
        )}

        {/* Results */}
        {filteredRentals.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No equipment found matching your criteria</p>
            <Button onClick={clearFilters}>Clear Filters</Button>
          </div>
        ) : (
          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'space-y-4'
          }>
            {filteredRentals.map((rental) => (
              <RentalCard
                key={rental.id}
                equipment={rental}
                onBook={handleBook}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}