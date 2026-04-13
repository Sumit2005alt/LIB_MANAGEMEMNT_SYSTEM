# Omnilexis - AI-Driven Library Management System

A comprehensive, AI-powered library management system built with modern technologies.

## 🚀 Features

- **AI-Powered Recommendations**: Intelligent book recommendations based on user preferences
- **Learning Paths**: Personalized learning journeys
- **Community Features**: Social interactions and book discussions
- **Multi-Platform**: Web, mobile, and API access
- **Modern Stack**: Next.js, FastAPI, and cutting-edge AI technologies

## 📁 Project Structure

```
omnilexis/
├── frontend/          # Next.js React frontend
├── backend/           # Python FastAPI backend
├── database/          # Database configurations
├── mobile/            # React Native mobile app
├── docs/              # Documentation
└── scripts/           # Development scripts
```

## 🛠️ Tech Stack

### Frontend
- Next.js 13+ (App Router)
- React
- TypeScript
- Tailwind CSS
- Redux Toolkit

### Backend
- FastAPI
- Python 3.11+
- SQLAlchemy
- Alembic
- AI/ML Libraries

### Database
- PostgreSQL (primary)
- Redis (caching)

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- Python 3.11+
- PostgreSQL
- Docker (optional)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd omnilexis
```

2. Setup Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements/base.txt
```

3. Setup Frontend
```bash
cd frontend
npm install
```

4. Configure Environment
```bash
cp backend/.env.example backend/.env
# Edit backend/.env with your configuration
```

5. Run Development Servers
```bash
# Backend
cd backend
uvicorn src.main:app --reload

# Frontend
cd frontend
npm run dev
```

## 🌐 Development Server Links

After starting the development servers, access the application at:

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:8000](http://localhost:8000)
- **API Documentation (Swagger UI)**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **API Documentation (ReDoc)**: [http://localhost:8000/redoc](http://localhost:8000/redoc)

## 📚 Documentation

- [API Documentation](docs/api/)
- [Development Guide](docs/development/)
- [User Guide](docs/user/)

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## 📄 License

See [LICENSE](LICENSE) file for details.
