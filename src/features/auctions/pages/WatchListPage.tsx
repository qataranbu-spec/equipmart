
import React from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Eye, Bell, Star, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const WatchList = () => {
  const watchedAuctions = [
    {
      id: 1,
      title: "Caterpillar 320 Excavator",
      currentBid: 75000,
      timeLeft: "2 days 14 hours",
      totalBids: 23,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      condition: "Used - Functional",
      status: "active"
    },
    {
      id: 2,
      title: "Liebherr Mobile Crane LTM 1050",
      currentBid: 285000,
      timeLeft: "5 days 8 hours",
      totalBids: 15,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
      condition: "Refurbished",
      status: "active"
    },
    {
      id: 3,
      title: "John Deere 850K Crawler Dozer",
      currentBid: 125000,
      timeLeft: "Ended",
      totalBids: 31,
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop",
      condition: "Used - Functional",
      status: "ended",
      finalPrice: 135000
    },
    {
      id: 4,
      title: "Volvo L120H Wheel Loader",
      currentBid: 85000,
      timeLeft: "1 day 3 hours",
      totalBids: 18,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      condition: "New",
      status: "ending-soon"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'ending-soon': return 'bg-yellow-100 text-yellow-800';
      case 'ended': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Active';
      case 'ending-soon': return 'Ending Soon';
      case 'ended': return 'Ended';
      default: return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-secondary py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">My Watch List</h1>
          <p className="text-muted-foreground">Keep track of auctions you're interested in</p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Watch List Settings */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <span>Notification Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="endingSoon" className="rounded" defaultChecked />
                <label htmlFor="endingSoon" className="text-sm">Notify when auctions are ending soon</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="outbid" className="rounded" defaultChecked />
                <label htmlFor="outbid" className="text-sm">Notify when I'm outbid</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="newBids" className="rounded" />
                <label htmlFor="newBids" className="text-sm">Notify on new bids</label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Watched Auctions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {watchedAuctions.map((auction) => (
            <Card key={auction.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={auction.image}
                  alt={auction.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={getStatusColor(auction.status)}>
                    {getStatusText(auction.status)}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Button variant="ghost" size="sm" className="bg-white/80 hover:bg-white">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg">{auction.title}</CardTitle>
                <Badge variant="outline">{auction.condition}</Badge>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {auction.status === 'ended' ? 'Final Price' : 'Current Bid'}
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      ${(auction.status === 'ended' ? auction.finalPrice : auction.currentBid)?.toLocaleString()}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4 text-muted-foreground" />
                      <span>{auction.totalBids} bids</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className={auction.status === 'ending-soon' ? 'text-yellow-600 font-semibold' : ''}>
                        {auction.timeLeft}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {auction.status !== 'ended' ? (
                      <>
                        <Link to="/auction/bid" className="flex-1">
                          <Button className="w-full">Bid Now</Button>
                        </Link>
                        <Button variant="outline">Details</Button>
                      </>
                    ) : (
                      <Button variant="outline" className="w-full">View Results</Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {watchedAuctions.length === 0 && (
          <div className="text-center py-12">
            <Star className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No items in your watch list</h3>
            <p className="text-muted-foreground mb-4">
              Start watching auctions to keep track of equipment you're interested in.
            </p>
            <Link to="/auctions">
              <Button>Browse Auctions</Button>
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default WatchList;
