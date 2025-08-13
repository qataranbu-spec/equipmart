import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { 
  Clock, 
  DollarSign, 
  Gavel, 
  Users, 
  Eye, 
  Play, 
  Pause, 
  Plus,
  Filter,
  Search,
  TrendingUp,
  TrendingDown,
  AlertCircle
} from 'lucide-react';
import { format, differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns';

// Mock data for auctions
const mockAuctions = [
  {
    id: '1',
    title: 'Heavy Excavator Fleet - 10 Units',
    description: 'Fleet of 10 Caterpillar 320 excavators, excellent condition, low hours.',
    category: 'Heavy Machinery',
    startingPrice: 1200000,
    currentPrice: 1450000,
    reservePrice: 1600000,
    startDate: new Date('2024-08-25T09:00:00'),
    endDate: new Date('2024-08-30T17:00:00'),
    status: 'active' as const,
    participants: 24,
    highestBidder: 'Industrial Equipment Co.',
    totalBids: 87,
    images: [],
    items: [
      {
        id: '1',
        name: 'CAT 320 Excavator #1',
        description: '2018 model, 2,400 hours',
        quantity: 1,
        condition: 'Excellent',
        estimatedValue: 160000
      }
    ],
    createdAt: new Date('2024-08-20'),
    viewCount: 156,
    watchlistCount: 43
  },
  {
    id: '2',
    title: 'Industrial Generator Set - Emergency Power',
    description: 'Caterpillar 500kW diesel generator, perfect for backup power systems.',
    category: 'Industrial Equipment',
    startingPrice: 75000,
    currentPrice: 92000,
    reservePrice: 110000,
    startDate: new Date('2024-08-28T10:00:00'),
    endDate: new Date('2024-09-02T16:00:00'),
    status: 'upcoming' as const,
    participants: 12,
    totalBids: 0,
    images: [],
    items: [
      {
        id: '1',
        name: 'CAT 500kW Generator',
        description: '2020 model, 1,200 hours',
        quantity: 1,
        condition: 'Very Good',
        estimatedValue: 95000
      }
    ],
    createdAt: new Date('2024-08-22'),
    viewCount: 89,
    watchlistCount: 28
  },
  {
    id: '3',
    title: 'Construction Tools & Equipment Lot',
    description: 'Mixed lot of construction tools, small equipment, and accessories.',
    category: 'Tools & Equipment',
    startingPrice: 15000,
    currentPrice: 18500,
    reservePrice: 25000,
    startDate: new Date('2024-08-20T08:00:00'),
    endDate: new Date('2024-08-24T18:00:00'),
    status: 'ended' as const,
    participants: 18,
    highestBidder: 'BuildCorp Solutions',
    totalBids: 45,
    images: [],
    items: [
      {
        id: '1',
        name: 'Tool Collection',
        description: 'Various hand and power tools',
        quantity: 50,
        condition: 'Mixed',
        estimatedValue: 20000
      }
    ],
    createdAt: new Date('2024-08-15'),
    viewCount: 234,
    watchlistCount: 67
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active': return 'default';
    case 'upcoming': return 'secondary';
    case 'ended': return 'outline';
    case 'cancelled': return 'destructive';
    default: return 'default';
  }
};

const formatTimeRemaining = (endDate: Date) => {
  const now = new Date();
  const totalMinutes = differenceInMinutes(endDate, now);
  
  if (totalMinutes <= 0) return 'Ended';
  
  const days = Math.floor(totalMinutes / (24 * 60));
  const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
  const minutes = totalMinutes % 60;
  
  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
};

export default function EAuctionPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedAuction, setSelectedAuction] = useState<typeof mockAuctions[0] | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update current time every minute for countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const filteredAuctions = mockAuctions.filter(auction => {
    const matchesSearch = auction.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         auction.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || auction.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || auction.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const categories = ['Heavy Machinery', 'Industrial Equipment', 'Tools & Equipment', 'Vehicles', 'Materials'];

  const activeAuctions = mockAuctions.filter(a => a.status === 'active').length;
  const totalValue = mockAuctions.reduce((sum, a) => sum + a.currentPrice, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">E-Auction Platform</h1>
              <p className="text-muted-foreground mt-2">
                Participate in live auctions for industrial equipment and machinery
              </p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Auction
            </Button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Auctions</p>
                  <p className="text-2xl font-bold text-green-600">{activeAuctions}</p>
                </div>
                <Gavel className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Participants</p>
                  <p className="text-2xl font-bold">156</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Value</p>
                  <p className="text-2xl font-bold">${totalValue.toLocaleString()}</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                  <p className="text-2xl font-bold">94%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search auctions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[150px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="ended">Ended</SelectItem>
                </SelectContent>
              </Select>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="grid" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-[600px]">
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="live">Live Auctions</TabsTrigger>
          </TabsList>

          <TabsContent value="grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAuctions.map((auction) => (
              <Card key={auction.id} className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <Gavel className="h-12 w-12 text-gray-400" />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={getStatusColor(auction.status)}>
                      {auction.status.charAt(0).toUpperCase() + auction.status.slice(1)}
                    </Badge>
                    {auction.status === 'active' && (
                      <div className="flex items-center gap-1 text-red-600">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          {formatTimeRemaining(auction.endDate)}
                        </span>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{auction.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {auction.category}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Current Price:</span>
                      <span className="font-semibold text-green-600">
                        ${auction.currentPrice.toLocaleString()}
                      </span>
                    </div>
                    {auction.status === 'active' && (
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Reserve:</span>
                        <span className="text-sm">
                          ${auction.reservePrice?.toLocaleString()}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Participants:</span>
                      <span className="text-sm font-medium">{auction.participants}</span>
                    </div>
                    {auction.status === 'active' && auction.reservePrice && (
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress to Reserve</span>
                          <span>{Math.round((auction.currentPrice / auction.reservePrice) * 100)}%</span>
                        </div>
                        <Progress 
                          value={(auction.currentPrice / auction.reservePrice) * 100} 
                          className="h-2"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => setSelectedAuction(auction)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>{auction.title}</DialogTitle>
                          <DialogDescription>{auction.description}</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card>
                              <CardContent className="p-4">
                                <div className="space-y-2">
                                  <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Starting Price:</span>
                                    <span>${auction.startingPrice.toLocaleString()}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Current Price:</span>
                                    <span className="font-semibold text-green-600">
                                      ${auction.currentPrice.toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Reserve Price:</span>
                                    <span>${auction.reservePrice?.toLocaleString()}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Total Bids:</span>
                                    <span>{auction.totalBids}</span>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardContent className="p-4">
                                <div className="space-y-2">
                                  <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Start Time:</span>
                                    <span className="text-sm">
                                      {format(auction.startDate, 'MMM dd, HH:mm')}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">End Time:</span>
                                    <span className="text-sm">
                                      {format(auction.endDate, 'MMM dd, HH:mm')}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Participants:</span>
                                    <span>{auction.participants}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Watching:</span>
                                    <span>{auction.watchlistCount}</span>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                          
                          <div>
                            <h4 className="font-medium mb-3">Auction Items</h4>
                            {auction.items.map((item) => (
                              <Card key={item.id}>
                                <CardContent className="p-4">
                                  <div className="flex justify-between items-start mb-2">
                                    <h5 className="font-medium">{item.name}</h5>
                                    <Badge variant="outline">{item.condition}</Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                                  <div className="flex justify-between text-sm">
                                    <span>Quantity: {item.quantity}</span>
                                    <span>Est. Value: ${item.estimatedValue.toLocaleString()}</span>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                          
                          {auction.status === 'active' && (
                            <div className="flex gap-4 pt-4 border-t">
                              <Button className="flex-1">
                                Place Bid
                              </Button>
                              <Button variant="outline">
                                Add to Watchlist
                              </Button>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                    {auction.status === 'active' && (
                      <Button size="sm" className="flex-1">
                        <Gavel className="h-4 w-4 mr-1" />
                        Bid Now
                      </Button>
                    )}
                    {auction.status === 'upcoming' && (
                      <Button size="sm" variant="outline" className="flex-1">
                        <Clock className="h-4 w-4 mr-1" />
                        Watch
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="list" className="space-y-4">
            {filteredAuctions.map((auction) => (
              <Card key={auction.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{auction.title}</h3>
                        <Badge variant={getStatusColor(auction.status)}>
                          {auction.status.charAt(0).toUpperCase() + auction.status.slice(1)}
                        </Badge>
                        {auction.status === 'active' && (
                          <div className="flex items-center gap-1 text-red-600">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              {formatTimeRemaining(auction.endDate)}
                            </span>
                          </div>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-3">{auction.description}</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Current Price:</span>
                          <div className="font-semibold text-green-600">
                            ${auction.currentPrice.toLocaleString()}
                          </div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Participants:</span>
                          <div className="font-medium">{auction.participants}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Total Bids:</span>
                          <div className="font-medium">{auction.totalBids}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">End Time:</span>
                          <div className="font-medium">
                            {format(auction.endDate, 'MMM dd, HH:mm')}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 ml-4">
                      <Button size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      {auction.status === 'active' && (
                        <Button size="sm">
                          <Gavel className="h-4 w-4 mr-2" />
                          Place Bid
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="live" className="space-y-6">
            <div className="text-center py-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <h2 className="text-2xl font-bold">Live Auctions</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Real-time bidding on active auctions
              </p>
            </div>

            {mockAuctions.filter(a => a.status === 'active').map((auction) => (
              <Card key={auction.id} className="border-red-200 bg-red-50/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <CardTitle className="text-xl">{auction.title}</CardTitle>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">
                        ${auction.currentPrice.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Current High Bid
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Time Remaining</div>
                        <div className="text-lg font-semibold text-red-600">
                          {formatTimeRemaining(auction.endDate)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Leading Bidder</div>
                        <div className="font-medium">{auction.highestBidder || 'No bids yet'}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Total Bids</div>
                        <div className="font-medium">{auction.totalBids}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Reserve Price</div>
                        <div className="font-medium">${auction.reservePrice?.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Participants</div>
                        <div className="font-medium">{auction.participants} bidders</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Watching</div>
                        <div className="font-medium">{auction.watchlistCount} users</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="p-4 bg-background rounded-lg border">
                        <Input 
                          placeholder={`Min bid: $${(auction.currentPrice + 1000).toLocaleString()}`}
                          className="mb-3"
                        />
                        <Button className="w-full" size="lg">
                          <Gavel className="h-4 w-4 mr-2" />
                          Place Bid
                        </Button>
                      </div>
                      <Button variant="outline" className="w-full">
                        <Eye className="h-4 w-4 mr-2" />
                        View Full Details
                      </Button>
                    </div>
                  </div>
                  
                  {auction.reservePrice && (
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress to Reserve Price</span>
                        <span>{Math.round((auction.currentPrice / auction.reservePrice) * 100)}%</span>
                      </div>
                      <Progress 
                        value={(auction.currentPrice / auction.reservePrice) * 100} 
                        className="h-2"
                      />
                      {auction.currentPrice >= auction.reservePrice && (
                        <div className="flex items-center gap-2 mt-2 text-green-600">
                          <AlertCircle className="h-4 w-4" />
                          <span className="text-sm font-medium">Reserve price met!</span>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
            
            {mockAuctions.filter(a => a.status === 'active').length === 0 && (
              <Card>
                <CardContent className="text-center py-12">
                  <Pause className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Live Auctions</h3>
                  <p className="text-muted-foreground">
                    There are currently no active auctions. Check back later or create your own auction.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
}