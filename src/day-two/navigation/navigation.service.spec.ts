import { Test, TestingModule } from '@nestjs/testing';
import { NavigationService } from './navigation.service';
import { InterpreterService } from '~/day-two/interpreter/interpreter.service';
import { SimpleInterpreter } from '~/day-two/interpreter/simple-interpreter';
import { AimingInterpreter } from '~/day-two/interpreter/aiming-interpreter';

describe('NavigationService', () => {
  let service: NavigationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NavigationService, InterpreterService],
    }).compile();

    service = module.get<NavigationService>(NavigationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create navigation with simple interpreter', () => {
    const navigator = service.simple();
    expect(navigator).toBeDefined();
    expect(navigator.type()).toBe(SimpleInterpreter.type);
  });

  it('should create navigation with aiming interpreter', () => {
    const navigator = service.aiming();
    expect(navigator).toBeDefined();
    expect(navigator.type()).toBe(AimingInterpreter.type);
  });
});
