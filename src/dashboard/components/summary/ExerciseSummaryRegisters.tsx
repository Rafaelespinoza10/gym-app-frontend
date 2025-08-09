import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getSummaryByRangeThunk } from "../../thunks/summaryExercisesThunk";
import type { ExerciseSummaryRegistersProps } from "../../interfaces/summary";
import { Dumbbell } from "lucide-react";
import { ExerciseSummaryCard } from "./ExerciseSummaryCard";
import { ExerciseSummaryCardSkeleton } from "./ExerciseSummayCardSkeleton";

export const ExerciseSummaryRegisters = ({
  startDate,
  endDate,
}: ExerciseSummaryRegistersProps) => {
  const dispatch = useAppDispatch();
  const { summaryExercises, loading, error } = useAppSelector(
    (state) => state.summaryExercises
  );

  useEffect(() => {
    if (!startDate || !endDate) return;
    dispatch(getSummaryByRangeThunk({ startDate, endDate }));
  }, [dispatch, startDate, endDate]);

  if (loading) {
    return (
        <div className="space-y-3">
        {[...Array(10)].map((_, i) => (
          <ExerciseSummaryCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500 text-sm">
        {error || "Error loading exercises"}
      </div>
    );
  }

  if (!summaryExercises.length) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-gray-500">
        <Dumbbell size={48} className="mb-3 text-gray-400" />
        <p className="text-sm font-medium">
          No exercises found for this date range
        </p>
      </div>
    );
  }

  const accents = ["violet", "indigo", "sky"] as const;

  return (
    <div className="grid grid-cols-1 gap-4">
      {summaryExercises.map((ex, i) => (
        <ExerciseSummaryCard
          key={`${ex.exerciseName}-${i}`}
          name={ex.exerciseName}
          reps={ex.reps}
          weight={ex.weight}
          image={`https://source.unsplash.com/160x160/?${encodeURIComponent(
            ex.exerciseName
          )}`}
          accent={accents[i % accents.length]}
          minutes={30}
          onClick={() => {
            // aquí podrías abrir un drawer con el detalle, o navegar
            // console.log("open detail", ex)
          }}
        />
      ))}
    </div>
  );
};
