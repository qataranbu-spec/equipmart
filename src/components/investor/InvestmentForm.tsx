import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, FileText, Shield, DollarSign } from 'lucide-react';

const investmentFormSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  company: z.string().optional(),
  investmentAmount: z.string().min(1, 'Please select an investment amount'),
  investorType: z.string().min(1, 'Please select investor type'),
  experience: z.string().optional(),
  interests: z.string().optional(),
  accredited: z.boolean().refine((val) => val === true, 'You must be an accredited investor'),
  nda: z.boolean().refine((val) => val === true, 'You must agree to the NDA terms'),
  updates: z.boolean().default(false),
});

type InvestmentFormData = z.infer<typeof investmentFormSchema>;

const InvestmentForm = () => {
  const { toast } = useToast();
  const form = useForm<InvestmentFormData>({
    resolver: zodResolver(investmentFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      investmentAmount: '',
      investorType: '',
      experience: '',
      interests: '',
      accredited: false,
      nda: false,
      updates: false,
    },
  });

  const onSubmit = async (data: InvestmentFormData) => {
    try {
      console.log('Investment form submission:', data);
      toast({
        title: "Thank you for your interest!",
        description: "We'll be in touch within 24 hours to discuss next steps.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Express Your Investment Interest
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take the first step towards joining our investment round. Fill out the form below 
            to receive our complete investor package and schedule a call with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Investor Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company/Fund Name</FormLabel>
                            <FormControl>
                              <Input placeholder="ABC Ventures" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="investmentAmount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Investment Amount *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select amount range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="25k-100k">$25K - $100K</SelectItem>
                                <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                                <SelectItem value="500k-2m">$500K - $2M</SelectItem>
                                <SelectItem value="2m+">$2M+</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="investorType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Investor Type *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select investor type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="angel">Angel Investor</SelectItem>
                                <SelectItem value="vc">Venture Capital</SelectItem>
                                <SelectItem value="family-office">Family Office</SelectItem>
                                <SelectItem value="strategic">Strategic Investor</SelectItem>
                                <SelectItem value="individual">Individual</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Investment Experience</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Brief description of your investment experience and portfolio..."
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="interests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Specific Interests</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="What interests you most about this investment opportunity?"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="accredited"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I confirm that I am an accredited investor *
                              </FormLabel>
                              <p className="text-sm text-muted-foreground">
                                As defined by SEC regulations
                              </p>
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="nda"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I agree to the Non-Disclosure Agreement terms *
                              </FormLabel>
                              <p className="text-sm text-muted-foreground">
                                Required to access confidential investor materials
                              </p>
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="updates"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                Subscribe to investor updates
                              </FormLabel>
                              <p className="text-sm text-muted-foreground">
                                Receive quarterly reports and company updates
                              </p>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Submit Investment Interest
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  What Happens Next?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full text-primary-foreground text-sm flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-semibold">Review & Response</p>
                    <p className="text-sm text-muted-foreground">
                      We'll review your submission and respond within 24 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full text-primary-foreground text-sm flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-semibold">Due Diligence Pack</p>
                    <p className="text-sm text-muted-foreground">
                      Receive complete financial projections and market analysis
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full text-primary-foreground text-sm flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-semibold">Investor Call</p>
                    <p className="text-sm text-muted-foreground">
                      Schedule a call with our founding team
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Secure & Confidential
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Your information is protected by industry-standard security measures 
                  and covered by our Non-Disclosure Agreement.
                </p>
                <div className="space-y-2">
                  <Badge variant="outline">SSL Encrypted</Badge>
                  <Badge variant="outline">GDPR Compliant</Badge>
                  <Badge variant="outline">NDA Protected</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Direct Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">investors@eqpmart.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentForm;