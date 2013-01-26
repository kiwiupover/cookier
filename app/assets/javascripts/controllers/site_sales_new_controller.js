Gsc.SiteSalesNewController = Ember.ObjectController.extend({

  update: function() {
    debugger;
    var setDate = new Date();
    setDate = new Date(this.get('startDate') + " " + this.get('startTime'));
    this.set('startDate', setDate);

    var cookieCases = this.get('cookieCases');
    this._createCookiesCases(cookieCases);
    this.store.commit();
    this.content.addObserver('id', this, 'afterCreate');
  },
  afterCreate: function() {
    this.content.removeObserver('id', this, 'afterCreate');
    this.transitionToRoute('siteSales.show', this.content);
  },
  cancel: function() {
    this.content.deleteRecord();
    this.transitionToRoute('siteSales.index');
  },
  buttonTitle: 'Create',
  headerTitle: 'Creating',

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
        quantity: 0
      });
    });
  }
});