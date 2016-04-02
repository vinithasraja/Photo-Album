var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.imageView = new ImageView({model: this.model.get('currentImage')});
    this.allView = new AllView({collection: this.model.get('collection')});
    this.formView = new FormView({collection: this.model.get('collection')});

    this.model.on('change:currentImage', function(model) {
      this.imageView.setImage(model.get('currentImage'));
   
    }, this);

  },
  render: function() {
    return this.$el.html([
      this.imageView.$el,
      this.formView.$el,
      this.allView.$el
  
    ]);
  }

});