
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Store,
  Building2,
  Globe,
  CheckCircle,
  Upload,
  Shield,
  TrendingUp
} from 'lucide-react';

const BecomeSupplier = () => {
  const benefits = [
    "Access to global marketplace",
    "Priority listing placement",
    "Lead generation tools",
    "Analytics dashboard",
    "Marketing support",
    "Dedicated account manager"
  ];

  const supplierTypes = [
    "Authorized Dealer",
    "Independent Dealer", 
    "Rental Company",
    "Manufacturer",
    "Distributor",
    "Service Provider"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Become a Supplier</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of suppliers connecting with buyers worldwide. 
            Grow your business with our comprehensive marketplace platform.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Registration Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Store className="h-5 w-5 mr-2" />
                  Supplier Registration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input id="companyName" placeholder="Enter your company name" />
                </div>

                <div>
                  <Label htmlFor="supplierType">Supplier Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select supplier type" />
                    </SelectTrigger>
                    <SelectContent>
                      {supplierTypes.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase().replace(' ', '-')}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactPerson">Contact Person</Label>
                    <Input id="contactPerson" placeholder="Full name" />
                  </div>
                  <div>
                    <Label htmlFor="jobTitle">Job Title</Label>
                    <Input id="jobTitle" placeholder="Your position" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Business Email</Label>
                    <Input id="email" type="email" placeholder="company@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="website">Company Website</Label>
                  <Input id="website" placeholder="https://www.yourcompany.com" />
                </div>

                <div>
                  <Label htmlFor="address">Business Address</Label>
                  <Textarea id="address" placeholder="Complete business address" rows={3} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        <SelectItem value="oman">Oman</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="yearsInBusiness">Years in Business</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10-20">10-20 years</SelectItem>
                        <SelectItem value="20+">20+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="productCategories">Equipment Categories</Label>
                  <Textarea 
                    id="productCategories" 
                    placeholder="List the types of equipment you supply (e.g., Excavators, Cranes, Bulldozers, etc.)"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="brands">Brands Represented</Label>
                  <Textarea 
                    id="brands" 
                    placeholder="List the equipment brands you carry (e.g., Caterpillar, Komatsu, Volvo, etc.)"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="inventorySize">Typical Inventory Size</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-50">1-50 units</SelectItem>
                      <SelectItem value="50-200">50-200 units</SelectItem>
                      <SelectItem value="200-500">200-500 units</SelectItem>
                      <SelectItem value="500+">500+ units</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="companyDescription">Company Description</Label>
                  <Textarea 
                    id="companyDescription" 
                    placeholder="Tell us about your company, services, and what makes you unique..."
                    rows={4}
                  />
                </div>

                <div>
                  <Label>Upload Documents</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload business license, certifications, and company brochure
                    </p>
                    <Button variant="outline" size="sm">Choose Files</Button>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the Terms of Service, Privacy Policy, and Supplier Agreement. 
                    I certify that all information provided is accurate and up-to-date.
                  </Label>
                </div>

                <Button className="w-full" size="lg">
                  Submit Application
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Membership Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Membership Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-3 text-green-500" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Network Reach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4,800+</div>
                    <p className="text-sm text-muted-foreground">Active Suppliers</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">45</div>
                    <p className="text-sm text-muted-foreground">Countries</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">$3.2B</div>
                    <p className="text-sm text-muted-foreground">Annual Sales</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Application Process */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Application Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Submit Application</p>
                      <p className="text-xs text-muted-foreground">Complete registration form</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Verification</p>
                      <p className="text-xs text-muted-foreground">Business and document verification</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Approval & Setup</p>
                      <p className="text-xs text-muted-foreground">Account setup and training</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">4</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Start Selling</p>
                      <p className="text-xs text-muted-foreground">List inventory and connect with buyers</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BecomeSupplier;
