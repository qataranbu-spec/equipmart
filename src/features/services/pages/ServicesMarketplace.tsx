import React, { useState, useMemo } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ServiceProviderCard } from '../components/ServiceProviderCard';
import { ServiceRequestCard } from '../components/ServiceRequestCard';
import { ServiceFilters } from '../components/ServiceFilters';
import { 
  Search, 
  Plus, 
  MapPin, 
  Star, 
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Filter
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesMarketplace = () => {
  const [activeTab, setActiveTab] = useState<'providers' | 'requests'>('providers');
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    location: '',
    equipmentType: '',
    minRating: 0,
    maxRate: 0,
    availability: '',
    verified: false,
    experience: ''
  });

  // Mock data - in real app, this would come from API
  const serviceProviders = [
    {
      id: '1',
      name: 'Gulf Technical Services',
      avatar: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=face',
      specialization: 'Heavy Equipment Maintenance',
      rating: 4.9,
      reviews: 234,
      location: 'Dubai, UAE',
      experience: '15+ years',
      verified: true,
      responseTime: '2 hours',
      hourlyRate: 75,
      availability: 'available' as const,
      services: ['Maintenance', 'Repair', 'Installation', 'Emergency Service'],
      certifications: ['ISO 9001', 'OSHA Certified'],
      completedJobs: 1250,
      description: 'Specialized in heavy equipment maintenance and repair with over 15 years of experience. We provide 24/7 emergency services and have a team of certified technicians.'
    },
    {
      id: '2',
      name: 'Emirates Heavy Transport',
      avatar: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=100&h=100&fit=crop&crop=face',
      specialization: 'Equipment Transportation',
      rating: 4.8,
      reviews: 189,
      location: 'Abu Dhabi, UAE',
      experience: '12+ years',
      verified: true,
      responseTime: '1 hour',
      hourlyRate: 120,
      availability: 'busy' as const,
      services: ['Transportation', 'Logistics', 'Delivery', 'Site Preparation'],
      certifications: ['DOT Certified', 'Heavy Transport License'],
      completedJobs: 850,
      description: 'Premier heavy equipment transportation service with specialized trailers and experienced operators. We handle oversized loads across the UAE.'
    },
    {
      id: '3',
      name: 'Al Naboodah Technical',
      avatar: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=100&h=100&fit=crop&crop=face',
      specialization: 'Multi-Equipment Services',
      rating: 4.7,
      reviews: 312,
      location: 'Sharjah, UAE',
      experience: '20+ years',
      verified: true,
      responseTime: '3 hours',
      hourlyRate: 85,
      availability: 'available' as const,
      services: ['Maintenance', 'Operators', 'Training', 'Consulting'],
      certifications: ['UAE Trade License', 'Equipment Safety'],
      completedJobs: 1800,
      description: 'Comprehensive construction equipment services including operator training, equipment maintenance, and technical consulting for major projects.'
    }
  ];

  const serviceRequests = [
    {
      id: '1',
      title: 'Excavator Hydraulic System Repair',
      category: 'Equipment Maintenance',
      equipmentType: 'Excavators',
      location: 'Dubai, UAE',
      budget: '$5,000 - $10,000',
      startDate: '2024-02-15',
      endDate: '2024-02-20',
      priority: 'high' as const,
      status: 'open' as const,
      description: 'Need urgent repair for hydraulic system failure on Caterpillar 320D excavator. Equipment is currently down and affecting project timeline.',
      postedDate: '2024-02-01',
      proposals: 8,
      clientName: 'Emirates Construction',
      clientRating: 4.5
    },
    {
      id: '2',
      title: 'Daily Equipment Operators Needed',
      category: 'Operator Services',
      equipmentType: 'Multiple',
      location: 'Abu Dhabi, UAE',
      budget: 'Hourly Rate',
      startDate: '2024-02-10',
      endDate: '2024-03-15',
      priority: 'medium' as const,
      status: 'open' as const,
      description: 'Looking for certified equipment operators for a major construction project. Need operators for excavators, cranes, and bulldozers.',
      postedDate: '2024-01-28',
      proposals: 15,
      clientName: 'Gulf Infrastructure',
      clientRating: 4.2
    }
  ];

  const stats = [
    {
      title: 'Active Providers',
      value: '2,847',
      icon: Users,
      change: '+12%',
      changeType: 'positive' as const
    },
    {
      title: 'Service Requests',
      value: '1,234',
      icon: Clock,
      change: '+8%',
      changeType: 'positive' as const
    },
    {
      title: 'Completed Jobs',
      value: '45,692',
      icon: CheckCircle,
      change: '+15%',
      changeType: 'positive' as const
    },
    {
      title: 'Average Rating',
      value: '4.8',
      icon: Star,
      change: '+0.2%',
      changeType: 'positive' as const
    }
  ];

  const activeFiltersCount = useMemo(() => {
    return Object.entries(filters).reduce((count, [key, value]) => {
      if (key === 'verified' && value) return count + 1;
      if (key === 'minRating' && typeof value === 'number' && value > 0) return count + 1;
      if (key === 'maxRate' && typeof value === 'number' && value > 0) return count + 1;
      if (typeof value === 'string' && value.length > 0) return count + 1;
      return count;
    }, 0);
  }, [filters]);

  const filteredProviders = useMemo(() => {
    return serviceProviders.filter(provider => {
      if (searchTerm && !provider.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !provider.specialization.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      if (typeof filters.minRating === 'number' && filters.minRating > 0 && provider.rating < filters.minRating) return false;
      if (typeof filters.maxRate === 'number' && filters.maxRate > 0 && provider.hourlyRate > filters.maxRate) return false;
      if (filters.verified && !provider.verified) return false;
      if (filters.location && !provider.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
      return true;
    });
  }, [serviceProviders, searchTerm, filters]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Services Marketplace</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with certified service providers and find the perfect match for your construction equipment needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/post-service-request">
                <Button size="lg">
                  <Plus className="h-5 w-5 mr-2" />
                  Post Service Request
                </Button>
              </Link>
              <Link to="/register-as-provider">
                <Button variant="outline" size="lg">
                  Join as Service Provider
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <div className="flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
                      <span className="text-xs text-green-600">{stat.change}</span>
                    </div>
                  </div>
                  <stat.icon className="h-8 w-8 text-primary/60" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search Bar */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search providers, services, or equipment..."
                  className="pl-10 h-12"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <Badge variant="secondary" className="ml-2">
                      {activeFiltersCount}
                    </Badge>
                  )}
                </Button>
                <Button>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="lg:w-1/4">
              <ServiceFilters
                filters={filters}
                onFiltersChange={setFilters}
                onClearFilters={() => setFilters({
                  search: '',
                  category: '',
                  location: '',
                  equipmentType: '',
                  minRating: 0,
                  maxRate: 0,
                  availability: '',
                  verified: false,
                  experience: ''
                })}
                activeFiltersCount={activeFiltersCount}
              />
            </div>
          )}

          {/* Main Content */}
          <div className={showFilters ? "lg:w-3/4" : "w-full"}>
            {/* Tabs */}
            <div className="flex space-x-1 mb-6">
              <Button
                variant={activeTab === 'providers' ? 'default' : 'outline'}
                onClick={() => setActiveTab('providers')}
                className="flex-1"
              >
                Service Providers ({filteredProviders.length})
              </Button>
              <Button
                variant={activeTab === 'requests' ? 'default' : 'outline'}
                onClick={() => setActiveTab('requests')}
                className="flex-1"
              >
                Service Requests ({serviceRequests.length})
              </Button>
            </div>

            {/* Content */}
            {activeTab === 'providers' ? (
              <div className="space-y-6">
                {filteredProviders.map((provider) => (
                  <ServiceProviderCard
                    key={provider.id}
                    provider={provider}
                    onContact={(id) => console.log('Contact provider', id)}
                    onViewProfile={(id) => console.log('View provider profile', id)}
                    onSchedule={(id) => console.log('Schedule with provider', id)}
                  />
                ))}

                {filteredProviders.length === 0 && (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No providers found</h3>
                      <p className="text-muted-foreground mb-4">
                        Try adjusting your search criteria or clearing some filters.
                      </p>
                      <Button variant="outline" onClick={() => setFilters({
                        search: '',
                        category: '',
                        location: '',
                        equipmentType: '',
                        minRating: 0,
                        maxRate: 0,
                        availability: '',
                        verified: false,
                        experience: ''
                      })}>
                        Clear Filters
                      </Button>
                    </CardContent>
                  </Card>
                )}

                {filteredProviders.length > 0 && (
                  <div className="text-center">
                    <Button variant="outline">
                      Load More Providers
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                {serviceRequests.map((request) => (
                  <ServiceRequestCard
                    key={request.id}
                    request={request}
                    onSubmitProposal={(id) => console.log('Submit proposal for', id)}
                    onViewDetails={(id) => console.log('View request details', id)}
                  />
                ))}

                <div className="text-center">
                  <Button variant="outline">
                    Load More Requests
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};