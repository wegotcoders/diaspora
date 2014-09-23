app.views.DraftMessageView = app.views.Base.extend({

  el: "#conversation_new",

  events: {
    "keyup #contact_autocomplete": "setTo",
    "keyup #conversation_subject": "setSubject",
    "keyup #conversation_text": "setText"
  },

  initialize: function(options) {
    //set message id to url query string
    //
    this.model = new app.models.MessageDraft({ id : window.location.toString() });
    this.model.fetch();
  },

  render: function() {
    $('#contact_autocomplete').val(this.model.get('to'));
    $('#conversation_subject').val(this.model.get('subject'));
    $('#conversation_text').val(this.model.get('text'));
  },

  setTo: function(e) {
   this.model.set("to", e.currentTarget.value);
  },

  setSubject: function(e) {
   this.model.set("subject", e.currentTarget.value);
  },

  setText: function(e) {
   this.model.set("text", e.currentTarget.value);
  }

});
