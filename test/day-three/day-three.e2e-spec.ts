import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { UtilModule } from '~/util/util.module';
import { DayThreeModule } from '~/day-three/day-three.module';

describe('DayThreeController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [DayThreeModule, UtilModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/day-three/part-one (GET)', () => {
    return request(app.getHttpServer())
      .get('/day-three/part-one')
      .expect(200)
      .expect('3549854');
  });

  it('/day-three/part-two (GET)', () => {
    return request(app.getHttpServer())
      .get('/day-three/part-two')
      .expect(200)
      .expect('3765399');
  });

  afterAll(async () => {
    await app.close();
  });
});
