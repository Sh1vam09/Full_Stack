# Experiment 6: MongoDB with Mongoose

## Description
This experiment demonstrates MongoDB integration using Mongoose for a Products collection.

## Setup
```bash
npm install

# Set up MongoDB connection string in .env.local
# MONGODB_URI=mongodb://localhost:27017/nextjs-products

npm run dev
```

## Features
- Mongoose ODM for MongoDB
- Product model with validation
- Full CRUD operations
- Connection pooling and caching

## MongoDB Setup
1. Install MongoDB locally or use MongoDB Atlas
2. Create `.env.local` file with `MONGODB_URI`
3. Start MongoDB service

## API Endpoints
- `GET /api/products` - Get all products
- `POST /api/products` - Create a product
- `GET /api/products/[id]` - Get a product
- `PUT /api/products/[id]` - Update a product
- `DELETE /api/products/[id]` - Delete a product
