import tap from 'tap';
import { build } from '../../src/app.js';
import 'must/register.js';

tap.mochaGlobals();

const prefix = '/api';

describe('List many blogs should work', async () => {
  let app;

  before(async () => {
    app = await build();
  });

  it('shoud return a list of objects with default limit', async () => {
    const response = await app.inject({
      method: 'GET',
      url: `${prefix}/blog`
    });

    // this checks if  http status code is 200
    response.statusCode.must.be.equal(200);
    const result = await response.json();

    result.length.must.not.be.above(7);
  });

  it('shoud return a list of objects with default limit', async () => {
    const response = await app.inject({
      method: 'GET',
      url: `${prefix}/blog?limit=2`
    });

    // this checks if  http status code is 200
    response.statusCode.must.be.equal(200);
    const result = await response.json();

    result.length.must.not.be.above(2);
  });
});
