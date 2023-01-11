import Fastify from 'fastify';
import ejs from 'ejs';
import fastifyView from '@fastify/view';
import path from 'path';
import FastifyStatic from '@fastify/static';
import sensible from '@fastify/sensible';
import openAPIGlue from 'fastify-openapi-glue';
import swagger from '@fastify/swagger';
import { Service } from './services/index.js';
import { specification } from './specification/index.js';

const prefix = '/api';

export async function build () {
  const fastify = Fastify({ logger: true });

  fastify.register(fastifyView, {
    engine: {
      ejs
    },
  });

  fastify.register(sensible);

  const __dirname = path.resolve(path.dirname(""));
    fastify.register(FastifyStatic, {
      root: path.join(__dirname, "views"),
    });

  const service = new Service();

  const openAPIGlueOptions = {
    specification,
    service,
    prefix
  };

  const swaggerOptions = {
    openapi: specification,
    routePrefix: '/docs',
    exposeRoute: true
  };

  fastify.register(swagger, swaggerOptions);
  fastify.register(openAPIGlue, openAPIGlueOptions);

  // this would initialize fastify
  // fastify.get(prefix, general);

  // // this would create a todo
  // fastify.post(`${prefix}/todo`, createTodo);

  // // function that gets many todos
  // fastify.get(`${prefix}/todo`, getManyTodo);

  // // function that gets a todo based on a todoId
  // fastify.get(`${prefix}/todo/:todoId`, getTodo);

  // // This function updates one todo
  // fastify.put(`${prefix}/todo/:todoId`, updateTodo);

  // // This function deletes a todo
  // fastify.delete(`${prefix}/todo/:todoId`, deleteTodo);
  return fastify;
}
