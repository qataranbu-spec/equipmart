
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, MessageCircle, Headphones } from 'lucide-react';

const ContactUs = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      details: "+971 4 123 4567",
      description: "Monday - Friday, 8AM - 6PM GST"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: "support@eqpmart.com",
      description: "Response within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      details: "Available Now",
      description: "Instant support during business hours"
    }
  ];

  const offices = [
    {
      city: "Dubai",
      address: "Sheikh Zayed Road, Dubai, UAE",
      phone: "+971 4 123 4567",
      email: "dubai@eqpmart.com"
    },
    {
      city: "Abu Dhabi", 
      address: "Al Khalidiya, Abu Dhabi, UAE",
      phone: "+971 2 123 4567",
      email: "abudhabi@eqpmart.com"
    },
    {
      city: "Riyadh",
      address: "King Fahd Road, Riyadh, Saudi Arabia", 
      phone: "+966 11 123 4567",
      email: "riyadh@eqpmart.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get in touch with our team for support, inquiries, or business partnerships
            </p>
          </div>

          {/* Contact Methods */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <method.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                    <p className="text-lg font-medium text-primary mb-2">{method.details}</p>
                    <p className="text-muted-foreground text-sm">{method.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Headphones className="h-5 w-5 mr-2" />
                    Send us a Message
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
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@company.com" required />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name (Optional)</Label>
                      <Input id="company" placeholder="Your Company" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+971 50 123 4567" />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <select className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md">
                        <option value="">Select inquiry type</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="sales">Sales & Pricing</option>
                        <option value="partnership">Partnership</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <textarea 
                        id="message" 
                        className="w-full h-32 px-3 py-2 border border-input bg-background rounded-md resize-none"
                        placeholder="Tell us how we can help you..."
                        required
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      <Mail className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      We'll respond to your message within 24 hours
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-primary" />
                        {office.city}
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">{office.address}</p>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{office.email}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Business Hours */}
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 6:00 PM GST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 2:00 PM GST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
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

export default ContactUs;
