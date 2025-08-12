import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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
  Bookmark
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';

interface DashboardSidebarProps {
  userRole: string;
  onRoleChange: (role: string) => void;
}

export function DashboardSidebar({ userRole, onRoleChange }: DashboardSidebarProps) {
  const location = useLocation();
  
  const buyerMenuItems = [
    {
      title: "Overview",
      items: [
        { label: "Dashboard", path: "/dashboard", icon: BarChart3 },
        { label: "Quick Stats", path: "/dashboard/stats", icon: TrendingUp },
      ]
    },
    {
      title: "Purchasing",
      items: [
        { label: "My Orders", path: "/dashboard/orders", icon: ShoppingBag },
        { label: "Order History", path: "/dashboard/order-history", icon: FileText },
        { label: "Pending Orders", path: "/dashboard/pending", icon: Package, badge: "3" },
      ]
    },
    {
      title: "E-Procurement",
      items: [
        { label: "Create RFQ", path: "/dashboard/rfq", icon: Plus },
        { label: "Active RFQs", path: "/dashboard/active-rfq", icon: FileText, badge: "2" },
        { label: "Supplier Management", path: "/dashboard/suppliers", icon: Users },
        { label: "E-Auctions", path: "/dashboard/auctions", icon: Gavel },
      ]
    },
    {
      title: "Marketplace",
      items: [
        { label: "Browse Equipment", path: "/marketplace", icon: Search },
        { label: "Favorites", path: "/dashboard/favorites", icon: Heart, badge: "8" },
        { label: "Watch List", path: "/dashboard/watchlist", icon: Bookmark },
      ]
    },
    {
      title: "Analytics & Reports",
      items: [
        { label: "Spending Analytics", path: "/dashboard/analytics", icon: BarChart3 },
        { label: "Performance Reports", path: "/dashboard/reports", icon: FileText },
      ]
    }
  ];

  const sellerMenuItems = [
    {
      title: "Overview",
      items: [
        { label: "Dashboard", path: "/dashboard", icon: BarChart3 },
        { label: "Sales Overview", path: "/dashboard/sales", icon: TrendingUp },
      ]
    },
    {
      title: "Inventory Management",
      items: [
        { label: "My Listings", path: "/dashboard/listings", icon: Package },
        { label: "Add Equipment", path: "/dashboard/add-equipment", icon: Plus },
        { label: "Pending Listings", path: "/dashboard/pending-listings", icon: Edit, badge: "2" },
      ]
    },
    {
      title: "Sales & Orders",
      items: [
        { label: "Recent Orders", path: "/dashboard/orders", icon: ShoppingBag },
        { label: "Inquiries", path: "/dashboard/inquiries", icon: MessageCircle, badge: "5" },
        { label: "Proposals", path: "/dashboard/proposals", icon: FileText },
      ]
    },
    {
      title: "Marketing",
      items: [
        { label: "Listing Performance", path: "/dashboard/performance", icon: Eye },
        { label: "Promotions", path: "/dashboard/promotions", icon: TrendingUp },
      ]
    },
    {
      title: "Analytics & Reports",
      items: [
        { label: "Sales Analytics", path: "/dashboard/analytics", icon: BarChart3 },
        { label: "Revenue Reports", path: "/dashboard/revenue", icon: DollarSign },
      ]
    }
  ];

  const currentMenuItems = userRole === 'buyer' ? buyerMenuItems : sellerMenuItems;

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="space-y-6">
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
      <nav className="space-y-6">
        {currentMenuItems.map((section) => (
          <div key={section.title} className="space-y-2">
            <h4 className="font-medium text-sm text-muted-foreground px-2">
              {section.title}
            </h4>
            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-2 py-2 text-sm rounded-lg transition-colors ${
                        isActive
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`
                    }
                  >
                    <div className="flex items-center">
                      <Icon className="h-4 w-4 mr-3" />
                      {item.label}
                    </div>
                    {item.badge && (
                      <Badge variant="secondary" className="ml-auto">
                        {item.badge}
                      </Badge>
                    )}
                  </NavLink>
                );
              })}
            </div>
            {section !== currentMenuItems[currentMenuItems.length - 1] && (
              <Separator className="my-4" />
            )}
          </div>
        ))}
      </nav>

      {/* Notifications */}
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
  );
}