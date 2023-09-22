export const numToB64 = (num: number): string => {
  if (num < 0) {
    return `-${numToB64(-num)}`;
  }

  let lo = num >>> 0;
  let hi = (num / 4294967296) >>> 0;

  let right = '';
  while (hi > 0) {
    right = b2s[0x3f & lo] + right;
    lo >>>= 6;
    lo |= (0x3f & hi) << 26;
    hi >>>= 6;
  }

  let left = '';
  do {
    left = b2s[0x3f & lo] + left;
    lo >>>= 6;
  } while (lo > 0);

  return left + right;
};

export const b64ToNum = (str: string): number => {
  let num = 0;
  const sign = str.charAt(0) === '-' ? 1 : 0;

  for (let i = sign; i < str.length; i++) {
    num = num * 64 + s2b[str.charCodeAt(i)];
  }

  return sign ? -num : num;
};

const alphabet =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!_';
const b2s = alphabet.split('');
const s2b = new Array(123);
for (let i = 0; i < alphabet.length; i++) {
  s2b[alphabet.charCodeAt(i)] = i;
}
