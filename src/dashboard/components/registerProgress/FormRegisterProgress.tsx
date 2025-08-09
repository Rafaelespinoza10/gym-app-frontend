import { useForm } from "react-hook-form";
import type { FormRegisterProgressProps } from "../../interfaces/exercises/Exercises.props";
import type { FormDataReps } from "../../interfaces/reps";
import { postRepsByExerciseId } from "../../services/reps.api";
import { toast } from "react-toastify";
import { useLoading } from "../../../app/context";
import { useAppDispatch } from "../../../app/hooks";
import { topTenExercisesThunk } from "../../thunks";

export const FormRegisterProgress = ({
  exercise,
}: FormRegisterProgressProps) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataReps>();
  const { showLoading, hideLoading } = useLoading();

  const onSubmit = async (data: FormDataReps) => {
    if(!exercise) return;
    if (!exercise._id) {
        toast.error("Invalid exercise ID");
        return;
      }
  
    const payload = {
      ...data,
      exerciseId: exercise._id,
    };
    console.log('payload', payload);
    try {
      showLoading("Crating register, wait a few seconds...")
      await postRepsByExerciseId(payload);
      toast.success("Register created successfully");
      // update store
      dispatch(topTenExercisesThunk());
      reset();
    } catch (error: unknown) {
        console.log(error);
      if (error instanceof Error) toast.error(error.message);
      else toast.error("Login failed");
    }finally{
        hideLoading();
    }
  };

  if (exercise)
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Workout Details
        </h2>

        <div className="space-y-4 max-w-md">
          {/* Nombre del ejercicio (solo visual) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Exercise
            </label>
            <input
              type="text"
              value={exercise.name}
              disabled
              className="w-full rounded-xl border border-gray-300 p-3 bg-gray-100 text-gray-900"
            />
          </div>

          {/* Total Reps */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Total Reps
            </label>
            <input
              type="number"
              placeholder="0"
              {...register("count", {
                required: "Reps are required",
                min: { value: 1, message: "Minimum is 1 rep" },
                valueAsNumber: true,
              })}
              
              className="w-full rounded-xl border border-gray-300 p-3 bg-gray-50 text-gray-900"
            />
            {errors.count && (
              <p className="text-sm text-red-500 mt-1">Reps are required</p>
            )}
          </div>

          {/* Total Weight */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Total Weight (Kgs)
            </label>
            <input
              type="number"
              placeholder="0"
              step="0.5"
              {...register("weight", {
                required: "weight is required",
                min: { value: 1, message: "Minimum is 1 kg " },
                valueAsNumber: true,
              })}
              
              className="w-full rounded-xl border border-gray-300 p-3 bg-gray-50 text-gray-900"
            />
            {errors.weight && (
              <p className="text-sm text-red-500 mt-1">Weight is required</p>
            )}
          </div>

          {/* Botón de guardar */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-black text-white rounded-xl py-3 font-semibold hover:bg-gray-800 transition"
            >
              Save Progress
            </button>
          </div>
        </div>
      </form>
    );
};
