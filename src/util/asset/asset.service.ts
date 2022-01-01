import { Injectable } from '@nestjs/common';
import { resolve } from 'path';

@Injectable()
export class AssetService {
  path(path: string): string {
    return resolve(__dirname, '../../assets', path);
  }
}
