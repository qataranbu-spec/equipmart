import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Users, TrendingUp, MapPin, Handshake } from 'lucide-react';
import CountdownTimer from '../investor/CountdownTimer';

const PartnershipHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-primary/10 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Join the EqpMart Growth Partnership
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Partner with us to expand the construction equipment marketplace. 
              Share in our growth, expand your reach, and build the future of equipment trading together.
            </p>
            
            <div className="bg-primary/10 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-2 text-primary">Limited Time Partnership Program</h3>
              <p className="text-muted-foreground mb-4">Early partners get exclusive benefits and higher revenue shares</p>
              <CountdownTimer targetDate="2024-12-31T23:59:59Z" />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center border-primary/20 hover:border-primary/40 transition-colors">
              <Users className="mx-auto mb-3 h-8 w-8 text-primary" />
              <div className="text-2xl font-bold text-primary">2,500+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </Card>
            <Card className="p-6 text-center border-primary/20 hover:border-primary/40 transition-colors">
              <TrendingUp className="mx-auto mb-3 h-8 w-8 text-primary" />
              <div className="text-2xl font-bold text-primary">$12M+</div>
              <div className="text-sm text-muted-foreground">Equipment Value</div>
            </Card>
            <Card className="p-6 text-center border-primary/20 hover:border-primary/40 transition-colors">
              <MapPin className="mx-auto mb-3 h-8 w-8 text-primary" />
              <div className="text-2xl font-bold text-primary">25</div>
              <div className="text-sm text-muted-foreground">Cities Covered</div>
            </Card>
            <Card className="p-6 text-center border-primary/20 hover:border-primary/40 transition-colors">
              <Handshake className="mx-auto mb-3 h-8 w-8 text-primary" />
              <div className="text-2xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">Active Partners</div>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="mr-4 mb-4">
              Become a Growth Partner
            </Button>
            <Button variant="outline" size="lg" className="mb-4">
              Download Partnership Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipHero;