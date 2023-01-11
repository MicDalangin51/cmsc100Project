import { getBlogs } from '../../utils/db/index.js';
import { compare } from 'bcrypt';

export const loginUser = async ( request, reply) => {
    const { body } = request;
    const { username, password } = body;

    const db = await getBlogs();

    if (!db.users[username]) {
        return reply.unauthorized('No username');
    }

    if (!await compare(password, db.users[username].hashedPassword)){
        return reply.unauthorized('Incorrect Password');
    }

    const token = await reply.jwtSign({
        username
    });

    request.session.set('token',token);
    return {
        success: true
    };
}