import Fastify from 'fastify';
import ejs from 'ejs';
import fastifyView from '@fastify/view'

export async function build () {
  const fastify = Fastify({ logger: true });

  fastify.register(fastifyView, {
    engine: {
      ejs: ejs,
    },
  });

  fastify.get('/api', async (request, reply) => {
    return reply.view("/views/index.ejs", {text:"text"});
  });

  return fastify;
}
