import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import CountdownTimer from './CountdownTimer';
import { TrendingUp, Users, DollarSign, Building } from 'lucide-react';

const InvestorHero = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Invest in the Future of <br />
            <span className="text-primary">Construction Equipment</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join our Series A funding round and be part of revolutionizing the $200B+ construction equipment market 
            through our comprehensive digital marketplace platform.
          </p>
          <div className="bg-card border rounded-lg p-6 inline-block mb-8">
            <div className="flex items-center gap-2 text-destructive font-semibold text-lg mb-2">
              <TrendingUp className="h-5 w-5" />
              Early Bird Special - 25% Bonus Shares
            </div>
            <CountdownTimer targetDate="2024-12-31" />
            <p className="text-sm text-muted-foreground mt-2">Limited to first 50 investors</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Building className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground">$200B+</h3>
              <p className="text-muted-foreground">Global Market Size</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground">15K+</h3>
              <p className="text-muted-foreground">Active Users</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground">$50M+</h3>
              <p className="text-muted-foreground">GMV in 2024</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground">150%</h3>
              <p className="text-muted-foreground">YoY Growth</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="mr-4">
            Join Early Bird Round
          </Button>
          <Button variant="outline" size="lg">
            Download Pitch Deck
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvestorHero;