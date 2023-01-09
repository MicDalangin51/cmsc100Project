import tap from 'tap';
import { build } from '../../src/app.js';
import 'must/register.js';

tap.mochaGlobals();

const prefix = '/api';

describe('creating a blog should work', async () => {
  let app;

  before(async () => {
    app = await build();
  });

  it('shoud return the object that was created and with ID with blogComments = [] without blogComments being given', async () => {
    const newBlog = {
      title: 'New Blog',
      author: 'Some author',
      content: 'Some content'
    };
    const response = await app.inject({
      method: 'POST',
      url: `${prefix}/blog`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlog)
    });

    // this checks if  http status code is 200
    response.statusCode.must.be.equal(200);
    const result = await response.json();

    // this checks if the id exists
    result.id.must.not.be.null();
    result.title.must.be.equal(newBlog.title);
    result.author.must.be.equal(newBlog.author);
    result.content.must.be.equal(newBlog.content);
    result.blogComments.must.be.empty();
    result.createdDate.must.not.be.null();
    result.updatedDate.must.not.be.null();
  });
});
