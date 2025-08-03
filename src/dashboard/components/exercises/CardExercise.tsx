import type { CardExercisesProps } from "../../interfaces/exercises/Exercises.props";

export const CardExercise = ({ exercise, isSelected, onClick }: CardExercisesProps) => {
  return (
    <div 
      className={`relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
        isSelected ? 'ring-2 ring-blue-500 scale-[1.02]' : ''
      }`}
      onClick={onClick}
    >
      {exercise.image && (
          <img 
            src={exercise.image} 
            alt={exercise.name} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
      )}
      
      <div className="p-4 bg-white">
        <h3 className="font-bold text-lg mb-2 truncate">{exercise.name}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
          {exercise.name}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {exercise.category && (
            <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-xs font-semibold">
              {exercise.category}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};