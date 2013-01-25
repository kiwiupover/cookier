Gsc.SiteSalesNewController = Ember.ObjectController.extend({
  create: function() {
    this.store.commit();
    return this.content.addObserver('id', this, 'afterCreate');
  },
  afterCreate: function() {
    this.content.removeObserver('id', this, 'afterCreate');
    return this.transitionToRoute('siteSales.show', this.content);
  },
  cancel: function() {
    this.content.deleteRecord();
    return this.transitionToRoute('siteSales.index');
  },
  buttonTitle: 'Create',
  headerTitle: 'Creating'
});