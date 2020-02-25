import CodeDemo from './CodeDemo';

it('calculates half-price discout', () => {
  const discounter = new CodeDemo(0.5);
  expect(discounter.calcNewPrice(100.00)).toBe(50.0);
});