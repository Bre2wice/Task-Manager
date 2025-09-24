# Task Management App (TypeScript + React + Vite)

A modern task management app with **CRUD tasks**, **Auth0 authentication**, and responsive design using **React**, **TypeScript**, and **Vite**.  

---

## Features

- Dashboard to view tasks and completion status  
- Create, edit, and delete tasks  
- Task details view  
- User authentication with **Auth0**  
- Responsive design with centered, shadowed containers  

---

## Project Structure

src/
├─ components/ Navbar.tsx
├─ context/ TaskProvider.tsx
├─ pages/ Dashboard.tsx | CreateTask.tsx | EditTask.tsx | TaskDetails.tsx
├─ types/ Task.ts
├─ App.tsx
├─ main.tsx
└─ index.css

---

## Setup

1. Clone repo and install dependencies:

```bash
git clone https://github.com/your-username/task-manager-ts.git
cd task-manager-ts
npm install

Create .env with Auth0 credentials:

ini
Copy code
VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
Run


Start dev server:

bash
Copy code
npm run dev
Open http://localhost:5173 in your browser.

Usage:
Login via Auth0 to manage tasks

Create, edit, view, or delete tasks

Dashboard shows task overview and completion status

Tech Stack:

React, TypeScript, Vite, React Router, Context API, Auth0, CSS

Tech Stack
React, TypeScript, Vite, React Router, Context API, Auth0, CSS
