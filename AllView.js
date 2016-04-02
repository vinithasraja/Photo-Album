var AllView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
     this.collection.on('add', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Images</th>').append(
      this.collection.map(function(image) {
        return new TableView({model: image}).render();
      })
    );
  }

});