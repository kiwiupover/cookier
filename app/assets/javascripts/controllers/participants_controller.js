Gsc.ParticipantsController = Ember.ArrayController.extend({
	sortProperties: ['firstName', 'lastName'],
	participantList: (function() {
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      sortProperties: ['firstName'],
      content: this.get('contents')
    })
  }).property('content'),

	isParticipant: function() {
		debugger;
		alert("Dave");
	},
	participantsAtSiteSale: function(siteSale) {
    var participants = this.get('participants');
    return participants.filterProperty('siteSaleId', siteSale.get('id'));
  }.property('participants.@each.siteSaleId'),

  dave: (function(){
  if(this.get('isParticipant')) {
    alert('property checked');
  } else {
    alert('property unchecked');
  }
  }).observes('isParticipant')
});
