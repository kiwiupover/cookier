Gsc.SiteSalesEditView = Em.View.extend({
  didInsertElement: function() {
    this._super();
    this.$().foundationCustomForms();
    this.$('.datepicker').datepicker({
      dateFormat: "DD, d MM, yy",
      currentText:  this.controller.get('startDate')
    });
    this.$('input:first').focus();
  }
});
