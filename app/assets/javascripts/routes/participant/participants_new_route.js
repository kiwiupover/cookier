Gsc.ParticipantsNewRoute = Ember.Route.extend({
  model: function() {
    return Gsc.Participant.createRecord({
      firstName: '',
      lastName: ''
    });
  }
});
