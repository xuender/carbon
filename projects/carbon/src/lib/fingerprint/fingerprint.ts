import { numToB64 } from '../b64/b64';
import { hashNumber } from '../hash/siphash';
import { Browser } from './browser';
import { Canvas } from './canvas';

let cache = '';
export const Fingerprint = () => {
  if (cache) {
    return cache;
  }
  // cache = hashHex(Browser() + Canvas());
  cache = numToB64(hashNumber(Browser() + Canvas()));

  return cache;
};
