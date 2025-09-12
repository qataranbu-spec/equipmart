import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Users, DollarSign, Shield, Clock, Network, Target } from "lucide-react";

export default function EquipmentFinancierProposal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4" variant="secondary">
            Equipment Financing Partnership
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Partner with the Future of Equipment Financing
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join our comprehensive marketplace and connect with verified equipment buyers, sellers, and industry professionals. Expand your financing portfolio with pre-qualified opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Apply as Financier Partner
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Download Partnership Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Partner With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Qualified Leads</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access pre-qualified equipment buyers with verified credit profiles and financing needs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Market Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  $1.2T equipment financing market with 8% annual growth and expanding digital adoption.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Network className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Ecosystem Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Connect with dealers, manufacturers, and equipment buyers in one integrated platform.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Faster Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Streamlined application and approval processes reduce time-to-funding by 60%.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Massive Market Opportunity</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <DollarSign className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">$1.2 Trillion Market Size</h3>
                    <p className="text-muted-foreground">
                      Global equipment financing market with consistent year-over-year growth.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">50,000+ Active Buyers</h3>
                    <p className="text-muted-foreground">
                      Growing network of construction companies, contractors, and equipment dealers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">8% Annual Growth</h3>
                    <p className="text-muted-foreground">
                      Sustained market expansion driven by infrastructure investment and digital transformation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl font-bold text-primary">$2.5M</CardTitle>
                  <CardDescription>Average monthly financing volume per partner</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl font-bold text-primary">85%</CardTitle>
                  <CardDescription>Customer satisfaction rate with our platform</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl font-bold text-primary">30%</CardTitle>
                  <CardDescription>Increase in lead conversion rates</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl font-bold text-primary">60%</CardTitle>
                  <CardDescription>Reduction in processing time</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Benefits</h2>
          <div className="space-y-6">
            {[
              {
                title: "Premium Lead Generation",
                description: "Access to qualified equipment financing leads with complete credit profiles and equipment specifications."
              },
              {
                title: "White-Label Solutions",
                description: "Customize the platform with your branding and integrate with existing systems and workflows."
              },
              {
                title: "Real-Time Analytics",
                description: "Comprehensive dashboard with market insights, portfolio performance, and customer analytics."
              },
              {
                title: "Risk Management Tools",
                description: "Advanced credit scoring, equipment valuation, and portfolio risk assessment capabilities."
              },
              {
                title: "Marketing Support",
                description: "Joint marketing campaigns, co-branded content, and lead generation support from our team."
              },
              {
                title: "Technology Integration",
                description: "API access for seamless integration with your existing lending and CRM systems."
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-lg border">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Tiers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Regional Partner</CardTitle>
                <CardDescription>Perfect for local and regional financiers</CardDescription>
                <div className="text-2xl font-bold text-primary mt-4">Contact Us</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Regional lead access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Basic analytics dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Standard support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Marketing co-op opportunities</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <Badge className="w-fit mb-2">Most Popular</Badge>
                <CardTitle className="text-xl">National Partner</CardTitle>
                <CardDescription>Ideal for national financing companies</CardDescription>
                <div className="text-2xl font-bold text-primary mt-4">Contact Us</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">National lead access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Advanced analytics & reporting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Priority support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">White-label options</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">API integration</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Enterprise Partner</CardTitle>
                <CardDescription>For large financial institutions</CardDescription>
                <div className="text-2xl font-bold text-primary mt-4">Contact Us</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Exclusive market access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Custom analytics & BI</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Dedicated account manager</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Full white-label platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Custom integrations</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Enterprise-Grade Security & Compliance</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our platform meets the highest standards for financial data security and regulatory compliance.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">SOC 2 Type II Certified</h3>
              <p className="text-sm text-muted-foreground">
                Independently verified security and availability controls
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">GDPR & CCPA Compliant</h3>
              <p className="text-sm text-muted-foreground">
                Full compliance with global data privacy regulations
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Bank-Level Encryption</h3>
              <p className="text-sm text-muted-foreground">
                256-bit SSL encryption for all data transmission and storage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Equipment Financing Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join leading financiers who are already growing their portfolios through our marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Download Partnership Package
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}