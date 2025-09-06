import { useState } from 'react';
import { AlertTriangle, Phone, Mail, Calendar, DollarSign, User, FileText, Clock, TrendingDown, TrendingUp, Plus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { mockRecoveryCases, mockLoanAccounts } from '../../data/mockData';
import { RecoveryCase, RecoveryActivity } from '../../types';

export default function RecoveryCenter() {
  const [cases, setCases] = useState(mockRecoveryCases);
  const [selectedCase, setSelectedCase] = useState<RecoveryCase | null>(null);
  const [isActivityDialogOpen, setIsActivityDialogOpen] = useState(false);

  // Mock delinquent accounts for demonstration
  const delinquentAccounts = mockLoanAccounts.filter(account => account.daysPastDue > 0);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500';
      case 'in-progress': return 'bg-yellow-500';
      case 'legal-action': return 'bg-red-500';
      case 'settled': return 'bg-green-500';
      case 'charged-off': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const recoveryStats = {
    totalCases: cases.length,
    criticalCases: cases.filter(c => c.priority === 'critical').length,
    totalPastDue: cases.reduce((sum, c) => sum + c.totalPastDue, 0),
    recoveryRate: 85.4,
    averageResolutionTime: 45
  };

  const ActivityForm = ({ caseId, onSave, onCancel }: {
    caseId: string;
    onSave: (activity: Partial<RecoveryActivity>) => void;
    onCancel: () => void;
  }) => {
    const [formData, setFormData] = useState({
      type: 'call' as RecoveryActivity['type'],
      description: '',
      outcome: '',
      nextAction: '',
      nextActionDate: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSave({
        ...formData,
        id: `ra-${Date.now()}`,
        caseId,
        agentId: 'agent-001',
        agentName: 'Current User',
        completedDate: new Date().toISOString()
      });
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="type">Activity Type</Label>
          <Select onValueChange={(value: RecoveryActivity['type']) => setFormData(prev => ({ ...prev, type: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Select activity type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="call">Phone Call</SelectItem>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="letter">Letter</SelectItem>
              <SelectItem value="visit">Site Visit</SelectItem>
              <SelectItem value="legal">Legal Action</SelectItem>
              <SelectItem value="payment">Payment Received</SelectItem>
              <SelectItem value="settlement">Settlement</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Describe the activity..."
            rows={3}
            required
          />
        </div>

        <div>
          <Label htmlFor="outcome">Outcome</Label>
          <Textarea
            id="outcome"
            value={formData.outcome}
            onChange={(e) => setFormData(prev => ({ ...prev, outcome: e.target.value }))}
            placeholder="What was the outcome?"
            rows={2}
            required
          />
        </div>

        <div>
          <Label htmlFor="nextAction">Next Action</Label>
          <Input
            id="nextAction"
            value={formData.nextAction}
            onChange={(e) => setFormData(prev => ({ ...prev, nextAction: e.target.value }))}
            placeholder="What's the next step?"
          />
        </div>

        <div>
          <Label htmlFor="nextActionDate">Next Action Date</Label>
          <Input
            id="nextActionDate"
            type="date"
            value={formData.nextActionDate}
            onChange={(e) => setFormData(prev => ({ ...prev, nextActionDate: e.target.value }))}
          />
        </div>

        <div className="flex justify-end space-x-2">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">Save Activity</Button>
        </div>
      </form>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Recovery Center</h1>
        <p className="text-muted-foreground">Manage loan recovery and collection activities</p>
      </div>

      {/* Recovery Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Cases</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{recoveryStats.totalCases}</div>
            <p className="text-xs text-muted-foreground">Active recovery cases</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Cases</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{recoveryStats.criticalCases}</div>
            <p className="text-xs text-muted-foreground">Require immediate attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Past Due</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${recoveryStats.totalPastDue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Across all cases</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recovery Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{recoveryStats.recoveryRate}%</div>
            <p className="text-xs text-muted-foreground">Last 12 months</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Resolution</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{recoveryStats.averageResolutionTime}</div>
            <p className="text-xs text-muted-foreground">Days to resolution</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="cases" className="w-full">
        <TabsList>
          <TabsTrigger value="cases">Recovery Cases</TabsTrigger>
          <TabsTrigger value="delinquent">Delinquent Accounts</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="cases" className="space-y-6">
          <div className="space-y-4">
            {cases.map((recoveryCase) => (
              <Card key={recoveryCase.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Case #{recoveryCase.id}</CardTitle>
                      <CardDescription>
                        Account: {recoveryCase.accountId} • {recoveryCase.daysPastDue} days past due
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getPriorityColor(recoveryCase.priority)}>
                        {recoveryCase.priority} priority
                      </Badge>
                      <Badge className={getStatusColor(recoveryCase.status)}>
                        {recoveryCase.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Original Balance</span>
                      <p className="text-lg font-bold">${recoveryCase.originalBalance.toLocaleString()}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Current Balance</span>
                      <p className="text-lg font-bold">${recoveryCase.currentBalance.toLocaleString()}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Past Due Amount</span>
                      <p className="text-lg font-bold text-red-600">${recoveryCase.totalPastDue.toLocaleString()}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Equipment Status</span>
                      <p className="font-medium capitalize">{recoveryCase.equipmentStatus.replace('-', ' ')}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Recovery Progress</span>
                      <span>
                        ${(recoveryCase.originalBalance - recoveryCase.currentBalance).toLocaleString()} recovered
                      </span>
                    </div>
                    <Progress 
                      value={((recoveryCase.originalBalance - recoveryCase.currentBalance) / recoveryCase.originalBalance) * 100} 
                      className="h-2"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Assigned Agent</span>
                      <p className="font-medium">{recoveryCase.assignedAgent || 'Unassigned'}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Recovery Strategy</span>
                      <p className="font-medium">{recoveryCase.recoveryStrategy}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Last Contact</span>
                      <p className="font-medium">
                        {recoveryCase.lastContactDate ? 
                          new Date(recoveryCase.lastContactDate).toLocaleDateString() : 
                          'No contact yet'
                        }
                      </p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Next Action</span>
                      <p className="font-medium">
                        {recoveryCase.nextActionDate ? 
                          new Date(recoveryCase.nextActionDate).toLocaleDateString() : 
                          'No action scheduled'
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Dialog 
                      open={isActivityDialogOpen && selectedCase?.id === recoveryCase.id} 
                      onOpenChange={(open) => {
                        setIsActivityDialogOpen(open);
                        if (open) setSelectedCase(recoveryCase);
                      }}
                    >
                      <DialogTrigger asChild>
                        <Button size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          Add Activity
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add Recovery Activity</DialogTitle>
                          <DialogDescription>
                            Record a new collection activity for case #{recoveryCase.id}
                          </DialogDescription>
                        </DialogHeader>
                        <ActivityForm
                          caseId={recoveryCase.id}
                          onSave={(activity) => {
                            setCases(prev => prev.map(c => 
                              c.id === recoveryCase.id 
                                ? { 
                                    ...c, 
                                    activities: [...c.activities, activity as RecoveryActivity],
                                    lastContactDate: new Date().toISOString()
                                  }
                                : c
                            ));
                            setIsActivityDialogOpen(false);
                            setSelectedCase(null);
                          }}
                          onCancel={() => {
                            setIsActivityDialogOpen(false);
                            setSelectedCase(null);
                          }}
                        />
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                    <Button variant="outline" size="sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule
                    </Button>
                  </div>

                  {/* Recent Activities */}
                  {recoveryCase.activities.length > 0 && (
                    <div className="mt-4 p-4 bg-muted rounded-lg">
                      <h4 className="font-medium mb-2">Recent Activities</h4>
                      <div className="space-y-2">
                        {recoveryCase.activities.slice(-3).map((activity) => (
                          <div key={activity.id} className="flex items-center justify-between text-sm">
                            <div>
                              <span className="font-medium capitalize">{activity.type}</span>
                              {' - '}{activity.description}
                            </div>
                            <span className="text-muted-foreground">
                              {new Date(activity.completedDate).toLocaleDateString()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="delinquent" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Delinquent Accounts</CardTitle>
              <CardDescription>Accounts with overdue payments that may require recovery action</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Account</TableHead>
                    <TableHead>Borrower</TableHead>
                    <TableHead>Days Past Due</TableHead>
                    <TableHead>Past Due Amount</TableHead>
                    <TableHead>Current Balance</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {delinquentAccounts.map((account) => (
                    <TableRow key={account.id}>
                      <TableCell className="font-medium">{account.accountNumber}</TableCell>
                      <TableCell>{account.borrowerId}</TableCell>
                      <TableCell>
                        <Badge variant={account.daysPastDue > 60 ? 'destructive' : 'secondary'}>
                          {account.daysPastDue} days
                        </Badge>
                      </TableCell>
                      <TableCell className="text-red-600 font-medium">
                        ${account.delinquentAmount.toLocaleString()}
                      </TableCell>
                      <TableCell>${account.currentBalance.toLocaleString()}</TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          Create Case
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recovery Performance</CardTitle>
                <CardDescription>Monthly recovery rates and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Current Month</span>
                    <span className="font-bold text-green-600">87.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Last Month</span>
                    <span className="font-bold">82.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>3 Month Average</span>
                    <span className="font-bold">85.4%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Case Resolution Times</CardTitle>
                <CardDescription>Average days to resolve cases by priority</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Critical Cases</span>
                    <span className="font-bold">15 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>High Priority</span>
                    <span className="font-bold">28 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Medium Priority</span>
                    <span className="font-bold">45 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Low Priority</span>
                    <span className="font-bold">65 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}