Gsc.ParticipantsEditController = Ember.ObjectController.extend({
  destroy: function() {
    this.content.deleteRecord();
    this.store.commit();
    return this.transitionTo('participants');
  },
  update: function() {
    this.store.commit();
    return this.transitionTo('participants.show', this.content);
  },
  cancel: function() {
    debugger;
    if (this.content.isDirty) {
      this.content.rollback();
    }
    return this.transitionTo('participants.show', this.content);
  },
  buttonTitle: 'Edit',
  headerTitle: 'Editing'
});

