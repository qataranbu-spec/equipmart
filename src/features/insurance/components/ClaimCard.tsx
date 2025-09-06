import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign, User, FileText, Camera, Clock } from "lucide-react";
import { InsuranceClaim } from "../types";

interface ClaimCardProps {
  claim: InsuranceClaim;
  onViewDetails: (claimId: string) => void;
  onUploadDocuments?: (claimId: string) => void;
}

export function ClaimCard({ claim, onViewDetails, onUploadDocuments }: ClaimCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'under_review': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'investigating': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      case 'approved': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'denied': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'settled': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getLatestUpdate = () => {
    if (claim.timeline.length === 0) return null;
    return claim.timeline[claim.timeline.length - 1];
  };

  const getTotalDocuments = () => {
    const { photos, reports, receipts, estimates } = claim.documents;
    return photos.length + reports.length + receipts.length + estimates.length;
  };

  const latestUpdate = getLatestUpdate();

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2">
              Claim #{claim.claimNumber}
            </CardTitle>
            <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
              {claim.description}
            </p>
            <div className="flex items-center gap-2">
              <Badge className={getStatusColor(claim.status)}>
                {claim.status.replace('_', ' ').charAt(0).toUpperCase() + claim.status.slice(1).replace('_', ' ')}
              </Badge>
              <Badge variant="outline">{claim.claimType}</Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">
              ${claim.estimatedLoss.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">Estimated Loss</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Incident Date:</span>
            </div>
            <div className="font-medium">
              {new Date(claim.incidentDate).toLocaleDateString()}
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Reported:</span>
            </div>
            <div className="font-medium">
              {new Date(claim.reportedDate).toLocaleDateString()}
            </div>
          </div>
        </div>

        {claim.assignedAdjuster && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Assigned Adjuster:</span>
            </div>
            <div className="font-medium">{claim.assignedAdjuster}</div>
          </div>
        )}

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <FileText className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Documents:</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Camera className="h-3 w-3" />
              <span>{claim.documents.photos.length} Photos</span>
            </div>
            <div className="flex items-center gap-1">
              <FileText className="h-3 w-3" />
              <span>{claim.documents.reports.length} Reports</span>
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="h-3 w-3" />
              <span>{claim.documents.estimates.length} Estimates</span>
            </div>
          </div>
        </div>

        {latestUpdate && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Latest Update:</span>
            </div>
            <div className="text-sm">
              <div className="font-medium">{latestUpdate.event}</div>
              <div className="text-muted-foreground">
                {new Date(latestUpdate.date).toLocaleDateString()}
              </div>
              {latestUpdate.notes && (
                <div className="text-muted-foreground italic mt-1">
                  {latestUpdate.notes}
                </div>
              )}
            </div>
          </div>
        )}

        {claim.settlement && (
          <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-md border border-green-200 dark:border-green-800">
            <div className="text-sm font-medium text-green-800 dark:text-green-200 mb-1">
              Settlement Information
            </div>
            <div className="text-sm text-green-700 dark:text-green-300">
              Amount: ${claim.settlement.amount.toLocaleString()} via {claim.settlement.method}
            </div>
            <div className="text-xs text-green-600 dark:text-green-400">
              Paid on {new Date(claim.settlement.date).toLocaleDateString()}
            </div>
          </div>
        )}

        <div className="flex gap-2 pt-4 border-t">
          <Button 
            onClick={() => onViewDetails(claim.id)}
            variant="outline"
            className="flex-1"
          >
            View Details
          </Button>
          
          {onUploadDocuments && ['submitted', 'under_review', 'investigating'].includes(claim.status) && (
            <Button 
              onClick={() => onUploadDocuments(claim.id)}
              className="flex-1"
            >
              Upload Documents
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}