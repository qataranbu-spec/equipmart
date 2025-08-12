import React from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Award, 
  Users,
  MessageCircle,
  Calendar,
  DollarSign,
  CheckCircle,
  Star,
  Building2,
  Clock,
  Phone,
  Video,
  FileText,
  Wrench
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ExpertsNetwork = () => {
  const expertCategories = [
    {
      title: "Equipment Appraisers",
      count: 340,
      description: "Certified professionals for equipment valuation and assessment",
      avgRate: "$150/hr",
      specialties: ["Market Valuation", "Insurance Assessment", "Damage Evaluation"]
    },
    {
      title: "Technical Consultants",
      count: 580,
      description: "Engineering and technical expertise for equipment selection",
      avgRate: "$200/hr",
      specialties: ["Specifications", "Performance Analysis", "Custom Solutions"]
    },
    {
      title: "Maintenance Specialists",
      count: 450,
      description: "Expert maintenance planning and troubleshooting services",
      avgRate: "$120/hr",
      specialties: ["Preventive Maintenance", "Diagnostics", "Optimization"]
    },
    {
      title: "Training Instructors",
      count: 290,
      description: "Certified trainers for equipment operation and safety",
      avgRate: "$180/hr",
      specialties: ["Safety Training", "Operator Certification", "Skills Development"]
    }
  ];

  const topExperts = [
    {
      id: 1,
      name: "Dr. Hassan Al-Mahmoud",
      title: "Senior Equipment Appraiser",
      specialization: "Heavy Machinery Valuation",
      experience: "20+ years",
      rating: 4.9,
      reviews: 287,
      hourlyRate: 250,
      languages: ["English", "Arabic", "French"],
      certifications: ["ASA", "ISA", "ASCE"],
      location: "Dubai, UAE",
      availability: "Available"
    },
    {
      id: 2,
      name: "Sarah Thompson",
      title: "Technical Consultant",
      specialization: "Mining Equipment Engineering",
      experience: "15+ years",
      rating: 4.8,
      reviews: 156,
      hourlyRate: 220,
      languages: ["English", "Spanish"],
      certifications: ["PE", "SME", "MSHA"],
      location: "Perth, Australia",
      availability: "Busy until Feb 15"
    },
    {
      id: 3,
      name: "Marco Rossi",
      title: "Maintenance Specialist",
      specialization: "Caterpillar & Komatsu Equipment",
      experience: "18+ years",
      rating: 4.9,
      reviews: 342,
      hourlyRate: 180,
      languages: ["English", "Italian", "German"],
      certifications: ["CAT Certified", "Komatsu Expert"],
      location: "Milan, Italy",
      availability: "Available"
    }
  ];

  const serviceTypes = [
    {
      icon: FileText,
      title: "Equipment Appraisal",
      description: "Professional valuation for insurance, financing, or resale"
    },
    {
      icon: Wrench,
      title: "Technical Consultation",
      description: "Expert advice on equipment selection and specifications"
    },
    {
      icon: GraduationCap,
      title: "Training & Certification",
      description: "Operator training and safety certification programs"
    },
    {
      icon: Video,
      title: "Remote Diagnostics",
      description: "Virtual equipment inspection and troubleshooting"
    }
  ];

  const benefits = [
    "Access to certified industry experts",
    "Flexible engagement models",
    "Secure payment processing",
    "Quality guarantee on all services",
    "24/7 platform support",
    "Expert matching algorithm"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Experts Network</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with certified construction equipment experts worldwide. 
              Get professional advice, appraisals, training, and technical support from industry leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/find-experts">
                <Button size="lg">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  Find an Expert
                </Button>
              </Link>
              <Link to="/join-as-expert">
                <Button variant="outline" size="lg">Join as Expert</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Network Stats */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">1,660+</div>
                <h3 className="font-semibold mb-1">Certified Experts</h3>
                <p className="text-sm text-muted-foreground">Verified professionals</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">25,000+</div>
                <h3 className="font-semibold mb-1">Consultations</h3>
                <p className="text-sm text-muted-foreground">Completed projects</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">38</div>
                <h3 className="font-semibold mb-1">Countries</h3>
                <p className="text-sm text-muted-foreground">Global coverage</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">4.8</div>
                <h3 className="font-semibold mb-1">Average Rating</h3>
                <p className="text-sm text-muted-foreground">Client satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Expert Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Expert Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <p className="text-muted-foreground mt-2">{category.description}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">{category.count} experts</Badge>
                      <p className="text-sm text-muted-foreground mt-1">{category.avgRate}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.specialties.map((specialty, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        {specialty}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Experts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Featured Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topExperts.map((expert) => (
              <Card key={expert.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{expert.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{expert.title}</p>
                      <p className="text-sm font-medium text-primary">{expert.specialization}</p>
                    </div>
                    <Badge 
                      className={expert.availability === 'Available' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'}
                    >
                      {expert.availability}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm">
                      <Building2 className="h-4 w-4 mr-2 text-muted-foreground" />
                      {expert.location}
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      {expert.experience} experience
                    </div>
                    <div className="flex items-center text-sm">
                      <Star className="h-4 w-4 mr-2 fill-yellow-400 text-yellow-400" />
                      {expert.rating} ({expert.reviews} reviews)
                    </div>
                    <div className="flex items-center text-sm">
                      <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                      ${expert.hourlyRate}/hour
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Languages:</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {expert.languages.map((lang, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                    
                    <p className="text-sm font-medium mb-2">Certifications:</p>
                    <div className="flex flex-wrap gap-1">
                      {expert.certifications.map((cert, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link to="/contact-us" className="flex-1">
                      <Button className="w-full" size="sm" disabled={expert.availability !== 'Available'}>
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      <Calendar className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Service Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Expert Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceTypes.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Describe Your Need</h3>
              <p className="text-muted-foreground text-sm">Tell us what kind of expert consultation you need</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Get Matched</h3>
              <p className="text-muted-foreground text-sm">We connect you with qualified experts in your area</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Schedule Session</h3>
              <p className="text-muted-foreground text-sm">Book a consultation at your convenience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Get Expert Advice</h3>
              <p className="text-muted-foreground text-sm">Receive professional consultation and recommendations</p>
            </div>
          </div>
        </section>

        {/* Platform Benefits */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Platform Benefits</h2>
              <p className="text-muted-foreground mb-6">
                Our expert network provides you with access to the industry's most qualified professionals, 
                ensuring you get the right advice for your equipment needs.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-primary/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Expert Spotlight</h3>
                <blockquote className="text-muted-foreground mb-4">
                  "The expertise available through this platform is unmatched. I've helped over 200 
                  clients make informed equipment decisions, saving them millions in unnecessary costs."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-bold">HA</span>
                  </div>
                  <div>
                    <p className="font-semibold">Dr. Hassan Al-Mahmoud</p>
                    <p className="text-sm text-muted-foreground">Senior Equipment Appraiser</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Expert Consultation?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Connect with certified experts who can provide professional advice, appraisals, 
            and technical support for all your construction equipment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/find-experts">
              <Button size="lg">Find an Expert</Button>
            </Link>
            <Link to="/join-as-expert">
              <Button variant="outline" size="lg">Join as Expert</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ExpertsNetwork;
