# MERN Docker Production

A production-ready **MERN stack application** containerized with Docker and automated using CI/CD.

This project demonstrates how to build and deploy a full-stack application using modern DevOps practices including Docker containers, reverse proxy architecture, and automated image builds.

---

# Tech Stack

Frontend

* React (Vite)

Backend

* Node.js
* Express.js

Database

* MongoDB

DevOps & Infrastructure

* Docker
* Docker Compose
* Nginx Reverse Proxy
* GitHub Actions CI/CD

---

# Architecture

Browser → Nginx Reverse Proxy → Frontend / Backend → MongoDB

Explanation:

* Nginx acts as the entry point
* React frontend is served as static files
* Node.js backend handles API requests
* MongoDB stores application data
* Docker containers isolate each service

---

# Project Structure

mern-docker-production

backend

* Express API
* MongoDB connection
* Dockerfile

frontend

* React (Vite) application
* Dockerfile

nginx

* Reverse proxy configuration

.github/workflows

* CI/CD pipeline for Docker builds

docker-compose.yml

* Orchestrates all containers

---

# Running the Project Locally

Prerequisites

* Docker installed
* Docker Compose installed

Start the application
```bash
docker compose up --build
```
Application URLs

Frontend
http://localhost

Backend API
http://localhost/api/users

---

# Docker Containers

This project runs four containers:

- nginx
    - Reverse proxy that routes requests

- frontend
    - React production build served by Nginx

- backend
    - Node.js Express API

- mongo
    - MongoDB database container

---

# CI/CD Pipeline

Automated using GitHub Actions.

Workflow steps:

1. Push code to main branch
2. GitHub Actions builds Docker images
3. Images are pushed to Docker Hub
4. Images are ready for deployment

Docker images:

dockerhubusername/mern-backend\
dockerhubusername/mern-frontend

---

# Environment Variables

Backend (.env)

PORT=5000\
MONGO_URI=mongodb://mongo:27017/mern-docker

Frontend (.env)

VITE_API_URL=/api

---

# API Endpoints

GET /api/users

Returns:
```json
{
"message": "User API working"
}
```

---

# Development Workflow

1. Clone repository

```bash
git clone https://github.com/yourusername/mern-docker-production
```

2. Start containers

```bash
docker compose up
```

3. Make code changes

4. Rebuild if needed

```bash
docker compose up --build
```
---

# Future Improvements

* Kubernetes deployment
* Automated cloud deployment
* Authentication system
* Monitoring and logging

---

# Author

Eranga Madhushan

Computer Science Student\
FullStack Developer\
Open Source Contributor

---
