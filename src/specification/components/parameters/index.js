export const parameters = {
  BlogParameterId: {
    name: 'blogId',
    in: 'path',
    required: true,
    description: 'This is the id of the blog',
    schema: {
      type: 'string'
    }
  },
  CommentParameterId: {
    name: 'blogId',
    in: 'path',
    required: true,
    description: 'This is the id of the blog to post a comment to',
    schema: {
      type: 'string'
    }
  },
  BlogCommentParameterId: {
    name: 'commentId',
    in: 'path',
    required: true,
    description: 'This is the id of the comment',
    schema: {
      type: 'string'
    }
  }
};
