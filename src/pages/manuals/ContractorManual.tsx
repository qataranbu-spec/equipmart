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
    title: "Project Management (CRUD Operations)",
    icon: HardHat,
    items: [
      "CREATE: Initiate new projects → Build project plans → Create resource schedules → Generate timeline documents",
      "READ: View project status → Monitor progress metrics → Check resource utilization → Access project reports",
      "UPDATE: Modify project scope → Update timelines → Change resource allocation → Adjust project parameters",
      "DELETE: Close completed projects → Archive project data → Remove obsolete plans → Clear project history"
    ]
  },
  {
    title: "Equipment Procurement & Management",
    icon: Truck,
    items: [
      "CREATE: Generate equipment requests → Create rental agreements → Build purchase orders → Set maintenance schedules",
      "READ: View equipment inventory → Check availability status → Monitor equipment costs → Access usage reports",
      "UPDATE: Modify rental terms → Change equipment specifications → Update maintenance schedules → Adjust utilization",
      "DELETE: Return rental equipment → Dispose of old equipment → Cancel unused orders → Archive equipment records"
    ]
  },
  {
    title: "Site Coordination & Logistics",
    icon: MapPin,
    items: [
      "CREATE: Plan site layouts → Schedule deliveries → Create logistics workflows → Generate coordination protocols",
      "READ: Monitor site progress → Check delivery schedules → View logistics status → Access site reports",
      "UPDATE: Modify site plans → Change delivery schedules → Update logistics routes → Adjust coordination procedures",
      "DELETE: Close site operations → Archive site data → Remove temporary structures → Clear logistics records"
    ]
  },
  {
    title: "Team & Resource Management",
    icon: Users,
    items: [
      "CREATE: Assign team members → Create training schedules → Build certification tracking → Generate performance metrics",
      "READ: View team availability → Monitor skill levels → Check certification status → Access performance reports",
      "UPDATE: Modify team assignments → Update skill assessments → Change training schedules → Adjust performance targets",
      "DELETE: Remove team members → Archive training records → Clear old certifications → Purge performance data"
    ]
  },
  {
    title: "Documentation & Compliance",
    icon: FileText,
    items: [
      "CREATE: Generate inspection reports → Create compliance documents → Build safety protocols → Submit regulatory filings",
      "READ: View documentation status → Check compliance records → Monitor safety metrics → Access audit trails",
      "UPDATE: Modify inspection schedules → Update compliance procedures → Change safety protocols → Adjust documentation",
      "DELETE: Archive completed inspections → Remove obsolete documents → Clear old compliance records → Purge audit data"
    ]
  },
  {
    title: "Safety & Quality Management",
    icon: Shield,
    items: [
      "CREATE: Develop safety procedures → Create quality checklists → Build incident reporting → Generate safety training",
      "READ: Monitor safety metrics → Check quality scores → View incident reports → Access safety analytics",
      "UPDATE: Modify safety protocols → Update quality standards → Change incident procedures → Adjust training programs",
      "DELETE: Archive safety records → Clear resolved incidents → Remove old procedures → Purge training history"
    ]
  }
]

const businessProcesses = [
  {
    title: "Project Planning & Execution Workflow",
    steps: [
      "1. Project Initiation → Define scope and objectives → Identify stakeholders → Establish project charter → Set success criteria",
      "2. Resource Planning → Assess equipment needs → Plan workforce requirements → Schedule deliveries → Coordinate logistics",
      "3. Execution Phase → Monitor daily progress → Manage equipment utilization → Coordinate team activities → Track milestones",
      "4. Quality Control → Conduct regular inspections → Monitor work quality → Address deficiencies → Ensure compliance",
      "5. Risk Management → Identify potential risks → Implement mitigation strategies → Monitor risk factors → Update contingency plans",
      "6. Project Closeout → Complete final inspections → Document lessons learned → Archive project records → Release resources"
    ]
  },
  {
    title: "Equipment Lifecycle Management Process",
    steps: [
      "1. Needs Assessment → Analyze project requirements → Determine equipment specifications → Evaluate rent vs buy decisions",
      "2. Procurement → Source equipment suppliers → Negotiate terms and pricing → Execute contracts → Schedule deliveries",
      "3. Deployment → Coordinate equipment delivery → Conduct pre-use inspections → Train operators → Begin utilization tracking",
      "4. Operations Management → Monitor equipment performance → Schedule preventive maintenance → Track utilization rates",
      "5. Performance Optimization → Analyze utilization data → Optimize deployment → Adjust maintenance schedules → Maximize ROI",
      "6. End-of-Life → Plan equipment return/disposal → Conduct final inspections → Update records → Evaluate performance"
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