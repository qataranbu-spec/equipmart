import React, { useState } from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MessageCircle,
  Search,
  Send,
  Paperclip,
  MoreVertical,
  Phone,
  Video,
  Star,
  Archive,
  Trash2,
  Users,
  Shield,
  Clock,
  CheckCheck
} from 'lucide-react';

const MessagesPage = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const conversations = [
    {
      id: 1,
      name: "Ahmed Al-Rashid",
      company: "Emirates Construction",
      avatar: null,
      lastMessage: "Thanks for the equipment details. When can we schedule a demo?",
      timestamp: "2 hours ago",
      unread: 2,
      online: true,
      verified: true,
      type: "direct"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      company: "Gulf Equipment Rental",
      avatar: null,
      lastMessage: "The crane specifications look perfect for our project.",
      timestamp: "1 day ago",
      unread: 0,
      online: false,
      verified: true,
      type: "direct"
    },
    {
      id: 3,
      name: "Project Alpha Team",
      company: "Multiple Companies",
      avatar: null,
      lastMessage: "Mohammed: We need to finalize the equipment list by Friday",
      timestamp: "3 days ago",
      unread: 5,
      online: true,
      verified: false,
      type: "group",
      members: 5
    }
  ];

  const messages = [
    {
      id: 1,
      senderId: 2,
      senderName: "Ahmed Al-Rashid",
      content: "Hi! I'm interested in the Caterpillar 320D excavator you have listed. Is it still available?",
      timestamp: "10:30 AM",
      type: "text"
    },
    {
      id: 2,
      senderId: 1,
      senderName: "You",
      content: "Yes, it's available! It's a 2020 model with only 1,200 hours. Would you like to see more details?",
      timestamp: "10:35 AM",
      type: "text"
    },
    {
      id: 3,
      senderId: 2,
      senderName: "Ahmed Al-Rashid",
      content: "That sounds great. Could you send me the maintenance records and current condition photos?",
      timestamp: "10:40 AM",
      type: "text"
    },
    {
      id: 4,
      senderId: 1,
      senderName: "You",
      content: "Absolutely! I'll send you the complete maintenance history and recent photos.",
      timestamp: "10:42 AM",
      type: "text"
    },
    {
      id: 5,
      senderId: 1,
      senderName: "You",
      content: "excavator_photos.zip",
      timestamp: "10:43 AM",
      type: "file"
    },
    {
      id: 6,
      senderId: 2,
      senderName: "Ahmed Al-Rashid",
      content: "Thanks for the equipment details. When can we schedule a demo?",
      timestamp: "12:15 PM",
      type: "text"
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const selectedConversation = conversations.find(c => c.id === selectedChat);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-4">Messages</h1>
            <p className="text-muted-foreground">
              Connect and communicate with your network partners.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[800px]">
            {/* Conversations List */}
            <div className="lg:col-span-1">
              <Card className="h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Conversations</CardTitle>
                    <Button size="sm" variant="outline">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search messages..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto p-0">
                  <div className="space-y-1">
                    {conversations.map((conversation) => (
                      <div
                        key={conversation.id}
                        onClick={() => setSelectedChat(conversation.id)}
                        className={`p-4 cursor-pointer hover:bg-muted/50 transition-colors border-r-2 ${
                          selectedChat === conversation.id ? 'bg-muted border-r-primary' : 'border-r-transparent'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="relative">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              {conversation.type === 'group' ? (
                                <Users className="h-5 w-5 text-primary" />
                              ) : (
                                <span className="text-sm font-semibold text-primary">
                                  {conversation.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              )}
                            </div>
                            {conversation.online && conversation.type !== 'group' && (
                              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-background rounded-full" />
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <h3 className="font-medium text-sm truncate">{conversation.name}</h3>
                                {conversation.verified && (
                                  <Shield className="h-3 w-3 text-primary" />
                                )}
                              </div>
                              {conversation.unread > 0 && (
                                <Badge variant="default" className="text-xs min-w-[20px] h-5 flex items-center justify-center">
                                  {conversation.unread}
                                </Badge>
                              )}
                            </div>
                            
                            <p className="text-xs text-muted-foreground mb-1">{conversation.company}</p>
                            <p className="text-xs text-muted-foreground truncate">{conversation.lastMessage}</p>
                            <p className="text-xs text-muted-foreground mt-1">{conversation.timestamp}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-3">
              <Card className="h-full flex flex-col">
                {selectedConversation && (
                  <>
                    {/* Chat Header */}
                    <CardHeader className="border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              {selectedConversation.type === 'group' ? (
                                <Users className="h-5 w-5 text-primary" />
                              ) : (
                                <span className="text-sm font-semibold text-primary">
                                  {selectedConversation.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              )}
                            </div>
                            {selectedConversation.online && selectedConversation.type !== 'group' && (
                              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-background rounded-full" />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h2 className="font-semibold">{selectedConversation.name}</h2>
                              {selectedConversation.verified && (
                                <Shield className="h-4 w-4 text-primary" />
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {selectedConversation.type === 'group' 
                                ? `${selectedConversation.members} members`
                                : selectedConversation.online ? 'Online' : 'Last seen ' + selectedConversation.timestamp
                              }
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Phone className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Video className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.senderName === 'You' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-[70%] space-y-1`}>
                            {message.senderName !== 'You' && (
                              <p className="text-xs text-muted-foreground pl-3">{message.senderName}</p>
                            )}
                            <div
                              className={`p-3 rounded-lg ${
                                message.senderName === 'You'
                                  ? 'bg-primary text-primary-foreground ml-auto'
                                  : 'bg-muted'
                              }`}
                            >
                              {message.type === 'file' ? (
                                <div className="flex items-center space-x-2">
                                  <Paperclip className="h-4 w-4" />
                                  <span className="text-sm">{message.content}</span>
                                </div>
                              ) : (
                                <p className="text-sm">{message.content}</p>
                              )}
                            </div>
                            <div className={`flex items-center space-x-1 ${message.senderName === 'You' ? 'justify-end' : ''}`}>
                              <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                              {message.senderName === 'You' && (
                                <CheckCheck className="h-3 w-3 text-muted-foreground" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Message Input */}
                    <div className="border-t p-4">
                      <div className="flex items-end space-x-2">
                        <Button size="sm" variant="outline">
                          <Paperclip className="h-4 w-4" />
                        </Button>
                        <div className="flex-1">
                          <Textarea
                            placeholder="Type your message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            className="min-h-[40px] max-h-[120px] resize-none"
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSendMessage();
                              }
                            }}
                          />
                        </div>
                        <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </>
                )}

                {!selectedConversation && (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Select a conversation</h3>
                      <p className="text-muted-foreground">Choose a conversation from the list to start messaging.</p>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MessagesPage;