import Ember from 'ember';

export default Ember.Component.extend({
  items: ['item1', 'item2', 'item3'],
  actions:
  {
    addNewItem: function()
    {
      let newItem = this.get('newItem');
      this.get('items').pushObject(newItem);
    }
  }
});
