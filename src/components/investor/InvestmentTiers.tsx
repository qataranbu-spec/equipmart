import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Check, Star, Crown, Zap } from 'lucide-react';

const investmentTiers = [
  {
    name: 'Angel Investor',
    minInvestment: '$25K',
    maxInvestment: '$100K',
    discount: '25%',
    icon: Star,
    color: 'bg-primary/5 border-primary/20',
    badgeColor: 'bg-primary text-primary-foreground',
    features: [
      'Early bird 25% bonus shares',
      'Quarterly investor updates',
      'Product beta access',
      'Networking events invite',
      'Tax incentives (SEIS/EIS eligible)'
    ],
    slotsTotal: 50,
    slotsTaken: 23,
    popular: false,
  },
  {
    name: 'Strategic Partner',
    minInvestment: '$100K',
    maxInvestment: '$500K',
    discount: '15%',
    icon: Crown,
    color: 'bg-secondary/10 border-secondary/30',
    badgeColor: 'bg-secondary text-secondary-foreground',
    features: [
      'Early bird 15% bonus shares',
      'Monthly investor calls',
      'Advisory board consideration',
      'Priority customer support',
      'Co-marketing opportunities',
      'Platform customization access'
    ],
    slotsTotal: 20,
    slotsTaken: 8,
    popular: true,
  },
  {
    name: 'Lead Investor',
    minInvestment: '$500K',
    maxInvestment: '$2M',
    discount: '10%',
    icon: Zap,
    color: 'bg-accent/10 border-accent/30',
    badgeColor: 'bg-accent text-accent-foreground',
    features: [
      'Early bird 10% bonus shares',
      'Board observer rights',
      'Bi-weekly founder access',
      'Due diligence materials',
      'Follow-on investment rights',
      'Strategic partnership discussions',
      'Exclusive market insights'
    ],
    slotsTotal: 5,
    slotsTaken: 2,
    popular: false,
  }
];

const InvestmentTiers = () => {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Early Bird Investment Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Limited-time offer with exclusive benefits for early investors. 
            Join before our funding round closes and secure bonus shares.
          </p>
          
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 inline-block">
            <p className="text-destructive font-semibold">
              ⚡ Early Bird Special ends in 47 days - Only 75 spots remaining!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {investmentTiers.map((tier, index) => {
            const IconComponent = tier.icon;
            const progressPercentage = (tier.slotsTaken / tier.slotsTotal) * 100;
            
            return (
              <Card 
                key={index} 
                className={`relative transition-all duration-300 hover:shadow-lg cursor-pointer ${
                  tier.color
                } ${selectedTier === index ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setSelectedTier(selectedTier === index ? null : index)}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full ${tier.badgeColor}`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-foreground">
                    {tier.minInvestment} - {tier.maxInvestment}
                  </div>
                  <Badge variant="destructive" className="mt-2">
                    {tier.discount} Bonus Shares
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Slots filled</span>
                      <span>{tier.slotsTaken}/{tier.slotsTotal}</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                  </div>

                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full" 
                    variant={selectedTier === index ? 'default' : 'outline'}
                  >
                    {selectedTier === index ? 'Selected' : 'Select Plan'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-card border rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Ready to Invest?
            </h3>
            <p className="text-muted-foreground mb-6">
              Schedule a call with our team to discuss investment details and get access to our complete investor package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Schedule Investor Call
              </Button>
              <Button size="lg" variant="outline">
                Download Due Diligence Pack
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentTiers;