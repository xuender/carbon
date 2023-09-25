import { hashNumber } from '../hash/siphash';
import { Browser } from './browser';
import { Canvas } from './canvas';

let cache = 0;
export const Fingerprint = (): number => {
  if (cache) {
    return cache;
  }
  // cache = hashHex(Browser() + Canvas());
  cache = hashNumber(Browser() + Canvas());

  return cache;
};
