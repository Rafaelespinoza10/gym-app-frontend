import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

type Mode = "LAST" | "CURRENT";
type Period = "DAY" | "WEEK";

interface DateRangeSelectorProps {
  onApply: (startDate: string, endDate: string) => void;
}

export const DateRangeSelector = ({ onApply }: DateRangeSelectorProps) => {
  const [mode, setMode] = useState<Mode>("CURRENT");
  const [period, setPeriod] = useState<Period>("WEEK");
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (mode === "CURRENT") applyRange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, period]);

  const calcRange = () => {
    const today = dayjs();
    let start: dayjs.Dayjs;
    let end: dayjs.Dayjs;

    if (period === "DAY") {
      if (mode === "LAST") {
        start = today.subtract(count, "day").startOf("day");
        end = today.subtract(1, "day").endOf("day");
      } else {
        start = today.startOf("day");
        end = today.endOf("day");
      }
    } else {
      if (mode === "LAST") {
        start = today.subtract(count, "week").startOf("week");
        end = today.subtract(1, "week").endOf("week");
      } else {
        start = today.startOf("week");
        end = today.endOf("week");
      }
    }
    return { start, end };
  };

  const applyRange = () => {
    const { start, end } = calcRange();
    onApply(start.format("MM/DD/YYYY"), end.format("MM/DD/YYYY"));
  };

  const preview = useMemo(() => {
    const { start, end } = calcRange();
    return `${start.format("MMM D")} – ${end.format("MMM D, YYYY")}`;
  }, [mode, period, count]);

  return (
    <div className="rounded-2xl   backdrop-blur-sm p-4">
      {/* MODE pill */}
      <div className="relative w-full bg-gray-100 rounded-full p-1 mb-3">
        <div
          className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-white shadow transition-transform duration-300 ${
            mode === "LAST" ? "translate-x-0" : "translate-x-full"
          }`}
        />
        <div className="relative grid grid-cols-2">
          {(["LAST", "CURRENT"] as Mode[]).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`z-10 px-4 py-1.5 text-sm font-semibold transition-colors ${
                mode === m ? "text-gray-900" : "text-gray-500"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* PERIOD tabs */}
      <div className="grid grid-cols-2 rounded-xl border overflow-hidden">
        {(["DAY", "WEEK"] as Period[]).map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            className={`py-2 text-sm font-medium transition-colors ${
              period === p ? "bg-indigo-50 text-indigo-700" : "bg-white text-gray-700"
            }`}
          >
            {p === "DAY" ? "Day" : "Week"}
          </button>
        ))}
      </div>

      {/* COUNTER + APPLY (solo LAST) */}
      {mode === "LAST" && (
        <>
          <div className="mt-3 flex items-center justify-between gap-2">
            <span className="text-sm text-gray-600">Period</span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setCount((c) => Math.max(1, c - 1))}
                className="p-2 rounded-lg border bg-white hover:bg-gray-50 active:scale-95"
                aria-label="Decrease"
              >
                <ChevronLeft size={16} />
              </button>
              <input
                type="number"
                min={1}
                max={10}
                value={count}
                onChange={(e) => setCount(Math.min(10, Math.max(1, Number(e.target.value) || 1)))}
                className="w-16 text-center rounded-lg border px-3 py-1 text-sm"
              />
              <button
                onClick={() => setCount((c) => Math.min(10, c + 1))}
                className="p-2 rounded-lg border bg-white hover:bg-gray-50 active:scale-95"
                aria-label="Increase"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            <span className="text-sm text-gray-500 min-w-16 text-right">
              {period === "DAY" ? "Days" : "Weeks"}
            </span>
          </div>

          <button
            onClick={applyRange}
            className="mt-3 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-2 text-sm font-semibold shadow hover:opacity-95 active:scale-[0.99] transition"
          >
            Apply filter
          </button>
        </>
      )}

      {/* PREVIEW rango aplicado */}
      <div className="mt-3 flex items-center gap-2 text-xs text-gray-600">
        <Calendar size={14} className="text-indigo-600" />
        <span>{preview}</span>
      </div>
    </div>
  );
};
