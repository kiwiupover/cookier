Gsc.ParticipantsRoute = Em.Route.extend({
  model: function() {
    return Gsc.Participant.find();
  },
  setupController: function(controller, model) {
    controller.set('content', model);
  }
});