import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Gavel, Wrench, Users, CreditCard, TrendingUp } from 'lucide-react';

const revenueStreams = [
  {
    icon: ShoppingCart,
    title: 'Marketplace Commissions',
    percentage: '45%',
    description: '5-8% commission on all equipment sales and rentals',
    projected: '$12M ARR by 2025',
  },
  {
    icon: Gavel,
    title: 'Auction Fees',
    percentage: '25%',
    description: 'Seller fees and buyer premiums on live auctions',
    projected: '$6.8M ARR by 2025',
  },
  {
    icon: Wrench,
    title: 'Service Subscriptions',
    percentage: '20%',
    description: 'Premium features, analytics, and maintenance services',
    projected: '$5.4M ARR by 2025',
  },
  {
    icon: Users,
    title: 'Network Memberships',
    percentage: '10%',
    description: 'Professional network access and lead generation',
    projected: '$2.7M ARR by 2025',
  },
];

const BusinessModel = () => {
  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Diversified Revenue Model
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Multiple revenue streams create a sustainable and scalable business with 
            projected $27M ARR by 2025 and 65% gross margins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {revenueStreams.map((stream, index) => {
            const IconComponent = stream.icon;
            return (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{stream.title}</CardTitle>
                    </div>
                    <Badge variant="secondary" className="text-lg font-bold px-3 py-1">
                      {stream.percentage}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{stream.description}</p>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="font-semibold text-foreground">{stream.projected}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <CreditCard className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">$27M ARR</h3>
              <p className="text-muted-foreground">Projected Annual Recurring Revenue by 2025</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-secondary/10 border-secondary/30">
            <CardContent className="p-8">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">65%</h3>
              <p className="text-muted-foreground">Gross Margin Target</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-accent/10 border-accent/30">
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">100K+</h3>
              <p className="text-muted-foreground">Target Active Users by 2025</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;