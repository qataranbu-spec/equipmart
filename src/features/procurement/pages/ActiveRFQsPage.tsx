import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, MessageSquare, Calendar, DollarSign, Building2, Search, Filter } from 'lucide-react';
import { format } from 'date-fns';

// Mock data for demonstration
const mockRFQs = [
  {
    id: '1',
    title: 'Heavy Excavators for Highway Construction',
    category: 'Heavy Machinery',
    budget: 500000,
    deadline: new Date('2024-09-15'),
    status: 'published' as const,
    responses: 8,
    createdAt: new Date('2024-08-01'),
    description: 'Need 5 heavy excavators for a 6-month highway construction project...'
  },
  {
    id: '2',
    title: 'Industrial Generators - Emergency Backup',
    category: 'Industrial Equipment',
    budget: 150000,
    deadline: new Date('2024-09-30'),
    status: 'published' as const,
    responses: 12,
    createdAt: new Date('2024-08-10'),
    description: 'Require industrial generators for backup power systems...'
  },
  {
    id: '3',
    title: 'Construction Material Transport Services',
    category: 'Services',
    budget: 75000,
    deadline: new Date('2024-10-01'),
    status: 'draft' as const,
    responses: 0,
    createdAt: new Date('2024-08-15'),
    description: 'Transportation services needed for construction materials...'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'published': return 'default';
    case 'draft': return 'secondary';
    case 'closed': return 'destructive';
    case 'awarded': return 'outline';
    default: return 'default';
  }
};

export default function ActiveRFQsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredRFQs = mockRFQs.filter(rfq => {
    const matchesSearch = rfq.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         rfq.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || rfq.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || rfq.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const categories = ['Heavy Machinery', 'Industrial Equipment', 'Services', 'Materials', 'Transportation'];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Active RFQs</h1>
              <p className="text-muted-foreground mt-2">
                Manage your active Request for Quotations and track supplier responses
              </p>
            </div>
            <Link to="/procurement/create-rfq">
              <Button>Create New RFQ</Button>
            </Link>
          </div>
        </div>

        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search RFQs..."
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
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                  <SelectItem value="awarded">Awarded</SelectItem>
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

        <Tabs defaultValue="list" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
          </TabsList>

          <TabsContent value="list" className="space-y-4">
            {filteredRFQs.map((rfq) => (
              <Card key={rfq.id}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="mb-2">{rfq.title}</CardTitle>
                      <CardDescription className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {rfq.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Deadline: {format(rfq.deadline, 'MMM dd, yyyy')}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          ${rfq.budget.toLocaleString()}
                        </span>
                      </CardDescription>
                    </div>
                    <Badge variant={getStatusColor(rfq.status)}>
                      {rfq.status.charAt(0).toUpperCase() + rfq.status.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {rfq.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {rfq.responses} responses received
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        View Responses
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRFQs.map((rfq) => (
              <Card key={rfq.id} className="h-fit">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={getStatusColor(rfq.status)} className="text-xs">
                      {rfq.status.charAt(0).toUpperCase() + rfq.status.slice(1)}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {rfq.responses} responses
                    </span>
                  </div>
                  <CardTitle className="text-lg">{rfq.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {rfq.category}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {rfq.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Budget:</span>
                      <span className="font-medium">${rfq.budget.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Deadline:</span>
                      <span className="font-medium">{format(rfq.deadline, 'MMM dd')}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" className="flex-1">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Responses
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
}