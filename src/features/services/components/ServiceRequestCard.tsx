import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Calendar, 
  DollarSign, 
  Clock,
  User,
  Wrench,
  MessageSquare,
  Eye
} from 'lucide-react';

interface ServiceRequestCardProps {
  request: {
    id: string;
    title: string;
    category: string;
    equipmentType: string;
    location: string;
    budget: string;
    startDate: string;
    endDate?: string;
    priority: 'low' | 'medium' | 'high' | 'urgent';
    status: 'open' | 'in-progress' | 'completed' | 'cancelled';
    description: string;
    postedDate: string;
    proposals: number;
    clientName: string;
    clientRating: number;
  };
  onSubmitProposal?: (requestId: string) => void;
  onViewDetails?: (requestId: string) => void;
}

export const ServiceRequestCard: React.FC<ServiceRequestCardProps> = ({
  request,
  onSubmitProposal,
  onViewDetails
}) => {
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Urgent</Badge>;
      case 'high':
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">High</Badge>;
      case 'medium':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Medium</Badge>;
      case 'low':
        return <Badge variant="secondary">Low</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Open</Badge>;
      case 'in-progress':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">In Progress</Badge>;
      case 'completed':
        return <Badge variant="secondary">Completed</Badge>;
      case 'cancelled':
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const getDaysAgo = (dateString: string) => {
    const posted = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - posted.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-200 border-l-4 border-l-secondary/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <CardTitle className="text-lg line-clamp-1">{request.title}</CardTitle>
              {getPriorityBadge(request.priority)}
              {getStatusBadge(request.status)}
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {request.clientName}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {getDaysAgo(request.postedDate)} days ago
              </div>
            </div>
          </div>
          <Badge variant="outline" className="text-xs">
            {request.proposals} proposals
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Service Details */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center text-sm">
            <Wrench className="h-4 w-4 mr-2 text-muted-foreground" />
            <div>
              <span className="text-muted-foreground">Category: </span>
              <span className="font-medium">{request.category}</span>
            </div>
          </div>
          <div className="flex items-center text-sm">
            <Wrench className="h-4 w-4 mr-2 text-muted-foreground" />
            <div>
              <span className="text-muted-foreground">Equipment: </span>
              <span className="font-medium">{request.equipmentType}</span>
            </div>
          </div>
        </div>

        {/* Location and Budget */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{request.location}</span>
          </div>
          <div className="flex items-center text-sm">
            <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="font-medium">{request.budget}</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>Starts: {formatDate(request.startDate)}</span>
          </div>
          {request.endDate && (
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>Ends: {formatDate(request.endDate)}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {request.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 pt-2">
          <Button 
            className="flex-1" 
            size="sm"
            onClick={() => onSubmitProposal?.(request.id)}
            disabled={request.status !== 'open'}
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Submit Proposal
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onViewDetails?.(request.id)}
          >
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};