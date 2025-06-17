import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Plus, List, Edit } from "lucide-react";
import UserPage from "@/components/content/UserPage";
import TourPage from "@/components/content/TourPage";
import EventPage from "@/components/content/EventPage";
import BlogPage from "@/components/content/BlogPage";

export default function HomePage() {
  const [activeItem, setActiveItem] = useState("user");

  const handleItemChange = (id) => {
    setActiveItem(id);
  };

  const getActiveLabel = () => {
    switch (activeItem) {
      case "user": return "User";
      case "tour": return "Tour";
      case "event": return "EventFestival";
      case "blog": return "BlogGallery";
      default: return "User";
    }
  };

  const renderContent = () => {
    switch (activeItem) {
      case "user": return <UserPage />;
      case "tour": return <TourPage />;
      case "event": return <EventPage />;
      case "blog": return <BlogPage />;
      default: return <UserPage />;
    }
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="flex h-12 items-center px-4">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <img
                src="/Logo.png"
                alt="Company Logo"
                className="h-6 w-auto object-contain"
              />
              <span className="text-white text-xs font-semibold tracking-wide uppercase font-['Vamos']">
                Vampre
              </span>
            </a>
          </div>

          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#" className="text-foreground/90 hover:text-foreground/80 transition-colors">
                Home
              </a>
              <a href="#" className="text-foreground/90 hover:text-foreground/80 transition-colors">
                About
              </a>
              <a href="#" className="text-foreground/90 hover:text-foreground/80 transition-colors">
                Services
              </a>
              <a href="#" className="text-foreground/90 hover:text-foreground/80 transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="pt-12">
        <SidebarProvider>
          <div className="pt-0">
            <AppSidebar onItemChange={handleItemChange} />
          </div>

          <SidebarInset>
            {/* Header with Breadcrumb and Action Buttons */}
            <header className="flex h-12 items-center justify-between border-b px-4">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="-ml-1 md:hidden" />
                <Separator orientation="vertical" className="h-6 hidden md:block" />
                {/* Hidden on mobile, visible on desktop */}
                <div className="hidden md:block">
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbPage className="text-sm font-medium">
                          {getActiveLabel()}
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage className="text-sm font-medium">
                          Dashboard
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </div>

              {/* Action Buttons - Minimal Style */}
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="h-8 px-2 gap-1 text-xs">
                  <Plus className="h-3.5 w-3.5" />
                  <span>New</span>
                </Button>
                <Button variant="ghost" size="sm" className="h-8 px-2 gap-1 text-xs">
                  <List className="h-3.5 w-3.5" />
                  <span>Select</span>
                </Button>
                <Button variant="ghost" size="sm" className="h-8 px-2 gap-1 text-xs">
                  <Edit className="h-3.5 w-3.5" />
                  <span>Edit</span>
                </Button>
              </div>
            </header>

            {/* Dynamic Page Content */}
            {renderContent()}
          </SidebarInset>
        </SidebarProvider>
      </div>

      {/* Global Font Face */}
      <style jsx global>{`
        @font-face {
          font-family: "Vamos";
          src: url("/fonts/Vamos.ttf") format("truetype");
          font-display: swap;
        }
      `}</style>
    </div>
  );
}