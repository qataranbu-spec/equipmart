
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle, Star, Award, TrendingUp, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const JoinAsServiceProvider = () => {
  const membershipTiers = [
    {
      name: "Basic",
      price: "$49/month",
      features: [
        "Profile listing",
        "Up to 10 service requests",
        "Basic customer support",
        "Payment processing"
      ]
    },
    {
      name: "Professional",
      price: "$99/month",
      popular: true,
      features: [
        "Enhanced profile with photos",
        "Unlimited service requests",
        "Priority listing",
        "Advanced analytics",
        "Priority customer support"
      ]
    },
    {
      name: "Enterprise",
      price: "$199/month",
      features: [
        "Premium profile showcase",
        "Unlimited everything",
        "Featured placement",
        "Dedicated account manager",
        "Custom integrations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join as a Service Provider</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Grow your business by connecting with construction companies who need your expertise
            </p>
          </div>

          {/* Benefits Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Service Providers Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Quality Leads</h3>
                  <p className="text-muted-foreground">
                    Access to pre-qualified construction companies actively seeking services
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-8">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
                  <p className="text-muted-foreground">
                    Guaranteed payment processing with built-in dispute resolution
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-8">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Business Growth</h3>
                  <p className="text-muted-foreground">
                    Average 40% increase in revenue for active service providers
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Membership Plans */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Membership Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {membershipTiers.map((tier, index) => (
                <Card key={index} className={`relative ${tier.popular ? 'border-primary shadow-lg' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{tier.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Success Stories */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="ml-2 font-semibold">5.0</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Joining this platform increased our monthly revenue by 60%. The quality of leads is exceptional."
                  </p>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-primary" />
                    <span className="font-semibold">Ahmad Hassan - Gulf Technical Services</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="ml-2 font-semibold">5.0</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "The platform is user-friendly and the payment system is reliable. Highly recommended!"
                  </p>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-primary" />
                    <span className="font-semibold">Sarah Al-Mansoori - Emirates Transport</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-primary/5 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Network?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Start connecting with construction companies today and grow your service business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register-as-provider">
                <Button size="lg">Start Registration</Button>
              </Link>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JoinAsServiceProvider;
