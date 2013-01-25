Gsc.SiteSalesEditController = Ember.ObjectController.extend({
  destroy: function() {
    this.content.deleteRecord();
    this.store.commit();
    return this.transitionTo('siteSales.index');
  },
  update: function() {
    this.store.commit();
    return this.transitionTo('siteSales.show', this.content);
  },
  cancel: function() {
    if (this.content.isDirty) {
      this.content.rollback();
    }
    return this.transitionTo('siteSales.show', this.content);
  },
  buttonTitle: 'Edit',
  headerTitle: 'Editing'
});

