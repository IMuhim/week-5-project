# Guardians Of The Database - Quiz Application

## Overview
Our application is an interactive quiz application that tests students' knowledge across various subjects. Users can take the quiz and recieve their result at the end. Each user will require an account in order to have access to the application and they will be able to use their existing credentials once they have created an account.

## Features
- User Accounts: Users are able to register to use the application and use their login to access it later.
- Authentication & Authorisation
- Subject Selection: Users are able to select from various subjects.
- Interactive Quiz Interface: Simple, user-friendly user interface to navigate through.
- Database Integration: User credentials and quiz questions are stored in a PostgreSQL database.

## Database Architecture
The application uses **Supabase** as our PostgreSQL database hosting platform.

Connection to the database is established throguh Supabase's connection string using environment variables for security.

## Installation & Setup

### Prerequisites
- Node.js
- npm

### Steps
1. Clone the repository
2. Install dependencies using: `npm install`
3. Run `npm run setup-db` to seed the database
4. Start the server: `npm run dev`

## Technologies Used
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: PostgreSQL
- Styling: Bootstrap


## Future Improvements
- Log in/admin panel for teachers to be able create their own quiz
- Question difficulty levels
- Timed quizzes
- Adding images in questions
- Leaderboards for students