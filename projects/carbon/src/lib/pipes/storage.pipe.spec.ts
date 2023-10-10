import { StoragePipe } from './storage.pipe';

describe('StoragePipe', () => {
  let pipe: StoragePipe;
  beforeEach(() => {
    pipe = new StoragePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('0B', () => {
    expect(pipe.transform(undefined)).toEqual('0B');
  });

  it('10B', () => {
    expect(pipe.transform(10)).toEqual('10B');
  });

  it('1K', () => {
    expect(pipe.transform(1024)).toEqual('1K');
  });

  it('2K', () => {
    expect(pipe.transform(2048)).toEqual('2K');
  });

  it('2M', () => {
    expect(pipe.transform(2 * 1024 * 1024)).toEqual('2M');
  });

  it('1.54T', () => {
    expect(pipe.transform(1694653000000)).toEqual('1.54T');
  });
});
