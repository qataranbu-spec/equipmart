
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Clock, 
  Search, 
  Filter,
  Eye,
  Users,
  Gavel,
  MapPin,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

const BrowseLiveAuctions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('ending-soon');
  const [category, setCategory] = useState('all');

  const liveAuctions = [
    {
      id: 1,
      title: "Caterpillar 336 Excavator - 2020",
      currentBid: 125000,
      reservePrice: 110000,
      timeLeft: "2h 45m",
      bidders: 12,
      bids: 47,
      condition: "Excellent",
      location: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
      seller: "Al Futtaim Equipment",
      category: "Excavators"
    },
    {
      id: 2,
      title: "Liebherr LTM 1050 Mobile Crane",
      currentBid: 285000,
      reservePrice: 250000,
      timeLeft: "1h 23m",
      bidders: 8,
      bids: 23,
      condition: "Good",
      location: "Abu Dhabi, UAE",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      seller: "Gulf Heavy Equipment",
      category: "Cranes"
    },
    {
      id: 3,
      title: "John Deere 850K Crawler Dozer",
      currentBid: 95000,
      reservePrice: 85000,
      timeLeft: "4h 12m",
      bidders: 15,
      bids: 62,
      condition: "Very Good",
      location: "Sharjah, UAE",
      image: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=400&h=300&fit=crop",
      seller: "Emirates Construction Co.",
      category: "Bulldozers"
    },
    {
      id: 4,
      title: "Volvo L120H Wheel Loader",
      currentBid: 180000,
      reservePrice: 165000,
      timeLeft: "6h 30m",
      bidders: 20,
      bids: 85,
      condition: "Excellent",
      location: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
      seller: "Heavy Machinery LLC",
      category: "Loaders"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-secondary py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Browse Live Auctions</h1>
          <p className="text-muted-foreground">Find and bid on construction equipment currently at auction</p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search auctions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="excavators">Excavators</SelectItem>
                <SelectItem value="cranes">Cranes</SelectItem>
                <SelectItem value="bulldozers">Bulldozers</SelectItem>
                <SelectItem value="loaders">Loaders</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ending-soon">Ending Soon</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="most-bids">Most Bids</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {liveAuctions.length} live auctions found
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Live Now</span>
            </div>
          </div>
        </div>

        {/* Auction Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveAuctions.map((auction) => (
            <Card key={auction.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={auction.image} 
                  alt={auction.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-red-500 text-white">
                  <Clock className="h-3 w-3 mr-1" />
                  {auction.timeLeft}
                </Badge>
                <Badge className="absolute top-3 right-3 bg-green-100 text-green-800">
                  {auction.condition}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{auction.title}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {auction.location}
                </div>
                <p className="text-sm text-muted-foreground">{auction.seller}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Current Bid:</span>
                    <span className="text-2xl font-bold text-primary">
                      ${auction.currentBid.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Reserve: ${auction.reservePrice.toLocaleString()}</span>
                    <span className={auction.currentBid >= auction.reservePrice ? "text-green-600" : "text-red-600"}>
                      {auction.currentBid >= auction.reservePrice ? "Reserve Met" : "Reserve Not Met"}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {auction.bidders} bidders
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {auction.bids} bids
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Link to="/auction/bid" className="flex-1">
                    <Button className="w-full">
                      <Gavel className="h-4 w-4 mr-2" />
                      Bid Now
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm">
                    Watch
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline">Load More Auctions</Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BrowseLiveAuctions;
