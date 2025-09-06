import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Shield, Phone, Mail, Globe } from "lucide-react";
import { InsuranceListing, InsuranceProvider } from "../types";

interface InsuranceCardProps {
  listing: InsuranceListing;
  provider: InsuranceProvider;
  onGetQuote: (listingId: string) => void;
  onViewDetails: (listingId: string) => void;
}

export function InsuranceCard({ listing, provider, onGetQuote, onViewDetails }: InsuranceCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2">{listing.title}</CardTitle>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-medium text-sm">{provider.name}</span>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-muted-foreground">{provider.rating}</span>
              </div>
              <Badge variant="outline" className="text-xs">
                {provider.financialStrength} Rated
              </Badge>
            </div>
            <Badge variant="secondary" className="mb-2">
              {listing.coverageType}
            </Badge>
          </div>
          <Shield className="h-8 w-8 text-primary" />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {listing.description}
        </p>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Starting Premium:</span>
            <span className="font-medium">${listing.startingPremium.toLocaleString()}/year</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Coverage Range:</span>
            <span className="font-medium">
              ${listing.minimumCoverage.toLocaleString()} - ${listing.maximumCoverage.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">Key Features:</div>
          <div className="flex flex-wrap gap-1">
            {listing.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {listing.features.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{listing.features.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">Coverage Categories:</div>
          <div className="flex flex-wrap gap-1">
            {listing.equipmentCategories.slice(0, 2).map((category, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {category}
              </Badge>
            ))}
            {listing.equipmentCategories.length > 2 && (
              <Badge variant="secondary" className="text-xs">
                +{listing.equipmentCategories.length - 2} more
              </Badge>
            )}
          </div>
        </div>

        {listing.highlights.length > 0 && (
          <div className="space-y-2">
            <div className="text-sm font-medium text-primary">Special Offers:</div>
            <div className="flex flex-wrap gap-1">
              {listing.highlights.slice(0, 2).map((highlight, index) => (
                <Badge key={index} variant="default" className="text-xs">
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="border-t pt-4">
          <div className="text-xs text-muted-foreground mb-3">Provider Contact:</div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              <span>{provider.contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-3 w-3" />
              <span>{provider.contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="h-3 w-3" />
              <span>{provider.contactInfo.website}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button 
            onClick={() => onGetQuote(listing.id)}
            className="flex-1"
          >
            Get Quote
          </Button>
          <Button 
            variant="outline" 
            onClick={() => onViewDetails(listing.id)}
            className="flex-1"
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}