import { Outlet } from 'react-router-dom'
import { TwoColumnLayout } from "@/components/layout/TwoColumnLayout"
import { AdminSidebar } from "./AdminSidebar"
import Header from "@/components/layout/Header"

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <TwoColumnLayout 
        sidebar={<AdminSidebar />}
        sidebarTitle="Admin Navigation"
        defaultSidebarWidth={280}
        minSidebarWidth={240}
        maxSidebarWidth={400}
      >
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h1 className="text-2xl font-bold">Admin Panel</h1>
            <p className="text-muted-foreground">Manage your platform centrally</p>
          </div>
          <Outlet />
        </div>
      </TwoColumnLayout>
    </div>
  )
}