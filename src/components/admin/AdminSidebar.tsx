import { 
  BarChart3, 
  ShoppingCart, 
  Truck, 
  Users, 
  Gavel, 
  Wrench, 
  FolderOpen, 
  Settings,
  Home,
  Package,
  UserCog,
  Network,
  FileText,
  Activity,
  ChevronDown
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"
import { useState } from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const menuItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Equipment Management",
    icon: Package,
    items: [
      { title: "All Equipment", url: "/admin/equipment" },
      { title: "Categories", url: "/admin/equipment/categories" },
      { title: "Inventory", url: "/admin/equipment/inventory" },
      { title: "Pricing", url: "/admin/equipment/pricing" },
    ]
  },
  {
    title: "Auctions",
    icon: Gavel,
    items: [
      { title: "All Auctions", url: "/admin/auctions" },
      { title: "Live Auctions", url: "/admin/auctions/live" },
      { title: "Scheduled", url: "/admin/auctions/scheduled" },
      { title: "Completed", url: "/admin/auctions/completed" },
    ]
  },
  {
    title: "User Management",
    icon: Users,
    items: [
      { title: "All Users", url: "/admin/users" },
      { title: "Buyers", url: "/admin/users/buyers" },
      { title: "Suppliers", url: "/admin/users/suppliers" },
      { title: "Experts", url: "/admin/users/experts" },
      { title: "Service Providers", url: "/admin/users/providers" },
    ]
  },
  {
    title: "Services",
    icon: Wrench,
    items: [
      { title: "All Services", url: "/admin/services" },
      { title: "Service Requests", url: "/admin/services/requests" },
      { title: "Providers", url: "/admin/services/providers" },
      { title: "Categories", url: "/admin/services/categories" },
    ]
  },
  {
    title: "Network Management",
    icon: Network,
    items: [
      { title: "Buyer Network", url: "/admin/network/buyers" },
      { title: "Supplier Network", url: "/admin/network/suppliers" },
      { title: "Expert Network", url: "/admin/network/experts" },
      { title: "Partnerships", url: "/admin/network/partnerships" },
    ]
  },
  {
    title: "Content Management",
    icon: FileText,
    items: [
      { title: "Pages", url: "/admin/content/pages" },
      { title: "Blog Posts", url: "/admin/content/blog" },
      { title: "Media Library", url: "/admin/content/media" },
      { title: "SEO Settings", url: "/admin/content/seo" },
    ]
  },
  {
    title: "Analytics & Reports",
    icon: BarChart3,
    items: [
      { title: "Overview", url: "/admin/analytics" },
      { title: "User Activity", url: "/admin/analytics/users" },
      { title: "Sales Reports", url: "/admin/analytics/sales" },
      { title: "Traffic Reports", url: "/admin/analytics/traffic" },
    ]
  },
  {
    title: "Settings",
    icon: Settings,
    items: [
      { title: "General", url: "/admin/settings/general" },
      { title: "Permissions", url: "/admin/settings/permissions" },
      { title: "Integrations", url: "/admin/settings/integrations" },
      { title: "Backup", url: "/admin/settings/backup" },
    ]
  },
]

export function AdminSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({})

  const isCollapsed = state === "collapsed"
  const isActive = (path: string) => currentPath === path
  const isGroupActive = (items: { url: string }[]) => 
    items.some(item => currentPath === item.url)

  const getNavClasses = (active: boolean) => 
    active 
      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
      : "hover:bg-sidebar-accent/50"

  const toggleGroup = (title: string) => {
    setOpenGroups(prev => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="gap-0">
        <div className="flex h-16 items-center border-b px-6">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-sidebar-primary" />
            {!isCollapsed && (
              <span className="font-semibold text-sidebar-foreground">
                Equipment CMS
              </span>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-auto py-2">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    {item.items ? (
                      <Collapsible 
                        open={openGroups[item.title] ?? isGroupActive(item.items)}
                        onOpenChange={() => toggleGroup(item.title)}
                      >
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className="w-full justify-between">
                            <div className="flex items-center gap-2">
                              <item.icon className="h-4 w-4" />
                              {!isCollapsed && <span>{item.title}</span>}
                            </div>
                            {!isCollapsed && (
                              <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                            )}
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        {!isCollapsed && (
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              {item.items.map((subItem) => (
                                <SidebarMenuSubItem key={subItem.title}>
                                  <SidebarMenuSubButton asChild>
                                    <NavLink 
                                      to={subItem.url} 
                                      className={getNavClasses(isActive(subItem.url))}
                                    >
                                      <span>{subItem.title}</span>
                                    </NavLink>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        )}
                      </Collapsible>
                    ) : (
                      <SidebarMenuButton asChild>
                        <NavLink 
                          to={item.url} 
                          className={getNavClasses(isActive(item.url))}
                        >
                          <item.icon className="h-4 w-4" />
                          {!isCollapsed && <span>{item.title}</span>}
                        </NavLink>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}