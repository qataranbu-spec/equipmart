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

const sellerNavItems: NavGroup[] = [
  {
    group: "Overview",
    items: [
      { title: "Dashboard", url: "/dashboard", icon: BarChart3 },
      { title: "Equipment Finder", url: "/equipments-finder", icon: Search },
    ]
  },
  {
    group: "Sell Equipment",
    items: [
      { title: "Sell Equipment", url: "/marketplace/sell", icon: Plus },
      { title: "My Listings", url: "/marketplace", icon: Package },
      { title: "Consign Equipment", url: "/auction/consign-equipment", icon: Gavel },
    ]
  },
  {
    group: "Rentals - Seller",
    items: [
      { title: "List Equipment", url: "/rentals/seller/list-equipment", icon: Plus },
      { title: "My Listings", url: "/rentals/seller/listings", icon: Package },
      { title: "Rental Bookings", url: "/rentals/seller/bookings", icon: Calendar },
    ]
  },
  {
    group: "Financing",
    items: [
      { title: "Company Dashboard", url: "/financing/company/dashboard", icon: BarChart3 },
      { title: "Product Management", url: "/financing/company/products", icon: Package },
      { title: "Recovery Center", url: "/financing/company/recovery", icon: Shield },
      { title: "Seller Dashboard", url: "/financing/marketplace/seller", icon: TrendingUp },
      { title: "Financier Dashboard", url: "/financing/marketplace/financier", icon: CreditCard },
    ]
  },
  {
    group: "Insurance",
    items: [
      { title: "Provider Dashboard", url: "/insurance/provider/dashboard", icon: BarChart3 },
      { title: "Insurance Marketplace", url: "/insurance/marketplace", icon: Shield },
    ]
  },
  {
    group: "Services",
    items: [
      { title: "Provider Dashboard", url: "/services/provider/dashboard", icon: BarChart3 },
      { title: "Register Provider", url: "/register-as-provider", icon: Plus },
      { title: "Join as Provider", url: "/join-as-service-provider", icon: Users },
      { title: "Messages", url: "/services/messages", icon: MessageCircle },
    ]
  },
  {
    group: "Network",
    items: [
      { title: "Supplier Network", url: "/supplier-network", icon: Users },
      { title: "Become Supplier", url: "/become-supplier", icon: Plus },
      { title: "Connections", url: "/connections", icon: Users },
      { title: "Messages", url: "/messages", icon: MessageCircle },
      { title: "Networking Hub", url: "/networking-hub", icon: Users },
    ]
  },
  {
    group: "Advertising",
    items: [
      { title: "Advertising", url: "/advertising", icon: TrendingUp },
      { title: "Ad Marketplace", url: "/ad-marketplace", icon: ShoppingBag },
    ]
  },
  {
    group: "Spare Parts",
    items: [
      { title: "Spare Parts", url: "/spare-parts", icon: Wrench },
      { title: "Supplier Dashboard", url: "/supplier-dashboard", icon: BarChart3 },
    ]
  }
]

export function SellerSidebar() {
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
        {sellerNavItems.map((group) => (
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