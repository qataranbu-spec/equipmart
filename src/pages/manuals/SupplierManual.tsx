import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { 
  Upload, 
  DollarSign, 
  Package, 
  BarChart, 
  Users, 
  Truck,
  Shield,
  Star,
  ArrowLeft,
  Camera
} from "lucide-react"
import { Link } from "react-router-dom"
import Header from "@/components/layout/Header"

const sections = [
  {
    title: "Supplier Account Management (CRUD)",
    icon: Upload,
    items: [
      "CREATE: Register supplier account → Upload business documents → Set up payment processing → Complete profile",
      "READ: Access seller dashboard → View account metrics → Check verification status → Monitor performance",
      "UPDATE: Modify business info → Update payment details → Change notification preferences → Edit profile",
      "DELETE: Deactivate listings → Remove payment methods → Archive old data → Close account permanently"
    ]
  },
  {
    title: "Equipment Inventory Management",
    icon: Package,
    items: [
      "CREATE: Add new listings → Upload photos → Set pricing → Create detailed descriptions → Publish equipment",
      "READ: View all listings → Check availability → Monitor views/inquiries → Access listing analytics",
      "UPDATE: Edit descriptions → Update pricing → Modify photos → Change availability → Refresh listings",
      "DELETE: Remove sold equipment → Archive old listings → Delete drafts → Bulk remove expired items"
    ]
  },
  {
    title: "Order & Sales Processing",
    icon: DollarSign,
    items: [
      "CREATE: Generate quotes → Create sales contracts → Process orders → Initialize delivery schedules",
      "READ: View pending orders → Check payment status → Monitor sales pipeline → Access order history",
      "UPDATE: Modify quotes → Change delivery dates → Update order status → Adjust pricing → Edit contracts",
      "DELETE: Cancel rejected orders → Remove expired quotes → Archive completed sales → Clear old data"
    ]
  },
  {
    title: "Customer Relationship Management",
    icon: Users,
    items: [
      "CREATE: Build customer profiles → Start conversations → Schedule meetings → Create follow-up tasks",
      "READ: View customer history → Check communication logs → Monitor satisfaction scores → Access feedback",
      "UPDATE: Modify customer details → Update preferences → Change communication settings → Edit notes",
      "DELETE: Archive inactive customers → Remove blocked contacts → Clear old communications → End relationships"
    ]
  },
  {
    title: "Business Analytics & Reporting",
    icon: BarChart,
    items: [
      "CREATE: Generate performance reports → Build custom dashboards → Create market analysis → Set KPI targets",
      "READ: View sales metrics → Check conversion rates → Monitor market trends → Access competitor data",
      "UPDATE: Modify report parameters → Change dashboard layouts → Update KPI settings → Refresh data views",
      "DELETE: Archive old reports → Clear cached data → Remove outdated metrics → Reset analytics settings"
    ]
  },
  {
    title: "Logistics & Fulfillment Operations",
    icon: Truck,
    items: [
      "CREATE: Set up shipping profiles → Create delivery schedules → Generate shipping labels → Book transporters",
      "READ: Track shipments → Monitor delivery status → Check logistics costs → View delivery performance",
      "UPDATE: Modify shipping details → Change delivery dates → Update tracking info → Adjust logistics",
      "DELETE: Cancel shipments → Remove old tracking → Archive delivery records → Clear logistics history"
    ]
  }
]

const businessProcesses = [
  {
    title: "Equipment Listing Workflow",
    steps: [
      "1. Inventory Assessment → Inspect equipment → Document condition → Gather specifications",
      "2. Market Research → Analyze comparable sales → Set competitive pricing → Check demand trends",
      "3. Content Creation → Professional photography → Write compelling descriptions → Highlight key features",
      "4. Listing Optimization → SEO-friendly titles → Proper categorization → Competitive positioning",
      "5. Publication → Publish listing → Monitor performance → Respond to inquiries promptly",
      "6. Ongoing Management → Update pricing → Refresh photos → Promote featured listings"
    ]
  },
  {
    title: "Sales Order Processing",
    steps: [
      "1. Inquiry Management → Respond within 2 hours → Qualify buyer requirements → Provide detailed quotes",
      "2. Negotiation Phase → Discuss terms → Address concerns → Finalize pricing → Confirm specifications",
      "3. Contract Generation → Create sales agreement → Define payment terms → Set delivery schedule",
      "4. Payment Processing → Verify payment method → Process deposits → Monitor payment status",
      "5. Delivery Coordination → Arrange logistics → Schedule pickup → Coordinate with buyer",
      "6. Post-Sale Support → Confirm delivery → Handle documentation → Provide ongoing support"
    ]
  }
]

const quickActions = [
  { label: "List New Equipment", path: "/marketplace/sell", color: "bg-blue-500" },
  { label: "Manage Inventory", path: "/supplier/inventory", color: "bg-green-500" },
  { label: "View Analytics", path: "/supplier/analytics", color: "bg-purple-500" },
  { label: "Customer Messages", path: "/messages", color: "bg-orange-500" }
]

export default function SupplierManual() {
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
          
          <h1 className="text-3xl font-bold mb-2">Supplier's Manual</h1>
          <p className="text-muted-foreground">
            Comprehensive guide for equipment suppliers, dealers, and manufacturers
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
                  Access key supplier functions
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
                  <Camera className="h-5 w-5 mr-2 text-blue-500" />
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
                  <Star className="h-5 w-5 mr-2 text-yellow-500" />
                  Success Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Response time under 2 hours</p>
                <p>• 4.5+ star average rating</p>
                <p>• 95%+ accurate descriptions</p>
                <p>• On-time delivery rate 98%+</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-green-500" />
                  Trust & Safety
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Maintain business verification status</p>
                <p>• Respond promptly to buyer inquiries</p>
                <p>• Provide accurate equipment descriptions</p>
                <p>• Honor agreed pricing and terms</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Ready to Start Selling?</h3>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link to="/marketplace/sell">List Equipment</Link>
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