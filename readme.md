# User Authentication System

A backend application for user authentication, including registration, login, and retrieving current user details. Built with Node.js, Express, and MongoDB. Passwords are securely hashed using bcrypt, and JSON Web Tokens (JWT) are used for authentication.

## Features

- **User Registration**: Register new users with secure password hashing.
- **User Login**: Authenticate users and generate JWTs for session management.
- **Current User**: Retrieve the details of the currently authenticated user.

## Technologies

- **Node.js**: JavaScript runtime for server-side logic.
- **Express.js**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing user data.
- **bcrypt**: Library for hashing passwords.
- **jsonwebtoken (jwt)**: Library for creating and verifying JSON Web Tokens.

## Installation

1. **Clone the Repository**

    ```bash
    git clone github.com/atharshafi/Contact-Management-Backend-project.git
    cd user-authentication-app
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Set Up Environment Variables**

    Create a `.env` file in the root directory with the following variables:

    ```plaintext
    MONGODB_URI=your_mongodb_connection_string
    ACCESS_TOKEN_SECRET=your_jwt_secret_key
    ```

4. **Start the Application**

    ```bash
    npm start
    ```

    The server will run on `http://localhost:3000` by default.

## API Endpoints

### Register User

- **POST /api/auth/register**
- **Request Body**: 
    ```json
    {
        "username": "string",
        "email": "string",
        "password": "string"
    }
    ```
- **Response**:
    - **201 Created**: 
      ```json
      {
          "_id": "user_id",
          "email": "user_email"
      }
      ```
    - **400 Bad Request**: "All fields are mandatory!" or "User already registered"

### Login User

- **POST /api/auth/login**
- **Request Body**: 
    ```json
    {
        "email": "string",
        "password": "string"
    }
    ```
- **Response**:
    - **200 OK**: 
      ```json
      {
          "accessToken": "jwt_token"
      }
      ```
    - **401 Unauthorized**: "Email or password is not valid"

### Current User

- **GET /api/auth/current**
- **Authorization**: Bearer token in the `Authorization` header
- **Response**:
    - **200 OK**: 
      ```json
      {
          "username": "user_username",
          "email": "user_email",
          "id": "user_id"
      }
      ```

## Usage

1. **Register a New User**

    ```bash
    curl -X POST http://localhost:3000/api/auth/register -d '{"username": "user", "email": "user@example.com", "password": "password123"}' -H "Content-Type: application/json"
    ```

2. **Log In**

    ```bash
    curl -X POST http://localhost:3000/api/auth/login -d '{"email": "user@example.com", "password": "password123"}' -H "Content-Type: application/json"
    ```

    Use the returned `accessToken` for authenticated requests.

3. **Retrieve Current User**

    ```bash
    curl -X GET http://localhost:3000/api/auth/current -H "Authorization: Bearer your_jwt_token"
    ```

## Contributing

Feel free to open issues or submit pull requests to enhance the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
