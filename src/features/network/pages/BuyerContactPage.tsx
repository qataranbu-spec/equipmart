
import React from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Building2,
  Package,
  DollarSign
} from 'lucide-react';

const BuyerContact = () => {
  const contactReasons = [
    { value: "equipment-inquiry", label: "Equipment Inquiry" },
    { value: "pricing", label: "Pricing Information" },
    { value: "bulk-order", label: "Bulk Order" },
    { value: "partnership", label: "Partnership Opportunity" },
    { value: "technical-support", label: "Technical Support" },
    { value: "other", label: "Other" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Buyer</h1>
            <p className="text-muted-foreground text-lg">
              Reach out to verified buyers to discuss your equipment offerings and build business relationships
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Send Message to Buyer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Your First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Your Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Your Company</Label>
                    <Input id="company" placeholder="Your Equipment Company" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Your Email</Label>
                    <Input id="email" type="email" placeholder="john@yourcompany.com" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Your Phone</Label>
                    <Input id="phone" placeholder="+971 50 123 4567" />
                  </div>
                  
                  <div>
                    <Label htmlFor="reason">Contact Reason</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select reason for contact" />
                      </SelectTrigger>
                      <SelectContent>
                        {contactReasons.map((reason) => (
                          <SelectItem key={reason.value} value={reason.value}>
                            {reason.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="equipment">Equipment Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select equipment category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excavators">Excavators</SelectItem>
                        <SelectItem value="cranes">Cranes</SelectItem>
                        <SelectItem value="bulldozers">Bulldozers</SelectItem>
                        <SelectItem value="loaders">Loaders</SelectItem>
                        <SelectItem value="trucks">Trucks</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Brief subject line" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <textarea 
                      id="message" 
                      className="w-full h-32 px-3 py-2 border border-input bg-background rounded-md resize-none"
                      placeholder="Describe your equipment offering, pricing, and how you can meet their needs..."
                      required
                    />
                  </div>
                  
                  <Button className="w-full" size="lg">
                    <Mail className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    Your message will be forwarded to the buyer. Response time varies by buyer.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Guidelines & Tips */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Building2 className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Be Professional</h4>
                        <p className="text-sm text-muted-foreground">
                          Include your company details and professional credentials
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Package className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Be Specific</h4>
                        <p className="text-sm text-muted-foreground">
                          Clearly describe your equipment, specifications, and availability
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <DollarSign className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Include Pricing</h4>
                        <p className="text-sm text-muted-foreground">
                          Provide competitive pricing or request for pricing discussion
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Response Time</h4>
                        <p className="text-sm text-muted-foreground">
                          Most buyers respond within 24-48 hours during business days
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alternative Contact Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Phone Support</p>
                        <p className="text-sm text-muted-foreground">+971 4 123 4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Email Support</p>
                        <p className="text-sm text-muted-foreground">buyers@eqpmart.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Live Chat</p>
                        <p className="text-sm text-muted-foreground">Available during business hours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">💡 Pro Tip</h3>
                  <p className="text-sm text-muted-foreground">
                    Buyers are more likely to respond to messages that address their specific 
                    current needs. Check their profile for current equipment requirements before contacting.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BuyerContact;
