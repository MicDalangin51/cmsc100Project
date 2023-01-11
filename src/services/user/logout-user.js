import { getBlogs } from '../../utils/db/index.js';
import { compare } from 'bcrypt';

export const logoutUser = async ( request, reply) => {
    request.session.delete();  //Deletes the session cookies upon logout
    return {
        success: true
    };
}