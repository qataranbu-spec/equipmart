import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { 
  DollarSign, 
  FileCheck, 
  TrendingUp, 
  Users, 
  CreditCard, 
  BarChart3,
  Shield,
  Calculator,
  ArrowLeft,
  Percent
} from "lucide-react"
import { Link } from "react-router-dom"
import Header from "@/components/layout/Header"

const sections = [
  {
    title: "Lender Setup",
    icon: DollarSign,
    items: [
      "Financial institution registration",
      "Licensing and compliance setup",
      "Lending product configuration",
      "Risk management framework"
    ]
  },
  {
    title: "Loan Products",
    icon: CreditCard,
    items: [
      "Equipment financing options",
      "Lease program setup",
      "Rental purchase agreements",
      "Working capital solutions"
    ]
  },
  {
    title: "Credit Assessment",
    icon: FileCheck,
    items: [
      "Application review process",
      "Credit scoring models",
      "Collateral evaluation",
      "Risk rating systems"
    ]
  },
  {
    title: "Portfolio Management",
    icon: BarChart3,
    items: [
      "Loan portfolio tracking",
      "Performance monitoring",
      "Default management",
      "Collection procedures"
    ]
  },
  {
    title: "Customer Relations",
    icon: Users,
    items: [
      "Application processing",
      "Customer onboarding",
      "Account management",
      "Support services"
    ]
  },
  {
    title: "Analytics & Reporting",
    icon: TrendingUp,
    items: [
      "Financial performance metrics",
      "Risk analysis reports",
      "Market trend analysis",
      "Regulatory reporting"
    ]
  }
]

const loanTypes = [
  "Equipment Purchase Financing",
  "Operating Lease Programs",
  "Capital Lease Solutions",
  "Rental Purchase Options",
  "Working Capital Lines",
  "Bridge Financing"
]

export default function FinancierManual() {
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
          
          <h1 className="text-3xl font-bold mb-2">Financier Manual</h1>
          <p className="text-muted-foreground">
            Manual for lending institutions and equipment financing companies
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
                <CardTitle>Financing Products</CardTitle>
                <CardDescription>
                  Types of financing you can offer
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {loanTypes.map((loan, index) => (
                  <div key={index} className="flex items-center p-2 bg-muted rounded">
                    <CreditCard className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">{loan}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 mr-2 text-blue-500" />
                  Rate Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-muted rounded-lg">
                  <Badge className="mb-2" variant="secondary">New Equipment</Badge>
                  <p className="text-sm">Prime + 2-4%, 3-7 year terms, up to 90% financing</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <Badge className="mb-2" variant="secondary">Used Equipment</Badge>
                  <p className="text-sm">Prime + 3-6%, 2-5 year terms, up to 80% financing</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <Badge className="mb-2" variant="secondary">Lease Programs</Badge>
                  <p className="text-sm">Competitive lease rates, flexible end-of-term options</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Percent className="h-5 w-5 mr-2 text-green-500" />
                  Approval Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Credit score minimum: 650+</p>
                <p>• Debt-to-income ratio: &lt;40%</p>
                <p>• Business operating history: 2+ years</p>
                <p>• Equipment age limit: 10 years</p>
                <p>• Minimum loan amount: $25,000</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-red-500" />
                  Risk Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Regular portfolio stress testing</p>
                <p>• Diversification across industries</p>
                <p>• Equipment residual value tracking</p>
                <p>• Early warning system monitoring</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Ready to Provide Financing?</h3>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link to="/financing/company/register">Join as Financier</Link>
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