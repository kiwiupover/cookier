Gsc.SiteSalesShowRoute = Em.Route.extend({
  model: function(params) {
    return Gsc.SiteSale.find(params.site_sale_id);
  },
  exit: function() {
    this._super();
    this.controllerFor('siteSales').set('activeContactId', null);
  }
});