import React from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users,
  MessageCircle,
  Heart,
  UserPlus,
  TrendingUp,
  Globe,
  Calendar,
  Bell,
  Star,
  Shield,
  Activity,
  Network,
  Award,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const NetworkingHubPage = () => {
  const networkStats = [
    {
      title: "Your Connections",
      value: "156",
      change: "+12 this month",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Messages",
      value: "23",
      change: "5 unread",
      icon: MessageCircle,
      color: "text-green-600"
    },
    {
      title: "Profile Views",
      value: "89",
      change: "+15 this week",
      icon: TrendingUp,
      color: "text-purple-600"
    },
    {
      title: "Favorites",
      value: "34",
      change: "6 new items",
      icon: Heart,
      color: "text-red-600"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: "connection",
      title: "Ahmed Al-Rashid accepted your connection request",
      time: "2 hours ago",
      avatar: null,
      action: "View Profile"
    },
    {
      id: 2,
      type: "message",
      title: "Sarah Johnson sent you a message about crane rental",
      time: "5 hours ago",
      avatar: null,
      action: "Reply"
    },
    {
      id: 3,
      type: "profile_view",
      title: "Your profile was viewed by Gulf Construction Ltd",
      time: "1 day ago",
      avatar: null,
      action: "View Details"
    },
    {
      id: 4,
      type: "favorite",
      title: "New equipment matching your interests is available",
      time: "2 days ago",
      avatar: null,
      action: "View Equipment"
    }
  ];

  const suggestions = [
    {
      id: 1,
      name: "Mohammed bin Hassan",
      company: "Al Habtoor Group",
      role: "Construction Manager",
      location: "Abu Dhabi, UAE",
      mutualConnections: 8,
      reason: "Works in similar projects"
    },
    {
      id: 2,
      name: "Lisa Chen",
      company: "Asia Pacific Equipment",
      role: "Equipment Specialist",
      location: "Singapore",
      mutualConnections: 5,
      reason: "Connected to your connections"
    },
    {
      id: 3,
      name: "Roberto Martinez",
      company: "Mediterranean Equipment",
      role: "Sales Director", 
      location: "Barcelona, Spain",
      mutualConnections: 3,
      reason: "Similar equipment interests"
    }
  ];

  const quickActions = [
    {
      title: "Find New Connections",
      description: "Discover potential business partners in your industry",
      icon: UserPlus,
      action: "/explore-network",
      color: "bg-blue-500"
    },
    {
      title: "Browse Messages",
      description: "Check your latest conversations and replies",
      icon: MessageCircle,
      action: "/messages",
      color: "bg-green-500"
    },
    {
      title: "View Favorites",
      description: "Access your saved people, equipment, and services",
      icon: Heart,
      action: "/favorites",
      color: "bg-red-500"
    },
    {
      title: "Manage Connections",
      description: "View and organize your professional network",
      icon: Users,
      action: "/connections",
      color: "bg-purple-500"
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'connection': return UserPlus;
      case 'message': return MessageCircle;
      case 'profile_view': return Users;
      case 'favorite': return Heart;
      default: return Activity;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">Networking Hub</h1>
                <p className="text-muted-foreground text-lg">
                  Your central place for all networking activities and connections.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
                <Button size="sm">
                  <Network className="h-4 w-4 mr-2" />
                  Explore Network
                </Button>
              </div>
            </div>
          </div>

          {/* Network Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {networkStats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">{stat.change}</p>
                    </div>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Actions */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {quickActions.map((action, index) => (
                      <Link key={index} to={action.action}>
                        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                          <CardContent className="p-4">
                            <div className="flex items-start space-x-3">
                              <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center`}>
                                <action.icon className="h-5 w-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold mb-1">{action.title}</h3>
                                <p className="text-sm text-muted-foreground">{action.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 mr-2" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => {
                      const ActivityIcon = getActivityIcon(activity.type);
                      return (
                        <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <ActivityIcon className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm">{activity.title}</p>
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                          </div>
                          <Button size="sm" variant="outline" className="text-xs">
                            {activity.action}
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" size="sm" className="w-full">
                      View All Activity
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* People You May Know */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    People You May Know
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {suggestions.map((person) => (
                      <div key={person.id} className="border-b last:border-b-0 pb-4 last:pb-0">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-sm font-semibold text-primary">
                              {person.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">{person.name}</h4>
                            <p className="text-xs text-muted-foreground">{person.role} at {person.company}</p>
                            <p className="text-xs text-muted-foreground">{person.location}</p>
                            <div className="flex items-center mt-1">
                              <Users className="h-3 w-3 mr-1 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">
                                {person.mutualConnections} mutual connections
                              </span>
                            </div>
                            <p className="text-xs text-primary mt-1">{person.reason}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2 mt-3">
                          <Button size="sm" className="flex-1 text-xs">
                            <UserPlus className="h-3 w-3 mr-1" />
                            Connect
                          </Button>
                          <Button size="sm" variant="outline" className="text-xs">
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link to="/explore-network">
                      <Button variant="outline" size="sm" className="w-full">
                        See More Suggestions
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Network Tips */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Networking Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      <p className="text-sm">Complete your profile to increase visibility by 5x</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      <p className="text-sm">Send personalized connection requests for better acceptance rates</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      <p className="text-sm">Engage with posts and updates to stay visible in your network</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NetworkingHubPage;