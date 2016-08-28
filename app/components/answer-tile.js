import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
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
