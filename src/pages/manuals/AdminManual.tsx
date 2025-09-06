import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { 
  Settings, 
  Users, 
  BarChart3, 
  Shield, 
  Database, 
  AlertTriangle,
  Key,
  Monitor,
  ArrowLeft,
  FileText
} from "lucide-react"
import { Link } from "react-router-dom"
import Header from "@/components/layout/Header"

const sections = [
  {
    title: "Platform Management",
    icon: Settings,
    items: [
      "Admin dashboard overview",
      "System configuration settings",
      "Feature flags and toggles",
      "Platform announcements"
    ]
  },
  {
    title: "User Management",
    icon: Users,
    items: [
      "User account administration",
      "Role and permission management",
      "Account verification process",
      "Dispute resolution"
    ]
  },
  {
    title: "Content Moderation",
    icon: Shield,
    items: [
      "Listing approval workflows",
      "Content quality standards",
      "Fraud detection systems",
      "Reporting mechanisms"
    ]
  },
  {
    title: "Analytics & Monitoring",
    icon: BarChart3,
    items: [
      "Platform performance metrics",
      "User behavior analytics",
      "Financial reporting",
      "System health monitoring"
    ]
  },
  {
    title: "Security Administration",
    icon: Key,
    items: [
      "Access control management",
      "Security audit procedures",
      "Incident response protocols",
      "Data protection compliance"
    ]
  },
  {
    title: "System Operations",
    icon: Database,
    items: [
      "Database maintenance",
      "Backup and recovery",
      "Performance optimization",
      "Integration management"
    ]
  }
]

const adminRoles = [
  { role: "Super Admin", permissions: "Full system access and control" },
  { role: "Content Moderator", permissions: "Listing and content approval" },
  { role: "User Support", permissions: "User account assistance" },
  { role: "Analytics Manager", permissions: "Reports and data analysis" },
  { role: "Security Officer", permissions: "Security monitoring and response" }
]

export default function AdminManual() {
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
          
          <h1 className="text-3xl font-bold mb-2">Admin Manual</h1>
          <p className="text-muted-foreground">
            Administrative guide for platform managers and system administrators
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
                <CardTitle>Admin Roles</CardTitle>
                <CardDescription>
                  Different administrative access levels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {adminRoles.map((admin, index) => (
                  <div key={index} className="p-3 bg-muted rounded-lg">
                    <Badge className="mb-2">{admin.role}</Badge>
                    <p className="text-sm text-muted-foreground">{admin.permissions}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-yellow-500" />
                  Critical Procedures
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <Badge variant="destructive" className="mb-2">Emergency</Badge>
                  <p className="text-sm">Security breaches require immediate response and escalation</p>
                </div>
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <Badge variant="secondary" className="mb-2">High Priority</Badge>
                  <p className="text-sm">System outages need prompt investigation and communication</p>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <Badge variant="outline" className="mb-2">Standard</Badge>
                  <p className="text-sm">Regular maintenance should be scheduled during low-traffic periods</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Monitor className="h-5 w-5 mr-2 text-blue-500" />
                  Key Metrics to Monitor
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Daily active users and growth rate</p>
                <p>• Platform uptime and performance</p>
                <p>• Transaction volume and success rate</p>
                <p>• Security incidents and resolution time</p>
                <p>• Content moderation queue status</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-green-500" />
                  Compliance Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• GDPR data protection compliance</p>
                <p>• Financial transaction regulations</p>
                <p>• Industry safety standards</p>
                <p>• Regular security audits</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Need Technical Support?</h3>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link to="/admin">Access Admin Panel</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">System Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}