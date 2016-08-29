import Ember from 'ember';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),

  actions: {
    addToFavorites(answer) {
      this.get('favoriteList').add(answer);
      this.transitionTo('index');
    },
    upvote(answer) {
      this.sendAction('upvote', answer);
      console.log(upvote);
    },
    update(answer, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          answer.set(key,params[key]);
        }
      });
      answer.save();
      this.transitionTo('question', params.question);
    }
  }
});
