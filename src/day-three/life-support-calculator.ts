import { BitCounter } from '~/day-three/bit-counter';

export class LifeSupportCalculator {
  constructor(private counter: BitCounter) {}

  /**
   * Reduce lines using the given filter.
   *
   * @private
   */
  private getRating(
    lines: Array<string>,
    getFilter: (lines: Array<string>) => Array<number>,
  ): number {
    let ratings: Array<string> = lines.slice();
    let position = 0;

    // Store the max position to prevent endless loops.
    const maxPosition = ratings[0].length - 1;

    while (ratings.length > 1) {
      // Prevent undefined index errors.
      if (maxPosition < position) {
        console.log('max position', maxPosition);
        console.log('position', position);
        throw new Error('Exceeded max bit position when calculating rating.');
      }

      const filter = getFilter(ratings);

      // Filter ratings and advance position.
      ratings = this.filterLines(position, filter[position], ratings);
      position++;
    }

    return parseInt(ratings[0], 2);
  }

  /**
   * Filter lines based on value of bit at position.
   *
   * @private
   */
  private filterLines(
    position: number,
    bit: number,
    values: Array<string>,
  ): Array<string> {
    return values.filter((value) => {
      const bits = value.split('');
      return parseInt(bits[position]) === bit;
    });
  }

  getOxygenRating(lines: Array<string>): number {
    // Oxygen filters by the most common bit.
    return this.getRating(
      lines,
      (lines) => this.counter.parseArray(lines, true).mostCommon,
    );
  }

  getCO2Rating(lines: Array<string>): number {
    // CO2 filters by the least common bit.
    return this.getRating(
      lines,
      (lines) => this.counter.parseArray(lines, true).leastCommon,
    );
  }

  getLifeSupportRating(lines: Array<string>): number {
    return this.getOxygenRating(lines) * this.getCO2Rating(lines);
  }
}
