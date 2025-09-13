import { Outlet } from 'react-router-dom'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SellerSidebar } from "./SellerSidebar"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export function SellerDashboardLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        {/* Global trigger in header */}
        <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center bg-background border-b">
          <SidebarTrigger className="ml-4" />
          <div className="flex-1">
            <Header />
          </div>
        </header>

        <div className="flex min-h-screen w-full pt-16">
          <SellerSidebar />
          
          <main className="flex-1 flex flex-col">
            <div className="flex-1 p-6">
              <Outlet />
            </div>
            <Footer />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}