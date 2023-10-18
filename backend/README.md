# Sellbie Backend Project

Sellbie is a GraphQL-powered Nest.js backend designed to work seamlessly with a React.js frontend. This project serves as the backend foundation for a product renting and buying/selling application, offering features such as user authentication and product management.

## Prerequisites
Before you begin, ensure that you have the following dependencies installed:

- **Node.js**: Make sure you have Node.js installed on your machine.
- **Docker**: You'll need Docker to run the database.
- **Prisma**: Prisma is used for database operations.

## Installation and Setup

### Install Packages
To set up the project, install the necessary Node.js packages by running the following command in your terminal:

```bash
$ npm install
```

### Run the Database

You'll need a database for the project, which can be easily set up using Docker Compose. Run the following command to start the database:

```bash
$ docker compose up -d
```

### Start Prisma Studio

Start Prisma Studio to interact with your database:

```bash
$ npx prisma studio
```

### Running the backend

To run the Sellbie backend, execute the following command:


```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# unit tests
$ npm run test
```

## Project Structure

- **Part 1: Preliminary Features**
  - User Authentication
    - User Registration
    - User Login
  - Technologies: Nest.js, Prisma, GraphQL

- **Part 2: Implementation Documentation**
  - Setting Up Prisma
    - Data Models for Products, Categories, and Users
    - Database Migrations
  - Product CRUD Operations [Ongoing]
    - Add, Edit, and Delete Products
    - List Products with Filters and Pagination
  - Frontend Integration [Ongoing]
    - Infinite Scrolling
    - Product Filtering
  - Technologies: Nest.js, Prisma, GraphQL, React.js, Apollo Client

- **Database**
  - Docker-based Database Setup

- **Prerequisites**
  - Node.js
  - Docker
  - Prisma

- **Installation and Setup**
  - Installing Node.js Packages
  - Running the Database
  - Prisma Setup
  - Running the Project

This README provides a basic guide for setting up and running the Sellbie backend. Make sure to follow the specific documentation for each part to implement the desired features.