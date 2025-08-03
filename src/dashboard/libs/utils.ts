// lib/utils.ts
export function cn(...classes: (string | false | null | undefined)[]) {
    return classes.filter(Boolean).join(" ");
  }
  
 export const handleError = async (response: Response, fallbackMessage: string) => {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || fallbackMessage);
  };
  
  //authorization
 export const getAuthHeaders = (): HeadersInit => {
      const token = localStorage.getItem('token');
      return {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        };
  }
  