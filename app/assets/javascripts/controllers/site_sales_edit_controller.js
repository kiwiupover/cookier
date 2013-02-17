Gsc.SiteSalesEditController = Ember.ObjectController.extend({
  destroy: function() {
    this.content.deleteRecord();
    this.store.commit();
    return this.transitionTo('siteSales.index');
  },
  update: function() {
    date = new Date(this.get('startDate'))
    this.set('startDate', date)

    this.store.commit();
    return this.transitionToRoute('siteSales.show', this.content);
  },
  cancel: function() {
    this.get('transaction').rollback()
    return this.transitionTo('siteSales.show', this.content);
  },
  buttonTitle: 'Update',
  headerTitle: 'Editing'
});

