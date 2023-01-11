import { createBlogPage } from './blog-page-services/create-blog-page.js';
import { listBlogPage } from './blog-page-services/list-blog-page.js';
import { getBlogPost } from './blog-page-services/get-blog.js';
import { updateBlogPost } from './blog-page-services/update-blog-data.js';
import { deleteBlogPost } from './blog-page-services/delete-blog-data.js';
import { general } from './general/index.js';
import { registerUser } from './user/register-user.js';
import { loginUser } from './user/login-user.js';
import { logoutUser } from './user/logout-user.js';
import { createComment } from './comment/create-comment.js';

export class Service {
  constructor (app) {
    this.app = app;
  }

    // These are todo functions
    general = general
    createBlogPage = createBlogPage
    listBlogPage = listBlogPage
    getBlogPost = getBlogPost
    updateBlogPost = updateBlogPost
    deleteBlogPost = deleteBlogPost

    // These are user functions
    registerUser = registerUser
    loginUser = loginUser
    logoutUser = logoutUser

    //These are for the comments
    createComment = createComment
}
