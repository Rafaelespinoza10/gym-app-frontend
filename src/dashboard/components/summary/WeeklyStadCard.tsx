import { type LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface WeeklyStatCardProps {
  title: string;
  value: number;
  unit?: string;
  dateRange: string;
  trend?: number;
  progress?: number;               // 0..100
  accent?: "indigo" | "emerald" | "violet" | "sky";
  icon?: LucideIcon;               // opcional
  subtitle?: string;
  label?: string;                  // ej. "Total"
}

export const WeeklyStatCard = ({
  title,
  value,
  unit = "kg",
  dateRange,
  trend = 0,
  progress = 0,
  accent = "indigo",
  icon: Icon,
  subtitle,
  label = "Total",
}: WeeklyStatCardProps) => {
  const positive = trend >= 0;

  const accents = {
    indigo: {
      bg: "from-indigo-100 via-indigo-50 to-indigo-200",
      ring: "ring-indigo-200",
      chip: "bg-indigo-600/10 text-indigo-700 ring-1 ring-indigo-200/60",
      prog: "from-indigo-500 to-indigo-700",
    },
    emerald: {
      bg: "from-emerald-100 via-emerald-50 to-emerald-200",
      ring: "ring-emerald-200",
      chip: "bg-emerald-600/10 text-emerald-700 ring-1 ring-emerald-200/60",
      prog: "from-emerald-500 to-emerald-700",
    },
    violet: {
      bg: "from-violet-100 via-violet-50 to-violet-200",
      ring: "ring-violet-200",
      chip: "bg-violet-600/10 text-violet-700 ring-1 ring-violet-200/60",
      prog: "from-violet-500 to-violet-700",
    },
    sky: {
      bg: "from-sky-100 via-sky-50 to-sky-200",
      ring: "ring-sky-200",
      chip: "bg-sky-600/10 text-sky-700 ring-1 ring-sky-200/60",
      prog: "from-sky-500 to-sky-700",
    },
  }[accent];

  const clamped = Math.max(0, Math.min(progress, 100));

  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl p-5
        bg-gradient-to-br ${accents.bg}
        border border-white/60 ring-1 ${accents.ring}
        shadow-md hover:shadow-xl hover:-translate-y-[1px] transition-all
      `}
    >
      {/* brillos suaves */}
      <div className="pointer-events-none absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 w-44 h-44 rounded-full bg-white/40 blur-2xl" />

      {/* header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>

        <span className={`inline-flex items-center gap-2 px-3 h-9 rounded-xl ${accents.chip} backdrop-blur-sm`}>
          {Icon && <Icon size={18} />}
          <span className="text-xs font-semibold">{label}</span>
        </span>
      </div>

      {/* valor */}
      <div className="flex items-baseline gap-2">
        <h3 className="text-4xl leading-none font-extrabold text-gray-900">
          {value.toLocaleString()}
        </h3>
        <span className="text-sm text-gray-500">{unit}</span>
      </div>

      {/* rango de fechas */}
      <p className="text-xs text-gray-500 mt-1">{dateRange}</p>

      {/* tendencia */}
      <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full bg-white/90 text-gray-800 shadow-sm">
        {positive ? (
          <>
            <TrendingUp size={14} className="text-emerald-600" />
            <span className="text-emerald-700">+{trend}%</span>
          </>
        ) : (
          <>
            <TrendingDown size={14} className="text-rose-600" />
            <span className="text-rose-700">{trend}%</span>
          </>
        )}
        <span className="text-gray-500">vs prev.</span>
      </div>

      {/* progreso (más grueso + gradiente + contraste) */}
      <div className="mt-4">
        <div className="h-3 w-full rounded-full bg-white/70 ring-1 ring-black/5 overflow-hidden">
          <div
            className={`h-3 bg-gradient-to-r ${accents.prog} rounded-full transition-[width] duration-500 ease-out`}
            style={{ width: `${clamped}%` }}
          />
        </div>
        <div className="mt-1 flex items-center justify-between">
          <p className="text-[11px] text-gray-600">{clamped}% of weekly goal</p>
          <p className="text-[11px] text-gray-500">
            Goal: {Math.round((value / Math.max(clamped, 1)) * 100).toLocaleString()} {unit}
          </p>
        </div>
      </div>
    </div>
  );
};
