import { hashNumber } from '../hash/siphash';
import { Browser } from './browser';
import { Canvas } from './canvas';

let cache = 0;
export function Fingerprint() {
  if (cache) {
    return cache;
  }

  cache = hashNumber(Browser() + Canvas());

  return cache;
}
