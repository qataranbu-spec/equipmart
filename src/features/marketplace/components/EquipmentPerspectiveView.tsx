import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Wrench, 
  Clock,
  Star,
  FileText,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Target
} from 'lucide-react';

interface EquipmentPerspectiveViewProps {
  equipment: any;
  userRole: 'buyer' | 'seller' | 'financier' | 'insurance' | 'contractor' | 'expert';
}

const EquipmentPerspectiveView: React.FC<EquipmentPerspectiveViewProps> = ({ 
  equipment, 
  userRole 
}) => {
  const buyerPerspective = () => (
    <div className="space-y-6">
      {/* Purchase Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            Purchase Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="text-sm font-medium">Market Value Range</span>
              <div className="text-lg font-bold text-green-600">
                ${(equipment.price * 0.85).toLocaleString()} - ${(equipment.price * 1.15).toLocaleString()}
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium">Price Rating</span>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Good Deal
              </Badge>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Depreciation Rate</span>
              <span className="text-muted-foreground">12% annually</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Resale (3 years)</span>
              <span className="font-medium">${(equipment.price * 0.65).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Cost of Ownership</span>
              <span className="font-medium">${(equipment.price * 1.4).toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Financing Options */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            Financing Options
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Bank Loan (5 years)</h4>
              <div className="text-2xl font-bold text-primary">$1,842/mo</div>
              <p className="text-sm text-muted-foreground">4.5% APR</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Equipment Lease</h4>
              <div className="text-2xl font-bold text-primary">$1,590/mo</div>
              <p className="text-sm text-muted-foreground">3 year lease</p>
            </div>
          </div>
          <Button className="w-full">
            Get Pre-Approved
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const sellerPerspective = () => (
    <div className="space-y-6">
      {/* Market Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Market Performance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{equipment.views}</div>
              <p className="text-sm text-muted-foreground">Total Views</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">12</div>
              <p className="text-sm text-muted-foreground">Inquiries</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3</div>
              <p className="text-sm text-muted-foreground">Offers</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Average Market Price</span>
              <span className="font-medium">${equipment.price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Time on Market</span>
              <span className="text-muted-foreground">15 days</span>
            </div>
            <div className="flex justify-between">
              <span>Price Competitiveness</span>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Competitive
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Optimization Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Listing Optimization</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="text-sm">High-quality images uploaded</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="text-sm">Detailed specifications provided</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
            <span className="text-sm">Add maintenance records for better trust</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const financierPerspective = () => (
    <div className="space-y-6">
      {/* Risk Assessment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Risk Assessment
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="text-sm font-medium">Risk Score</span>
              <div className="text-2xl font-bold text-green-600">7.8/10</div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Low Risk
              </Badge>
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium">Loan-to-Value</span>
              <div className="text-lg font-bold">75%</div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Equipment Age</span>
              <span className="text-muted-foreground">{new Date().getFullYear() - equipment.year} years</span>
            </div>
            <div className="flex justify-between">
              <span>Operating Hours</span>
              <span className="text-muted-foreground">{equipment.hours.toLocaleString()} hrs</span>
            </div>
            <div className="flex justify-between">
              <span>Resale Market</span>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Strong
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Financing Options */}
      <Card>
        <CardHeader>
          <CardTitle>Financing Products</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 border rounded-lg">
            <h4 className="font-medium">Equipment Loan</h4>
            <p className="text-sm text-muted-foreground">Up to 80% LTV, 5-7 years</p>
            <div className="text-lg font-bold text-primary">4.25% - 6.75%</div>
          </div>
          <div className="p-3 border rounded-lg">
            <h4 className="font-medium">Equipment Lease</h4>
            <p className="text-sm text-muted-foreground">2-5 years, tax benefits</p>
            <div className="text-lg font-bold text-primary">3.95% - 5.50%</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const contractorPerspective = () => (
    <div className="space-y-6">
      {/* Project Suitability */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Project Suitability
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Best For:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Medium-scale excavation</li>
                <li>• Foundation work</li>
                <li>• Trenching projects</li>
                <li>• Site preparation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Productivity:</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Daily output</span>
                  <span className="text-sm font-medium">800-1200 m³</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Fuel consumption</span>
                  <span className="text-sm font-medium">25-35 L/hr</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ROI Calculator */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            ROI Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="text-sm font-medium">Monthly Revenue Potential</span>
              <div className="text-2xl font-bold text-green-600">$18,500</div>
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium">Payback Period</span>
              <div className="text-lg font-bold">4.6 years</div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Operating costs/month</span>
              <span className="text-muted-foreground">$4,200</span>
            </div>
            <div className="flex justify-between">
              <span>Utilization rate needed</span>
              <span className="font-medium">65%</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const expertPerspective = () => (
    <div className="space-y-6">
      {/* Technical Assessment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-primary" />
            Technical Assessment
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="text-sm font-medium">Overall Condition</span>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm">4.0/5</span>
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium">Maintenance Score</span>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Well Maintained
              </Badge>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium">Key Observations:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Engine hours are reasonable for the year</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Hydraulic system appears well-maintained</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                <span>Recommend inspection of undercarriage</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Market Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Market Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Market demand</span>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                High
              </Badge>
            </div>
            <div className="flex justify-between">
              <span>Price vs. market</span>
              <span className="text-green-600 font-medium">Fair value</span>
            </div>
            <div className="flex justify-between">
              <span>Investment grade</span>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                A-
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const insurancePerspective = () => (
    <div className="space-y-6">
      {/* Risk Profile */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Insurance Risk Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="text-sm font-medium">Risk Category</span>
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                Medium Risk
              </Badge>
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium">Premium Estimate</span>
              <div className="text-lg font-bold">$2,850/year</div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Theft risk</span>
              <span className="text-yellow-600">Medium</span>
            </div>
            <div className="flex justify-between">
              <span>Damage history</span>
              <span className="text-green-600">Clean</span>
            </div>
            <div className="flex justify-between">
              <span>Usage category</span>
              <span className="text-muted-foreground">Commercial</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Coverage Options */}
      <Card>
        <CardHeader>
          <CardTitle>Coverage Options</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 border rounded-lg">
            <h4 className="font-medium">Comprehensive Coverage</h4>
            <p className="text-sm text-muted-foreground">Full replacement value protection</p>
            <div className="text-lg font-bold text-primary">$3,200/year</div>
          </div>
          <div className="p-3 border rounded-lg">
            <h4 className="font-medium">Basic Coverage</h4>
            <p className="text-sm text-muted-foreground">Essential protection only</p>
            <div className="text-lg font-bold text-primary">$1,850/year</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderPerspective = () => {
    switch (userRole) {
      case 'buyer':
        return buyerPerspective();
      case 'seller':
        return sellerPerspective();
      case 'financier':
        return financierPerspective();
      case 'contractor':
        return contractorPerspective();
      case 'expert':
        return expertPerspective();
      case 'insurance':
        return insurancePerspective();
      default:
        return buyerPerspective();
    }
  };

  return (
    <div className="space-y-6">
      {/* Role Selector */}
      <Card>
        <CardHeader>
          <CardTitle>View as</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={userRole} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
              <TabsTrigger value="buyer">Buyer</TabsTrigger>
              <TabsTrigger value="seller">Seller</TabsTrigger>
              <TabsTrigger value="financier">Financier</TabsTrigger>
              <TabsTrigger value="insurance">Insurance</TabsTrigger>
              <TabsTrigger value="contractor">Contractor</TabsTrigger>
              <TabsTrigger value="expert">Expert</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>

      {/* Role-specific content */}
      {renderPerspective()}
    </div>
  );
};

export default EquipmentPerspectiveView;