Gsc.ApplicationView = Ember.View.extend({
  templateName: 'application',

  didInsertElement: function () {
    this.$().foundationTopBar();
  }
});