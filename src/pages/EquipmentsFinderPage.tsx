import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, ChevronDown, Star } from 'lucide-react';

const EquipmentsFinderPage = () => {
  const [showMore, setShowMore] = useState(false);

  const equipmentCategories = [
    { name: 'Cranes', machines: 518, image: '🏗️', color: 'bg-red-50' },
    { name: 'Excavators', machines: 332, image: '🚜', color: 'bg-yellow-50' },
    { name: 'Aerial Platforms', machines: 248, image: '🚁', color: 'bg-blue-50' },
    { name: 'Lifting Equipment', machines: 234, image: '🏋️', color: 'bg-purple-50' },
    { name: 'Trucks', machines: 222, image: '🚛', color: 'bg-green-50' },
    { name: 'Wheel Loaders', machines: 202, image: '🚚', color: 'bg-orange-50' },
    { name: 'Boom Loaders', machines: 184, image: '🚧', color: 'bg-indigo-50' },
    { name: 'Trailers', machines: 153, image: '🚙', color: 'bg-gray-50' },
    { name: 'Backhoe Loaders', machines: 129, image: '🚜', color: 'bg-yellow-50' },
    { name: 'Compactors', machines: 118, image: '🏗️', color: 'bg-red-50' }
  ];

  const premiumRentals = [
    {
      id: 1,
      title: 'Caterpillar 320D Excavator',
      location: 'Dubai, UAE',
      price: 'AED 450/day',
      image: '/placeholder.svg',
      rating: 4.8,
      premium: true
    },
    {
      id: 2,
      title: 'Liebherr LTM 1300-6.2 Crane',
      location: 'Abu Dhabi, UAE',
      price: 'AED 1200/day', 
      image: '/placeholder.svg',
      rating: 4.9,
      premium: true
    },
    {
      id: 3,
      title: 'JLG 1350SJP Boom Lift',
      location: 'Sharjah, UAE',
      price: 'AED 280/day',
      image: '/placeholder.svg',
      rating: 4.7,
      premium: true
    },
    {
      id: 4,
      title: 'Volvo L120H Wheel Loader',
      location: 'Ajman, UAE',
      price: 'AED 380/day',
      image: '/placeholder.svg',
      rating: 4.6,
      premium: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <div className="text-2xl font-bold">
                  <span className="text-foreground">EQUIPMENTS</span>
                  <span className="text-orange-500">FINDER</span>
                </div>
              </Link>
              
              <nav className="hidden md:flex items-center space-x-6">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span>BUY</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span>RENT</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span>BRANDS</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <span className="text-orange-500 cursor-pointer">INQUIRIES</span>
                <span className="cursor-pointer">NEWS</span>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Create an Ad
              </Button>
              <Button variant="ghost">Login</Button>
              <Button variant="ghost" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-yellow-500 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-cover bg-center" style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InBhdHRlcm4iIHg9IjAiIHk9IjAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjZmZmZmZmMDAiLz48cGF0aCBkPSJNMTAgMTBMMTUgMTVNMzUgMTBMNDAgMTVNMTAgMzVMMTUgNDBNMzUgMzVMNDAgNDAiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')"
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-6xl font-bold mb-4">
            Middle East's<br />
            <span className="text-yellow-300">#1 Equipment</span> Marketplace
          </h1>
          
          <div className="max-w-2xl mx-auto mb-8">
            <Tabs defaultValue="rent" className="mb-8">
              <TabsList className="grid w-full grid-cols-3 bg-white/20 backdrop-blur-sm">
                <TabsTrigger value="rent" className="text-white data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                  🏠 Rent
                </TabsTrigger>
                <TabsTrigger value="buy" className="text-white data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                  💰 Buy
                </TabsTrigger>
                <TabsTrigger value="new" className="text-white data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                  ⭐ New Machines
                </TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Search by machine name e.g. MINI EXCAVATORS"
                  className="pl-10 h-12 bg-white text-black placeholder-gray-500"
                />
              </div>
              <Button className="h-12 px-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                VIEW ALL MACHINES 🔍
              </Button>
            </div>
            
            <div className="mt-4">
              <Link to="#" className="text-white underline hover:no-underline">
                List Your Equipments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {equipmentCategories.slice(0, showMore ? equipmentCategories.length : 10).map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${category.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                    {category.image}
                  </div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.machines} Machines</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              onClick={() => setShowMore(!showMore)}
              className="text-muted-foreground"
            >
              {showMore ? 'Show less' : 'Show more'}
            </Button>
          </div>
        </div>
      </section>

      {/* Top Equipment for Rent */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Top Equipment for Rent</h2>
              <p className="text-muted-foreground max-w-3xl">
                Boost your projects with top-tier heavy machinery rentals. Enhance productivity in construction, mining, and industrial work with our high-performance equipment.
              </p>
            </div>
            <Button variant="outline" className="shrink-0">
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumRentals.map((rental) => (
              <Card key={rental.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={rental.image} 
                    alt={rental.title}
                    className="w-full h-48 object-cover"
                  />
                  {rental.premium && (
                    <Badge className="absolute top-2 left-2 bg-orange-500 text-white">
                      RENT
                    </Badge>
                  )}
                  <Badge className="absolute top-2 right-2 bg-red-500 text-white">
                    PREMIUM
                  </Badge>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{rental.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{rental.location}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-green-600">{rental.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{rental.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default EquipmentsFinderPage;