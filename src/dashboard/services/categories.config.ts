import type { Categories, CreateCategoryExerciseModel } from "../interfaces";

const BASE_URL = import.meta.env.VITE_BASE_URL;


const handleError = async (response: Response, fallbackMessage: string) => {
  const error = await response.json().catch(() => ({}));
  throw new Error(error.message || fallbackMessage);
};

//authorization
const getAuthHeaders = (): HeadersInit => {
    const token = localStorage.getItem('token');
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
}

export const getCategories = async (): Promise<Categories> => {
  const response = await fetch(`${BASE_URL}/exercises-categories`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });

  if (!response.ok) await handleError(response, 'Categories not found');
  return response.json();
};

export const getOneCategory = async (id: number) => {
  const response = await fetch(`${BASE_URL}/exercises-categories/${id}`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });

  if (!response.ok) await handleError(response, 'Category not found');
  return response.json();
};

export const postCategory = async (data: CreateCategoryExerciseModel) => {
  const response = await fetch(`${BASE_URL}/exercises-categories`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });

  if (!response.ok) await handleError(response, 'Category not created');
  return response.json();
};

export const updateCategory = async (id: number, data: CreateCategoryExerciseModel) => {
  const response = await fetch(`${BASE_URL}/exercises-categories/${id}`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });

  if (!response.ok) await handleError(response, 'Category not updated');
  return response.json();
};

export const deleteCategory = async (id: number) => {
  const response = await fetch(`${BASE_URL}/exercises-categories/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  });

  if (!response.ok) await handleError(response, 'Category not deleted');
  return response.json();
};
