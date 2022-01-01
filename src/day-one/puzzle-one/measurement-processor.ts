import { MeasurementCollection } from './measurement-collection';

export class MeasurementProcessor {
  constructor(private collection: MeasurementCollection) {}

  async getIncreaseCount(): Promise<number> {
    let count = 0;
    let previous: number | null = null;

    await this.collection.each((line) => {
      const depth = parseInt(line);

      if (previous !== null && depth > previous) {
        count++;
      }

      previous = depth;
    });

    return count;
  }
}
