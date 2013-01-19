// Gsc.ParticipantEditRoute = Ember.Route.extend({

//   setupController: function(controller, model) {
//     this._super(controller, model);

//     // add the model to a local transaction
//     this.transaction = controller.get('store').transaction();
//     this.modelFor('post').id;
//     debugger;
//     // this.transaction.add(model).id;

//     // highlight this participant as active
//     this.controllerFor('participant').set('activeContactId', model.get('id'));
//   },

//   exit: function() {
//     this._super();

//     // rollback the local transaction if it hasn't already been cleared
//     if (this.transaction) {
//       this.transaction.rollback();
//     }

//     // no participant is active (momentarily, at least)
//     this.controllerFor('participant').set('activeContactId', null);
//   },

//   events: {
//     cancel: function(participant) {
//       this.transitionTo('participant', participant);
//     },

//     save: function(participant) {
//       this.transaction.commit();
//       this.transaction = null;
//       this.transitionTo('participant', participant);
//     }
//   }
// });

Gsc.ParticipantEditRoute = Ember.Route.extend({
  model: function(params) {
    return Gsc.Participant.find(params.post_id);
  },
  enter: function() {
    alert("ParticipantEditRoute");
  },

});


// Lifesocket.PostsRoute = Ember.Route.extend({
//   setupController: function(controller, model) {
//     return this.controllerFor('application').set('currentRoute', 'posts');
//   }
// });

// Lifesocket.PostShowRoute = Ember.Route.extend({
//   model: function() {
//     console.log(this.modelFor('post'));
//     return this.modelFor('post');
//   }
// });

// Lifesocket.PostEditRoute = Ember.Route.extend({
//   model: function(params) {
//     return Lifesocket.Post.find(params.post_id);
//   }
// });

// Lifesocket.PostsIndexRoute = Lifesocket.PostsRoute.extend({
//   model: function() {
//     if (Lifesocket.Post.isLoaded()) {
//       return Lifesocket.Post.all();
//     } else {
//       return Lifesocket.Post.find();
//     }
//   },
//   setupController: function(controller, model) {
//     this._super();
//     return controller.set('posts', model);
//   }
// });

// Lifesocket.PostsNewRoute = Lifesocket.PostsRoute.extend({
//   model: function() {
//     return Lifesocket.Post.createRecord({
//       title: '',
//       content: ''
//     });
//   },
//   setupController: function(controller, model) {
//     this._super();
//     return controller.set('content', model);
//   }
// });

