-- Database initialization script
-- This script is run when the database is first created

-- Create database if it doesn't exist
-- Note: This should be run as a superuser

-- Create extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm"; -- For text search

-- Set timezone
SET timezone = 'UTC';
