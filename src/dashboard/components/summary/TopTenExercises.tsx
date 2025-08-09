import { BarChart3, Trophy, Medal } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useEffect, useMemo } from "react";
import { topTenExercisesThunk } from "../../thunks";
import { TopTenExerciseSkeleton } from "./TopTenExerciseSkeleton";

type Item = {
  exerciseName: string;
  weight: number;
  reps: number;
};

export const TopTenExercises = () => {
  const dispatch = useAppDispatch();
  const { listExercises, loading, error } = useAppSelector(
    (state) => state.topExercises
  );

  useEffect(() => {
    dispatch(topTenExercisesThunk());
  }, [dispatch]);

  const maxVolume = useMemo(() => {
    if (!listExercises?.length) return 1;
    return Math.max(
      ...listExercises.map((i: Item) => (i.weight ?? 0) * (i.reps ?? 0))
    );
  }, [listExercises]);

  if (loading) return <TopTenExerciseSkeleton />;
  if (error) return <p className="text-sm text-red-500">{error}</p>;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <BarChart3 size={18} className="text-[#5386F4]" />
          Top 10 Exercises
        </h2>
      </div>

      <ul className="space-y-3">
        {listExercises.map((item: Item, i: number) => {
          const rank = i + 1;
          const volume = (item.weight ?? 0) * (item.reps ?? 0);
          const pct = Math.max(6, Math.min(100, Math.round((volume / maxVolume) * 100)));

          // Badge de ranking (colores para 1,2,3)
          const rankColors =
            rank === 1
              ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-white"
              : rank === 2
              ? "bg-gradient-to-r from-zinc-300 to-gray-400 text-white"
              : rank === 3
              ? "bg-gradient-to-r from-orange-400 to-amber-600 text-white"
              : "bg-gray-100 text-gray-700";

          // Icono de medalla (solo top 3)
          const medalIcon =
            rank === 1 ? (
              <Trophy size={18} className="text-yellow-500" />
            ) : rank <= 3 ? (
              <Medal
                size={18}
                className={rank === 2 ? "text-gray-400" : "text-orange-500"}
              />
            ) : null;

          return (
            <li
              key={`${item.exerciseName}-${i}`}
              className="group relative overflow-hidden rounded-xl border bg-white p-4 hover:shadow-md hover:-translate-y-[1px] transition-all"
            >
              {/* línea decorativa sutil al pasar */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-200 via-violet-200 to-sky-200 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-3">
                {/* Rank pill */}
                <div
                  className={`shrink-0 h-8 w-8 rounded-full grid place-items-center text-sm font-bold ${rankColors}`}
                >
                  {rank}
                </div>

                {/* Contenido */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate">
                        {item.exerciseName}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {item.weight.toFixed(1)} kg · {item.reps} reps
                      </p>
                    </div>

                    {/* Medalla (top 3) */}
                    {medalIcon && (
                      <span className="shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-50 border">
                        {medalIcon}
                      </span>
                    )}
                  </div>

                  {/* Progress por volumen */}
                  <div className="mt-3 h-2 w-full rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
