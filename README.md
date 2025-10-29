# Restaurants API (Node.js + Express + Mongoose)

Simple API for a college project. Implements the four CRUD operations for a Restaurant model, a MongoDB connection, and a seed script with sample restaurants.

Getting started

1. Ensure you have Node.js (>=14) and MongoDB installed and running locally.
2. From the project root, install dependencies:

```bash
npm install
```

3. (Optional) Set a custom MongoDB URI in `.env` file:

```
MONGODB_URI=mongodb://127.0.0.1:27017/restaurants-db
PORT=3000
```

4. Seed the database with sample restaurants:

```bash
npm run seed
```

5. Start the server:

```bash
npm start
```

API endpoints

- POST /restaurants -> create a restaurant
- GET /restaurants -> list restaurants
- GET /restaurants/:id -> get one restaurant
- PATCH /restaurants/:id -> update (partial)
- DELETE /restaurants/:id -> delete

Model fields (example): name (required), address, cuisine, rating (0-5), priceRange ($ - $$$$)

Seed data examples

- Casa Bella (Italian)
- Sabor Local (Uruguayan)
- The Vegan Spot (Vegan)
- Sushi Hana (Japanese)
- Taco Town (Mexican)

Notes

- This is intentionally minimal for learning. For production: add validation, request sanitization, authentication, proper error handling, logging, and tests.
# ReservaFacil-Backend
