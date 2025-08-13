import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, MapPin, Clock, Shield, Truck } from 'lucide-react';
import { RentalEquipment } from '../types';
import { Link } from 'react-router-dom';

interface RentalCardProps {
  equipment: RentalEquipment;
  onBook?: (id: string) => void;
  showOwner?: boolean;
}

export default function RentalCard({ equipment, onBook, showOwner = true }: RentalCardProps) {
  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'available': return 'default';
      case 'rented': return 'destructive';
      case 'maintenance': return 'secondary';
      default: return 'default';
    }
  };

  const formatRate = (rate: number, period: string) => {
    return `$${rate.toLocaleString()}/${period}`;
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <img
          src={equipment.images[0]}
          alt={equipment.title}
          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
        />
        <Badge 
          variant={getAvailabilityColor(equipment.availability)}
          className="absolute top-2 left-2"
        >
          {equipment.availability}
        </Badge>
        {equipment.deliveryAvailable && (
          <Badge variant="outline" className="absolute top-2 right-2 bg-background/90">
            <Truck className="h-3 w-3 mr-1" />
            Delivery
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg line-clamp-1">{equipment.title}</h3>
            <p className="text-sm text-muted-foreground">{equipment.category}</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {equipment.location}
          </div>

          <div className="grid grid-cols-3 gap-2 text-sm">
            <div className="text-center">
              <div className="font-semibold text-primary">{formatRate(equipment.dailyRate, 'day')}</div>
              <div className="text-xs text-muted-foreground">Daily</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-primary">{formatRate(equipment.weeklyRate, 'week')}</div>
              <div className="text-xs text-muted-foreground">Weekly</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-primary">{formatRate(equipment.monthlyRate, 'month')}</div>
              <div className="text-xs text-muted-foreground">Monthly</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{equipment.minRentalPeriod}-{equipment.maxRentalPeriod} days</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="h-4 w-4" />
              <span>${equipment.securityDeposit.toLocaleString()}</span>
            </div>
          </div>

          {showOwner && (
            <div className="flex items-center justify-between pt-2 border-t">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>{equipment.owner.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-sm">{equipment.owner.name}</div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <span className="text-xs">{equipment.owner.rating}</span>
                    {equipment.owner.verified && (
                      <Badge variant="secondary" className="text-xs">Verified</Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-x-2">
        <Button asChild variant="outline" className="flex-1">
          <Link to={`/rentals/${equipment.id}`}>View Details</Link>
        </Button>
        <Button 
          onClick={() => onBook?.(equipment.id)} 
          className="flex-1"
          disabled={equipment.availability !== 'available'}
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}