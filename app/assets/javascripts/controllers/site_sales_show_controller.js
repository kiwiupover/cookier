Gsc.SiteSalesShowController = Ember.ObjectController.extend({
  needs: 'cookieCases',
  content: null,
  sortProperties: ['cookieCaes.name'],

  totalBoxesSold: function() {
  	total = parseInt(this.get('boxesStart') - this.get('boxesEnd'));
  	return total;
  }.property('boxesStart', 'boxesEnd'),

  totalSales: function() {
    total = parseInt(this.get('boxesStart') - this.get('boxesEnd'));
    return "$" + (total * 4)
  }.property('boxesStart', 'boxesEnd'),


  cookieCases: (function() {
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      sortProperties: ['name'],
      content: this.get('content.cookieCases')
    })
  }).property('content.cookieCases')
});
