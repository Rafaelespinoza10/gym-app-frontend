import { Logo } from './Logo'


interface NavBarProps  {
    title: string;
}

export const Navbar = ({title = 'title'}: NavBarProps) => {
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
        </div>
      </div>
  )
}
