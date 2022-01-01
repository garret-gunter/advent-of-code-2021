import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { PuzzleOneModule } from '~/day-one/puzzle-one/puzzle-one.module';
import { UtilModule } from '~/util/util.module';

describe('PuzzleOneController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [PuzzleOneModule, UtilModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/puzzle-one (GET)', () => {
    return request(app.getHttpServer())
      .get('/puzzle-one')
      .expect(200)
      .expect('1374');
  });

  afterAll(async () => {
    await app.close();
  });
});
