Gsc.SiteSalesCheckinController = Ember.ObjectController.extend({

  update: function() {
    this.get('cookieCases').forEach(function(cookieCase) {
      var cases = parseInt(cookieCase.get('casesBaseTenCheckIn')),
          boxes = parseInt(cookieCase.get('boxesLeftOverCheckIn'));
      boxesTotal = (cases * 12) + boxes;
      cookieCase.set('quantityEnd', boxesTotal);
    });

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