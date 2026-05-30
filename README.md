# Career Roadmap Generator

A full-stack web application that generates personalized career roadmaps based on a user's target role, current skills, and experience level.

## Live Demo

* Frontend: https://career-road-map-generator.vercel.app/
* Backend: https://career-roadmap-generator-82l6.onrender.com

## Features

* Generate personalized career roadmaps
* Supports multiple career paths:
  * Frontend Developer
  * Backend Developer
  * Full Stack Developer
  * Java Developer
  * Python Developer
  * Data Analyst
  * Data Scientist
* Experience-level based recommendations
* Save generated roadmaps to MongoDB
* View roadmap history
* Delete saved roadmaps
* Responsive and modern UI

## Tech Stack

### Frontend

* Next.js
* React.js
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Project Structure
```
career-roadmap-generator/

├── backend/

│   ├── config/

│   ├── controllers/

│   ├── models/

│   ├── routes/

│   ├── services/

│   └── server.js

│

└── frontend/

├── app/

├── components/

├── services/

└── public/
```

## API Endpoints

### Generate Roadmap

POST /api/roadmap/generate

Request Body:

{
"targetRole": "Backend Developer",
"currentSkills": "Node.js, Express.js",
"experienceLevel": "Intermediate"
}

### Get All Roadmaps

GET /api/roadmap

### Delete Roadmap

DELETE /api/roadmap/:id

## Installation

### Clone Repository

git clone <repository-url>

cd career-roadmap-generator

### Backend Setup

cd backend

npm install

Create a .env file:

MONGODB_URI=your_mongodb_connection_string

PORT=5000

Run backend:

npm run dev

### Frontend Setup

cd frontend

npm install

Create a .env.local file:

NEXT_PUBLIC_API_URL=http://localhost:5000/api/roadmap

Run frontend:

npm run dev

## Future Improvements

* AI-powered roadmap generation
* User authentication
* Roadmap progress tracking
* Export roadmap as PDF
* Personalized learning resources

## Author

Anjali Rathi
