Gsc.Store = DS.Store.extend({
  revision: 11
});

DS.RESTAdapter.map('Gsc.SiteSale', {
  cookieCases: { embedded: 'always'}
});