
// export const cn =(...inputs) => {
//  return twMerge(clsx(inputs));
// }
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}