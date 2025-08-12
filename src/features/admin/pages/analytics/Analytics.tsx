import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Users,
  Package,
  DollarSign,
  Activity,
  Eye,
  MousePointer
} from "lucide-react"

export default function Analytics() {
  const kpiData = [
    {
      title: "Total Revenue",
      value: "$2.4M",
      change: "+12.5%",
      changeType: "positive" as const,
      icon: DollarSign,
      description: "vs last month",
    },
    {
      title: "Active Users",
      value: "11,234",
      change: "+8.2%",
      changeType: "positive" as const,
      icon: Users,
      description: "monthly active users",
    },
    {
      title: "Equipment Listed",
      value: "8,567",
      change: "+15.3%",
      changeType: "positive" as const,
      icon: Package,
      description: "new listings",
    },
    {
      title: "Conversion Rate",
      value: "3.45%",
      change: "-2.1%",
      changeType: "negative" as const,
      icon: TrendingUp,
      description: "visitor to customer",
    },
  ]

  const trafficData = [
    { source: "Organic Search", visitors: "45,230", percentage: "45%" },
    { source: "Direct", visitors: "23,150", percentage: "23%" },
    { source: "Social Media", visitors: "18,450", percentage: "18%" },
    { source: "Referral", visitors: "8,920", percentage: "9%" },
    { source: "Email", visitors: "5,250", percentage: "5%" },
  ]

  const topPages = [
    { page: "/marketplace/buy", views: "12,450", time: "3:45" },
    { page: "/auctions", views: "8,930", time: "4:20" },
    { page: "/equipment/excavators", views: "7,650", time: "2:15" },
    { page: "/services", views: "6,180", time: "3:10" },
    { page: "/rentals", views: "5,420", time: "2:50" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics Overview</h1>
        <p className="text-muted-foreground mt-2">
          Monitor your platform's performance and user engagement metrics
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi) => (
          <Card key={kpi.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {kpi.title}
              </CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{kpi.value}</div>
              <div className="flex items-center space-x-2 text-xs mt-1">
                <Badge 
                  variant={kpi.changeType === 'positive' ? 'default' : 'destructive'}
                  className="flex items-center gap-1"
                >
                  {kpi.changeType === 'positive' ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {kpi.change}
                </Badge>
                <span className="text-muted-foreground">{kpi.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Traffic Sources
            </CardTitle>
            <CardDescription>
              Where your visitors are coming from
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trafficData.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{source.source}</p>
                      <p className="text-xs text-muted-foreground">{source.visitors} visitors</p>
                    </div>
                  </div>
                  <Badge variant="secondary">{source.percentage}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Top Pages
            </CardTitle>
            <CardDescription>
              Most visited pages this month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">{page.page}</p>
                    <p className="text-xs text-muted-foreground">
                      Avg. time: {page.time}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{page.views}</p>
                    <p className="text-xs text-muted-foreground">views</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
            <CardDescription>Monthly revenue performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Revenue Chart Placeholder</p>
                <p className="text-xs text-muted-foreground">Connect your analytics service</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>User registration trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">User Growth Chart Placeholder</p>
                <p className="text-xs text-muted-foreground">Connect your analytics service</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}