import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { Badge } from '../ui/badge';
import { useToast } from '../ui/use-toast';
import { FileText, Shield, Clock, CheckCircle } from 'lucide-react';

const partnershipFormSchema = z.object({
  // Business Information
  companyName: z.string().min(2, 'Company name is required'),
  contactName: z.string().min(2, 'Contact name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  website: z.string().url().optional().or(z.literal('')),
  
  // Business Details
  businessType: z.string().min(1, 'Business type is required'),
  yearsInBusiness: z.string().min(1, 'Years in business is required'),
  currentRevenue: z.string().min(1, 'Revenue range is required'),
  equipmentTypes: z.string().min(1, 'Equipment types are required'),
  
  // Partnership Details
  partnershipLevel: z.string().min(1, 'Partnership level is required'),
  investmentAmount: z.string().min(1, 'Investment amount is required'),
  targetMarkets: z.string().min(1, 'Target markets are required'),
  
  // Experience & Goals
  currentChallenges: z.string().min(10, 'Please describe your challenges'),
  growthGoals: z.string().min(10, 'Please describe your growth goals'),
  
  // Legal
  accreditedInvestor: z.boolean(),
  nda: z.boolean().refine(val => val === true, 'NDA agreement is required'),
  terms: z.boolean().refine(val => val === true, 'Terms acceptance is required')
});

type PartnershipFormData = z.infer<typeof partnershipFormSchema>;

const PartnershipApplication = () => {
  const { toast } = useToast();

  const form = useForm<PartnershipFormData>({
    resolver: zodResolver(partnershipFormSchema),
    defaultValues: {
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      website: '',
      businessType: '',
      yearsInBusiness: '',
      currentRevenue: '',
      equipmentTypes: '',
      partnershipLevel: '',
      investmentAmount: '',
      targetMarkets: '',
      currentChallenges: '',
      growthGoals: '',
      accreditedInvestor: false,
      nda: false,
      terms: false
    }
  });

  const onSubmit = async (data: PartnershipFormData) => {
    try {
      console.log('Partnership application submitted:', data);
      toast({
        title: "Application Submitted Successfully!",
        description: "We'll review your partnership application and contact you within 2 business days.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const applicationSteps = [
    {
      icon: FileText,
      title: "Application Review",
      description: "We review your business profile and partnership goals",
      timeline: "1-2 business days"
    },
    {
      icon: Shield,
      title: "Due Diligence",
      description: "Mutual evaluation and partnership structure discussion",
      timeline: "3-5 business days"
    },
    {
      icon: CheckCircle,
      title: "Partnership Launch",
      description: "Agreement signing and onboarding process",
      timeline: "1-2 weeks"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Partnership Application
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take the first step towards joining the EqpMart growth partnership. 
              Tell us about your business and partnership goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Application Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Partnership Application Form</h3>
                
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Business Information */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-primary">Business Information</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="companyName">Company Name *</Label>
                        <Input
                          id="companyName"
                          {...form.register('companyName')}
                          placeholder="Your company name"
                        />
                        {form.formState.errors.companyName && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.companyName.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="contactName">Contact Name *</Label>
                        <Input
                          id="contactName"
                          {...form.register('contactName')}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...form.register('email')}
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          {...form.register('phone')}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="website">Website (Optional)</Label>
                        <Input
                          id="website"
                          {...form.register('website')}
                          placeholder="https://yourcompany.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Business Details */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-primary">Business Details</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="businessType">Business Type *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select business type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="contractor">General Contractor</SelectItem>
                            <SelectItem value="equipment-dealer">Equipment Dealer</SelectItem>
                            <SelectItem value="rental-company">Equipment Rental</SelectItem>
                            <SelectItem value="supplier">Equipment Supplier</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="yearsInBusiness">Years in Business *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-2">0-2 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="6-10">6-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="currentRevenue">Annual Revenue *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-1m">Under $1M</SelectItem>
                            <SelectItem value="1-5m">$1M - $5M</SelectItem>
                            <SelectItem value="5-25m">$5M - $25M</SelectItem>
                            <SelectItem value="25m+">$25M+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="equipmentTypes">Primary Equipment Types *</Label>
                        <Input
                          id="equipmentTypes"
                          {...form.register('equipmentTypes')}
                          placeholder="Excavators, Cranes, Bulldozers..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Partnership Details */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-primary">Partnership Preferences</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="partnershipLevel">Preferred Partnership Level *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select partnership level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="marketplace">Marketplace Partner ($5K-$25K)</SelectItem>
                            <SelectItem value="regional">Regional Expansion ($25K-$100K)</SelectItem>
                            <SelectItem value="strategic">Strategic Ecosystem ($100K-$500K)</SelectItem>
                            <SelectItem value="custom">Custom Partnership</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="investmentAmount">Investment Amount *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select amount" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5-15k">$5K - $15K</SelectItem>
                            <SelectItem value="15-50k">$15K - $50K</SelectItem>
                            <SelectItem value="50-150k">$50K - $150K</SelectItem>
                            <SelectItem value="150k+">$150K+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="targetMarkets">Target Markets/Regions *</Label>
                        <Input
                          id="targetMarkets"
                          {...form.register('targetMarkets')}
                          placeholder="Geographic areas you want to focus on"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Experience & Goals */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-primary">Business Goals</h4>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="currentChallenges">Current Business Challenges *</Label>
                        <Textarea
                          id="currentChallenges"
                          {...form.register('currentChallenges')}
                          placeholder="What challenges is your business facing that partnership could help solve?"
                          rows={3}
                        />
                      </div>
                      <div>
                        <Label htmlFor="growthGoals">Growth Goals & Expectations *</Label>
                        <Textarea
                          id="growthGoals"
                          {...form.register('growthGoals')}
                          placeholder="What are your growth goals and how do you see partnership helping?"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Legal & Agreements */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-primary">Legal & Agreements</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="accreditedInvestor"
                          {...form.register('accreditedInvestor')}
                        />
                        <div>
                          <Label htmlFor="accreditedInvestor">I am an accredited investor</Label>
                          <p className="text-sm text-muted-foreground">
                            This helps us provide appropriate investment opportunities
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="nda"
                          {...form.register('nda')}
                        />
                        <div>
                          <Label htmlFor="nda">I agree to the Non-Disclosure Agreement *</Label>
                          <p className="text-sm text-muted-foreground">
                            Required to access detailed partnership information
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="terms"
                          {...form.register('terms')}
                        />
                        <div>
                          <Label htmlFor="terms">I accept the partnership terms and conditions *</Label>
                          <p className="text-sm text-muted-foreground">
                            Standard partnership agreement terms
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Partnership Application
                  </Button>
                </form>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Application Process */}
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-primary" />
                  Application Process
                </h3>
                <div className="space-y-6">
                  {applicationSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <div key={index} className="flex space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <IconComponent className="h-4 w-4 text-primary" />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-sm">{step.title}</div>
                          <div className="text-muted-foreground text-sm">{step.description}</div>
                          <Badge variant="outline" className="mt-1 text-xs">{step.timeline}</Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Contact Information */}
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4">Need Help?</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium">Partnership Team</div>
                    <div className="text-muted-foreground">partnerships@eqpmart.com</div>
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-PART</div>
                  </div>
                  <div>
                    <div className="font-medium">Business Hours</div>
                    <div className="text-muted-foreground">Mon-Fri, 9AM-6PM EST</div>
                  </div>
                </div>
              </Card>

              {/* Security Note */}
              <Card className="p-6 bg-muted/30">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div className="text-sm">
                    <div className="font-medium mb-2">Secure & Confidential</div>
                    <div className="text-muted-foreground">
                      All information is encrypted and protected. We respect your privacy and will only use this information for partnership evaluation.
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipApplication;