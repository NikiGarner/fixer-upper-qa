import Ember from 'ember';
  save1() {
  var params = {
    name: this.get('name'),
    content: this.get('content'),
  };
  this.set('addNewAnswer', false);
  this.sendAction('save2', params);
  }
export default Ember.Component.extend({
});
