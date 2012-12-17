Gsc.Router = Ember.Router.extend({
  enableLogging:  true,
  goToCookies:  Ember.Route.transitionTo('cookies'),
  goHome:       Ember.Route.transitionTo('root.index'),
  location: 'hash',

  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/',
      connectOutlets:  function(router, context){
        router.get('applicationController').connectOutlet('greeting', 'salutation',
                                                          { greeting: "My Ember App" });
      }
    }),
    cookies:  Ember.Route.extend({
      route: '/cookies',
      enter: function ( router ){
        console.log("The cookies sub-state was entered.");
      },
      connectOutlets:  function(router, context){
        router.get('applicationController').connectOutlet('greeting', 'salutation',
                                                          { greeting: "Cars Route" });
        router.get('applicationController').connectOutlet('body', 'cookies');
      }
    }),
    cars:  Ember.Route.extend({
      route: '/cars',
      enter: function ( router ){
        console.log("The cars sub-state was entered.");
      },
      connectOutlets:  function(router, context){
        router.get('applicationController').connectOutlet('greeting', 'salutation',
                                                          { greeting: "Cars Route" });
        router.get('applicationController').connectOutlet('body', 'cars');
      }
    })
  })
});

