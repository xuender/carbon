import Long from 'long';

import { longToB64 } from '../b64/b64';
import { minutesPassed } from '../time';
import { Fingerprint } from './fingerprint';

export const cid = () => {
  return longToB64(
    Long.fromNumber(Fingerprint(), true).or(
      Long.fromNumber(minutesPassed(), true).shiftLeft(52)
    )
  );
};
