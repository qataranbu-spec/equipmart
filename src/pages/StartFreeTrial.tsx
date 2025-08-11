
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle, Zap, Shield, TrendingUp } from 'lucide-react';

const StartFreeTrial = () => {
  const benefits = [
    "30-day free trial with full access",
    "No credit card required",
    "Dedicated customer support",
    "Access to all procurement modules",
    "Unlimited RFQ submissions",
    "Advanced analytics dashboard"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Start Your Free Trial</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the power of our e-procurement platform risk-free for 30 days
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits Column */}
            <div>
              <h2 className="text-2xl font-bold mb-6">What's included in your trial:</h2>
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
                    <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-sm">Quick Setup</h3>
                    <p className="text-xs text-muted-foreground">Ready in minutes</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-4">
                    <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-sm">Secure Platform</h3>
                    <p className="text-xs text-muted-foreground">Enterprise security</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-4">
                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-sm">Proven Results</h3>
                    <p className="text-xs text-muted-foreground">30% cost savings</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Form Column */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Get Started Today</CardTitle>
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
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div>
                      <Label htmlFor="employees">Company Size</Label>
                      <select className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md">
                        <option value="">Select company size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-1000">201-1000 employees</option>
                        <option value="1000+">1000+ employees</option>
                      </select>
                    </div>
                    <Button className="w-full" size="lg">
                      <Zap className="h-5 w-5 mr-2" />
                      Start My Free Trial
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      No credit card required. Cancel anytime.
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

export default StartFreeTrial;
