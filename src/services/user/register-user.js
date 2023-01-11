import { getBlogs, saveBlogs } from '../../utils/db/index.js';
import { hash } from 'bcrypt';
const saltRounds = 10;

export const registerUser = async (request, reply) => {
  const { body } = request;
  const { username, password, firstname, lastname } = body;

  const hashedPassword = await hash(password, saltRounds);

  const db = await getBlogs();

  if (db.users[username]) {
    return reply.badRequest('Username already exists');
  }

  const user = {
    hashedPassword,
    firstname,
    lastname,
    createdDate: new Date().getTime(),
    updatedDate: new Date().getTime()
  };

  db.users[username] = user;

  await saveBlogs(db);

  return {
    username,
    ...user
  };
};
