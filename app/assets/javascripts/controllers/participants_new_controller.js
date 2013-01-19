Gsc.ParticipantsNewController = Ember.ObjectController.extend({
  enter: function() {
    console.log("Entering the ParticipantsNewController");
  },
  update: function() {
    this.store.commit();
    return this.transitionToRoute('participants.show', this.content);
  },
  cancel: function() {
    if (this.content.isDirty) {
      this.content.rollback();
    }
    return this.transitionToRoute('participant.show', this.content);
  },
  destroy: function() {
    this.content.deleteRecord();
    this.store.commit();
    return this.transitionToRoute('participants.index');
  },
  buttonTitle: 'Create',
  headerTitle: 'Createing'
});

