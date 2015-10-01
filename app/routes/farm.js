import Ember from 'ember';

export default Ember.Route.extend({
	
	  activate() { // Как я понял, этому методу очень важно быть первым определенным в роутере или он кладет всё нахер
			
	  },
	  model: function()
	  {
		  this.store.push(
		  {
			data: [{
				  id: 1,
					type: 'farm',
				  attributes:
				  {
					name: 'Мой край, моя деревня' ,
					address: 'От второй звезы напрво и до самого утра'  
				  }
			}]
		  });
		return ['item2', 'item4', 'item6'];
	  },
      actions: {
        storeItems: function (items) {
         console.log(items.join(', ')+ ' were saved');
        }
      }
});
