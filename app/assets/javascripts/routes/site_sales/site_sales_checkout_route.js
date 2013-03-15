Gsc.SiteSalesCheckoutRoute = Em.Route.extend({
  setupController: function(controller) {
    this._super();
    return this.controllerFor('participants').set('content', Gsc.Participant.find());
  }
});