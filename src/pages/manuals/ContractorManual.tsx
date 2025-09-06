import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { 
  HardHat, 
  MapPin, 
  Calendar, 
  Truck, 
  Users, 
  FileText,
  Shield,
  Clock,
  ArrowLeft,
  CheckCircle2
} from "lucide-react"
import { Link } from "react-router-dom"
import Header from "@/components/layout/Header"

const sections = [
  {
    title: "Project Management",
    icon: HardHat,
    items: [
      "Project planning and scheduling",
      "Equipment requirement planning",
      "Resource allocation strategies",
      "Timeline management"
    ]
  },
  {
    title: "Equipment Procurement",
    icon: Truck,
    items: [
      "Rental vs purchase decisions",
      "Equipment specification matching",
      "Vendor selection criteria",
      "Cost optimization strategies"
    ]
  },
  {
    title: "Site Coordination",
    icon: MapPin,
    items: [
      "Equipment delivery scheduling",
      "Site preparation requirements",
      "Logistics coordination",
      "Multi-site management"
    ]
  },
  {
    title: "Team Management",
    icon: Users,
    items: [
      "Operator certification tracking",
      "Training program management",
      "Performance monitoring",
      "Safety compliance oversight"
    ]
  },
  {
    title: "Documentation",
    icon: FileText,
    items: [
      "Equipment inspection records",
      "Maintenance scheduling",
      "Compliance documentation",
      "Project reporting"
    ]
  },
  {
    title: "Safety & Compliance",
    icon: Shield,
    items: [
      "Safety protocol implementation",
      "Regular safety audits",
      "Incident reporting procedures",
      "Regulatory compliance"
    ]
  }
]

const projectPhases = [
  "Planning & Design",
  "Site Preparation", 
  "Foundation Work",
  "Structural Construction",
  "Finishing Work",
  "Project Closeout"
]

export default function ContractorManual() {
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
          
          <h1 className="text-3xl font-bold mb-2">Contractor Manual</h1>
          <p className="text-muted-foreground">
            Guide for construction contractors and project managers
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
                <CardTitle>Project Phases</CardTitle>
                <CardDescription>
                  Typical construction project stages
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {projectPhases.map((phase, index) => (
                  <div key={index} className="flex items-center p-2 bg-muted rounded">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">{phase}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-500" />
                  Equipment Planning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-muted rounded-lg">
                  <Badge className="mb-2" variant="secondary">Lead Time</Badge>
                  <p className="text-sm">Book specialized equipment 2-4 weeks in advance</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <Badge className="mb-2" variant="secondary">Backup Plan</Badge>
                  <p className="text-sm">Always have alternative equipment options identified</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <Badge className="mb-2" variant="secondary">Utilization</Badge>
                  <p className="text-sm">Target 80%+ utilization for owned equipment</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-green-500" />
                  Scheduling Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Coordinate deliveries with site readiness</p>
                <p>• Schedule maintenance during off-hours</p>
                <p>• Plan for weather-related delays</p>
                <p>• Maintain equipment buffer for critical path items</p>
                <p>• Update schedules weekly with all stakeholders</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-red-500" />
                  Safety Protocols
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Daily safety briefings required</p>
                <p>• PPE compliance monitoring</p>
                <p>• Equipment inspection before use</p>
                <p>• Incident reporting within 24 hours</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Ready to Optimize Your Projects?</h3>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link to="/contractor/portal">Access Portal</Link>
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