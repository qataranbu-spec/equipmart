
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Star, 
  Filter,
  Search,
  TrendingUp,
  Shield,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Rentals = () => {
  const featuredRentals = [
    {
      id: 1,
      title: "Caterpillar 320 Excavator",
      hourlyRate: 150,
      dailyRate: 950,
      weeklyRate: 5500,
      location: "Dubai, UAE",
      rating: 4.8,
      reviews: 124,
      availability: "Available",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
      supplier: "Heavy Equipment Rentals LLC"
    },
    {
      id: 2,
      title: "Liebherr Mobile Crane LTM 1050",
      hourlyRate: 350,
      dailyRate: 2800,
      weeklyRate: 16800,
      location: "Abu Dhabi, UAE",
      rating: 4.9,
      reviews: 89,
      availability: "Available",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      supplier: "Al Futtaim Equipment"
    },
    {
      id: 3,
      title: "Volvo L120H Wheel Loader",
      hourlyRate: 180,
      dailyRate: 1200,
      weeklyRate: 7200,
      location: "Sharjah, UAE",
      rating: 4.7,
      reviews: 156,
      availability: "Booked until Mar 15",
      image: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=400&h=300&fit=crop",
      supplier: "Gulf Construction Rentals"
    }
  ];

  const rentalCategories = [
    { name: "Excavators", count: 245, icon: "🚜" },
    { name: "Cranes", count: 89, icon: "🏗️" },
    { name: "Loaders", count: 167, icon: "🚛" },
    { name: "Bulldozers", count: 78, icon: "🚜" },
    { name: "Dump Trucks", count: 134, icon: "🚚" },
    { name: "Concrete Mixers", count: 92, icon: "🚛" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Equipment Rentals</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Access premium construction equipment from verified suppliers across the region. 
              Flexible rental terms, competitive pricing, and 24/7 support.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search equipment..."
                    className="pl-10 pr-4 py-3 border border-border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <select className="pl-10 pr-4 py-3 border border-border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary appearance-none">
                    <option>Select Location</option>
                    <option>Dubai</option>
                    <option>Abu Dhabi</option>
                    <option>Sharjah</option>
                  </select>
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <input
                    type="date"
                    className="pl-10 pr-4 py-3 border border-border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <Button className="py-3">Search Rentals</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Equipment Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {rentalCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} available</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Rentals */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Equipment</h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">Sort by Price</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRentals.map((rental) => (
              <Card key={rental.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={rental.image} 
                    alt={rental.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge 
                    className={`absolute top-3 right-3 ${
                      rental.availability === 'Available' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {rental.availability}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{rental.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{rental.supplier}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {rental.location}
                    </div>
                    <div className="flex items-center text-sm">
                      <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                      {rental.rating} ({rental.reviews} reviews)
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm">Hourly:</span>
                      <span className="font-semibold">${rental.hourlyRate}/hr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Daily:</span>
                      <span className="font-semibold">${rental.dailyRate}/day</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Weekly:</span>
                      <span className="font-semibold text-primary">${rental.weeklyRate}/week</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link to="/book-equipment" className="flex-1">
                      <Button className="w-full" disabled={rental.availability !== 'Available'}>
                        {rental.availability === 'Available' ? 'Book Now' : 'Unavailable'}
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Rental Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Verified Suppliers</h3>
                <p className="text-muted-foreground">
                  All our equipment suppliers are thoroughly vetted and certified for quality and reliability.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Every piece of equipment undergoes rigorous inspection before rental deployment.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Round-the-clock technical support and emergency assistance for all rental operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Rent Equipment?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of contractors who trust our platform for their equipment rental needs. 
            Start browsing our extensive inventory today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg">Create Account</Button>
            </Link>
            <Link to="/marketplace">
              <Button variant="outline" size="lg">Browse Equipment</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Rentals;
