import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, MousePointer, Phone, Mail, Globe } from 'lucide-react';
import { Advertisement } from '../types';

interface AdCardProps {
  ad: Advertisement;
  onContact?: (ad: Advertisement) => void;
  showAnalytics?: boolean;
}

export const AdCard: React.FC<AdCardProps> = ({ ad, onContact, showAnalytics = false }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'paused': return 'bg-gray-500';
      case 'expired': return 'bg-red-500';
      case 'rejected': return 'bg-red-600';
      default: return 'bg-gray-400';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'featured': return 'bg-purple-500';
      case 'banner': return 'bg-blue-500';
      case 'sponsored': return 'bg-orange-500';
      case 'premium': return 'bg-gold-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{ad.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{ad.advertiser}</p>
          </div>
          <div className="flex gap-2">
            <Badge className={getStatusColor(ad.status)}>
              {ad.status.charAt(0).toUpperCase() + ad.status.slice(1)}
            </Badge>
            <Badge className={getTypeColor(ad.type)}>
              {ad.type.charAt(0).toUpperCase() + ad.type.slice(1)}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {ad.images.length > 0 && (
          <img 
            src={ad.images[0]} 
            alt={ad.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        )}
        
        <p className="text-sm mb-4 line-clamp-3">{ad.description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <Badge variant="outline">{ad.category}</Badge>
          <span className="font-semibold text-lg">${ad.price.toLocaleString()}</span>
        </div>
        
        {showAnalytics && (
          <div className="flex justify-between text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              {ad.impressions.toLocaleString()}
            </div>
            <div className="flex items-center gap-1">
              <MousePointer className="h-4 w-4" />
              {ad.clicks.toLocaleString()}
            </div>
            <div>
              CTR: {((ad.clicks / ad.impressions) * 100).toFixed(2)}%
            </div>
          </div>
        )}
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => onContact && onContact(ad)}
          >
            <Phone className="h-4 w-4 mr-2" />
            Contact
          </Button>
          {ad.contactInfo.website && (
            <Button variant="outline" size="sm">
              <Globe className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};