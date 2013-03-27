Gsc.Store = DS.Store.extend({
  revision: 12
});

DS.RESTAdapter.map('Gsc.SiteSale', {
  cookieCases: { embedded: 'always'}
});