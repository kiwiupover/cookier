Gsc.AddMinusBoxes = Ember.View.extend({
  classNames: ['add-minus-textbox'],

  template: Ember.Handlebars.compile(
    '<button class="add" {{action add target="view"}}>Add</button>' +
    '<label class="control-label">Boxes</label>' +
    '{{view Ember.TextField valueBinding="boxesLeftOverCheckOut" placeholder="Boxes Quantity" }}' +
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