import { MeasurementProcessor } from './measurement-processor';
import { MeasurementCollection } from './measurement-collection';
import { createReadStream } from 'fs';

describe('MeasurementProcessor', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    jest.mock('./measurement-collection', () => {
      return {
        MeasurementCollection: jest.fn().mockImplementation(() => {
          return {};
        }),
      };
    });

    const mockedCollection: MeasurementCollection =
      jest.createMockFromModule<MeasurementCollection>(
        './measurement-processor',
      );

    expect(new MeasurementProcessor(mockedCollection)).toBeDefined();
  });

  it('should count increases', async () => {
    const collection = new MeasurementCollection(() =>
      createReadStream(__dirname + '/test-input.txt'),
    );
    const processor = new MeasurementProcessor(collection);

    await processor.getIncreaseCount().then((count) => {
      expect(count).toBe(7);
    });
  });
});
