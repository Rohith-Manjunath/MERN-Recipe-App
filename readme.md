# Recipe Sharing Full Stack App (MERN Stack)

## Table of Contents

- [Screenshots](#screenshots)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Live Demo](#live-demo)

- ## Screenshots
 
 ![Screenshot1](./public/static/images/website1.png);
 ![Screenshot2](./public/static/images/website2.png);
 ![Screenshot3](./public/static/images/website3.png);
 ![Screenshot4](./public/static/images/website4.png);

## Features

1. **User Authentication**: Secure user authentication and registration system.
2. **Recipe Management**: Create, edit, and delete your recipes.
3. **Recipe Discovery**: Browse and search for recipes shared by other users.
4. **Comments and Ratings**: Leave comments and rate recipes.
5. **Favorite Recipes**: Save your favorite recipes for easy access.
6. **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## Prerequisites

- [Node.js](https://nodejs.org/) installed (v14 or higher).
- [MongoDB](https://www.mongodb.com/) installed and running locally or on a remote server.
- [Git](https://git-scm.com/) for version control.
- A text editor or integrated development environment (IDE) of your choice (e.g., Visual Studio Code).

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Rohith-Manjunath/MERN-Recipe-App.git

2. Navigate to the project directory:

       cd Mern-Recipe-App   

3. Navigate to the client directory:
     
       cd client 
       cd my-app 

4. Install client dependencies:

       npm install 

5. Return to the project root:

       cd ..
       cd ..

6. Navigate to server folder:

       cd server

7. Create a `.env` file in the project root and configure your environment variables:
   
       PORT=2000
       MONGODB_URI=mongodb://localhost/recipe-app
       SECRET=your-secret-key

Replace `your-secret-key` with a secure secret for JWT token generation.

8. Start the development server

       node index.js


## Folder Structure
The project follows a standard MERN stack folder structure:

- client: Contains the React frontend application.
- server: Contains the Express.js backend application.
- Schema: Define the MongoDB schemas and models.
- routes: Define the API routes.
- controllers: Handle route logic and interact with the database.
- middlewares: Custom middleware functions.
- db: Configuration files (e.g., database connection).

## Technologies Used
#### Frontend:

- React

#### Backend:

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT) for authentication
- bcrypt for secured password hashing


## Live Demo

Check out the live demo of the Recipe Sharing Full Stack App [here](https://benevolent-donut-65e579.netlify.app).

