import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  Filter, 
  ShoppingCart, 
  MessageSquare, 
  FileText, 
  CreditCard,
  Shield,
  Star,
  ArrowLeft
} from "lucide-react"
import { Link } from "react-router-dom"
import Header from "@/components/layout/Header"

const sections = [
  {
    title: "Account Management (CRUD Operations)",
    icon: Search,
    items: [
      "CREATE: Register new buyer account → Complete profile → Verify business credentials → Set preferences",
      "READ: Access dashboard → View account details → Check verification status → Monitor activity",
      "UPDATE: Edit company profile → Update contact information → Modify preferences → Change payment methods",
      "DELETE: Deactivate account → Export data → Cancel subscriptions → Remove stored payment info"
    ]
  },
  {
    title: "Equipment Search & Management",
    icon: Filter,
    items: [
      "CREATE: Save custom searches → Build watchlists → Set price alerts → Create comparison lists",
      "READ: Browse categories → Filter by specifications → View detailed listings → Check availability",
      "UPDATE: Modify search criteria → Edit watchlist items → Update alert preferences → Refine filters",
      "DELETE: Remove watchlist items → Clear search history → Delete saved searches → Remove alerts"
    ]
  },
  {
    title: "Purchase Order Processing",
    icon: ShoppingCart,
    items: [
      "CREATE: Generate RFQ → Submit purchase orders → Create bulk orders → Initialize lease applications",
      "READ: View order status → Track shipments → Access order history → Monitor approvals",
      "UPDATE: Modify pending orders → Change delivery details → Update quantities → Adjust specifications",
      "DELETE: Cancel pending orders → Return equipment → Process refunds → Archive completed orders"
    ]
  },
  {
    title: "Supplier Communication Workflow",
    icon: MessageSquare,
    items: [
      "CREATE: Initiate conversations → Schedule inspections → Book video calls → Send inquiries",
      "READ: View message history → Check response times → Access contact details → Monitor communications",
      "UPDATE: Modify appointment times → Update inquiry details → Change communication preferences",
      "DELETE: Archive conversations → Block suppliers → Clear message history → End subscriptions"
    ]
  },
  {
    title: "Document & Contract Management",
    icon: FileText,
    items: [
      "CREATE: Generate contracts → Create inspection reports → Build compliance docs → Submit warranties",
      "READ: Access all documents → View contract terms → Check warranty status → Download certificates",
      "UPDATE: Modify contract terms → Update delivery addresses → Change warranty details → Edit documents",
      "DELETE: Archive old contracts → Remove expired warranties → Delete drafts → Clear document cache"
    ]
  },
  {
    title: "Financial Operations & Reporting",
    icon: CreditCard,
    items: [
      "CREATE: Set up payment methods → Apply for financing → Create expense reports → Generate invoices",
      "READ: View payment history → Check financing status → Access financial reports → Monitor budgets",
      "UPDATE: Modify payment settings → Change financing terms → Update billing info → Adjust budgets",
      "DELETE: Remove payment methods → Cancel financing → Archive old reports → Clear payment history"
    ]
  }
]

const businessProcesses = [
  {
    title: "Equipment Procurement Workflow",
    steps: [
      "1. Define Requirements → Specify equipment type, capacity, features, budget constraints",
      "2. Market Research → Search platform → Compare suppliers → Check reviews and ratings",
      "3. RFQ Process → Send inquiries → Collect quotes → Negotiate terms → Evaluate proposals",
      "4. Due Diligence → Schedule inspections → Verify documentation → Check maintenance history",
      "5. Purchase Decision → Final negotiations → Contract signing → Payment processing",
      "6. Delivery & Acceptance → Coordinate logistics → Inspect on delivery → Complete acceptance testing",
      "7. Post-Purchase → Warranty registration → Service setup → Performance monitoring"
    ]
  },
  {
    title: "Supplier Evaluation Process",
    steps: [
      "1. Initial Screening → Check business verification → Review ratings → Assess response time",
      "2. Technical Evaluation → Equipment condition → Specifications match → Age and hours",
      "3. Financial Assessment → Pricing comparison → Payment terms → Warranty coverage",
      "4. Risk Analysis → Location factors → Delivery capabilities → Support services",
      "5. Reference Checks → Previous buyer feedback → Industry reputation → Complaint history",
      "6. Final Selection → Score evaluation → Contract negotiation → Partnership agreement"
    ]
  }
]

const quickActions = [
  { label: "Browse Equipment", path: "/marketplace", color: "bg-blue-500" },
  { label: "Start Auction Bid", path: "/auctions", color: "bg-green-500" },
  { label: "Request Quote", path: "/procurement/rfq", color: "bg-purple-500" },
  { label: "Find Services", path: "/services", color: "bg-orange-500" }
]

export default function BuyerManual() {
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
          
          <h1 className="text-3xl font-bold mb-2">Buyer's Manual</h1>
          <p className="text-muted-foreground">
            Complete guide for equipment buyers, procurement managers, and purchasing teams
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
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Jump straight to key buyer activities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action, index) => (
                  <Button key={index} asChild className="w-full justify-start">
                    <Link to={action.path}>
                      {action.label}
                    </Link>
                  </Button>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-500" />
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
                  <Shield className="h-5 w-5 mr-2 text-green-500" />
                  Safety & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Verify supplier credentials before transacting</p>
                <p>• Use secure payment methods provided by the platform</p>
                <p>• Report suspicious activities immediately</p>
                <p>• Always inspect equipment before final payment</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Need More Help?</h3>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link to="/contact">Contact Support</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/request-demo">Schedule Training</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}