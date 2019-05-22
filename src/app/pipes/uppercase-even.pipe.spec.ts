import { UppercaseEvenPipe } from './uppercase-even.pipe';

describe('UppercaseEvenPipe', () => {
  it('create an instance', () => {
    const pipe = new UppercaseEvenPipe();
    expect(pipe).toBeTruthy();
  });
});
