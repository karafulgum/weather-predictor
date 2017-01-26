import Ember from 'ember';
const api = '581a7fbf61a1f7b9';


export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      conditions: fetch(`http://api.wunderground.com/api/${api}/conditions/q/TN/Nashville.json`)
        .then(res => res.json()),
      forecast: fetch(`http://api.wunderground.com/api/${api}/forecast/q/TN/Nashville.json`)
        .then(res => res.json()),
    });
  }
});
