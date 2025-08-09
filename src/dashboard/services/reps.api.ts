import type { CreateReps } from "../interfaces/reps";
import { getAuthHeaders, handleError } from "../libs";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const postRepsByExerciseId = async (data: CreateReps) => {
  const response = await fetch(`${BASE_URL}/reps`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });

  if (!response.ok) await handleError(response, 'Register of reps not created');
  return response.json();
};
