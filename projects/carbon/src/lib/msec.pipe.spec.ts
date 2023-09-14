import { MsecPipe } from './msec.pipe';

describe('MsecPipe', () => {
  let pipe: MsecPipe;
  beforeEach(() => {
    pipe = new MsecPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('format', () => {
    expect(pipe.transform(1694653053910)).toEqual('23-09-14 08:57:33');
  });
  it('custom format', () => {
    expect(pipe.transform(1694653053910, 'yyyy')).toEqual('2023');
  });
});
