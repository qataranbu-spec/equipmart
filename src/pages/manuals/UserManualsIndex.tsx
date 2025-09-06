import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  User, 
  Truck, 
  Wrench, 
  Shield, 
  DollarSign, 
  Settings, 
  Users, 
  HardHat,
  BookOpen
} from "lucide-react"
import Header from "@/components/layout/Header"

const userManuals = [
  {
    title: "Buyer's Manual",
    description: "Complete guide for equipment buyers, procurement managers, and purchasing teams",
    icon: User,
    path: "/manuals/buyer",
    color: "bg-blue-500"
  },
  {
    title: "Supplier's Manual",
    description: "Comprehensive guide for equipment suppliers, dealers, and manufacturers",
    icon: Truck,
    path: "/manuals/supplier",
    color: "bg-green-500"
  },
  {
    title: "Service Provider's Manual",
    description: "Step-by-step guide for maintenance, repair, and service professionals",
    icon: Wrench,
    path: "/manuals/service-provider",
    color: "bg-orange-500"
  },
  {
    title: "Insurance Provider's Manual",
    description: "Guide for insurance companies and agents offering equipment coverage",
    icon: Shield,
    path: "/manuals/insurance-provider",
    color: "bg-purple-500"
  },
  {
    title: "Financier's Manual",
    description: "Manual for lending institutions and equipment financing companies",
    icon: DollarSign,
    path: "/manuals/financier",
    color: "bg-emerald-500"
  },
  {
    title: "Contractor's Manual",
    description: "Guide for construction contractors and project managers",
    icon: HardHat,
    path: "/manuals/contractor",
    color: "bg-amber-500"
  },
  {
    title: "Expert's Manual",
    description: "Manual for industry experts, consultants, and technical advisors",
    icon: Users,
    path: "/manuals/expert",
    color: "bg-indigo-500"
  },
  {
    title: "Admin Manual",
    description: "Administrative guide for platform managers and system administrators",
    icon: Settings,
    path: "/manuals/admin",
    color: "bg-red-500"
  }
]

export default function UserManualsIndex() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-12 w-12 text-primary mr-4" />
            <h1 className="text-4xl font-bold">User Manuals</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive guides to help you make the most of EQP+MART. 
            Choose your role to access tailored instructions and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {userManuals.map((manual) => (
            <Card key={manual.path} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${manual.color}`}>
                    <manual.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{manual.title}</CardTitle>
                </div>
                <CardDescription className="text-sm">
                  {manual.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link to={manual.path}>
                    View Manual
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
            <CardDescription>
              Can't find what you're looking for? Our support team is here to help.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Button asChild>
              <Link to="/contact">Contact Support</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/request-demo">Request Demo</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}