import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Settings,
  TrendingUp,
  DollarSign,
  Star,
  Calendar,
  Clock,
  Users,
  MessageCircle,
  FileText,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Target,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceProviderDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - in real app, this would come from API
  const providerStats = [
    {
      title: 'Monthly Earnings',
      value: '$8,450',
      icon: DollarSign,
      change: '+18%',
      changeType: 'positive'
    },
    {
      title: 'Active Projects',
      value: '12',
      icon: Target,
      change: '+3',
      changeType: 'positive'
    },
    {
      title: 'Completion Rate',
      value: '98.5%',
      icon: CheckCircle,
      change: '+2%',
      changeType: 'positive'
    },
    {
      title: 'Average Rating',
      value: '4.9',
      icon: Star,
      change: '+0.1',
      changeType: 'positive'
    }
  ];

  const proposals = [
    {
      id: '1',
      title: 'Excavator Hydraulic System Repair',
      client: 'Emirates Construction',
      budget: '$5,000 - $10,000',
      status: 'pending',
      submittedDate: '2024-02-08',
      proposedAmount: '$7,500',
      timeline: '3-5 days'
    },
    {
      id: '2',
      title: 'Daily Crane Operator Service',
      client: 'Gulf Infrastructure',
      budget: '$150/day',
      status: 'accepted',
      submittedDate: '2024-02-05',
      proposedAmount: '$150/day',
      timeline: '30 days'
    },
    {
      id: '3',
      title: 'Equipment Transportation',
      client: 'Al Maktoum Development',
      budget: '$2,500',
      status: 'rejected',
      submittedDate: '2024-02-03',
      proposedAmount: '$2,800',
      timeline: '2 days'
    }
  ];

  const activeJobs = [
    {
      id: '1',
      title: 'Crane Operator - Marina Project',
      client: 'Emirates Construction',
      startDate: '2024-02-10',
      endDate: '2024-02-25',
      status: 'ongoing',
      progress: 45,
      earnings: '$2,250',
      nextSchedule: 'Tomorrow, 8:00 AM'
    },
    {
      id: '2',
      title: 'Excavator Maintenance Service',
      client: 'Gulf Infrastructure',
      startDate: '2024-02-12',
      endDate: '2024-02-15',
      status: 'scheduled',
      progress: 0,
      earnings: '$1,200',
      nextSchedule: 'Feb 12, 9:00 AM'
    }
  ];

  const recentMessages = [
    {
      id: '1',
      clientName: 'Emirates Construction',
      lastMessage: 'When can you start the hydraulic repair?',
      timestamp: '1 hour ago',
      unread: true
    },
    {
      id: '2',
      clientName: 'Gulf Infrastructure',
      lastMessage: 'Great work on the crane operation!',
      timestamp: '3 hours ago',
      unread: false
    },
    {
      id: '3',
      clientName: 'Al Maktoum Development',
      lastMessage: 'Project timeline has been extended',
      timestamp: '1 day ago',
      unread: false
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { variant: 'secondary' as const, text: 'Pending' },
      accepted: { variant: 'default' as const, text: 'Accepted' },
      rejected: { variant: 'destructive' as const, text: 'Rejected' },
      ongoing: { variant: 'default' as const, text: 'Ongoing' },
      scheduled: { variant: 'secondary' as const, text: 'Scheduled' },
      completed: { variant: 'outline' as const, text: 'Completed' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    return <Badge variant={config.variant}>{config.text}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=face" />
              <AvatarFallback>GT</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold mb-1">Gulf Technical Services</h1>
              <p className="text-muted-foreground">Heavy Equipment Specialist • Dubai, UAE</p>
              <div className="flex items-center mt-2 space-x-4">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-medium">4.9</span>
                  <span className="text-muted-foreground text-sm ml-1">(234 reviews)</span>
                </div>
                <Badge variant="secondary">Verified Provider</Badge>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Profile Settings
            </Button>
            <Link to="/services/marketplace">
              <Button>
                <Target className="h-4 w-4 mr-2" />
                Browse Opportunities
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {providerStats.map((stat, index) => (
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
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="proposals">Proposals</TabsTrigger>
                <TabsTrigger value="jobs">Active Jobs</TabsTrigger>
                <TabsTrigger value="earnings">Earnings</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        This Month Performance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Proposals Submitted</span>
                          <span className="font-semibold">24</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Jobs Won</span>
                          <span className="font-semibold">18</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Win Rate</span>
                          <span className="font-semibold">75%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Response Time</span>
                          <span className="font-semibold">2.5 hours</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Award className="h-5 w-5 mr-2" />
                        Achievements
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                            <Star className="h-4 w-4 text-yellow-600" />
                          </div>
                          <div>
                            <p className="font-medium">Top Rated Provider</p>
                            <p className="text-xs text-muted-foreground">4.9+ rating</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">100% Completion</p>
                            <p className="text-xs text-muted-foreground">Last 30 days</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Clock className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">Quick Responder</p>
                            <p className="text-xs text-muted-foreground">&lt; 3 hours</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 p-3 border rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <div className="flex-1">
                          <p className="font-medium">Proposal accepted</p>
                          <p className="text-sm text-muted-foreground">Daily Crane Operator Service - Gulf Infrastructure</p>
                        </div>
                        <span className="text-xs text-muted-foreground">2 hours ago</span>
                      </div>
                      <div className="flex items-center space-x-4 p-3 border rounded-lg">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <div className="flex-1">
                          <p className="font-medium">New proposal submitted</p>
                          <p className="text-sm text-muted-foreground">Excavator Hydraulic Repair - Emirates Construction</p>
                        </div>
                        <span className="text-xs text-muted-foreground">5 hours ago</span>
                      </div>
                      <div className="flex items-center space-x-4 p-3 border rounded-lg">
                        <Star className="h-5 w-5 text-yellow-600" />
                        <div className="flex-1">
                          <p className="font-medium">New 5-star review received</p>
                          <p className="text-sm text-muted-foreground">Equipment Transportation Service</p>
                        </div>
                        <span className="text-xs text-muted-foreground">1 day ago</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="proposals" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">My Proposals</h2>
                  <Button variant="outline" size="sm">View All</Button>
                </div>

                {proposals.map((proposal) => (
                  <Card key={proposal.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{proposal.title}</h3>
                          <p className="text-muted-foreground mb-2">{proposal.client}</p>
                          {getStatusBadge(proposal.status)}
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{proposal.proposedAmount}</p>
                          <p className="text-sm text-muted-foreground">Your bid</p>
                          <p className="text-xs text-muted-foreground mt-1">Budget: {proposal.budget}</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Timeline: {proposal.timeline}</span>
                          <span>Submitted: {proposal.submittedDate}</span>
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

              <TabsContent value="jobs" className="space-y-4">
                <h2 className="text-xl font-semibold">Active Jobs</h2>
                
                {activeJobs.map((job) => (
                  <Card key={job.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{job.title}</h3>
                          <p className="text-muted-foreground">{job.client}</p>
                          {getStatusBadge(job.status)}
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{job.earnings}</p>
                          <p className="text-sm text-muted-foreground">Earnings</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-muted-foreground">Progress</span>
                          <span className="text-sm font-medium">{job.progress}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-300" 
                            style={{ width: `${job.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          Next: {job.nextSchedule}
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            Contact Client
                          </Button>
                          <Button variant="outline" size="sm">Update Progress</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="earnings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Earnings Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">This Month</p>
                        <p className="text-2xl font-bold">$8,450</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Last Month</p>
                        <p className="text-2xl font-bold">$7,120</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">This Year</p>
                        <p className="text-2xl font-bold">$89,340</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Total</p>
                        <p className="text-2xl font-bold">$245,890</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Payment History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Detailed payment history and invoice management coming soon...</p>
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
                <Link to="/services/marketplace">
                  <Button className="w-full justify-start">
                    <Target className="h-4 w-4 mr-2" />
                    Browse Opportunities
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Update Profile
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Manage Schedule
                </Button>
              </CardContent>
            </Card>

            {/* Recent Messages */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Messages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentMessages.map((message) => (
                  <div key={message.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" 
                         style={{ backgroundColor: message.unread ? 'hsl(var(--primary))' : 'transparent' }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{message.clientName}</p>
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
                <CardTitle>Today's Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Marina Crane Operation</p>
                      <p className="text-xs text-muted-foreground">8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <AlertCircle className="h-5 w-5 text-orange-500" />
                    <div>
                      <p className="text-sm font-medium">Equipment Inspection</p>
                      <p className="text-xs text-muted-foreground">6:00 PM</p>
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

export default ServiceProviderDashboard;