export const schemas = {
    TodoObject: {
      type: 'object',
      properties: {
        id: {
          type: 'string'
        },
        title: {
          type: 'string'
        },
        author: {
          type: 'string'
        },
        content: {
          type: 'boolean'
        },
        createdDate: {
          type: 'number'
        },
        updatedDate: {
          type: 'number'
        }
      }
    },
    BlogRequestObject: {
      type: 'object',
      properties: {
        title: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        content: {
          type: 'string'
        }
      },
      required: [
        'title',
        'author',
        'content'
      ]
    },
   
    NewUserObject: {
      type: 'object',
      properties: {
        username: {
          type: 'string'
        },
        password: {
          type: 'string'
        },
        firstname: {
          type: 'string'
        },
        lastname: {
          type: 'string'
        }
      }
    },
    UserObject: {
      type: 'object',
      properties: {
        username: {
          type: 'string'
        },
        firstname: {
          type: 'string'
        },
        lastname: {
          type: 'string'
        },
        createdDate: {
          type: 'number'
        },
        updatedDate: {
          type: 'number'
        }
      }
    }
  };
  