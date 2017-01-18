import Ember from 'ember';
const api = '581a7fbf61a1f7b9'


export default Ember.Route.extend({
  model() {
    const url = `http://api.wunderground.com/api/${api}/conditions/q/CA/San_Francisco.json`;
    return fetch(url)
      .then(res => res.json());
  }
});
