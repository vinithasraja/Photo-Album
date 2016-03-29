// Please modify this file!

var Photo = Backbone.Model.extend({

  defaults: {
    id: 0,
    name: 'Larry',
    image: 'http://www.google.com',
    displayInfo: false
  },

  Displayimage : function(){
  value = this.get('displayInfo');
  this.set('displayInfo', !value);
  this.trigger('click:image',this);
  
},

});
