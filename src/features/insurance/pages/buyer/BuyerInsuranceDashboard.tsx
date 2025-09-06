import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, AlertCircle, TrendingUp, Calendar, Plus, FileText, Clock, DollarSign } from "lucide-react";
import { PolicyCard } from "../../components/PolicyCard";
import { ClaimCard } from "../../components/ClaimCard";
import { mockInsurancePolicies, mockInsuranceClaims, mockInsuranceProviders } from "../../data/mockInsuranceData";

export default function BuyerInsuranceDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Filter user's policies and claims
  const userPolicies = mockInsurancePolicies.filter(policy => policy.ownerId === 'user-1');
  const userClaims = mockInsuranceClaims.filter(claim => 
    userPolicies.some(policy => policy.id === claim.policyId)
  );

  const activePolicies = userPolicies.filter(policy => policy.status === 'active');
  const pendingClaims = userClaims.filter(claim => 
    ['submitted', 'under_review', 'investigating'].includes(claim.status)
  );
  const expiringSoon = userPolicies.filter(policy => {
    const endDate = new Date(policy.endDate);
    const now = new Date();
    const daysUntilExpiry = Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return daysUntilExpiry <= 30 && daysUntilExpiry > 0;
  });

  const totalPremiums = userPolicies.reduce((sum, policy) => {
    if (policy.status === 'active') {
      const multiplier = policy.paymentFrequency === 'monthly' ? 12 : 
                        policy.paymentFrequency === 'quarterly' ? 4 : 1;
      return sum + (policy.premium * multiplier);
    }
    return sum;
  }, 0);

  const handleViewPolicyDetails = (policyId: string) => {
    console.log("View policy details:", policyId);
  };

  const handleFileClaim = (policyId: string) => {
    console.log("File claim for policy:", policyId);
  };

  const handleMakePayment = (policyId: string) => {
    console.log("Make payment for policy:", policyId);
  };

  const handleViewClaimDetails = (claimId: string) => {
    console.log("View claim details:", claimId);
  };

  const handleUploadDocuments = (claimId: string) => {
    console.log("Upload documents for claim:", claimId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Insurance Dashboard</h1>
          <p className="text-muted-foreground">Manage your equipment insurance policies and claims</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Get New Quote
        </Button>
      </div>

      {/* Alert Cards */}
      {(expiringSoon.length > 0 || pendingClaims.length > 0) && (
        <div className="space-y-4">
          {expiringSoon.length > 0 && (
            <Card className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                  <div className="flex-1">
                    <h3 className="font-medium text-yellow-800 dark:text-yellow-200">
                      {expiringSoon.length} {expiringSoon.length === 1 ? 'Policy Expires' : 'Policies Expire'} Soon
                    </h3>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      Review and renew your policies to maintain coverage.
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Review Policies
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {pendingClaims.length > 0 && (
            <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div className="flex-1">
                    <h3 className="font-medium text-blue-800 dark:text-blue-200">
                      {pendingClaims.length} {pendingClaims.length === 1 ? 'Claim' : 'Claims'} In Progress
                    </h3>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Track the status of your active insurance claims.
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Claims
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Policies</p>
                <p className="text-2xl font-bold">{activePolicies.length}</p>
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
              </div>
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Claims</p>
                <p className="text-2xl font-bold">{pendingClaims.length}</p>
              </div>
              <FileText className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Coverage Value</p>
                <p className="text-2xl font-bold">
                  ${activePolicies.reduce((sum, p) => sum + p.coverageLimit, 0).toLocaleString()}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="policies">My Policies</TabsTrigger>
          <TabsTrigger value="claims">Claims</TabsTrigger>
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Recent Policies */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Policies</CardTitle>
                <Button variant="outline" size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {userPolicies.slice(0, 2).map(policy => {
                  const provider = mockInsuranceProviders.find(p => p.id === policy.providerId);
                  return (
                    <PolicyCard
                      key={policy.id}
                      policy={policy}
                      provider={provider}
                      onViewDetails={handleViewPolicyDetails}
                      onFileClaim={handleFileClaim}
                      onMakePayment={handleMakePayment}
                    />
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Recent Claims */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Claims</CardTitle>
                <Button variant="outline" size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {userClaims.slice(0, 2).map(claim => (
                  <ClaimCard
                    key={claim.id}
                    claim={claim}
                    onViewDetails={handleViewClaimDetails}
                    onUploadDocuments={handleUploadDocuments}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="policies" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">My Insurance Policies</h2>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New Policy
            </Button>
          </div>
          
          <div className="grid gap-6">
            {userPolicies.map(policy => {
              const provider = mockInsuranceProviders.find(p => p.id === policy.providerId);
              return (
                <PolicyCard
                  key={policy.id}
                  policy={policy}
                  provider={provider}
                  onViewDetails={handleViewPolicyDetails}
                  onFileClaim={handleFileClaim}
                  onMakePayment={handleMakePayment}
                />
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="claims" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Insurance Claims</h2>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              File New Claim
            </Button>
          </div>
          
          <div className="grid gap-6">
            {userClaims.map(claim => (
              <ClaimCard
                key={claim.id}
                claim={claim}
                onViewDetails={handleViewClaimDetails}
                onUploadDocuments={handleUploadDocuments}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="marketplace" className="space-y-6">
          <Card>
            <CardContent className="p-12 text-center">
              <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Insurance Marketplace</h3>
              <p className="text-muted-foreground mb-4">
                Browse and compare insurance policies from top providers.
              </p>
              <Button>Visit Marketplace</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}