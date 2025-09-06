import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { 
  Wrench, 
  Calendar, 
  MapPin, 
  FileText, 
  Clock, 
  Award,
  Shield,
  Star,
  ArrowLeft,
  Phone
} from "lucide-react"
import { Link } from "react-router-dom"
import Header from "@/components/layout/Header"

const sections = [
  {
    title: "Service Setup",
    icon: Wrench,
    items: [
      "Creating service provider profile",
      "Listing your specializations",
      "Setting service areas and rates",
      "Uploading certifications"
    ]
  },
  {
    title: "Job Management",
    icon: Calendar,
    items: [
      "Accepting service requests",
      "Scheduling appointments",
      "Managing work orders",
      "Emergency service protocols"
    ]
  },
  {
    title: "Field Operations",
    icon: MapPin,
    items: [
      "On-site service procedures",
      "Mobile app usage",
      "Parts ordering system",
      "Safety compliance"
    ]
  },
  {
    title: "Documentation",
    icon: FileText,
    items: [
      "Service report creation",
      "Photo documentation",
      "Parts usage tracking",
      "Customer sign-offs"
    ]
  },
  {
    title: "Quality Assurance",
    icon: Award,
    items: [
      "Quality control checklists",
      "Customer satisfaction surveys",
      "Follow-up procedures",
      "Warranty management"
    ]
  },
  {
    title: "Business Growth",
    icon: Star,
    items: [
      "Building client relationships",
      "Expanding service offerings",
      "Performance analytics",
      "Certification programs"
    ]
  }
]

const serviceTypes = [
  "Preventive Maintenance",
  "Emergency Repairs",
  "Equipment Inspections",
  "Part Replacements",
  "Software Updates",
  "Training Services"
]

export default function ServiceProviderManual() {
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
          
          <h1 className="text-3xl font-bold mb-2">Service Provider Manual</h1>
          <p className="text-muted-foreground">
            Step-by-step guide for maintenance, repair, and service professionals
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
                <CardTitle>Service Categories</CardTitle>
                <CardDescription>
                  Types of services you can offer
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {serviceTypes.map((service, index) => (
                  <div key={index} className="flex items-center p-2 bg-muted rounded">
                    <Wrench className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-500" />
                  Response Standards
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-muted rounded-lg">
                  <Badge className="mb-2" variant="secondary">Emergency</Badge>
                  <p className="text-sm">Respond within 2 hours, arrive within 4 hours</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <Badge className="mb-2" variant="secondary">Urgent</Badge>
                  <p className="text-sm">Respond within 4 hours, schedule within 24 hours</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <Badge className="mb-2" variant="secondary">Standard</Badge>
                  <p className="text-sm">Respond within 8 hours, schedule within 3 days</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-green-500" />
                  Communication Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Always confirm appointments 24 hours ahead</p>
                <p>• Send arrival notifications to customers</p>
                <p>• Explain work performed in simple terms</p>
                <p>• Provide clear cost breakdowns</p>
                <p>• Follow up after service completion</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-red-500" />
                  Safety Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Valid insurance coverage required</p>
                <p>• Safety equipment must be worn</p>
                <p>• Lockout/tagout procedures followed</p>
                <p>• Incident reporting mandatory</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Ready to Provide Services?</h3>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link to="/services/provider/register">Join as Provider</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Technical Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}