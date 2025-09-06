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
    title: "Platform Management (CRUD Operations)",
    icon: Settings,
    items: [
      "CREATE: Add new features → Create system configurations → Build admin workflows → Generate system reports",
      "READ: Monitor platform health → View system logs → Check performance metrics → Access audit trails",
      "UPDATE: Modify system settings → Update configurations → Change user permissions → Adjust parameters",
      "DELETE: Remove obsolete features → Archive old data → Clear system logs → Purge inactive records"
    ]
  },
  {
    title: "User Account Administration",
    icon: Users,
    items: [
      "CREATE: Provision new accounts → Set user roles → Create access permissions → Generate user credentials",
      "READ: View user profiles → Monitor user activity → Check login history → Access user analytics",
      "UPDATE: Modify user permissions → Change user roles → Update profile information → Reset passwords",
      "DELETE: Deactivate accounts → Remove user access → Archive user data → Purge deleted accounts"
    ]
  },
  {
    title: "Content & Listing Management",
    icon: FileText,
    items: [
      "CREATE: Approve new listings → Create content policies → Build moderation rules → Generate content reports",
      "READ: Review pending listings → Monitor content quality → Check compliance status → Access moderation logs",
      "UPDATE: Edit listing details → Modify content policies → Update moderation rules → Change approval status",
      "DELETE: Remove violating content → Archive old listings → Clear moderation queue → Delete spam content"
    ]
  },
  {
    title: "System Analytics & Reporting",
    icon: BarChart3,
    items: [
      "CREATE: Build custom dashboards → Generate performance reports → Create KPI tracking → Set up alerts",
      "READ: View system metrics → Monitor user engagement → Check business intelligence → Access trend analysis",
      "UPDATE: Modify dashboard layouts → Update report parameters → Change KPI definitions → Adjust alert thresholds",
      "DELETE: Archive old reports → Clear cached analytics → Remove outdated metrics → Purge historical data"
    ]
  },
  {
    title: "Security Administration",
    icon: Key,
    items: [
      "CREATE: Set security policies → Create compliance checklists → Build audit procedures → Generate security reports",
      "READ: Monitor security events → Review compliance status → Check vulnerability reports → Access security logs",
      "UPDATE: Modify security settings → Update compliance rules → Change access controls → Adjust security policies",
      "DELETE: Clear security logs → Archive compliance records → Remove old policies → Purge security incidents"
    ]
  },
  {
    title: "System Operations Management",
    icon: Database,
    items: [
      "CREATE: Build maintenance schedules → Create backup procedures → Generate operational reports → Set monitoring rules",
      "READ: View system performance → Monitor database health → Check backup status → Access operational logs",
      "UPDATE: Modify maintenance windows → Update backup configs → Change monitoring thresholds → Adjust operational procedures",
      "DELETE: Archive old backups → Clear operational logs → Remove obsolete procedures → Purge system data"
    ]
  }
]

const businessProcesses = [
  {
    title: "User Verification Workflow",
    steps: [
      "1. Initial Application → Receive verification request → Check submitted documents → Validate business information",
      "2. Document Review → Verify business licenses → Check tax ID numbers → Validate bank account details",
      "3. Background Checks → Run credit checks → Verify references → Check compliance history",
      "4. Risk Assessment → Evaluate business risk → Check industry compliance → Assess financial stability",
      "5. Approval Decision → Review all data → Make approval decision → Set account permissions → Notify user",
      "6. Ongoing Monitoring → Regular compliance checks → Monitor account activity → Update verification status"
    ]
  },
  {
    title: "Content Moderation Process",
    steps: [
      "1. Content Submission → Receive new listing → Run automated checks → Flag potential issues",
      "2. Initial Review → Check content policies → Verify image quality → Validate information accuracy",
      "3. Compliance Check → Ensure legal compliance → Check safety standards → Verify equipment specifications",
      "4. Quality Assurance → Review content quality → Check completeness → Validate pricing reasonableness",
      "5. Approval/Rejection → Make final decision → Provide feedback → Update listing status → Notify submitter",
      "6. Post-Publication Monitoring → Monitor user reports → Check performance metrics → Update if needed"
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
                <CardTitle>Business Process Workflows</CardTitle>
                <CardDescription>
                  Critical administrative processes and procedures
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