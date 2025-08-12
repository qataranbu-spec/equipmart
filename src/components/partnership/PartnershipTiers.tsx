import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Check, Star, Crown, Zap } from 'lucide-react';

const PartnershipTiers = () => {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);

  const tiers = [
    {
      name: "Marketplace Partner",
      investment: "$5K - $25K",
      icon: Star,
      popular: false,
      revenueShare: "5%",
      features: [
        "5% revenue share on referred transactions",
        "Premium seller/buyer status",
        "Early access to new features",
        "Regional partnership opportunities",
        "Marketing support for partner business",
        "Priority customer support",
        "Monthly partnership reports"
      ],
      benefits: "Perfect for individual contractors and small equipment companies",
      cta: "Start Partnership"
    },
    {
      name: "Regional Expansion Partner",
      investment: "$25K - $100K",
      icon: Zap,
      popular: true,
      revenueShare: "10%",
      features: [
        "10% revenue share + territorial rights",
        "Co-branded marketing materials",
        "Dedicated account management",
        "Input on local market features",
        "Priority equipment sourcing",
        "Regional partner events",
        "Custom partnership agreements",
        "Quarterly business reviews"
      ],
      benefits: "Ideal for established equipment dealers and regional companies",
      cta: "Expand With Us"
    },
    {
      name: "Strategic Ecosystem Partner",
      investment: "$100K - $500K",
      icon: Crown,
      popular: false,
      revenueShare: "15%",
      features: [
        "15% revenue share + equity participation",
        "Advisory board representation",
        "Product development influence",
        "White-label opportunities",
        "Exclusive market segments",
        "Direct founder access",
        "Custom integration support",
        "Strategic planning sessions"
      ],
      benefits: "For large equipment companies and industry leaders",
      cta: "Join Strategic Level"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Partnership Investment Levels
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the partnership level that aligns with your business goals and growth aspirations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => {
              const IconComponent = tier.icon;
              const isSelected = selectedTier === index;
              
              return (
                <Card 
                  key={index}
                  className={`p-8 cursor-pointer transition-all duration-300 ${
                    isSelected 
                      ? 'ring-2 ring-primary shadow-xl scale-105' 
                      : 'hover:shadow-lg hover:scale-102'
                  } ${tier.popular ? 'border-primary/50' : ''}`}
                  onClick={() => setSelectedTier(isSelected ? null : index)}
                >
                  {tier.popular && (
                    <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                    <div className="text-2xl font-bold text-primary mb-1">{tier.investment}</div>
                    <div className="text-sm text-muted-foreground mb-4">{tier.benefits}</div>
                    <div className="bg-primary/5 rounded-lg p-3">
                      <div className="text-lg font-semibold text-primary">{tier.revenueShare} Revenue Share</div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full" 
                    variant={tier.popular ? "default" : "outline"}
                  >
                    {tier.cta}
                  </Button>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Need a custom partnership structure? We're flexible and open to discussions.
            </p>
            <Button variant="outline" size="lg">
              Schedule Partnership Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipTiers;