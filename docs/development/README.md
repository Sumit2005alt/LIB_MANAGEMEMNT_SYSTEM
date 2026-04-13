# Development Guide

## Getting Started

### Prerequisites

- Node.js 18+
- Python 3.11+
- PostgreSQL 15+
- Redis 7+
- Docker (optional)

### Setup

1. Clone the repository
2. Install dependencies (see main README)
3. Configure environment variables
4. Run database migrations
5. Start development servers

## Development Workflow

### Backend Development

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements/dev.txt
uvicorn src.main:app --reload
```

### Frontend Development

```bash
cd frontend
npm install
npm run dev
```

### Running Tests

```bash
# Backend tests
cd backend
pytest

# Frontend tests
cd frontend
npm test
```

## Code Style

### Python
- Use Black for formatting
- Follow PEP 8
- Type hints required

### TypeScript/React
- Use ESLint and Prettier
- Follow React best practices
- TypeScript strict mode enabled

## Git Workflow

1. Create feature branch from `main`
2. Make changes and commit
3. Push and create pull request
4. Code review required before merge
