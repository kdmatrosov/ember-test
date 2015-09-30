import Ember from 'ember';

export default Ember.Route.extend({
    model: function()
    {
        return ['item2', 'item4', 'item6'];
    }
});
