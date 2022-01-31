import { MeasurementCollection } from '~/day-one/measurement-collection';
import { MeasurementWindow } from '~/day-one/measurement-window';

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

  async getIncreaseCountByWindow(windowLength: number): Promise<number> {
    const windows: Array<MeasurementWindow> = [];

    await this.collection.each((line) => {
      const depth = parseInt(line);

      const newWindow = new MeasurementWindow(windowLength);
      windows.push(newWindow);

      for (let i = windows.length; i > windows.length - windowLength; i--) {
        if (i - 1 < 0) {
          break;
        }

        windows[i - 1].push(depth);
      }
    });

    let count = 0;
    let previous: MeasurementWindow | null = null;

    windows
      .filter((value: MeasurementWindow) => value.length == windowLength)
      .forEach((value: MeasurementWindow) => {
        if (previous != null && value.sum > previous.sum) {
          count++;
        }

        previous = value;
      });

    return count;
  }
}
