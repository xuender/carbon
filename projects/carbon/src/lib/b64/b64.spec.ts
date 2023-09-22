import { b64ToNum, numToB64 } from './b64';

describe('base64', () => {
  it('numToB64', () => {
    expect(numToB64(3)).toEqual('D');
    expect(numToB64(0)).toEqual('A');
    expect(numToB64(-40000000000)).toEqual('-lQL5AA');
    expect(numToB64(6284325805349880)).toEqual('WU4!fR9v4');
  });

  it('b64ToNum', () => {
    expect(b64ToNum('D')).toEqual(3);
    expect(b64ToNum('A')).toEqual(0);
    expect(b64ToNum('-lQL5AA')).toEqual(-40000000000);
    expect(b64ToNum('WU4!fR9v4')).toEqual(6284325805349880);
  });
});
