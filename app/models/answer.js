import DS from 'ember-data';
actions: {
   save3(params) {
     var newAnswer = this.store.createRecord('answer', params);
     var answer = params.answer;
     answer.get('questions').addObject(newAnswer);
     newAnswer.save().then(function() {
       return answer.save();
     });
     this.transitionTo('question', params.question);
   }
 }

export default DS.Model.extend({
  content: DS.attr(),
  name: DS.attr(),
  question: DS.belongsTo('question', {async: true })
});
