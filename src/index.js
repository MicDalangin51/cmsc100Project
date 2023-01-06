import { build } from './app.js';

async function start () {
  try {
    // This would initialize fastify
    const fastify = await build();

    const addr = fastify.listen({
      port: '8080'

    });

    console.log(`Listening on port ${addr}`);
  } catch (error) { // This executes if an error is encountered in the 'try' part
    // prints the error
    console.error(error);
    // exits the program
    process.exit(1);
  }
}

start();
