import Ember from 'ember';

var questions = [{
  id: 1,
  item: "Which is your favorite home from the show?",
  author: "Tammy Smith",
  type: "House",
  avatar: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-128.png"
}, {
  id: 2,
  item: "Where does Jojo get her clothes?",
  author: "Abby Dunn",
  type: "Personal",
  avatar: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-128.png"
}, {
  id: 3,
  item: "How do you get on Fixer Upper?",
  author: "Robert Chase",
  type: "Show",
  avatar: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-128.png"
}, {
  id: 4,
  item: "Are any houses from the show for sale?",
  author: "Nancy Schultz",
  type: "House",
  avatar: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-128.png"
}, {
  id: 5,
  item: "What do you think about the Airbnb controversy?",
  author: "Earl Cash",
  type: "Show",
  avatar: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-128.png"
}
}]

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
