import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let pipe: DurationPipe;
  const sec = 1000;
  const minu = sec * 60;
  const hour = minu * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;
  const ago = 500;

  beforeEach(() => {
    pipe = new DurationPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('无', () => {
    expect(pipe.transform(3)).toEqual('无');
  });

  it('5秒', () => {
    expect(pipe.transform(5 * sec + ago)).toEqual('5秒');
  });

  it('1分', () => {
    expect(pipe.transform(minu + sec)).toEqual('1分钟');
  });

  it('2分钟', () => {
    expect(pipe.transform(minu * 2 + sec)).toEqual('2分钟');
  });

  it('1小时', () => {
    expect(pipe.transform(hour + minu)).toEqual('1小时');
  });

  it('1天', () => {
    expect(pipe.transform(day + hour)).toEqual('1天');
  });

  it('2天', () => {
    expect(pipe.transform(day * 2 + hour)).toEqual('2天');
  });

  it('1周', () => {
    expect(pipe.transform(week + day)).toEqual('1周');
  });

  it('2周', () => {
    expect(pipe.transform(week * 2 + hour)).toEqual('2周');
  });

  it('1月', () => {
    expect(pipe.transform(month + day)).toEqual('1月');
  });

  it('2月', () => {
    expect(pipe.transform(month * 2 + day)).toEqual('2月');
  });

  it('1年', () => {
    expect(pipe.transform(year + month)).toEqual('1年');
  });

  it('2年', () => {
    expect(pipe.transform(year * 2 + month)).toEqual('2年');
  });

  it('1世纪', () => {
    expect(pipe.transform(year * 110)).toEqual('1世纪');
  });

  it('2世纪', () => {
    expect(pipe.transform(year * 220)).toEqual('2世纪');
  });
});
