Gsc.ShowSiteSaleView = Ember.View.extend({
  templateName: 'show_site_sale',
  classNameBindings: 'isActive:active',

  isActive: function() {
    var id = this.get('content.id'),
      currentPath = Gsc.router.get('currentState.path');

    if (id) {
      return Gsc.get('router.siteSaleController.content.id') === id &&
             currentPath.indexOf('siteSales.siteSale') > -1;
    } else {
      return currentPath.indexOf('siteSales.siteSale') > -1;
    }
  }.property('Gsc.router.currentState', 'Gsc.router.siteSaleController.content')
});
