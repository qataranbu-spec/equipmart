import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import {
  Building2,
  MapPin,
  Calendar,
  DollarSign,
  Users,
  Clock,
  AlertCircle,
  CheckCircle,
  Package,
  Settings,
  TrendingUp,
  FileText,
  Wrench
} from 'lucide-react';

const ProjectProfile = () => {
  const { projectId } = useParams();
  
  const project = {
    id: "PRJ-2024-001",
    name: "Al Habtoor City Extension",
    client: "Emirates Construction Group",
    status: "Active",
    progress: 65,
    location: "Business Bay, Dubai",
    startDate: "2024-01-15",
    endDate: "2025-07-15",
    duration: "18 months",
    budget: "$4.5M",
    projectManager: "Ahmed Al Mansouri",
    category: "High-rise Construction"
  };

  const wbsStructure = [
    {
      wbsId: "1.0",
      taskName: "Foundation Work",
      progress: 100,
      status: "Completed",
      startDate: "2024-01-15",
      endDate: "2024-03-30",
      resources: ["Excavators", "Concrete Mixers", "Pile Drivers"],
      budget: "$850K",
      responsible: "Foundation Team"
    },
    {
      wbsId: "2.0",
      taskName: "Structural Framework",
      progress: 75,
      status: "In Progress",
      startDate: "2024-03-15",
      endDate: "2024-08-30",
      resources: ["Tower Cranes", "Concrete Pumps", "Steel Workers"],
      budget: "$1.8M",
      responsible: "Structure Team"
    },
    {
      wbsId: "2.1",
      taskName: "Ground Floor Structure",
      progress: 100,
      status: "Completed",
      startDate: "2024-03-15",
      endDate: "2024-05-15",
      resources: ["Concrete Pumps", "Rebar", "Formwork"],
      budget: "$450K",
      responsible: "Ground Floor Team"
    },
    {
      wbsId: "2.2",
      taskName: "Upper Floors (1-20)",
      progress: 60,
      status: "In Progress",
      startDate: "2024-05-01",
      endDate: "2024-08-30",
      resources: ["Tower Cranes", "Concrete Pumps", "Elevators"],
      budget: "$1.2M",
      responsible: "Upper Floors Team"
    },
    {
      wbsId: "3.0",
      taskName: "MEP Installation",
      progress: 30,
      status: "In Progress",
      startDate: "2024-06-01",
      endDate: "2024-12-30",
      resources: ["Electrical Tools", "Plumbing Equipment", "HVAC Systems"],
      budget: "$900K",
      responsible: "MEP Team"
    },
    {
      wbsId: "4.0",
      taskName: "Finishing Work",
      progress: 0,
      status: "Planned",
      startDate: "2024-10-01",
      endDate: "2025-06-30",
      resources: ["Finishing Tools", "Paint Equipment", "Flooring Materials"],
      budget: "$750K",
      responsible: "Finishing Team"
    }
  ];

  const currentNeeds = [
    {
      wbsId: "2.2",
      equipment: "Additional Tower Crane",
      quantity: "1 unit",
      urgency: "High",
      budget: "$150K",
      reason: "Speed up upper floor construction",
      requestedBy: "Structure Team Lead"
    },
    {
      wbsId: "3.0",
      equipment: "HVAC Installation Equipment",
      quantity: "Complete set",
      urgency: "Medium",
      budget: "$80K",
      reason: "MEP installation phase starting",
      requestedBy: "MEP Manager"
    },
    {
      wbsId: "2.0",
      equipment: "Concrete Testing Equipment",
      quantity: "2 units",
      urgency: "High",
      budget: "$25K",
      reason: "Quality assurance requirements",
      requestedBy: "QA Manager"
    }
  ];

  const resourceBreakdown = [
    {
      category: "Heavy Equipment",
      allocated: 8,
      inUse: 6,
      available: 2,
      cost: "$1.2M",
      items: ["Tower Cranes", "Concrete Pumps", "Excavators"]
    },
    {
      category: "Specialized Tools",
      allocated: 15,
      inUse: 12,
      available: 3,
      cost: "$450K",
      items: ["Welding Equipment", "Cutting Tools", "Testing Devices"]
    },
    {
      category: "Safety Equipment",
      allocated: 50,
      inUse: 45,
      available: 5,
      cost: "$180K",
      items: ["Safety Harnesses", "Hard Hats", "Safety Barriers"]
    },
    {
      category: "Transport Vehicles",
      allocated: 12,
      inUse: 10,
      available: 2,
      cost: "$380K",
      items: ["Dump Trucks", "Material Hoists", "Service Vehicles"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Planned':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'High':
        return 'destructive';
      case 'Medium':
        return 'default';
      case 'Low':
        return 'secondary';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Project Header */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <h1 className="text-3xl font-bold mr-4">{project.name}</h1>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-6">
                  <div className="flex items-center">
                    <Building2 className="h-4 w-4 mr-2 text-muted-foreground" />
                    {project.client}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    {project.duration}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                    Budget: {project.budget}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                    PM: {project.projectManager}
                  </div>
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                    ID: {project.id}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Project Progress</span>
                    <span className="text-sm text-muted-foreground">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-3" />
                </div>
              </div>
              
              <div className="flex flex-col space-y-2 mt-6 md:mt-0">
                <Button>
                  <Settings className="h-4 w-4 mr-2" />
                  Manage Project
                </Button>
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="wbs" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="wbs">WBS Structure</TabsTrigger>
              <TabsTrigger value="needs">Current Needs</TabsTrigger>
              <TabsTrigger value="resources">Resource Breakdown</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
            </TabsList>

            <TabsContent value="wbs" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Work Breakdown Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>WBS ID</TableHead>
                        <TableHead>Task Name</TableHead>
                        <TableHead>Progress</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Budget</TableHead>
                        <TableHead>Resources</TableHead>
                        <TableHead>Responsible</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {wbsStructure.map((task) => (
                        <TableRow key={task.wbsId}>
                          <TableCell className="font-medium">{task.wbsId}</TableCell>
                          <TableCell>
                            <div className="font-medium">{task.taskName}</div>
                            <div className="text-sm text-muted-foreground">
                              {task.startDate} - {task.endDate}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <Progress value={task.progress} className="h-2 w-16" />
                              <span className="text-sm">{task.progress}%</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(task.status)}>
                              {task.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{task.budget}</TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {task.resources.slice(0, 2).map((resource, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {resource}
                                </Badge>
                              ))}
                              {task.resources.length > 2 && (
                                <Badge variant="outline" className="text-xs">
                                  +{task.resources.length - 2}
                                </Badge>
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="text-sm">{task.responsible}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="needs" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Equipment Needs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {currentNeeds.map((need, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <h4 className="font-semibold mr-3">{need.equipment}</h4>
                              <Badge variant={getUrgencyColor(need.urgency)}>
                                {need.urgency} Priority
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{need.reason}</p>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{need.budget}</div>
                            <div className="text-sm text-muted-foreground">Budget</div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="font-medium">WBS ID:</span> {need.wbsId}
                          </div>
                          <div>
                            <span className="font-medium">Quantity:</span> {need.quantity}
                          </div>
                          <div>
                            <span className="font-medium">Requested by:</span> {need.requestedBy}
                          </div>
                          <div>
                            <Button size="sm" className="w-full">
                              <Package className="h-4 w-4 mr-1" />
                              Request Equipment
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resourceBreakdown.map((category, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{category.allocated}</div>
                          <div className="text-sm text-muted-foreground">Allocated</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{category.inUse}</div>
                          <div className="text-sm text-muted-foreground">In Use</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600">{category.available}</div>
                          <div className="text-sm text-muted-foreground">Available</div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Utilization</span>
                          <span className="text-sm text-muted-foreground">
                            {Math.round((category.inUse / category.allocated) * 100)}%
                          </span>
                        </div>
                        <Progress value={(category.inUse / category.allocated) * 100} className="h-2" />
                      </div>
                      
                      <div className="mb-4">
                        <div className="text-lg font-semibold">{category.cost}</div>
                        <div className="text-sm text-muted-foreground">Total Cost</div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium mb-2">Key Items:</div>
                        <div className="flex flex-wrap gap-1">
                          {category.items.map((item, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="timeline" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {wbsStructure.map((task, index) => (
                      <div key={task.wbsId} className="relative">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            {task.status === 'Completed' ? (
                              <CheckCircle className="h-8 w-8 text-green-500" />
                            ) : task.status === 'In Progress' ? (
                              <Clock className="h-8 w-8 text-blue-500" />
                            ) : (
                              <AlertCircle className="h-8 w-8 text-gray-400" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-semibold">{task.wbsId} - {task.taskName}</h3>
                                <p className="text-sm text-muted-foreground">
                                  {task.startDate} - {task.endDate} | {task.responsible}
                                </p>
                              </div>
                              <div className="text-right">
                                <Badge className={getStatusColor(task.status)}>
                                  {task.status}
                                </Badge>
                                <div className="text-sm text-muted-foreground mt-1">
                                  {task.budget}
                                </div>
                              </div>
                            </div>
                            <div className="mt-2">
                              <Progress value={task.progress} className="h-2" />
                            </div>
                          </div>
                        </div>
                        {index < wbsStructure.length - 1 && (
                          <div className="absolute left-4 top-8 w-0.5 h-6 bg-gray-200"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectProfile;