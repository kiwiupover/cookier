Gsc.ListCookieCasesView = Em.View.extend({
  templateName: 'list_cookie_cases',
  tagName: 'li'
  // classNameBindings: 'isActive:active',

  // isActive: function() {
  //   var id = this.get('content.id'),
  //       currentPath = App.router.get('currentState.path');

  //   if (id) {
  //     return App.get('router.contactController.content.id') === id &&
  //            currentPath.indexOf('contacts.contact') > -1;
  //   } else {
  //     return currentPath.indexOf('contacts.newContact') > -1;
  //   }
  // }.property('App.router.currentState', 'App.router.contactController.content')
});
