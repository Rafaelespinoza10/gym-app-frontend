import { getAuthHeaders, handleError } from "../libs";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getExercises = async (nameExercise: string | null) => {
    const response = await fetch(`${BASE_URL}/exercises?category=${nameExercise}`, {
        method: 'GET',
        headers: getAuthHeaders(),
    });
    if(!response.ok) await handleError(response, 'Exercises not found');
    return response.json();
}

export const getOneExercise = async (id: string) => {
    const response = await fetch(`${BASE_URL}/exercises/${id}`, {
        method: 'GET',
        headers: getAuthHeaders()
    });
    if(!response.ok) await handleError(response, 'Exercise not found');
    return response.json();
}

export const deleteExercise = async (id: string) => {
  const response = await fetch(`${BASE_URL}/exercises/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  });

  if (!response.ok) await handleError(response, 'Category not deleted');
  return response.json();
};
