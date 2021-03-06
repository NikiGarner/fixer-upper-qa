import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    save1() {
      var params ={
        item: this.get('item'),
        author: this.get('author'),
        date: this.get('date'),
        avatar: this.get('avatar')
      };
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
    }
  }
});
