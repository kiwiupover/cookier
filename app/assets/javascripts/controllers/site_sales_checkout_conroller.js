Gsc.SiteSalesCheckoutController = Ember.ObjectController.extend({
  needs: ['cookieCases', 'participants'],
  sortProperties: ['cookieCaes.name'],

  update: function() {

    this.get('cookieCases').forEach(function(cookieCase) {
      var cases = parseInt(cookieCase.get('casesBaseTenCheckOut')),
          boxes = parseInt(cookieCase.get('boxesLeftOverCheckOut'));
      boxesTotal = (cases * 12) + boxes;
      cookieCase.set('quantityStart', boxesTotal);
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