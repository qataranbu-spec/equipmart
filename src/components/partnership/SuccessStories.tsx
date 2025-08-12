import React from 'react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Star, Quote, TrendingUp, Users, MapPin } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      name: "Sarah Chen",
      company: "Pacific Equipment Solutions",
      location: "Seattle, WA",
      partnerSince: "2023",
      investment: "$45K Regional Partner",
      results: {
        revenueGrowth: "180%",
        newCustomers: "340+",
        marketExpansion: "3 new states"
      },
      quote: "Partnering with EqpMart transformed our business. We went from a local equipment dealer to a regional powerhouse. The revenue sharing alone paid for our investment in 8 months.",
      avatar: "SC",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      company: "Heavy Lift Contractors",
      location: "Austin, TX",
      partnerSince: "2022",
      investment: "$15K Marketplace Partner",
      results: {
        revenueGrowth: "95%",
        newCustomers: "150+",
        marketExpansion: "2 new cities"
      },
      quote: "As a small contractor, the partnership program gave me access to equipment I never could have afforded. Now I'm competing with the big players and winning.",
      avatar: "MR",
      rating: 5
    },
    {
      name: "Jennifer Adams",
      company: "Midwest Construction Group",
      location: "Chicago, IL",
      partnerSince: "2023",
      investment: "$120K Strategic Partner",
      results: {
        revenueGrowth: "250%",
        newCustomers: "500+",
        marketExpansion: "Multi-state presence"
      },
      quote: "The strategic partnership gave us a competitive edge we never had. The platform development input and exclusive market access have been game-changers.",
      avatar: "JA",
      rating: 5
    }
  ];

  const communityStats = [
    { label: "Active Partners", value: "150+", icon: Users },
    { label: "Cities Covered", value: "25", icon: MapPin },
    { label: "Average ROI", value: "320%", icon: TrendingUp },
    { label: "Partner Satisfaction", value: "4.9/5", icon: Star }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Partner Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real partners sharing their journey and results from joining the EqpMart ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stories.map((story, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-semibold text-primary">
                    {story.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{story.name}</div>
                    <div className="text-sm text-muted-foreground">{story.company}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <Badge variant="secondary">{story.location}</Badge>
                  <Badge variant="outline">Partner since {story.partnerSince}</Badge>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium text-primary mb-2">{story.investment}</div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-lg font-bold text-green-600">+{story.results.revenueGrowth}</div>
                      <div className="text-xs text-muted-foreground">Revenue</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-600">{story.results.newCustomers}</div>
                      <div className="text-xs text-muted-foreground">Customers</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-600">{story.results.marketExpansion}</div>
                      <div className="text-xs text-muted-foreground">Expansion</div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-1 h-4 w-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground italic pl-4 mb-4">
                    "{story.quote}"
                  </p>
                </div>

                <div className="flex items-center space-x-1">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-background rounded-xl p-8 border">
            <h3 className="text-2xl font-bold text-center mb-8">Community Growth</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {communityStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Ready to write your own success story?
            </p>
            <div className="space-x-4">
              <Badge variant="secondary" className="px-4 py-2">
                Average Partnership ROI: 320% in 18 months
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                95% of partners would recommend us
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;