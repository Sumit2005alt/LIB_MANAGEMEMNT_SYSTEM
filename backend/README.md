# Omnilexis Backend

FastAPI backend for the Omnilexis Library Management System.

## Setup

1. Create virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements/dev.txt
```

3. Configure environment:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Run database migrations:
```bash
alembic upgrade head
```

5. Start development server:
```bash
uvicorn src.main:app --reload
```

## API Documentation

Once the server is running, visit:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Project Structure

```
backend/
├── src/
│   ├── main.py              # Application entry point
│   ├── config/              # Configuration
│   ├── api/                 # API routes
│   ├── core/                # Core business logic
│   ├── models/              # Database models
│   ├── schemas/             # Pydantic schemas
│   ├── services/            # Business services
│   ├── dependencies/        # FastAPI dependencies
│   ├── middleware/          # Custom middleware
│   └── utils/               # Utilities
├── requirements/            # Python dependencies
├── alembic/                 # Database migrations
└── tests/                   # Tests
```
