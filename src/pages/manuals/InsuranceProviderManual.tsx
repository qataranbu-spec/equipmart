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
    title: "Insurance Provider Setup (CRUD Operations)",
    icon: Shield,
    items: [
      "CREATE: Register insurance company → Upload licenses → Set up policy products → Create underwriting rules",
      "READ: View provider dashboard → Monitor policy portfolios → Check regulatory compliance → Access claims data",
      "UPDATE: Modify policy terms → Update coverage limits → Change premium rates → Adjust underwriting criteria",
      "DELETE: Discontinue policies → Archive expired coverage → Remove old products → Clear outdated underwriting rules"
    ]
  },
  {
    title: "Policy & Coverage Management",
    icon: FileText,
    items: [
      "CREATE: Design policy templates → Set coverage options → Create premium structures → Build policy workflows",
      "READ: View policy performance → Monitor coverage utilization → Check market penetration → Access policy analytics",
      "UPDATE: Modify coverage terms → Update policy conditions → Change deductibles → Adjust premium calculations",
      "DELETE: Retire old policies → Archive historical coverage → Remove discontinued products → Clear obsolete templates"
    ]
  },
  {
    title: "Risk Assessment & Underwriting",
    icon: Calculator,
    items: [
      "CREATE: Build risk models → Create assessment criteria → Generate underwriting guidelines → Set evaluation parameters",
      "READ: Review risk profiles → Monitor loss ratios → Check equipment valuations → Access underwriting reports",
      "UPDATE: Modify risk criteria → Update assessment models → Change underwriting rules → Adjust evaluation methods",
      "DELETE: Remove outdated models → Archive old assessments → Clear obsolete criteria → Purge evaluation data"
    ]
  },
  {
    title: "Customer & Quote Management",
    icon: Users,
    items: [
      "CREATE: Generate customer quotes → Build client profiles → Create policy proposals → Set renewal schedules",
      "READ: View customer history → Monitor policy status → Check payment records → Access customer communications",
      "UPDATE: Modify quote details → Update customer information → Change policy terms → Adjust renewal dates",
      "DELETE: Cancel expired quotes → Archive closed policies → Remove inactive customers → Clear old communications"
    ]
  },
  {
    title: "Claims Processing & Management",
    icon: AlertCircle,
    items: [
      "CREATE: Register new claims → Generate investigation workflows → Create settlement procedures → Build fraud detection",
      "READ: View claims status → Monitor investigation progress → Check settlement amounts → Access claims analytics",
      "UPDATE: Modify claim status → Update investigation findings → Change settlement amounts → Adjust processing timelines",
      "DELETE: Close settled claims → Archive claim records → Remove fraudulent claims → Clear investigation data"
    ]
  },
  {
    title: "Business Analytics & Performance",
    icon: TrendingUp,
    items: [
      "CREATE: Build performance dashboards → Generate profitability reports → Create market analysis → Set performance KPIs",
      "READ: View loss ratios → Monitor premium income → Check market share → Access competitive analysis",
      "UPDATE: Modify dashboard metrics → Update performance targets → Change analysis parameters → Adjust KPI definitions",
      "DELETE: Archive old reports → Clear cached analytics → Remove outdated metrics → Purge performance history"
    ]
  }
]

const businessProcesses = [
  {
    title: "Policy Underwriting Workflow",
    steps: [
      "1. Application Intake → Receive insurance request → Collect equipment details → Gather risk information",
      "2. Risk Assessment → Evaluate equipment value → Analyze usage patterns → Review loss history → Check location risks",
      "3. Underwriting Decision → Apply risk criteria → Calculate premium rates → Determine coverage limits → Set policy terms",
      "4. Quote Generation → Create policy proposal → Define payment terms → Set effective dates → Present to customer",
      "5. Policy Issuance → Process application → Collect premium → Generate policy documents → Activate coverage",
      "6. Policy Management → Monitor renewals → Process endorsements → Handle policy changes → Manage cancellations"
    ]
  },
  {
    title: "Claims Processing Workflow",
    steps: [
      "1. Claim Reporting → Receive loss notification → Verify policy coverage → Assign claim number → Notify stakeholders",
      "2. Initial Investigation → Gather incident details → Collect documentation → Schedule inspections → Estimate damages",
      "3. Coverage Analysis → Review policy terms → Determine coverage applicability → Calculate deductibles → Identify exclusions",
      "4. Loss Assessment → Conduct field investigation → Obtain repair estimates → Verify ownership → Document findings",
      "5. Settlement Decision → Calculate settlement amount → Negotiate with claimant → Process payment → Close claim file",
      "6. Post-Settlement → Update claim records → Analyze loss patterns → Adjust underwriting if needed → Report to regulators"
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
                  Business Process Workflows
                </CardTitle>
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