import tap from 'tap';
import { build } from '../../src/app.js';
import 'must/register.js';
import Chance from 'chance';

const chance = new Chance();
tap.mochaGlobals();

const prefix = '/api';

describe('registering a user should work', async () => {
  let app;

  before(async () => {
    app = await build();
  });

  const newUser = {
    username: chance.email({ domain: 'example.com' }),
    password: chance.strinh({ length: 12 }),
    firstName: chance.first(),
    lastName: chance.last()

  };

  it('should return the user that was created a new user', async () => {
    const response = await app.inject({
      method: 'POST',
      url: `${prefix}/register`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlog)
    });

    // this checks if  http status code is 200
    response.statusCode.must.be.equal(200);
    const result = await response.json();

    // this checks if the id exists
    result.username.must.be(newUser.username);
    result.password.must.be(newUser.password);
    result.firstName.must.be(newUser.firstName);
    result.lastName.must.be(newUser.lastName);
    result.createdDate.must.not.be.null();
    result.updatedDate.must.not.be.null();
  });

  it('Should return error HTTp code 400 if using the same username', async () => {
    const response = await app.inject({
      method: 'POST',
      url: `${prefix}/register`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlog)
    });

    // this checks if  http status code is 200
    response.statusCode.must.be.equal(400);
    const result = await response.json();

    // this checks if the id exists
    result.username.must.be(newUser.username);
    result.password.must.be(newUser.password);
    result.firstName.must.be(newUser.firstName);
    result.lastName.must.be(newUser.lastName);
    result.createdDate.must.not.be.null();
    result.updatedDate.must.not.be.null();
  });
});
