import { getBlogs, saveBlogs } from '../../utils/db/index.js';
import { v4 } from 'uuid';

export const createBlogPage = async (request, reply) => {
  const { body } = request;
  const { title, author, content } = body;
  const db = await getBlogs();

  const id = v4();

  const blog = {
    title,
    author,
    content,
    blogComments: [],
    createdDate: new Date().getTime(),
    updatedDate: new Date().getTime()
  };

  db.blogList[id] = blog;

  await saveBlogs(db);

  return {
    id,
    ...blog
  };
};
