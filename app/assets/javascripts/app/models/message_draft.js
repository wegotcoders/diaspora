app.models.MessageDraft = Backbone.Model.extend({

  localStorage : new Backbone.LocalStorage("MessageDraft"), 


  initialize: function(options) {
    //make this message draftable and add timer function for localStorage
    //
    Backbone.makeDraftable(this);    
    this.listenTo(this, 'sync', this.removeLocalStorage);
  },

  removeLocalStorage : function() {
    this.destroy();
  }

});
