package database

import (
	"context"
	"log"

	"github.com/jackc/pgx/v5/pgxpool"
)

var DB *pgxpool.Pool

func Connect() {
	dsn  := "postgres://postgres:password@localhost:5432/notes?sslmode=disable"
	// dsn := os.Getenv("DATABASE_URL")
	if dsn == "" {
		log.Fatal("DATABASE_URL environment variable is not set")
	}

	var err error
	DB, err = pgxpool.New(context.Background(), dsn)
	if err != nil {
		log.Fatalf("Unable to connect to database: %v\n", err)
	}
	log.Println("Connected to PostgreSOL database!")
}

func InitializeTables() {
	if DB == nil {
		log.Fatal("Database connection is not initialized")
	}

	createUsersTable := `
	CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

	CREATE TABLE IF NOT EXISTS users (
		id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
		name VARCHAR(100) NOT NULL,
		email VARCHAR(100) UNIQUE NOT NULL,
		password VARCHAR(255) NOT NULL,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);`

	createNotesTable := `
	CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

	CREATE TABLE IF NOT EXISTS notes (
		id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
		title VARCHAR(100) NOT NULL,
		content TEXT NOT NULL,
		author_id UUID REFERENCES users(id) ON DELETE CASCADE,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);`

	queries := []string{createUsersTable, createNotesTable}

	for _, query := range queries {
		_, err := DB.Exec(context.Background(), query)
		if err != nil {
			log.Fatalf("Failed to execute query: %v\n", err)
		}
	}

	log.Println("All tables initialized successfully!")
}