//DO NOT MODIFY THIS FILE

var photoData = [
{   
    id:1,
    name: 'Swan',
    image: '/Users/datascience/Documents/Hackreactor/Photo Album Project/pic1.jpg' ,
    rating: 1,
  },
  {
    id:2,
    name: 'Elephant',
    image: '/Users/datascience/Documents/Hackreactor/Photo Album Project/pic2.jpg' ,
    rating: 1,
  },
  {
    id:3,
    name: 'Dog',
    image: '/Users/datascience/Documents/Hackreactor/Photo Album Project/pic3.jpg',
    rating: 1,
  }
];
  
  

var Collect = new Backbone.Collection(photoData, {model: Photo});
var app = new AppModel({collection: Collect});
var appView = new AppView({model: app});

$('body').append(appView.render());


