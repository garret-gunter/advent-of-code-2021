import { BitCounter } from './bit-counter';

describe('BitCounter', () => {
  it('should be defined', () => {
    expect(new BitCounter()).toBeDefined();
  });

  it('should keep count', function () {
    const counter = new BitCounter();

    // No counts to start with.
    expect(counter.counts()).toHaveLength(0);

    counter.parseLine('010');

    let counts = counter.counts();
    expect(counts).toHaveLength(3);
    expect(counts[0]).toStrictEqual([1, 0]);
    expect(counts[1]).toStrictEqual([0, 1]);
    expect(counts[2]).toStrictEqual([1, 0]);

    counter.parseLine('111');
    counts = counter.counts();

    expect(counts[0]).toStrictEqual([1, 1]);
    expect(counts[1]).toStrictEqual([0, 2]);
    expect(counts[2]).toStrictEqual([1, 1]);
  });

  it.each([
    { lines: ['0101', '0011', '1111'], expected: [0, 1, 1, 1] },
    { lines: ['0000', '0000', '1111'], expected: [0, 0, 0, 0] },
    { lines: ['1111', '0000', '1111'], expected: [1, 1, 1, 1] },
  ])(
    'should find most common values: $expected',
    function ({
      lines,
      expected,
    }: {
      lines: Array<string>;
      expected: Array<number>;
    }) {
      const counter = new BitCounter();

      // No counts to start with.
      expect(counter.counts()).toHaveLength(0);

      lines.forEach((line) => counter.parseLine(line));

      const counts = counter.mostCommon;

      expect(counts).toHaveLength(4);
      expect(counts).toStrictEqual(expected);
    },
  );

  it.each([
    { lines: ['0101', '0011', '1111'], expected: [1, 0, 0, 0] },
    { lines: ['0000', '0000', '1111'], expected: [1, 1, 1, 1] },
    { lines: ['1111', '0000', '1111'], expected: [0, 0, 0, 0] },
  ])(
    'should find least common value: $expected',
    function ({
      lines,
      expected,
    }: {
      lines: Array<string>;
      expected: Array<number>;
    }) {
      const counter = new BitCounter();

      // No counts to start with.
      expect(counter.counts()).toHaveLength(0);

      lines.forEach((line) => counter.parseLine(line));

      const counts = counter.leastCommon;

      expect(counts).toHaveLength(4);
      expect(counts).toStrictEqual(expected);
    },
  );

  it('should reset counts', function () {
    const counter = new BitCounter();

    // No counts to start with.
    expect(counter.counts()).toHaveLength(0);

    counter.parseLine('010');

    const counts = counter.counts();
    expect(counts).toHaveLength(3);
    expect(counts[0]).toStrictEqual([1, 0]);
    expect(counts[1]).toStrictEqual([0, 1]);
    expect(counts[2]).toStrictEqual([1, 0]);

    counter.reset();

    expect(counter.counts()).toHaveLength(0);
  });
});
