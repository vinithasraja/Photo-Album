var FormView = Backbone.View.extend({
  tagName: 'div',
  className: 'edit',


  el : '<form id="addImage" action="#"><label for="title">Title</label><input type="text" id="title"><label for="image">Image Link</label><input type="text"/ id="image"><button id="add-image">Add Image</button></form>',

  events:{
     "click #add-image":"addImage"
  },

   addImage:function(e){
        e.preventDefault();
        var title = this.$el.find("#title").val();
        var image = this.$el.find("#image").val();
        var newModel = new Photo({name: title,image: image});    
        this.collection.add(newModel);
    },


  initialize: function() {
    this.render();
  }

});