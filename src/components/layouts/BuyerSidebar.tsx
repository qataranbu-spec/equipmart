import { NavLink, useLocation } from 'react-router-dom'
import { 
  BarChart3,
  Search, 
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
  Users,
  FileText,
  Gavel,
  Bell,
  Calendar,
  Bookmark,
  CreditCard,
  Shield,
  Wrench,
  Home
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { Badge } from '@/components/ui/badge'

interface NavItem {
  title: string;
  url: string;
  icon: any;
  badge?: string;
}

interface NavGroup {
  group: string;
  items: NavItem[];
}

const buyerNavItems: NavGroup[] = [
  {
    group: "Overview",
    items: [
      { title: "Dashboard", url: "/dashboard", icon: BarChart3 },
      { title: "Equipment Finder", url: "/equipments-finder", icon: Search },
    ]
  },
  {
    group: "Marketplace",
    items: [
      { title: "Browse Equipment", url: "/marketplace", icon: Search },
      { title: "Buy Equipment", url: "/marketplace/buy", icon: ShoppingBag },
      { title: "My Purchases", url: "/purchases/history", icon: Package },
      { title: "Favorites", url: "/favorites", icon: Heart },
    ]
  },
  {
    group: "Rentals",
    items: [
      { title: "Browse Rentals", url: "/rentals/browse", icon: Search },
      { title: "My Rentals", url: "/rentals/my-rentals", icon: Package },
      { title: "Rental Requests", url: "/rentals/requests", icon: FileText },
    ]
  },
  {
    group: "Financing",
    items: [
      { title: "Financing Dashboard", url: "/financing/buyer/dashboard", icon: BarChart3 },
      { title: "Loan Application", url: "/financing/buyer/apply", icon: Plus },
      { title: "Equipment Finance", url: "/financing/marketplace/buyer", icon: CreditCard },
    ]
  },
  {
    group: "Insurance",
    items: [
      { title: "Insurance Dashboard", url: "/insurance/buyer/dashboard", icon: BarChart3 },
      { title: "Insurance Marketplace", url: "/insurance/marketplace", icon: Shield },
    ]
  },
  {
    group: "Services",
    items: [
      { title: "Services Dashboard", url: "/services/buyer/dashboard", icon: BarChart3 },
      { title: "Services Marketplace", url: "/services/marketplace", icon: Search },
      { title: "Find Providers", url: "/find-service-providers", icon: Users },
      { title: "Post Request", url: "/post-service-request", icon: Plus },
      { title: "Messages", url: "/services/messages", icon: MessageCircle },
    ]
  },
  {
    group: "Procurement",
    items: [
      { title: "Create RFQ", url: "/procurement/create-rfq", icon: Plus },
      { title: "Active RFQs", url: "/procurement/active-rfqs", icon: FileText, badge: "2" },
      { title: "Supplier Management", url: "/procurement/supplier-management", icon: Users },
      { title: "E-Auction", url: "/procurement/e-auction", icon: Gavel },
    ]
  },
  {
    group: "Auctions",
    items: [
      { title: "Live Auctions", url: "/browse-live-auctions", icon: Gavel },
      { title: "Register to Bid", url: "/register-to-bid", icon: FileText },
      { title: "Watch List", url: "/auction/watch-list", icon: Bookmark },
      { title: "All Auctions", url: "/auctions", icon: Gavel },
    ]
  },
  {
    group: "Network",
    items: [
      { title: "Buyer Network", url: "/buyer-network", icon: Users },
      { title: "Explore Network", url: "/explore-network", icon: Search },
      { title: "Connections", url: "/connections", icon: Users },
      { title: "Messages", url: "/messages", icon: MessageCircle },
      { title: "Networking Hub", url: "/networking-hub", icon: Users },
    ]
  },
  {
    group: "Spare Parts",
    items: [
      { title: "Spare Parts", url: "/spare-parts", icon: Wrench },
    ]
  }
]

export function BuyerSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path || currentPath.startsWith(path + '/')
  const isGroupExpanded = (group: any) => group.items.some((item: any) => isActive(item.url))

  return (
    <Sidebar
      collapsible="icon"
    >
      <SidebarTrigger className="m-2 self-end" />

      <SidebarContent>
        {buyerNavItems.map((group) => (
          <SidebarGroup
            key={group.group}
          >
            <SidebarGroupLabel>{group.group}</SidebarGroupLabel>
            
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url} 
                        className={({ isActive }) =>
                          isActive ? "bg-muted text-primary font-medium" : "hover:bg-muted/50"
                        }
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        {state === "expanded" && (
                          <div className="flex items-center justify-between w-full">
                            <span>{item.title}</span>
                            {item.badge && (
                              <Badge variant="secondary" className="ml-auto">
                                {item.badge}
                              </Badge>
                            )}
                          </div>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}