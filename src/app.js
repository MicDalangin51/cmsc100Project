import Fastify from 'fastify';
import ejs from 'ejs';
import fastifyView from '@fastify/view';
import { createBlogPage } from './services/blog-page-services/create-blog-page.js';
import { listBlogPage } from './services/blog-page-services/list-blog-page.js';
import { getBlogPost } from './services/blog-page-services/get-blog.js';
import { general } from './services/general/index.js';

const prefix = '/api';

export async function build () {
  const fastify = Fastify({ logger: true });

  fastify.register(fastifyView, {
    engine: {
      ejs
    }
  });

  fastify.get(prefix, general);

  // This would be the route for create a blog post
  fastify.post(`${prefix}/blog`, createBlogPage);

  // This would be the route for list blog page
  fastify.get(`${prefix}/blog`, listBlogPage);

  // This woulf be the route for getting a specific blog post
  fastify.get(`${prefix}/blog/:blogId`,getBlogPost);

  return fastify;
}
