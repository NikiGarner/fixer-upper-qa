import DS from 'ember-data';

export default DS.Model.extend({
  item: DS.attr(),
  author: DS.attr(),
  type: DS.attr(),
  avatar: DS.attr()
});
