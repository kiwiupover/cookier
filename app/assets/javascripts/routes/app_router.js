Gsc.Router = Ember.Router.extend({
  enableLogging:  true,
  goToCookies:  Ember.Route.transitionTo('cookies'),
  goToHome:     Ember.Route.transitionTo('root.index'),
  location: 'hash',

  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/',
      connectOutlets: function(router, context){
        router.get('applicationController').connectOutlet('greeting', 'salutation',
                                                          { greeting: "My Ember App" });
      }
    }),
    cookies:  Ember.Route.extend({
      route: '/cookies',
      enter: function ( router ){
        console.log("The cookies sub-state was entered.");
      },
      connectOutlets: function(router) {
        router.get('applicationController').connectOutlet('cookies', router.get('store').findAll(Gsc.Cookie));
      }
    })
  })
});

// Gsc.Router.map(function(match) {
//   match("/").to("home");
// });