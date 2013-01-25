Gsc.Router.map(function() {
  location: 'history',
  this.resource('cookieCases');

  this.resource('siteSales', function(){
    this.route('new');
    this.route('edit', {path: '/:site_sale_id/edit'});
    this.route('show', {path: '/:site_sale_id'});
  });

  this.resource('participants', function(){
    this.route('new');
    this.route('edit', {path: '/:participant_id/edit'});
    this.route('show', {path: '/:participant_id'});
  });
});