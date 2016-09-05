import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './books.less!';
import template from './books.stache!';
import Book from '../models/book';

export const ViewModel = Map.extend({
  title: '',
  rating: '',
  send(event) {
    event.preventDefault();

    new Book({
      title: this.title,
      rating: this.rating,
    }).save().then(book => {
      this.attr('title', '');
      this.attr('rating', '');
    });
  }
});

export default Component.extend({
  tag: 'webapp-books',
  viewModel: ViewModel,
  template,
});
