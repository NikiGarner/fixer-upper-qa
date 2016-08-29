import Ember from 'ember';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),
  
  actions: {
    remove(answer) {
      this.get('favoriteList').remove(answer);
    },
    empty() {
      this.get('favoriteList').empty();
    }
  }
});
