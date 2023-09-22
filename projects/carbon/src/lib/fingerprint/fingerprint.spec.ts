import { Browser } from './browser';
import { Canvas } from './canvas';
import { Fingerprint } from './fingerprint';

describe('fingerprint', () => {
  it('browser', () => {
    expect(Browser()).not.toEqual('');
  });

  it('canvas', () => {
    expect(Canvas()).not.toEqual('');
  });

  it('fingerprint', () => {
    expect(Fingerprint()).not.toEqual('');
  });
});
