

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
  

  export const buildException = (error: unknown) =>{
    const err = error as unknown;
    let status = 0;
    let message = "Unknow error";
    if (typeof err === "object" && err !== null) {
      const rec = err as Record<string, unknown>;
      if (typeof rec.status === "number")  status = rec.status;
      if (typeof rec.message === "string")  message = rec.message;
    }
    return { status, message}
  }