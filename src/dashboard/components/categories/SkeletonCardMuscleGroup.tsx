import type { SkeletonProps } from "../../interfaces/categories/SkeletonCards.props";


export const SkeletonCardMuscleGroup = ({gridClass}: SkeletonProps) => {
  return (
    <div 
    className={`relative overflow-hidden rounded-2xl bg-gray-200 animate-pulse min-h-[200px] ${gridClass ?? ""}`}
    >
      <div className="absolute inset-0 bg-gray-300" />
      {/* Simula el texto */}
      <div className="absolute bottom-4 left-4 h-6 w-24 bg-gray-400 rounded" />
      {/* Simula el hover content */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        <div className="h-4 w-20 bg-gray-400 rounded" />
      </div>
    </div>
  );
};
