Gsc.CookieCase = DS.Model.extend({
  name: DS.attr('string'),
  quantityStart: DS.attr('number'),
  quantityEnd: DS.attr('number'),
  siteSale: DS.belongsTo('Gsc.SiteSale')
});
