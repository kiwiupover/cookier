Gsc.ParticipantsEditRoute = Ember.Route.extend({
  model: function(params) {
    return Gsc.Participant.find(params.post_id);
  },
  setupController: function(controller, model) {
    this._super();
    return controller.set('content', model);
  },
  enter: function() {
    console.log("ParticipantsEditRoute");
  }
});