Gsc.Router.map(function() {
  location: 'hash',
  this.resource('cookieCases');

  this.resource('siteSales', function(){
    this.route('new');
    this.route('edit', {path: '/:site_sale_id/edit'});
    this.route('checkout', {path: '/:site_sale_id/checkout'});
    this.route('checkin', {path: '/:site_sale_id/checkin'});
    this.route('show', {path: '/:site_sale_id'});
  });

  this.resource('participants', function(){
    this.route('new');
    this.route('edit', {path: '/:participant_id/edit'});
    this.route('show', {path: '/:participant_id'});
  });
});