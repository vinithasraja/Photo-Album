var TableView = Backbone.View.extend({
  tagName: 'tr',

 
  TemplateBasic: _.template('<td class="photo-name"><%=name%></td>'),

  //TemplateDetails: _.template('<td class="photo-click"><%=name%></td><td class="display-image"><img src="<%=image%>"></td>'),
  //TemplateDetails: _.template('<td class="photo-click"><%=name%></td><td class="display-image"><img src="<%=image%>"></td>'),
  
  render: function() {
    var photoTemplate = this.TemplateBasic;
    return this.$el.html(photoTemplate(this.model.attributes));
    //return this;
  },
  

  events: {
    'click': function() {
      this.model.Displayimage();
    },
  }
});