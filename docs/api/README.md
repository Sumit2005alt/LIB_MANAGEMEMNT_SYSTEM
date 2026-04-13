# API Documentation

## Overview

The Omnilexis API is a RESTful API built with FastAPI.

## Base URL

- Development: `http://localhost:8000`
- Production: `https://api.omnilexis.com`

## Authentication

Most endpoints require authentication. Include the JWT token in the Authorization header:

```
Authorization: Bearer <your-token>
```

## Endpoints

### Health Check
- `GET /health` - Check API health status

### Authentication
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/refresh` - Refresh access token

### Books
- `GET /api/v1/books` - List books
- `GET /api/v1/books/{id}` - Get book details
- `POST /api/v1/books` - Create book (admin)
- `PUT /api/v1/books/{id}` - Update book (admin)
- `DELETE /api/v1/books/{id}` - Delete book (admin)

### Library
- `GET /api/v1/library` - Get user's library
- `POST /api/v1/library/books` - Add book to library
- `PUT /api/v1/library/books/{id}` - Update book status
- `DELETE /api/v1/library/books/{id}` - Remove book from library

### AI Recommendations
- `GET /api/v1/recommendations` - Get AI-powered recommendations
- `POST /api/v1/recommendations/feedback` - Provide feedback on recommendations

## Response Format

All responses follow a consistent format:

```json
{
  "success": true,
  "data": {},
  "message": "Success message"
}
```

Error responses:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error message"
  }
}
```
