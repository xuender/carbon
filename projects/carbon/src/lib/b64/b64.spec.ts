import Long from 'long';
import { b64ToLong, b64ToNum, longToB64, numToB64 } from './b64';

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

  it('number', () => {
    for (let i = 0; i < 51; i++) {
      for (let f = 0; f < 10; f++) {
        const num = 2 ** i + f;
        expect(num).toEqual(b64ToNum(numToB64(num)));
      }
    }
  });
  it('long', () => {
    for (let i = 0; i < 51; i++) {
      for (let f = 0; f < 10; f++) {
        const num = Long.fromNumber(2 ** i + f);
        expect(num).toEqual(b64ToLong(longToB64(num)));
      }
    }
  });

  it('longToB64', () => {
    expect(longToB64(Long.fromString('4268576331510538027'))).toEqual(
      'Ds9B47AU18r'
    );
    expect(longToB64(Long.fromString('4277583530765279019'))).toEqual(
      'DtdB47AU18r'
    );
    expect(longToB64(new Long(3, 0))).toEqual('D');
    expect(longToB64(new Long(0, 0))).toEqual('A');
    expect(longToB64(new Long(0, 400000))).toEqual('GGoAAAAAA');
    expect(longToB64(new Long(0, 400000).multiply(-1))).toEqual('-GGoAAAAAA');
  });

  it('b64ToLong', () => {
    expect(b64ToLong('D')).toEqual(new Long(3, 0));
    expect(b64ToLong('A')).toEqual(new Long(0, 0));
    expect(b64ToLong('GGoAAAAAA')).toEqual(new Long(0, 400000));
    expect(b64ToLong('-GGoAAAAAA')).toEqual(new Long(0, 400000).multiply(-1));
  });
});
