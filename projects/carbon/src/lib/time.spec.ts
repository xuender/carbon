import { minutesPassed } from './time';

describe('minutesPassed', () => {
  it('minutesPassed', () => {
    expect(minutesPassed()).toBeGreaterThan(0);
  });
});
