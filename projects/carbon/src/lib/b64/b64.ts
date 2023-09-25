import Long from 'long';

export const longToB64 = (num: Long): string => {
  if (num.compare(0) < 0) {
    return `-${longToB64(num.multiply(-1))}`;
  }

  let str = '';
  do {
    str = b2s[num.and(0x3f).toInt()] + str;
    num = num.shiftRight(6);
  } while (num.compare(0) > 0);

  return str;
};

export const b64ToLong = (str: string): Long => {
  let num = new Long(0, 0);
  const sign = str.charAt(0) === '-' ? 1 : 0;

  for (let i = sign; i < str.length; i++) {
    num = num.multiply(64).add(s2b[str.charCodeAt(i)]);
  }

  return sign ? num.multiply(-1) : num;
};

export const numToB64 = (num: number): string => {
  return longToB64(Long.fromNumber(num));
};

export const b64ToNum = (str: string): number => {
  return b64ToLong(str).toNumber();
};

const alphabet =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!_';
const b2s = alphabet.split('');
const s2b = new Array(123);
for (let i = 0; i < alphabet.length; i++) {
  s2b[alphabet.charCodeAt(i)] = i;
}
