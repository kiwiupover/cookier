Gsc.ParticipantsNewController = Ember.ObjectController.extend({
  update: function() {
    this.store.commit();
    this.content.addObserver('id', this, 'afterCreate');
  },
  afterCreate: function() {
    this.content.removeObserver('id', this, 'afterCreate');
    debugger;
    this.transitionToRoute('participants.show', this.content);
  },
  cancel: function() {
    this.content.deleteRecord();
    return this.transitionToRoute('particpants.index');
  },
  buttonTitle: 'Create',
  headerTitle: 'Creating'
});

