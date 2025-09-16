import React, { useState, ReactNode, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Menu, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TwoColumnLayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
  sidebarTitle?: string;
  defaultSidebarWidth?: number;
  minSidebarWidth?: number;
  maxSidebarWidth?: number;
  className?: string;
  onSidebarToggle?: (isVisible: boolean) => void;
}

export function TwoColumnLayout({
  sidebar,
  children,
  sidebarTitle,
  defaultSidebarWidth = 320,
  minSidebarWidth = 240,
  maxSidebarWidth = 480,
  className = "",
  onSidebarToggle
}: TwoColumnLayoutProps) {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const navigate = useNavigate();
  const [sidebarWidth, setSidebarWidth] = useState(defaultSidebarWidth);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const startWidth = useRef(0);

  const toggleSidebar = () => {
    const newVisibility = !sidebarVisible;
    setSidebarVisible(newVisibility);
    onSidebarToggle?.(newVisibility);
  };

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    startWidth.current = sidebarWidth;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, [sidebarWidth]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - dragStartX.current;
    const newWidth = Math.max(
      minSidebarWidth,
      Math.min(maxSidebarWidth, startWidth.current + deltaX)
    );
    setSidebarWidth(newWidth);
  }, [isDragging, minSidebarWidth, maxSidebarWidth]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  }, []);

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div className={`container mx-auto px-4 py-8 ${className}`}>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b">
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleSidebar}
            className="flex items-center gap-2"
          >
            <Menu className="h-4 w-4" />
            {sidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
          </Button>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-2">
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

        {/* Vertical Resizer */}
        {sidebarVisible && (
          <div
            className="hidden lg:flex w-0.5 bg-border hover:bg-primary/20 cursor-col-resize transition-colors duration-200 relative group mx-1"
            onMouseDown={handleMouseDown}
            style={{ cursor: isDragging ? 'col-resize' : 'col-resize' }}
          >
            <div className="absolute inset-0 w-2 -mx-1" />
            <div className="w-full bg-border group-hover:bg-primary/40 transition-colors" />
          </div>
        )}

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