import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  Heart, 
  Eye, 
  MapPin, 
  Calendar,
  DollarSign,
  Star,
  MessageSquare,
  ShoppingCart,
  Truck
} from "lucide-react";
import { mockEquipmentListings } from "@/features/financing/data/marketplaceMockData";

export default function BuyerMarketplace() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [conditionFilter, setConditionFilter] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  const getConditionColor = (condition: string) => {
    const colors = {
      "Excellent": "text-success bg-success/10 border-success/20",
      "Good": "text-blue-600 bg-blue-50 border-blue-200",
      "Fair": "text-warning bg-warning/10 border-warning/20",
      "Poor": "text-destructive bg-destructive/10 border-destructive/20",
      "Repossessed": "text-purple-600 bg-purple-50 border-purple-200"
    };
    return colors[condition as keyof typeof colors] || "text-muted-foreground bg-muted";
  };

  const filteredListings = mockEquipmentListings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || listing.equipmentType === categoryFilter;
    const matchesCondition = conditionFilter === "all" || listing.condition === conditionFilter;
    
    // Price range filtering
    let matchesPrice = true;
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(p => parseInt(p));
      matchesPrice = listing.price >= min && (max ? listing.price <= max : true);
    }
    
    return matchesSearch && matchesCategory && matchesCondition && matchesPrice;
  });

  const EquipmentCard = ({ listing }: { listing: typeof mockEquipmentListings[0] }) => (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {listing.brand} {listing.model}
            </CardTitle>
            <CardDescription className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {listing.year}
            </CardDescription>
          </div>
          <Button variant="ghost" size="sm">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
          <img 
            src="/placeholder.svg" 
            alt={listing.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className={getConditionColor(listing.condition)}>
              {listing.condition}
            </Badge>
            {listing.isRepossessed && (
              <Badge variant="outline" className="text-purple-600 bg-purple-50">
                Repossessed
              </Badge>
            )}
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{listing.location.city}, {listing.location.state}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Truck className="h-4 w-4" />
              <span className="text-sm">{listing.seller.name}</span>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-current text-yellow-400" />
                <span className="text-xs">{listing.seller.rating}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-primary">
                ${listing.price.toLocaleString()}
              </div>
              {listing.financingOptions?.available && (
                <div className="text-sm text-muted-foreground">
                  From ${Math.round(listing.price * 0.025).toLocaleString()}/mo
                </div>
              )}
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Eye className="h-4 w-4" />
              <span className="text-sm">{listing.viewCount}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button className="flex-1">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Make Offer
            </Button>
            <Button variant="outline">
              <MessageSquare className="h-4 w-4 mr-2" />
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Equipment Marketplace</h1>
        <p className="text-muted-foreground">Find and purchase construction equipment from verified sellers</p>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search equipment by brand, model, or type..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Excavator">Excavators</SelectItem>
                  <SelectItem value="Bulldozer">Bulldozers</SelectItem>
                  <SelectItem value="Wheel Loader">Wheel Loaders</SelectItem>
                  <SelectItem value="Crane">Cranes</SelectItem>
                  <SelectItem value="Dump Truck">Dump Trucks</SelectItem>
                </SelectContent>
              </Select>

              <Select value={conditionFilter} onValueChange={setConditionFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Conditions</SelectItem>
                  <SelectItem value="Excellent">Excellent</SelectItem>
                  <SelectItem value="Good">Good</SelectItem>
                  <SelectItem value="Fair">Fair</SelectItem>
                  <SelectItem value="Poor">Poor</SelectItem>
                  <SelectItem value="Repossessed">Repossessed</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="0-50000">Under $50K</SelectItem>
                  <SelectItem value="50000-100000">$50K - $100K</SelectItem>
                  <SelectItem value="100000-200000">$100K - $200K</SelectItem>
                  <SelectItem value="200000-9999999">Above $200K</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex gap-2 ml-auto">
                <Button 
                  variant={viewMode === "grid" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  Grid
                </Button>
                <Button 
                  variant={viewMode === "list" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  List
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-muted-foreground">
            Showing {filteredListings.length} of {mockEquipmentListings.length} results
          </p>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((listing) => (
              <EquipmentCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredListings.map((listing) => (
              <Card key={listing.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-6">
                    <div className="w-48 h-32 bg-muted rounded-lg flex-shrink-0">
                      <img 
                        src="/placeholder.svg" 
                        alt={listing.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold">{listing.brand} {listing.model}</h3>
                          <p className="text-muted-foreground">{listing.year} • {listing.equipmentType}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className={getConditionColor(listing.condition)}>
                          {listing.condition}
                        </Badge>
                        {listing.isRepossessed && (
                          <Badge variant="outline" className="text-purple-600 bg-purple-50">
                            Repossessed
                          </Badge>
                        )}
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{listing.location.city}, {listing.location.state}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xl font-bold text-primary">
                            ${listing.price.toLocaleString()}
                          </div>
                          {listing.financingOptions?.available && (
                            <div className="text-sm text-muted-foreground">
                              Financing available from ${Math.round(listing.price * 0.025).toLocaleString()}/mo
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button>
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Make Offer
                          </Button>
                          <Button variant="outline">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Contact
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}