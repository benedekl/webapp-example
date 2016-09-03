import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('webapp-example functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('webapp-example main page shows up', function() {
  F('title').text('webapp-example', 'Title is set');
});
