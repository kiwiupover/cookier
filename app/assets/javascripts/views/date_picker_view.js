Gsc.DatePicker = Ember.TextField.extend({
  classNames: ['expanded'],
  tagName: "input",
  placeHolder: "Start Date",
  attributeBindings: ['data','value','format','readonly','type','size'],
  type: "text",
  format: 'dd MM, yy',

  value: function(){
    var date = this.get('data');

    if(date){
      return date.format(this.get('format'));
    }
    else{
      return "";
    }
  }.property('data'),

  didInsertElement: function(){
    var self = this;
    var onChangeDate = function(ev) {
       console.log($(".datepicker").attr("value"));
       self.set('data', ev.date);
    };
    this.$().datepicker({ dateFormat: this.get('format') }).on('changeDate', onChangeDate);
  }
});
