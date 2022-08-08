import { IntervalFromNowPipe } from './interval-from-now.pipe';

describe('IntervalFromNowPipe', () => {
  it('create an instance', () => {
    const pipe = new IntervalFromNowPipe();
    expect(pipe).toBeTruthy();
  });
});
