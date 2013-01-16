Gsc.Router.map(function(match) {
  match('/').to('cookieCases');
  match('/cookies').to('cookiesCases');

  match('/site_sales').to('siteSales', function(match) {
    match('/new').to('new');
    match('/:site_sale_id').to('siteSale', function(match){
      match('/edit').to('edit');
    });
  });

  match('/participants').to('participants', function(match){
    match('/new').to('new');
  });
  match('/:participant_id').to('participant', function(match) {
    match('/edit').to('edit');
  });

});