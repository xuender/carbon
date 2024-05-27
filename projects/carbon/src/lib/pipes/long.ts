import Long from 'long';

export function toNumber(num: number | Long | null | undefined) {
  if (num instanceof Long) {
    return num.toNumber();
  }

  if (typeof num === 'number') {
    return num;
  }

  return 0;
}
