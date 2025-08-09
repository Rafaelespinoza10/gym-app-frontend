import { LineChart } from "lucide-react";
import { Navbar } from "../../shared/components/ui/Navbar";
import { TopTenExercises } from "../components/summary/TopTenExercises";
import { ExerciseSummaryRegisters, WeeklyStatCard } from "../components/summary";
import { DateRangeSelector } from "../../shared/components/ui";
import { useEffect, useState } from "react";
import { getSummaryTotal } from "../services";

const SummaryPage = () => {
  const [startDate, setStartDate] = useState("07/20/2025");
  const [endDate, setEndDate] = useState("08/07/2025");

  const handleApplyDates = (start: string, end: string) => {
    setStartDate(start);
    setEndDate(end);
  }


  useEffect(  () => {
    const fetchSummary = async() => {
      try{
        const response = await getSummaryTotal();
        console.log(response);
      }catch(e){
        console.log(e);
      }
    }
    fetchSummary();
  },[])


  return (
    <div className="min-h-screen bg-[#f4f5f7] p-6">
      <Navbar title="Summary" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">

        {/* Weekly Totals */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <WeeklyStatCard 
              title="Weekly Total Weight"
              value={169.10}
              dateRange="1"
              accent={'sky'}
            />

          <WeeklyStatCard 
              title="Monthly Total Weight"
              value={102}
              dateRange="1"
            />
          </div>

          {/* Chart Section */}
          <div className=" bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <LineChart size={18} className="text-[#5386F4]" />
                Historical Breakdown
              </h3>
              </div>
              <DateRangeSelector onApply={handleApplyDates} />
            <ExerciseSummaryRegisters startDate={startDate} endDate={endDate} />
          </div>
        </div>
        {/* Top Exercises */}

      <TopTenExercises />
      </div>
    </div>
  );
};

export default SummaryPage;
