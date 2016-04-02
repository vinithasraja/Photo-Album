var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentImage', new Photo());

    params.collection.on('setImage', function(image) {
      this.set('currentImage', image);
    }, this);
  }
});