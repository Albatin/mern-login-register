# MERN Login & Register

A full-stack **MERN** (MongoDB, Express, React, Node.js) project with user authentication.

## Features

- User registration and login
- Password hashing with bcrypt
- JWT authentication
- Clean frontend with React + Tailwind CSS

## Tech Stack

- Frontend: React, Tailwind CSS, Vite
- Backend: Node.js, Express, MongoDB
- Authentication: JWT
- Password hashing: bcrypt

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/Albatin/mern-login-register.git
cd mern-login-register
```
### 2. Install dependencies

**Backend:**

```bash
cd backend
npm install
```

**Frontend:**

```bash
cd ../frontend
npm install
```

### 3. Setup environment variables

Create a file named `.env` inside the `backend` folder:
Add the following content:

```env
PORT=5000
JWT_SECRET=your_jwt_secret_here
```

### 4. Run the project

**Backend:**

```bash
cd backend
npm start
```

**Frontend:**

```bash
cd ../frontend
npm run dev
```

### 5. Open in browser

- Frontend (React/Vite): [http://localhost:5173](http://localhost:5173)  
- Backend (Express): [http://localhost:5000](http://localhost:5000)
