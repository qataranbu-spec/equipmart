import React, { useState } from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { 
  Users, 
  UserPlus,
  UserCheck,
  UserX,
  MessageCircle,
  Search,
  Shield,
  Building2,
  Star,
  Globe,
  Clock,
  CheckCircle,
  X
} from 'lucide-react';

const ConnectionsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const connections = [
    {
      id: 1,
      name: "Ahmed Al-Rashid",
      company: "Emirates Construction",
      role: "buyer",
      location: "Dubai, UAE",
      rating: 4.8,
      verified: true,
      connectedDate: "2024-01-15",
      avatar: null,
      lastActive: "2 hours ago",
      mutualConnections: 12
    },
    {
      id: 2,
      name: "Sarah Johnson",
      company: "Gulf Equipment Rental",
      role: "supplier",
      location: "Qatar",
      rating: 4.9,
      verified: true,
      connectedDate: "2024-02-20",
      avatar: null,
      lastActive: "1 day ago",
      mutualConnections: 8
    }
  ];

  const pendingRequests = [
    {
      id: 3,
      name: "Mohammed bin Hassan",
      company: "Al Habtoor Group",
      role: "buyer",
      location: "Abu Dhabi, UAE",
      rating: 4.7,
      verified: true,
      requestDate: "2024-08-10",
      avatar: null,
      mutualConnections: 5
    },
    {
      id: 4,
      name: "Lisa Chen",
      company: "Asia Pacific Equipment",
      role: "expert",
      location: "Singapore",
      rating: 4.9,
      verified: true,
      requestDate: "2024-08-08",
      avatar: null,
      mutualConnections: 3
    }
  ];

  const sentRequests = [
    {
      id: 5,
      name: "David Thompson",
      company: "Thompson Construction",
      role: "buyer",
      location: "London, UK",
      rating: 4.6,
      verified: true,
      sentDate: "2024-08-05",
      avatar: null
    }
  ];

  const suggestions = [
    {
      id: 6,
      name: "Fatima Al-Zahra",
      company: "Qatar Infrastructure",
      role: "buyer",
      location: "Doha, Qatar",
      rating: 4.8,
      verified: true,
      avatar: null,
      mutualConnections: 15,
      commonProjects: ["Infrastructure", "Road Construction"]
    },
    {
      id: 7,
      name: "Roberto Martinez",
      company: "Mediterranean Equipment",
      role: "supplier",
      location: "Barcelona, Spain",
      rating: 4.7,
      verified: true,
      avatar: null,
      mutualConnections: 7,
      commonProjects: ["Excavators", "Construction Equipment"]
    }
  ];

  const handleAcceptRequest = (id: number) => {
    console.log('Accepting request:', id);
  };

  const handleDeclineRequest = (id: number) => {
    console.log('Declining request:', id);
  };

  const handleSendRequest = (id: number) => {
    console.log('Sending request to:', id);
  };

  const handleCancelRequest = (id: number) => {
    console.log('Canceling request:', id);
  };

  const ConnectionCard = ({ user, type, onAction1, onAction2, action1Label, action2Label }: any) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-lg font-semibold text-primary">
              {user.name.split(' ').map((n: string) => n[0]).join('')}
            </span>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="font-semibold text-lg truncate">{user.name}</h3>
              {user.verified && (
                <Badge variant="secondary" className="text-xs">
                  <Shield className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              )}
            </div>
            
            <p className="text-muted-foreground mb-2">{user.company}</p>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
              <div className="flex items-center">
                <Building2 className="h-4 w-4 mr-1" />
                {user.location}
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                {user.rating}
              </div>
              {user.mutualConnections && (
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {user.mutualConnections} mutual
                </div>
              )}
            </div>

            {user.lastActive && (
              <p className="text-xs text-muted-foreground mb-3">
                Active {user.lastActive}
              </p>
            )}

            {user.commonProjects && (
              <div className="flex flex-wrap gap-1 mb-3">
                {user.commonProjects.map((project: string, idx: number) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {project}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex space-x-2 mt-4">
          {onAction1 && (
            <Button size="sm" onClick={() => onAction1(user.id)} className="flex-1">
              {action1Label}
            </Button>
          )}
          {onAction2 && (
            <Button size="sm" variant="outline" onClick={() => onAction2(user.id)} className="flex-1">
              {action2Label}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">My Connections</h1>
            <p className="text-muted-foreground">
              Manage your professional network and build valuable business relationships.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search connections..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary mb-1">{connections.length}</div>
                <p className="text-sm text-muted-foreground">Connections</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary mb-1">{pendingRequests.length}</div>
                <p className="text-sm text-muted-foreground">Pending</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary mb-1">{sentRequests.length}</div>
                <p className="text-sm text-muted-foreground">Sent</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary mb-1">{suggestions.length}</div>
                <p className="text-sm text-muted-foreground">Suggestions</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="connections" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="connections">
                <UserCheck className="h-4 w-4 mr-2" />
                My Connections
              </TabsTrigger>
              <TabsTrigger value="pending">
                <Clock className="h-4 w-4 mr-2" />
                Pending ({pendingRequests.length})
              </TabsTrigger>
              <TabsTrigger value="sent">
                <UserPlus className="h-4 w-4 mr-2" />
                Sent ({sentRequests.length})
              </TabsTrigger>
              <TabsTrigger value="suggestions">
                <Users className="h-4 w-4 mr-2" />
                Suggestions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="connections" className="mt-6">
              <div className="space-y-4">
                {connections.map((user) => (
                  <ConnectionCard
                    key={user.id}
                    user={user}
                    type="connection"
                    onAction1={() => console.log('Message', user.id)}
                    onAction2={() => console.log('View profile', user.id)}
                    action1Label={
                      <>
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Message
                      </>
                    }
                    action2Label="View Profile"
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="pending" className="mt-6">
              <div className="space-y-4">
                {pendingRequests.map((user) => (
                  <ConnectionCard
                    key={user.id}
                    user={user}
                    type="pending"
                    onAction1={handleAcceptRequest}
                    onAction2={handleDeclineRequest}
                    action1Label={
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Accept
                      </>
                    }
                    action2Label={
                      <>
                        <X className="h-4 w-4 mr-2" />
                        Decline
                      </>
                    }
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sent" className="mt-6">
              <div className="space-y-4">
                {sentRequests.map((user) => (
                  <ConnectionCard
                    key={user.id}
                    user={user}
                    type="sent"
                    onAction1={handleCancelRequest}
                    onAction2={() => console.log('View profile', user.id)}
                    action1Label={
                      <>
                        <X className="h-4 w-4 mr-2" />
                        Cancel
                      </>
                    }
                    action2Label="View Profile"
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="suggestions" className="mt-6">
              <div className="space-y-4">
                {suggestions.map((user) => (
                  <ConnectionCard
                    key={user.id}
                    user={user}
                    type="suggestion"
                    onAction1={handleSendRequest}
                    onAction2={() => console.log('View profile', user.id)}
                    action1Label={
                      <>
                        <UserPlus className="h-4 w-4 mr-2" />
                        Connect
                      </>
                    }
                    action2Label="View Profile"
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ConnectionsPage;