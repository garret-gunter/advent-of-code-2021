/**
 * A collection with a fixed length.
 *
 * This is overkill, but I'll do it for more learning.
 */
export class MeasurementWindow {
  #length: number;
  #elements: Array<number>;

  constructor(length: number) {
    if (length < 0) {
      throw new TypeError('Only positive lengths are allowed.');
    }

    this.#length = length;
    this.#elements = [];
  }

  push(value: number): this {
    this.#elements.push(value);

    if (this.#elements.length > this.#length) {
      this.#elements.shift();
    }

    return this;
  }

  get sum(): number {
    return this.#elements.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0,
    );
  }

  get length(): number {
    return this.#elements.length;
  }
}
