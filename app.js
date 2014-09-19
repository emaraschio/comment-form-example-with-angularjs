(function() {
  var app = angular.module('commentForm', []);

  app.controller('MainController', function() {
    this.comment = {};
    
    this.addComment = function(comment) {
      this.comment = comment;
    };
  });

 
})();

