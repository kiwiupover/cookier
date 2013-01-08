Gsc.Router.map(function(match) {
  match('/').to('cookieCases');
  match('/cookies').to('cookiesCases');

  match('/site_sales').to('siteSales', function(match) {
    match('/').to('siteSalesIndex');
    match('/:site_sale_id').to('siteSale');
    match('/:site_sale_id/new').to('newSiteSale');
  });

  match('/participants').to('participants', function(match){
    match('/').to('participantsIndex');
    match('/new').to('addParticipants');
    match('/:participant_id').to('participant');
    match('/:participant_id/edit').to('editParticipant');
  });

  match('/contacts').to('contacts', function(match) {
    match('/').to('contactsIndex');
    match('/new').to('addContact');
    match('/:contact_id').to('contact');
    match('/:contact_id/edit').to('editContact');
  });

});