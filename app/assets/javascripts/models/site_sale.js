Gsc.SiteSale = DS.Model.extend({
  location: DS.attr('string'),
  startAt: DS.attr('date'),
  endAt: DS.attr('date'),
  cookieCases: DS.hasMany('Gsc.CookieCase')
});