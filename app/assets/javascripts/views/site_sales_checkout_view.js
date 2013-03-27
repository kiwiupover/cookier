Gsc.SiteSalesCheckoutView = Em.View.extend({
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
  }).observes('setAsRecurringAction'),

 	participantCheckbox: Em.Checkbox.extend({
    checkedObserver: (function(){
      siteSaleParticipants = this.get('controller').get('model').get('participants');
        if(this.get('checked'))
          siteSaleParticipants.pushObject(this.get('participant'));
        else
          siteSaleParticipants.removeObject(this.get('participant'));
    }).observes('checked')
  })
});

