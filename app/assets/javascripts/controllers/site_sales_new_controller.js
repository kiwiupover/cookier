Gsc.SiteSalesNewController = Ember.ObjectController.extend({
  update: function() {
    this.store.commit();
    return this.transitionToRoute('siteSales.show', this.content);
  },
  cancel: function() {
    if (this.content.isDirty) {
      this.content.rollback();
    }
    return this.transitionToRoute('siteSales.index', this.content);
  },
  destroy: function() {
    this.content.deleteRecord();
    this.store.commit();
    return this.transitionToRoute('siteSales.index');
  },
  buttonTitle: 'Create',
  headerTitle: 'Creating'
});