Gsc.SiteSalesEditController = Ember.ObjectController.extend({
  destroy: function() {
    this.content.deleteRecord();
    this.store.commit();
    return this.transitionTo('siteSales.index');
  },
  update: function() {
    var setDate = new Date(this.get('startDate') + " " + this.get('startTime'));
    this.set('startDate', setDate);

    this.store.commit();
    this.content.addObserver('id', this, 'afterCreate');
  },
  cancel: function() {
    if (this.content.isDirty) {
      this.content.rollback();
    }
    return this.transitionTo('siteSales.show', this.content);
  },
  buttonTitle: 'Update',
  headerTitle: 'Editing'
});

