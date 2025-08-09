

export const emailValidation =  /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

// at least one Mayus, one minus, one number, one symbol, 8 chars with minimus.
export const strongPasswordValidation =   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

export const passwordMessage = 'Password must be at least 6 characters and include uppercase, lowercase, number, and special character';


export const userNameValidation =  /^[a-zA-Z0-9-_]{3,}$/;