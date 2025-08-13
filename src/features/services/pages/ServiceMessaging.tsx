import React, { useState, useRef, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  Send,
  Paperclip,
  Search,
  MoreVertical,
  Star,
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  Phone,
  Video
} from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const ServiceMessaging = () => {
  const [selectedConversation, setSelectedConversation] = useState('1');
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock data - in real app, this would come from API
  const conversations = [
    {
      id: '1',
      clientName: 'Emirates Construction',
      clientAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      lastMessage: 'When can you start the hydraulic repair work?',
      timestamp: '2 hours ago',
      unreadCount: 2,
      status: 'active',
      serviceTitle: 'Excavator Hydraulic System Repair',
      projectType: 'Emergency Repair'
    },
    {
      id: '2',
      clientName: 'Gulf Infrastructure',
      clientAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      lastMessage: 'Great work on the crane operation today!',
      timestamp: '5 hours ago',
      unreadCount: 0,
      status: 'ongoing',
      serviceTitle: 'Daily Crane Operator Service',
      projectType: 'Operator Services'
    },
    {
      id: '3',
      clientName: 'Al Maktoum Development',
      clientAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      lastMessage: 'Project timeline has been extended to next month',
      timestamp: '1 day ago',
      unreadCount: 0,
      status: 'scheduled',
      serviceTitle: 'Equipment Transportation Service',
      projectType: 'Transportation'
    },
    {
      id: '4',
      clientName: 'Dubai Marina Project',
      clientAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      lastMessage: 'Thank you for the detailed inspection report',
      timestamp: '2 days ago',
      unreadCount: 0,
      status: 'completed',
      serviceTitle: 'Equipment Safety Inspection',
      projectType: 'Inspection'
    }
  ];

  const messages = [
    {
      id: '1',
      senderId: 'client',
      senderName: 'Emirates Construction',
      message: 'Hello, I saw your proposal for the excavator hydraulic repair. Can we discuss the timeline?',
      timestamp: '10:30 AM',
      type: 'text'
    },
    {
      id: '2',
      senderId: 'provider',
      senderName: 'Gulf Technical Services',
      message: 'Hello! Thank you for considering our proposal. I can start the work as early as tomorrow morning. The repair should take 3-4 days depending on the extent of the damage.',
      timestamp: '10:35 AM',
      type: 'text'
    },
    {
      id: '3',
      senderId: 'client',
      senderName: 'Emirates Construction',
      message: 'That sounds perfect. What do you need from us to get started?',
      timestamp: '10:40 AM',
      type: 'text'
    },
    {
      id: '4',
      senderId: 'provider',
      senderName: 'Gulf Technical Services',
      message: 'I\'ll need access to the equipment and a workspace. Also, please ensure the area is clear of other operations during the repair period. I\'ll bring all necessary tools and replacement parts.',
      timestamp: '10:45 AM',
      type: 'text'
    },
    {
      id: '5',
      senderId: 'client',
      senderName: 'Emirates Construction',
      message: 'All arranged. When can you start the hydraulic repair work?',
      timestamp: '2 hours ago',
      type: 'text'
    }
  ];

  const selectedClient = conversations.find(conv => conv.id === selectedConversation);

  const filteredConversations = conversations.filter(conv =>
    conv.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.serviceTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message logic here
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { variant: 'default' as const, text: 'Active' },
      ongoing: { variant: 'secondary' as const, text: 'Ongoing' },
      scheduled: { variant: 'outline' as const, text: 'Scheduled' },
      completed: { variant: 'outline' as const, text: 'Completed' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.active;
    return <Badge variant={config.variant}>{config.text}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Messages</h1>
            <p className="text-muted-foreground">Communicate with your clients and manage service requests</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
            {/* Conversations List */}
            <div className="lg:col-span-1">
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Conversations</CardTitle>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search conversations..."
                      className="pl-9"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-[calc(100%-120px)]">
                    {filteredConversations.map((conversation) => (
                      <div
                        key={conversation.id}
                        className={`p-4 cursor-pointer hover:bg-muted/50 border-b transition-colors ${
                          selectedConversation === conversation.id ? 'bg-primary/10 border-l-4 border-l-primary' : ''
                        }`}
                        onClick={() => setSelectedConversation(conversation.id)}
                      >
                        <div className="flex items-start space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={conversation.clientAvatar} />
                            <AvatarFallback>{conversation.clientName.slice(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium truncate">{conversation.clientName}</p>
                              {conversation.unreadCount > 0 && (
                                <Badge variant="default" className="h-5 w-5 rounded-full text-xs p-0 flex items-center justify-center">
                                  {conversation.unreadCount}
                                </Badge>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground truncate mb-1">{conversation.serviceTitle}</p>
                            <p className="text-xs text-muted-foreground truncate">{conversation.lastMessage}</p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                              {getStatusBadge(conversation.status)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-2">
              <Card className="h-full flex flex-col">
                {selectedClient ? (
                  <>
                    {/* Chat Header */}
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={selectedClient.clientAvatar} />
                            <AvatarFallback>{selectedClient.clientName.slice(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{selectedClient.clientName}</h3>
                            <p className="text-sm text-muted-foreground">{selectedClient.serviceTitle}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Phone className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Video className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <Separator />
                    </CardHeader>

                    {/* Messages */}
                    <CardContent className="flex-1 p-0">
                      <ScrollArea className="h-[400px] p-4">
                        <div className="space-y-4">
                          {messages.map((message) => (
                            <div
                              key={message.id}
                              className={`flex ${message.senderId === 'provider' ? 'justify-end' : 'justify-start'}`}
                            >
                              <div className={`max-w-[70%] ${
                                message.senderId === 'provider' 
                                  ? 'bg-primary text-primary-foreground' 
                                  : 'bg-muted'
                                } rounded-lg px-4 py-2`}
                              >
                                <p className="text-sm">{message.message}</p>
                                <p className={`text-xs mt-1 ${
                                  message.senderId === 'provider' 
                                    ? 'text-primary-foreground/70' 
                                    : 'text-muted-foreground'
                                }`}>
                                  {message.timestamp}
                                </p>
                              </div>
                            </div>
                          ))}
                          <div ref={messagesEndRef} />
                        </div>
                      </ScrollArea>
                    </CardContent>

                    {/* Message Input */}
                    <div className="p-4 border-t">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Paperclip className="h-4 w-4" />
                        </Button>
                        <Input
                          placeholder="Type your message..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                          className="flex-1"
                        />
                        <Button onClick={sendMessage} disabled={!newMessage.trim()}>
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold mb-2">Select a conversation</h3>
                      <p className="text-muted-foreground">Choose a conversation from the list to start messaging</p>
                    </div>
                  </div>
                )}
              </Card>
            </div>

            {/* Service Details Sidebar */}
            <div className="lg:col-span-1">
              {selectedClient && (
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">Service Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">{selectedClient.serviceTitle}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{selectedClient.projectType}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>Response time: 2 hours</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>Dubai, UAE</span>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium mb-2">Project Status</h4>
                      {getStatusBadge(selectedClient.status)}
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium mb-2">Quick Actions</h4>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Calendar className="h-4 w-4 mr-2" />
                          Schedule Meeting
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Update Status
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Star className="h-4 w-4 mr-2" />
                          Send Quote
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium mb-2">Client Information</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Project Manager</p>
                        <p>+971 50 123 4567</p>
                        <p>project@emirates-const.ae</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceMessaging;