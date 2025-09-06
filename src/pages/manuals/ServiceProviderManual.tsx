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
    title: "Service Provider Profile Management (CRUD)",
    icon: Wrench,
    items: [
      "CREATE: Register provider account → Upload certifications → Set service areas → Define specializations → Set rates",
      "READ: View profile status → Check certification validity → Monitor service areas → Review rate cards",
      "UPDATE: Modify service offerings → Update certifications → Change service areas → Adjust pricing → Edit availability",
      "DELETE: Remove services → Archive certifications → Close service areas → Deactivate profile → Export data"
    ]
  },
  {
    title: "Work Order & Job Management",
    icon: Calendar,
    items: [
      "CREATE: Accept service requests → Generate work orders → Schedule appointments → Create task checklists → Set priorities",
      "READ: View job queue → Check appointment details → Monitor work progress → Access customer info → Review requirements",
      "UPDATE: Modify schedules → Update job status → Change priorities → Edit work orders → Reschedule appointments",
      "DELETE: Cancel jobs → Close completed orders → Archive old requests → Remove cancelled appointments → Clear job history"
    ]
  },
  {
    title: "Field Service Operations",
    icon: MapPin,
    items: [
      "CREATE: Start service sessions → Log work activities → Order parts → Generate field reports → Create photo documentation",
      "READ: Access job details → Check equipment history → View parts inventory → Review safety protocols → Monitor time tracking",
      "UPDATE: Modify work logs → Update part usage → Change service notes → Edit time entries → Adjust completion status",
      "DELETE: Remove incorrect entries → Clear draft reports → Cancel part orders → Archive completed sessions → Reset timers"
    ]
  },
  {
    title: "Documentation & Reporting System",
    icon: FileText,
    items: [
      "CREATE: Generate service reports → Create inspection documents → Build maintenance schedules → Document findings → Submit invoices",
      "READ: View report history → Access customer documents → Check compliance records → Review work summaries → Monitor billing",
      "UPDATE: Edit draft reports → Modify findings → Update recommendations → Change billing details → Adjust documentation",
      "DELETE: Remove draft documents → Archive completed reports → Clear temporary files → Delete obsolete records → Purge old data"
    ]
  },
  {
    title: "Quality Management & Feedback",
    icon: Award,
    items: [
      "CREATE: Build quality checklists → Generate satisfaction surveys → Create follow-up schedules → Set quality metrics",
      "READ: View customer feedback → Check quality scores → Monitor performance metrics → Access improvement areas → Review complaints",
      "UPDATE: Modify quality standards → Update survey questions → Change follow-up procedures → Adjust performance targets",
      "DELETE: Archive old feedback → Remove outdated checklists → Clear resolved complaints → Delete obsolete metrics"
    ]
  },
  {
    title: "Business Development & Analytics",
    icon: Star,
    items: [
      "CREATE: Build customer relationships → Develop service packages → Create marketing materials → Set growth targets → Generate analytics reports",
      "READ: View performance dashboards → Monitor customer retention → Check revenue trends → Access market insights → Review competitor analysis",
      "UPDATE: Modify service packages → Update marketing content → Change pricing strategies → Adjust growth targets → Refresh analytics",
      "DELETE: Archive old campaigns → Remove outdated packages → Clear old analytics → Delete inactive customer data → Purge expired content"
    ]
  }
]

const businessProcesses = [
  {
    title: "Service Request Processing Workflow",
    steps: [
      "1. Request Reception → Receive service alert → Review customer details → Assess urgency level → Check availability",
      "2. Initial Response → Acknowledge within SLA → Gather additional details → Provide initial estimate → Schedule assessment",
      "3. Job Preparation → Review equipment specs → Prepare tools and parts → Plan route and logistics → Confirm appointment",
      "4. On-Site Service → Arrive punctually → Conduct safety assessment → Perform diagnostic → Execute service plan",
      "5. Documentation → Create service report → Take before/after photos → Document parts used → Get customer approval",
      "6. Completion → Clean work area → Provide service summary → Submit invoice → Schedule follow-up if needed"
    ]
  },
  {
    title: "Emergency Service Protocol",
    steps: [
      "1. Emergency Alert → Receive priority notification → Assess severity → Confirm availability → Provide ETA",
      "2. Rapid Response → Mobilize within 2 hours → Bring emergency kit → Contact customer en route → Coordinate access",
      "3. Emergency Assessment → Evaluate safety risks → Identify immediate solutions → Prioritize critical repairs",
      "4. Temporary Stabilization → Implement safety measures → Provide temporary fixes → Document emergency actions",
      "5. Full Resolution Planning → Schedule comprehensive repair → Order specialized parts → Coordinate extended service",
      "6. Follow-up → Monitor equipment performance → Provide maintenance recommendations → Document lessons learned"
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