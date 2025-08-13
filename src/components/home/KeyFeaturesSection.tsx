import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { BarChart3, Shield, TrendingUp, Globe } from 'lucide-react';

const KeyFeaturesSection = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Real-time Inventory & Booking",
      description: "Access up-to-date equipment availability and book instantly, reducing idle time and delays."
    },
    {
      icon: Shield,
      title: "Transparent Pricing & Verified Listings", 
      description: "No hidden fees, clear pricing, and verified equipment listings for peace of mind."
    },
    {
      icon: TrendingUp,
      title: "Integrated Dashboards & Analytics",
      description: "Manage your operations, track leads, and gain insights with intuitive dashboards."
    },
    {
      icon: Globe,
      title: "Multilingual Support (Arabic & English)",
      description: "Seamless experience for all users with full Arabic language support."
    }
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Key Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the powerful features that make EQP MART the go-to platform for construction equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-background">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;