
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle, Shield, DollarSign, Users } from 'lucide-react';

const RegisterAsProvider = () => {
  const benefits = [
    "Access to verified business clients",
    "Secure payment processing",
    "Professional profile showcase",
    "Lead generation tools",
    "Customer review system",
    "24/7 platform support"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Service Provider Network</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with thousands of construction companies looking for your services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits Column */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Why join our network?</h2>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="text-center">
                  <CardContent className="p-4">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-sm">5000+</h3>
                    <p className="text-xs text-muted-foreground">Active clients</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-4">
                    <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-sm">$2M+</h3>
                    <p className="text-xs text-muted-foreground">Monthly revenue</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-4">
                    <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-sm">100%</h3>
                    <p className="text-xs text-muted-foreground">Secure payments</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Registration Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Create Your Provider Account</CardTitle>
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
                      <Input id="company" placeholder="Your Service Company" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div>
                      <Label htmlFor="services">Primary Services</Label>
                      <select className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md">
                        <option value="">Select primary service</option>
                        <option value="maintenance">Equipment Maintenance</option>
                        <option value="transportation">Transportation & Logistics</option>
                        <option value="installation">Installation Services</option>
                        <option value="operators">Operator Services</option>
                        <option value="multiple">Multiple Services</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="experience">Years of Experience</Label>
                      <select className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md">
                        <option value="">Select experience</option>
                        <option value="0-2">0-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="11-15">11-15 years</option>
                        <option value="15+">15+ years</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="coverage">Service Coverage Area</Label>
                      <Input id="coverage" placeholder="City, State, or Region" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="terms" className="rounded" />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the Terms of Service and Privacy Policy
                      </Label>
                    </div>
                    <Button className="w-full" size="lg">
                      Create Provider Account
                    </Button>
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

export default RegisterAsProvider;
