import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return this.store.findAll('answer', answer_id);
  },
  actions: {
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('question_id');
    }
  }
});
