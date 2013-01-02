Gsc.CookieCase = DS.Model.extend({
  name: DS.attr('string'),
  quantity: DS.attr('string'),
  siteSale: DS.belongsTo('Gsc.SiteSale')
});