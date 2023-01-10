import { getBlogs, saveBlogs } from '../../utils/db/index.js';

export const deleteBlogPost = async (request, reply) => {
  const { params } = request;
  const { blogId: id } = params;
  const db = await getBlogs();

  delete db.blogList[id];

  await saveBlogs(db);

  return {
    success: true
  };
};