import tap from 'tap';
import { build } from '../../src/app.js';
import 'must/register.js';

tap.mochaGlobals();

const prefix = '/api';

describe('Update a blog should work', async () => {
  let app;
  before(async () => {
    app = await build();
  });

  it('Should update the object given an ID', async () => {
    const newBlog = {
      title: 'New blog for get',
      author: 'Test author',
      content: 'Some content'
    };

    const newerBlog = {
      title: 'New Blog for update',
      content: 'Some updated content'
    };

    const createResponse = await app.inject({
      method: 'POST',
      url: `${prefix}/blog`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlog)
    });

    const { id, createdDate, updatedDate } = await createResponse.json();
    const response = await app.inject({
      method: 'PUT',
      url: `${prefix}/blog/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newerBlog)
    });

    // this checks if  http status code is 200
    response.statusCode.must.be.equal(200);
    const result = await response.json();

    // this checks if the id exists
    result.id.must.equal(id);
    result.title.must.be.equal(newerBlog.title);
    result.author.must.be.equal(newBlog.author);
    result.content.must.be.equal(newerBlog.content);
    result.blogComments.must.be.equal(newerBlog.isDone);
    result.createdDate.must.equal(createdDate);
    result.updatedDate.must.not.be.null(updatedDate);
  });

  it('Should update when only title is edited', async () => {
    const newBlog = {
      title: 'New Blog for get',
      author: 'Test author',
      content: 'Some content'
    };

    const newerBlog = {
      title: 'Edited title'
    };

    const createResponse = await app.inject({
      method: 'POST',
      url: `${prefix}/blog`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlog)
    });

    const { id, createdDate, updatedDate } = await createResponse.json();
    const response = await app.inject({
      method: 'PUT',
      url: `${prefix}/blog/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newerBlog)
    });

    // this checks if  http status code is 200
    response.statusCode.must.be.equal(200);
    const result = await response.json();

    // this checks if the id exists
    result.id.must.equal(id);
    result.title.must.be.equal(newerBlog.title);
    result.author.must.be.equal(newBlog.author);
    result.content.must.be.equal(newBlog.content);
    result.blogComments.must.be.equal(newBlog.blogComments);
    result.createdDate.must.equal(createdDate);
    result.updatedDate.must.not.be.null(updatedDate);
  });

  it('Should update when only content is edited', async () => {
    const newBlog = {
      title: 'New Blog for get',
      author: 'Test author',
      content: 'Some content'
    };

    const newerBlog = {
      content: 'Edited content'
    };

    const createResponse = await app.inject({
      method: 'POST',
      url: `${prefix}/blog`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlog)
    });

    const { id, createdDate, updatedDate } = await createResponse.json();
    const response = await app.inject({
      method: 'PUT',
      url: `${prefix}/blog/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newerBlog)
    });

    // this checks if  http status code is 200
    response.statusCode.must.be.equal(200);
    const result = await response.json();

    // this checks if the id exists
    result.id.must.equal(id);
    result.title.must.be.equal(newBlog.title);
    result.author.must.be.equal(newBlog.author);
    result.content.must.be.equal(newerBlog.content);
    result.blogComments.must.be.equal(newBlog.blogComments);
    result.createdDate.must.equal(createdDate);
    result.updatedDate.must.not.be.null(updatedDate);
  });
});
