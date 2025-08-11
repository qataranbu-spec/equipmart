
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FileText, Clock, DollarSign, Users } from 'lucide-react';

const PostServiceRequest = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Post a Service Request</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Describe your service needs and receive competitive quotes from qualified providers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info Column */}
            <div>
              <h2 className="text-2xl font-bold mb-6">How it works:</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Describe Your Needs</h3>
                    <p className="text-muted-foreground text-sm">
                      Provide details about your service requirements, timeline, and budget
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Receive Quotes</h3>
                    <p className="text-muted-foreground text-sm">
                      Qualified service providers will submit competitive proposals
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Choose Provider</h3>
                    <p className="text-muted-foreground text-sm">
                      Compare proposals and select the best provider for your needs
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="text-center">
                  <CardContent className="p-4">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-sm">24 Hours</h3>
                    <p className="text-xs text-muted-foreground">Average response time</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-4">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-sm">3-5 Quotes</h3>
                    <p className="text-xs text-muted-foreground">Average proposals received</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Form Column */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Service Request Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="title">Request Title</Label>
                      <Input id="title" placeholder="e.g., Excavator Maintenance Service" required />
                    </div>
                    <div>
                      <Label htmlFor="service">Service Category</Label>
                      <select className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md">
                        <option value="">Select service type</option>
                        <option value="maintenance">Equipment Maintenance</option>
                        <option value="transportation">Transportation & Logistics</option>
                        <option value="installation">Installation Services</option>
                        <option value="operators">Operator Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="equipment">Equipment Type</Label>
                      <select className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md">
                        <option value="">Select equipment</option>
                        <option value="excavators">Excavators</option>
                        <option value="cranes">Cranes</option>
                        <option value="bulldozers">Bulldozers</option>
                        <option value="loaders">Loaders</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="location">Service Location</Label>
                      <Input id="location" placeholder="City, State" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="startDate">Start Date</Label>
                        <Input id="startDate" type="date" />
                      </div>
                      <div>
                        <Label htmlFor="endDate">End Date</Label>
                        <Input id="endDate" type="date" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <select className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md">
                        <option value="">Select budget range</option>
                        <option value="under-1000">Under $1,000</option>
                        <option value="1000-5000">$1,000 - $5,000</option>
                        <option value="5000-10000">$5,000 - $10,000</option>
                        <option value="over-10000">Over $10,000</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="description">Detailed Description</Label>
                      <textarea 
                        id="description" 
                        className="w-full h-24 px-3 py-2 border border-input bg-background rounded-md resize-none"
                        placeholder="Provide detailed information about your service requirements..."
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact">Contact Information</Label>
                      <Input id="contact" placeholder="Your email or phone number" required />
                    </div>
                    <Button className="w-full" size="lg">
                      <FileText className="h-5 w-5 mr-2" />
                      Post Service Request
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      Your request will be visible to verified service providers
                    </p>
                  </form>
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

export default PostServiceRequest;
