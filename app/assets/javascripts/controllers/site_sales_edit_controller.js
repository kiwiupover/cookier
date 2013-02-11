Gsc.SiteSalesEditController = Ember.ObjectController.extend({
  destroy: function() {
    this.content.deleteRecord();
    this.store.commit();
    return this.transitionTo('siteSales.index');
  },
  update: function() {
    var setDate = new Date(this.get('siteSaleDate'));
    if (this.get('startDate') != setDate){
      this.set('startDate', setDate);
    }
    this.store.commit();
    return this.transitionToRoute('siteSales.show', this.content);
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

