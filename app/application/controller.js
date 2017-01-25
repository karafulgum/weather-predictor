import Ember from 'ember';
const api = '581a7fbf61a1f7b9';

export default Ember.Controller.extend({
  actions: {
    searchLocation(state, city) {
      fetch(`http://api.wunderground.com/api/${api}/conditions/q/${state}/${city}.json`)
        .then((r => r.json()))
        .then((m) => this.set('model', m));
    }
  }
});
