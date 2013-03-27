Gsc.AddMinusCases = Ember.View.extend({
  classNames: ['add-minus-textbox'],
  valueBinding: "casesBaseTenCheckOut",

  template: Ember.Handlebars.compile(
    '<button class="add" {{action add target="view"}}>Add</button>' +
    '<label class="control-label">Cases</label>' +
    '{{view Ember.TextField valueBinding="casesBaseTenCheckOut" placeholder="Cases Quantity" required="true" }}' +
    '<button class="minus" {{action minus target="view"}}>Minus</button>'),

  didInsertElement: function(){
 		console.log("AddMinusTextbox");
  },
  add: function(){
    this.set('value',  parseInt(this.get('value') + 1))
  },
  minus: function(){
    if (this.get('value') > 0) {
      return this.set('value', parseInt(this.get('value') - 1))
    }
  }
});