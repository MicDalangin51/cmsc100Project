export const schemas = {
  BlogObject: {
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
        type: 'string'
      },
      createdDate: {
        type: 'number'
      },
      updatedDate: {
        type: 'number'
      }
    }
  },CommentObject: {
    type: 'object',
    properties: {
      id: {
        type: 'string'
      },
      author: {
        type: 'string'
      },
      content: {
        type: 'string'
      },
      postId: {
        type: 'string'
      },
      createdDate: {
        type: 'number'
      },
      updatedDate: {
        type: 'number'
      }
    }
  },
  BlogRequestRequiredObject: {
    type: 'object',
    properties: {
      title: {
        type: 'string'
      },
      author: {
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
  CommentRequestRequiredObject: {
    type: 'object',
    properties: {
      author: {
        type: 'string'
      },
      content: {
        type: 'string'
      }
    },
    required: [
      'author',
      'content'
    ]
  },
  BlogRequestObject: {
    type: 'object',
    properties: {
      title: {
        type: 'string'
      },
      author: {
        type: 'string'
      },
      content: {
        type: 'string'
      }
    }
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
  LoginObject: {
    type: 'object',
    properties: {
      username: {
        type: 'string'
      },
      password: {
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
  },
  SuccessfulObject: {
    type: 'object',
    properties: {
      success: {
        type: 'boolean'
      }
    }
  }
};
