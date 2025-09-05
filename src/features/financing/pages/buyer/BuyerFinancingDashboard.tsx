import { useState } from 'react';
import { CreditCard, FileText, Clock, DollarSign, TrendingUp, Calendar, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { mockLoanApplications, mockLoanAccounts } from '../../data/mockData';

export default function BuyerFinancingDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user applications and accounts
  const userApplications = mockLoanApplications.filter(app => app.applicantId === 'user-123');
  const userAccounts = mockLoanAccounts.filter(acc => acc.borrowerId === 'user-124');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-500';
      case 'under-review': return 'bg-yellow-500';
      case 'rejected': return 'bg-red-500';
      case 'active': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">My Financing Dashboard</h1>
        <p className="text-muted-foreground">Manage your loan applications and active financing accounts</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="accounts">Active Loans</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Applications</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userApplications.length}</div>
                <p className="text-xs text-muted-foreground">
                  {userApplications.filter(app => app.status === 'under-review').length} under review
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Loans</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userAccounts.length}</div>
                <p className="text-xs text-muted-foreground">
                  Total financed: $
                  {userAccounts.reduce((sum, acc) => sum + acc.principalAmount, 0).toLocaleString()}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Next Payment</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${userAccounts[0]?.nextPaymentAmount.toLocaleString() || '0'}
                </div>
                <p className="text-xs text-muted-foreground">
                  Due {userAccounts[0]?.nextPaymentDate || 'N/A'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${userAccounts.reduce((sum, acc) => sum + acc.currentBalance, 0).toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  Across {userAccounts.length} account{userAccounts.length !== 1 ? 's' : ''}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>Your latest financing applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {userApplications.slice(0, 3).map((application) => (
                  <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">${application.requestedAmount.toLocaleString()} Loan</h4>
                      <p className="text-sm text-muted-foreground">
                        {application.businessInfo.businessName}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Applied: {new Date(application.submittedAt || '').toLocaleDateString()}
                      </p>
                    </div>
                    <Badge className={getStatusColor(application.status)}>
                      {application.status}
                    </Badge>
                  </div>
                ))}
                <Button variant="outline" className="w-full">View All Applications</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Schedule</CardTitle>
                <CardDescription>Upcoming payments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {userAccounts.map((account) => (
                  <div key={account.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">Account {account.accountNumber}</h4>
                      <p className="text-sm text-muted-foreground">
                        ${account.nextPaymentAmount.toLocaleString()} due {account.nextPaymentDate}
                      </p>
                      <div className="mt-2">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Payment Progress</span>
                          <span>
                            {account.term - account.paymentsRemaining} / {account.term} payments
                          </span>
                        </div>
                        <Progress 
                          value={((account.term - account.paymentsRemaining) / account.term) * 100} 
                          className="h-2"
                        />
                      </div>
                    </div>
                    <Button size="sm">Pay Now</Button>
                  </div>
                ))}
                <Button variant="outline" className="w-full">View All Accounts</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="applications" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Loan Applications</h2>
            <Button>New Application</Button>
          </div>

          <div className="space-y-4">
            {userApplications.map((application) => (
              <Card key={application.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>${application.requestedAmount.toLocaleString()} Equipment Loan</CardTitle>
                      <CardDescription>
                        {application.term} month term • {application.businessInfo.businessName}
                      </CardDescription>
                    </div>
                    <Badge className={getStatusColor(application.status)}>
                      {application.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Down Payment</span>
                      <p className="font-medium">${application.downPayment.toLocaleString()}</p>
                    </div>
                    {application.interestRate && (
                      <div>
                        <span className="text-sm text-muted-foreground">Interest Rate</span>
                        <p className="font-medium">{application.interestRate}%</p>
                      </div>
                    )}
                    {application.monthlyPayment && (
                      <div>
                        <span className="text-sm text-muted-foreground">Monthly Payment</span>
                        <p className="font-medium">${application.monthlyPayment.toLocaleString()}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Submitted: {new Date(application.submittedAt || '').toLocaleDateString()}
                    </span>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="accounts" className="space-y-6">
          <h2 className="text-2xl font-semibold">Active Loan Accounts</h2>

          <div className="space-y-4">
            {userAccounts.map((account) => (
              <Card key={account.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Account {account.accountNumber}</CardTitle>
                      <CardDescription>
                        ${account.principalAmount.toLocaleString()} • {account.interestRate}% APR
                      </CardDescription>
                    </div>
                    <Badge className={getStatusColor(account.status)}>
                      {account.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div>
                      <span className="text-sm text-muted-foreground">Current Balance</span>
                      <p className="text-lg font-bold">${account.currentBalance.toLocaleString()}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Monthly Payment</span>
                      <p className="text-lg font-bold">${account.monthlyPayment.toLocaleString()}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Next Payment</span>
                      <p className="font-medium">{account.nextPaymentDate}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Payments Remaining</span>
                      <p className="font-medium">{account.paymentsRemaining}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Loan Progress</span>
                      <span>{Math.round(((account.term - account.paymentsRemaining) / account.term) * 100)}% Complete</span>
                    </div>
                    <Progress 
                      value={((account.term - account.paymentsRemaining) / account.term) * 100} 
                      className="h-3"
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button>Make Payment</Button>
                    <Button variant="outline">View Statements</Button>
                    <Button variant="outline">Payment History</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <h2 className="text-2xl font-semibold">Document Center</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Loan Agreements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Download signed loan agreements and terms
                </p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Payment Statements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  View and download payment statements
                </p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Tax Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Annual tax forms and interest statements
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}