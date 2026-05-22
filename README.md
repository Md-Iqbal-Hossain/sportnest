#  SportNest - Sports Facility Booking Management System

## 📌 Project Name
SportNest

---

## 🎯 Purpose

SportNest is a full-stack MERN-based sports facility booking management system that allows users to explore and book sports facilities such as football turfs, badminton courts, swimming lanes, and tennis courts.

The platform simulates a real-world sports reservation system where users can:
- Browse available sports facilities
- Book facilities for specific dates and time slots
- Manage their bookings
- Add and manage their own facilities (facility owners)

This project is built using the **MERN Stack with Better Auth authentication system**, demonstrating real-world full-stack development concepts such as authentication, CRUD operations, protected routes, and secure API handling.

---

## 🌐 Live Links

- 🖥️ Live Website (Client):  
https://sportnest-two.vercel.app/

- ⚙️ Backend Server:  
https://sportnest-server-xi.vercel.app/

- 📂 Client Repository:  
https://github.com/Md-Iqbal-Hossain/sportnest

- 📂 Server Repository:  
https://github.com/Md-Iqbal-Hossain/sportnest-server

---

## 🚀 Features

### 🏠 General Features
- Fully responsive design (mobile, tablet, desktop)
- Modern and clean UI design
- Smooth animations using Framer Motion
- Component-based reusable architecture

---

### 🔐 Authentication System
- Email & password authentication
- Google OAuth login integration
- Secure JWT-based authentication (Better Auth)
- Protected private routes
- Persistent login session (no logout on refresh)

---

### 🏟️ Facility Management (CRUD)
- Add new sports facilities (private route)
- View all available facilities (public route)
- Update facility details (owner only)
- Delete facilities with confirmation
- Dynamic sport category system

---

### 📅 Booking System
- Book facilities by selecting:
  - Date
  - Time slot
  - Duration
- Automatic price calculation
- View all personal bookings
- Cancel bookings anytime
- Booking status management (Pending/Confirmed)

---

### 🔎 Search & Filter
- Search facilities by name
- Filter by sport type
- MongoDB `$regex` based filtering

---

### 👤 User Dashboard
- My Bookings page
- Add Facility page
- Manage Facilities page
- Profile dropdown with user actions

---

### ⚡ UI / UX Enhancements
- Framer Motion animations
- Hero UI components
- Loading spinners & loading states
- Custom 404 Not Found page
- Toast notifications for all actions
- Clean recruiter-friendly interface

---

## 📦 NPM Packages Used

### 🖥️ Frontend (Client)
- next
- react
- react-dom
- framer-motion
- react-icons
- @heroui/react
- @gravity-ui/icons
- react-hot-toast
- jose-cjs
- better-auth

---

### ⚙️ Backend (Server)
- express
- mongodb
- cors
- dotenv
- jose-cjs
- better-auth

---

## 🏗️ Tech Stack

- Frontend: Next.js (App Router), Tailwind CSS, Hero UI
- Backend: Node.js, Express.js
- Database: MongoDB Atlas
- Authentication: Better Auth (JWT + Google OAuth)
- Deployment: Vercel (Client + Server)

---

## 🔐 Security Features

- JWT-based authentication
- HTTP-only session handling
- Protected API routes
- Environment variables for sensitive data
- Role-based access control (facility owner logic)

---

## 📱 Responsive Design

SportNest is fully responsive across:
- Mobile devices
- Tablets
- Desktop screens

---

## 👨‍💻 Developer

Md.Iqbal Hossain