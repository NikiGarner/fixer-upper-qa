import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question', 'answer');
  },
   actions: {
      save3(params) {
        var newQuestion = this.store.createRecord('question', params);
        newQuestion.save();
        this.transitionTo('index');
      }
  }
});
