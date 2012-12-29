Gsc.Cookie = DS.Model.extend({
  name: DS.attr('string'),
  boxes: DS.attr('string'),
  site_sale: DS.belongsTo('Gsc.SiteSale')
});