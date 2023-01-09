import tap from 'tap';
import { getBlogs, saveBlogs } from '../../src/utils/db/index.js';
import 'must/register.js';

tap.mochaGlobals();

describe('DB should work', async () => {
  it('should be able yo read from DB', async () => {
    const db = await getBlogs();
    db.blogList.must.not.be.null();
  });

  it('should be able to write to DB', async () => {
    const db = await getBlogs();
    const date = new Date().getTime();
    db.test = date;

    await saveBlogs(db);

    const newDB = await getBlogs();
    newDB.test.must.be.equal(db.test);
  });
});
