Gsc.CookieCase = DS.Model.extend({
  name: DS.attr('string'),
  quantity: DS.attr('number'),
  siteSale: DS.belongsTo('Gsc.SiteSale')
});
