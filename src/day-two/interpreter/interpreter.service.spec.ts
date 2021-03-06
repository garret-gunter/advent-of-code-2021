import { Test, TestingModule } from '@nestjs/testing';
import { InterpreterService } from './interpreter.service';

describe('InterpreterService', () => {
  let service: InterpreterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterpreterService],
    }).compile();

    service = module.get<InterpreterService>(InterpreterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be create simple interpreter', () => {
    expect(service.simple()).toBeDefined();
  });

  it('should be create aiming interpreter', () => {
    expect(service.aiming()).toBeDefined();
  });
});
