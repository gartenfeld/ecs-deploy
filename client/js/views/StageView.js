var StageView = Backbone.View.extend({

  el: '#stage',

  initialize: function () {
    this.listenTo(this.collection, 'play', this.render);
  },

  render: function () {
    var current = this.collection.current(),
        word = current.get('en'),
        gloss = current.get('cn');
    this.$el.find('.gloss').text(gloss);
    this.$el.find('.word').text(word)
      .css({ opacity: 0 })
      .stop().delay(100)
      .animate({ opacity: 1 }, 250);
  }

});
