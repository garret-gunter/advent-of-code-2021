import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { UtilModule } from '~/util/util.module';
import { DayTwoModule } from '~/day-two/day-two.module';

describe('DayTwoController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [DayTwoModule, UtilModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/day-two/part-one (GET)', () => {
    return request(app.getHttpServer())
      .get('/day-two/part-one')
      .expect(200)
      .expect('1762050');
  });

  // it('/day-one/part-two (GET)', () => {
  //   return request(app.getHttpServer())
  //     .get('/day-one/part-two')
  //     .expect(200)
  //     .expect('1418');
  // });

  afterAll(async () => {
    await app.close();
  });
});
