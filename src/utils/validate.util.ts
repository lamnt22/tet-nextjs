import { REGEX } from "../constants/";

export const validateEmail = (email: string): boolean => {
    const emailRegex: RegExp = REGEX.EMAIL;
    return emailRegex.test(email);
}

export const validatePassword = (password: string): boolean => {
    return /^[a-zA-Z0-9]{6,30}$/.test(password);
}