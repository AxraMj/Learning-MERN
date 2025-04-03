# Day 1: MongoDB Setup and Configuration

This directory contains the basic setup for a MongoDB connection in a MERN stack application. Let's understand the purpose of each main file:

## File Structure and Purpose

### 1. `config/db.js`
This file is responsible for:
- Establishing the connection between your Node.js application and MongoDB database
- Managing database connection configuration
- Handling connection errors
- Providing a centralized place for database settings
- Following the separation of concerns principle by isolating database configuration

### 2. `models/user.js`
This file serves as:
- A blueprint for your data structure in MongoDB
- A schema definition using Mongoose
- A data validation layer
- A clean interface for database operations
- A way to enforce data consistency rules

### 3. `server.js`
This is your application's entry point that:
- Initializes the Express server
- Sets up middleware
- Defines API routes
- Brings together all application components
- Handles server startup and configuration

## Why This Structure?
- **Modularity**: Each file has a specific responsibility
- **Maintainability**: Easier to update and debug
- **Scalability**: Simple to add new features
- **Best Practices**: Follows Node.js/Express conventions
- **Organization**: Clear separation of concerns

## Getting Started
1. Ensure MongoDB is installed and running
2. Install required dependencies (mongoose, express, dotenv)
3. Set up your environment variables
4. Run the server using `node server.js`

## Next Steps
- Add more models as needed
- Create API routes
- Implement business logic
- Add authentication
- Set up error handling middleware 