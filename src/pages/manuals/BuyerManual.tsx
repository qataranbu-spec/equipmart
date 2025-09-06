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
    title: "Getting Started",
    icon: Search,
    items: [
      "Creating your buyer account",
      "Setting up your company profile",
      "Verifying your business credentials",
      "Understanding the dashboard"
    ]
  },
  {
    title: "Finding Equipment",
    icon: Filter,
    items: [
      "Using search and filters effectively",
      "Understanding equipment categories",
      "Comparing specifications",
      "Saving favorites and watchlists"
    ]
  },
  {
    title: "Making Purchases",
    icon: ShoppingCart,
    items: [
      "Direct purchase process",
      "Requesting quotes",
      "Negotiating prices",
      "Bulk order procedures"
    ]
  },
  {
    title: "Communication",
    icon: MessageSquare,
    items: [
      "Contacting suppliers",
      "Using the messaging system",
      "Scheduling inspections",
      "Video call consultations"
    ]
  },
  {
    title: "Documentation",
    icon: FileText,
    items: [
      "Managing purchase orders",
      "Tracking delivery status",
      "Accessing warranties",
      "Downloading certificates"
    ]
  },
  {
    title: "Payment & Financing",
    icon: CreditCard,
    items: [
      "Payment methods accepted",
      "Financing options available",
      "Lease-to-own programs",
      "Invoice management"
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
                  Pro Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-muted rounded-lg">
                  <Badge className="mb-2">Tip 1</Badge>
                  <p className="text-sm">Use advanced filters to narrow down equipment by age, hours, and location for better results.</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <Badge className="mb-2">Tip 2</Badge>
                  <p className="text-sm">Set up price alerts for equipment you're interested in to get notified of price drops.</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <Badge className="mb-2">Tip 3</Badge>
                  <p className="text-sm">Always request inspection reports and maintenance history before making large purchases.</p>
                </div>
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