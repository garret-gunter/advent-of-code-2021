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
      arr[index] = value[0] >= value[1] ? 0 : 1;
    });

    return arr;
  }

  get leastCommon(): Array<number> {
    const arr: Array<number> = [];

    this.#counts.forEach((value, index) => {
      arr[index] = value[0] <= value[1] ? 0 : 1;
    });

    return arr;
  }
}
