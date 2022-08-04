import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';

jest.setTimeout(1000)

describe('test/controller/home.test.ts', () => {

  it('should GET /', async () => {
    // create app
    const app = await createApp<Framework>();

    // make request
    const result = await createHttpRequest(app).get('/');
    // use expect by jest
    expect(result.status).toBe(200);
    expect(result.text).toBe('//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png');

    // close app
    await close(app);
  });

});
