import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
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

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Navigation Bar with Logo */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="flex h-12 items-center px-4">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              {/* Company Logo */}
              <img
                src="/Logo.png"
                alt="Company Logo"
                className="h-6 w-auto object-contain"
              />
              <span
                style={{
                    color:"white",
                  fontSize: "0.825rem",
                  fontWeight: 600,
                  fontFamily: "'Vamos', sans-serif",
                  letterSpacing: "1px",
                  WebkitBackgroundClip: "text",
                //   WebkitTextFillColor: "transparent",
                  textTransform: "uppercase",
                }}
              >
                Vampre
              </span>
            </a>
          </div>

          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a
                href="#"
                className="transition-colors hover:text-foreground/80 text-foreground/90"
              >
                Home
              </a>
              <a
                href="#"
                className="transition-colors hover:text-foreground/80 text-foreground/90"
              >
                About
              </a>
              <a
                href="#"
                className="transition-colors hover:text-foreground/80 text-foreground/90"
              >
                Services
              </a>
              <a
                href="#"
                className="transition-colors hover:text-foreground/80 text-foreground/90"
              >
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
            <AppSidebar />
          </div>

          <SidebarInset>
            {/* Breadcrumb Navigation */}
            <header className="flex h-10 items-center gap-4 border-b px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="h-6" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Building Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </header>

            {/* Page Content */}
            <div className="flex flex-1 flex-col gap-6 p-6">
              <div className="grid auto-rows-min gap-6 md:grid-cols-3">
                <div className="bg-muted/50 aspect-video rounded-lg" />
                <div className="bg-muted/50 aspect-video rounded-lg" />
                <div className="bg-muted/50 aspect-video rounded-lg" />
              </div>
              <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-lg" />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
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
