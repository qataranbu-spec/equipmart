
import React from 'react';
import { Shield, Zap, Globe, TrendingUp, Users, Award } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Smart contracts ensure secure transactions with immutable records and automated execution."
    },
    {
      icon: Zap,
      title: "AI-Powered Matching",
      description: "Advanced algorithms match buyers with the right equipment and trusted suppliers."
    },
    {
      icon: Globe,
      title: "Global Marketplace",
      description: "Connect with equipment dealers and buyers worldwide with multi-language support."
    },
    {
      icon: TrendingUp,
      title: "E-Procurement Tools",
      description: "Streamline purchasing with RFQ/RFP management, supplier evaluation, and spend analytics."
    },
    {
      icon: Users,
      title: "B2B E-Commerce",
      description: "Complete supplier solutions with smart catalogs, proposal management, and client tools."
    },
    {
      icon: Award,
      title: "Verified Suppliers",
      description: "All suppliers go through rigorous verification and maintain quality certifications."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose EQP+MART?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're revolutionizing the construction equipment industry with cutting-edge technology
            and comprehensive business solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
