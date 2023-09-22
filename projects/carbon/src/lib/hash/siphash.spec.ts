import { hashHex, hashNumber, string2key } from './siphash';

describe('siphash', () => {
  it('hashNumber', () => {
    expect(hashNumber('123')).toEqual(2677888159399343);
  });

  it('hashHex', () => {
    expect(hashHex('123')).toEqual('822983866c7d3daf');
  });

  it('string2key', () => {
    expect(string2key('0123456789abcdef')).toEqual(
      Uint32Array.of(858927408, 926299444, 1650538808, 1717920867)
    );
  });
});
