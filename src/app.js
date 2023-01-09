import Fastify from 'fastify';
import ejs from 'ejs';
import fastifyView from '@fastify/view';
import { getBlogs, saveBlogs } from './utils/db/index.js';
import { v4 } from 'uuid';

const prefix = '/api';

export async function build () {
  const fastify = Fastify({ logger: true });

  fastify.register(fastifyView, {
    engine: {
      ejs
    }
  });

  fastify.get(prefix, async (request, reply) => {
    return reply.view('/views/index.ejs', { text: 'text' });
  });

  // This would be the route for create a blog post
  fastify.post(`${prefix}/blog`, async (request, reply) => {
    const { body } = request;
    const { title, author, content} = body;
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
  });

  return fastify;
}
