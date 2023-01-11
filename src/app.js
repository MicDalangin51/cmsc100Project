import Fastify from 'fastify';
import ejs from 'ejs';
import fastifyView from '@fastify/view';
import path from 'path';
import FastifyStatic from '@fastify/static';
import sensible from '@fastify/sensible';
import openAPIGlue from 'fastify-openapi-glue';
import swagger from '@fastify/swagger';
import cookie from '@fastify/cookie';
import session from '@fastify/secure-session';
import jwt from '@fastify/jwt';
import { Service } from './services/index.js';
import { Security } from './security/index.js'
import { specification } from './specification/index.js';

const prefix = '/api';

export async function build () {
  const fastify = Fastify({ logger: true });

  fastify.register(cookie);
  fastify.register(session, { 
    secret: 'This is a sufficiently long string for the secret that should work',
    salt: '1234567890123456',
    cookie: { 
      httpOnly: true,
      maxAge: 60 * 60
    }
  });

  fastify.register(jwt, {
    secret: 'this is a very long string that will be used for the jwt secret'
  });

  fastify.register(fastifyView, {
    engine: {
      ejs
    }
  });

  fastify.register(sensible);

  const __dirname = path.resolve(path.dirname(''));
  fastify.register(FastifyStatic, {
    root: path.join(__dirname, 'views')
  });

  const service = new Service();
  const securityHandlers = new Security(fastify);

  const openAPIGlueOptions = {
    specification,
    service,
    securityHandlers,
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
