import { getBlogs } from '../../utils/db/index.js';
export const general = async (request, reply) => {
  const listOfblogs = await getBlogs();
  const jsonlist = listOfblogs.blogList;
  return reply.view('/views/index.ejs', { list: jsonlist });
};
