Gsc.ParticipantsEditRoute = Ember.Route.extend({
  model: function(params) {
    return Gsc.Participant.find(params.participant_id);
  },
  setupController: function(controller, model) {
    return controller.set('content', model);
  }
});