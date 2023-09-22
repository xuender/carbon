import { HashPipe } from './hash.pipe';

describe('HashPipe', () => {
  let pipe: HashPipe;
  beforeEach(() => {
    pipe = new HashPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('hash string', () => {
    expect(pipe.transform('abc')).toEqual(8156536591353765);
    expect(pipe.transform('123')).toEqual(2677888159399343);
  });

  it('hash key', () => {
    expect(pipe.transform('abc', '0123456789abcdef')).toEqual(3985172518810397);
    expect(pipe.transform('123', '0123456789abcdef')).toEqual(2382557176801035);
  });

  it('hash undefined', () => {
    expect(pipe.transform('')).toEqual(0);
    expect(pipe.transform(undefined)).toEqual(0);
  });
});
