import { useState } from 'react';
import { TrendingUp, Users, DollarSign, FileText, AlertTriangle, CheckCircle, Clock, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { mockFinancingStats, mockLoanApplications, mockLoanAccounts, mockRecoveryCases } from '../../data/mockData';

export default function CompanyDashboard() {
  const [dateRange, setDateRange] = useState('30d');

  const pendingApplications = mockLoanApplications.filter(app => app.status === 'under-review');
  const activeAccounts = mockLoanAccounts.filter(acc => acc.status === 'active');
  const recoveryCases = mockRecoveryCases.filter(rc => rc.status === 'new' || rc.status === 'in-progress');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Company Dashboard</h1>
            <p className="text-muted-foreground">Financing operations overview and key metrics</p>
          </div>
          <div className="flex gap-2">
            <select 
              value={dateRange} 
              onChange={(e) => setDateRange(e.target.value)}
              className="px-3 py-2 border border-border rounded-md bg-background text-sm"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            <Button>Export Report</Button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Portfolio</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockFinancingStats.portfolioValue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
              +12.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Loans</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockFinancingStats.activeLoans.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {pendingApplications.length} pending applications
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approval Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockFinancingStats.approvalRate}%</div>
            <Progress value={mockFinancingStats.approvalRate} className="h-2 mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockFinancingStats.monthlyRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
              +8.2% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="recovery">Recovery</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pending Applications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Applications Requiring Review
                  <Badge variant="secondary">{pendingApplications.length}</Badge>
                </CardTitle>
                <CardDescription>Applications waiting for approval decision</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {pendingApplications.slice(0, 3).map((application) => (
                  <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">{application.personalInfo.firstName} {application.personalInfo.lastName}</h4>
                      <p className="text-sm text-muted-foreground">{application.businessInfo.businessName}</p>
                      <p className="text-sm font-medium">${application.requestedAmount.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground mb-2">
                        Credit: {application.financialInfo.creditScore}
                      </p>
                      <Button size="sm">Review</Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">View All Applications</Button>
              </CardContent>
            </Card>

            {/* Recovery Cases */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Active Recovery Cases
                  <Badge variant="destructive">{recoveryCases.length}</Badge>
                </CardTitle>
                <CardDescription>Accounts requiring collection attention</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recoveryCases.slice(0, 3).map((recoveryCase) => (
                  <div key={recoveryCase.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">Case #{recoveryCase.accountId}</h4>
                      <p className="text-sm text-muted-foreground">{recoveryCase.daysPastDue} days past due</p>
                      <p className="text-sm font-medium text-red-600">
                        ${recoveryCase.totalPastDue.toLocaleString()} past due
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant={recoveryCase.priority === 'high' ? 'destructive' : 
                                recoveryCase.priority === 'medium' ? 'default' : 'secondary'}
                        className="mb-2"
                      >
                        {recoveryCase.priority}
                      </Badge>
                      <Button size="sm" variant="outline">View Case</Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">View All Cases</Button>
              </CardContent>
            </Card>
          </div>

          {/* Portfolio Health */}
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Health Overview</CardTitle>
              <CardDescription>Key performance indicators for your loan portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">94.2%</div>
                  <p className="text-sm text-muted-foreground">Recovery Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2.3%</div>
                  <p className="text-sm text-muted-foreground">Default Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">$125K</div>
                  <p className="text-sm text-muted-foreground">Avg Loan Size</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">36</div>
                  <p className="text-sm text-muted-foreground">Avg Term (months)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="applications" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Application Management</h2>
            <Button>View All Applications</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Under Review</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">
                  {mockLoanApplications.filter(app => app.status === 'under-review').length}
                </div>
                <p className="text-sm text-muted-foreground">Applications awaiting decision</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Approved Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2 text-green-600">
                  {mockLoanApplications.filter(app => app.status === 'approved').length}
                </div>
                <p className="text-sm text-muted-foreground">New approvals</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Total Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">
                  ${mockLoanApplications
                    .filter(app => app.status === 'under-review')
                    .reduce((sum, app) => sum + app.requestedAmount, 0)
                    .toLocaleString()}
                </div>
                <p className="text-sm text-muted-foreground">Pending approval value</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="portfolio" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Portfolio Management</h2>
            <Button>Export Portfolio Report</Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Portfolio Composition</CardTitle>
              <CardDescription>Breakdown of active loans by various categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-medium mb-2">By Equipment Type</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Heavy Equipment</span>
                      <span className="font-medium">45%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Commercial Vehicles</span>
                      <span className="font-medium">30%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tools & Accessories</span>
                      <span className="font-medium">25%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">By Loan Amount</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>$100K+</span>
                      <span className="font-medium">35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>$50K - $100K</span>
                      <span className="font-medium">40%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Under $50K</span>
                      <span className="font-medium">25%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">By Risk Grade</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Grade A</span>
                      <span className="font-medium text-green-600">55%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Grade B</span>
                      <span className="font-medium text-blue-600">30%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Grade C</span>
                      <span className="font-medium text-yellow-600">15%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Performance</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Current</span>
                      <span className="font-medium text-green-600">92%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>30+ Days</span>
                      <span className="font-medium text-yellow-600">5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>60+ Days</span>
                      <span className="font-medium text-red-600">3%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recovery" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Recovery Operations</h2>
            <Button>View Recovery Center</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Active Cases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">{recoveryCases.length}</div>
                <p className="text-sm text-muted-foreground">
                  ${recoveryCases.reduce((sum, rc) => sum + rc.totalPastDue, 0).toLocaleString()} total past due
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recovery Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2 text-green-600">94.2%</div>
                <p className="text-sm text-muted-foreground">Last 12 months</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Avg Days to Collect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">28</div>
                <p className="text-sm text-muted-foreground">Days from delinquency</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Analytics & Reporting</h2>
            <Button>Generate Custom Report</Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Originations</CardTitle>
                <CardDescription>New loans originated by month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  [Chart showing monthly loan originations would go here]
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Portfolio Performance</CardTitle>
                <CardDescription>Portfolio health metrics over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  [Chart showing portfolio performance metrics would go here]
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}