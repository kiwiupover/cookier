Gsc.SiteSalesEditRoute = Ember.Route.extend({
  model: function(params) {
    return Gsc.SiteSale.find(params.site_sale_id);
  },
  setupController: function(controller, model) {
    controller.set('content', model);
  }
});