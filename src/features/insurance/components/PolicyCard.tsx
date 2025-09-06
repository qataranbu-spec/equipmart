import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign, Shield, AlertCircle, FileText } from "lucide-react";
import { InsurancePolicy, InsuranceProvider } from "../types";

interface PolicyCardProps {
  policy: InsurancePolicy;
  provider?: InsuranceProvider;
  onViewDetails: (policyId: string) => void;
  onFileClaim?: (policyId: string) => void;
  onMakePayment?: (policyId: string) => void;
}

export function PolicyCard({ policy, provider, onViewDetails, onFileClaim, onMakePayment }: PolicyCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'expired': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'cancelled': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const isExpiringSoon = () => {
    const endDate = new Date(policy.endDate);
    const now = new Date();
    const daysUntilExpiry = Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return daysUntilExpiry <= 30 && daysUntilExpiry > 0;
  };

  const getCoverageIcons = () => {
    const coverage = policy.coverageDetails;
    const icons = [];
    
    if (coverage.theft) icons.push({ icon: Shield, label: "Theft" });
    if (coverage.vandalism) icons.push({ icon: Shield, label: "Vandalism" });
    if (coverage.equipment_breakdown) icons.push({ icon: AlertCircle, label: "Breakdown" });
    if (coverage.liability) icons.push({ icon: Shield, label: "Liability" });
    
    return icons;
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2">
              Policy #{policy.policyNumber}
            </CardTitle>
            {provider && (
              <p className="text-sm text-muted-foreground mb-2">{provider.name}</p>
            )}
            <div className="flex items-center gap-2">
              <Badge className={getStatusColor(policy.status)}>
                {policy.status.charAt(0).toUpperCase() + policy.status.slice(1)}
              </Badge>
              <Badge variant="outline">{policy.coverageType}</Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">
              ${policy.coverageLimit.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">Coverage Limit</div>
          </div>
        </div>
        
        {isExpiringSoon() && (
          <div className="flex items-center gap-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-md border border-yellow-200 dark:border-yellow-800">
            <AlertCircle className="h-4 w-4 text-yellow-600" />
            <span className="text-sm text-yellow-800 dark:text-yellow-200">
              Policy expires in {Math.ceil((new Date(policy.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days
            </span>
          </div>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Premium:</span>
            </div>
            <div className="font-medium">
              ${policy.premium.toLocaleString()}/{policy.paymentFrequency}
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Deductible:</span>
            </div>
            <div className="font-medium">${policy.deductible.toLocaleString()}</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Policy Period:</span>
          </div>
          <div className="font-medium">
            {new Date(policy.startDate).toLocaleDateString()} - {new Date(policy.endDate).toLocaleDateString()}
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">Coverage Details:</div>
          <div className="flex flex-wrap gap-2">
            {getCoverageIcons().map((item, index) => (
              <div key={index} className="flex items-center gap-1 text-xs bg-secondary/50 rounded-md px-2 py-1">
                <item.icon className="h-3 w-3" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {policy.documents.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Documents:</span>
            </div>
            <div className="text-sm">{policy.documents.length} document(s) available</div>
          </div>
        )}

        <div className="flex gap-2 pt-4 border-t">
          <Button 
            onClick={() => onViewDetails(policy.id)}
            variant="outline"
            className="flex-1"
          >
            View Details
          </Button>
          
          {policy.status === 'active' && onFileClaim && (
            <Button 
              onClick={() => onFileClaim(policy.id)}
              variant="outline"
              className="flex-1"
            >
              File Claim
            </Button>
          )}
          
          {policy.status === 'active' && onMakePayment && (
            <Button 
              onClick={() => onMakePayment(policy.id)}
              className="flex-1"
            >
              Make Payment
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}