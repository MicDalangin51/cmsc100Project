import { getBlogs } from '../../utils/db/index.js';
export const general = async (request, reply) => {
  const listOfblogs = await getBlogs();
  const jsonlist = listOfblogs.blogList;
  //   var list = []
  //   for (const key in jsonlist) {
  //     list.push(jsonlist[key]);
  //   }
  return reply.view('/views/index.ejs', { list: jsonlist });
};
