Gsc.Router.map(function(match) {
  match('/').to('cookieCases');
  match('/cookies').to('cookiesCases');

  match('/site_sales').to('siteSales', function(match) {
    match('/').to('siteSales');
    match('/:site_sale_id').to('showSiteSale');
  });

  match('/participants').to('participants', function(match){
    match('/').to('participants');
    match('/:participant_id').to('participant', function(match){
      match('/').to('showParticipant');
      match('/edit').to('editParticipant');
    });
  });
});

Gsc.CookieCasesRoute = Em.Route.extend({
  setupControllers: function(controller) {
    controller.set('content', Gsc.CookieCase.find());
  }
});

Gsc.SiteSalesRoute = Em.Route.extend({
  setupControllers: function(controller) {
    controller.set('content', Gsc.SiteSale.find());
  }
});
Gsc.SiteSaleRoute = Em.Route.extend({
  model: function(params) {
    return Gsc.SiteSale.find(params.session_id);
  }
});

Gsc.ParticipantsRoute = Em.Route.extend({
  setupControllers: function(controller) {
    controller.set('content', Gsc.Participant.find());
  }
});
Gsc.ParticipantRoute = Em.Route.extend({
  model: function(params) {
    return Gsc.Participant.find(params.session_id);
  }
});

// match('/posts').to('posts', function(match) {
//   match('/:post_id').to('post', function(match) {
//     match('/').to('postIndex');
//     match('/comments').to('comments');
//     match('/comments/:comment_id').to('comment');
//   });
// });

// Gsc.Router = Em.Router.extend({
//   location: 'hash',
//   enableLogging:  true,

//   goToCookieCases:    Em.Route.transitionTo('cookieCases'),
//   goToSiteSales:      Em.Route.transitionTo('siteSales.index'),
//   goToParticipants:   Em.Route.transitionTo('participants.index'),
//   goToHome:           Em.Route.transitionTo('root.index'),

//   root: Em.Route.extend({
//     index: Em.Route.extend({
//       route: '/',
//       connectOutlets: function(router, context){
//         router.get('applicationController').connectOutlet('cookieCases');
//       }
//     }),

//     cookieCases:  Em.Route.extend({
//       route: '/cookie_cases',
//       enter: function ( router ){
//         console.log("The cookie cases sub-state was entered.");
//       },
//       connectOutlets: function(router) {
//         router.get('applicationController').connectOutlet('cookieCases', router.get('store').findAll(Gsc.CookieCase));
//       }
//     }),

//     siteSales: Em.Route.extend({
//       route: 'site_sales',

//       enter: function(router) {
//         console.log("Enter the site sales sub-state.")
//       },

//       showSiteSale: function(router, event) {
//         router.transitionTo('siteSales.siteSale.index', event.context);
//       },

//       connectOutlets: function(router) {
//         router.get('applicationController').connectOutlet('siteSales', router.get('store').findAll(Gsc.SiteSale));
//       },

//       index: Em.Route.extend({
//         route: "/",

//         connectOutlets: function(router) {
//           router.get('applicationController').connectOutlet('siteSales');
//         }
//       }),

//       siteSale: Em.Route.extend({
//         route: ':site_sale_id',

//         enter: function(router) {
//           console.log("Entered the site sale sub-state");
//         },

//         connectOutlets: function(router, context) {
//           router.get('siteSalesController').connectOutlet('siteSale', context);
//         },

//         index: Em.Route.extend({
//           route: '/',

//           connectOutlets: function(router, context) {
//             router.get('siteSaleController').connectOutlet('showSiteSale', context);
//           }
//         })
//       }),
//     }),

//     participants: Em.Route.extend({
//       route: '/participants',

//       showParticipant: function(router, event) {
//         router.transitionTo('participants.participant.index', event.context);
//       },

//       showNewParticipant: function(router) {
//         router.transitionTo('participants.newParticipant', {});
//       },

//       connectOutlets: function(router) {
//         router.get('applicationController').connectOutlet('participants', router.get('store').findAll(Gsc.Participant));
//       },

//       index: Em.Route.extend({
//         route: '/',

//         connectOutlets: function(router) {
//           router.get('applicationController').connectOutlet('participants');
//         }
//       }),
//       newParticipant: Em.Route.extend({
//         route: '/participants/new',

//         cancelEdit: function(router) {
//           router.transitionTo('participants.index');
//         },

//         connectOutlets: function(router) {
//           router.get('participantsController').connectOutlet('editParticipant', {});
//           router.get('editParticipantController').enterEditing();
//         },

//         exit: function(router) {
//           router.get('editParticipantController').exitEditing();
//         }
//       }),

//       participant: Em.Route.extend({
//         route: ':participant_id',

//         connectOutlets: function(router, context) {
//           router.get('participantsController').connectOutlet('participant', context);
//         },

//         index: Em.Route.extend({
//           route: '/',

//           showEdit: function(router) {
//             router.transitionTo('participant.edit');
//           },

//           connectOutlets: function(router, context) {
//             router.get('participantController').connectOutlet('showParticipant');
//           }
//         }),
//         edit: Em.Route.extend({
//           route: 'edit',

//           cancelEdit: function(router) {
//             router.transitionTo('participants.participant.index');
//           },

//           connectOutlets: function(router) {
//             var participantController = router.get('participantController');
//             participantController.connectOutlet('editParticipant', participantController.get('content'));
//             router.get('editParticipantController').enterEditing();
//           },

//           exit: function(router) {
//             router.get('editParticipantController').exitEditing();
//           }
//         })
//       })
//     })
//   })
// });
