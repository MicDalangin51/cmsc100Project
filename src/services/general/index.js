import { getBlogs } from '../../utils/db/index.js';
import { getAddr } from '../../index.js';
export const general = async (request, reply) => {
  const listOfblogs = await getBlogs();
  const jsonlist = listOfblogs.blogList;
  const uri = 'http://' + getAddr() + ':8080';
  return reply.view('/views/index.ejs', { list: jsonlist, uri });
};
