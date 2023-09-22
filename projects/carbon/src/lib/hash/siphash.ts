const keyArray = Uint32Array.of(50462976, 117835012, 185207048, 252579084);
export interface Number64 {
  l: number;
  h: number;
}

const add = (a: Number64, b: Number64) => {
  const rl = a.l + b.l;
  const a2 = {
    h: (a.h + b.h + ((rl / 2) >>> 31)) >>> 0,
    l: rl >>> 0,
  };
  a.h = a2.h;
  a.l = a2.l;
};

const xor = (a: Number64, b: Number64) => {
  a.h ^= b.h;
  a.h >>>= 0;
  a.l ^= b.l;
  a.l >>>= 0;
};

const rotl = (a: Number64, n: number) => {
  const a2 = {
    h: (a.h << n) | (a.l >>> (32 - n)),
    l: (a.l << n) | (a.h >>> (32 - n)),
  };
  a.h = a2.h;
  a.l = a2.l;
};

const rotl32 = (a: Number64) => {
  const al = a.l;
  a.l = a.h;
  a.h = al;
};

const compress = (v0: Number64, v1: Number64, v2: Number64, v3: Number64) => {
  add(v0, v1);
  add(v2, v3);
  rotl(v1, 13);
  rotl(v3, 16);
  xor(v1, v0);
  xor(v3, v2);
  rotl32(v0);
  add(v2, v1);
  add(v0, v3);
  rotl(v1, 17);
  rotl(v3, 21);
  xor(v1, v2);
  xor(v3, v0);
  rotl32(v2);
};

const getInt = (a: Uint8Array, offset: number) =>
  (a[offset + 3] << 24) |
  (a[offset + 2] << 16) |
  (a[offset + 1] << 8) |
  a[offset];

export const hash = (m: Uint8Array | string, key: Uint32Array = keyArray) => {
  if (typeof m === 'string') {
    m = string2array(m);
  }

  const k0 = {
    h: key[1] >>> 0,
    l: key[0] >>> 0,
  };
  const k1 = {
    h: key[3] >>> 0,
    l: key[2] >>> 0,
  };
  const v0 = {
    h: k0.h,
    l: k0.l,
  };
  const v2 = k0;
  const v1 = {
    h: k1.h,
    l: k1.l,
  };
  const v3 = k1;
  const ml = m.length;
  const ml7 = ml - 7;
  const buf = new Uint8Array(new ArrayBuffer(8));

  xor(v0, {
    h: 0x736f6d65,
    l: 0x70736575,
  });
  xor(v1, {
    h: 0x646f7261,
    l: 0x6e646f6d,
  });
  xor(v2, {
    h: 0x6c796765,
    l: 0x6e657261,
  });
  xor(v3, {
    h: 0x74656462,
    l: 0x79746573,
  });

  let mp = 0;
  while (mp < ml7) {
    const mi = {
      h: getInt(m, mp + 4),
      l: getInt(m, mp),
    };
    xor(v3, mi);
    compress(v0, v1, v2, v3);
    compress(v0, v1, v2, v3);
    xor(v0, mi);
    mp += 8;
  }

  buf[7] = ml;
  let ic = 0;
  while (mp < ml) {
    buf[ic++] = m[mp++];
  }
  while (ic < 7) {
    buf[ic++] = 0;
  }
  const mil = {
    h: (buf[7] << 24) | (buf[6] << 16) | (buf[5] << 8) | buf[4],
    l: (buf[3] << 24) | (buf[2] << 16) | (buf[1] << 8) | buf[0],
  };
  xor(v3, mil);
  compress(v0, v1, v2, v3);
  compress(v0, v1, v2, v3);
  xor(v0, mil);
  xor(v2, {
    h: 0,
    l: 0xff,
  });
  compress(v0, v1, v2, v3);
  compress(v0, v1, v2, v3);
  compress(v0, v1, v2, v3);
  compress(v0, v1, v2, v3);

  const h = v0;
  xor(h, v1);
  xor(h, v2);
  xor(h, v3);

  return h;
};

export const hashHex = (
  data: Uint8Array | string,
  key: Uint32Array = keyArray
) => {
  const r = hash(data, key);
  const h = '0000000' + r.h.toString(16);
  const l = '0000000' + r.l.toString(16);

  return h.slice(h.length - 8) + l.slice(l.length - 8);
};

export const hashNumber = (
  data: Uint8Array | string,
  key: Uint32Array = keyArray
) => {
  const r = hash(data, key);
  /*eslint no-bitwise: 0*/
  return (r.h & 0x1fffff) * 0x100000000 + r.l;
};

export const string2array = (str: string) => {
  if (typeof TextEncoder === 'function') {
    return new TextEncoder().encode(str);
  }

  str = decodeURI(encodeURIComponent(str));
  const bytes = new Uint8Array(str.length);

  for (let i = 0, j = str.length; i < j; i++) {
    bytes[i] = str.charCodeAt(i);
  }

  return bytes;
};

export const string2key = (keyStr: string) => {
  const u8 = string2array(keyStr);
  if (u8.length !== 16) {
    throw Error('Key length must be 16 bytes');
  }

  const key = new Uint32Array(4);
  key[0] = getInt(u8, 0);
  key[1] = getInt(u8, 4);
  key[2] = getInt(u8, 8);
  key[3] = getInt(u8, 12);

  return key;
};
