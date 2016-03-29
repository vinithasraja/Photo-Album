var AllView = Backbone.View.extend({
  tagName: 'table',

  
  render: function() {
    this.$el.html('<th>Images</th>');
    this.collection.each(function(Model) {
      this.$el.append(new PhotoView({model: Model}).$el);
    }, this);

    return this;
  },
  
  initialize: function() {
    this.render();
  }
  
});
