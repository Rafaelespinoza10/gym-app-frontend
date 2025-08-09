import { LogOut } from 'lucide-react';
import { Logo } from './Logo'
import { logout } from '../../../auth/slices';
import { useAppDispatch } from '../../../app/hooks';


interface NavBarProps  {
    title: string;
}

export const Navbar = ({title = 'title'}: NavBarProps) => {
  const dispatch = useAppDispatch()

const handleLogout = () => {
  dispatch(logout());
}

return (
<div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-900 flex items-center gap-2">
          
          <Logo width={80} height={80} />
          {title}
        </h1>
        <div className="flex items-center gap-3 bg-white p-2 pr-4 rounded-full shadow-sm">
          <img
            src="/images/categories/profile_example.jpg"
            alt="avatar"
            className="w-9 h-9 rounded-full"
          />
          <div className="text-sm">
            <p className="font-medium text-gray-800">Rafael Moreno</p>
            <p className="text-gray-400 text-xs">Administrator</p>
          </div>

          <button
          onClick={handleLogout}
          className="ml-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
          title="Logout"
        >
          <LogOut size={18} className="text-gray-500 hover:text-red-500" />
        </button>
        </div>
      </div>
  )
}
