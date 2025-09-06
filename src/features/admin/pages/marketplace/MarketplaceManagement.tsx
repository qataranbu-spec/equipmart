import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Eye, 
  CheckCircle, 
  XCircle, 
  Clock, 
  DollarSign,
  Package,
  Users,
  TrendingUp,
  AlertTriangle
} from "lucide-react";
import { mockEquipmentListings, mockMarketplaceAnalytics } from "@/features/financing/data/marketplaceMockData";

export default function MarketplaceManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sellerTypeFilter, setSellerTypeFilter] = useState<string>("all");
  
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

  const getSellerTypeBadge = (type: string) => {
    const variants = {
      "NBFC": "bg-purple-100 text-purple-800 border-purple-200",
      "Bank": "bg-blue-100 text-blue-800 border-blue-200", 
      "Dealer": "bg-green-100 text-green-800 border-green-200",
      "Contractor": "bg-orange-100 text-orange-800 border-orange-200"
    };
    return variants[type as keyof typeof variants] || "bg-muted text-muted-foreground";
  };

  const filteredListings = mockEquipmentListings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || listing.status === statusFilter;
    const matchesSellerType = sellerTypeFilter === "all" || listing.seller.type === sellerTypeFilter;
    
    return matchesSearch && matchesStatus && matchesSellerType;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Marketplace Management</h1>
        <p className="text-muted-foreground">Manage equipment listings, verify sellers, and monitor marketplace activity</p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Listings</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockMarketplaceAnalytics.totalListings}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+12%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Approval</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockMarketplaceAnalytics.pendingApproval}</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2.6M</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+18%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Sellers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+8</span> new this month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="listings" className="space-y-6">
        <TabsList>
          <TabsTrigger value="listings">Listings Management</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="sellers">Seller Verification</TabsTrigger>
        </TabsList>

        <TabsContent value="listings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Equipment Listings</CardTitle>
              <CardDescription>Review and manage all equipment listings on the platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search listings..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="Pending Approval">Pending Approval</SelectItem>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Under Negotiation">Under Negotiation</SelectItem>
                    <SelectItem value="Sold">Sold</SelectItem>
                    <SelectItem value="Rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={sellerTypeFilter} onValueChange={setSellerTypeFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by seller" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sellers</SelectItem>
                    <SelectItem value="NBFC">NBFC</SelectItem>
                    <SelectItem value="Bank">Bank</SelectItem>
                    <SelectItem value="Dealer">Dealer</SelectItem>
                    <SelectItem value="Contractor">Contractor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Listings Table */}
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Equipment</TableHead>
                      <TableHead>Seller</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Listed Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredListings.map((listing) => (
                      <TableRow key={listing.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{listing.brand} {listing.model}</div>
                            <div className="text-sm text-muted-foreground">
                              {listing.year} • {listing.condition}
                              {listing.isRepossessed && (
                                <Badge variant="outline" className="ml-2 text-xs">
                                  Repossessed
                                </Badge>
                              )}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{listing.seller.name}</div>
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${getSellerTypeBadge(listing.seller.type)}`}
                            >
                              {listing.seller.type}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">
                            ${listing.price.toLocaleString()}
                          </div>
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
                            {listing.status === "Pending Approval" && (
                              <>
                                <Button variant="default" size="sm">
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                  Approve
                                </Button>
                                <Button variant="destructive" size="sm">
                                  <XCircle className="h-4 w-4 mr-1" />
                                  Reject
                                </Button>
                              </>
                            )}
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

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Categories</CardTitle>
                <CardDescription>Most popular equipment categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockMarketplaceAnalytics.topCategories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{category.category}</div>
                        <div className="text-sm text-muted-foreground">
                          Avg: ${category.averagePrice.toLocaleString()}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{category.count} listings</div>
                        <div className="text-sm text-muted-foreground">
                          {((category.count / mockMarketplaceAnalytics.totalListings) * 100).toFixed(1)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Performance</CardTitle>
                <CardDescription>Sales and revenue trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockMarketplaceAnalytics.monthlyStats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="font-medium">{stat.month}</div>
                      <div className="text-right">
                        <div className="font-medium">{stat.sales} sales</div>
                        <div className="text-sm text-muted-foreground">
                          ${(stat.revenue / 1000000).toFixed(1)}M revenue
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sellers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Seller Verification</CardTitle>
              <CardDescription>Manage seller verification and performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockMarketplaceAnalytics.sellerStats.map((seller, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">{seller.sellerName}</div>
                      <div className="text-sm text-muted-foreground">
                        {seller.sellerType} • Rating: {seller.averageRating}/5.0
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{seller.totalListings} listings</div>
                      <div className="text-sm text-muted-foreground">
                        ${(seller.totalRevenue / 1000000).toFixed(1)}M revenue
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View Profile
                      </Button>
                      <Button variant="default" size="sm">
                        Verify
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}