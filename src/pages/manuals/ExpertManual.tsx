import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  BookOpen, 
  MessageSquare, 
  Award, 
  DollarSign, 
  Calendar,
  Shield,
  Star,
  ArrowLeft,
  Video
} from "lucide-react"
import { Link } from "react-router-dom"
import Header from "@/components/layout/Header"

const sections = [
  {
    title: "Expert Profile Management (CRUD Operations)",
    icon: Users,
    items: [
      "CREATE: Build professional profile → Upload certifications → Set expertise areas → Create service offerings",
      "READ: View profile analytics → Monitor engagement metrics → Check certification status → Access performance data",
      "UPDATE: Modify expertise areas → Update certifications → Change service rates → Adjust availability schedule",
      "DELETE: Remove outdated certifications → Archive old services → Clear inactive content → Deactivate profile sections"
    ]
  },
  {
    title: "Content & Knowledge Sharing",
    icon: BookOpen,
    items: [
      "CREATE: Publish articles and guides → Create video tutorials → Build training courses → Generate technical content",
      "READ: View content performance → Monitor engagement rates → Check user feedback → Access analytics data",
      "UPDATE: Modify existing content → Update training materials → Change course structures → Refresh technical guides",
      "DELETE: Remove outdated articles → Archive old courses → Clear obsolete content → Purge expired materials"
    ]
  },
  {
    title: "Consultation & Advisory Services",
    icon: MessageSquare,
    items: [
      "CREATE: Schedule consultations → Generate assessment reports → Create advisory plans → Build solution recommendations",
      "READ: View consultation history → Monitor client progress → Check service feedback → Access consultation analytics",
      "UPDATE: Modify consultation schedules → Update assessment criteria → Change advisory approaches → Adjust recommendations",
      "DELETE: Complete consultation records → Archive client reports → Clear sensitive data → Remove expired schedules"
    ]
  },
  {
    title: "Training Program Development",
    icon: Award,
    items: [
      "CREATE: Design training curricula → Build assessment tools → Create certification programs → Generate learning materials",
      "READ: View training effectiveness → Monitor learner progress → Check completion rates → Access training analytics",
      "UPDATE: Modify training content → Update assessment criteria → Change certification requirements → Adjust learning paths",
      "DELETE: Archive completed programs → Remove outdated curricula → Clear old assessments → Purge training records"
    ]
  },
  {
    title: "Revenue & Business Management",
    icon: DollarSign,
    items: [
      "CREATE: Set service pricing → Generate invoices → Create revenue reports → Build business analytics",
      "READ: View earnings history → Monitor payment status → Check service utilization → Access financial reports",
      "UPDATE: Modify pricing structures → Change payment terms → Update service offerings → Adjust business models",
      "DELETE: Archive completed transactions → Clear old invoices → Remove outdated pricing → Purge financial history"
    ]
  },
  {
    title: "Community Engagement & Networking",
    icon: Star,
    items: [
      "CREATE: Start forum discussions → Build professional networks → Create collaborative projects → Generate thought leadership",
      "READ: View community engagement → Monitor reputation scores → Check network growth → Access engagement analytics",
      "UPDATE: Modify engagement strategies → Update professional connections → Change collaboration approaches → Adjust networking",
      "DELETE: Archive old discussions → Remove inactive connections → Clear outdated collaborations → Purge engagement history"
    ]
  }
]

const businessProcesses = [
  {
    title: "Expert Onboarding & Profile Development",
    steps: [
      "1. Registration → Complete expert application → Verify credentials → Submit portfolio → Set initial expertise areas",
      "2. Profile Creation → Build comprehensive profile → Upload certifications → Define service offerings → Set pricing structure",
      "3. Content Development → Create initial content pieces → Develop training materials → Build knowledge base → Establish thought leadership",
      "4. Platform Integration → Familiarize with platform tools → Set up communication preferences → Configure availability → Join relevant communities",
      "5. Launch Strategy → Publish initial content → Engage with community → Offer introductory services → Build initial reputation",
      "6. Ongoing Optimization → Monitor performance metrics → Refine service offerings → Update expertise → Expand professional network"
    ]
  },
  {
    title: "Consultation Service Delivery Process",
    steps: [
      "1. Service Inquiry → Receive consultation request → Assess client needs → Determine service fit → Provide initial response",
      "2. Scope Definition → Conduct needs assessment → Define service parameters → Establish deliverables → Set timeline and pricing",
      "3. Engagement Setup → Execute service agreement → Schedule consultations → Prepare materials → Set communication protocols",
      "4. Service Delivery → Conduct consultations → Provide expert guidance → Deliver assessments → Monitor progress regularly",
      "5. Value Delivery → Complete service objectives → Provide recommendations → Deliver final reports → Ensure client satisfaction",
      "6. Follow-up → Collect feedback → Monitor implementation → Provide ongoing support → Build long-term relationship"
    ]
  }
]

const expertiseAreas = [
  "Heavy Equipment Operation",
  "Maintenance & Repair",
  "Safety & Compliance",
  "Project Management",
  "Equipment Selection",
  "Cost Optimization"
]

export default function ExpertManual() {
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
          
          <h1 className="text-3xl font-bold mb-2">Expert Manual</h1>
          <p className="text-muted-foreground">
            Manual for industry experts, consultants, and technical advisors
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
                <CardTitle>Expertise Areas</CardTitle>
                <CardDescription>
                  Specialization areas you can offer
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="flex items-center p-2 bg-muted rounded">
                    <Award className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Video className="h-5 w-5 mr-2 text-blue-500" />
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
                  Engagement Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Respond to inquiries within 4 hours</p>
                <p>• Maintain 4.5+ star rating average</p>
                <p>• Publish new content monthly</p>
                <p>• Participate in community discussions</p>
                <p>• Update certifications annually</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-red-500" />
                  Professional Standards
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Maintain professional liability insurance</p>
                <p>• Follow industry ethical guidelines</p>
                <p>• Protect client confidentiality</p>
                <p>• Provide accurate and current advice</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Ready to Share Your Expertise?</h3>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link to="/network/expert/register">Join as Expert</Link>
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