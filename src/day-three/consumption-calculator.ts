import { BitCounter } from '~/day-three/bit-counter';

export class ConsumptionCalculator {
  #counter: BitCounter;

  constructor(counter: BitCounter) {
    this.#counter = counter;
  }

  measure(lines: Iterable<string>): void {
    for (const line of lines) {
      this.#counter.parseLine(line);
    }
  }

  async measureAsync(lines: AsyncIterable<string>): Promise<void> {
    for await (const line of lines) {
      this.#counter.parseLine(line);
    }
  }

  get consumption() {
    return this.gamma * this.epsilon;
  }

  get gamma() {
    return parseInt(this.#counter.mostCommon.join(''), 2);
  }

  get epsilon() {
    return parseInt(this.#counter.leastCommon.join(''), 2);
  }
}
