import Ember from 'ember';

export default Ember.Component.extend({
  fullAnswer: Ember.computed('answer.name', 'answer.content', function() {
    return this.get('answer.name') + ' : ' + this.get('answer.content');
  }),
  favoriteList: Ember.inject.service(),

  actions: {
    addToFavorites(answer) {
      this.get('favoriteList').add(answer);
      this.transitionTo('index');
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
