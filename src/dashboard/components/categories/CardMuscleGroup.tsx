import type { CardMuscleGroupProps } from "../../interfaces"

export const CardMuscleGroup = ({ group }: CardMuscleGroupProps) => {
    return (
        <div
          className={`relative overflow-hidden rounded-2xl cursor-pointer group min-h-[200px] transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-xl ${
            group.gridClass || ""
          }`}
        >
          {/* Image or color background */}
          <div
            className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage: group.imageUrl ? `url(${group.imageUrl})` : undefined,
              backgroundColor: group.bgColor || undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          
          {/* Overlays */}
          {group.imageUrl && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
          )}
          
          {!group.imageUrl && (
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300" />
          )}
          
          {/* Content */}
          <div
            className={`absolute bottom-4 left-4 z-10 font-bold text-xl transition-all duration-300 ${
              group.textColor || "text-white"
            } group-hover:translate-y-1 group-hover:scale-105`}
          >
            {group.name}
          </div>
          
          <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 ${
            group.textColor || "text-white"
          }`}>
            <span className="text-center font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              View exercises
            </span>
          </div>
        </div>
    )
}
