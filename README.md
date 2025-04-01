# FreshPoint
Below is a sample API specification document in Markdown format that you can share with your team. It details each endpoint with its URL, HTTP method, request body, and expected response.

---

# Grocery Delivery App API Specification

This document outlines the API endpoints for both **User** and **Admin** functionalities. The APIs are designed to support features such as authentication, item browsing, cart management, address handling, order placement, and administrative order and item management.

---

**1. Technology Stack:**

- **Frontend:** ReactJS (optimized for mobile devices)
- **Backend:** Spring Boot
- **Database:** MongoDB

**2. Database Schema Design:**

Using MongoDB, a NoSQL database, allows for flexible and scalable data modeling. Below are the primary collections and their sample structures:

- **Users Collection:**
  ```json
  {
    "_id": ObjectId,
    "mobile_number": String,
    "name": String,
    "addresses": [
      {
        "address_id": ObjectId,
        "street": String,
        "city": String,
        "state": String,
        "zip_code": String
      }
    ],
    "cart": [
      {
        "item_id": ObjectId,
        "quantity": Number
      }
    ],
    "orders": [ObjectId] // References to Orders
  }
  ```
  --- mobileNo should be unique. If mobno present use same details.


- **Items Collection:**
  ```json
  {
    "_id": ObjectId,
    "name": String,
    "description": String,
    "price": Number,
    "category": [ObjectId], // References to Category
    "stock_quantity": Number,
    "image_url": String
  }
  ```

  - **Category Collection:**
  ```json
  {
    "_id": ObjectId,
    "name": String,
    "image_url": String
  }
  ```


- **Orders Collection:**
  ```json
  {
    "_id": ObjectId,
    "user_id": ObjectId,
    "items": [
      {
        "item_id": ObjectId,
        "quantity": Number,
        "price": Number
      }
    ],
    "total_amount": Number,
    "delivery_address": {
      "street": String,
      "city": String,
      "state": String,
      "zip_code": String
    },
    "payment_method": String, // e.g., "Online", "COD"
    "status": String, // e.g., "Placed", "Delivered"
    "order_date": Date
  }
  ```

## Base URL

All endpoints are prefixed with:  
`https://localhost:<port>.com`

---

## User Endpoints

### 1. User Authentication

#### a. Request OTP (Login)
- **URL:** `/api/auth/login`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "mobile_number": "string"
  }
  ```
- **Response:**
  ```json
  {
    "message": "OTP sent successfully"
  }
  ```

#### b. Verify OTP
- **URL:** `/api/auth/verify-otp`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "mobile_number": "string",
    "otp": "string"
  }
  ```
- **Response:**
  ```json
  {
  "token": "jwt_token",
  "user": {
    "id": "string",
    "name": "string",
    "mobile_number": "string",
    "is_admin": true  // true if mobile number is in the admin list, false otherwise
    }
  }
  ```
Note: The is_admin flag is determined by checking if the mobile number is in the admin list.

---

### 2. Categories

#### a. Get All Items
- **URL:** `/api/categories`
- **Method:** `GET`
- **Response:**
  ```json
  [
    {
    "_id": ObjectId,
    "name": String,
    "image_url": String
    }
  ]
  ```
Note: This should return MAP of all categories of items added by ADMIN with image of Category. 
---

### 2. Items

#### a. Get All Items
- **URL:** `/api/category/{_id}/items`
- **Method:** `GET`
- **Response:**
  ```json
  [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "price": number,
      "category": "string",
      "stock_quantity": number,
      "image_url": "string"
    }
  ]
  ```

---

### 3. Cart Management

#### a. Add Item to Cart
- **URL:** `/api/cart`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "item_id": "string",
    "quantity": number
  }
  ```
- **Response:**
  ```json
  {
    "message": "Item added to cart"
  }
  ```
Note: add this in user table cart

#### b. Get Cart Contents
- **URL:** `/api/cart`
- **Method:** `GET`
- **Response:**
  ```json
  [
    {
      "item_id": "string",
      "name": "string",
      "quantity": number,
      "price": number
    }
  ]
  ```

---

### 4. Delivery Address

#### a. Add New Address
- **URL:** `/api/address`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "street": "string",
    "city": "string",
    "state": "string",
    "zip_code": "string"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Address added successfully",
    "address_id": "string"
  }
  ```

---

### 5. Order Placement

#### a. Place Order
- **URL:** `/api/orders`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "delivery_address_id": "string",
    "payment_method": "Online" | "COD"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Order placed successfully",
    "order_id": "string"
  }
  ```

#### b. Get User Orders
- **URL:** `/api/orders`
- **Method:** `GET`
- **Response:**
  ```json
  [
    {
      "order_id": "string",
      "items": [
        {
          "item_id": "string",
          "name": "string",
          "quantity": number,
          "price": number
        }
      ],
      "total_amount": number,
      "status": "Placed" | "Delivered",
      "order_date": "date"
    }
  ]
  ```

---

## Admin Endpoints

### 1. Item Management

#### a. Add New Item
- **URL:** `/api/admin/items`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "name": "string",
    "description": "string",
    "price": number,
    "category": "string",
    "stock_quantity": number,
    "image_url": "string"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Item added successfully",
    "item_id": "string"
  }
  ```

---

### 2. Order Management

#### a. Get All Orders
- **URL:** `/api/admin/orders`
- **Method:** `GET`
- **Response:**
  ```json
  [
    {
      "order_id": "string",
      "user_id": "string",
      "items": [
        {
          "item_id": "string",
          "name": "string",
          "quantity": number,
          "price": number
        }
      ],
      "delivery_address": {
      "street": String,
      "city": String,
      "state": String,
      "zip_code": String
    },
      "total_amount": number,
      "status": "Placed" | "Delivered",
      "order_date": "date"
    }
  ]
  ```

#### b. Mark Order as Delivered
- **URL:** `/api/admin/orders/{order_id}/deliver`
- **Method:** `PUT`
- **URL Parameter:**
  - `order_id`: Unique identifier of the order to update.
- **Response:**
  ```json
  {
    "message": "Order marked as delivered"
  }
  ```

---

## Notes

- **Authentication:**  
  All endpoints (except login and OTP verification) should require a valid JWT token passed in the `Authorization` header as:  
  `Authorization: Bearer <jwt_token>`

- **Error Handling:**  
  Standardize error responses with appropriate HTTP status codes (e.g., 400 for bad requests, 401 for unauthorized, 404 for not found, etc.) and a JSON body like:
  ```json
  {
    "error": "Error message"
  }
  ```

- **Data Validation:**  
  Validate all incoming request data and ensure proper error messaging for invalid inputs.

- **Versioning:**  
  Consider versioning the API endpoints (e.g., `/api/v1/...`) to manage future changes without breaking existing clients.

- **Extensibility:**  
  The design is modular to support future features such as real-time delivery tracking, navigation services, and promotional offers. These can be implemented as additional endpoints or separate microservices as needed.

---

This API specification should serve as a blueprint for your team to begin development. Feel free to adjust the details to better fit your project requirements.

Developing a grocery delivery application involves careful planning of its architecture, database schema, API specifications, and implementation steps. Below is a comprehensive guide tailored to your requirements.

---