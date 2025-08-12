import React from 'react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { DollarSign, Users, Wrench, Trophy, Shield, Zap } from 'lucide-react';

const CommunityBenefits = () => {
  const benefitCategories = [
    {
      title: "Financial Benefits",
      icon: DollarSign,
      color: "text-green-600 bg-green-600/10",
      benefits: [
        { name: "Revenue Sharing", description: "Direct percentage of transactions you influence" },
        { name: "Reduced Platform Fees", description: "Lower commission rates on your transactions" },
        { name: "Bulk Purchase Discounts", description: "Better pricing through collective buying power" },
        { name: "Priority Equipment Access", description: "First access to high-demand equipment" }
      ]
    },
    {
      title: "Operational Advantages",
      icon: Wrench,
      color: "text-blue-600 bg-blue-600/10",
      benefits: [
        { name: "Premium Listings", description: "Higher visibility in search results" },
        { name: "Enhanced Profiles", description: "Verified partner badges and detailed profiles" },
        { name: "Advanced Analytics", description: "Detailed insights into your performance" },
        { name: "API Access", description: "Custom integrations with your existing systems" }
      ]
    },
    {
      title: "Community & Network",
      icon: Users,
      color: "text-purple-600 bg-purple-600/10",
      benefits: [
        { name: "Partner Events", description: "Exclusive networking and educational events" },
        { name: "Industry Connections", description: "Access to other partners and industry leaders" },
        { name: "Market Intelligence", description: "Insider insights on market trends and opportunities" },
        { name: "Collaborative Opportunities", description: "Joint ventures and partnership deals" }
      ]
    },
    {
      title: "Growth Support",
      icon: Trophy,
      color: "text-orange-600 bg-orange-600/10",
      benefits: [
        { name: "Marketing Support", description: "Co-branded campaigns and promotional materials" },
        { name: "Business Development", description: "Strategic guidance for market expansion" },
        { name: "Training & Certification", description: "Platform expertise and industry training" },
        { name: "Technology Updates", description: "Early access to new features and tools" }
      ]
    }
  ];

  const successMetrics = [
    { metric: "Average Partner ROI", value: "320%", period: "Within 18 months" },
    { metric: "Revenue Increase", value: "85%", period: "First year partners" },
    { metric: "Market Expansion", value: "15x", period: "Territory coverage" },
    { metric: "Customer Growth", value: "240%", period: "Partner referrals" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Partnership Benefits & Community Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a community where your success is our success. Access exclusive benefits 
              designed to accelerate your business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefitCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${category.color}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="border-l-2 border-muted pl-4">
                        <div className="font-semibold text-sm">{benefit.name}</div>
                        <div className="text-muted-foreground text-sm">{benefit.description}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Partner Success Metrics</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="font-semibold mb-1">{metric.metric}</div>
                  <Badge variant="secondary" className="text-xs">{metric.period}</Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted/30 rounded-xl p-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Shield className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Partnership Protection</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Guaranteed Returns</div>
                <div className="text-sm text-muted-foreground">Minimum ROI protection for qualifying partners</div>
              </div>
              <div>
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Exit Flexibility</div>
                <div className="text-sm text-muted-foreground">Clear exit strategies and partnership transfer options</div>
              </div>
              <div>
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Legal Protection</div>
                <div className="text-sm text-muted-foreground">Comprehensive agreements and dispute resolution</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityBenefits;