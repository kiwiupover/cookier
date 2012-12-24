Gsc.EditParticipantView = Em.View.extend({
  templateName: 'edit_participant',
  tagName: 'form',
  classNames: 'custom',

  didInsertElement: function() {
    this._super();
    $(this).foundationCustomForms();
    this.$('input:first').focus();
  },

  submit: function(event) {
    event.preventDefault();
    this.get('controller').updateRecord();
  }
});