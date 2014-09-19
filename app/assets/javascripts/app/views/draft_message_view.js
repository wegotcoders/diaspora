app.views.DraftMessageView = app.views.Base.extend({

  el: "#conversation_new",

  events: {
    "keyup #contact_autocomplete": "setTo",
    "keyup #conversation_subject": "setSubject",
    "keyup #conversation_text": "setText"
  },

  initialize: function(options) {
    //each time obj instantiated it is being overwritten
    //need to figure out how to dynamically assing id
    //need logic to check if draft already exists -> possibly refactor save
    this.model = new app.models.MessageDraft({ id : 1 });
    //is it possible to DRY up # of saves by watching for changes?
    //this.listenTo(this, 'change', this.save);
    this.model.save();
  },

  render: function() {
    $('#contact_autocomplete').val(this.model.get('to'));
    $('#conversation_subject').val(this.model.get('subject'));
    $('#conversation_text').val(this.model.get('text'));
  },

  setTo: function(e) {
   this.model.set("to", e.currentTarget.value);
   this.model.save();
  },

  setSubject: function(e) {
   this.model.set("subject", e.currentTarget.value);
   this.model.save();
  },

  setText: function(e) {
   this.model.set("text", e.currentTarget.value);
   this.model.save();
  }
});
