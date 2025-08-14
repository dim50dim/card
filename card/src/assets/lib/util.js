
// export const cn =(...inputs) => {
//  return twMerge(clsx(inputs));
// }
// export function cn(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};