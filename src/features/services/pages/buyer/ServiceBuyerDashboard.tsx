import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus, 
  Search, 
  Calendar,
  Clock,
  DollarSign,
  Star,
  MessageCircle,
  FileText,
  CheckCircle,
  AlertCircle,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceBuyerDashboard = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Mock data - in real app, this would come from API
  const stats = [
    {
      title: 'Active Requests',
      value: '8',
      icon: Clock,
      change: '+2',
      color: 'text-blue-600'
    },
    {
      title: 'Completed Jobs',
      value: '47',
      icon: CheckCircle,
      change: '+5',
      color: 'text-green-600'
    },
    {
      title: 'Total Spent',
      value: '$24,500',
      icon: DollarSign,
      change: '+12%',
      color: 'text-purple-600'
    },
    {
      title: 'Avg Rating Given',
      value: '4.6',
      icon: Star,
      change: '+0.2',
      color: 'text-yellow-600'
    }
  ];

  const serviceRequests = [
    {
      id: '1',
      title: 'Excavator Hydraulic System Repair',
      category: 'Equipment Maintenance',
      status: 'active',
      proposalsCount: 12,
      budget: '$5,000 - $10,000',
      postedDate: '2024-02-01',
      urgency: 'high',
      location: 'Dubai, UAE'
    },
    {
      id: '2',
      title: 'Crane Operator Required - Daily',
      category: 'Operator Services',
      status: 'in_progress',
      proposalsCount: 8,
      budget: '$150/day',
      postedDate: '2024-01-28',
      urgency: 'medium',
      location: 'Abu Dhabi, UAE'
    },
    {
      id: '3',
      title: 'Equipment Transportation',
      category: 'Transportation',
      status: 'completed',
      proposalsCount: 15,
      budget: '$2,500',
      postedDate: '2024-01-15',
      urgency: 'low',
      location: 'Sharjah, UAE'
    }
  ];

  const activeServices = [
    {
      id: '1',
      title: 'Crane Operator - Al Maktoum Project',
      provider: 'Gulf Technical Services',
      startDate: '2024-02-10',
      endDate: '2024-02-25',
      status: 'ongoing',
      progress: 60,
      nextSchedule: '2024-02-12 08:00',
      cost: '$150/day'
    },
    {
      id: '2', 
      title: 'Bulldozer Maintenance Service',
      provider: 'Emirates Heavy Equipment',
      startDate: '2024-02-08',
      endDate: '2024-02-12',
      status: 'scheduled',
      progress: 0,
      nextSchedule: '2024-02-08 09:00',
      cost: '$850'
    }
  ];

  const messages = [
    {
      id: '1',
      providerName: 'Gulf Technical Services',
      lastMessage: 'The hydraulic system parts have arrived...',
      timestamp: '2 hours ago',
      unread: true
    },
    {
      id: '2',
      providerName: 'Emirates Transport Co.',
      lastMessage: 'Equipment pickup scheduled for tomorrow',
      timestamp: '5 hours ago',
      unread: false
    },
    {
      id: '3',
      providerName: 'Al Naboodah Technical',
      lastMessage: 'Maintenance report completed',
      timestamp: '1 day ago',
      unread: false
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { variant: 'default' as const, text: 'Active' },
      in_progress: { variant: 'secondary' as const, text: 'In Progress' },
      completed: { variant: 'outline' as const, text: 'Completed' },
      ongoing: { variant: 'default' as const, text: 'Ongoing' },
      scheduled: { variant: 'secondary' as const, text: 'Scheduled' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.active;
    return <Badge variant={config.variant}>{config.text}</Badge>;
  };

  const getUrgencyBadge = (urgency: string) => {
    const urgencyConfig = {
      high: { variant: 'destructive' as const, text: 'High Priority' },
      medium: { variant: 'secondary' as const, text: 'Medium Priority' },
      low: { variant: 'outline' as const, text: 'Low Priority' }
    };
    
    const config = urgencyConfig[urgency as keyof typeof urgencyConfig] || urgencyConfig.medium;
    return <Badge variant={config.variant}>{config.text}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Service Buyer Dashboard</h1>
            <p className="text-muted-foreground">Manage your service requests and ongoing projects</p>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <Link to="/services/marketplace">
              <Button variant="outline">
                <Search className="h-4 w-4 mr-2" />
                Browse Services
              </Button>
            </Link>
            <Link to="/post-service-request">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Request
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <div className="flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
                      <span className="text-xs text-green-600">{stat.change}</span>
                    </div>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="requests" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="requests">Service Requests</TabsTrigger>
                <TabsTrigger value="active">Active Services</TabsTrigger>
                <TabsTrigger value="history">Service History</TabsTrigger>
              </TabsList>

              <TabsContent value="requests" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">My Service Requests</h2>
                  <div className="flex gap-2">
                    <Button 
                      variant={activeFilter === 'all' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setActiveFilter('all')}
                    >
                      All
                    </Button>
                    <Button 
                      variant={activeFilter === 'active' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setActiveFilter('active')}
                    >
                      Active
                    </Button>
                    <Button 
                      variant={activeFilter === 'completed' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setActiveFilter('completed')}
                    >
                      Completed
                    </Button>
                  </div>
                </div>

                {serviceRequests.map((request) => (
                  <Card key={request.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{request.title}</h3>
                          <div className="flex gap-2 mb-2">
                            {getStatusBadge(request.status)}
                            {getUrgencyBadge(request.urgency)}
                          </div>
                          <p className="text-sm text-muted-foreground">{request.category}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{request.budget}</p>
                          <p className="text-sm text-muted-foreground">Budget</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <FileText className="h-4 w-4 mr-1" />
                            {request.proposalsCount} proposals
                          </span>
                          <span>Posted {request.postedDate}</span>
                          <span>{request.location}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View Proposals</Button>
                          <Button variant="outline" size="sm">Edit</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="active" className="space-y-4">
                <h2 className="text-xl font-semibold">Active Services</h2>
                
                {activeServices.map((service) => (
                  <Card key={service.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{service.title}</h3>
                          <p className="text-muted-foreground">{service.provider}</p>
                          {getStatusBadge(service.status)}
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{service.cost}</p>
                          <p className="text-sm text-muted-foreground">Cost</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-muted-foreground">Progress</span>
                          <span className="text-sm font-medium">{service.progress}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-300" 
                            style={{ width: `${service.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            Next: {service.nextSchedule}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            Message
                          </Button>
                          <Button variant="outline" size="sm">View Details</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="history" className="space-y-4">
                <h2 className="text-xl font-semibold">Service History</h2>
                <Card>
                  <CardContent className="p-8 text-center">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Service History</h3>
                    <p className="text-muted-foreground">
                      View all your completed services, invoices, and ratings
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/post-service-request">
                  <Button className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Post New Request
                  </Button>
                </Link>
                <Link to="/services/marketplace">
                  <Button variant="outline" className="w-full justify-start">
                    <Search className="h-4 w-4 mr-2" />
                    Browse Services
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Service
                </Button>
              </CardContent>
            </Card>

            {/* Recent Messages */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Messages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" 
                         style={{ backgroundColor: message.unread ? 'hsl(var(--primary))' : 'transparent' }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{message.providerName}</p>
                      <p className="text-xs text-muted-foreground truncate">{message.lastMessage}</p>
                      <p className="text-xs text-muted-foreground mt-1">{message.timestamp}</p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  View All Messages
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Schedule */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Crane Service</p>
                      <p className="text-xs text-muted-foreground">Feb 12, 8:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <AlertCircle className="h-5 w-5 text-orange-500" />
                    <div>
                      <p className="text-sm font-medium">Equipment Pickup</p>
                      <p className="text-xs text-muted-foreground">Feb 14, 10:00 AM</p>
                    </div>
                  </div>
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

export default ServiceBuyerDashboard;