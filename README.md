# Full-Stack TypeScript Monorepo Starter

A production-ready, reusable Monorepo boilerplate for building full-stack web applications. This template is pre-configured with a React frontend, an Express backend, TypeScript, and PostgreSQL with Drizzle ORM.

Use this template to skip the 3-day setup hell and start building features immediately.

## 🏗️ Architecture

This Monorepo uses **NPM Workspaces** to manage multiple applications in a single repository. It shares one `node_modules` folder at the root and allows seamless code sharing between apps.

- `apps/web`: Frontend React application (Vite + React + TypeScript + TailwindCSS).
- `apps/api`: Backend Express REST API (Node.js + Express + TypeScript + Drizzle ORM + PostgreSQL).
- `packages/shared`: A shared package folder for TypeScript interfaces, types, and utility functions used by both frontend and backend.
- `docs`: Root Folder for project documentation, diagrams, and meeting logs.

## 🚀 Prerequisites

Ensure you have the following installed:
- **Node.js** (v20 or higher)
- **PostgreSQL** (v15 or higher) installed and running locally.
- **Git**

## ⚙️ Step-by-Step Setup Guide (For a New Project)

### Step 1: Clone the Template
If you are using GitHub's "Use this template" button, clone your new repo. Otherwise, clone this repo:
`git clone <your-repo-url> my-new-project`
`cd my-new-project`

### Step 2: Install Dependencies
Because this is a Monorepo, install all packages from the root folder:
`npm install --legacy-peer-deps`
*(Note: `--legacy-peer-deps` is required to bypass peer dependency conflicts between newer React versions and ESLint plugins).*

### Step 3: Set up the Database
1. Open pgAdmin or your PostgreSQL terminal (`psql`).
2. Create a new database for your project:
   `CREATE DATABASE my_new_project_db;`

### Step 4: Configure Environment Variables
1. Navigate to `apps/api/`.
2. Create a file named `.env`.
3. Add the following lines:

`DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/my_new_project_db`
`PORT=5000`

*(Replace `YOUR_PASSWORD` with your actual PostgreSQL password. If it contains special characters like `@`, encode them, e.g., `@` becomes `%40`).*

### Step 5: Run Migrations
To generate and apply database tables using Drizzle ORM, run these commands from the root folder:
`npm run db:generate -w apps/api`
`npm run db:migrate -w apps/api`

## 💻 Running the Application

You need two terminal windows to run both the frontend and backend simultaneously.

### Terminal 1: Start the Backend API
From the root folder, run:
`npm run dev:api`
- The API runs on `http://localhost:5000`
- Test it by visiting `http://localhost:5000/api/health`

### Terminal 2: Start the Frontend Web App
From the root folder, run:
`npm run dev:web`
- The frontend runs on `http://localhost:5173`
- Open this URL in your browser. The React app uses a Vite proxy to automatically forward `/api` requests to the backend.

## 🛠️ Available Scripts (Root Directory)

- `npm run dev:api`: Starts the Express backend in watch mode (auto-restarts on save).
- `npm run dev:web`: Starts the Vite React frontend in development mode.
- `npm run db:generate -w apps/api`: Generates SQL migration files from Drizzle schema changes.
- `npm run db:migrate -w apps/api`: Applies pending SQL migrations to the PostgreSQL database.
- `npm run db:check -w apps/api`: Tests the raw database connection using `pg`.
- `npm run db:query -w apps/api`: Runs a test script to INSERT and SELECT a row (for debugging).

## 🗄️ Database Management (Drizzle ORM)

We use **Drizzle ORM** for type-safe database queries and migrations.

1. **To define a new table**: Create a `.ts` file inside `apps/api/src/db/schema/`.
2. **To update the database**:
   - Run `npm run db:generate -w apps/api` to create the SQL migration.
   - Review the generated `.sql` file inside `apps/api/src/db/migrations/`.
   - Run `npm run db:migrate -w apps/api` to apply it to the database.

## 📝 License
This project is UNLICENSED and intended for personal or FYP use.

## Author
Muhammad Izhan Waheed