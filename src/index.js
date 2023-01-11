import { build } from './app.js';

let uri = String();
async function start () {
  try {
    // This would initialize fastify
    const fastify = await build();

    const addr = await fastify.listen({
      port: '8080'
    });

    const addressesList = fastify.addresses();
    for (let i = 0; i < addressesList.length; i++) {
      if (addressesList[i].family === 'IPv4') {
        uri = addressesList[i].address;
      }
    }
    console.log(`listening on port ${addr}`);
  } catch (error) { // This executes if an error is encountered in the 'try' part
    // prints the error
    console.error(error);
    // exits the program
    process.exit(1);
  }
}

await start();
console.log(uri);
export function getAddr () {
  return uri;
}
