class Note {
  final int id;
  final String title;
  final String content;
  final int authorId;
  // final time.Time createdAt;
  // final time.Time updatedAt;

  Note({
    required this.id,
    required this.title,
    required this.content,
    required this.authorId,
    // required this.createdAt,
    // required this.updatedAt,
  });

  factory Note.fromJson(Map<String, dynamic> json) {
    return Note(
      id: json['id'],
      title: json['title'],
      content: json['content'],
      authorId: json['author_id'],
      // createdAt: json['created_at'],
      // updatedAt: json['updated_at'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'title': title,
      'content': content,
      'author_id': authorId,
      // 'created_at': createdAt,
      // 'updated_at': updatedAt,
    };
  }
}
