//DO NOT MODIFY THIS FILE

var photoData = [
{   
    id:1,
    name: 'Swan',
    image: '/Users/datascience/Documents/Hackreactor/Photo Album Project/pic1.jpg' ,
    
  },
  {
    id:2,
    name: 'Elephant',
    image: '/Users/datascience/Documents/Hackreactor/Photo Album Project/pic2.jpg' ,
    
  },
  {
    id:3,
    name: 'Dog',
    image: '/Users/datascience/Documents/Hackreactor/Photo Album Project/pic3.jpg',
  }
];
  
  

var Collect = new Backbone.Collection(photoData, {model: Photo});
var AllView = new AllView({collection: Collect});
$('body').append(AllView.$el);