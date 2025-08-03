import type { Categories, CreateCategoryExerciseModel } from "../interfaces/categories";
import { getAuthHeaders, handleError } from "../libs";

const BASE_URL = import.meta.env.VITE_BASE_URL;



export const getCategories = async (): Promise<Categories> => {
  const response = await fetch(`${BASE_URL}/exercises-categories`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });

  if (!response.ok) await handleError(response, 'Categories not found');
  return response.json();
};

export const getOneCategory = async (id: string) => {
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

export const updateCategory = async (id: string, data: CreateCategoryExerciseModel) => {
  const response = await fetch(`${BASE_URL}/exercises-categories/${id}`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });

  if (!response.ok) await handleError(response, 'Category not updated');
  return response.json();
};

export const deleteCategory = async (id: string) => {
  const response = await fetch(`${BASE_URL}/exercises-categories/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  });

  if (!response.ok) await handleError(response, 'Category not deleted');
  return response.json();
};
