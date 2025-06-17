import React from "react"
import { SearchForm } from "@/components/search-form"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

export function AppSidebar({ onItemChange }) {
  const [activeItem, setActiveItem] = React.useState("user");
  
  const sidebarItems = [
    { title: "User", id: "user" },
    { title: "Tour", id: "tour" },
    { title: "EventFestival", id: "event" },
    { title: "BlogGallery", id: "blog" },
  ].map(item => ({
    ...item,
    isActive: item.id === activeItem
  }));

  const handleItemClick = (id) => {
    setActiveItem(id);
    onItemChange(id);
  };

  return (
    <Sidebar 
      className="top-12"
      style={{ height: 'calc(100vh - 56px)' }}
    >
      <SidebarHeader>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Collection</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={item.isActive}
                    onClick={() => handleItemClick(item.id)}
                  >
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}