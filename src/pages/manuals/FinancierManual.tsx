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
    title: "Financing Account Management (CRUD)",
    icon: DollarSign,
    items: [
      "CREATE: Register financing institution → Set up loan products → Create underwriting criteria → Build rate tables",
      "READ: View application pipeline → Monitor loan portfolios → Check performance metrics → Access risk reports",
      "UPDATE: Modify loan terms → Update interest rates → Change approval criteria → Adjust risk parameters",
      "DELETE: Discontinue products → Archive old applications → Remove expired offers → Clear outdated criteria"
    ]
  },
  {
    title: "Loan Product Configuration",
    icon: CreditCard,
    items: [
      "CREATE: Design loan products → Set eligibility criteria → Create term structures → Build rate matrices",
      "READ: View product performance → Monitor market adoption → Check competitor rates → Access product analytics",
      "UPDATE: Modify product terms → Update eligibility rules → Change rate structures → Adjust loan limits",
      "DELETE: Retire old products → Archive historical data → Remove discontinued terms → Clear obsolete criteria"
    ]
  },
  {
    title: "Application & Credit Assessment",
    icon: FileCheck,
    items: [
      "CREATE: Process applications → Generate credit reports → Create risk assessments → Build approval workflows",
      "READ: Review credit histories → Monitor application status → Check verification documents → Access bureau reports",
      "UPDATE: Modify assessment criteria → Update credit scores → Change approval status → Adjust risk ratings",
      "DELETE: Reject applications → Archive completed assessments → Clear temporary data → Remove withdrawn applications"
    ]
  },
  {
    title: "Portfolio Management & Analytics",
    icon: BarChart3,
    items: [
      "CREATE: Build performance dashboards → Generate portfolio reports → Create profitability analysis → Set KPIs",
      "READ: View loan performance → Monitor collection rates → Check yield metrics → Access market analysis",
      "UPDATE: Modify reporting parameters → Update dashboard metrics → Change performance targets → Adjust analytics",
      "DELETE: Archive old reports → Clear cached analytics → Remove outdated metrics → Purge performance history"
    ]
  },
  {
    title: "Customer Relationship Management",
    icon: Users,
    items: [
      "CREATE: Build customer profiles → Start loan applications → Create communication logs → Set follow-up schedules",
      "READ: View customer history → Check payment patterns → Monitor account health → Access customer feedback",
      "UPDATE: Modify customer details → Update loan terms → Change communication preferences → Edit account notes",
      "DELETE: Archive closed accounts → Remove inactive profiles → Clear old communications → Purge customer data"
    ]
  },
  {
    title: "Risk & Compliance Management",
    icon: TrendingUp,
    items: [
      "CREATE: Set risk parameters → Create monitoring rules → Build compliance frameworks → Generate audit reports",
      "READ: Monitor portfolio health → Check delinquency rates → Review compliance status → Access regulatory updates",
      "UPDATE: Modify risk thresholds → Update compliance procedures → Change monitoring criteria → Adjust risk models",
      "DELETE: Archive compliance records → Clear resolved issues → Remove old procedures → Purge audit history"
    ]
  }
]

const businessProcesses = [
  {
    title: "Loan Application Processing Workflow",
    steps: [
      "1. Application Intake → Receive financing request → Verify applicant identity → Collect required documents",
      "2. Credit Assessment → Run credit bureau checks → Analyze financial statements → Evaluate payment history",
      "3. Risk Evaluation → Assess collateral value → Calculate debt-to-income ratios → Review industry risks",
      "4. Underwriting Decision → Apply approval criteria → Calculate loan terms → Determine interest rates",
      "5. Approval Process → Generate loan agreement → Set payment schedules → Coordinate fund disbursement",
      "6. Post-Approval Management → Monitor payment performance → Manage collections → Provide customer service"
    ]
  },
  {
    title: "Portfolio Risk Management Process",
    steps: [
      "1. Risk Monitoring → Track payment patterns → Monitor market conditions → Identify early warning signs",
      "2. Risk Assessment → Evaluate portfolio health → Calculate risk metrics → Stress test scenarios",
      "3. Mitigation Strategy → Develop action plans → Adjust lending criteria → Implement controls",
      "4. Collection Management → Contact delinquent accounts → Negotiate payment plans → Initiate recovery procedures",
      "5. Loss Mitigation → Evaluate workout options → Coordinate asset recovery → Document losses",
      "6. Regulatory Reporting → Prepare compliance reports → Submit regulatory filings → Maintain audit trails"
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
                <CardTitle>Business Process Workflows</CardTitle>
                <CardDescription>
                  Core financing and risk management processes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {businessProcesses.map((process, index) => (
                  <div key={index} className="p-3 bg-muted rounded-lg">
                    <Badge className="mb-3">{process.title}</Badge>
                    <div className="space-y-1">
                      {process.steps.map((step, stepIndex) => (
                        <p key={stepIndex} className="text-xs leading-relaxed">{step}</p>
                      ))}
                    </div>
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