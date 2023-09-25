import { cid } from './cid';

describe('cid', () => {
  it('cid', () => {
    expect(cid()).not.toEqual('');
  });
});
