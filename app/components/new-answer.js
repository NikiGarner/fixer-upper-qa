import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow(){
      this.set('addNewAnswer', true);
  },
  save1() {
    var params = {
      name: this.get('name'),
      content: this.get('content'),
      question: this.get('question'),
    };
    this.set('addNewAnswer', false);
    this.sendAction('save1', params);
    }
  }
});
