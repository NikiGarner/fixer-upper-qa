import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  name: DS.attr(),
  question: DS.belongsTo('question', {async: true })
});
