import { getBlogs } from '../../utils/db/index.js';

export const listBlogPage = async (request, reply) => {
  const { query } = request;
  const { limit = 7 } = query;
  const db = await getBlogs();

  const list = [];

  const blogs = Object.entries(db.blogList).map(function ([id, blog]) {
    return {
      id,
      ...blog
    };
  }).sort(function (blog1, blog2) {
    return blog2.createdDate - blog1.createdDate;
  });

  for (const blog of blogs) {
    list.push(blog);
    if (list.length >= limit) {
      break;
    }
  }

  return list;
};
