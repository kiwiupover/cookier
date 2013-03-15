Gsc.ParticipantsController = Ember.ArrayController.extend({
	sortProperties: ['firstName', 'lastName'],
	participantList: (function() {
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      sortProperties: ['firstName'],
      content: this.get('contents')
    })
  }).property('content')
});
