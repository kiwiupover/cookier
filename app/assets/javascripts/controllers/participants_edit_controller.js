Gsc.ParticipantsEditController = Ember.ObjectController.extend({
  destroy: function() {
    this.content.deleteRecord();
    this.store.commit();
    return this.transitionToRoute('participants');
  },
  update: function() {
    this.store.commit();
    return this.transitionToRoute('participants.show', this.content);
  },
  cancel: function() {
    this.get('transaction').rollback()
    return this.transitionToRoute('participants.show', this.content);
  },
  buttonTitle: 'Update',
  headerTitle: 'Editing'
});

