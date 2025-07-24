import { Outlet } from "react-router-dom"
import { SideBar } from "../../shared/components/ui/SideBar"

export const DashboardLayout = () => {
  return (
    <>
    <div className="min-h-screen w-full bg-[#f4f5f7]">
    <div className="flex">
        <SideBar />
        <main className="ml-20 w-full p-6">
            <Outlet />
        </main>
    </div>
    </div>
    </>
  )
}
