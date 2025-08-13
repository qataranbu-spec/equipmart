import React, { useState } from 'react';
import { Plus, Package, TrendingUp, MessageSquare, FileText, Settings, Eye, Edit, Trash2, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface InventoryItem {
  id: string;
  partNumber: string;
  name: string;
  brand: string;
  category: string;
  type: 'OEM' | 'Aftermarket' | 'Refurbished';
  price: number;
  cost: number;
  quantity: number;
  lowStockThreshold: number;
  status: 'active' | 'inactive' | 'out-of-stock';
  views: number;
  inquiries: number;
  lastUpdated: string;
}

interface Inquiry {
  id: string;
  partNumber: string;
  partName: string;
  customerName: string;
  customerEmail: string;
  quantity: number;
  message: string;
  status: 'new' | 'responded' | 'quoted' | 'closed';
  date: string;
  urgency: 'low' | 'medium' | 'high' | 'urgent';
}

interface RFQResponse {
  id: string;
  rfqId: string;
  partNumber: string;
  partName: string;
  customerName: string;
  quantity: number;
  targetPrice: number;
  yourPrice: number;
  status: 'pending' | 'submitted' | 'accepted' | 'rejected';
  deadline: string;
}

const SupplierDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isAddPartDialogOpen, setIsAddPartDialogOpen] = useState(false);
  const [newPart, setNewPart] = useState({
    partNumber: '',
    name: '',
    brand: '',
    category: '',
    type: 'OEM' as 'OEM' | 'Aftermarket' | 'Refurbished',
    price: 0,
    cost: 0,
    quantity: 0,
    lowStockThreshold: 5,
    description: '',
    compatibility: ''
  });

  // Mock data
  const dashboardStats = {
    totalParts: 1250,
    totalViews: 15420,
    totalInquiries: 89,
    monthlyRevenue: 125000,
    lowStockItems: 23,
    activeRFQs: 12
  };

  const inventory: InventoryItem[] = [
    {
      id: '1',
      partNumber: 'CAT-123456',
      name: 'Hydraulic Filter',
      brand: 'Caterpillar',
      category: 'Filters',
      type: 'OEM',
      price: 89.99,
      cost: 45.00,
      quantity: 25,
      lowStockThreshold: 10,
      status: 'active',
      views: 245,
      inquiries: 12,
      lastUpdated: '2024-01-15'
    },
    {
      id: '2',
      partNumber: 'KOM-789012',
      name: 'Track Chain Assembly',
      brand: 'Komatsu',
      category: 'Undercarriage',
      type: 'Aftermarket',
      price: 2499.99,
      cost: 1800.00,
      quantity: 3,
      lowStockThreshold: 5,
      status: 'active',
      views: 156,
      inquiries: 8,
      lastUpdated: '2024-01-14'
    }
  ];

  const inquiries: Inquiry[] = [
    {
      id: '1',
      partNumber: 'CAT-123456',
      partName: 'Hydraulic Filter',
      customerName: 'ABC Construction',
      customerEmail: 'purchasing@abcconstruction.com',
      quantity: 5,
      message: 'Need urgent delivery for ongoing project. Can you provide express shipping?',
      status: 'new',
      date: '2024-01-15',
      urgency: 'high'
    },
    {
      id: '2',
      partNumber: 'JD-345678',
      partName: 'Engine Air Filter',
      customerName: 'XYZ Equipment',
      customerEmail: 'orders@xyzequip.com',
      quantity: 10,
      message: 'Looking for bulk pricing on this part. Regular monthly orders.',
      status: 'responded',
      date: '2024-01-14',
      urgency: 'medium'
    }
  ];

  const rfqResponses: RFQResponse[] = [
    {
      id: '1',
      rfqId: 'RFQ-001',
      partNumber: 'VOL-456789',
      partName: 'Transmission Oil Filter',
      customerName: 'Heavy Equipment Co.',
      quantity: 20,
      targetPrice: 75.00,
      yourPrice: 82.50,
      status: 'pending',
      deadline: '2024-01-20'
    }
  ];

  const filteredInventory = inventory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.partNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-primary/10 text-primary border-primary/20';
      case 'inactive': return 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20';
      case 'out-of-stock': return 'bg-destructive/10 text-destructive border-destructive/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getInquiryStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500/10 text-blue-700 border-blue-500/20';
      case 'responded': return 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20';
      case 'quoted': return 'bg-purple-500/10 text-purple-700 border-purple-500/20';
      case 'closed': return 'bg-green-500/10 text-green-700 border-green-500/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'urgent': return 'bg-red-500/10 text-red-700 border-red-500/20';
      case 'high': return 'bg-orange-500/10 text-orange-700 border-orange-500/20';
      case 'medium': return 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20';
      case 'low': return 'bg-green-500/10 text-green-700 border-green-500/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const handleAddPart = () => {
    console.log('Adding part:', newPart);
    setIsAddPartDialogOpen(false);
    // Reset form
    setNewPart({
      partNumber: '',
      name: '',
      brand: '',
      category: '',
      type: 'OEM',
      price: 0,
      cost: 0,
      quantity: 0,
      lowStockThreshold: 5,
      description: '',
      compatibility: ''
    });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-primary/5 py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Supplier Dashboard</h1>
                <p className="text-muted-foreground">Manage your spare parts inventory and customer inquiries</p>
              </div>
              <Dialog open={isAddPartDialogOpen} onOpenChange={setIsAddPartDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Part
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add New Part</DialogTitle>
                    <DialogDescription>Add a new spare part to your inventory</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Part Number</Label>
                        <Input
                          value={newPart.partNumber}
                          onChange={(e) => setNewPart({...newPart, partNumber: e.target.value})}
                          placeholder="e.g., CAT-123456"
                        />
                      </div>
                      <div>
                        <Label>Part Name</Label>
                        <Input
                          value={newPart.name}
                          onChange={(e) => setNewPart({...newPart, name: e.target.value})}
                          placeholder="e.g., Hydraulic Filter"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label>Brand</Label>
                        <Input
                          value={newPart.brand}
                          onChange={(e) => setNewPart({...newPart, brand: e.target.value})}
                          placeholder="e.g., Caterpillar"
                        />
                      </div>
                      <div>
                        <Label>Category</Label>
                        <Select value={newPart.category} onValueChange={(value) => setNewPart({...newPart, category: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Engine Parts">Engine Parts</SelectItem>
                            <SelectItem value="Filters">Filters</SelectItem>
                            <SelectItem value="Hydraulics">Hydraulics</SelectItem>
                            <SelectItem value="Undercarriage">Undercarriage</SelectItem>
                            <SelectItem value="Electrical">Electrical</SelectItem>
                            <SelectItem value="Cooling System">Cooling System</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Type</Label>
                        <Select value={newPart.type} onValueChange={(value: any) => setNewPart({...newPart, type: value})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="OEM">OEM</SelectItem>
                            <SelectItem value="Aftermarket">Aftermarket</SelectItem>
                            <SelectItem value="Refurbished">Refurbished</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      <div>
                        <Label>Cost ($)</Label>
                        <Input
                          type="number"
                          value={newPart.cost}
                          onChange={(e) => setNewPart({...newPart, cost: parseFloat(e.target.value)})}
                          min="0"
                          step="0.01"
                        />
                      </div>
                      <div>
                        <Label>Sale Price ($)</Label>
                        <Input
                          type="number"
                          value={newPart.price}
                          onChange={(e) => setNewPart({...newPart, price: parseFloat(e.target.value)})}
                          min="0"
                          step="0.01"
                        />
                      </div>
                      <div>
                        <Label>Quantity</Label>
                        <Input
                          type="number"
                          value={newPart.quantity}
                          onChange={(e) => setNewPart({...newPart, quantity: parseInt(e.target.value)})}
                          min="0"
                        />
                      </div>
                      <div>
                        <Label>Low Stock Alert</Label>
                        <Input
                          type="number"
                          value={newPart.lowStockThreshold}
                          onChange={(e) => setNewPart({...newPart, lowStockThreshold: parseInt(e.target.value)})}
                          min="1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Compatibility</Label>
                      <Input
                        value={newPart.compatibility}
                        onChange={(e) => setNewPart({...newPart, compatibility: e.target.value})}
                        placeholder="e.g., CAT 320D, CAT 325D, CAT 330D"
                      />
                    </div>
                    <div>
                      <Label>Description</Label>
                      <Textarea
                        value={newPart.description}
                        onChange={(e) => setNewPart({...newPart, description: e.target.value})}
                        placeholder="Part description and specifications..."
                        rows={3}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsAddPartDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddPart}>
                      Add Part
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        {/* Dashboard Stats */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Package className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-xl font-bold">{dashboardStats.totalParts}</p>
                      <p className="text-xs text-muted-foreground">Total Parts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Eye className="h-6 w-6 text-blue-500" />
                    <div>
                      <p className="text-xl font-bold">{dashboardStats.totalViews.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Total Views</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="text-xl font-bold">{dashboardStats.totalInquiries}</p>
                      <p className="text-xs text-muted-foreground">Inquiries</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-6 w-6 text-purple-500" />
                    <div>
                      <p className="text-xl font-bold">${dashboardStats.monthlyRevenue.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Monthly Revenue</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Package className="h-6 w-6 text-yellow-500" />
                    <div>
                      <p className="text-xl font-bold">{dashboardStats.lowStockItems}</p>
                      <p className="text-xs text-muted-foreground">Low Stock</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-6 w-6 text-orange-500" />
                    <div>
                      <p className="text-xl font-bold">{dashboardStats.activeRFQs}</p>
                      <p className="text-xs text-muted-foreground">Active RFQs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <Tabs defaultValue="inventory" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="inventory">Inventory</TabsTrigger>
                <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
                <TabsTrigger value="rfqs">RFQs</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              {/* Inventory Management */}
              <TabsContent value="inventory" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Inventory Management</CardTitle>
                    <CardDescription>Manage your spare parts inventory</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4 mb-6">
                      <div className="flex-1">
                        <Input
                          placeholder="Search parts..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger className="w-48">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          <SelectItem value="filters">Filters</SelectItem>
                          <SelectItem value="undercarriage">Undercarriage</SelectItem>
                          <SelectItem value="engine parts">Engine Parts</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Part Details</TableHead>
                          <TableHead>Pricing</TableHead>
                          <TableHead>Stock</TableHead>
                          <TableHead>Performance</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredInventory.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell>
                              <div>
                                <p className="font-medium">{item.name}</p>
                                <p className="text-sm text-muted-foreground">{item.partNumber}</p>
                                <div className="flex gap-1 mt-1">
                                  <Badge variant="secondary" className="text-xs">{item.brand}</Badge>
                                  <Badge variant="outline" className="text-xs">{item.type}</Badge>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div>
                                <p className="font-medium">${item.price}</p>
                                <p className="text-sm text-muted-foreground">Cost: ${item.cost}</p>
                                <p className="text-xs text-green-600">
                                  {Math.round(((item.price - item.cost) / item.price) * 100)}% margin
                                </p>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div>
                                <p className="font-medium">{item.quantity}</p>
                                {item.quantity <= item.lowStockThreshold && (
                                  <Badge variant="destructive" className="text-xs">Low Stock</Badge>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div>
                                <p className="text-sm">Views: {item.views}</p>
                                <p className="text-sm">Inquiries: {item.inquiries}</p>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge className={getStatusColor(item.status)} variant="outline">
                                {item.status.replace('-', ' ')}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-1">
                                <Button variant="ghost" size="sm">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Inquiries */}
              <TabsContent value="inquiries" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Inquiries</CardTitle>
                    <CardDescription>Manage customer inquiries and requests</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Part & Customer</TableHead>
                          <TableHead>Details</TableHead>
                          <TableHead>Priority</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {inquiries.map((inquiry) => (
                          <TableRow key={inquiry.id}>
                            <TableCell>
                              <div>
                                <p className="font-medium">{inquiry.partName}</p>
                                <p className="text-sm text-muted-foreground">{inquiry.partNumber}</p>
                                <p className="text-sm font-medium mt-1">{inquiry.customerName}</p>
                                <p className="text-xs text-muted-foreground">{inquiry.customerEmail}</p>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div>
                                <p className="text-sm">Qty: {inquiry.quantity}</p>
                                <p className="text-sm text-muted-foreground">{inquiry.date}</p>
                                <p className="text-xs mt-1">{inquiry.message.substring(0, 50)}...</p>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge className={getUrgencyColor(inquiry.urgency)} variant="outline">
                                {inquiry.urgency}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge className={getInquiryStatusColor(inquiry.status)} variant="outline">
                                {inquiry.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-1">
                                <Button variant="outline" size="sm">
                                  Reply
                                </Button>
                                <Button size="sm">
                                  Quote
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* RFQs */}
              <TabsContent value="rfqs" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>RFQ Responses</CardTitle>
                    <CardDescription>Manage your responses to customer RFQs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>RFQ Details</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Pricing</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Deadline</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {rfqResponses.map((rfq) => (
                          <TableRow key={rfq.id}>
                            <TableCell>
                              <div>
                                <p className="font-medium">{rfq.partName}</p>
                                <p className="text-sm text-muted-foreground">{rfq.partNumber}</p>
                                <p className="text-sm">Qty: {rfq.quantity}</p>
                              </div>
                            </TableCell>
                            <TableCell>
                              <p className="font-medium">{rfq.customerName}</p>
                            </TableCell>
                            <TableCell>
                              <div>
                                <p className="text-sm">Target: ${rfq.targetPrice}</p>
                                <p className="text-sm font-medium">Your Price: ${rfq.yourPrice}</p>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">{rfq.status}</Badge>
                            </TableCell>
                            <TableCell>
                              <p className="text-sm">{rfq.deadline}</p>
                            </TableCell>
                            <TableCell>
                              <Button size="sm">
                                Submit Quote
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Analytics */}
              <TabsContent value="analytics" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Top Performing Parts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {inventory.slice(0, 5).map((item) => (
                          <div key={item.id} className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">{item.partNumber}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">{item.views} views</p>
                              <p className="text-sm text-muted-foreground">{item.inquiries} inquiries</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <p className="text-sm">New inquiry for CAT-123456</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <p className="text-sm">Part KOM-789012 viewed 15 times today</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <p className="text-sm">RFQ response submitted</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <p className="text-sm">Low stock alert: JD-345678</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SupplierDashboard;