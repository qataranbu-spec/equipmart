import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Calendar, MapPin, Phone, Mail, DollarSign } from 'lucide-react';
import { RentalBooking } from '../types';
import { format } from 'date-fns';

interface BookingCardProps {
  booking: RentalBooking;
  onAction?: (action: string, bookingId: string) => void;
  showActions?: boolean;
  viewType?: 'renter' | 'owner';
}

export default function BookingCard({ 
  booking, 
  onAction, 
  showActions = true,
  viewType = 'renter'
}: BookingCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'secondary';
      case 'confirmed': return 'default';
      case 'active': return 'default';
      case 'completed': return 'default';
      case 'cancelled': return 'destructive';
      default: return 'secondary';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'default';
      case 'partial': return 'secondary';
      case 'pending': return 'destructive';
      case 'refunded': return 'secondary';
      default: return 'secondary';
    }
  };

  const getActionButtons = () => {
    if (!showActions) return null;

    switch (booking.status) {
      case 'pending':
        return viewType === 'owner' ? (
          <>
            <Button
              size="sm"
              onClick={() => onAction?.('confirm', booking.id)}
            >
              Confirm
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onAction?.('decline', booking.id)}
            >
              Decline
            </Button>
          </>
        ) : (
          <Button
            size="sm"
            variant="outline"
            onClick={() => onAction?.('cancel', booking.id)}
          >
            Cancel Request
          </Button>
        );
      case 'confirmed':
        return (
          <>
            <Button
              size="sm"
              onClick={() => onAction?.('start', booking.id)}
            >
              Mark as Started
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onAction?.('cancel', booking.id)}
            >
              Cancel
            </Button>
          </>
        );
      case 'active':
        return (
          <Button
            size="sm"
            onClick={() => onAction?.('complete', booking.id)}
          >
            Mark Complete
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{booking.equipment.title}</CardTitle>
          <div className="flex gap-2">
            <Badge variant={getStatusColor(booking.status)}>
              {booking.status}
            </Badge>
            <Badge variant={getPaymentStatusColor(booking.paymentStatus)}>
              {booking.paymentStatus}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4" />
              <span>
                {format(new Date(booking.startDate), 'MMM dd, yyyy')} - 
                {format(new Date(booking.endDate), 'MMM dd, yyyy')}
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              <span>{booking.deliveryAddress || booking.equipment.location}</span>
            </div>

            <div className="space-y-1">
              <div className="text-sm font-medium">
                {viewType === 'owner' ? 'Renter' : 'Owner'} Details:
              </div>
              <div className="text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3" />
                  {viewType === 'owner' ? booking.renterEmail : booking.equipment.owner.name}
                </div>
                {viewType === 'owner' && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-3 w-3" />
                    {booking.renterPhone}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <div className="text-muted-foreground">Duration</div>
                <div className="font-medium">{booking.totalDays} days</div>
              </div>
              <div>
                <div className="text-muted-foreground">Daily Rate</div>
                <div className="font-medium">${booking.dailyRate}/day</div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal:</span>
                <span>${booking.totalAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Security Deposit:</span>
                <span>${booking.securityDeposit.toLocaleString()}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-medium">
                <span>Total:</span>
                <span className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  {(booking.totalAmount + booking.securityDeposit).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {booking.specialRequirements && (
          <div>
            <div className="text-sm font-medium mb-1">Special Requirements:</div>
            <p className="text-sm text-muted-foreground">{booking.specialRequirements}</p>
          </div>
        )}

        {showActions && (
          <div className="flex gap-2 pt-2">
            {getActionButtons()}
          </div>
        )}
      </CardContent>
    </Card>
  );
}