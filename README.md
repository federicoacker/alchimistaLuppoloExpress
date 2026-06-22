# Alchimista Luppolo Express - API Documentation

This document provides a comprehensive guide to all available REST API endpoints for the Alchimista Luppolo Express project.

## Base URL

```
http://localhost:3000
```

---

## Categories Endpoints

### 1. Get All Categories

**GET** `/categories`

Retrieves a list of all categories available in the database.

**Response:** `200 OK`

```json
{
  "error": null,
  "result": [
    {
      "slug": "ipa",
      "name": "IPA",
      "short_description": "India Pale Ale"
    },
    {
      "slug": "lager",
      "name": "Lager",
      "short_description": "Lager Beer"
    }
  ]
}
```

**Error Responses:**

- **404 Not Found** - No categories found in database
```json
{
  "error": "Non sono state trovate categorie nel db",
  "result": null
}
```

- **500 Internal Server Error** - Database fetch error
```json
{
  "error": "C'è stato un errore nel fetch delle categorie dal db",
  "result": null
}
```

---

### 2. Get Category by Slug

**GET** `/categories/:categorySlug`

Retrieves a specific category by its slug identifier.

**Parameters:**
- `categorySlug` (string, required) - The unique slug identifier of the category

**Response:** `200 OK`

```json
{
  "error": null,
  "result": {
    "slug": "ipa",
    "name": "IPA",
    "short_description": "India Pale Ale"
  }
}
```

**Error Responses:**

- **404 Not Found** - Category slug not found
```json
{
  "error": "Non è stata trovata una categoria con quella slug",
  "result": null
}
```

- **500 Internal Server Error** - Database fetch error
```json
{
  "error": "C'è stato un errore nel fetch della categoria dal db",
  "result": null
}
```

---

### 3. Create Category

**POST** `/categories`

Creates a new category. The slug is automatically generated from the category name.

**Request Body Schema:**

```json
{
  "name": "string (max 100 characters) [REQUIRED]",
  "short_description": "string (max 255 characters) [REQUIRED]"
}
```

**Example Request:**

```json
{
  "name": "Stout",
  "short_description": "Dark and Rich Beer"
}
```

**Response:** `200 OK`

```json
{
  "error": null,
  "result": 3
}
```
*(Returns the `insertId` of the newly created category)*

**Error Response:**

- **400 Bad Request** - Validation error
```json
{
  "result": null,
  "errors": [
    "Il nome inserito non è valido",
    "La short description inserita non è valida"
  ]
}
```

- **500 Internal Server Error** - Database creation error
```json
{
  "error": "C'è stato un errore nella creazione della categoria in db",
  "result": null
}
```

---

### 4. Delete Category

**DELETE** `/categories/:categorySlug`

Deletes a category by its slug identifier.

**Parameters:**
- `categorySlug` (string, required) - The unique slug identifier of the category

**Response:** `204 No Content`

*(No response body)*

**Error Response:**

- **500 Internal Server Error** - Database deletion error
```json
{
  "error": "C'è stato un'errore nella destroy della categoria",
  "result": null
}
```

---

## Products Endpoints

### 1. Get All Products

**GET** `/products`

Retrieves a list of products with optional filtering, sorting, and pagination.

**Query Parameters (optional):**
- `orderBy` - Sort by field. Accepted values: `created_at`, `updated_at`, `name`, `category_slug`, `origin`, `brewery`, `price`, `ibu`, `abv`, `size`
- `order` - Sort direction: `asc` or `desc` (default: `asc`)
- `offset` - Pagination offset (default: 0) will return an error if the offset is greater than the number of products in the DB.
- `limit` - Number of results to return, max 10 (default: 10)
- `category` - Filter by category slug or pass "any"
- `search` - Search in product name and description
- `brewery` - Filter by brewery name
- `excluded-brewery` - Exclude products from a specific brewery

**Response:** `200 OK`

```json
{
  "error": null,
  "result": [
    {
      "slug": "peroni-lager",
      "name": "Peroni Lager",
      "description": "Classic Italian lager with a crisp, refreshing taste",
      "short_description": "Italian Lager",
      "origin": "Italy",
      "brewery": "Peroni Brewery",
      "abv": 4.7,
      "image": "/images/peroni-lager.jpg",
      "serving_temp": "4-6°C",
      "price": 3.50,
      "updated_at": "2024-01-15T10:30:00Z",
      "created_at": "2024-01-10T08:00:00Z",
      "ibu": 18,
      "pairs_with": "Light appetizers, seafood",
      "suggested_glass": "Pilsner Glass",
      "ingredients": "Water, Barley, Hops, Yeast",
      "size": "Bottiglia 33",
      "colour": "chiara",
      "subtype": "Pilsner",
      "category_name": "Lager",
      "category_slug": "lager"
    }
  ]
}
```

**Error Responses:**

- **400 Bad Request** - Query parameter validation error
```json
{
  "result": null,
  "errors": [
    "Il valore inserito in orderBy è errato"
  ]
}
```

- **404 Not Found** - No products found
```json
{
  "error": "Non sono stati trovati prodotti",
  "result": null
}
```

- **500 Internal Server Error** - Database fetch error
```json
{
  "error": "C'è stato un errore nel recuperare i dati dei prodotti dal db",
  "result": null
}
```

---

### 2. Get Product by Slug

**GET** `/products/:productSlug`

Retrieves a specific product by its slug identifier.

**Parameters:**
- `productSlug` (string, required) - The unique slug identifier of the product

**Response:** `200 OK`

```json
{
  "error": null,
  "result": {
    "slug": "peroni-lager",
    "name": "Peroni Lager",
    "description": "Classic Italian lager with a crisp, refreshing taste",
    "short_description": "Italian Lager",
    "origin": "Italy",
    "brewery": "Peroni Brewery",
    "abv": 4.7,
    "image": "/images/peroni-lager.jpg",
    "serving_temp": "4-6°C",
    "price": 3.50,
    "updated_at": "2024-01-15T10:30:00Z",
    "created_at": "2024-01-10T08:00:00Z",
    "ibu": 18,
    "pairs_with": "Light appetizers, seafood",
    "suggested_glass": "Pilsner Glass",
    "ingredients": "Water, Barley, Hops, Yeast",
    "size": "Bottiglia 33",
    "colour": "chiara",
    "subtype": "Pilsner",
    "category_name": "Lager",
    "category_slug": "lager"
  }
}
```

**Error Response:**

- **500 Internal Server Error** - Database fetch error
```json
{
  "error": "C'è stato un errore nel recuperare i dati del prodotto {productSlug}",
  "result": null
}
```

---

### 3. Create Product

**POST** `/products`

Creates a new product. The slug is automatically generated from the product name. Categories must already exist in the database.

**Request Body Schema:**

```json
{
  "name": "string (max 255 characters) [REQUIRED]",
  "description": "string (max 65535 characters) [REQUIRED]",
  "short_description": "string (max 255 characters) [REQUIRED]",
  "origin": "string (max 255 characters) [REQUIRED]",
  "brewery": "string (max 255 characters) [REQUIRED]",
  "abv": "float (max 255) [REQUIRED]",
  "image": "string (max 255 characters) [REQUIRED]",
  "serving_temp": "string (max 255 characters) [REQUIRED]",
  "price": "float (max 99.99) [REQUIRED]",
  "ibu": "integer (max 255) [REQUIRED]",
  "pairs_with": "string (max 65535 characters) [REQUIRED]",
  "suggested_glass": "string (max 100 characters) [REQUIRED]",
  "ingredients": "string (max 65535 characters) [REQUIRED]",
  "size": "string - one of: 'Lattina 33', 'Lattina 40', 'Bottiglia 33', 'Bottiglia 50' [REQUIRED]",
  "colour": "string - one of: 'scura', 'rossa', 'ambrata', 'chiara' [REQUIRED]",
  "subtype": "string (max 100 characters) [REQUIRED]",
  "categories": "array of objects with { name: string, slug: string } [REQUIRED]"
}
```

**Example Request:**

```json
{
  "name": "Guinness Stout",
  "description": "A dark Irish stout with a rich, creamy head and complex flavor profile with notes of roasted barley and chocolate",
  "short_description": "Irish Stout",
  "origin": "Ireland",
  "brewery": "St. James's Gate Brewery",
  "abv": 4.2,
  "image": "/images/guinness-stout.jpg",
  "serving_temp": "6-8°C",
  "price": 5.50,
  "ibu": 45,
  "pairs_with": "Red meat, stews, chocolate desserts",
  "suggested_glass": "Pint Glass",
  "ingredients": "Water, Barley, Hops, Yeast, CO2",
  "size": "Bottiglia 50",
  "colour": "scura",
  "subtype": "Dry Stout",
  "categories": [
    {
      "name": "Stout",
      "slug": "stout"
    }
  ]
}
```

**Response:** `200 OK`

```json
{
  "error": null,
  "result": 42
}
```
*(Returns the `insertId` of the newly created product)*

**Error Response:**

- **400 Bad Request** - Validation error
```json
{
  "result": null,
  "errors": [
    "Il nome inserito non è valido",
    "La categoria stout non esiste in db",
    "Mancano le fields [...] al prodotto passato al server"
  ]
}
```

- **500 Internal Server Error** - Database creation error
```json
{
  "error": "C'è stato un errore nella creazione del prodotto in db",
  "result": null
}
```

---

### 4. Update Product (PATCH)

**PATCH** `/products/:productSlug`

Updates an existing product by its slug identifier. Only the fields that need to be updated should be included in the request body.

**Parameters:**
- `productSlug` (string, required) - The unique slug identifier of the product

**Request Body Schema:** *(Same as Create Product, but all fields are optional, does NOT currently allow to modify categories tied to the product)*

**Example Request (updating only price and abv):**

```json
{
  "price": 5.00,
  "abv": 5.8
}
```

**Response:** `200 OK`

```json
{
  "error": null,
  "result": {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "Rows matched: 1 Changed: 1 Warnings: 0",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 1
  }
}
```

**Error Response:**

- **400 Bad Request** - Validation error
```json
{
  "result": null,
  "errors": [
    "Il prezzo inserito non è valido"
  ]
}
```

- **500 Internal Server Error** - Database update error
```json
{
  "error": "C'è stato un errore nell'update del prodotto",
  "result": null
}
```

---

### 5. Delete Product

**DELETE** `/products/:productSlug`

Deletes a product by its slug identifier.

**Parameters:**
- `productSlug` (string, required) - The unique slug identifier of the product

**Response:** `204 No Content`

*(No response body)*

**Error Response:**

- **500 Internal Server Error** - Database deletion error
```json
{
  "error": "C'è stato un errore nella destroy del prodotto",
  "result": null
}
```

---

## Orders Endpoints

### 1. Get All Orders

**GET** `/orders`

Retrieves a list of all orders with optional filtering by status.

**Query Parameters (optional):**
- `status` - Filter by order status: `completed`, `pending`, or `canceled`

**Response:** `200 OK`

```json
{
  "error": null,
  "result": [
    {
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "city": "Milan",
      "address_line_1": "Via Roma 123",
      "postal_code": "20100",
      "email": "john@example.com",
      "phone": "+39123456789",
      "date_of_birth": "1990-05-15",
      "total_price": 45.50,
      "shipping_price": 5.00,
      "products_price": 40.50,
      "status": "pending",
      "created_at": "2024-01-20T14:30:00Z",
      "updated_at": "2024-01-20T14:30:00Z"
    },
    {
      "id": 2,
      "first_name": "Jane",
      "last_name": "Smith",
      "city": "Rome",
      "address_line_1": "Via Veneto 456",
      "postal_code": "00187",
      "email": "jane@example.com",
      "phone": "+39987654321",
      "date_of_birth": "1985-03-22",
      "total_price": 62.00,
      "shipping_price": 7.50,
      "products_price": 54.50,
      "status": "completed",
      "created_at": "2024-01-19T10:15:00Z",
      "updated_at": "2024-01-20T09:00:00Z"
    }
  ]
}
```

**Error Responses:**

- **404 Not Found** - No orders found
```json
{
  "error": "Non sono stati trovati ordini",
  "result": null
}
```

- **500 Internal Server Error** - Database fetch error
```json
{
  "error": "C'è stato un errore nel recuperare gli ordini dal db",
  "result": null
}
```

---

### 2. Get Order by ID

**GET** `/orders/:id`

Retrieves a specific order by its ID.

**Parameters:**
- `id` (number, required) - The unique numeric identifier of the order

**Response:** `200 OK`

```json
{
  "error": null,
  "result": {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "city": "Milan",
    "address_line_1": "Via Roma 123",
    "postal_code": "20100",
    "email": "john@example.com",
    "phone": "+39123456789",
    "date_of_birth": "1990-05-15",
    "total_price": 45.50,
    "shipping_price": 5.00,
    "products_price": 40.50,
    "status": "pending",
    "created_at": "2024-01-20T14:30:00Z",
    "updated_at": "2024-01-20T14:30:00Z"
  }
}
```

**Error Responses:**

- **400 Bad Request** - Invalid order ID format
```json
{
  "error": "Id ordine non valido",
  "result": null
}
```

- **404 Not Found** - Order not found
```json
{
  "error": "Ordine non trovato",
  "result": null
}
```

- **500 Internal Server Error** - Database fetch error
```json
{
  "error": "C'è stato un errore nel recuperare l'ordine dal db",
  "result": null
}
```

---

### 3. Create Order

**POST** `/orders`

Creates a new order with associated products. The order creation is performed as a database transaction - if any product is not found, the entire order creation is rolled back.

**Request Body Schema:**

```json
{
  "first_name": "string (max 150) [REQUIRED]",
  "last_name": "string (max 150) [REQUIRED]",
  "city": "string (max 255) [REQUIRED]",
  "address_line_1": "string (max 255) [REQUIRED]",
  "postal_code": "string (max 20) [REQUIRED]",
  "email": "string (max 255, must be valid email) [REQUIRED]",
  "phone": "string (max 15) [REQUIRED]",
  "date_of_birth": "string (format: YYYY-MM-DD) [REQUIRED]",
  "total_price": "float (must equal shipping_price + products_price) [REQUIRED]",
  "shipping_price": "float [REQUIRED]",
  "products_price": "float (max 99.99) [REQUIRED]",
  "status": "string - one of: 'completed', 'pending', 'canceled' [REQUIRED]",
  "products": "array of objects [REQUIRED]"
}
```

**Products Array Schema:**

Each item in the products array must have:
```json
{
  "product_slug": "string (the slug of an existing product) [REQUIRED]",
  "quantity": "integer (must be > 0) [REQUIRED]"
}
```

**Example Request:**

```json
{
  "first_name": "Mario",
  "last_name": "Rossi",
  "city": "Milan",
  "address_line_1": "Via Milano 789",
  "postal_code": "20100",
  "email": "mario@example.com",
  "phone": "+39555123456",
  "date_of_birth": "1992-07-10",
  "total_price": 75.00,
  "shipping_price": 10.00,
  "products_price": 65.00,
  "status": "pending",
  "products": [
    {
      "product_slug": "peroni-lager",
      "quantity": 2
    },
    {
      "product_slug": "guinness-stout",
      "quantity": 1
    }
  ]
}
```

**Response:** `201 Created`

```json
{
  "error": null,
  "result": {
    "message": "Ordine creato correttamente",
    "id": 3
  }
}
```

**Error Responses:**

- **400 Bad Request** - Validation error
```json
{
  "error": "I dati dell'ordine non sono validi",
  "result": [
    "L'email inserita non è valida",
    "Il numero di telefono inserito non è valido"
  ]
}
```

- **404 Not Found** - Product not found in database
```json
{
  "error": "Prodotto peroni-lager non trovato",
  "result": null
}
```

- **500 Internal Server Error** - Database creation error
```json
{
  "error": "C'è stato un errore durante la creazione dell'ordine",
  "result": null
}
```

---

### 4. Delete Order

**DELETE** `/orders/:id`

Deletes an order by its ID. (This is a soft deletion, it simply sets a delete field to 1 and stops the database from fetching those results)

**Parameters:**
- `id` (number, required) - The unique numeric identifier of the order

**Response:** `200 OK`

```json
{
  "error": null,
  "result": {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "Rows matched: 1 Changed: 0 Warnings: 0",
    "serverStatus": 2,
    "warningStatus": 0
  }
}
```

**Error Responses:**

- **400 Bad Request** - Invalid order ID format
```json
{
  "error": "Id ordine non valido",
  "result": null
}
```

- **404 Not Found** - Order not found
```json
{
  "error": "Ordine non trovato",
  "result": null
}
```

- **500 Internal Server Error** - Database deletion error
```json
{
  "error": "C'è stato un errore durante l'eliminazione dell'ordine",
  "result": null
}
```

---

## Data Types & Constants

The following constants are used throughout the API:

**Product Sizes:**
- `Lattina 33`
- `Lattina 40`
- `Bottiglia 33`
- `Bottiglia 50`

**Beer Colors:**
- `scura` (dark)
- `rossa` (red)
- `ambrata` (amber)
- `chiara` (light/clear)

**Order Statuses:**
- `completed`
- `pending`
- `canceled`

---

## Response Format

All successful API responses follow this standard format:

```json
{
  "error": null,
  "result": {}
}
```

All error responses follow this format:

```json
{
  "error": "Error message in Italian",
  "result": null
}
```

Validation error responses follow this format:

```json
{
  "result": null,
  "errors": ["Error message 1", "Error message 2"]
}
```

---

## HTTP Status Codes

- **200 OK** - Request successful
- **201 Created** - Resource successfully created
- **204 No Content** - Successful deletion (no response body)
- **400 Bad Request** - Invalid request parameters or validation errors
- **404 Not Found** - Resource not found
- **500 Internal Server Error** - Server error occurred

---

## Notes

- All endpoints use JSON for request and response bodies
- The API uses CORS (Cross-Origin Resource Sharing) enabled
- Static files are served from the `public` directory
- Product slugs and category slugs are automatically generated from their names
- When creating products, category slugs must reference existing categories in the database
- For PATCH requests on products, any combination of fields can be updated, except for categories
- There is currently no PATCH endpoint for categories, delete the old one and create a new one
- Order creation is performed as a database transaction - if any validation fails or a product is not found, the entire order is rolled back
- When creating orders, the `total_price` must exactly equal `shipping_price + products_price`
- Email validation follows a basic pattern (must contain @ and a domain)
- Date of birth must be in ISO 8601 format (YYYY-MM-DD)
- Product filtering by brewery or excluded-brewery is case-insensitive
- Authentication/Authorization may be added in future versions
