class Note {
  final String? id; // ID is nullable since it will be generated by the backend
  final String title;
  final String content;
  final DateTime? createdAt; // Nullable since it will come from the backend
  final DateTime? updatedAt; // Nullable since it will come from the backend

  Note({
    this.id,
    required this.title,
    required this.content,
    this.createdAt,
    this.updatedAt,
  });

  // Convert Note object to JSON (excluding `id` and timestamps if not available)
  Map<String, dynamic> toJson() {
    return {
      'title': title,
      'content': content,
    };
  }

  // Create a Note object from JSON
  factory Note.fromJson(Map<String, dynamic> json) {
    return Note(
      id: json['id'],
      title: json['title'],
      content: json['content'],
      createdAt: json['created_at'],
      // != null ? DateTime.parse(json['created_at']) : null,
      updatedAt: json['updated_at'],
      // != null ? DateTime.parse(json['updated_at']) : null,
    );
  }
}
