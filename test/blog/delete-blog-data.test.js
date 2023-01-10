import tap from 'tap';
import { build } from '../../src/app.js';
import 'must/register.js';

tap.mochaGlobals();

const prefix = '/api';

describe('creating a blog post should work', async () => {
  let app;

  before(async () => {
    app = await build();
  });

  it('shoud return the object that was created and with ID with isDone = false without isDone being given', async () => {
    const newBlog = {
      title: 'New Blog',
      author: 'Some author',
      content: 'Some description'
    };
    const createdResponse = await app.inject({
      method: 'POST',
      url: `${prefix}/blog`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlog)
    });

    const { id } = await createdResponse.json();

    const response = await app.inject({
      method: 'DELETE',
      url: `${prefix}/blog/${id}`
    });

    // this checks if  http status code is 200
    response.statusCode.must.be.equal(200);
    const result = await response.json();

    // this checks if the id exists
    result.success.must.be.true();
  });
});
