import { BarChart3, LineChart } from "lucide-react";
import { Navbar } from "../../shared/components/ui/Navbar";
import { BarChart } from '@mui/x-charts/BarChart';

const DashboardSkeleton = () => {
  return (
    <div className="min-h-screen bg-[#f4f5f7] p-6">
      <Navbar title="Summary" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
        {/* Top Exercises */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <BarChart3 size={18} className="text-[#5386F4]" />
              Top 10 Exercises
            </h2>
          </div>
          <ul className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <li
                key={i}
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 border"
              >
                <div>
                  <p className="text-sm font-medium text-gray-700">Deadlift</p>
                  <span className="text-xs text-gray-500">6,300 kg · 45 reps</span>
                </div>
                <span className="text-indigo-600 font-bold text-base">{i + 1}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Weekly Totals */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className={`p-5 rounded-2xl border shadow-sm hover:shadow-md transition-all duration-150 ${
                  i % 2 === 0 ? "bg-[#e9f0ff]" : "bg-[#e9fff3]"
                }`}
              >
                <p className="text-sm text-gray-500 mb-1">Week {i + 1}</p>
                <h3 className="text-2xl font-semibold text-gray-800">15,450 kg</h3>
                <p className="text-xs text-gray-600 mt-1">
                  Jul {1 + i * 7} – Jul {7 + i * 7}, 2025
                </p>
              </div>
            ))}
          </div>

          {/* Chart Section */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <LineChart size={18} className="text-[#5386F4]" />
                Historical Breakdown
              </h3>
              <div className="flex gap-2 text-sm">
                <select className="border rounded px-2 py-1 text-sm text-gray-600">
                  <option>All</option>
                  <option>Push</option>
                  <option>Pull</option>
                  <option>Legs</option>
                </select>
                <input
                  type="date"
                  className="border rounded px-2 py-1 text-sm text-gray-600"
                />
              </div>
            </div>

            {/* Gráfico real */}
            <div className="h-64">
              <BarChart
                xAxis={[{ scaleType: 'band', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }]}
                series={[{ data: [4300, 5500, 4200, 6000, 5800], label: 'kg' }]}
                width={500}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;
