📝 Blog API (Node.js + Express + MongoDB)

A clean and simple RESTful Blog API built using Node.js, Express, MongoDB, JWT Authentication, and bcrypt password hashing.
This API allows users to sign up, log in, and perform CRUD operations on blog posts with secure access control.

🚀 Tech Stack
Technology	Purpose
    Node.js	Server-side JavaScript runtime
    Express.js	Web framework for building REST APIs
    MongoDB	NoSQL database for storing users & posts
    Mongoose	ODM for modeling MongoDB data
    bcryptjs	Hashing user passwords securely
    jsonwebtoken (JWT)	Generating login tokens for authentication
    Nodemon (optional)	Auto-restart server during development
    🔐 Security Implemented

✔ JWT-based Authentication
✔ Password Hashing with bcrypt
✔ Public & Protected Routes
✔ Only post owner can edit or delete their posts
✔ Token verification middleware

📌 Features
1. User Authentication

    User signup
    
    User login
    
    Password hashing with bcrypt
    
    Login returns JWT token
    
    Token expires in 1 hour

2. Blog Posts

    Create Post (auth required)
    
    Read all posts (public)
    
    Read single post (public)
    
    Update Post (only owner)
    
    Delete Post (only owner)

3. Clean Folder Structure

    Controllers, routes, models, middleware separated for maintainability.

4. Simple, Production-Ready API

    Clean code, no unnecessary complexity.
