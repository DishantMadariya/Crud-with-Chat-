# Team Collaboration Hub - Backend

## Overview

This project is the backend implementation for a **Team Collaboration Hub**, supporting features such as:
- **User authentication** using JWT tokens.
- **Role-based access control** for Admin and User roles.
- **Task management**: Full CRUD operations to create, read, update, and delete tasks.
- **Real-time chat** using **Socket.IO** for project-specific chat rooms.
- **Security practices** using Helmet and CORS for middleware protection.

## Features

1. **User Authentication & Role-Based Access**:
   - JWT-based authentication.
   - Role management with `Admin` and `User` roles.

2. **Task Management (CRUD Operations)**:
   - Create, read, update, delete tasks for authenticated users.
   - Tasks are associated with the logged-in user.

3. **Real-Time Chat with Socket.IO**:
   - Real-time messaging for users in project-specific chat rooms.

4. **Security**:
   - Middleware for protected routes.
   - Helmet and CORS implemented for basic security measures.

## Technologies Used

- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database, used to store user, task, and chat data.
- **Mongoose**: ODM library for MongoDB, for schema management.
- **JWT (jsonwebtoken)**: Token-based authentication.
- **Socket.IO**: Real-time communication library.
- **Helmet & CORS**: For securing HTTP headers and enabling cross-origin requests.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- **Node.js** (v14 or higher)
- **MongoDB** (Local or MongoDB Atlas cloud database)
- **Postman** (for API testing)

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   - Create a `.env` file in the project root and add the following values:
     ```env
     PORT=5000
     MONGO_URI=<your-mongodb-uri>
     JWT_SECRET=<your-secret-key>
     ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   This will start the server using **Nodemon** to watch for file changes.

### Folder Structure

```
📦backend
 ┣ 📂controllers
 ┃ ┣ 📜authController.js       # Authentication logic (register/login)
 ┃ ┣ 📜taskController.js       # CRUD logic for tasks
 ┃ ┗ 📜chatController.js       # Chat logic using Socket.IO
 ┣ 📂models
 ┃ ┣ 📜userModel.js            # User schema with roles
 ┃ ┣ 📜taskModel.js            # Task schema
 ┃ ┗ 📜chatModel.js            # Chat schema
 ┣ 📂routes
 ┃ ┣ 📜authRoutes.js           # Routes for authentication
 ┃ ┣ 📜taskRoutes.js           # Routes for task management
 ┃ ┗ 📜chatRoutes.js           # Routes for chat
 ┣ 📂middlewares
 ┃ ┗ 📜authMiddleware.js       # JWT Authentication middleware
 ┣ 📂utils
 ┃ ┗ 📜socket.js               # Socket.IO configuration
 ┣ 📜server.js                 # Server entry point
 ┗ 📜package.json              # Project dependencies and scripts
```

## API Endpoints

Here are the available API endpoints:

### **Authentication Routes**

1. **Register a new user**:
   - **POST** `/api/register`
   - **Body**: `{ "username": "example", "email": "user@example.com", "password": "password", "role": "User" }`
   - Roles can be either `Admin` or `User`.

2. **Login a user**:
   - **POST** `/api/login`
   - **Body**: `{ "email": "user@example.com", "password": "password" }`
   - Returns a JWT token.

### **Task Management Routes**

3. **Create a task**:
   - **POST** `/api/tasks`
   - **Body**: `{ "title": "Task Title", "description": "Task Description" }`
   - Requires JWT token in the `Authorization` header: `Bearer <jwt-token>`.

4. **Get all tasks**:
   - **GET** `/api/tasks`
   - Returns all tasks for the logged-in user.

5. **Get a specific task by ID**:
   - **GET** `/api/tasks/:id`
   - Fetches a task by its ID.

6. **Update a task**:
   - **PUT** `/api/tasks/:id`
   - **Body**: `{ "title": "Updated Title", "description": "Updated Description" }`

7. **Delete a task**:
   - **DELETE** `/api/tasks/:id`

### **Real-Time Chat Routes**

8. **Connect to a project-specific chat room**:
   - Users join a chat room using Socket.IO after they authenticate.
   - Emits and listens for messages in real time.

## Role-Based Access Control (RBAC)

- **User**: Can create, view, update, and delete only their own tasks.
- **Admin**: Can manage (create, view, update, delete) all tasks and has access to additional administrative actions.

To assign roles, you can modify the `role` field in the user model during registration or through the database.

## Security Practices

- **JWT Authentication**: All protected routes are secured using JWTs.
- **Helmet**: Protects against common vulnerabilities by setting HTTP headers.
- **CORS**: Allows cross-origin requests for client-side applications.

## Deployment

To deploy this project to **Heroku**:

1. **Create a new Heroku app**.
2. **Set up MongoDB Atlas** for the database connection.
3. Add the required **environment variables** in Heroku's dashboard.
4. **Deploy** the app by pushing your code to Heroku.

### Example Heroku Deployment Commands

```bash
heroku create
git push heroku main
heroku config:set MONGO_URI=<your-mongodb-uri>
heroku config:set JWT_SECRET=<your-secret-key>
heroku open
```

## Contributions

Feel free to open an issue or submit a pull request for any bug fixes or feature requests.

Let me know if you'd like further changes or clarifications!