import { useEffect } from "react";
import { CardMuscleGroup } from "./CardMuscleGroup";
import {  Settings } from "lucide-react"; // Importamos los iconos que necesitamos
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getCategoriesThunks } from "../../thunks";
import { SkeletonCardMuscleGroup } from "./SkeletonCardMuscleGroup";
import { skeletonCategoriesGridClass } from "../../interfaces/categories/SkeletonCards.props";


export const MuscleGroupExercises = () => {
  const dispatch = useAppDispatch();
  const {categories, loading, error} = useAppSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategoriesThunks());
  }, [dispatch]);

  
  if (loading) {
    return(
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
    {skeletonCategoriesGridClass.map((gridClass, index) => (
      <SkeletonCardMuscleGroup key={index} gridClass={gridClass} />
    ))}
  </div>
  )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Settings className="w-16 h-16 text-gray-400 mb-4 animate-spin" />
        <h3 className="text-xl font-medium text-gray-700">Error loading data</h3>
        <p className="text-gray-500 mt-2 max-w-md">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          <Settings className="w-4 h-4" />
          Try Again
        </button>
      </div>
    );
  }

  // Estado sin datos
  if (categories.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <svg 
          className="w-24 h-24 text-gray-300 mb-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
          />
        </svg>
        <h3 className="text-xl font-medium text-gray-700">No muscle groups found</h3>
        <p className="text-gray-500 mt-2">We couldn't find any muscle groups to display</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Refresh
        </button>
      </div>
    );
  }

  // Estado con datos
  return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
{categories.map((group) => (
        <CardMuscleGroup key={group._id} group={group} />
      ))}
    </div>
  );
};