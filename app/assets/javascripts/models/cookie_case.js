Gsc.CookieCase = DS.Model.extend({
  name: DS.attr('string'),
  quantityStart: DS.attr('number'),
  quantityEnd: DS.attr('number'),
  siteSale: DS.belongsTo('Gsc.SiteSale'),

  casesBaseTenCheckOut: function() {
    return Math.round(this._baseTen(this.get('quantityStart')));
  }.property('quantityStart'),

  casesBaseTenCheckIn: function() {
    return Math.round(this._baseTen(this.get('quantityEnd')));
  }.property('quantityEnd'),

  boxesLeftOverCheckOut: function() {
    return this._boxesLeftOver(this.get('quantityStart')) ;
  }.property('quantityStart'),

  boxesLeftOverCheckIn: function() {
    return this._boxesLeftOver(this.get('quantityEnd')) ;
  }.property('quantityEnd'),

  caseCountCheckOut: function() {
    return this.casesBaseTenCheckOut + " cases and boxes " + this.boxesLeftOverCheckOut;
  }.property('quantityStart'),

  caseCountCheckIn: function() {
    if (this.boxesLeftOverCheckOut === "0") {
      return casesBaseTenCheckIn + " cases";
    } else {
      return casesBaseTenCheckIn + " cases and boxes " + boxesLeftOverCheckIn;
    }
  }.property('quantityEnd'),

  totalSold: function() {
    return parseInt(this.get('quantityStart') - this.get('quantityEnd'));
  }.property('quantityStart', 'quantityEnd'),

  _baseTen: function(quantity) {
    return quantity / 12.0;
  },

  _boxesLeftOver: function(quantity) {
    return Math.round((this._baseTen(quantity) - parseInt(this._baseTen(quantity)))*12);
  }
});
