import can from 'can';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';
import 'can/map/define/define';

export const Book = can.Map.extend({
  define: {}
});

Book.List = can.List.extend({
  Map: Book
}, {});

export const bookConnection = superMap({
  url: {
    resource: '/api/v1/book',
    getListData: "/api/v1/book/",
    createData: "/api/v1/book/",
    destroyData: "/api/v1/book/{id}/",
  },
  parseListProp: 'objects',
  idProp: 'id',
  Map: Book,
  List: Book.List,
  name: 'book'
});

tag('book-model', bookConnection);

export default Book;
