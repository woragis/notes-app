package handlers

import (
	"net/http"

	"notes-backend/database"
	"notes-backend/models"
	"notes-backend/utils"

	"github.com/gin-gonic/gin"
)


func GetAllNotes(c *gin.Context) {
	query := `SELECT id, title, content, author_id, created_at, updated_at FROM notes;`
	rows, err := database.DB.Query(c.Request.Context(), query)

	if err != nil {
		utils.SendResponse(
			c,
			http.StatusInternalServerError,
			"Failed to retrieve notes",
			err,
			nil,
		)
		return
	}
	defer rows.Close()

	var notes []models.Note
	for rows.Next() {
		var note models.Note
		if err := rows.Scan(&note.ID, &note.Title, &note.Content, &note.AuthorID, &note.CreatedAt, &note.UpdatedAt); err != nil {
			utils.SendResponse(
				c,
				http.StatusInternalServerError,
				"Failed to process note data",
				err,
				nil,
			)
			return
		}
		notes = append(notes, note)
	}

	if notes == nil {
		notes = []models.Note{}
	}

	utils.SendResponse(
		c,
		http.StatusOK,
		"Successfully retrieved notes",
		nil,
		notes,
	)
}


func GetNoteByID(c *gin.Context) {
	id := c.Param("id")

	query := `SELECT id, title, content, author_id, created_at, updated_at FROM notes WHERE id=$1;`
	row := database.DB.QueryRow(c.Request.Context(), query, id)

	var note models.Note

	err := row.Scan(&note.ID, &note.Title, &note.Content, &note.AuthorID, &note.CreatedAt, &note.UpdatedAt)

	if err != nil {
		utils.SendResponse(
			c,
			http.StatusNotFound,
			"Failed to retrieve todo: note not found",
			err,
			nil,
		)
		return
	}

	utils.SendResponse(
		c,
		http.StatusOK,
		"Successfully retrieved note",
		nil,
		note,
	)
}

func CreateNote(c *gin.Context) {
	var note models.Note

	if err := c.ShouldBindJSON(&note); err != nil {
		utils.SendResponse(
			c,
			http.StatusBadRequest,
			"Failed to create note: invalid input",
			err,
			nil,
		)
		return
	}

	query := `INSERT INTO notes (title, content, author_id) VALUES ($1, $2, $3) RETURNING id, created_at, updated_at;`
	err := database.DB.QueryRow(
		c.Request.Context(),
		query,
		note.Title,
		note.Content,
		note.AuthorID,
	).Scan(&note.ID, &note.CreatedAt, &note.UpdatedAt)

	if err != nil {
		utils.SendResponse(
			c,
			http.StatusInternalServerError,
			"Failed to create note",
			err,
			nil,
		)
		return
	}

	utils.SendResponse(
		c,
		http.StatusCreated,
		"Successfully created note",
		nil,
		note,
	)
}


func UpdateNote(c *gin.Context) {
	id := c.Param("id")
	var note models.Note

	if err := c.ShouldBindJSON(&note); err != nil {
		utils.SendResponse(
			c,
			http.StatusBadRequest,
			"Could not update note: invalid input",
			err,
			nil,
		)
		return
	}

	query := `UPDATE notes SET title=$1, content=$2, author_id=$3 WHERE id=$4 RETURNING id, created_at, updated_at;`
	err := database.DB.QueryRow(
		c.Request.Context(),
		query,
		note.Title,
		note.Content,
		note.AuthorID,
		id,
	).Scan(&note.ID, &note.CreatedAt, &note.UpdatedAt)

	if err != nil {
		utils.SendResponse(
			c,
			http.StatusInternalServerError,
			"Could not update note",
			err,
			nil,
		)
		return
	}
	
	utils.SendResponse(
		c,
		http.StatusOK,
		"Successfully updated note",
		nil,
		note,
	)
}


func DeleteNote(c *gin.Context) {
	id := c.Param("id")

	query := `DELETE FROM notes WHERE id=$1`
	_, err := database.DB.Exec(c.Request.Context(), query, id)

	if err != nil {
		utils.SendResponse(c,
			http.StatusInternalServerError,
			"Could not delete note",
			err,
			false,
		)
		return
	}

	utils.SendResponse(
		c,
		http.StatusOK,
		"Successfully deleted note",
		nil,
		true,
	)
}
