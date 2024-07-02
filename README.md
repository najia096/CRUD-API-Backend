# CRUD-API-Backend with Node, Express, and MongoDB Atlas
This is a simple CRUD API application built with Node.js, Express, and MongoDB Atlas. It provides basic CRUD (Create, Read, Update, Delete) operations for managing products. The API has been tested with Insomnia and Postman.

## Features

- Create, Read, Update, and Delete (CRUD) operations for products.
- Connection to MongoDB Atlas for database management.
- Tested with Insomnia and Postman for API functionality.

## Prerequisites

- Node.js (v12.x or later)
- npm (v6.x or later)
- MongoDB Atlas account and cluster
MongoDB Atlas account and cluster

## Installation
- Clone the repository.
- Install dependencies - npm install.
- Open a project and a cluster and copy the connection string in index.js.
- Run by - npm run dev
The server will be running on http://localhost:3000.

Use tools like Insomnia or Postman or Thunder Client to test the endpoints.

## Testing
This API has been tested with Insomnia and Postman. You can import the provided Insomnia.json or Postman.json files to get started with testing the endpoints.

## API Endpoints
- GET /api/products: Get all products.
- GET /api/products/: Get a product by ID.
- POST /api/products: Create a new product.
- PUT /api/products/: Update a product by ID.
- DELETE /api/products/: Delete a product by ID.
