export const general = async (request, reply) => {
  return reply.view('/views/index.ejs', { text: 'text' });
};
