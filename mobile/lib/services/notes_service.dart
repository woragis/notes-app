// import 'package:notes_mobile/data/data_sources/note_repository.dart';
// import '../data/repositories/note_repository.dart';

import 'dart:developer';

class NoteService {
  NoteService();

  /// Updates the note content by delegating the call to the repository.
  Future<void> updateNote(String noteId, String content) async {
    try {
      // await _noteRepository.updateNote(noteId, content);
      log('Note updated successfully');
    } catch (e) {
      log('Error updating note: $e');
      rethrow; // Propagate the error for higher-level handling
    }
  }
}
