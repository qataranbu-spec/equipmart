import React, { useState, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { ChevronLeft, ChevronRight, Settings } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface TwoColumnLayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
  sidebarTitle?: string;
  defaultSidebarWidth?: number;
  minSidebarWidth?: number;
  maxSidebarWidth?: number;
  className?: string;
}

export function TwoColumnLayout({
  sidebar,
  children,
  sidebarTitle,
  defaultSidebarWidth = 320,
  minSidebarWidth = 240,
  maxSidebarWidth = 480,
  className = ""
}: TwoColumnLayoutProps) {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(defaultSidebarWidth);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleWidthChange = (value: number[]) => {
    setSidebarWidth(value[0]);
  };

  return (
    <div className={`container mx-auto px-4 py-8 ${className}`}>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div 
          className={`transition-all duration-300 ${
            sidebarVisible ? 'lg:block' : 'lg:hidden'
          } ${sidebarVisible ? '' : 'hidden'}`}
          style={{ 
            width: sidebarVisible ? `${sidebarWidth}px` : '0px',
            minWidth: sidebarVisible ? `${sidebarWidth}px` : '0px'
          }}
        >
          <Card className="sticky top-4">
            <div className="p-4">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between mb-4">
                {sidebarTitle && (
                  <h3 className="font-semibold text-lg">{sidebarTitle}</h3>
                )}
                <div className="flex items-center gap-2">
                  {/* Width Adjuster */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-64">
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium">Sidebar Width</label>
                          <div className="mt-2">
                            <Slider
                              value={[sidebarWidth]}
                              onValueChange={handleWidthChange}
                              max={maxSidebarWidth}
                              min={minSidebarWidth}
                              step={20}
                              className="w-full"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground mt-1">
                              <span>{minSidebarWidth}px</span>
                              <span className="font-medium">{sidebarWidth}px</span>
                              <span>{maxSidebarWidth}px</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                  
                  {/* Hide/Show Button */}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={toggleSidebar}
                    className="lg:hidden"
                  >
                    {sidebarVisible ? (
                      <ChevronLeft className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              
              {/* Sidebar Content */}
              {sidebar}
            </div>
          </Card>
        </div>

        {/* Toggle Button for Hidden Sidebar */}
        {!sidebarVisible && (
          <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-10 lg:block hidden">
            <Button
              variant="default"
              size="sm"
              onClick={toggleSidebar}
              className="rounded-r-none shadow-lg"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Mobile Toggle Button */}
          <div className="lg:hidden mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleSidebar}
              className="w-full"
            >
              {sidebarVisible ? (
                <>
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Hide Filters
                </>
              ) : (
                <>
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Show Filters
                </>
              )}
            </Button>
          </div>
          
          {children}
        </div>
      </div>
    </div>
  );
}