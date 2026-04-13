.PHONY: help install dev build test lint clean docker-up docker-down

help:
	@echo "Omnilexis - AI-Driven Library Management System"
	@echo ""
	@echo "Available commands:"
	@echo "  make install     - Install all dependencies"
	@echo "  make dev         - Start development servers"
	@echo "  make build       - Build all projects"
	@echo "  make test        - Run all tests"
	@echo "  make lint        - Run linters"
	@echo "  make clean       - Clean build artifacts"
	@echo "  make docker-up   - Start Docker containers"
	@echo "  make docker-down - Stop Docker containers"

install:
	@echo "Installing dependencies..."
	cd frontend && npm install
	cd backend && pip install -r requirements/base.txt

dev:
	@echo "Starting development servers..."
	npm run dev

build:
	@echo "Building projects..."
	npm run build

test:
	@echo "Running tests..."
	npm run test

lint:
	@echo "Running linters..."
	npm run lint

clean:
	@echo "Cleaning build artifacts..."
	rm -rf frontend/.next frontend/out frontend/dist
	rm -rf backend/__pycache__ backend/**/__pycache__
	find . -type d -name "node_modules" -prune -o -type d -name ".next" -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete

docker-up:
	@echo "Starting Docker containers..."
	docker-compose up -d

docker-down:
	@echo "Stopping Docker containers..."
	docker-compose down
