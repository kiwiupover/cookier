// Gsc.Store = DS.Store.extend({
//   revision: 10,
//   adapter: DS.RESTAdapter.create()
// });

Gsc.Store = DS.Store.extend({
  adapter:  DS.RESTAdapter.create(),
  revision: 10
});