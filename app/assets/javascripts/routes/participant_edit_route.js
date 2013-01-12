Gsc.ParticipantEditRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    this._super(controller, model);

    // add the model to a local transaction
    this.transaction = controller.get('store').transaction();
    this.transaction.add(model);

    // highlight this contact as active
    this.controllerFor('participant').set('activeContactId', model.get('id'));
  },

  exit: function() {
    this._super();

    // rollback the local transaction if it hasn't already been cleared
    if (this.transaction) {
      this.transaction.rollback();
    }

    // no participant is active (momentarily, at least)
    this.controllerFor('participant').set('activeContactId', null);
  },

  events: {
    cancel: function(participant) {
      this.transitionTo('participant', participant);
    },

    save: function(participant) {
      this.transaction.commit();
      this.transaction = null;
      this.transitionTo('participant', participant);
    }
  }
});
