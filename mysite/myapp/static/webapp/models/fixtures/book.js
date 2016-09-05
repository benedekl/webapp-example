import fixture from 'can-fixture';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}]);

fixture({
  'GET /api/v1/book': store.findAll,
  'GET /api/v1/book/{id}': store.findOne,
  'POST /api/v1/book': store.create,
  'PUT /api/v1/book/{id}': store.update,
  'DELETE /api/v1/book/{id}': store.destroy
});

export default store;
