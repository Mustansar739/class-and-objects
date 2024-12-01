
export const add = (a = 0, b = 0) => a + b;
export const subtract = (a = 0, b = 0) => a - b;
export const multiply = (a = 1, b = 1) => a * b;
export const divide = (a = 1, b = 1) => b !== 0 ? a / b : "Cannot divide by zero";
