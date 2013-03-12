Gsc.SiteSalesShowRoute = Em.Route.extend({
  exit: function() {
    this._super();
    this.controllerFor('siteSales').set('activeContactId', null);
  },

  setupController: function(controller, model) {
    controller.set('content', Gsc.SiteSale.find(model.id));
  }
});