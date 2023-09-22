import { Num2B64Pipe } from './num2b64.pipe';

describe('Num2B64Pipe', () => {
  let pipe: Num2B64Pipe;

  beforeEach(() => {
    pipe = new Num2B64Pipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('num2b64', () => {
    expect(pipe.transform(33333333333)).toEqual('fC0k1V');
    expect(pipe.transform(0)).toEqual('A');
    expect(pipe.transform(-40000000000)).toEqual('-lQL5AA');
  });
});
