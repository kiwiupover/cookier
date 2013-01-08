Gsc.CookieCase = DS.Model.extend({
  name: DS.attr('string'),
  quantity: DS.attr('string'),
  site_sale: DS.belongsTo('Gsc.SiteSale')
});
