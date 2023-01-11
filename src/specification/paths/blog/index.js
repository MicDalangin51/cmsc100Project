export const blog = {
  '/blog/:blogId': {
    get: {
      summary: 'View blog page with comments',
      operationId: 'getBlogPost',
      parameters: [
        {
          $ref: '#/components/parameters/BlogParameterId'
        }
      ],
      responses: {
        200: {
          description: 'A blog object',
          content: {
            'application/json': {
              schema: {

                $ref: '#/components/schemas/BlogObject'

              }
            }
          }
        }
      },
      security: [
        {}
      ]
    },
    put: {
      summary: 'Edit blog data',
      operationId: 'updateBlogPost',
      parameters: [
        {
          $ref: '#/components/parameters/BlogParameterId'
        }
      ],
      requestBody: {
        description: 'The request body for blog',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/BlogRequestObject'
            }
          }
        },
        required: true
      },
      responses: {
        200: {
          description: 'A blog object',
          content: {
            'application/json': {
              schema: {

                $ref: '#/components/schemas/BlogObject'

              }
            }
          }
        }
      },
      security: [
        {}
      ]
    },
    delete: {
      summary: 'Delete blog data',
      operationId: 'deleteBlogPost',
      parameters: [
        {
          $ref: '#/components/parameters/BlogParameterId'
        }
      ],
      responses: {
        200: {
          description: 'successful response',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: {
                    type: 'boolean'
                  }
                }
              }

            }
          }
        }
      },
      security: [
        {}
      ]
    }
  },
  '/blog': {
    post: {
      summary: 'Create a blog page',
      operationId: 'createBlogPage',
      requestBody: {
        description: 'The request body for blog',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/BlogRequestRequiredObject'
            }
          }
        },
        required: true
      },
      responses: {
        200: {
          description: 'A blog object',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BlogObject'
              }
            }
          }
        }
      },
      security: [
        {}
      ]
    },
    get: {
      summary: 'List blog page',
      operationId: 'listBlogPage',
      parameters: [
        {
          name: 'limit',
          in: 'query',
          description: 'The number of items returned',
          schema: {
            type: 'number'
          }
        }
      ],
      responses: {
        200: {
          description: 'A blog object',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/BlogObject'
                }
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
