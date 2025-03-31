
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ThemeToggle } from '@/components/theme-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  BarChart3,
  Calendar,
  Home,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  Users,
  Menu,
  X
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
  badge?: number;
}

const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Feed',
    href: '/feed',
    icon: Home,
  },
  {
    title: 'Analytics',
    href: '/analytics',
    icon: BarChart3,
  },
  {
    title: 'Messages',
    href: '/messages',
    icon: MessageSquare,
    badge: 3,
  },
  {
    title: 'Schedule',
    href: '/schedule',
    icon: Calendar,
  },
  {
    title: 'Community',
    href: '/community',
    icon: Users,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];

interface SidebarNavProps {
  className?: string;
}

export function SidebarNav({ className }: SidebarNavProps) {
  const location = useLocation();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  
  return (
    <>
      {/* Mobile nav toggle button */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="md:hidden fixed top-4 right-4 z-50"
        onClick={toggleMobileNav}
      >
        {isMobileNavOpen ? <X /> : <Menu />}
      </Button>
      
      {/* Sidebar wrapper with mobile support */}
      <div 
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-sidebar border-r border-sidebar-border transform transition-transform duration-300 ease-in-out md:translate-x-0",
          isMobileNavOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center h-14 px-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-social-purple to-social-blue flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <span className="font-bold text-lg text-foreground">SocialDash</span>
            </div>
          </div>
          
          <ScrollArea className="flex-1 px-4 py-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                    location.pathname === item.href 
                      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
                      : "text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                  {item.badge && (
                    <Badge className="ml-auto bg-primary text-primary-foreground" variant="secondary">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              ))}
            </nav>
            
            <Separator className="my-4" />
            
            <div className="mt-2">
              <h3 className="px-4 text-xs font-medium text-muted-foreground mb-2">Your Platforms</h3>
              <div className="space-y-1 px-3">
                {['Twitter', 'Instagram', 'Facebook', 'LinkedIn'].map((platform) => (
                  <div key={platform} className="flex items-center gap-3 py-2">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      platform === 'Twitter' ? "bg-social-blue" :
                      platform === 'Instagram' ? "bg-social-purple" :
                      platform === 'Facebook' ? "bg-blue-600" :
                      "bg-social-blue-dark"
                    )} />
                    <span className="text-sm text-sidebar-foreground/80">{platform}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
          
          <div className="p-4 border-t border-sidebar-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium leading-none">John Doe</span>
                  <span className="text-xs text-muted-foreground">john@example.com</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
