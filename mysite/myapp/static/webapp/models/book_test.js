import QUnit from 'steal-qunit';
import Book from './book';

QUnit.module('models/book');

QUnit.test('getList', function(){
  stop();
  Book.getList().then(function(items) {
    QUnit.equal(items.length, 2);
    QUnit.equal(items.attr('0.description'), 'First item');
    start();
  });
});
