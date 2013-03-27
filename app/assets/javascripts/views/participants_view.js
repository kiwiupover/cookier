Gsc.ParticipantsView = Ember.View.extend({
  templateName: 'participants/participants',
	didInsertElement: function() {
    this._super();
    this.$().foundationCustomForms();
    this.$('input:first').focus();
  },
  setAsRecurringAction: false,
  setActionSchedule: (function(){
    if(this.get('setAsRecurringAction'))
        alert('property checked');
    else
        alert('property unchecked');
  }).observes('setAsRecurringAction')
});
