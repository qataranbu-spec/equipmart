import React from 'react';
import { Card } from '../ui/card';
import { ArrowRight, Globe, Network, Target, Zap } from 'lucide-react';

const EcosystemOpportunity = () => {
  const opportunities = [
    {
      icon: Globe,
      title: "Market Expansion",
      description: "Help us enter new geographical markets while gaining exclusive territorial rights and first-mover advantages in your region.",
      benefit: "Territorial partnerships with revenue sharing"
    },
    {
      icon: Network,
      title: "Network Effects",
      description: "As our partner network grows, every partner benefits from increased liquidity, better pricing, and more opportunities.",
      benefit: "Enhanced platform value for all partners"
    },
    {
      icon: Target,
      title: "Targeted Growth",
      description: "Focus on specific equipment categories or customer segments where you have expertise and connections.",
      benefit: "Specialized market leadership positions"
    },
    {
      icon: Zap,
      title: "Technology Acceleration",
      description: "Partner investment accelerates platform development, creating better tools and features for all users.",
      benefit: "Cutting-edge marketplace technology"
    }
  ];

  const marketData = [
    { metric: "Global Construction Equipment Market", value: "$195B", growth: "+4.8% annually" },
    { metric: "Equipment Rental Market", value: "$43B", growth: "+5.2% annually" },
    { metric: "Digital Marketplace Adoption", value: "15%", growth: "+12% annually" },
    { metric: "EqpMart Addressable Market", value: "$8.5B", growth: "Expanding rapidly" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Collective Growth Opportunity
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a thriving ecosystem where your success drives platform growth, 
              and platform growth drives your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {opportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{opportunity.title}</h3>
                      <p className="text-muted-foreground mb-4">{opportunity.description}</p>
                      <div className="flex items-center text-primary font-medium">
                        <span>{opportunity.benefit}</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="bg-muted/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Market Size & Growth</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {marketData.map((data, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">{data.value}</div>
                  <div className="font-medium mb-1">{data.metric}</div>
                  <div className="text-sm text-green-600 font-medium">{data.growth}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemOpportunity;