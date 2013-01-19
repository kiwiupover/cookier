Gsc.ParticipantsEditController = Ember.ObjectController.extend({
  enter: function() {
    alert('ParticipantsEditController');
  },
  update: function() {
    this.store.commit();
    return this.transitionToRoute('participants.show', this.content);
  },
  cancel: function() {
    if (this.content.isDirty) {
      this.content.rollback();
    }
    return this.transitionToRoute('participants.show', this.content);
  },
  destroy: function() {
    this.content.deleteRecord();
    this.store.commit();
    return this.transitionToRoute('participants.index');
  },
  buttonTitle: 'Update',
  headerTitle: 'Editing'
});

