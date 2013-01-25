Gsc.CookieCase = DS.Model.extend({
  name: DS.attr('string'),
  quantity: DS.attr('number'),
  site_sale: DS.belongsTo('Gsc.SiteSale')
});
