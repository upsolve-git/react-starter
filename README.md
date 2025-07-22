# React_Starter

Welcome to the Frontend repository! This repository contains the frontend application for Website built with React and Vite. Below you'll find instructions for setting up, running, and developing the application.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Using Docker and Docker Compose](#using-docker-and-docker-compose)
    - [Build and Start the Container](#build-and-start-the-container)
    - [Stopping the Container](#stopping-the-container)
  - [Local Development without Docker](#local-development-without-docker)
- [(#environment-configuration](#environment-configuration)
- [Project Structure](#project-structure)
- [Scripts](#scripts)

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)

## Getting Started

### Clone the Repository

Start by cloning the repository to your local machine:

```bash
https://github.com/upsolve-git/react-starter.git
cd React_Starter
```

1. **Install Dependencies**

   Make sure you have Node.js and `npm` installed. If `npm` is not installed, you can install it globally:

   ```bash
   npm install -g
   ```

   Then install the project dependencies:

   ```bash
   npm install

   ```

2. **Start the Development Server**

   Start the development server with:

   ```bash
   npm run dev
   ```

   The application will be available at [http://localhost:5173](http://localhost:5173).

## Auth Flow

Zustand Store (authStore.ts)
This store handles authentication-related state using Zustand with persist middleware for local storage.

**State Managed**
accessToken – JWT access token
refreshToken – JWT refresh token
isAuthenticated – Boolean flag indicating auth status
user – Object containing:
.email
.firstName
.lastName

error – Error message (if any)

**Available Actions**

setAccessToken(token: string | null) – Sets the access token and updates authentication status
setUser(user: UserData | null) – Sets the user object
setError(error: string | null) – Sets or clears the error message
setIsAuthenticated(value: boolean) – Manually toggle authentication status
logout() – Clears all auth-related state and local storage

**Persistence**

This store uses zustand/middleware/persist to automatically persist the authentication state in localStorage under the key auth-store.

## Project Structure

-`package.json`: Contains project dependencies and npm scripts.

-`vite.config.ts`: Configuration file for Vite.

-`.env`: Environment variable file (e.g., API keys) – not committed to version control.

-`.gitignore`: Specifies untracked files to ignore (e.g., node_modules, .env).

-`tailwind.config.js`: Tailwind CSS configuration (themes, colors, plugins).

-`tsconfig.json`: TypeScript compiler settings.

-`postcss.config.ts`: PostCSS plugins used by Tailwind and Vite.

-`index.html`: The root HTML file used to mount the React app.

## Scripts

- **Start Development Server**: `npm run dev`
- **Build Application**: `npm run build`
- **Run Tests**: `npm run test`
- **Lint Code**: `npm run lint`
- **Preview Production Build**: `npm run preview`
