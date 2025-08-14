import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import {
  ShoppingBag,
  Package,
  DollarSign,
  TrendingUp,
  Eye,
  Heart,
  MessageCircle,
  Settings,
  Plus,
  Edit,
  BarChart3,
  Users,
  FileText,
  Gavel,
  Search,
  Bell,
  Calendar,
  Bookmark,
  Home,
  Building2,
  Wrench,
  Truck,
  ShieldCheck,
  UserCheck,
  Briefcase,
  Map,
  Target,
  Star,
  Handshake,
  ChevronDown,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface MenuSection {
  title: string
  items: MenuItem[]
  open?: boolean
}

interface MenuItem {
  title: string
  url: string
  icon: any
  badge?: string
}

interface AppSidebarProps {
  userRole: string
  onRoleChange: (role: string) => void
}

export function AppSidebar({ userRole, onRoleChange }: AppSidebarProps) {
  const location = useLocation()
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    overview: true,
    marketplace: true,
    rentals: true,
    services: true,
    auctions: true,
    procurement: true,
    network: true,
  })

  const buyerMenuSections: MenuSection[] = [
    {
      title: "Overview",
      items: [
        { title: "Dashboard", url: "/dashboard", icon: BarChart3 },
        { title: "Equipment Finder", url: "/equipments-finder", icon: Search },
      ]
    },
    {
      title: "Marketplace", 
      items: [
        { title: "Browse Equipment", url: "/marketplace", icon: Search },
        { title: "Buy Equipment", url: "/marketplace/buy", icon: ShoppingBag },
        { title: "Equipment Details", url: "/equipment/1", icon: Eye },
        { title: "Contact Seller", url: "/contact-seller", icon: MessageCircle },
        { title: "Favorites", url: "/favorites", icon: Heart },
      ]
    },
    {
      title: "Rentals",
      items: [
        { title: "Browse Rentals", url: "/rentals/browse", icon: Search },
        { title: "My Rentals", url: "/rentals/my-rentals", icon: Package },
        { title: "Rental Requests", url: "/rentals/requests", icon: FileText },
        { title: "Book Equipment", url: "/book-equipment", icon: Calendar },
      ]
    },
    {
      title: "Services",
      items: [
        { title: "Services Marketplace", url: "/services/marketplace", icon: Search },
        { title: "Service Dashboard", url: "/services/buyer/dashboard", icon: BarChart3 },
        { title: "Find Providers", url: "/find-service-providers", icon: Users },
        { title: "Post Request", url: "/post-service-request", icon: Plus },
        { title: "Messages", url: "/services/messages", icon: MessageCircle },
      ]
    },
    {
      title: "Auctions",
      items: [
        { title: "Live Auctions", url: "/browse-live-auctions", icon: Gavel },
        { title: "Register to Bid", url: "/register-to-bid", icon: FileText },
        { title: "Watch List", url: "/auction/watch-list", icon: Bookmark },
        { title: "Auctions Hub", url: "/auctions", icon: Gavel },
      ]
    },
    {
      title: "E-Procurement",
      items: [
        { title: "Procurement", url: "/procurement", icon: Package },
        { title: "Create RFQ", url: "/procurement/create-rfq", icon: Plus },
        { title: "Active RFQs", url: "/procurement/active-rfqs", icon: FileText, badge: "2" },
        { title: "Supplier Management", url: "/procurement/supplier-management", icon: Users },
        { title: "E-Auction", url: "/procurement/e-auction", icon: Gavel },
      ]
    },
    {
      title: "Network",
      items: [
        { title: "Buyer Network", url: "/buyer-network", icon: Users },
        { title: "Explore Network", url: "/explore-network", icon: Search },
        { title: "Connections", url: "/connections", icon: Users },
        { title: "Messages", url: "/messages", icon: MessageCircle },
        { title: "Networking Hub", url: "/networking-hub", icon: Users },
      ]
    }
  ]

  const sellerMenuSections: MenuSection[] = [
    {
      title: "Overview",
      items: [
        { title: "Dashboard", url: "/dashboard", icon: BarChart3 },
        { title: "Equipment Finder", url: "/equipments-finder", icon: Search },
      ]
    },
    {
      title: "Sell Equipment",
      items: [
        { title: "Sell Equipment", url: "/marketplace/sell", icon: Plus },
        { title: "My Listings", url: "/marketplace", icon: Package },
        { title: "Consign Equipment", url: "/auction/consign-equipment", icon: Gavel },
      ]
    },
    {
      title: "Rentals - Seller",
      items: [
        { title: "List Equipment", url: "/rentals/seller/list-equipment", icon: Plus },
        { title: "My Listings", url: "/rentals/seller/listings", icon: Package },
        { title: "Rental Bookings", url: "/rentals/seller/bookings", icon: Calendar },
      ]
    },
    {
      title: "Services",
      items: [
        { title: "Provider Dashboard", url: "/services/provider/dashboard", icon: BarChart3 },
        { title: "Register Provider", url: "/register-as-provider", icon: Plus },
        { title: "Join as Provider", url: "/join-as-service-provider", icon: Users },
        { title: "Messages", url: "/services/messages", icon: MessageCircle },
      ]
    },
    {
      title: "Network",
      items: [
        { title: "Supplier Network", url: "/supplier-network", icon: Users },
        { title: "Become Supplier", url: "/become-supplier", icon: Plus },
        { title: "Connections", url: "/connections", icon: Users },
        { title: "Messages", url: "/messages", icon: MessageCircle },
        { title: "Networking Hub", url: "/networking-hub", icon: Users },
      ]
    },
    {
      title: "Advertising",
      items: [
        { title: "Advertising", url: "/advertising", icon: TrendingUp },
        { title: "Ad Marketplace", url: "/ad-marketplace", icon: ShoppingBag },
      ]
    },
    {
      title: "Spare Parts",
      items: [
        { title: "Spare Parts", url: "/spare-parts", icon: Package },
        { title: "Supplier Dashboard", url: "/supplier-dashboard", icon: BarChart3 },
      ]
    }
  ]

  const currentMenuSections = userRole === 'buyer' ? buyerMenuSections : sellerMenuSections

  const isActive = (path: string) => location.pathname === path
  const isExpanded = (section: string) => openGroups[section.toLowerCase()]

  const toggleGroup = (section: string) => {
    setOpenGroups(prev => ({
      ...prev,
      [section.toLowerCase()]: !prev[section.toLowerCase()]
    }))
  }

  return (
    <div className="space-y-4">
      {/* Role Selector */}
      <Card>
        <CardContent className="p-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Switch View</label>
            <select 
              value={userRole} 
              onChange={(e) => onRoleChange(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg text-sm bg-background"
            >
              <option value="buyer">Buyer Portal</option>
              <option value="seller">Seller Portal</option>
              <option value="service_provider">Service Provider</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardContent className="p-4">
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Quick Actions</h4>
            {userRole === 'buyer' ? (
              <div className="space-y-2">
                <Button size="sm" className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Create RFQ
                </Button>
                <Button size="sm" variant="outline" className="w-full justify-start">
                  <Search className="h-4 w-4 mr-2" />
                  Browse Equipment
                </Button>
              </div>
            ) : (
              <div className="space-y-2">
                <Button size="sm" className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Equipment
                </Button>
                <Button size="sm" variant="outline" className="w-full justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  View Inquiries
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Navigation Menu */}
      <div className="space-y-2">
        {currentMenuSections.map((section) => (
          <div key={section.title} className="space-y-1">
            <Collapsible 
              open={isExpanded(section.title)} 
              onOpenChange={() => toggleGroup(section.title)}
            >
              <CollapsibleTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="w-full justify-between text-sm font-medium"
                >
                  <span>{section.title}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${
                    isExpanded(section.title) ? 'rotate-180' : ''
                  }`} />
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="space-y-1 pl-2">
                {section.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <NavLink
                      key={item.url}
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center justify-between w-full px-3 py-2 text-sm rounded-md transition-colors ${
                          isActive
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                        }`
                      }
                    >
                      <div className="flex items-center">
                        <Icon className="h-4 w-4 mr-3" />
                        <span>{item.title}</span>
                      </div>
                      {item.badge && (
                        <Badge variant="secondary" className="ml-auto">
                          {item.badge}
                        </Badge>
                      )}
                    </NavLink>
                  )
                })}
              </CollapsibleContent>
            </Collapsible>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-sm">Recent Activity</h4>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-foreground">New inquiry received</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="text-foreground">Payment confirmed</p>
                <p className="text-xs text-muted-foreground">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <p className="text-foreground">RFQ deadline approaching</p>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}