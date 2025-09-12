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

interface MenuItem {
  label: string;
  path: string;
  icon: React.ComponentType<any>;
  badge?: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

export function DashboardSidebar({ userRole, onRoleChange }: DashboardSidebarProps) {
  const location = useLocation();
  
  const buyerMenuItems: MenuSection[] = [
    {
      title: "Overview",
      items: [
        { label: "Dashboard", path: "/dashboard", icon: BarChart3 },
        { label: "Equipment Finder", path: "/equipments-finder", icon: Search },
      ]
    },
    {
      title: "Marketplace",
      items: [
        { label: "Browse Equipment", path: "/dashboard/browse-equipment", icon: Search },
        { label: "Buy Equipment", path: "/marketplace/buy", icon: ShoppingBag },
        { label: "Equipment Details", path: "/equipment/1", icon: Eye },
        { label: "Contact Seller", path: "/contact-seller", icon: MessageCircle },
        { label: "Favorites", path: "/favorites", icon: Heart },
      ]
    },
    {
      title: "Rentals",
      items: [
        { label: "Browse Rentals", path: "/rentals/browse", icon: Search },
        { label: "My Rentals", path: "/rentals/my-rentals", icon: Package },
        { label: "Rental Requests", path: "/rentals/requests", icon: FileText },
        { label: "Book Equipment", path: "/book-equipment", icon: Calendar },
      ]
    },
    {
      title: "Services",
      items: [
        { label: "Services Marketplace", path: "/services/marketplace", icon: Search },
        { label: "Service Dashboard", path: "/services/buyer/dashboard", icon: BarChart3 },
        { label: "Find Providers", path: "/find-service-providers", icon: Users },
        { label: "Post Request", path: "/post-service-request", icon: Plus },
        { label: "Messages", path: "/services/messages", icon: MessageCircle },
      ]
    },
    {
      title: "Auctions",
      items: [
        { label: "Live Auctions", path: "/browse-live-auctions", icon: Gavel },
        { label: "Register to Bid", path: "/register-to-bid", icon: FileText },
        { label: "Watch List", path: "/auction/watch-list", icon: Bookmark },
        { label: "Auctions Hub", path: "/auctions", icon: Gavel },
      ]
    },
    {
      title: "E-Procurement",
      items: [
        { label: "Procurement", path: "/procurement", icon: Package },
        { label: "Create RFQ", path: "/procurement/create-rfq", icon: Plus },
        { label: "Active RFQs", path: "/procurement/active-rfqs", icon: FileText, badge: "2" },
        { label: "Supplier Management", path: "/procurement/supplier-management", icon: Users },
        { label: "E-Auction", path: "/procurement/e-auction", icon: Gavel },
      ]
    },
    {
      title: "Network",
      items: [
        { label: "Buyer Network", path: "/buyer-network", icon: Users },
        { label: "Explore Network", path: "/explore-network", icon: Search },
        { label: "Connections", path: "/connections", icon: Users },
        { label: "Messages", path: "/messages", icon: MessageCircle },
        { label: "Networking Hub", path: "/networking-hub", icon: Users },
      ]
    }
  ];

  const sellerMenuItems: MenuSection[] = [
    {
      title: "Overview",
      items: [
        { label: "Dashboard", path: "/dashboard", icon: BarChart3 },
        { label: "Equipment Finder", path: "/equipments-finder", icon: Search },
      ]
    },
    {
      title: "Sell Equipment",
      items: [
        { label: "Sell Equipment", path: "/marketplace/sell", icon: Plus },
        { label: "My Listings", path: "/marketplace", icon: Package },
        { label: "Consign Equipment", path: "/auction/consign-equipment", icon: Gavel },
      ]
    },
    {
      title: "Rentals - Seller",
      items: [
        { label: "List Equipment", path: "/rentals/seller/list-equipment", icon: Plus },
        { label: "My Listings", path: "/rentals/seller/listings", icon: Package },
        { label: "Rental Bookings", path: "/rentals/seller/bookings", icon: Calendar },
      ]
    },
    {
      title: "Services",
      items: [
        { label: "Provider Dashboard", path: "/services/provider/dashboard", icon: BarChart3 },
        { label: "Register Provider", path: "/register-as-provider", icon: Plus },
        { label: "Join as Provider", path: "/join-as-service-provider", icon: Users },
        { label: "Messages", path: "/services/messages", icon: MessageCircle },
      ]
    },
    {
      title: "Network",
      items: [
        { label: "Supplier Network", path: "/supplier-network", icon: Users },
        { label: "Become Supplier", path: "/become-supplier", icon: Plus },
        { label: "Connections", path: "/connections", icon: Users },
        { label: "Messages", path: "/messages", icon: MessageCircle },
        { label: "Networking Hub", path: "/networking-hub", icon: Users },
      ]
    },
    {
      title: "Advertising",
      items: [
        { label: "Advertising", path: "/advertising", icon: TrendingUp },
        { label: "Ad Marketplace", path: "/ad-marketplace", icon: ShoppingBag },
      ]
    },
    {
      title: "Spare Parts",
      items: [
        { label: "Spare Parts", path: "/spare-parts", icon: Package },
        { label: "Supplier Dashboard", path: "/supplier-dashboard", icon: BarChart3 },
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