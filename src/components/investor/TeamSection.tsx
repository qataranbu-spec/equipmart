import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Award, Building, Users } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Co-Founder',
    image: '/placeholder.svg',
    experience: '15+ years',
    background: 'Former VP at Caterpillar, led $2B equipment division',
    achievements: ['Forbes 40 Under 40', 'MIT MBA', 'Construction Tech Pioneer'],
  },
  {
    name: 'Michael Chen',
    role: 'CTO & Co-Founder',
    image: '/placeholder.svg',
    experience: '12+ years',
    background: 'Ex-Google Senior Engineer, built scalable marketplace platforms',
    achievements: ['Stanford CS PhD', 'Y Combinator Alum', '3 Successful Exits'],
  },
  {
    name: 'David Rodriguez',
    role: 'Head of Operations',
    image: '/placeholder.svg',
    experience: '18+ years',
    background: 'Former COO at United Rentals, expertise in equipment logistics',
    achievements: ['Industry Leader Award', 'Harvard Business School', 'Logistics Expert'],
  },
];

const advisors = [
  { name: 'John Smith', role: 'Former CEO, Komatsu America', icon: Building },
  { name: 'Lisa Wang', role: 'Partner, Sequoia Capital', icon: Award },
  { name: 'Robert Kim', role: 'Founder, Construction Tech Fund', icon: Users },
];

const TeamSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            World-Class Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our leadership team combines decades of construction industry experience 
            with proven track records in technology and scaling businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <Badge variant="outline" className="mb-4">{member.experience}</Badge>
                <p className="text-muted-foreground text-sm mb-4">{member.background}</p>
                <div className="space-y-1">
                  {member.achievements.map((achievement, achievementIndex) => (
                    <Badge key={achievementIndex} variant="secondary" className="mr-1 mb-1">
                      {achievement}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4">
                  <Linkedin className="h-5 w-5 text-muted-foreground mx-auto cursor-pointer hover:text-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card border rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Advisory Board
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisors.map((advisor, index) => {
              const IconComponent = advisor.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">{advisor.name}</h4>
                  <p className="text-sm text-muted-foreground">{advisor.role}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Backed by Industry Leaders
              </h3>
              <p className="text-muted-foreground mb-6">
                Our team has the proven experience and industry connections needed to 
                execute on our vision and scale the platform globally.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge>$500M+ Previous Exits</Badge>
                <Badge>50+ Years Combined Experience</Badge>
                <Badge>Construction Industry Veterans</Badge>
                <Badge>Silicon Valley Tech Experience</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;