import { Outlet } from "react-router-dom";
import { SideBar } from "../../shared/components/ui/SideBar";

export const DashboardLayout = () => {
  return (
    <div className="min-h-screen w-full bg-[#f4f5f7]">
      <div className="flex">
        {/* Quita el aside con hidden md:flex */}
        <SideBar />

        {/* Deja espacio para la bottom-nav en mobile */}
        <main className="flex-1 w-full p-4 pb-24 sm:p-6 md:pb-6 md:ml-20">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
