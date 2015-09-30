import Ember from 'ember';

export default Ember.Component.extend({
  items: [], // значение по умолчанию
  actions:
  {
    addNewItem: function()
    {
      let newItem = this.get('newItem');
      this.get('items').pushObject(newItem);
    }
  }
});
