import { getBlogs } from '../../utils/db/index.js';

export const getBlogPost = async (request, reply) => {
  const { params } = request;
  const { blogId: id } = params;
  const db = await getBlogs();

  const { blogList } = db;

  if (!blogList[id]) {
    return reply.notFound();
  }
  return {
    id,
    ...blogList[id]
  };
};
