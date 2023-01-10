import tap from 'tap';
import { build } from '../../src/app.js';
import 'must/register.js';

tap.mochaGlobals();

const prefix = '/api';

describe('get a blog post should work', async () => {
  let app;

  before(async () => {
    app = await build();
  });

  it('Should return the object given an ID', async () => {
    const newBlog = {
      title: 'New Todo for get',
      author: 'Test author',
      content: 'This is just a test content'
    };

    const createResponse = await app.inject({
      method: 'POST',
      url: `${prefix}/blog`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlog)
    });

    const { id } = await createResponse.json();
    const getResponse = await app.inject({
      method: 'GET',
      url: `${prefix}/blog/${id}`
    });

    getResponse.statusCode.must.be.equal(200);
    const result = await getResponse.json();

    result.id.must.equal(id);
    result.title.must.be.equal(newBlog.title);
    result.author.must.be.equal(newBlog.author);
    result.content.must.be.equal(newBlog.content);
    result.createdDate.must.not.be.null();
    result.updatedDate.must.not.be.null();
  });
});
