Gsc.SiteSalesNewController = Ember.ObjectController.extend({

  update: function() {
    var cookieCases = this.get('cookieCases');
    this._createCookiesCases(cookieCases);
    debugger;
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
          {'name': 'Lemonades'},
          {'name': 'Do-si-dos'},
          {'name': 'Savannah Smiles'},
          {'name': 'Thanks-A-Lot'},
          {'name': 'Dulce de Leche'},
          {'name': 'Mango Cremes'},
          {'name': 'Thank U Berry Munch'}
        ];
    $(cookieTypes).each(function() {
      cookieCases.createRecord({
        name: this.name,
        quantity: 0
      });
    });
  }
});