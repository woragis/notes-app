package main

import (
	"notes-backend/database"
	"notes-backend/handlers"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// Connect to the database
	database.Connect()
	defer database.DB.Close()

	// initialize tables
	database.InitializeTables()

	// Initialize Gin
	router := gin.Default()

	router.Use(cors.New(cors.Config{
		// AllowAllOrigins: true,
		AllowOrigins: []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},        // Allowed methods
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},        // Allowed headers
		ExposeHeaders:    []string{"Content-Length"},                                 // Exposed headers
		AllowCredentials: true,                                                       // Allow credentials like cookies
		MaxAge:           12 * time.Hour,
	}))

	// Auth Routes
	authGroup := router.Group("/auth")
	{
		authGroup.POST("/login", handlers.Login)
		authGroup.POST("/register", handlers.Register)
	}

	// Notes Routes
	noteGroup := router.Group("/notes")
	{
		noteGroup.POST("/", handlers.CreateNote)      // Create Post
		noteGroup.GET("/", handlers.GetAllNotes)      // Get All Posts
		noteGroup.GET("/:id", handlers.GetNoteByID)   // Get Post by ID
		noteGroup.PUT("/:id", handlers.UpdateNote)    // Update Post
		noteGroup.DELETE("/:id", handlers.DeleteNote) // Delete Post
	}

	// Start the server
	router.Run(":8080")
}
