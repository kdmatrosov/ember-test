import Ember from 'ember';

export default Ember.Route.extend({
	
	  activate() { // Как я понял, этому методу очень важно быть первым определенным в роутере или он кладет всё нахер
			//console.log(store.findAll('farm'));
	  },
	  model: function()
	  {
		return ['item2', 'item4', 'item6'];
	  },
      actions: {
        storeItems: function (items) {
         console.log(items.join(', ')+ ' were saved');
        }
      }
});
