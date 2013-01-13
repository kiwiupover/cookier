Gsc.ParticipantsParticipantEditView = Em.View.extend({
  didInsertElement: function() {
    this._super();
    $(this).foundationCustomForms();
    this.$('input:first').focus();
  }
});