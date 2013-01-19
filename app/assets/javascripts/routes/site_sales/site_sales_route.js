Gsc.SiteSalesRoute = Em.Route.extend({
  model: function() {
    return Gsc.SiteSale.find();
  }
});