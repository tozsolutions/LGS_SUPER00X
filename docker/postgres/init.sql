-- PostgreSQL initialization script for LGS Super application

-- Create extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "citext";

-- Create indexes for better performance
-- These will be created by Prisma migrations, but adding here for reference

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updatedAt = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a function to calculate exam attempt percentage
CREATE OR REPLACE FUNCTION calculate_percentage(score DECIMAL, total_marks INTEGER)
RETURNS DECIMAL AS $$
BEGIN
    IF total_marks = 0 THEN
        RETURN 0;
    END IF;
    RETURN ROUND((score / total_marks) * 100, 2);
END;
$$ LANGUAGE plpgsql;