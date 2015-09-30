import Ember from 'ember';

export default Ember.Component.extend({
  items: [], // значение по умолчанию
  actions:
  {
    addNewItem: function()
    {
      let newItem = this.get('newItem');
      this.get('items').pushObject(newItem);
    },
    saveItems: function () {
      this.sendAction('action', this.get('items')); // слово "action" - просто метка на метод. Есть здесь и в файле с вызовом компонента
    }
  }
});
