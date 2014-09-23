Backbone.makeDraftable = function(model) {

  var timerId;
  var model;

  _.extend(model, {
    startMonitoring : function() {  
      //timerId = setInterval(model.save, 500);
      model.save();
    },

    stopMonitoring : function() {
      clearInterval(timerId);
    },

    restartTimer: function() {
      model.stopMonitoring();
      model.startMonitoring();
    }
  });

  model.listenTo(model, 'change', model.restartTimer);

};
