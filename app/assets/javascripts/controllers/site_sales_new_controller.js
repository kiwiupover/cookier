  Gsc.SiteSalesNewController = Ember.ObjectController.extend({

  update: function() {
    date = new Date(this.get('startDate'))
    this.set('startDate', date)

    var cookieCases = this.get('cookieCases');
    this._createCookiesCases(cookieCases);

    this.store.commit();
    this.content.addObserver('id', this, 'afterCreate');
  },
  afterCreate: function() {
    this.transitionToRoute('siteSales.show', this.content);
  },
  cancel: function() {
    this.content.deleteRecord();
    this.transitionToRoute('siteSales.index');
  },
  buttonTitle: 'Create',
  headerTitle: 'Creating',

  prettyDate: function() {
    momemtDate = moment(this.get('startDate'));
    return  momemtDate.format('Do MMMM YYYY');
  }.property('startDate'),

  _createCookiesCases: function(cookieCases) {
    var cookieTypes = [
          {'name': 'Thin Mint'},
          {'name': 'Samoas'},
          {'name': 'Tagalongs'},
          {'name': 'Do-si-dos'},
          {'name': 'Savannah Smiles'},
          {'name': 'Trefoils'}
        ];
    $(cookieTypes).each(function() {
      cookieCases.createRecord({
        name: this.name,
        quantityStart: 100,
        quantityEnd: 30
      });
    });
  }
});