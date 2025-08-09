import { BarChart3 } from "lucide-react"

export const TopTenExerciseSkeleton = () => {
  return (
<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <BarChart3 size={18} className="text-[#5386F4]" />
          Top 10 Exercises
        </h2>
      </div>

      <ul className="space-y-3 animate-pulse">
        {Array.from({ length: 10 }).map((_, i) => (
          <li
            key={i}
            className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border"
          >
            <div className="flex flex-col gap-2 w-full">
              <div className="h-4 bg-gray-300 rounded w-3/4" />
              <div className="h-3 bg-gray-200 rounded w-1/2" />
            </div>
            <div className="h-6 w-6 bg-gray-300 rounded-full ml-4" />
          </li>
        ))}
      </ul>
    </div>
  )
}
