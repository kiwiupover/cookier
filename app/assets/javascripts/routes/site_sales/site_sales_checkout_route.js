Gsc.SiteSalesCheckoutRoute = Em.Route.extend({
	model: function(params) {
    return Gsc.SiteSale.find(params.site_sale_id);
  },

  setupController: function(controller, model) {
    this.controllerFor('participants').set('content', Gsc.Participant.find());
  }

});