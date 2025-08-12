import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Star, 
  MapPin, 
  Clock, 
  Shield, 
  Award, 
  Phone, 
  Calendar,
  DollarSign,
  MessageCircle,
  Verified
} from 'lucide-react';

interface ServiceProviderCardProps {
  provider: {
    id: string;
    name: string;
    avatar?: string;
    specialization: string;
    rating: number;
    reviews: number;
    location: string;
    experience: string;
    verified: boolean;
    responseTime: string;
    hourlyRate: number;
    availability: 'available' | 'busy' | 'offline';
    services: string[];
    certifications: string[];
    completedJobs: number;
    description: string;
  };
  onContact?: (providerId: string) => void;
  onViewProfile?: (providerId: string) => void;
  onSchedule?: (providerId: string) => void;
}

export const ServiceProviderCard: React.FC<ServiceProviderCardProps> = ({
  provider,
  onContact,
  onViewProfile,
  onSchedule
}) => {
  const getAvailabilityBadge = (status: string) => {
    switch (status) {
      case 'available':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Available</Badge>;
      case 'busy':
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Busy</Badge>;
      case 'offline':
        return <Badge variant="secondary">Offline</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-200 border-l-4 border-l-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={provider.avatar} alt={provider.name} />
              <AvatarFallback>{provider.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-lg">{provider.name}</h3>
                {provider.verified && (
                  <Verified className="h-4 w-4 text-blue-500" />
                )}
              </div>
              <p className="text-sm text-muted-foreground">{provider.specialization}</p>
            </div>
          </div>
          {getAvailabilityBadge(provider.availability)}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Rating and Stats */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-medium">{provider.rating}</span>
              <span className="text-sm text-muted-foreground ml-1">({provider.reviews})</span>
            </div>
            <Badge variant="outline" className="text-xs">
              {provider.completedJobs} jobs
            </Badge>
          </div>
          <div className="flex items-center text-sm">
            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
            <span className="font-medium">${provider.hourlyRate}/hr</span>
          </div>
        </div>

        {/* Location and Response Time */}
        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            {provider.location}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-2" />
            Responds in {provider.responseTime}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Award className="h-4 w-4 mr-2" />
            {provider.experience} experience
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {provider.description}
        </p>

        {/* Services */}
        <div className="space-y-2">
          <div className="flex flex-wrap gap-1">
            {provider.services.slice(0, 3).map((service, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {service}
              </Badge>
            ))}
            {provider.services.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{provider.services.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Certifications */}
        {provider.certifications.length > 0 && (
          <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4 text-green-600" />
            <span className="text-xs text-muted-foreground">
              {provider.certifications.join(', ')}
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-2 pt-2">
          <Button 
            className="flex-1" 
            size="sm"
            onClick={() => onContact?.(provider.id)}
          >
            <Phone className="h-4 w-4 mr-2" />
            Contact
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onSchedule?.(provider.id)}
          >
            <Calendar className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onViewProfile?.(provider.id)}
          >
            <MessageCircle className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};