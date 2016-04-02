//DO NOT MODIFY THIS FILE

var ImageView = Backbone.View.extend({
  tagName: 'div',
  className: 'Imageclass',
    // TemplateBasic: _.template('#table-template'),
    // TemplateDetails: _.template('#display-image'),
 
  // TemplateBasic: _.template('<tr><td class="photo-name"><%=name%></td><td class="photo-name"><%=rating%></td></tr>'),

  TemplateDetails: _.template('<img class="photo" src="<%=image%>"> <div class="span1" id="rating">Rate me<select class="span2"><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></div><td class="rating">Rating<%=rating%></td>'),
  //addtemplate
  
  render: function() {
    var photoTemplate =this.TemplateDetails;
    return this.$el.html(photoTemplate(this.model.attributes));
    //return this;
  },
  


  setImage: function(image) {
    this.model = image;
    this.render();
  },

  events: {
   'change .span2' : 'changerating' 
},


  changerating: function(event) {
    var rating = event.target.value;
    this.model.set('rating',rating);
    console.log(this.model.rating);
    this.render(); // print 'paypal' or 'check'.
   }

  // events: {

  //   'change .span2' :function() {
  //     this.model.Updaterating();
  //   }
  // }
  



    //  clicked: function(e){
    //     e.preventDefault();
    //     var name = this.model.get("name");
    //     alert(name);
    // },

    // render: function(){
    //     var template = $("#item-template");
    //     var html = template.tmpl(this.model.toJSON());
    //     $(this.el).append(html);
    // }  
});