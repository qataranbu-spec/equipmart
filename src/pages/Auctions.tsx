
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Gavel, 
  Clock, 
  TrendingUp, 
  Users, 
  DollarSign,
  Calendar,
  Eye,
  AlertCircle,
  Trophy,
  Shield,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Auctions = () => {
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
      endTime: "2024-01-15 18:30:00"
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
      endTime: "2024-01-15 17:08:00"
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
      endTime: "2024-01-15 20:57:00"
    }
  ];

  const upcomingAuctions = [
    {
      id: 4,
      title: "Fleet Liquidation - 25 Units",
      startDate: "Jan 20, 2024",
      estimatedValue: "2.5M - 3.2M",
      items: 25,
      type: "Live Auction"
    },
    {
      id: 5,
      title: "Concrete Equipment Auction",
      startDate: "Jan 22, 2024",
      estimatedValue: "800K - 1.2M",
      items: 12,
      type: "Online Only"
    }
  ];

  const auctionTypes = [
    {
      title: "Live Auctions",
      description: "Real-time bidding with professional auctioneers",
      icon: Gavel,
      features: ["Live streaming", "Phone bidding", "On-site presence"]
    },
    {
      title: "Online Auctions", 
      description: "Convenient online bidding from anywhere",
      icon: TrendingUp,
      features: ["24/7 bidding", "Automatic bidding", "Mobile friendly"]
    },
    {
      title: "Sealed Bid",
      description: "Submit your best offer privately",
      icon: Shield,
      features: ["Private bidding", "Single round", "Best offer wins"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Equipment Auctions</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Participate in live auctions for construction equipment. Find great deals, 
              sell your fleet, and connect with buyers and sellers globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/browse-live-auctions">
                <Button size="lg">
                  <Gavel className="h-5 w-5 mr-2" />
                  Browse Live Auctions
                </Button>
              </Link>
              <Link to="/auction/consign">
                <Button variant="outline" size="lg">Consign Equipment</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Live Auctions */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Live Auctions</h2>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Live Now</span>
            </div>
          </div>
          
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
        </section>

        {/* Auction Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Auction Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {auctionTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <type.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Auctions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Upcoming Auctions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingAuctions.map((auction) => (
              <Card key={auction.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{auction.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {auction.startDate}
                      </div>
                    </div>
                    <Badge variant="outline">{auction.type}</Badge>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Estimated Value:</span>
                      <span className="font-semibold">{auction.estimatedValue}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Items:</span>
                      <span>{auction.items} lots</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link to="/register-to-bid" className="flex-1">
                      <Button className="w-full">Register to Bid</Button>
                    </Link>
                    <Button variant="outline" size="sm">Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How Auctions Work */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">How Our Auctions Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Register</h3>
              <p className="text-muted-foreground text-sm">Create account and verify identity for bidding</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Inspect</h3>
              <p className="text-muted-foreground text-sm">View detailed photos, reports, and inspection schedules</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Bid</h3>
              <p className="text-muted-foreground text-sm">Place bids online, by phone, or in person</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Win</h3>
              <p className="text-muted-foreground text-sm">Complete payment and arrange pickup or delivery</p>
            </div>
          </div>
        </section>

        {/* Seller Benefits */}
        <section className="mb-12 bg-primary/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Sell Through Our Auctions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Maximize your equipment value through our proven auction platform with global reach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Market Value</h3>
              <p className="text-muted-foreground text-sm">Competitive bidding ensures fair market pricing</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Global Reach</h3>
              <p className="text-muted-foreground text-sm">Access to international buyer network</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Secure Transactions</h3>
              <p className="text-muted-foreground text-sm">Guaranteed payment and secure escrow services</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Bidding?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of buyers and sellers who trust our auction platform. 
            Register today and start participating in equipment auctions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register-to-bid">
              <Button size="lg">Register as Bidder</Button>
            </Link>
            <Link to="/auction/consign">
              <Button variant="outline" size="lg">Consign Equipment</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Auctions;
