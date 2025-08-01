  import { Button } from "../components/exercises/Button";
  import { MuscleGroupExercises } from "../components/categories/MuscleGroupExercises";
import { Navbar } from "../../shared/components/ui/Navbar";

  const ProgressRegisterPage = () => {
    return (
      <div className="max-w-5xl mx-auto">
        {/* Header */}
       <Navbar title='Register Your Progress' />

        {/* Lista de ejercicios */}
        <section>
          <div className="max-w-6xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Choose a Muscle Group</h1>
            <MuscleGroupExercises />
          </div>
        </section>

        {/* Detalles del workout */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Workout Details
          </h2>
          <div className="space-y-4 max-w-md">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Workout Name
              </label>
              <input
                type="text"
                placeholder="Morning Session"
                className="w-full rounded-xl border border-gray-300 p-3 bg-gray-50 text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Workout Type
              </label>
              <select className="w-full rounded-xl border border-gray-300 p-3 bg-gray-50 text-gray-900">
                <option value="">Select type</option>
                <option value="strength">Strength</option>
                <option value="cardio">Cardio</option>
                <option value="mobility">Mobility</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Reps
              </label>
              <input
                type="number"
                placeholder="0"
                className="w-full rounded-xl border border-gray-300 p-3 bg-gray-50 text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Weight (lbs)
              </label>
              <input
                type="number"
                placeholder="0"
                className="w-full rounded-xl border border-gray-300 p-3 bg-gray-50 text-gray-900"
              />
            </div>
          </div>
        </section>

        {/* Botón guardar */}
        <div className="mt-6 text-right">
          <Button className="bg-blue-500 text-white font-semibold hover:bg-blue-600">
            Save Workout
          </Button>
        </div>
      </div>
    );
  };

  export default ProgressRegisterPage;
