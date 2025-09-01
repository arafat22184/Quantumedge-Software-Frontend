# QuantumEdge Software - Job Portal Frontend

🚀 **Live Demo**: [https://nexrox-digital.vercel.app/](https://nexrox-digital.vercel.app/)  
📂 **Frontend Repository**: [Quantumedge-Software-Frontend](https://github.com/arafat22184/Quantumedge-Software-Frontend)  
⚙️ **Backend Repository**: [Quantumedge-Software-Backend](https://github.com/arafat22184/Quantumedge-Software-Backend)  
🌐 **Backend Live API**: [https://quantumedge-software-backend-1.onrender.com](https://quantumedge-software-backend-1.onrender.com)

---

## 📌 Project Overview

This project is a **Job Portal Application** built as part of the **MERN Developer Intern Task**.  
It implements authentication, job listings, and CRUD job management features.

The project follows a **MERN stack architecture**:

- **Frontend**: React (Vite) deployed on Vercel
- **Backend**: Node.js + Express + MongoDB deployed on Render

---

## 🎨 Figma Design

Design reference: [Figma Link](https://www.figma.com/design/LLrXn8vTjMHmuBjiyEiLs2/Job-Interview-Figma-Design?node-id=0-1&t=5TKP2FKwbYdR6KX3-1)

---

## 📂 Frontend Features (React)

- ✅ Login Page (pixel-perfect from Figma)
- ✅ Registration Page
- ✅ Job Listings Page
- ✅ Integration with backend APIs
- ✅ SweetAlert for alerts & confirmations
- ✅ Cookie-based authentication with JWT
- ✅ Bonus: Mobile-friendly responsive design

---

## 🛠️ Tech Stack

**Frontend:**

- React (Vite)
- React Router DOM
- TailwindCSS
- SweetAlert2
- React Icons

**Backend:**

- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs for password hashing
- cookie-parser for cookie handling

---

## ⚙️ Setup Instructions

### 🔹 Frontend Setup

```bash
# Clone the repo
git clone https://github.com/arafat22184/Quantumedge-Software-Frontend.git
cd Quantumedge-Software-Frontend

# Install dependencies
npm install

# Create .env.local file
VITE_API_URL=https://quantumedge-software-backend-1.onrender.com

# Run locally
npm run dev
```

### 🔹 Backend Setup

```bash
# Clone the repo
git clone https://github.com/arafat22184/Quantumedge-Software-Backend.git
cd Quantumedge-Software-Backend

# Install dependencies
npm install

# Create .env file
PORT=3000
DB_USER=yourMongoUser
DB_PASS=yourMongoPass
CLIENT_ORIGIN=https://nexrox-digital.vercel.app
NODE_ENV=production
JWT_SECRET=yourSecretKey

# Run locally
npm run dev
```

---

## 📌 API Documentation

### 🔹 Auth Endpoints

#### **POST /api/auth/register**

Registers a new user.  
**Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secret123"
}
```

#### **POST /api/auth/login**

Logs in a user and sets JWT token in cookies.  
**Body:**

```json
{
  "email": "john@example.com",
  "password": "secret123"
}
```

#### **GET /api/auth/me**

Fetch logged-in user details (requires JWT).

#### **POST /api/auth/logout**

Logs out user by clearing cookie.

---

### 🔹 Job Endpoints

#### **POST /api/jobs** → Create job (protected)

#### **GET /api/jobs** → Get all jobs (public or protected depending on use case)

#### **GET /api/jobs/:id** → Get job by ID (protected)

#### **PUT /api/jobs/:id** → Update job (only owner)

#### **DELETE /api/jobs/:id** → Delete job (only owner)

---

## 🐛 Issues & Solutions

- **CORS & Cookies Issue on Render** → Fixed by enabling `credentials: true` and setting `sameSite: "none", secure: true`.
- **Direct Route Refresh 404 on Vercel** → Fixed using `vercel.json` rewrites.
- **Unexpected end of JSON on DELETE** → Fixed by checking `response.status !== 204 ? response.json() : {}`.

---

## 📌 Submission Checklist

- [x] Pixel-perfect frontend (3 pages)
- [x] Working backend with auth + job CRUD
- [x] Deployed frontend on Vercel
- [x] Deployed backend on Render
- [x] Proper README with setup + API docs

---

## 👨‍💻 Author

**Arafat**  
🔗 [GitHub](https://github.com/arafat22184)  
🔗 [Live Project](https://nexrox-digital.vercel.app/)
