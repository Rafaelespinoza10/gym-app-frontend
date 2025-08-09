
import { getAuthHeaders, handleError } from "../libs";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getTopTenExercises = async () => {
    const response = await fetch(`${BASE_URL}/dashboard/tops`, {
        method: 'GET',
        headers: getAuthHeaders(),
    });
    if(!response.ok) await handleError(response, 'Exercises not found');
    return response.json();
}

export const getSummaryGraphics = async (startDate: string, endDate: string) => {
    const response = await fetch(
      `${BASE_URL}/dashboard/tops?startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`,
      {
        method: 'GET',
        headers: getAuthHeaders(),
      }
    );
    if (!response.ok) await handleError(response, "No fetch data");
    return response.json();
  };
  

  export const getSummaryTotal = async () => {
    const response = await fetch(
      `${BASE_URL}/dashboard/total`,
      {
        method: 'GET',
        headers: getAuthHeaders(),
      }
    );
    if (!response.ok) await handleError(response, "No fetch data");
    return response.json();
  };
  