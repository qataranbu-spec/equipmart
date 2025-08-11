import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Users, 
  Gavel, 
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  BarChart3,
  Zap,
  Globe,
  DollarSign,
  Award,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Procurement = () => {
  const procurementModules = [
    {
      title: "Request for Quotation (RFQ)",
      description: "Create and manage RFQ processes with automated vendor selection",
      icon: FileText,
      features: ["Automated RFQ creation", "Vendor comparison", "Bid evaluation"],
      savings: "25-40%"
    },
    {
      title: "Supplier Management",
      description: "Centralized supplier database with performance tracking",
      icon: Users,
      features: ["Supplier verification", "Performance metrics", "Risk assessment"],
      savings: "15-30%"
    },
    {
      title: "E-Auctions",
      description: "Reverse auctions for competitive pricing",
      icon: Gavel,
      features: ["Real-time bidding", "Multi-round auctions", "Auto-extension"],
      savings: "10-25%"
    },
    {
      title: "Contract Management",
      description: "Digital contract lifecycle management",
      icon: FileText,
      features: ["Digital signatures", "Compliance tracking", "Renewal alerts"],
      savings: "20-35%"
    }
  ];

  const successMetrics = [
    { label: "Cost Savings", value: "32%", description: "Average procurement cost reduction" },
    { label: "Process Time", value: "65%", description: "Faster procurement cycles" },
    { label: "Supplier Network", value: "5000+", description: "Verified suppliers globally" },
    { label: "Compliance", value: "99.8%", description: "Regulatory compliance rate" }
  ];

  const integrationPartners = [
    { name: "SAP", logo: "🏢" },
    { name: "Oracle", logo: "⚡" },
    { name: "Microsoft", logo: "🖥️" },
    { name: "Salesforce", logo: "☁️" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">E-Procurement Platform</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Streamline your procurement process with our comprehensive digital platform. 
              Reduce costs, improve efficiency, and ensure compliance across all procurement activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/start-free-trial">
                <Button size="lg">
                  <Zap className="h-5 w-5 mr-2" />
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/request-demo">
                <Button variant="outline" size="lg">Request Demo</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Success Metrics */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <h3 className="font-semibold mb-1">{metric.label}</h3>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Procurement Modules */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Comprehensive Procurement Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {procurementModules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <module.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{module.title}</CardTitle>
                      <Badge className="bg-green-100 text-green-800 mt-2">
                        Up to {module.savings} savings
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{module.description}</p>
                  <ul className="space-y-2">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Flow */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Streamlined Procurement Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Create RFQ</h3>
              <p className="text-muted-foreground text-sm">Define requirements and specifications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Invite Suppliers</h3>
              <p className="text-muted-foreground text-sm">Select from verified supplier network</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gavel className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Evaluate Bids</h3>
              <p className="text-muted-foreground text-sm">Compare proposals and negotiate</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Award Contract</h3>
              <p className="text-muted-foreground text-sm">Select winner and create contract</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Track Performance</h3>
              <p className="text-muted-foreground text-sm">Monitor delivery and compliance</p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
                <p className="text-muted-foreground">
                  Bank-level security with full audit trails and regulatory compliance features.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8 text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Global Supplier Network</h3>
                <p className="text-muted-foreground">
                  Access to pre-qualified suppliers worldwide with verified credentials and ratings.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8 text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Analytics & Reporting</h3>
                <p className="text-muted-foreground">
                  Real-time dashboards and comprehensive reports for data-driven decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Integration Partners */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Enterprise Integrations</h2>
          <div className="bg-secondary/20 rounded-2xl p-8">
            <p className="text-center text-muted-foreground mb-6">
              Seamlessly integrate with your existing ERP and business systems
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {integrationPartners.map((partner, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{partner.logo}</div>
                    <h3 className="font-semibold">{partner.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our E-Procurement Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Cost Reduction</h3>
              <p className="text-muted-foreground text-sm">Average 25-40% savings on procurement costs</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Time Savings</h3>
              <p className="text-muted-foreground text-sm">65% faster procurement cycle times</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Risk Mitigation</h3>
              <p className="text-muted-foreground text-sm">Automated compliance and audit trails</p>
            </div>
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Transparency</h3>
              <p className="text-muted-foreground text-sm">Complete visibility into procurement processes</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Procurement Process</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join leading organizations worldwide who have digitized their procurement operations. 
            Start your free trial today and experience the benefits of modern e-procurement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/start-free-trial">
              <Button size="lg">Start Free Trial</Button>
            </Link>
            <Link to="/request-demo">
              <Button variant="outline" size="lg">
                <Settings className="h-5 w-5 mr-2" />
                Schedule Demo
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Procurement;
