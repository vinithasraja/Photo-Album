// Please modify this file!

var Photo = Backbone.Model.extend({

  Displayimage : function(){
  
  this.trigger('setImage',this);
},

});
