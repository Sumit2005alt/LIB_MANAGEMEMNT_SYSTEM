# Omnilexis Project Structure

Complete directory structure for the AI-driven Library Management System.

```
omnilexis/
├── frontend/                         # React/Next.js frontend
│   ├── public/
│   │   ├── assets/
│   │   │   ├── icons/
│   │   │   ├── images/
│   │   │   └── fonts/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── app/                     # Next.js 13+ App Router
│   │   │   ├── (auth)/             # Auth group
│   │   │   │   ├── login/
│   │   │   │   ├── register/
│   │   │   │   └── layout.tsx
│   │   │   ├── (dashboard)/        # Dashboard group
│   │   │   │   ├── library/
│   │   │   │   ├── learn/
│   │   │   │   ├── profile/
│   │   │   │   └── layout.tsx
│   │   │   ├── api/                # Frontend API routes
│   │   │   │   └── webhooks/
│   │   │   ├── layout.tsx          # Root layout
│   │   │   └── page.tsx            # Home page
│   │   ├── components/              # Reusable components
│   │   │   ├── ui/                 # Base UI components
│   │   │   ├── ai/                 # AI-specific components
│   │   │   ├── library/            # Library components
│   │   │   ├── learning/           # Learning components
│   │   │   └── community/          # Community components
│   │   ├── lib/                    # Frontend libraries
│   │   │   ├── utils/
│   │   │   ├── hooks/
│   │   │   ├── constants/
│   │   │   └── types/
│   │   ├── store/                  # State management
│   │   │   ├── slices/            # Redux slices
│   │   │   └── store.ts
│   │   ├── styles/                 # Global styles
│   │   │   ├── globals.css
│   │   │   ├── themes/
│   │   │   └── animations.css
│   │   └── config/                 # Frontend config
│   │       ├── site.ts
│   │       └── features.ts
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── next.config.js
│   ├── Dockerfile
│   └── README.md
│
├── backend/                         # Python FastAPI backend
│   ├── src/
│   │   ├── main.py                 # App entry point
│   │   ├── config/                 # Configuration
│   │   │   ├── settings.py
│   │   │   └── __init__.py
│   │   ├── api/                    # API routes
│   │   │   ├── v1/
│   │   │   │   ├── endpoints/
│   │   │   │   │   ├── router.py
│   │   │   │   │   └── __init__.py
│   │   │   │   └── __init__.py
│   │   │   ├── websocket.py
│   │   │   └── __init__.py
│   │   ├── core/                   # Core business logic
│   │   │   ├── ai_engine/         # AI module
│   │   │   ├── library/           # Library management
│   │   │   ├── learning/          # Learning engine
│   │   │   └── community/         # Community features
│   │   ├── models/                # Database models
│   │   ├── schemas/               # Pydantic schemas
│   │   ├── services/              # Business services
│   │   ├── dependencies/          # FastAPI dependencies
│   │   ├── middleware/            # Custom middleware
│   │   ├── utils/                 # Utilities
│   │   ├── tests/                 # Backend tests
│   │   └── scripts/               # Utility scripts
│   ├── requirements/
│   │   ├── base.txt
│   │   ├── dev.txt
│   │   ├── prod.txt
│   │   └── ai.txt
│   ├── alembic/                   # Database migrations
│   │   ├── env.py
│   │   └── script.py.mako
│   ├── static/                    # Static files
│   ├── .env.example
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── alembic.ini
│   ├── pyproject.toml
│   └── README.md
│
├── database/                       # Database configurations
│   ├── init/                      # Initialization scripts
│   │   └── init.sql
│   ├── migrations/                # Manual migration scripts
│   ├── schemas/                   # Database schema definitions
│   │   └── schema.sql
│   └── config/
│       └── database.yml
│
├── mobile/                         # React Native mobile app (optional)
│   ├── android/
│   ├── ios/
│   ├── src/
│   ├── package.json
│   └── README.md
│
├── docs/                          # Documentation
│   ├── api/                       # API documentation
│   │   └── README.md
│   ├── development/              # Dev guides
│   │   └── README.md
│   ├── user/                     # User documentation
│   │   └── README.md
│   ├── diagrams/                 # Architecture diagrams
│   └── README.md
│
├── scripts/                       # Development scripts
│   ├── dev/                      # Development scripts
│   │   └── setup.sh
│   ├── deployment/               # Deployment scripts
│   │   └── deploy.sh
│   └── ai/                       # AI training scripts
│       └── train_model.py
│
├── docker-compose.yml             # Main docker-compose
├── docker-compose.dev.yml         # Development compose
├── docker-compose.prod.yml        # Production compose
│
├── .gitignore
├── README.md
├── LICENSE
├── STRUCTURE.md                   # This file
├── package.json                   # Root package.json (for workspaces)
└── Makefile                       # Make commands for common tasks
```

## Key Directories

### Frontend (`frontend/`)
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Redux Toolkit** for state management
- Organized by feature (auth, dashboard, library, etc.)

### Backend (`backend/`)
- **FastAPI** for high-performance API
- **SQLAlchemy** for database ORM
- **Alembic** for migrations
- Modular architecture with clear separation of concerns
- AI engine for recommendations and learning paths

### Database (`database/`)
- Schema definitions
- Initialization scripts
- Migration utilities
- Configuration files

### Mobile (`mobile/`)
- React Native app (planned)
- Cross-platform support
- Shared API with web frontend

### Documentation (`docs/`)
- API documentation
- Development guides
- User documentation
- Architecture diagrams

### Scripts (`scripts/`)
- Development setup scripts
- Deployment automation
- AI model training scripts

## Getting Started

1. **Backend Setup:**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements/dev.txt
   ```

2. **Frontend Setup:**
   ```bash
   cd frontend
   npm install
   ```

3. **Docker Setup:**
   ```bash
   docker-compose up -d
   ```

See the main [README.md](README.md) for detailed setup instructions.
