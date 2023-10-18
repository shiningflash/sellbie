# Sellbie Frontend Project

The Sellbie Frontend is a React application that integrates with the Sellbie backend via GraphQL. It offers a sleek user interface for a product renting and buying/selling application. The project is built with modern technologies, including React, Tailwind CSS, and Vite, and provides essential user authentication and product management features.

## Functionality

### Part 1: Preliminary Features

In this initial part, the project focuses on implementing user authentication features.

#### Step 1: User Registration

- Create a registration form component.
- Utilize Apollo Client, a GraphQL client, to make a GraphQL mutation for registering a new user.
- Implement form submission handling and error management.

#### Step 2: User Login

- Develop a login form component.
- Utilize Apollo Client to make a GraphQL mutation to log in a user.
- Handle form submissions and errors effectively.
- Store the JWT token in either local storage or a cookie for authentication.

### Part 2: Implementation Documentation

In the next part, you will add advanced features for product management and browsing.

#### Step 3: Product Management (Ongoing)

- Create components for adding, editing, and deleting products.
- Utilize Apollo Client to communicate with the Sellbie Backend for these operations.

#### Step 4: Product Listing and Filtering (Ongoing)

- Implement product listing components, complete with filters and infinite scrolling.
- Use GraphQL queries to retrieve and display product data.
- Enable efficient filtering and browsing of products.

## Technologies

The Sellbie Frontend project utilizes the following technologies:

- **React**: A popular JavaScript library for building user interfaces.
- **TypeScript**: A free and open-source high-level programming language .
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **Vite**: A build tool that provides fast development server and optimized production build.
- **Apollo Client**: A fully-featured GraphQL client for managing GraphQL data.
- **GraphQL**: A query language for your API, enabling efficient data retrieval.
- **JWT (JSON Web Token)**: Used for secure user authentication and authorization.

## How to Run the Project

To run the Sellbie Frontend, follow these steps:

* Install the required Node.js packages:

```bash
npm install
```

* Start the development server using Vite:

```bash
$ npm run dev
```

Access the Sellbie Frontend at http://localhost:5173/


## Connecting to the Sellbie Backend

The Sellbie Frontend communicates with the Sellbie Backend through GraphQL. Make sure the Sellbie Backend is running at http://localhost:3000/graphql for the frontend to function correctly.