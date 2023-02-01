export const KEY = "streak";

export function formattedDate(date: Date): string {
  // returns date as 11/11/2021
  // other times it returns 11/11/2021, 12:00:00 AM
  // which is why we call the .split at the end
  return date.toLocaleDateString("en-US");
}

export interface Streak {
  currentCount: number;
  startDate: string;
  lastLoginDate: string;
}

export function buildStreak(date: Date, overrideDefault?: Partial<Streak>){
  const defaultStreak = {
    currentCount: 1,
    startDate: formattedDate(date),
    lastLoginDate: formattedDate(date)
  }
  return {...defaultStreak, ...overrideDefault}
}

export function updateStreak(storage: Storage, streak: Streak): void {
  storage.setItem(KEY, JSON.stringify(streak))
}