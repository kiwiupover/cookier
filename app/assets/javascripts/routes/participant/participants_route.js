Gsc.ParticipantsRoute = Em.Route.extend({
  model: function() {
    return Gsc.Participant.find();
  }
});