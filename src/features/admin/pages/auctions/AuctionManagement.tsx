import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  Gavel,
  Play,
  Pause,
  Clock
} from "lucide-react"

export default function AuctionManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const auctionData = [
    {
      id: "AUC001",
      title: "Heavy Machinery Collection",
      equipment: "5 items",
      startDate: "2024-02-01",
      endDate: "2024-02-05",
      currentBid: "$45,000",
      bidders: 12,
      status: "Live",
      reserve: "$40,000",
    },
    {
      id: "AUC002", 
      title: "Construction Equipment Lot",
      equipment: "3 items",
      startDate: "2024-02-10",
      endDate: "2024-02-14",
      currentBid: "$0",
      bidders: 0,
      status: "Scheduled",
      reserve: "$75,000",
    },
    {
      id: "AUC003",
      title: "Excavator Specialists Auction",
      equipment: "8 items",
      startDate: "2024-01-20",
      endDate: "2024-01-24",
      currentBid: "$125,000",
      bidders: 28,
      status: "Completed",
      reserve: "$100,000",
    },
    {
      id: "AUC004",
      title: "Fleet Liquidation Sale",
      equipment: "15 items",
      startDate: "2024-02-15",
      endDate: "2024-02-19",
      currentBid: "$0",
      bidders: 0,
      status: "Draft",
      reserve: "$200,000",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Live":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Live</Badge>
      case "Scheduled":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Scheduled</Badge>
      case "Completed":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Completed</Badge>
      case "Draft":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Draft</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getActionButton = (status: string) => {
    switch (status) {
      case "Live":
        return <Button variant="ghost" size="sm"><Pause className="h-4 w-4" /></Button>
      case "Scheduled":
        return <Button variant="ghost" size="sm"><Play className="h-4 w-4" /></Button>
      case "Draft":
        return <Button variant="ghost" size="sm"><Play className="h-4 w-4" /></Button>
      default:
        return null
    }
  }

  const filteredAuctions = auctionData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || item.status.toLowerCase() === statusFilter.toLowerCase()
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Auction Management</h1>
          <p className="text-muted-foreground mt-2">
            Create, manage, and monitor all auction activities
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create Auction
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Auctions</CardTitle>
            <div className="text-2xl font-bold">234</div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Live Auctions</CardTitle>
            <div className="text-2xl font-bold text-green-600">8</div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Scheduled</CardTitle>
            <div className="text-2xl font-bold text-blue-600">15</div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
            <div className="text-2xl font-bold text-primary">$2.4M</div>
          </CardHeader>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gavel className="h-5 w-5" />
            All Auctions
          </CardTitle>
          <CardDescription>
            View and manage all auction listings and activities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search auctions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="live">Live</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Auction</TableHead>
                  <TableHead>Equipment</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Current Bid</TableHead>
                  <TableHead>Bidders</TableHead>
                  <TableHead>Reserve</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAuctions.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.id}</div>
                      </div>
                    </TableCell>
                    <TableCell>{item.equipment}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{item.startDate}</div>
                        <div className="text-muted-foreground">to {item.endDate}</div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{item.currentBid}</TableCell>
                    <TableCell>{item.bidders}</TableCell>
                    <TableCell>{item.reserve}</TableCell>
                    <TableCell>{getStatusBadge(item.status)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        {getActionButton(item.status)}
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}