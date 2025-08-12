
import React from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search,
  Filter,
  MapPin,
  Star,
  Building2,
  Package,
  DollarSign,
  Shield,
  Globe,
  Users,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ExploreNetwork = () => {
  const suppliers = [
    {
      id: 1,
      name: "Al Futtaim Equipment",
      type: "Authorized Dealer",
      location: "Dubai, UAE",
      inventory: 850,
      sales: "$45M",
      rating: 4.9,
      verified: true,
      specialties: ["Caterpillar", "Volvo", "JCB"],
      established: "1998"
    },
    {
      id: 2,
      name: "Gulf Construction Equipment",
      type: "Independent Dealer",
      location: "Riyadh, KSA",
      inventory: 1200,
      sales: "$32M",
      rating: 4.8,
      verified: true,
      specialties: ["Komatsu", "Liebherr", "Hitachi"],
      established: "2005"
    },
    {
      id: 3,
      name: "Emirates Rental Solutions",
      type: "Rental Company",
      location: "Abu Dhabi, UAE",
      inventory: 650,
      sales: "$28M",
      rating: 4.7,
      verified: true,
      specialties: ["Rental Fleet", "Maintenance", "Logistics"],
      established: "2011"
    }
  ];

  const networkStats = [
    { label: "Total Suppliers", value: "4,800+", icon: Users },
    { label: "Countries", value: "52", icon: Globe },
    { label: "Annual Sales", value: "$3.2B", icon: TrendingUp },
    { label: "Equipment Units", value: "180K+", icon: Package }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Explore Supplier Network</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover verified suppliers from around the world. Browse by location, 
            specialty, or equipment type to find the perfect partners for your business.
          </p>
        </section>

        {/* Network Stats */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {networkStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <h3 className="font-semibold">{stat.label}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Search and Filters */}
        <div className="bg-card p-6 rounded-lg border mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search suppliers..."
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Supplier Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="authorized">Authorized Dealers</SelectItem>
                <SelectItem value="independent">Independent Dealers</SelectItem>
                <SelectItem value="rental">Rental Companies</SelectItem>
                <SelectItem value="manufacturer">Manufacturers</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="uae">UAE</SelectItem>
                <SelectItem value="saudi">Saudi Arabia</SelectItem>
                <SelectItem value="qatar">Qatar</SelectItem>
                <SelectItem value="kuwait">Kuwait</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Supplier Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {suppliers.map((supplier) => (
            <Card key={supplier.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{supplier.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{supplier.type}</p>
                  </div>
                  {supplier.verified && (
                    <Badge className="bg-green-100 text-green-800">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm">
                    <Building2 className="h-4 w-4 mr-2 text-muted-foreground" />
                    {supplier.location}
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="h-4 w-4 mr-2 fill-yellow-400 text-yellow-400" />
                    {supplier.rating} rating • Est. {supplier.established}
                  </div>
                  <div className="flex items-center text-sm">
                    <Package className="h-4 w-4 mr-2 text-muted-foreground" />
                    {supplier.inventory} units in stock
                  </div>
                  <div className="flex items-center text-sm">
                    <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                    {supplier.sales} annual sales
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {supplier.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button className="flex-1" size="sm">
                    View Profile
                  </Button>
                  <Button variant="outline" size="sm">
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mb-12">
          <Button variant="outline">Load More Suppliers</Button>
        </div>

        {/* CTA Section */}
        <section className="bg-primary/5 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Network?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Connect with verified suppliers worldwide or become a supplier yourself. 
            Join thousands of companies already growing their business through our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/become-supplier">
              <Button size="lg">Become a Supplier</Button>
            </Link>
            <Link to="/contact-us">
              <Button variant="outline" size="lg">Contact Sales</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ExploreNetwork;
