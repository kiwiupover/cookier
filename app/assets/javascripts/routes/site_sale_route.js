Gsc.SiteSalesSiteSaleRoute = Em.Route.extend({
  exit: function() {
    this._super();
    this.controllerFor('siteSales').set('activeContactId', null);
  },

  setupController: function(controller, model) {
    this.controllerFor('siteSales').set('activeContactId', model.id);
    controller.set('content', Gsc.SiteSale.find(model.id));
  }
});