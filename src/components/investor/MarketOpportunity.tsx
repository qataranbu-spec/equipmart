import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const marketData = [
  { year: '2024', value: 200 },
  { year: '2025', value: 220 },
  { year: '2026', value: 245 },
  { year: '2027', value: 275 },
  { year: '2028', value: 310 },
];

const segmentData = [
  { name: 'Excavators', value: 35, color: 'hsl(var(--primary))' },
  { name: 'Cranes', value: 25, color: 'hsl(var(--secondary))' },
  { name: 'Bulldozers', value: 20, color: 'hsl(var(--accent))' },
  { name: 'Loaders', value: 12, color: 'hsl(var(--muted))' },
  { name: 'Others', value: 8, color: 'hsl(var(--border))' },
];

const MarketOpportunity = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Massive Market Opportunity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The global construction equipment market is experiencing unprecedented growth, 
            driven by urbanization, infrastructure development, and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Market Size Growth (Billions USD)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={marketData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Bar dataKey="value" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Market Segments</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={segmentData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {segmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-primary mb-4">75%</h3>
              <p className="text-muted-foreground">
                of construction companies are actively seeking digital solutions to optimize equipment utilization
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-primary mb-4">40%</h3>
              <p className="text-muted-foreground">
                average equipment downtime can be reduced through better marketplace access and maintenance
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-primary mb-4">$2.5T</h3>
              <p className="text-muted-foreground">
                total addressable market including rentals, sales, and related services globally
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;