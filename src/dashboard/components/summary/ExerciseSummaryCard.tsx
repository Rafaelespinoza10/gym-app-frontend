import { Dumbbell, Timer, Repeat2, Weight, ChevronRight } from "lucide-react";

type Props = {
  name: string;
  reps: number;
  weight: number;
  image?: string;
  accent?: "indigo" | "violet" | "sky";
  minutes?: number;
  onClick?: () => void;
};

const accentMap = {
  indigo: "from-indigo-500 to-indigo-600",
  violet: "from-violet-500 to-fuchsia-600",
  sky: "from-sky-500 to-cyan-600",
} as const;

export const ExerciseSummaryCard = ({
  name,
  reps,
  weight,
  image,
  accent = "violet",
  minutes = 30,
  onClick,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className="group w-full text-left relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all"
    >
      {/* Accent bar (izquierda) */}
      <div
        className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b ${accentMap[accent]}`}
      />

      {/* Brillos muy sutiles */}
      <div className="pointer-events-none absolute -right-14 -top-14 w-40 h-40 rounded-full bg-indigo-50 blur-2xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 w-28 h-28 rounded-full bg-violet-50 blur-xl" />

      <div className="flex items-center gap-4 p-4 md:p-5">
        {/* Media */}
        <div className="relative h-16 w-16 md:h-18 md:w-18 rounded-xl overflow-hidden bg-gray-100 border border-gray-100 flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <Dumbbell className="text-gray-400" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-semibold text-gray-900 truncate">{name}</h3>

            {/* Duración + chevron */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-900 text-white">
                <Timer size={14} />
                {minutes} min
              </span>
              <ChevronRight
                size={18}
                className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Chips */}
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-full px-2.5 py-1">
              <Weight size={14} className="text-gray-500" />
              {weight.toFixed(1)} kg
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-full px-2.5 py-1">
              <Repeat2 size={14} className="text-gray-500" />
              {reps} reps
            </span>
          </div>

          {/* Barra de progreso (decorativa) */}
          <div className="mt-3 h-1.5 w-full rounded-full bg-gray-100">
            <div
              className={`h-1.5 rounded-full bg-gradient-to-r ${accentMap[accent]} transition-all`}
              style={{ width: `${Math.min(100, Math.max(20, reps * 5))}%` }}
            />
          </div>
        </div>
      </div>
    </button>
  );
};
