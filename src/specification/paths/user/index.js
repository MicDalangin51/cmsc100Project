export const user = {
  '/register': {
    post: {
      summary: 'Register a new user',
      operationId: 'registerUser',
      requestBody: {
        $ref: '#/components/requestBodies/RequestNewUser'
      },
      responses: {
        200: {
          $ref: '#/components/responses/SuccessfulUserResponse'
        }
      },
      security: [
        {}
      ]

    }
  },
  '/login': {
    post: {
      summary: 'Login a user',
      operationId: 'loginUser',
      requestBody: {
        $ref: '#/components/requestBodies/LoginUser'
      },
      responses: {
        200: {
          $ref: '#/components/responses/SuccessfulResponse'
        }
      },
      security: [
        {}
      ]

    }
  },
  '/logout': {
    get: {
      summary: 'Logout a user',
      operationId: 'logoutUser',
      responses: {
        200: {
          $ref: '#/components/responses/SuccessfulResponse'
        }
      },
      security: [
        {}
      ]

    }
  }
};
