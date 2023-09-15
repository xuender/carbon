import { AgoPipe } from './ago.pipe';

describe('AgoPipe', () => {
  let pipe: AgoPipe;
  const sec = 1000;
  const minu = sec * 60;
  const hour = minu * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;
  const ago = 500;
  beforeEach(() => {
    pipe = new AgoPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('刚刚', () => {
    expect(pipe.transform(Date.now())).toEqual('刚刚');
  });
  it('5秒前', () => {
    expect(pipe.transform(Date.now() - 5 * sec - ago)).toEqual('5秒前');
  });
  it('5秒后', () => {
    expect(pipe.transform(Date.now() + 5 * sec + ago)).toEqual('5秒后');
  });
  it('1分钟前', () => {
    expect(pipe.transform(Date.now() - minu - sec)).toEqual('1分钟前');
  });
  it('1分钟后', () => {
    expect(pipe.transform(Date.now() + minu + sec)).toEqual('1分钟后');
  });
  it('2分钟后', () => {
    expect(pipe.transform(Date.now() + minu * 2 + sec)).toEqual('2分钟后');
  });
  it('2分钟前', () => {
    expect(pipe.transform(Date.now() - minu * 2 - sec)).toEqual('2分钟前');
  });
  it('1小时前', () => {
    expect(pipe.transform(Date.now() - hour - minu)).toEqual('1小时前');
  });
  it('1小时后', () => {
    expect(pipe.transform(Date.now() + hour + minu)).toEqual('1小时后');
  });
  it('昨天', () => {
    expect(pipe.transform(Date.now() - day - hour)).toEqual('昨天');
  });
  it('明天', () => {
    expect(pipe.transform(Date.now() + day + hour)).toEqual('明天');
  });
  it('2天前', () => {
    expect(pipe.transform(Date.now() - day * 2 - hour)).toEqual('2天前');
  });
  it('2天后', () => {
    expect(pipe.transform(Date.now() + day * 2 + hour)).toEqual('2天后');
  });
  it('上周', () => {
    expect(pipe.transform(Date.now() - week - day)).toEqual('上周');
  });
  it('下周', () => {
    expect(pipe.transform(Date.now() + week + day)).toEqual('下周');
  });
  it('2周前', () => {
    expect(pipe.transform(Date.now() - week * 2 - hour)).toEqual('2周前');
  });
  it('2周后', () => {
    expect(pipe.transform(Date.now() + week * 2 + hour)).toEqual('2周后');
  });
  it('上月', () => {
    expect(pipe.transform(Date.now() - month - day)).toEqual('上月');
  });
  it('下月', () => {
    expect(pipe.transform(Date.now() + month + day)).toEqual('下月');
  });
  it('2月前', () => {
    expect(pipe.transform(Date.now() - month * 2 - day)).toEqual('2月前');
  });
  it('2月后', () => {
    expect(pipe.transform(Date.now() + month * 2 + day)).toEqual('2月后');
  });
  it('去年', () => {
    expect(pipe.transform(Date.now() - year - month)).toEqual('去年');
  });
  it('明年', () => {
    expect(pipe.transform(Date.now() + year + month)).toEqual('明年');
  });
  it('2年前', () => {
    expect(pipe.transform(Date.now() - year * 2 - month)).toEqual('2年前');
  });
  it('2年后', () => {
    expect(pipe.transform(Date.now() + year * 2 + month)).toEqual('2年后');
  });
  it('上世纪', () => {
    expect(pipe.transform(Date.now() - year * 110)).toEqual('上世纪');
  });
  it('下世纪', () => {
    expect(pipe.transform(Date.now() + year * 110)).toEqual('下世纪');
  });
  it('2世纪前', () => {
    expect(pipe.transform(Date.now() - year * 220)).toEqual('2世纪前');
  });
  it('2世纪后', () => {
    expect(pipe.transform(Date.now() + year * 220)).toEqual('2世纪后');
  });
});
