Gsc.SiteSalesNewView = Em.View.extend({
  didInsertElement: function() {
    this._super();
    $(this).foundationCustomForms();
    this.$('.datepicker').datepicker({
      dateFormat: "DD, d MM, yy"
    });
    this.$('input:first').focus();
  }
});