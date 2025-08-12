
import React, { useState } from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Clock, Gavel, Users, TrendingUp, AlertCircle } from 'lucide-react';

const BidNow = () => {
  const [bidAmount, setBidAmount] = useState('');
  const [maxBid, setMaxBid] = useState('');

  const auction = {
    title: "Caterpillar 320 Excavator",
    currentBid: 75000,
    minimumBid: 77000,
    totalBids: 23,
    timeLeft: "2 days 14 hours",
    endDate: "March 15, 2024 at 3:00 PM",
    seller: "Heavy Equipment Auctions",
    condition: "Used - Functional",
    year: 2020,
    hours: 1200,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
  };

  const recentBids = [
    { bidder: "User****789", amount: 75000, time: "2 minutes ago" },
    { bidder: "User****456", amount: 73500, time: "15 minutes ago" },
    { bidder: "User****123", amount: 72000, time: "1 hour ago" },
    { bidder: "User****234", amount: 70500, time: "2 hours ago" },
    { bidder: "User****567", amount: 69000, time: "3 hours ago" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-secondary py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Place Your Bid</h1>
          <p className="text-muted-foreground">Bid on this equipment auction</p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Auction Details */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={auction.image}
                    alt={auction.title}
                    className="w-full md:w-64 h-48 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{auction.title}</h2>
                    <p className="text-muted-foreground mb-4">{auction.seller}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Condition</p>
                        <Badge variant="secondary">{auction.condition}</Badge>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Year</p>
                        <p className="font-semibold">{auction.year}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Hours</p>
                        <p className="font-semibold">{auction.hours.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Total Bids</p>
                        <p className="font-semibold">{auction.totalBids}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bidding Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Gavel className="h-5 w-5" />
                  <span>Place Your Bid</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    <p className="text-sm font-medium text-yellow-800">
                      Your bid must be at least ${auction.minimumBid.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div>
                  <Label htmlFor="bidAmount">Your Bid Amount (USD)</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="bidAmount"
                      type="number"
                      value={bidAmount}
                      onChange={(e) => setBidAmount(e.target.value)}
                      placeholder={auction.minimumBid.toString()}
                      className="pl-8"
                      min={auction.minimumBid}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="maxBid">Maximum Bid (Auto-bidding)</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="maxBid"
                      type="number"
                      value={maxBid}
                      onChange={(e) => setMaxBid(e.target.value)}
                      placeholder="Optional: Set maximum bid"
                      className="pl-8"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    We'll automatically bid for you up to this amount
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="terms" className="rounded" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the auction terms and conditions
                  </Label>
                </div>

                <Button 
                  className="w-full" 
                  size="lg"
                  disabled={!bidAmount || parseInt(bidAmount) < auction.minimumBid}
                >
                  Place Bid - ${bidAmount ? parseInt(bidAmount).toLocaleString() : '0'}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Auction Status */}
          <div>
            <Card className="sticky top-4 mb-6">
              <CardHeader>
                <CardTitle>Auction Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Current Highest Bid</p>
                  <p className="text-3xl font-bold text-primary">${auction.currentBid.toLocaleString()}</p>
                </div>

                <div className="flex items-center justify-center space-x-2 text-red-600">
                  <Clock className="h-4 w-4" />
                  <span className="font-semibold">{auction.timeLeft}</span>
                </div>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Auction ends on</p>
                  <p className="text-sm font-semibold">{auction.endDate}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{auction.totalBids} bids</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-green-600">Active</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Bids */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Bids</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentBids.map((bid, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <div>
                        <p className="font-semibold text-sm">{bid.bidder}</p>
                        <p className="text-xs text-muted-foreground">{bid.time}</p>
                      </div>
                      <p className="font-bold">${bid.amount.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BidNow;
