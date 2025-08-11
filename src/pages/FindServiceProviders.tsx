
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search, MapPin, Filter, Star } from 'lucide-react';

const FindServiceProviders = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Service Providers</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Search and connect with certified construction service providers in your area
            </p>
          </div>

          {/* Search Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="h-5 w-5 mr-2" />
                Search Service Providers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="service">Service Type</Label>
                  <select className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md">
                    <option value="">All Services</option>
                    <option value="maintenance">Equipment Maintenance</option>
                    <option value="transportation">Transportation</option>
                    <option value="installation">Installation</option>
                    <option value="operators">Operators</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="City, State or ZIP" />
                </div>
                <div>
                  <Label htmlFor="equipment">Equipment Type</Label>
                  <select className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md">
                    <option value="">All Equipment</option>
                    <option value="excavators">Excavators</option>
                    <option value="cranes">Cranes</option>
                    <option value="bulldozers">Bulldozers</option>
                    <option value="loaders">Loaders</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <Button className="w-full">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Available Service Providers</h2>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">Service Provider {index}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm">4.{index + 3}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    Specialized in heavy equipment maintenance and repair services
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    Dubai, UAE
                  </div>
                  <div className="flex space-x-2">
                    <Button className="flex-1" size="sm">Contact</Button>
                    <Button variant="outline" size="sm">View Profile</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">Load More Providers</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FindServiceProviders;
