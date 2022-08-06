export class BitCounter {
  #counts: Array<Array<number>>;
  constructor() {
    this.#counts = [];
  }

  parseLine(line: string): void {
    line.split('').forEach((value, index) => {
      const bit = parseInt(value);

      if (this.#counts[index] === undefined) {
        this.#counts[index] = [0, 0];
      }

      this.#counts[index][bit]++;
    });
  }

  parseArray(lines: Array<string>, reset = true): this {
    if (reset) {
      this.reset();
    }

    for (const line of lines) {
      this.parseLine(line);
    }

    return this;
  }

  reset() {
    this.#counts = [];
  }

  counts(): Array<Array<number>> {
    const items: Array<Array<number>> = [];
    // Deep clone the array.
    this.#counts.forEach((val: Array<number>) => items.push(Array.from(val)));

    return items;
  }

  get mostCommon(): Array<number> {
    const arr: Array<number> = [];

    this.#counts.forEach((value, index) => {
      // Ties default to 1.
      arr[index] = value[0] > value[1] ? 0 : 1;
    });

    return arr;
  }

  get leastCommon(): Array<number> {
    const arr: Array<number> = [];

    this.#counts.forEach((value, index) => {
      // Ties default to 0.
      arr[index] = value[0] <= value[1] ? 0 : 1;
    });

    return arr;
  }
}
