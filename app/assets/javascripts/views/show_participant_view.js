Gsc.ShowParticipantView = Ember.View.extend({
  templateName: 'show_participant'
    // classNameBindings: 'isActive:active',

    // isActive: function() {
    //   var id = this.get('content.id'),
    //     debugger;
    //     currentPath = Gsc.router.get('currentState.path');

    //   if (id) {
    //     return Gsc.get('router.participantController.content.id') === id &&
    //            currentPath.indexOf('participants.participant') > -1;
    //   } else {
    //     return currentPath.indexOf('participants.newParticipant') > -1;
    //   }
    // }.property('Gsc.router.currentState', 'Gsc.router.participantController.content')
});