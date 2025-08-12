
import React, { useState } from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import AuthModal from '../components/AuthModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Zap, Globe } from 'lucide-react';

const Login = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<'login' | 'signup'>('login');

  const openLoginModal = () => {
    setAuthModalTab('login');
    setAuthModalOpen(true);
  };

  const openSignupModal = () => {
    setAuthModalTab('signup');
    setAuthModalOpen(true);
  };

  const features = [
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Enterprise-grade security for all your transactions and data"
    },
    {
      icon: Users,
      title: "Global Network",
      description: "Connect with buyers and sellers from around the world"
    },
    {
      icon: Zap,
      title: "Fast & Efficient",
      description: "Streamlined processes for quick equipment transactions"
    },
    {
      icon: Globe,
      title: "24/7 Support",
      description: "Round-the-clock customer support in multiple languages"
    }
  ];

  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Welcome to EQP+MART</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Join the world's leading construction equipment marketplace and e-procurement platform.
            </p>

            <div className="flex justify-center space-x-4 mb-12">
              <Button size="lg" onClick={openLoginModal}>
                Sign In to Your Account
              </Button>
              <Button variant="outline" size="lg" onClick={openSignupModal}>
                Create New Account
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardHeader className="text-center">
                    <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-6">
                Access thousands of equipment listings, connect with verified buyers and sellers, 
                and take advantage of our secure transaction platform.
              </p>
              <div className="flex justify-center space-x-4">
                <Button onClick={openSignupModal}>
                  Start Selling Equipment
                </Button>
                <Button variant="outline" onClick={openLoginModal}>
                  Browse Equipment
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>

      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        defaultTab={authModalTab}
      />
    </>
  );
};

export default Login;
