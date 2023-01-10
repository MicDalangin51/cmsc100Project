import { getBlogs, saveBlogs } from '../../utils/db/index.js';

export const updateBlogPost = async (request, reply) => {
  const { params, body } = request;
  const { blogId: id } = params;
  const { title, content } = body;
  const db = await getBlogs();

  db.blogList[id].title = title || db.blogList[id].title;
  db.blogList[id].content = content || db.blogList[id].content;
  db.blogList[id].updatedDate = new Date().getTime();

  await saveBlogs(db);

  return {
    id,
    ...db.blogList[id]
  };
};
