import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, TrendingUp, Users, FileText, Plus, AlertCircle, DollarSign, Activity } from "lucide-react";
import { mockInsurancePolicies, mockInsuranceClaims, mockInsuranceQuotes } from "../../data/mockInsuranceData";

export default function ProviderDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Simulate provider data (in real app, this would be filtered by provider ID)
  const providerPolicies = mockInsurancePolicies;
  const providerClaims = mockInsuranceClaims;
  const providerQuotes = mockInsuranceQuotes;

  const activePolicies = providerPolicies.filter(policy => policy.status === 'active');
  const pendingClaims = providerClaims.filter(claim => 
    ['submitted', 'under_review', 'investigating'].includes(claim.status)
  );
  const pendingQuotes = providerQuotes.filter(quote => quote.status === 'pending');

  const totalPremiums = activePolicies.reduce((sum, policy) => {
    const multiplier = policy.paymentFrequency === 'monthly' ? 12 : 
                      policy.paymentFrequency === 'quarterly' ? 4 : 1;
    return sum + (policy.premium * multiplier);
  }, 0);

  const claimsRatio = providerClaims.length > 0 ? 
    (providerClaims.filter(c => c.status === 'approved' || c.status === 'settled').length / providerClaims.length * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Provider Dashboard</h1>
          <p className="text-muted-foreground">Manage your insurance policies, claims, and business performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Create Policy
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Product
          </Button>
        </div>
      </div>

      {/* Alert Cards */}
      {(pendingClaims.length > 0 || pendingQuotes.length > 0) && (
        <div className="space-y-4">
          {pendingClaims.length > 0 && (
            <Card className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  <div className="flex-1">
                    <h3 className="font-medium text-orange-800 dark:text-orange-200">
                      {pendingClaims.length} {pendingClaims.length === 1 ? 'Claim Requires' : 'Claims Require'} Attention
                    </h3>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      Review and process pending insurance claims.
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Review Claims
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {pendingQuotes.length > 0 && (
            <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <div className="flex-1">
                    <h3 className="font-medium text-blue-800 dark:text-blue-200">
                      {pendingQuotes.length} Quote {pendingQuotes.length === 1 ? 'Request' : 'Requests'} Pending
                    </h3>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Respond to customer quote requests to grow your business.
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Process Quotes
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Policies</p>
                <p className="text-2xl font-bold">{activePolicies.length}</p>
                <p className="text-xs text-green-600">+5% this month</p>
              </div>
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Annual Premiums</p>
                <p className="text-2xl font-bold">${totalPremiums.toLocaleString()}</p>
                <p className="text-xs text-green-600">+12% this quarter</p>
              </div>
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Claims Ratio</p>
                <p className="text-2xl font-bold">{claimsRatio.toFixed(1)}%</p>
                <p className="text-xs text-red-600">+2% this month</p>
              </div>
              <Activity className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
                <p className="text-2xl font-bold">4.8</p>
                <p className="text-xs text-green-600">+0.2 this quarter</p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="policies">Policies</TabsTrigger>
          <TabsTrigger value="claims">Claims</TabsTrigger>
          <TabsTrigger value="quotes">Quotes</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Recent Activity */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {activePolicies.slice(0, 3).map(policy => (
                    <div key={policy.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">#{policy.policyNumber}</div>
                        <div className="text-sm text-muted-foreground">{policy.coverageType}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">${policy.premium.toLocaleString()}</div>
                        <Badge variant="outline" className="text-xs">
                          {policy.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pending Claims</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pendingClaims.slice(0, 3).map(claim => (
                    <div key={claim.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">#{claim.claimNumber}</div>
                        <div className="text-sm text-muted-foreground">{claim.claimType}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">${claim.estimatedLoss.toLocaleString()}</div>
                        <Badge variant="outline" className="text-xs">
                          {claim.status.replace('_', ' ')}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Charts */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                <p>Performance charts would be displayed here</p>
                <p className="text-sm">Premium growth, claims trends, customer acquisition</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="policies" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Policy Management</h2>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Policy
            </Button>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="text-center py-12 text-muted-foreground">
                <Shield className="h-12 w-12 mx-auto mb-4" />
                <p>Policy management interface would be displayed here</p>
                <p className="text-sm">Create, edit, and manage insurance policies</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="claims" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Claims Management</h2>
            <Button variant="outline">Export Claims</Button>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="text-center py-12 text-muted-foreground">
                <FileText className="h-12 w-12 mx-auto mb-4" />
                <p>Claims management interface would be displayed here</p>
                <p className="text-sm">Process claims, review assessments, manage settlements</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quotes" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Quote Management</h2>
            <Button variant="outline">Quote Templates</Button>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="text-center py-12 text-muted-foreground">
                <FileText className="h-12 w-12 mx-auto mb-4" />
                <p>Quote management interface would be displayed here</p>
                <p className="text-sm">Process quote requests, generate proposals, track conversions</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <h2 className="text-xl font-semibold">Business Analytics</h2>

          <Card>
            <CardContent className="p-6">
              <div className="text-center py-12 text-muted-foreground">
                <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                <p>Advanced analytics dashboard would be displayed here</p>
                <p className="text-sm">Revenue trends, customer insights, risk analysis, market performance</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}