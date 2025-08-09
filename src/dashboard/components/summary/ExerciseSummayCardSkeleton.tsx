export const ExerciseSummaryCardSkeleton = () => {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm">
        {/* Accent bar */}
        <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-violet-500 to-fuchsia-600" />
  
        {/* Shimmer layer */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.5s_infinite]" />
  
        <div className="flex items-center gap-4 p-4 md:p-5">
          {/* Media placeholder */}
          <div className="h-16 w-16 md:h-18 md:w-18 rounded-xl bg-gray-100 border border-gray-100" />
  
          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Title & badge row */}
            <div className="flex items-start justify-between gap-3">
              <div className="h-5 w-40 rounded bg-gray-100" />
              <div className="h-6 w-20 rounded-full bg-gray-200" />
            </div>
  
            {/* Chips */}
            <div className="mt-2 flex flex-wrap gap-2">
              <div className="h-6 w-24 rounded-full bg-gray-100" />
              <div className="h-6 w-20 rounded-full bg-gray-100" />
            </div>
  
            {/* Progress bar */}
            <div className="mt-3 h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
              <div className="h-1.5 w-1/3 bg-gray-200 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  