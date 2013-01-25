Gsc.CookieCasesRoute = Em.Route.extend({
  model: function() {
    return Gsc.CookieCase.find();
  }
});
