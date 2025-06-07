# My Awesome Task Management App


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Key Technologies & Packages](#key-technologies--packages)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  [API Endpoints](#6-api-endpoints)
- [Contributing](#contributing)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Introduction

This is a full-stack web application designed to manage tasks. It features a React-based frontend for a dynamic user interface and a Node.js/Express backend for handling API requests. For simplicity and development speed, the backend currently uses an in-memory data store, meaning all data is lost when the server restarts. This project is ideal for understanding basic CRUD operations (Create, Read, Update, Delete) in a full-stack environment with client-side pagination.

## Features

➕Task Creation: Easily add new tasks (Name, Email, Phone Number).
➕Task Listing: View all created tasks in a paginated table.
➕Task Deletion: Remove tasks from the list.
➕Task Update: Edit existing task details via a modal.
➕Pagination: Navigate through tasks using "Next" and "Previous" page buttons.
➕Responsive Design: (If applicable) The frontend is designed to be responsive across various device sizes.

## Key Technologies & Packages

    This project leverages the following technologies and npm packages:

    Backend (Node.js/Express)

        -Node.js: JavaScript runtime environment.
        -Express.js: Fast, unopinionated, minimalist web framework for Node.js.
        -cors: Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
        -uuid: For generating unique IDs for in-memory tasks.
    
    Frontend (React)

        -React: A JavaScript library for building user interfaces.
        -Vite: Next-generation frontend tooling (build tool, dev server).
        -Axios: Promise-based HTTP client for making API requests.
        -Material-UI (MUI): React components for faster and easier web development (e.g., Box, Modal).
        -Tailwind CSS: (Based on your styles) A utility-first CSS framework for rapidly building custom designs.
        -uuid: For generating unique IDs for temporary frontend state.

## Project Structure

The project is structured as follows:
```
.
├── backend/
│   ├── Controller/        # Handles API logic (e.g., createTask, getAllTask)
│   ├── routes/            # Defines API endpoints (e.g., /api/v1/tasks)
│   ├── utils/             # Utility functions (e.g., APIResponse, APIError)
│   ├── server.js          # Main Express server file
│   └── package.json       # Backend dependencies
├── frontend/
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── api.js         # Centralized API calls (axios instances)
│   │   ├── assets/        # Frontend assets
│   │   ├── components/    # Reusable React components (Navbar, Hero, Form, Update, etc.)
│   │   ├── App.jsx        # Main React component
│   │   ├── main.jsx       # React entry point
│   │   └── index.css      # Global CSS
│   ├── vite.config.js     # Vite configuration
│   └── package.json       # Frontend dependencies
└── README.md              # This file

```

## Getting Started


### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (LTS version recommended)
- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/YogeshBadoni01/databaseless_full_stack_project.git
   ```
2. Navigate to the project directory
   ```sh
   cd databaseless_full_stack_project
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4.Start the frontend
   ```sh
   npm run dev

5. Start the development server
   ```sh
   npm run start
   ```

## API Endpoints
The backend provides the following API endpoints:

Base URL: http://localhost:5050/api/v1/tasks
| Method | Endpoint                    | Description                                       | Request Body Example                                       |
| :----- | :-------------------------- | :------------------------------------------------ | :--------------------------------------------------------- |
| `POST` | `/`                         | Create a new task                                 | `{ "name": "Task Name", "email": "email@example.com", "pNumber": "1234567890" }` |
| `GET`  | `/?page={num}&limit={num}`  | Get all tasks with pagination (e.g., `/?page=1&limit=10`) | None                                                       |
| `PUT`  | `/:id`                      | Update an existing task by ID (partial update)    | `{ "name": "New Name", "email": "new@example.com" }`       |
| `DELETE`| `/:id`                      | Delete a task by ID                               | None                                                       |


## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Contact

[name](YogeshBadoni) - [email](mailto:yogibadoni706@gmail.com)

Project Link: [taskMangement](https://github.com/YogeshBadoni01/databaseless_full_stack_project.git)

## Acknowledgments

- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [tailwindcss](https://https://tailwindcss.com/)
- [Express.js](https://expressjs.org/)
- [And all other dependencies listed in `package.json`](./package.json)
