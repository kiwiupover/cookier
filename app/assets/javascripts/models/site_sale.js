Gsc.SiteSale = DS.Model.extend({
  location: DS.attr('string'),
  startAt: DS.attr('date'),
  endAt: DS.attr('date'),
  cookieCases: DS.hasMany('Gsc.CookieCase'),

  boxes: function() {
    return this.get('cookieCases').getEach('quantity').reduce(function(accum, item) {
      return accum + item;
    }, 0);
  }.property('cookieCases.@each.quantity'),

  siteSaleTime: function() {
    startAtDate =  moment(this.get('startAt'));
    endAtDate =  moment(this.get('endAt'));
    return startAtDate.format('dddd, MMMM Do, h:ma') + " to " + endAtDate.format('h:ma');
  }.property('startAt', 'endAt')
});