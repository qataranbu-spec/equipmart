import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Plus, 
  Eye, 
  Edit, 
  Trash2, 
  AlertTriangle,
  DollarSign,
  Package,
  TrendingDown,
  Clock,
  Users,
  FileText,
  Gavel
} from "lucide-react";
import { mockEquipmentListings } from "@/features/financing/data/marketplaceMockData";

export default function FinancierDashboard() {
  const [activeTab, setActiveTab] = useState("repossessed");
  
  // Filter listings for financiers (NBFC/Bank repossessed equipment)
  const repossessedListings = mockEquipmentListings.filter(listing => 
    listing.isRepossessed && (listing.seller.type === "NBFC" || listing.seller.type === "Bank")
  );

  const getStatusBadge = (status: string) => {
    const variants = {
      "Active": "bg-success/10 text-success border-success/20",
      "Pending Approval": "bg-warning/10 text-warning border-warning/20",
      "Sold": "bg-primary/10 text-primary border-primary/20",
      "Under Negotiation": "bg-info/10 text-info border-info/20",
      "Rejected": "bg-destructive/10 text-destructive border-destructive/20"
    };
    return variants[status as keyof typeof variants] || "bg-muted text-muted-foreground";
  };

  // Mock recovery stats
  const totalRepossessed = 45;
  const activeListings = repossessedListings.filter(l => l.status === "Active").length;
  const soldListings = repossessedListings.filter(l => l.status === "Sold").length;
  const totalRecoveryValue = 2850000;
  const averageRecoveryRate = 68; // percentage of original loan amount

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Financier Dashboard</h1>
          <p className="text-muted-foreground">Manage repossessed equipment and recovery operations</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          List Repossessed Equipment
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Repossessed</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalRepossessed}</div>
            <p className="text-xs text-muted-foreground">
              {activeListings} currently listed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recovery Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(totalRecoveryValue / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-muted-foreground">
              Avg recovery rate: {averageRecoveryRate}%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Units Sold</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{soldListings}</div>
            <p className="text-xs text-muted-foreground">
              {totalRepossessed > 0 ? ((soldListings / totalRepossessed) * 100).toFixed(1) : 0}% liquidation rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Days to Sell</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">-8 days</span> from last quarter
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="repossessed">Repossessed Equipment</TabsTrigger>
          <TabsTrigger value="recovery">Recovery Cases</TabsTrigger>
          <TabsTrigger value="analytics">Recovery Analytics</TabsTrigger>
          <TabsTrigger value="legal">Legal Actions</TabsTrigger>
        </TabsList>

        <TabsContent value="repossessed" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Repossessed Equipment Listings</CardTitle>
              <CardDescription>Manage your inventory of repossessed construction equipment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Equipment</TableHead>
                      <TableHead>Original Loan</TableHead>
                      <TableHead>Listed Price</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Days Listed</TableHead>
                      <TableHead>Recovery %</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {repossessedListings.map((listing) => {
                      const originalLoan = listing.price * 1.25; // Mock original loan amount
                      const recoveryRate = (listing.price / originalLoan) * 100;
                      const daysListed = Math.floor((new Date().getTime() - new Date(listing.createdAt).getTime()) / (1000 * 60 * 60 * 24));
                      
                      return (
                        <TableRow key={listing.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{listing.brand} {listing.model}</div>
                              <div className="text-sm text-muted-foreground">
                                {listing.year} • {listing.condition}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">${originalLoan.toLocaleString()}</div>
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">${listing.price.toLocaleString()}</div>
                          </TableCell>
                          <TableCell>
                            <Badge 
                              variant="outline" 
                              className={getStatusBadge(listing.status)}
                            >
                              {listing.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{daysListed} days</TableCell>
                          <TableCell>
                            <div className={`font-medium ${recoveryRate >= 70 ? 'text-success' : recoveryRate >= 50 ? 'text-warning' : 'text-destructive'}`}>
                              {recoveryRate.toFixed(1)}%
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4 mr-1" />
                                Edit
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recovery" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Recovery Cases</CardTitle>
              <CardDescription>Track ongoing equipment recovery and liquidation cases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "case-1",
                    borrower: "Mountain Construction Co.",
                    equipment: "Caterpillar 950M Wheel Loader",
                    loanAmount: 185000,
                    outstandingAmount: 142000,
                    repossessionDate: "2024-01-10",
                    status: "Equipment Listed",
                    estimatedRecovery: 125000
                  },
                  {
                    id: "case-2", 
                    borrower: "Desert Excavation LLC",
                    equipment: "Komatsu PC490LC Excavator",
                    loanAmount: 295000,
                    outstandingAmount: 165000,
                    repossessionDate: "2024-01-05",
                    status: "Under Negotiation",
                    estimatedRecovery: 180000
                  }
                ].map((case_) => (
                  <Card key={case_.id} className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div>
                          <h3 className="font-medium">{case_.equipment}</h3>
                          <p className="text-sm text-muted-foreground">
                            Borrower: {case_.borrower}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Original Loan: </span>
                            <span className="font-medium">${case_.loanAmount.toLocaleString()}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Outstanding: </span>
                            <span className="font-medium text-destructive">${case_.outstandingAmount.toLocaleString()}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Est. Recovery: </span>
                            <span className="font-medium text-success">${case_.estimatedRecovery.toLocaleString()}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Recovery Rate: </span>
                            <span className="font-medium">
                              {((case_.estimatedRecovery / case_.outstandingAmount) * 100).toFixed(1)}%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge variant="outline" className="text-center">
                          {case_.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-1" />
                          View Case
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recovery Performance</CardTitle>
                <CardDescription>Track your asset recovery efficiency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Cases</span>
                    <span className="font-medium">147</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Completed Cases</span>
                    <span className="font-medium">89</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Average Recovery Rate</span>
                    <span className="font-medium text-success">{averageRecoveryRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Recovery Value</span>
                    <span className="font-medium">${(totalRecoveryValue / 1000000).toFixed(1)}M</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Equipment Categories</CardTitle>
                <CardDescription>Recovery rates by equipment type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { category: "Excavators", count: 23, recoveryRate: 72 },
                    { category: "Bulldozers", count: 18, recoveryRate: 65 },
                    { category: "Wheel Loaders", count: 15, recoveryRate: 68 },
                    { category: "Cranes", count: 8, recoveryRate: 58 },
                    { category: "Dump Trucks", count: 12, recoveryRate: 75 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{item.category}</div>
                        <div className="text-sm text-muted-foreground">{item.count} units</div>
                      </div>
                      <div className="text-right">
                        <div className={`font-medium ${item.recoveryRate >= 70 ? 'text-success' : item.recoveryRate >= 60 ? 'text-warning' : 'text-destructive'}`}>
                          {item.recoveryRate}%
                        </div>
                        <div className="text-sm text-muted-foreground">recovery rate</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="legal" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Legal Actions</CardTitle>
              <CardDescription>Track legal proceedings and court cases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "legal-1",
                    borrower: "ABC Construction Inc.",
                    equipment: "Multiple Units",
                    outstandingAmount: 485000,
                    status: "Court Proceedings",
                    nextHearing: "2024-02-15",
                    lawyer: "Smith & Associates"
                  },
                  {
                    id: "legal-2",
                    borrower: "City Builders LLC",
                    equipment: "Crane & Excavator",
                    outstandingAmount: 265000,
                    status: "Settlement Negotiations",
                    nextHearing: "2024-02-20",
                    lawyer: "Legal Partners Ltd"
                  }
                ].map((case_) => (
                  <Card key={case_.id} className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div>
                          <h3 className="font-medium">{case_.borrower}</h3>
                          <p className="text-sm text-muted-foreground">
                            {case_.equipment} • ${case_.outstandingAmount.toLocaleString()} outstanding
                          </p>
                        </div>
                        <div className="text-sm">
                          <div className="text-muted-foreground">Legal Counsel: {case_.lawyer}</div>
                          <div className="text-muted-foreground">Next Hearing: {case_.nextHearing}</div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge variant="outline" className="text-center">
                          {case_.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Gavel className="h-4 w-4 mr-1" />
                          View Case
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}