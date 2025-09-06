import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Grid, List, Shield, TrendingUp, Users, Star } from "lucide-react";
import { InsuranceCard } from "../../components/InsuranceCard";
import { mockInsuranceListings, mockInsuranceProviders } from "../../data/mockInsuranceData";

export default function InsuranceMarketplace() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCoverageType, setSelectedCoverageType] = useState<string>("all");
  const [selectedProvider, setSelectedProvider] = useState<string>("all");
  const [premiumRange, setPremiumRange] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const coverageTypes = Array.from(new Set(mockInsuranceListings.map(listing => listing.coverageType)));
  const providers = mockInsuranceProviders.map(provider => ({ id: provider.id, name: provider.name }));

  const filteredListings = mockInsuranceListings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCoverage = selectedCoverageType === "all" || listing.coverageType === selectedCoverageType;
    const matchesProvider = selectedProvider === "all" || listing.providerId === selectedProvider;
    const matchesPremium = premiumRange === "all" || 
      (premiumRange === "under-1000" && listing.startingPremium < 1000) ||
      (premiumRange === "1000-2500" && listing.startingPremium >= 1000 && listing.startingPremium <= 2500) ||
      (premiumRange === "over-2500" && listing.startingPremium > 2500);

    return matchesSearch && matchesCoverage && matchesProvider && matchesPremium;
  });

  const handleGetQuote = (listingId: string) => {
    console.log("Get quote for listing:", listingId);
    // Handle quote request
  };

  const handleViewDetails = (listingId: string) => {
    console.log("View details for listing:", listingId);
    // Handle view details
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Equipment Insurance Marketplace</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Compare insurance policies from top providers and find the perfect coverage for your construction equipment.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Insurance Providers</p>
                <p className="text-2xl font-bold">{mockInsuranceProviders.length}</p>
              </div>
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Available Policies</p>
                <p className="text-2xl font-bold">{mockInsuranceListings.length}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Average Rating</p>
                <p className="text-2xl font-bold">4.7</p>
              </div>
              <Star className="h-8 w-8 text-primary fill-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Satisfied Customers</p>
                <p className="text-2xl font-bold">15K+</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Search & Filter Insurance Policies
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search insurance policies, coverage types, or providers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={selectedCoverageType} onValueChange={setSelectedCoverageType}>
              <SelectTrigger>
                <SelectValue placeholder="Coverage Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Coverage Types</SelectItem>
                {coverageTypes.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedProvider} onValueChange={setSelectedProvider}>
              <SelectTrigger>
                <SelectValue placeholder="Insurance Provider" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Providers</SelectItem>
                {providers.map(provider => (
                  <SelectItem key={provider.id} value={provider.id}>{provider.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={premiumRange} onValueChange={setPremiumRange}>
              <SelectTrigger>
                <SelectValue placeholder="Premium Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Premiums</SelectItem>
                <SelectItem value="under-1000">Under $1,000</SelectItem>
                <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                <SelectItem value="over-2500">Over $2,500</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="flex-1"
              >
                <Grid className="h-4 w-4 mr-2" />
                Grid
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="flex-1"
              >
                <List className="h-4 w-4 mr-2" />
                List
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-medium">{filteredListings.length} Insurance Policies Found</span>
            {(searchTerm || selectedCoverageType !== "all" || selectedProvider !== "all" || premiumRange !== "all") && (
              <Badge variant="secondary">Filtered</Badge>
            )}
          </div>
          <Select defaultValue="recommended">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">Recommended</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="coverage">Maximum Coverage</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Insurance Listings */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map(listing => {
              const provider = mockInsuranceProviders.find(p => p.id === listing.providerId)!;
              return (
                <InsuranceCard
                  key={listing.id}
                  listing={listing}
                  provider={provider}
                  onGetQuote={handleGetQuote}
                  onViewDetails={handleViewDetails}
                />
              );
            })}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredListings.map(listing => {
              const provider = mockInsuranceProviders.find(p => p.id === listing.providerId)!;
              return (
                <InsuranceCard
                  key={listing.id}
                  listing={listing}
                  provider={provider}
                  onGetQuote={handleGetQuote}
                  onViewDetails={handleViewDetails}
                />
              );
            })}
          </div>
        )}
      </div>

      {filteredListings.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No Insurance Policies Found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or filters to find the right insurance coverage.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}