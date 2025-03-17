# Frontend-Connected CRUD API

This project implements a CRUD (Create, Read, Update, Delete) API with frontend integration using Node.js, Express, MySQL, and jQuery/AJAX.

## Features

- Product Management (Add, List, Update, Delete)
- User Authentication (Login/Register)
- Email Availability Check
- Responsive UI with Bootstrap
- AJAX-based API Communication

## Prerequisites

- Node.js (v14 or higher)
- MySQL Server
- npm (Node Package Manager)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create MySQL database and tables:
   - Open MySQL client
   - Run the SQL commands from `database.sql`

4. Configure database connection:
   - Update the database credentials in `server.js` if needed

5. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Products API
- POST `/api/products` - Add new product
- GET `/api/products` - Get all products
- PUT `/api/products/:id` - Update product
- DELETE `/api/products/:id` - Delete product

### User API
- POST `/api/check-email` - Check email availability
- POST `/api/register` - Register new user
- POST `/api/login` - User login

## Screenshots for Documentation

1. **Database Structure**
   - Screenshot: MySQL Workbench showing the database schema
   - Caption: "Database schema showing products and users tables"

2. **API Testing**
   - Screenshot: Postman collection with all API endpoints
   - Caption: "Postman collection demonstrating all API endpoints"

3. **Frontend Interface**
   - Screenshot: Product management page
   - Caption: "Main interface showing product list and add product form"

4. **Authentication**
   - Screenshot: Login/Register page
   - Caption: "Authentication page with login and registration forms"

5. **Email Check**
   - Screenshot: Registration form with email availability check
   - Caption: "Real-time email availability check during registration"

## File Structure

```
├── public/
│   ├── index.html      # Main product management page
│   ├── auth.html       # Authentication page
│   ├── styles.css      # CSS styles
│   ├── script.js       # Product management JavaScript
│   └── auth.js         # Authentication JavaScript
├── server.js           # Node.js server
├── database.sql        # Database schema
└── package.json        # Project dependencies
``` 