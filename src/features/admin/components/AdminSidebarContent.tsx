import { NavLink, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard,
  Package,
  Gavel,
  Users,
  Wrench,
  BarChart3,
  Settings,
  ChevronDown,
  ChevronRight
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from 'react'

const menuItems = [
  {
    title: 'Dashboard',
    url: '/admin',
    icon: LayoutDashboard,
  },
  {
    title: 'Equipment Management',
    icon: Package,
    items: [
      { title: 'All Equipment', url: '/admin/equipment' },
      { title: 'Categories', url: '/admin/equipment/categories' },
      { title: 'Inventory', url: '/admin/equipment/inventory' },
    ]
  },
  {
    title: 'Auctions',
    icon: Gavel,
    items: [
      { title: 'All Auctions', url: '/admin/auctions' },
      { title: 'Live Auctions', url: '/admin/auctions/live' },
      { title: 'Scheduled', url: '/admin/auctions/scheduled' },
    ]
  },
  {
    title: 'User Management',
    icon: Users,
    items: [
      { title: 'All Users', url: '/admin/users' },
      { title: 'Buyers', url: '/admin/users/buyers' },
      { title: 'Suppliers', url: '/admin/users/suppliers' },
      { title: 'Experts', url: '/admin/users/experts' },
    ]
  },
  {
    title: 'Services',
    icon: Wrench,
    items: [
      { title: 'All Services', url: '/admin/services' },
      { title: 'Service Providers', url: '/admin/services/providers' },
      { title: 'Requests', url: '/admin/services/requests' },
    ]
  },
  {
    title: 'Analytics',
    url: '/admin/analytics',
    icon: BarChart3,
  },
  {
    title: 'Settings',
    url: '/admin/settings',
    icon: Settings,
  },
]

export function AdminSidebarContent() {
  const [openGroups, setOpenGroups] = useState<string[]>(['Equipment Management'])
  const location = useLocation()
  
  const toggleGroup = (title: string) => {
    setOpenGroups(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    )
  }

  const isActive = (url: string) => {
    return location.pathname === url || location.pathname.startsWith(url + '/')
  }

  return (
    <nav className="space-y-2">
      {menuItems.map((item) => {
        if (item.items) {
          const isGroupOpen = openGroups.includes(item.title)
          const hasActiveChild = item.items.some(child => isActive(child.url))
          
          return (
            <Collapsible key={item.title} open={isGroupOpen} onOpenChange={() => toggleGroup(item.title)}>
              <CollapsibleTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-between hover:bg-muted ${hasActiveChild ? 'bg-muted text-primary' : ''}`}
                >
                  <div className="flex items-center">
                    <item.icon className="h-4 w-4 mr-3" />
                    <span>{item.title}</span>
                  </div>
                  {isGroupOpen ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 ml-6">
                {item.items.map((subItem) => (
                  <NavLink
                    key={subItem.url}
                    to={subItem.url}
                    className={({ isActive }) =>
                      `block px-3 py-2 text-sm rounded-md transition-colors ${
                        isActive 
                          ? 'bg-primary text-primary-foreground' 
                          : 'hover:bg-muted'
                      }`
                    }
                  >
                    {subItem.title}
                  </NavLink>
                ))}
              </CollapsibleContent>
            </Collapsible>
          )
        }

        return (
          <NavLink
            key={item.url}
            to={item.url!}
            className={({ isActive }) =>
              `flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors ${
                isActive 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-muted'
              }`
            }
          >
            <item.icon className="h-4 w-4 mr-3" />
            {item.title}
          </NavLink>
        )
      })}
    </nav>
  )
}