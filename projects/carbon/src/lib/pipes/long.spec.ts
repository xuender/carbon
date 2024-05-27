import { toNumber } from './long';
import Long from 'long';

describe('toNumber', () => {
  expect(toNumber(3)).toEqual(3);
  expect(toNumber(Long.ONE)).toEqual(1);
  expect(toNumber(null)).toEqual(0);
});
