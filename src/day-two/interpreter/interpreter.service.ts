import { Injectable } from '@nestjs/common';
import { AimingInterpreter } from '~/day-two/interpreter/aiming-interpreter';
import { SimpleInterpreter } from '~/day-two/interpreter/simple-interpreter';

@Injectable()
export class InterpreterService {
  simple(): SimpleInterpreter {
    return new SimpleInterpreter();
  }

  aiming(): AimingInterpreter {
    return new AimingInterpreter();
  }
}
