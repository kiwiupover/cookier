Handlebars.registerHelper('submitButton', function(text) {
  return new Handlebars.SafeString('<button type="submit" class="button radius primary">' + text + '</button>');
});