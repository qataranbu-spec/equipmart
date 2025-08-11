import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Package, 
  Gavel, 
  TrendingUp, 
  Activity,
  ShoppingCart,
  Wrench,
  DollarSign
} from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "12,345",
      change: "+12%",
      changeType: "positive" as const,
      icon: Users,
    },
    {
      title: "Active Equipment",
      value: "8,567",
      change: "+8%",
      changeType: "positive" as const,
      icon: Package,
    },
    {
      title: "Live Auctions",
      value: "234",
      change: "+23%",
      changeType: "positive" as const,
      icon: Gavel,
    },
    {
      title: "Revenue",
      value: "$2.4M",
      change: "+15%",
      changeType: "positive" as const,
      icon: DollarSign,
    },
  ]

  const recentActivity = [
    { type: "user", message: "New buyer registered: John Smith", time: "5 min ago" },
    { type: "equipment", message: "Equipment added: CAT 320D Excavator", time: "12 min ago" },
    { type: "auction", message: "Auction started: Heavy Machinery Lot", time: "25 min ago" },
    { type: "service", message: "Service request: Equipment Maintenance", time: "1 hour ago" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2">
          Welcome to your admin dashboard. Here's what's happening with your platform.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center space-x-2 text-xs">
                <Badge variant={stat.changeType === 'positive' ? 'default' : 'destructive'}>
                  {stat.change}
                </Badge>
                <span className="text-muted-foreground">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>
              Latest updates from your platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    {activity.type === 'user' && <Users className="h-4 w-4 text-blue-500" />}
                    {activity.type === 'equipment' && <Package className="h-4 w-4 text-green-500" />}
                    {activity.type === 'auction' && <Gavel className="h-4 w-4 text-orange-500" />}
                    {activity.type === 'service' && <Wrench className="h-4 w-4 text-purple-500" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common management tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-4 border rounded-lg hover:bg-muted transition-colors text-left">
                <Package className="h-6 w-6 text-primary mb-2" />
                <div className="text-sm font-medium">Add Equipment</div>
                <div className="text-xs text-muted-foreground">List new equipment</div>
              </button>
              <button className="p-4 border rounded-lg hover:bg-muted transition-colors text-left">
                <Gavel className="h-6 w-6 text-primary mb-2" />
                <div className="text-sm font-medium">Create Auction</div>
                <div className="text-xs text-muted-foreground">Start new auction</div>
              </button>
              <button className="p-4 border rounded-lg hover:bg-muted transition-colors text-left">
                <Users className="h-6 w-6 text-primary mb-2" />
                <div className="text-sm font-medium">Manage Users</div>
                <div className="text-xs text-muted-foreground">View all users</div>
              </button>
              <button className="p-4 border rounded-lg hover:bg-muted transition-colors text-left">
                <TrendingUp className="h-6 w-6 text-primary mb-2" />
                <div className="text-sm font-medium">View Reports</div>
                <div className="text-xs text-muted-foreground">Analytics dashboard</div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}