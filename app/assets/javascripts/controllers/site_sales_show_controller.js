Gsc.SiteSalesShowController = Ember.ObjectController.extend({
  needs: 'cookieCases',
  sortProperties: ['cookieCaes.name'],

  totalBoxesSold: function() {
  	total = parseInt(this.get('boxesStart') - this.get('boxesEnd'));
  	return total;
  }.property('boxesStart', 'boxesEnd'),

  totalSales: function() {
    return "$" + (this.get('totalBoxesSold') * 4)
  }.property('totalBoxesSold'),

  totalForBank: function() {
  	total = parseInt((this.get('totalBoxesSold') * 4) - (this.get('totalBoxesSold') * 0.7));
     return "$" + total;
  }.property('totalBoxesSold'),

  totalForTroop: function() {
  	return "$" + parseInt(this.get('totalBoxesSold') * 0.7);
  }.property('totalBoxesSold'),

  cookieCases: (function() {
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      sortProperties: ['name'],
      content: this.get('content.cookieCases')
    })
  }).property('content.cookieCases')
});
