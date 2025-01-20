import 'package:flutter/foundation.dart' show immutable;
import './person.dart';

const persons1Url = 'http://localhost:5500/mobile/api/persons1.json';
const persons2Url = 'http://localhost:5500/mobile/api/persons2.json';

typedef PersonsLoader = Future<Iterable<Person>> Function(String url);

@immutable
abstract class LoadAction {
  const LoadAction();
}

@immutable
class LoadPersonsAction implements LoadAction {
  final String url;
  final PersonsLoader loader;
  const LoadPersonsAction({
    required this.url,
    required this.loader,
  }) : super();
}
