import Ember from 'ember';

export default Ember.Component.extend({	
  CF: Ember.inject.service('common-functions'),
  items: [], // значение по умолчанию
  actions:
  {
    addNewItem: function()
    {
      let newItem = this.get('newItem');
	  if (!this.get('CF').isNullUndefinedEmpty(newItem)  && !this.get('CF').checkRepeatInList(newItem, this.get('items')))
      {
		this.get('items').pushObject(newItem);  
	  }
    },
    saveItems: function () {
      this.sendAction('action', this.get('items')); // слово "action" - просто метка на метод. Есть здесь и в файле с вызовом компонента
    }
  }
});
