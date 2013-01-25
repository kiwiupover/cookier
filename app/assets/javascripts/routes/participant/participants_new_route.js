Gsc.ParticipantsNewRoute = Ember.Route.extend({
  model: function() {
    return Gsc.Participant.createRecord({
      firstName: '',
      lastName: ''
    });
  },
  setupController: function(controller, model) {
    this._super();
    return controller.set('content', model);
  }
});
