Gsc.ParticipantRoute = Em.Route.extend({
  exit: function() {
    this._super();
    this.controllerFor('participants').set('activeContactId', null);
  },

  setupController: function(controller, model) {
    this.controllerFor('participants').set('activeContactId', model.id);
    controller.set('content', Gsc.Participant.find(model.id));
  }
});