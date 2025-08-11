
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, Users, Video } from 'lucide-react';

const RequestDemo = () => {
  const demoFeatures = [
    "Live platform walkthrough",
    "Customized to your industry",
    "ROI calculation session",
    "Q&A with our experts",
    "Implementation timeline",
    "Pricing discussion"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Request a Demo</h1>
            <p className="text-xl text-muted-foreground mb-8">
              See how our e-procurement platform can transform your procurement operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Demo Info Column */}
            <div>
              <h2 className="text-2xl font-bold mb-6">What to expect in your demo:</h2>
              <div className="space-y-4 mb-8">
                {demoFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">45 Minutes</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive overview</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Video className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Virtual Meeting</h3>
                    <p className="text-sm text-muted-foreground">Screen sharing session</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Your Team</h3>
                    <p className="text-sm text-muted-foreground">Invite stakeholders</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Flexible Timing</h3>
                    <p className="text-sm text-muted-foreground">Fits your schedule</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Form Column */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Schedule Your Demo</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Business Email</Label>
                      <Input id="email" type="email" placeholder="john@company.com" required />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Your Company" required />
                    </div>
                    <div>
                      <Label htmlFor="title">Job Title</Label>
                      <Input id="title" placeholder="Procurement Manager" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div>
                      <Label htmlFor="industry">Industry</Label>
                      <select className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md">
                        <option value="">Select your industry</option>
                        <option value="construction">Construction</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="education">Education</option>
                        <option value="government">Government</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="message">Additional Information</Label>
                      <textarea 
                        id="message" 
                        className="w-full h-20 px-3 py-2 border border-input bg-background rounded-md resize-none"
                        placeholder="Tell us about your specific requirements..."
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      <Calendar className="h-5 w-5 mr-2" />
                      Schedule Demo
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      We'll contact you within 24 hours to schedule your personalized demo.
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

export default RequestDemo;
