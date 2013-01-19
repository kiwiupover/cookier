Gsc.SiteSalesEditController = Ember.ObjectController.extend({
  enter: function() {
    console.log("Entering the SiteSalesEditController");
  },
  update: function() {
    this.store.commit();
    return this.transitionToRoute('siteSales.show', this.content);
  },
  cancel: function() {
    if (this.content.isDirty) {
      this.content.rollback();
    }
    return this.transitionToRoute('siteSales.show', this.content);
  },
  destroy: function() {
    this.content.deleteRecord();
    this.store.commit();
    return this.transitionToRoute('siteSales.index');
  },
  buttonTitle: 'Update',
  headerTitle: 'Updating'
});

