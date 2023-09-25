export const sleep = (msec: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), msec));

export const minutesPassed = () => {
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return Math.floor((now.getTime() - midnight.getTime()) / 1000 / 60);
};
