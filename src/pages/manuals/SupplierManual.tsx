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
    title: "Getting Started",
    icon: Upload,
    items: [
      "Creating your supplier account",
      "Business verification process",
      "Setting up payment methods",
      "Understanding seller dashboard"
    ]
  },
  {
    title: "Listing Equipment",
    icon: Package,
    items: [
      "Creating compelling listings",
      "Photography best practices",
      "Pricing strategies",
      "Managing inventory"
    ]
  },
  {
    title: "Sales Management",
    icon: DollarSign,
    items: [
      "Processing orders",
      "Managing negotiations",
      "Handling bulk inquiries",
      "Auction participation"
    ]
  },
  {
    title: "Customer Relations",
    icon: Users,
    items: [
      "Responding to buyer inquiries",
      "Providing technical support",
      "Managing reviews and ratings",
      "Building long-term relationships"
    ]
  },
  {
    title: "Analytics & Reporting",
    icon: BarChart,
    items: [
      "Sales performance metrics",
      "Market trend analysis",
      "Inventory turnover reports",
      "Customer insights"
    ]
  },
  {
    title: "Logistics & Delivery",
    icon: Truck,
    items: [
      "Shipping arrangements",
      "Delivery tracking",
      "International shipping",
      "Insurance requirements"
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
                  Listing Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-muted rounded-lg">
                  <Badge className="mb-2">Photos</Badge>
                  <p className="text-sm">Include 8-12 high-quality photos showing all angles, including any damage or wear.</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <Badge className="mb-2">Description</Badge>
                  <p className="text-sm">Provide detailed specifications, maintenance history, and operating hours.</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <Badge className="mb-2">Pricing</Badge>
                  <p className="text-sm">Research market prices and consider condition, age, and location factors.</p>
                </div>
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