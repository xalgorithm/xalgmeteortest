// Generated by CoffeeScript 1.10.0
(function() {
  Template.home.rendered = function() {
    document.title = "Differential | Polymer demo";
    return $("<meta>", {
      name: "description",
      content: "Something"
    }).appendTo("head");
  };

  Template.home.events = {
    'click paper-button': function(evt) {
      return console.log('clicked: ', evt.target);
    }
  };

}).call(this);

//# sourceMappingURL=home.js.map
