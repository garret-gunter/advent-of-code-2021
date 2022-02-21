import { Injectable } from '@nestjs/common';
import { Position } from '~/day-two/navigation/position';
import { Navigator } from '~/day-two/navigation/navigator';
import { InterpreterService } from '~/day-two/interpreter/interpreter.service';

@Injectable()
export class NavigationService {
  constructor(private service: InterpreterService) {}

  simple(position: Position | null = null): Navigator {
    return new Navigator(position ?? new Position(), this.service.simple());
  }

  aiming(position: Position | null = null): Navigator {
    return new Navigator(position ?? new Position(), this.service.aiming());
  }
}
