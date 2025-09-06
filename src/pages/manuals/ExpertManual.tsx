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
    title: "Expert Profile Setup",
    icon: Users,
    items: [
      "Professional profile creation",
      "Expertise area specification",
      "Certification uploads",
      "Portfolio development"
    ]
  },
  {
    title: "Knowledge Sharing",
    icon: BookOpen,
    items: [
      "Article and guide publishing",
      "Video content creation",
      "Webinar hosting",
      "Best practice documentation"
    ]
  },
  {
    title: "Consultation Services",
    icon: MessageSquare,
    items: [
      "One-on-one consultations",
      "Group advisory sessions",
      "Equipment evaluation services",
      "Technical troubleshooting"
    ]
  },
  {
    title: "Training Programs",
    icon: Award,
    items: [
      "Online course development",
      "Certification program creation",
      "Workshop facilitation",
      "Skill assessment tools"
    ]
  },
  {
    title: "Revenue Management",
    icon: DollarSign,
    items: [
      "Service pricing strategies",
      "Payment processing",
      "Revenue tracking",
      "Tax documentation"
    ]
  },
  {
    title: "Community Engagement",
    icon: Star,
    items: [
      "Forum participation",
      "Question answering",
      "Network building",
      "Reputation management"
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
                  Service Types
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-muted rounded-lg">
                  <Badge className="mb-2" variant="secondary">Consultation</Badge>
                  <p className="text-sm">$150-500/hour for one-on-one expert advice</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <Badge className="mb-2" variant="secondary">Training</Badge>
                  <p className="text-sm">$100-300/person for group training sessions</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <Badge className="mb-2" variant="secondary">Content</Badge>
                  <p className="text-sm">Revenue sharing on premium content and courses</p>
                </div>
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