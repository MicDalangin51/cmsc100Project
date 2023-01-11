export const comment = {
    '/blog/:blogId/comment': {
      post: {
        summary: 'Create comments for a blog',
        operationId: 'createComment',
        parameters: [
            {
              $ref: '#/components/parameters/CommentParameterId'
            }
          ],
        requestBody: {
            description: 'The request body for comment',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/CommentRequestRequiredObject'
                }
              }
            },
            required: true
          },
        responses: {
          200: {
            description: 'A comment object',
            content: {
              'application/json': {
                schema: {
  
                  $ref: '#/components/schemas/CommentObject'
  
                }
              }
            }
          }
        },
        security: [
          {}
        ]
      }
  }
};