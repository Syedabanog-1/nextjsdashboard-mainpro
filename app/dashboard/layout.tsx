import React from 'react';
/**import SideNav from '@/app/dashboard/SideNav';*/
import SideNav from '@/app/ui/dashboard/sidenav';
export const experimental_ppr = true;



interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      {/* Sidebar Section */}
      <div className="w-full flex-none md:w-64 bg-gray-800 text-white">
        <SideNav /> {/* Make sure the SideNav component is working */}
      </div>

      {/* Main Content Section */}
      <div className="flex-1 p-6 md:p-12 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
