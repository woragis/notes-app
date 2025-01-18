import 'package:flutter/material.dart';
import 'package:notes_mobile/utils/debouncer.dart';
// import 'package:notes_mobile/services/notes_service.dart';

class NotePage extends StatefulWidget {
  const NotePage({super.key});
  @override
  _NotePageState createState() => _NotePageState();
}

class _NotePageState extends State<NotePage> {
  final TextEditingController _controller = TextEditingController();
  final Debouncer _debouncer = Debouncer(milliseconds: 500);

  void _onTextChanged() {
    _debouncer.run(() {
      // _noteService.updateNote('123', _controller.text);
    });
  }

  @override
  void initState() {
    super.initState();
    _controller.addListener(_onTextChanged);
  }

  @override
  void dispose() {
    _controller.dispose();
    _debouncer.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Edit Note')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: TextField(
          controller: _controller,
          maxLines: null,
          decoration: InputDecoration(hintText: 'Type your note here...'),
        ),
      ),
    );
  }
}
