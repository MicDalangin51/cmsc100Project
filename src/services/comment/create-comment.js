import { getBlogs, saveBlogs } from '../../utils/db/index.js';
import { v4 } from 'uuid';

export const createComment = async (request, reply) => {
  const { params, body } = request;
  const { blogId: bid } = params;
  const { author, content } = body;
  const db = await getBlogs();

  const id = v4();

  const comment = {
    id,
    author,
    content,
    createdDate: new Date().getTime(),
    updatedDate: new Date().getTime()
  };

  db.blogList[bid]['blogComments'].push(comment);

  await saveBlogs(db);

  return {
    id,
    ...comment
  };
};
