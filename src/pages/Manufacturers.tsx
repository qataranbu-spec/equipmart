import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  Building2,
  MapPin,
  Calendar,
  Star,
  ExternalLink,
  Globe,
  Factory
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Manufacturer {
  id: string;
  name: string;
  logo: string;
  brandColor: string;
  founded: number;
  headquarters: string;
  country: string;
  specialties: string[];
  rating: number;
  description: string;
  website: string;
  marketShare: string;
  employees: string;
}

const Manufacturers = () => {
  const manufacturers: Record<string, Manufacturer[]> = {
    excavators: [
      {
        id: 'caterpillar-exc',
        name: 'Caterpillar',
        logo: '/api/placeholder/120/60',
        brandColor: '#FFCD11',
        founded: 1925,
        headquarters: 'Peoria, Illinois',
        country: 'USA',
        specialties: ['Hydraulic Excavators', 'Mini Excavators', 'Wheel Excavators'],
        rating: 4.8,
        description: 'World leader in construction and mining equipment manufacturing',
        website: 'caterpillar.com',
        marketShare: '15%',
        employees: '114,000+'
      },
      {
        id: 'komatsu-exc',
        name: 'Komatsu',
        logo: '/api/placeholder/120/60',
        brandColor: '#0066CC',
        founded: 1921,
        headquarters: 'Tokyo',
        country: 'Japan',
        specialties: ['PC Series Excavators', 'Hybrid Excavators', 'Mining Excavators'],
        rating: 4.7,
        description: 'Leading Japanese manufacturer of construction, mining and utility equipment',
        website: 'komatsu.com',
        marketShare: '12%',
        employees: '63,000+'
      },
      {
        id: 'volvo-exc',
        name: 'Volvo Construction Equipment',
        logo: '/api/placeholder/120/60',
        brandColor: '#1E3A8A',
        founded: 1832,
        headquarters: 'Gothenburg',
        country: 'Sweden',
        specialties: ['EC Series', 'Crawler Excavators', 'Wheeled Excavators'],
        rating: 4.6,
        description: 'Swedish manufacturer known for safety, quality and environmental care',
        website: 'volvoce.com',
        marketShare: '8%',
        employees: '22,000+'
      },
      {
        id: 'hitachi-exc',
        name: 'Hitachi Construction Machinery',
        logo: '/api/placeholder/120/60',
        brandColor: '#E60012',
        founded: 1970,
        headquarters: 'Tokyo',
        country: 'Japan',
        specialties: ['ZX Series', 'Ultra-large Excavators', 'Hybrid Technology'],
        rating: 4.6,
        description: 'Japanese leader in hydraulic excavators and construction machinery',
        website: 'hitachicm.com',
        marketShare: '7%',
        employees: '23,000+'
      }
    ],
    bulldozers: [
      {
        id: 'caterpillar-bull',
        name: 'Caterpillar',
        logo: '/api/placeholder/120/60',
        brandColor: '#FFCD11',
        founded: 1925,
        headquarters: 'Peoria, Illinois',
        country: 'USA',
        specialties: ['D Series Dozers', 'Crawler Tractors', 'Pipeline Dozers'],
        rating: 4.9,
        description: 'Industry leader in bulldozer technology and innovation',
        website: 'caterpillar.com',
        marketShare: '35%',
        employees: '114,000+'
      },
      {
        id: 'komatsu-bull',
        name: 'Komatsu',
        logo: '/api/placeholder/120/60',
        brandColor: '#0066CC',
        founded: 1921,
        headquarters: 'Tokyo',
        country: 'Japan',
        specialties: ['D Series Dozers', 'Intelligent Dozers', 'Mining Dozers'],
        rating: 4.7,
        description: 'Advanced bulldozer technology with intelligent machine control',
        website: 'komatsu.com',
        marketShare: '18%',
        employees: '63,000+'
      },
      {
        id: 'john-deere-bull',
        name: 'John Deere',
        logo: '/api/placeholder/120/60',
        brandColor: '#367C2B',
        founded: 1837,
        headquarters: 'Moline, Illinois',
        country: 'USA',
        specialties: ['850K Series', '750K Series', '650K Series'],
        rating: 4.5,
        description: 'Reliable and durable bulldozers for various applications',
        website: 'deere.com',
        marketShare: '12%',
        employees: '77,000+'
      }
    ],
    loaders: [
      {
        id: 'caterpillar-load',
        name: 'Caterpillar',
        logo: '/api/placeholder/120/60',
        brandColor: '#FFCD11',
        founded: 1925,
        headquarters: 'Peoria, Illinois',
        country: 'USA',
        specialties: ['Wheel Loaders', 'Track Loaders', 'Backhoe Loaders'],
        rating: 4.8,
        description: 'Complete range of loaders for all construction needs',
        website: 'caterpillar.com',
        marketShare: '22%',
        employees: '114,000+'
      },
      {
        id: 'volvo-load',
        name: 'Volvo Construction Equipment',
        logo: '/api/placeholder/120/60',
        brandColor: '#1E3A8A',
        founded: 1832,
        headquarters: 'Gothenburg',
        country: 'Sweden',
        specialties: ['L Series Loaders', 'Compact Loaders', 'Articulated Haulers'],
        rating: 4.7,
        description: 'Swedish engineering excellence in loader technology',
        website: 'volvoce.com',
        marketShare: '15%',
        employees: '22,000+'
      },
      {
        id: 'jcb-load',
        name: 'JCB',
        logo: '/api/placeholder/120/60',
        brandColor: '#FFCD00',
        founded: 1945,
        headquarters: 'Staffordshire',
        country: 'UK',
        specialties: ['Backhoe Loaders', 'Wheel Loaders', 'Skid Steer Loaders'],
        rating: 4.6,
        description: 'British manufacturer famous for backhoe loaders',
        website: 'jcb.com',
        marketShare: '13%',
        employees: '15,000+'
      },
      {
        id: 'case-load',
        name: 'Case Construction Equipment',
        logo: '/api/placeholder/120/60',
        brandColor: '#FF6600',
        founded: 1842,
        headquarters: 'Burlington, Wisconsin',
        country: 'USA',
        specialties: ['Wheel Loaders', 'Compact Track Loaders', 'Skid Steers'],
        rating: 4.5,
        description: 'American heritage in construction equipment manufacturing',
        website: 'casece.com',
        marketShare: '11%',
        employees: '21,000+'
      }
    ],
    cranes: [
      {
        id: 'liebherr-crane',
        name: 'Liebherr',
        logo: '/api/placeholder/120/60',
        brandColor: '#004B87',
        founded: 1949,
        headquarters: 'Bulle',
        country: 'Switzerland',
        specialties: ['Mobile Cranes', 'Tower Cranes', 'Crawler Cranes'],
        rating: 4.9,
        description: 'World leader in crane technology and innovation',
        website: 'liebherr.com',
        marketShare: '28%',
        employees: '50,000+'
      },
      {
        id: 'terex-crane',
        name: 'Terex',
        logo: '/api/placeholder/120/60',
        brandColor: '#E31837',
        founded: 1933,
        headquarters: 'Norwalk, Connecticut',
        country: 'USA',
        specialties: ['All-Terrain Cranes', 'Rough Terrain Cranes', 'Tower Cranes'],
        rating: 4.6,
        description: 'Global manufacturer of lifting and material processing equipment',
        website: 'terex.com',
        marketShare: '16%',
        employees: '12,000+'
      },
      {
        id: 'tadano-crane',
        name: 'Tadano',
        logo: '/api/placeholder/120/60',
        brandColor: '#1E40AF',
        founded: 1948,
        headquarters: 'Takamatsu',
        country: 'Japan',
        specialties: ['All-Terrain Cranes', 'Rough Terrain Cranes', 'Truck Cranes'],
        rating: 4.7,
        description: 'Japanese precision in crane manufacturing',
        website: 'tadano.com',
        marketShare: '14%',
        employees: '4,500+'
      },
      {
        id: 'grove-crane',
        name: 'Grove (Manitowoc)',
        logo: '/api/placeholder/120/60',
        brandColor: '#8B0000',
        founded: 1947,
        headquarters: 'Shady Grove, Pennsylvania',
        country: 'USA',
        specialties: ['Mobile Cranes', 'All-Terrain Cranes', 'Industrial Cranes'],
        rating: 4.5,
        description: 'American excellence in mobile crane solutions',
        website: 'manitowoccranes.com',
        marketShare: '12%',
        employees: '11,000+'
      }
    ],
    trucks: [
      {
        id: 'caterpillar-truck',
        name: 'Caterpillar',
        logo: '/api/placeholder/120/60',
        brandColor: '#FFCD11',
        founded: 1925,
        headquarters: 'Peoria, Illinois',
        country: 'USA',
        specialties: ['Articulated Trucks', 'Mining Trucks', 'Rigid Dump Trucks'],
        rating: 4.8,
        description: 'Leading manufacturer of off-highway trucks',
        website: 'caterpillar.com',
        marketShare: '25%',
        employees: '114,000+'
      },
      {
        id: 'volvo-truck',
        name: 'Volvo Construction Equipment',
        logo: '/api/placeholder/120/60',
        brandColor: '#1E3A8A',
        founded: 1832,
        headquarters: 'Gothenburg',
        country: 'Sweden',
        specialties: ['Articulated Haulers', 'Rigid Haulers', 'Rock Trucks'],
        rating: 4.7,
        description: 'Swedish innovation in hauling solutions',
        website: 'volvoce.com',
        marketShare: '20%',
        employees: '22,000+'
      },
      {
        id: 'bell-truck',
        name: 'Bell Equipment',
        logo: '/api/placeholder/120/60',
        brandColor: '#FF6600',
        founded: 1954,
        headquarters: 'Richards Bay',
        country: 'South Africa',
        specialties: ['Articulated Dump Trucks', 'Rigid Dump Trucks', 'Loggers'],
        rating: 4.6,
        description: 'South African specialist in articulated dump trucks',
        website: 'bellequipment.com',
        marketShare: '8%',
        employees: '4,200+'
      }
    ],
    concrete: [
      {
        id: 'schwing-concrete',
        name: 'Schwing',
        logo: '/api/placeholder/120/60',
        brandColor: '#FF0000',
        founded: 1934,
        headquarters: 'Herne',
        country: 'Germany',
        specialties: ['Concrete Pumps', 'Truck Mixers', 'Batching Plants'],
        rating: 4.8,
        description: 'German leader in concrete equipment technology',
        website: 'schwing.com',
        marketShare: '22%',
        employees: '3,000+'
      },
      {
        id: 'putzmeister-concrete',
        name: 'Putzmeister',
        logo: '/api/placeholder/120/60',
        brandColor: '#004B87',
        founded: 1958,
        headquarters: 'Aichtal',
        country: 'Germany',
        specialties: ['Concrete Pumps', 'Placing Booms', 'Shotcrete Machines'],
        rating: 4.7,
        description: 'World-renowned concrete pumping solutions',
        website: 'putzmeister.com',
        marketShare: '18%',
        employees: '2,800+'
      },
      {
        id: 'sany-concrete',
        name: 'SANY',
        logo: '/api/placeholder/120/60',
        brandColor: '#E60012',
        founded: 1989,
        headquarters: 'Changsha',
        country: 'China',
        specialties: ['Concrete Pumps', 'Mixer Trucks', 'Batching Plants'],
        rating: 4.5,
        description: 'Chinese giant in concrete machinery manufacturing',
        website: 'sanyglobal.com',
        marketShare: '15%',
        employees: '25,000+'
      }
    ]
  };

  const categories = [
    { id: 'excavators', name: 'Excavators', icon: '🚜' },
    { id: 'bulldozers', name: 'Bulldozers', icon: '🚧' },
    { id: 'loaders', name: 'Loaders', icon: '🏗️' },
    { id: 'cranes', name: 'Cranes', icon: '🏗️' },
    { id: 'trucks', name: 'Trucks', icon: '🚛' },
    { id: 'concrete', name: 'Concrete Equipment', icon: '🏭' }
  ];

  const ManufacturerCard = ({ manufacturer }: { manufacturer: Manufacturer }) => (
    <Card className="h-full transition-all duration-300 hover:shadow-lg border-l-4" 
          style={{ borderLeftColor: manufacturer.brandColor }}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src={manufacturer.logo} 
                alt={`${manufacturer.name} logo`} 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <CardTitle className="text-lg">{manufacturer.name}</CardTitle>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                <MapPin className="w-4 h-4" />
                <span>{manufacturer.headquarters}</span>
                <Badge variant="secondary">{manufacturer.country}</Badge>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{manufacturer.rating}</span>
            </div>
            <div className="text-sm text-muted-foreground">Market Share: {manufacturer.marketShare}</div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{manufacturer.description}</p>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span>Founded: {manufacturer.founded}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Building2 className="w-4 h-4 text-muted-foreground" />
            <span>{manufacturer.employees} employees</span>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-2">Specialties:</h4>
          <div className="flex flex-wrap gap-1">
            {manufacturer.specialties.map((specialty, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex space-x-2 pt-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Globe className="w-4 h-4 mr-2" />
            Visit Website
          </Button>
          <Button variant="default" size="sm" className="flex-1">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Products
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-glow py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <Factory className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Equipment Manufacturers
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover leading construction equipment manufacturers worldwide. 
              Find the right brand for your construction needs.
            </p>
          </div>
        </section>

        {/* Popular Brands Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Popular brands</h2>
              <p className="text-muted-foreground max-w-4xl mx-auto text-lg">
                The industry's most trusted heavy equipment brands engineered for unmatched durability, 
                cutting-edge technology, and peak job-site performance year after year.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: 'Caterpillar', color: '#FFCD11' },
                { name: 'JCB', color: '#FFCD00' },
                { name: 'Volvo', color: '#1E3A8A' },
                { name: 'Komatsu', color: '#0066CC' },
                { name: 'Liebherr', color: '#004B87' },
                { name: 'JLG', color: '#FF6600' },
                { name: 'Hyundai', color: '#002C5F' },
                { name: 'Mercedes', color: '#000000' },
                { name: 'Bobcat', color: '#E31837' },
                { name: 'Mitsubishi', color: '#E60012' },
                { name: 'XCMG', color: '#FF6600' },
                { name: 'Tadano', color: '#1E40AF' },
                { name: 'Terex', color: '#E31837' },
                { name: 'Generac', color: '#FF6600' },
                { name: 'Toyota', color: '#E60012' },
                { name: 'SANY', color: '#E60012' },
                { name: 'Kato', color: '#1E40AF' },
                { name: 'Zoomlion', color: '#0066CC' },
                { name: 'Perkins', color: '#004B87' },
                { name: 'Dynapac', color: '#FFCD11' },
                { name: 'Demag', color: '#004B87' },
                { name: 'Atlas', color: '#FF6600' },
                { name: 'Doosan', color: '#1E40AF' },
                { name: 'Case', color: '#FF6600' }
              ].map((brand, index) => (
                <div key={index} className="flex items-center justify-center h-20 bg-gray-50 rounded-lg border hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                  <div className="text-center">
                    <div 
                      className="text-2xl font-bold group-hover:scale-110 transition-transform duration-200"
                      style={{ color: brand.color }}
                    >
                      {brand.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" className="text-muted-foreground">
                Show less
              </Button>
            </div>
          </div>
        </section>

        {/* Manufacturers Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="excavators" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full mb-8">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-xs md:text-sm">
                    <span className="mr-1">{category.icon}</span>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">{category.name} Manufacturers</h2>
                    <p className="text-muted-foreground">
                      Leading manufacturers specializing in {category.name.toLowerCase()} equipment
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {manufacturers[category.id]?.map((manufacturer) => (
                      <ManufacturerCard key={manufacturer.id} manufacturer={manufacturer} />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Global Manufacturers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Equipment Models</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">25M+</div>
                <div className="text-muted-foreground">Units Sold Annually</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Manufacturers;