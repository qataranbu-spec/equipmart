import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Users, DollarSign, Shield, Clock, Network, Target, Wrench, Building, HardHat, MapPin } from "lucide-react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function ConstructionContractorProposal() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-gradient-to-br from-background to-muted">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4" variant="secondary">
            Construction Contractor Partnership
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Build Your Business with Our Marketplace
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join our comprehensive construction marketplace and connect with verified equipment owners, suppliers, and project opportunities. Expand your contracting business with qualified leads and reliable partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Apply as Contractor Partner
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Download Contractor Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Partner With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Project Leads</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access pre-qualified construction projects with verified budgets and timelines.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Building className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Equipment Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Connect with equipment owners and rental providers for your project needs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Network className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Supplier Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access verified suppliers, parts dealers, and service providers in one platform.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <DollarSign className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Financing Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Connect with financing partners for equipment purchases and project funding.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Wrench className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Service Marketplace</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Offer specialized services and find subcontractors for your projects.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <HardHat className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Expert Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Connect with industry experts, consultants, and technical specialists.
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
              <h2 className="text-3xl font-bold mb-6">Growing Construction Market</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <DollarSign className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">$2.1 Trillion Market Size</h3>
                    <p className="text-muted-foreground">
                      Global construction market with infrastructure investment driving growth.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">75,000+ Active Projects</h3>
                    <p className="text-muted-foreground">
                      Growing network of construction projects, developers, and contractors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">6% Annual Growth</h3>
                    <p className="text-muted-foreground">
                      Sustained market expansion driven by urbanization and infrastructure development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl font-bold text-primary">$850K</CardTitle>
                  <CardDescription>Average project value per contractor partner</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl font-bold text-primary">92%</CardTitle>
                  <CardDescription>Contractor satisfaction rate with our platform</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl font-bold text-primary">45%</CardTitle>
                  <CardDescription>Increase in project acquisition rates</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl font-bold text-primary">35%</CardTitle>
                  <CardDescription>Reduction in equipment sourcing time</CardDescription>
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
                title: "Qualified Project Leads",
                description: "Access to verified construction projects with complete specifications, budgets, and timelines."
              },
              {
                title: "Equipment Marketplace Access",
                description: "Connect with equipment owners, rental companies, and dealers for all your project needs."
              },
              {
                title: "Supplier Network",
                description: "Access verified suppliers for materials, parts, and specialized construction components."
              },
              {
                title: "Financing Partnerships",
                description: "Connect with financing partners for equipment purchases, working capital, and project funding."
              },
              {
                title: "Subcontractor Network",
                description: "Find qualified subcontractors and specialized service providers for your projects."
              },
              {
                title: "Project Management Tools",
                description: "Integrated tools for project tracking, equipment scheduling, and team coordination."
              },
              {
                title: "Insurance Marketplace",
                description: "Access competitive insurance options for equipment, liability, and project coverage."
              },
              {
                title: "Expert Consultation",
                description: "Connect with industry experts, engineers, and technical consultants when needed."
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
          <h2 className="text-3xl font-bold text-center mb-12">Contractor Partnership Tiers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Local Contractor</CardTitle>
                <CardDescription>Perfect for local construction companies</CardDescription>
                <div className="text-2xl font-bold text-primary mt-4">Contact Us</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Local project leads</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Equipment rental access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Local supplier network</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Basic project management tools</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <Badge className="w-fit mb-2">Most Popular</Badge>
                <CardTitle className="text-xl">Regional Contractor</CardTitle>
                <CardDescription>Ideal for regional construction companies</CardDescription>
                <div className="text-2xl font-bold text-primary mt-4">Contact Us</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Regional project leads</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Priority equipment access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Extended supplier network</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Advanced project tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Financing partnerships</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">National Contractor</CardTitle>
                <CardDescription>For large construction enterprises</CardDescription>
                <div className="text-2xl font-bold text-primary mt-4">Contact Us</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">National project access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Exclusive equipment deals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Premium supplier access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Custom project management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Dedicated account manager</span>
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
          <h2 className="text-3xl font-bold mb-6">Verified Network & Quality Assurance</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our platform ensures all partners are verified and meet industry standards for quality and reliability.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-sm text-muted-foreground">
                All contractors verified for proper licensing and insurance coverage
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Quality Standards</h3>
              <p className="text-sm text-muted-foreground">
                Rigorous quality standards and performance tracking for all partners
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Secure Transactions</h3>
              <p className="text-sm text-muted-foreground">
                Protected payment processing and contract management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Construction Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join successful contractors who are already expanding their business through our marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Download Contractor Package
            </Button>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
}