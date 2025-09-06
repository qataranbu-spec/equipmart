import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  FileText, 
  Calculator, 
  Users, 
  TrendingUp, 
  AlertCircle,
  CheckCircle2,
  DollarSign,
  ArrowLeft,
  Phone
} from "lucide-react"
import { Link } from "react-router-dom"
import Header from "@/components/layout/Header"

const sections = [
  {
    title: "Provider Setup",
    icon: Shield,
    items: [
      "Insurance company registration",
      "License verification process",
      "Product catalog setup",
      "Underwriting guidelines"
    ]
  },
  {
    title: "Policy Management",
    icon: FileText,
    items: [
      "Creating policy templates",
      "Premium calculation setup",
      "Coverage options configuration",
      "Terms and conditions"
    ]
  },
  {
    title: "Risk Assessment",
    icon: Calculator,
    items: [
      "Equipment valuation methods",
      "Risk factor analysis",
      "Claims history review",
      "Underwriting automation"
    ]
  },
  {
    title: "Customer Relations",
    icon: Users,
    items: [
      "Lead management system",
      "Quote generation process",
      "Policy renewal procedures",
      "Customer support protocols"
    ]
  },
  {
    title: "Claims Processing",
    icon: AlertCircle,
    items: [
      "Claims intake procedures",
      "Investigation workflows",
      "Settlement authorization",
      "Fraud detection systems"
    ]
  },
  {
    title: "Business Analytics",
    icon: TrendingUp,
    items: [
      "Portfolio performance metrics",
      "Loss ratio analysis",
      "Market opportunity tracking",
      "Competitive analysis"
    ]
  }
]

const coverageTypes = [
  "Equipment Physical Damage",
  "Theft and Vandalism",
  "Business Interruption",
  "Liability Coverage",
  "Environmental Protection",
  "Cyber Security"
]

export default function InsuranceProviderManual() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/manuals" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Manuals
            </Link>
          </Button>
          
          <h1 className="text-3xl font-bold mb-2">Insurance Provider Manual</h1>
          <p className="text-muted-foreground">
            Guide for insurance companies and agents offering equipment coverage
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {sections.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <section.icon className="h-5 w-5 mr-2 text-primary" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Coverage Types</CardTitle>
                <CardDescription>
                  Insurance products you can offer
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {coverageTypes.map((coverage, index) => (
                  <div key={index} className="flex items-center p-2 bg-muted rounded">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">{coverage}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-green-500" />
                  Pricing Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-muted rounded-lg">
                  <Badge className="mb-2" variant="secondary">Equipment Age</Badge>
                  <p className="text-sm">0-5 years: Standard rates, 5-10 years: +15%, 10+ years: +30%</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <Badge className="mb-2" variant="secondary">Usage Type</Badge>
                  <p className="text-sm">Light duty: Base rate, Heavy duty: +20%, Extreme conditions: +40%</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <Badge className="mb-2" variant="secondary">Location Risk</Badge>
                  <p className="text-sm">Low risk: -10%, Standard: Base rate, High risk: +25%</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                  Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Respond to quotes within 24 hours</p>
                <p>• Provide transparent pricing breakdown</p>
                <p>• Offer flexible payment options</p>
                <p>• Maintain competitive market rates</p>
                <p>• Process claims within 5 business days</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-blue-500" />
                  Customer Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• 24/7 claims reporting hotline</p>
                <p>• Online policy management portal</p>
                <p>• Mobile app for quick access</p>
                <p>• Dedicated account managers</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Ready to Provide Insurance?</h3>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link to="/insurance/provider/register">Join as Provider</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Get Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}