app.models.MessageDraft = Backbone.Model.extend({

  localStorage : new Backbone.LocalStorage("MessageDraft"),

  saveDraft : function() {
    var modelAttributesJSON = JSON.stringify(this.attributes);

    // If this is the first change, or the model has changed since the last 
    // draft, store in localStorage
    if (!draftAttributes || JSON.stringify(draftAttributes) !== modelAttributesJSON) {
      localStorage.setItem('message', modelAttributesJSON);
      draftAttributes = _(this.attributes).clone();
    }
  },

  getDraft : function() {
    return JSON.parse(localStorage.getItem("message"));
  },

  startMonitoring : function() {
    timerId = setInterval(this.saveDraft, 1000);
  },

  stopMonitoring : function() {
    clearInterval(timerId);
  },

  restartTimer: function() {
    this.stopMonitoring();
    this.startMonitoring();
  };

// Set the model attributes from the draft in localStorage, if available.
this.set(this.getDraft());

// reset timer everytime a change is made to draft
this.listenTo(this, 'change', this.restartTimer);

});
