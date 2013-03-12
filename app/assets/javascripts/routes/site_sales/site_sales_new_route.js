Gsc.SiteSalesNewRoute = Ember.Route.extend({
  model: function() {
    return Gsc.SiteSale.createRecord({
      location: '',
      startAt: '',
      endAt: '',
    });
  },
  setupController: function(controller, model) {
    this._super();
    return controller.set('content', model);
  }
});