#!/bin/bash

# Development environment setup script

echo "Setting up Omnilexis development environment..."

# Check prerequisites
echo "Checking prerequisites..."
command -v node >/dev/null 2>&1 || { echo "Node.js is required but not installed. Aborting." >&2; exit 1; }
command -v python3 >/dev/null 2>&1 || { echo "Python 3 is required but not installed. Aborting." >&2; exit 1; }

# Setup backend
echo "Setting up backend..."
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements/dev.txt
cd ..

# Setup frontend
echo "Setting up frontend..."
cd frontend
npm install
cd ..

echo "Setup complete!"
echo "To start development:"
echo "  Backend: cd backend && source venv/bin/activate && uvicorn src.main:app --reload"
echo "  Frontend: cd frontend && npm run dev"
