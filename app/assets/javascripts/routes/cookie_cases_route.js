Gsc.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    // Set the IndexController's `title`
    controller.set('title', "My App");
  }
});

Gsc.CookieCasesRoute = Em.Route.extend({
  model: function() {
    return Gsc.CookieCase.find();
  }
});
