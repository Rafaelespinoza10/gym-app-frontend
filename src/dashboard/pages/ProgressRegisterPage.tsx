import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { FormRegisterProgress } from "../components/registerProgress";
import { MuscleGroupExercises } from "../components/categories/MuscleGroupExercises";
import { getAllExercisesThunk } from "../thunks/exercisesThunk";
import { Button } from "../components/exercises/Button";
import { Navbar } from "../../shared/components/ui/Navbar";
import { ExercisesGroup } from "../components/exercises";
import type { Exercise } from "../interfaces/exercises";

const ProgressRegisterPage = () => {
  const dispatch = useAppDispatch();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const { exercises, loading, error } = useAppSelector((state) => state.exercises);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(getAllExercisesThunk(selectedCategory));
      setSelectedExercise(null); // Resetear ejercicio al cambiar categoría
    }
  }, [dispatch, selectedCategory]);

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedExercise(null);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Navbar title='Register Your Progress' />

      {/* Estado de carga */}
      {loading && (
        <div className="text-center py-8">
          <p>Loading exercises...</p>
        </div>
      )}

      {/* Manejo de errores */}
      {error && (
        <div className="text-center py-8 text-red-500">
          <p>Error loading exercises: {error}</p>
        </div>
      )}

      {/* Contenido principal */}
      {!selectedCategory ? (
        <section>
          <div className="max-w-6xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Choose a Muscle Group</h1>
            <MuscleGroupExercises onSelectGroup={setSelectedCategory} />
          </div>
        </section>
      ) : (
        <section className="mt-8">
          <div className="flex items-center mb-4">
            <button 
              onClick={handleBackToCategories}
              className="flex items-center text-blue-500 hover:text-blue-700 mr-4"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to categories
            </button>
            <h2 className="text-2xl font-bold">
              Exercises for {selectedCategory}
            </h2>
          </div>

          <ExercisesGroup
            exercises={exercises}
            selectedExerciseName={selectedExercise?.name || null} // Asegúrate que tu componente use id y no name
            onExerciseSelected={setSelectedExercise}
          />
        </section>
      )}

      {/* Detalles del workout */}
      <section className="mt-8">
        <FormRegisterProgress  /> 
      </section>

      {/* Botón guardar - solo mostrar si hay ejercicio seleccionado */}
      {selectedExercise && (
        <div className="mt-6 text-right">
          <Button className="bg-blue-500 text-white font-semibold hover:bg-blue-600">
            Save Workout
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProgressRegisterPage;