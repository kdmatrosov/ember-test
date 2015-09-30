import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  address: DS.attr(),
  introdution: Ember.computed('name', 'address', function() {
    return `Ферма ${this.get('name')} расположена по адресу: ${this.get('address')}`;
  })  
});
