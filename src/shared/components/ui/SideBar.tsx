import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { Dumbbell, LayoutDashboard, Settings, TrendingUp } from "lucide-react";

const navItems = [
  { label: "Summary", icon: <LayoutDashboard size={20} />, path: "summary" },
  { label: "Register Exercise", icon: <Dumbbell size={20} />, path: "register-exercises" },
  { label: "Register Progress", icon: <TrendingUp  size={20} />, path: "register-progress" },
];

export const SideBar = () => {
  const location = useLocation();

  return (
    <>
      {/* screen larges or mediums */}
      <aside className="hidden md:flex fixed top-1/2 left-6 -translate-y-1/2 bg-white w-16 rounded-3xl shadow-md  flex-col items-center py-6 space-y-6 z-50">
        <div className="w-10 h-10 bg-black rounded-full mb-6" />

        {navItems.map((item) => (
          <Link
            to={item.path}
            key={item.label}
            className={clsx(
              "p-3 rounded-lg hover:bg-[#5386F4] hover:text-white transition-all duration-200",
              location.pathname === item.path
                ? "bg-[#5386F4] text-white"
                : "text-gray-700"
            )}
            title={item.label}
          >
            {item.icon}
          </Link>
        ))}

        <div className="mt-auto pt-6">
          <button className="p-3 rounded-full hover:bg-gray-300 transition-all">
            <Settings size={20} />
          </button>
        </div>
      </aside>

      {/* screen small */}
      <aside className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md bg-white/60 backdrop-blur-md shadow-xl border border-white/20 rounded-2xl md:hidden">
  <nav className="flex justify-around items-center h-16 px-2">
    {navItems.map((item) => {
      const isActive = location.pathname === item.path;

      return (
        <Link
          to={item.path}
          key={item.label}
          className={clsx(
            "flex flex-col items-center justify-center text-xs font-medium rounded-xl px-3 py-2 transition-all duration-200",
            isActive
              ? "bg-[#e0ecff] text-[#5386F4] shadow-inner"
              : "text-gray-500 hover:text-[#5386F4]"
          )}
        >
          {item.icon}
          <span className="text-[11px] mt-1 font-medium">{item.label}</span>
        </Link>
      );
    })}
  </nav>
</aside>

    </>
  );
};
