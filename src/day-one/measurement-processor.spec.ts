import { MeasurementProcessor } from './measurement-processor';
import { LineReader } from '~/util/asset/line-reader';

describe('MeasurementProcessor', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    jest.mock('~/util/asset/line-reader', () => {
      return {
        MeasurementCollection: jest.fn().mockImplementation(() => {
          return {};
        }),
      };
    });

    const mockedCollection: LineReader = jest.createMockFromModule<LineReader>(
      '~/util/asset/line-reader',
    );

    expect(new MeasurementProcessor(mockedCollection)).toBeDefined();
  });

  it('should count increases', async () => {
    const collection = LineReader.forFile(__dirname + '/test-input.txt');
    const processor = new MeasurementProcessor(collection);

    await processor.getIncreaseCount().then((count) => {
      expect(count).toBe(7);
    });
  });

  it('should count increases with measure windows of 3', async () => {
    const collection = LineReader.forFile(__dirname + '/test-input.txt');
    const processor = new MeasurementProcessor(collection);

    await processor.getIncreaseCountByWindow(3).then((count) => {
      expect(count).toBe(5);
    });
  });
});
