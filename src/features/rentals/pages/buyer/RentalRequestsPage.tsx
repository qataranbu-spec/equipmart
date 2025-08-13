import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Search, Calendar, MapPin, DollarSign, MessageSquare } from 'lucide-react';
import { RentalRequest, RentalResponse } from '../../types';
import { toast } from 'sonner';

// Mock data
const mockRequests: RentalRequest[] = [
  {
    id: '1',
    equipmentType: 'Excavator',
    description: 'Need a mid-size excavator for foundation work. Must be in good condition.',
    location: 'Houston, TX',
    startDate: '2024-02-15',
    endDate: '2024-02-22',
    budget: {
      min: 350,
      max: 500,
      period: 'daily'
    },
    projectDetails: 'Residential foundation excavation project. Site access is good with concrete pad.',
    contactInfo: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1-555-0123',
      company: 'ABC Construction'
    },
    status: 'open',
    responses: [
      {
        id: 'resp1',
        requestId: '1',
        providerId: 'owner1',
        providerName: 'Construction Solutions Inc.',
        equipmentId: 'eq1',
        proposedRate: 450,
        message: 'I have a CAT 320 available for your dates. Includes delivery within 30 miles.',
        createdAt: '2024-01-30T10:00:00Z'
      }
    ],
    createdAt: '2024-01-28T00:00:00Z'
  }
];

export default function RentalRequestsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [newRequest, setNewRequest] = useState({
    equipmentType: '',
    description: '',
    location: '',
    startDate: '',
    endDate: '',
    minBudget: '',
    maxBudget: '',
    budgetPeriod: 'daily' as 'daily' | 'weekly' | 'monthly',
    projectDetails: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    contactCompany: ''
  });

  const filteredRequests = mockRequests.filter(request => {
    if (searchQuery && !request.equipmentType.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !request.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    if (statusFilter !== 'all' && request.status !== statusFilter) {
      return false;
    }

    return true;
  });

  const handleCreateRequest = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the request to your backend
    toast.success('Rental request created successfully!');
    setShowCreateDialog(false);
    setNewRequest({
      equipmentType: '',
      description: '',
      location: '',
      startDate: '',
      endDate: '',
      minBudget: '',
      maxBudget: '',
      budgetPeriod: 'daily',
      projectDetails: '',
      contactName: '',
      contactEmail: '',
      contactPhone: '',
      contactCompany: ''
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'default';
      case 'matched': return 'default';
      case 'closed': return 'secondary';
      default: return 'secondary';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Rental Requests</h1>
            <p className="text-muted-foreground">Post requests and receive quotes from equipment owners</p>
          </div>
          
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Create Request
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create Rental Request</DialogTitle>
              </DialogHeader>
              
              <form onSubmit={handleCreateRequest} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Equipment Type *</Label>
                    <Select 
                      value={newRequest.equipmentType}
                      onValueChange={(value) => setNewRequest({...newRequest, equipmentType: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select equipment type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Excavator">Excavator</SelectItem>
                        <SelectItem value="Bulldozer">Bulldozer</SelectItem>
                        <SelectItem value="Crane">Crane</SelectItem>
                        <SelectItem value="Loader">Loader</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Location *</Label>
                    <Input
                      placeholder="Enter project location"
                      value={newRequest.location}
                      onChange={(e) => setNewRequest({...newRequest, location: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Description *</Label>
                  <Textarea
                    placeholder="Describe what you need..."
                    value={newRequest.description}
                    onChange={(e) => setNewRequest({...newRequest, description: e.target.value})}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Start Date *</Label>
                    <Input
                      type="date"
                      value={newRequest.startDate}
                      onChange={(e) => setNewRequest({...newRequest, startDate: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>End Date *</Label>
                    <Input
                      type="date"
                      value={newRequest.endDate}
                      onChange={(e) => setNewRequest({...newRequest, endDate: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Min Budget *</Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={newRequest.minBudget}
                      onChange={(e) => setNewRequest({...newRequest, minBudget: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Max Budget *</Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={newRequest.maxBudget}
                      onChange={(e) => setNewRequest({...newRequest, maxBudget: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Period</Label>
                    <Select 
                      value={newRequest.budgetPeriod}
                      onValueChange={(value: 'daily' | 'weekly' | 'monthly') => 
                        setNewRequest({...newRequest, budgetPeriod: value})
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Project Details</Label>
                  <Textarea
                    placeholder="Additional project information..."
                    value={newRequest.projectDetails}
                    onChange={(e) => setNewRequest({...newRequest, projectDetails: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Contact Name *</Label>
                    <Input
                      placeholder="Your name"
                      value={newRequest.contactName}
                      onChange={(e) => setNewRequest({...newRequest, contactName: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Contact Email *</Label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={newRequest.contactEmail}
                      onChange={(e) => setNewRequest({...newRequest, contactEmail: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <Input
                      placeholder="Your phone number"
                      value={newRequest.contactPhone}
                      onChange={(e) => setNewRequest({...newRequest, contactPhone: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Company</Label>
                    <Input
                      placeholder="Your company"
                      value={newRequest.contactCompany}
                      onChange={(e) => setNewRequest({...newRequest, contactCompany: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <Button type="button" variant="outline" onClick={() => setShowCreateDialog(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Create Request</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters */}
        <div className="mb-6 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search requests..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="matched">Matched</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Request Cards */}
        <div className="space-y-6">
          {filteredRequests.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No rental requests found</p>
              <Button onClick={() => setShowCreateDialog(true)}>
                Create Your First Request
              </Button>
            </div>
          ) : (
            filteredRequests.map((request) => (
              <Card key={request.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{request.equipmentType} Request</CardTitle>
                    <Badge variant={getStatusColor(request.status)}>
                      {request.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{request.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {request.location}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {request.startDate} to {request.endDate}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      ${request.budget.min} - ${request.budget.max}/{request.budget.period}
                    </div>
                  </div>

                  {request.responses.length > 0 && (
                    <div className="border-t pt-4">
                      <div className="flex items-center gap-2 mb-3">
                        <MessageSquare className="h-4 w-4" />
                        <span className="font-medium">{request.responses.length} Response(s)</span>
                      </div>
                      
                      <div className="space-y-3">
                        {request.responses.map((response) => (
                          <div key={response.id} className="bg-muted/50 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">{response.providerName}</span>
                              <Badge variant="outline">${response.proposedRate}/day</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{response.message}</p>
                            <div className="flex gap-2">
                              <Button size="sm">Accept Quote</Button>
                              <Button size="sm" variant="outline">Message Provider</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}