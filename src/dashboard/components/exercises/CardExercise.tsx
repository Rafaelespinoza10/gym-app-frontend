import type { CardExercisesProps } from "../../interfaces/exercises/Exercises.props";

export const CardExercise = ({ 
  exercise, 
  isSelected, 
  onClick,
  isLarge = false 
}: CardExercisesProps & { isLarge?: boolean }) => {
  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl cursor-pointer group transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-xl ${
        isSelected ? 'ring-4 ring-blue-500 scale-[1.02]' : ''
      } ${isLarge ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}
    >
      {/* Fondo con imagen */}
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110 bg-gray-200"
        style={{
          backgroundImage: exercise.image ? `url(${exercise.image})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
      
      {/* Contenido principal */}
      <div className="absolute bottom-4 left-4 z-10 font-bold text-xl text-white transition-all duration-300 group-hover:translate-y-1">
        {exercise.name}
      </div>
      
      {/* Tag de categoría */}
      {exercise.category && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block bg-black/30 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
            {exercise.category}
          </span>
        </div>
      )}
      
      {/* Contenido hover - más espacio en cards grandes */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-white">
        <div className="text-center translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <span className="font-medium block mb-2">Ver detalles</span>
          <p className={`${isLarge ? 'text-base' : 'text-sm'} line-clamp-3`}>
            { exercise.name}
          </p>
          {isLarge && exercise.category && (
            <p className="text-sm mt-2">
              <span className="font-semibold">Equipo:</span> {exercise.category}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};