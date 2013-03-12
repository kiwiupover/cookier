Gsc.ParticipantsShowRoute = Em.Route.extend({
  model: function(params) {
    return Gsc.Participant.find(params.participant_id);
  },
  setupController: function(controller, model) {
    this._super();
    return controller.set('content', model);
  }
});