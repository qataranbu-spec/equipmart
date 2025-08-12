
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Building2, 
  Users, 
  Shield, 
  CheckCircle,
  Globe,
  DollarSign
} from 'lucide-react';

const JoinBuyerNetwork = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Verified Status",
      description: "Get verified buyer status and access to exclusive deals"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Connect with suppliers worldwide"
    },
    {
      icon: DollarSign,
      title: "Better Pricing",
      description: "Access wholesale pricing and volume discounts"
    },
    {
      icon: Users,
      title: "Priority Support",
      description: "Dedicated account manager and priority support"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Join the Buyer Network</h1>
            <p className="text-muted-foreground text-lg">
              Connect with verified suppliers worldwide and access exclusive equipment deals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Why Join Our Network?</h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Registration Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building2 className="h-5 w-5 mr-2" />
                  Company Registration
                </CardTitle>
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
                    <Input id="company" placeholder="Your Company Ltd." required />
                  </div>
                  
                  <div>
                    <Label htmlFor="companyType">Company Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select company type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="contractor">General Contractor</SelectItem>
                        <SelectItem value="rental">Equipment Rental</SelectItem>
                        <SelectItem value="infrastructure">Infrastructure Developer</SelectItem>
                        <SelectItem value="mining">Mining Company</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+971 50 123 4567" />
                  </div>
                  
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="uae">United Arab Emirates</SelectItem>
                        <SelectItem value="saudi">Saudi Arabia</SelectItem>
                        <SelectItem value="qatar">Qatar</SelectItem>
                        <SelectItem value="kuwait">Kuwait</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the Terms of Service and Privacy Policy
                    </Label>
                  </div>
                  
                  <Button className="w-full" size="lg">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Join Network
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    Your application will be reviewed within 24-48 hours
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JoinBuyerNetwork;
