Gsc.ParticipantsNewController = Ember.ObjectController.extend({
  update: function() {
    this.store.commit();
    this.content.addObserver('id');
    this.transitionToRoute('particpants.show', this.content);
  },
  afterCreate: function() {
    this.content.removeObserver('id', this, 'afterCreate');
    return this.transitionToRoute('particpants.show', this.content);
  },
  cancel: function() {
    this.content.deleteRecord();
    return this.transitionToRoute('particpants.index');
  },
  buttonTitle: 'Create',
  headerTitle: 'Creating'
});

