import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Plus, 
  Eye, 
  Edit, 
  Trash2, 
  MessageSquare, 
  DollarSign,
  Package,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  XCircle
} from "lucide-react";
import { mockEquipmentListings, mockEquipmentOffers } from "@/features/financing/data/marketplaceMockData";

export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState("listings");
  
  // Filter listings for current seller (mock seller-1)
  const myListings = mockEquipmentListings.filter(listing => listing.seller.id === "seller-1");
  const myOffers = mockEquipmentOffers.filter(offer => 
    myListings.some(listing => listing.id === offer.listingId)
  );

  const getStatusBadge = (status: string) => {
    const variants = {
      "Active": "bg-success/10 text-success border-success/20",
      "Pending Approval": "bg-warning/10 text-warning border-warning/20",
      "Sold": "bg-primary/10 text-primary border-primary/20",
      "Under Negotiation": "bg-info/10 text-info border-info/20",
      "Rejected": "bg-destructive/10 text-destructive border-destructive/20"
    };
    return variants[status as keyof typeof variants] || "bg-muted text-muted-foreground";
  };

  const getOfferStatusBadge = (status: string) => {
    const variants = {
      "Pending": "bg-warning/10 text-warning border-warning/20",
      "Accepted": "bg-success/10 text-success border-success/20",
      "Rejected": "bg-destructive/10 text-destructive border-destructive/20",
      "Countered": "bg-info/10 text-info border-info/20",
      "Withdrawn": "bg-muted/10 text-muted-foreground border-muted/20"
    };
    return variants[status as keyof typeof variants] || "bg-muted text-muted-foreground";
  };

  // Calculate stats
  const totalListings = myListings.length;
  const activeListings = myListings.filter(l => l.status === "Active").length;
  const soldListings = myListings.filter(l => l.status === "Sold").length;
  const totalOffers = myOffers.length;
  const pendingOffers = myOffers.filter(o => o.status === "Pending").length;
  const totalRevenue = myListings.filter(l => l.status === "Sold").reduce((sum, l) => sum + l.price, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Seller Dashboard</h1>
          <p className="text-muted-foreground">Manage your equipment listings and sales</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create New Listing
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Listings</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalListings}</div>
            <p className="text-xs text-muted-foreground">
              {activeListings} active
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Offers</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingOffers}</div>
            <p className="text-xs text-muted-foreground">
              {totalOffers} total offers
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Items Sold</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{soldListings}</div>
            <p className="text-xs text-muted-foreground">
              {totalListings > 0 ? ((soldListings / totalListings) * 100).toFixed(1) : 0}% conversion rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(totalRevenue / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-muted-foreground">
              Avg: ${totalRevenue > 0 && soldListings > 0 ? (totalRevenue / soldListings).toLocaleString() : 0}
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="listings">My Listings</TabsTrigger>
          <TabsTrigger value="offers">Offers ({pendingOffers})</TabsTrigger>
          <TabsTrigger value="sales">Sales History</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="listings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Equipment Listings</CardTitle>
              <CardDescription>Manage your active and pending equipment listings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Equipment</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Listed Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {myListings.map((listing) => (
                      <TableRow key={listing.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{listing.brand} {listing.model}</div>
                            <div className="text-sm text-muted-foreground">
                              {listing.year} • {listing.condition}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">${listing.price.toLocaleString()}</div>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant="outline" 
                            className={getStatusBadge(listing.status)}
                          >
                            {listing.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{listing.viewCount}</TableCell>
                        <TableCell>
                          {new Date(listing.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="h-4 w-4 mr-1" />
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="offers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Received Offers</CardTitle>
              <CardDescription>Manage offers from potential buyers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {myOffers.map((offer) => (
                  <Card key={offer.id} className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div>
                          <h3 className="font-medium">{offer.listing.brand} {offer.listing.model}</h3>
                          <p className="text-sm text-muted-foreground">
                            Offer from {offer.buyerName}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div>
                            <span className="text-sm text-muted-foreground">Listed Price: </span>
                            <span className="font-medium">${offer.listing.price.toLocaleString()}</span>
                          </div>
                          <div>
                            <span className="text-sm text-muted-foreground">Offer: </span>
                            <span className="font-bold text-primary">${offer.offerAmount.toLocaleString()}</span>
                          </div>
                          <Badge 
                            variant="outline" 
                            className={getOfferStatusBadge(offer.status)}
                          >
                            {offer.status}
                          </Badge>
                        </div>
                        {offer.message && (
                          <p className="text-sm bg-muted p-3 rounded-lg">{offer.message}</p>
                        )}
                      </div>
                      <div className="flex gap-2">
                        {offer.status === "Pending" && (
                          <>
                            <Button variant="default" size="sm">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Accept
                            </Button>
                            <Button variant="outline" size="sm">
                              Counter
                            </Button>
                            <Button variant="destructive" size="sm">
                              <XCircle className="h-4 w-4 mr-1" />
                              Reject
                            </Button>
                          </>
                        )}
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Message
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sales" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sales History</CardTitle>
              <CardDescription>Track your completed sales and transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No completed sales yet</p>
                <p className="text-sm">Your completed transactions will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Listing Performance</CardTitle>
                <CardDescription>Views and engagement metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myListings.map((listing) => (
                    <div key={listing.id} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{listing.brand} {listing.model}</div>
                        <div className="text-sm text-muted-foreground">${listing.price.toLocaleString()}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{listing.viewCount} views</div>
                        <div className="text-sm text-muted-foreground">
                          {myOffers.filter(o => o.listingId === listing.id).length} offers
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Position</CardTitle>
                <CardDescription>How your listings compare to market</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Average Listing Price</span>
                    <span className="font-medium">
                      ${myListings.length > 0 ? (myListings.reduce((sum, l) => sum + l.price, 0) / myListings.length).toLocaleString() : 0}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Market Average</span>
                    <span className="font-medium">$125,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Your Rating</span>
                    <span className="font-medium">4.8/5.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Response Time</span>
                    <span className="font-medium">&lt; 2 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}