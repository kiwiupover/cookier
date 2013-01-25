Gsc.SiteSalesEditView = Em.View.extend({
  didInsertElement: function() {
    this._super();
    $(this).foundationCustomForms();
    this.$('input:first').focus();
  },
  enter: function() {
    console.log('SiteSalesEditView');
  }
});
