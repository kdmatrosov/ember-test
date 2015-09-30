import Ember from 'ember';

export default Ember.Route.extend({
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
