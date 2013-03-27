Gsc.SiteSalesCheckinController = Ember.ObjectController.extend({
  needs: ['cookieCases', 'participants'],
  sortProperties: ['cookieCases.name'],
  update: function() {
    this.get('cookieCases').forEach(function(cookieCase) {
      var cases = cookieCase.get('casesBaseTenCheckIn'),
          boxes = cookieCase.get('boxesLeftOverCheckIn');
      boxesTotal = parseInt((cases * 12) + boxes);
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
  headerTitle: 'Editing',


  cookieCases: (function() {
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      sortProperties: ['name'],
      content: this.get('content.cookieCases')
    })
  }).property('content.cookieCases')
});