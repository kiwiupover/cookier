Gsc.SiteSale = DS.Model.extend({
  location: DS.attr('string'),
  startDate: DS.attr('date'),
  startTime: DS.attr('string'),
  cookieCases: DS.hasMany('Gsc.CookieCase'),

  locationName: function() {
    var location = this.get('location');

    if (!location) {
      if (this.get('id') === undefined) {
        return '(New Location)';
      } else {
        return '(New Location)';
      }
    }
    if (location === undefined) location = '';

    return location;
  }.property('location'),

  boxesStart: function() {
    return this.get('cookieCases').getEach('quantityStart').reduce(function(accum, item) {
      return accum + item;
    }, 0);
  }.property('cookieCases.@each.quantityStart'),

  boxesEnd: function() {
    return this.get('cookieCases').getEach('quantityEnd').reduce(function(accum, item) {
      return accum + item;
    }, 0);
  }.property('cookieCases.@each.quantityEnd'),

  siteSaleTime: function() {
    if (this.get('startTime') !== null && this.get('startDate') !== null) {
      startAtDate =  moment(this.get('startDate'));
      startAtTime =  moment(this.get('startTime'), "HH:mm");
      date = moment(startAtDate.format('YYYY MM DD') + " " + startAtTime.format('HH:mm'));

      return date.format('dddd, MMM Do') + " at " + date.format('h:mm:a');
    } else {
      return "Choose a Date";
    }
  }.property('startDate', 'startTime'),

  momentStartFullTime: function() {
    if (this.get('startTime') !== null && this.get('startDate') !== null) {
      startAtDate =  moment(this.get('startDate'));
      startAtTime =  moment(this.get('startTime'), "HH:mm");
      return moment(startAtDate.format('YYYY MM DD') + " " + startAtTime.format('HH:mm'));
    }
  }.property('startDate', 'startTime'),

  siteSaleDateSmall: function() {
    return this.get('momentStartFullTime').format('MMM Do');
  }.property('startDate')

});

Gsc.siteSalesTimes = [
  Ember.Object.create({display: "8:00 am",  value: "08:00"}),
  Ember.Object.create({display: "8:30 am",  value: "08:30"}),
  Ember.Object.create({display: "9:00 am",  value: "09:00"}),
  Ember.Object.create({display: "9:30 am",  value: "09:30"}),
  Ember.Object.create({display: "10:00 am", value: "10:00"}),
  Ember.Object.create({display: "10:30 am", value: "10:30"}),
  Ember.Object.create({display: "11:00 am", value: "11:00"}),
  Ember.Object.create({display: "11:30 am", value: "11:30"}),
  Ember.Object.create({display: "12:00 pm", value: "12:00"}),
  Ember.Object.create({display: "12:30 pm", value: "12:30"}),
  Ember.Object.create({display: "1:00 pm",  value: "13:00"}),
  Ember.Object.create({display: "1:30 pm",  value: "13:30"}),
  Ember.Object.create({display: "2:00 pm",  value: "14:00"}),
  Ember.Object.create({display: "2:30 pm",  value: "14:30"}),
  Ember.Object.create({display: "3:00 pm",  value: "15:00"}),
  Ember.Object.create({display: "3:30 pm",  value: "15:30"}),
  Ember.Object.create({display: "4:00 pm",  value: "16:00"}),
  Ember.Object.create({display: "4:30 pm",  value: "16:30"}),
  Ember.Object.create({display: "5:00 pm",  value: "17:00"}),
  Ember.Object.create({display: "5:30 pm",  value: "17:30"}),
  Ember.Object.create({display: "6:00 pm",  value: "18:00"}),
  Ember.Object.create({display: "6:30 pm",  value: "18:30"}),
  Ember.Object.create({display: "7:00 pm",  value: "19:00"}),
  Ember.Object.create({display: "7:30 pm",  value: "19:30"})
];