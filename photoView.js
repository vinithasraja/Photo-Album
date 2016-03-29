//DO NOT MODIFY THIS FILE

var PhotoView = Backbone.View.extend({
  tagName: 'tr',
 
  TemplateBasic: _.template('<tr><td class="photo-name"><%=name%></td></tr>'),

  TemplateDetails: _.template('<td class="photo-click"><%=name%></td><td class="display-image"><img src="<%=image%>"></td>'),
  
  render: function() {
    var photoTemplate = this.model.get('displayInfo') ? this.TemplateDetails : this.TemplateBasic;
    this.$el.html(photoTemplate(this.model.attributes));
    return this;
  },
  
  initialize: function() {
    this.render();
    this.model.on('click:image', this.render, this);
  },

  events: {
    'click': function() {
      this.model.Displayimage();
    }

  }
});