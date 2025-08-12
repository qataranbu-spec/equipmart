
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { TwoColumnLayout } from '@/components/layout/TwoColumnLayout';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingBag, 
  Package, 
  DollarSign, 
  TrendingUp, 
  Eye, 
  Heart, 
  MessageCircle,
  Settings,
  Plus,
  Edit,
  BarChart3,
  Users,
  FileText,
  Gavel
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [userRole, setUserRole] = useState('buyer'); // buyer, seller, service_provider

  const handleRoleChange = (role: string) => {
    setUserRole(role);
  };

  const buyerStats = {
    totalOrders: 12,
    pendingOrders: 3,
    totalSpent: 245000,
    savedItems: 8
  };

  const sellerStats = {
    totalListings: 25,
    activeListings: 18,
    totalSales: 890000,
    totalViews: 15420
  };

  const recentOrders = [
    {
      id: "ORD-001",
      equipment: "Caterpillar 320 Excavator",
      price: 85000,
      status: "Delivered",
      date: "2024-01-10"
    },
    {
      id: "ORD-002", 
      equipment: "Volvo L120H Wheel Loader",
      price: 95000,
      status: "In Transit",
      date: "2024-01-08"
    },
    {
      id: "ORD-003",
      equipment: "John Deere 850K Dozer",
      price: 125000,
      status: "Processing",
      date: "2024-01-05"
    }
  ];

  const myListings = [
    {
      id: 1,
      title: "Liebherr LTM 1050-3.1 Mobile Crane",
      price: 450000,
      status: "Active",
      views: 156,
      inquiries: 12,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Mercedes-Benz Actros Dump Truck", 
      price: 180000,
      status: "Sold",
      views: 89,
      inquiries: 8,
      image: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=300&h=200&fit=crop"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Sold': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'In Transit': return 'bg-blue-100 text-blue-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <TwoColumnLayout 
        sidebar={
          <DashboardSidebar 
            userRole={userRole} 
            onRoleChange={handleRoleChange}
          />
        }
        sidebarTitle={`${userRole.charAt(0).toUpperCase() + userRole.slice(1)} Portal`}
        defaultSidebarWidth={300}
        minSidebarWidth={250}
        maxSidebarWidth={400}
        className="py-0"
      >
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, John Doe</p>
          </div>
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {userRole === 'buyer' ? (
            <>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                  <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{buyerStats.totalOrders}</div>
                  <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{buyerStats.pendingOrders}</div>
                  <p className="text-xs text-muted-foreground">Awaiting delivery</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${buyerStats.totalSpent.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">This year</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Saved Items</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{buyerStats.savedItems}</div>
                  <p className="text-xs text-muted-foreground">In wishlist</p>
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Listings</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{sellerStats.totalListings}</div>
                  <p className="text-xs text-muted-foreground">+3 this month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{sellerStats.activeListings}</div>
                  <p className="text-xs text-muted-foreground">Currently available</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${sellerStats.totalSales.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">This year</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{sellerStats.totalViews.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">All time</p>
                </CardContent>
              </Card>
            </>
          )}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue={userRole === 'buyer' ? 'orders' : 'listings'} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            {userRole === 'buyer' ? (
              <>
                <TabsTrigger value="orders">My Orders</TabsTrigger>
                <TabsTrigger value="procurement">E-Procurement</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </>
            ) : (
              <>
                <TabsTrigger value="listings">My Listings</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="proposals">Proposals</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </>
            )}
          </TabsList>

          {/* Buyer Tabs */}
          {userRole === 'buyer' && (
            <>
              <TabsContent value="orders">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Recent Orders</CardTitle>
                    <Link to="/orders">
                      <Button variant="outline" size="sm">View All</Button>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                          <div>
                            <h4 className="font-medium">{order.equipment}</h4>
                            <p className="text-sm text-muted-foreground">Order #{order.id}</p>
                            <p className="text-sm text-muted-foreground">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">${order.price.toLocaleString()}</p>
                            <Badge className={getStatusColor(order.status)}>
                              {order.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="procurement">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <FileText className="h-12 w-12 text-primary mb-4" />
                      <CardTitle>Create RFQ</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Request quotes from verified suppliers for your equipment needs.
                      </p>
                      <Link to="/procurement/rfq">
                        <Button className="w-full">
                          <Plus className="h-4 w-4 mr-2" />
                          New RFQ
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <Users className="h-12 w-12 text-primary mb-4" />
                      <CardTitle>Supplier Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Manage your approved suppliers and evaluate performance.
                      </p>
                      <Link to="/procurement/suppliers">
                        <Button variant="outline" className="w-full">
                          Manage Suppliers
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <Gavel className="h-12 w-12 text-primary mb-4" />
                      <CardTitle>E-Auctions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Create reverse auctions for competitive pricing.
                      </p>
                      <Link to="/procurement/auctions">
                        <Button variant="outline" className="w-full">
                          Create Auction
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </>
          )}

          {/* Seller Tabs */}
          {userRole === 'seller' && (
            <>
              <TabsContent value="listings">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>My Equipment Listings</CardTitle>
                    <Link to="/sell">
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Listing
                      </Button>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {myListings.map((listing) => (
                        <div key={listing.id} className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                          <img 
                            src={listing.image} 
                            alt={listing.title}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium">{listing.title}</h4>
                            <p className="text-2xl font-bold text-primary">${listing.price.toLocaleString()}</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                              <span className="flex items-center">
                                <Eye className="h-4 w-4 mr-1" />
                                {listing.views} views
                              </span>
                              <span className="flex items-center">
                                <MessageCircle className="h-4 w-4 mr-1" />
                                {listing.inquiries} inquiries
                              </span>
                            </div>
                          </div>
                          <div className="text-right space-y-2">
                            <Badge className={getStatusColor(listing.status)}>
                              {listing.status}
                            </Badge>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <BarChart3 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </>
          )}

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    <BarChart3 className="h-16 w-16" />
                    <p className="ml-4">Analytics charts would be displayed here</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">New inquiry received for Excavator</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Order payment confirmed</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Equipment listing viewed 25 times</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </TwoColumnLayout>

      <Footer />
    </div>
  );
};

export default Dashboard;
