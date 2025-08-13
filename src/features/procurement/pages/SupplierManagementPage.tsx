import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Building2, 
  Award, 
  Search, 
  Filter,
  Plus,
  Eye,
  MessageSquare,
  TrendingUp
} from 'lucide-react';
import { format } from 'date-fns';

// Mock data for suppliers
const mockSuppliers = [
  {
    id: '1',
    name: 'Heavy Machinery Solutions Ltd',
    email: 'contact@hmsolutions.com',
    phone: '+1 (555) 123-4567',
    address: '123 Industrial Ave, Manufacturing District',
    category: 'Heavy Machinery',
    certifications: ['ISO 9001', 'CE Certified', 'OSHA Compliant'],
    rating: 4.8,
    totalProjects: 156,
    status: 'active' as const,
    joinedAt: new Date('2020-03-15'),
    lastActivity: new Date('2024-08-20'),
    avatar: '',
    specialties: ['Excavators', 'Bulldozers', 'Cranes'],
    totalValue: 2450000,
    responseTime: '2 hours'
  },
  {
    id: '2',
    name: 'Industrial Equipment Corp',
    email: 'sales@ieqcorp.com',
    phone: '+1 (555) 234-5678',
    address: '456 Commerce Blvd, Business Park',
    category: 'Industrial Equipment',
    certifications: ['ISO 14001', 'Six Sigma'],
    rating: 4.6,
    totalProjects: 89,
    status: 'active' as const,
    joinedAt: new Date('2019-11-08'),
    lastActivity: new Date('2024-08-19'),
    avatar: '',
    specialties: ['Generators', 'Compressors', 'Pumps'],
    totalValue: 1850000,
    responseTime: '4 hours'
  },
  {
    id: '3',
    name: 'Transport & Logistics Pro',
    email: 'info@tlpro.com',
    phone: '+1 (555) 345-6789',
    address: '789 Logistics Way, Transport Hub',
    category: 'Transportation',
    certifications: ['DOT Certified', 'Hazmat Licensed'],
    rating: 4.4,
    totalProjects: 234,
    status: 'pending' as const,
    joinedAt: new Date('2024-07-12'),
    lastActivity: new Date('2024-08-18'),
    avatar: '',
    specialties: ['Heavy Haul', 'Crane Transport', 'Equipment Moving'],
    totalValue: 890000,
    responseTime: '6 hours'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active': return 'default';
    case 'pending': return 'secondary';
    case 'inactive': return 'destructive';
    default: return 'default';
  }
};

const getRatingColor = (rating: number) => {
  if (rating >= 4.5) return 'text-green-600';
  if (rating >= 4.0) return 'text-yellow-600';
  return 'text-red-600';
};

export default function SupplierManagementPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedSupplier, setSelectedSupplier] = useState<typeof mockSuppliers[0] | null>(null);

  const filteredSuppliers = mockSuppliers.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         supplier.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || supplier.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || supplier.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const categories = ['Heavy Machinery', 'Industrial Equipment', 'Transportation', 'Services', 'Materials'];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Supplier Management</h1>
              <p className="text-muted-foreground mt-2">
                Manage your supplier network and track performance metrics
              </p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New Supplier
            </Button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Suppliers</p>
                  <p className="text-2xl font-bold">256</p>
                </div>
                <Building2 className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Suppliers</p>
                  <p className="text-2xl font-bold">189</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Rating</p>
                  <p className="text-2xl font-bold">4.6</p>
                </div>
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Value</p>
                  <p className="text-2xl font-bold">$5.2M</p>
                </div>
                <Award className="h-8 w-8 text-blue-600" />
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
                    placeholder="Search suppliers..."
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
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <Building2 className="h-4 w-4 mr-2" />
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

        {/* Suppliers List */}
        <div className="space-y-4">
          {filteredSuppliers.map((supplier) => (
            <Card key={supplier.id}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={supplier.avatar} />
                      <AvatarFallback>
                        {supplier.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="mb-1">{supplier.name}</CardTitle>
                      <CardDescription className="flex items-center gap-4 mb-2">
                        <span className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {supplier.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {supplier.address.split(',')[0]}
                        </span>
                      </CardDescription>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(supplier.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className={`ml-1 text-sm font-medium ${getRatingColor(supplier.rating)}`}>
                            {supplier.rating}
                          </span>
                        </div>
                        <Badge variant={getStatusColor(supplier.status)}>
                          {supplier.status.charAt(0).toUpperCase() + supplier.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground mb-1">Total Projects</div>
                    <div className="text-lg font-semibold">{supplier.totalProjects}</div>
                    <div className="text-sm text-muted-foreground">
                      ${supplier.totalValue.toLocaleString()} value
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Specialties</div>
                    <div className="flex flex-wrap gap-1">
                      {supplier.specialties.slice(0, 2).map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                      {supplier.specialties.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{supplier.specialties.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Response Time</div>
                    <div className="text-sm font-medium">{supplier.responseTime}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Last Activity</div>
                    <div className="text-sm">{format(supplier.lastActivity, 'MMM dd, yyyy')}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Member Since</div>
                    <div className="text-sm">{format(supplier.joinedAt, 'MMM yyyy')}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setSelectedSupplier(supplier)}>
                        <Eye className="h-4 w-4 mr-2" />
                        View Profile
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{supplier.name}</DialogTitle>
                        <DialogDescription>Supplier Details and Performance</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm font-medium mb-2">Contact Information</div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-sm">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                {supplier.email}
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Phone className="h-4 w-4 text-muted-foreground" />
                                {supplier.phone}
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                {supplier.address}
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="text-sm font-medium mb-2">Certifications</div>
                            <div className="flex flex-wrap gap-1">
                              {supplier.certifications.map((cert) => (
                                <Badge key={cert} variant="secondary" className="text-xs">
                                  {cert}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium mb-2">Specialties</div>
                          <div className="flex flex-wrap gap-2">
                            {supplier.specialties.map((specialty) => (
                              <Badge key={specialty} variant="outline">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                  <Button size="sm">
                    Request Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}