(function() {
  var app = angular.module('commentForm', []);

  app.controller('ListController', function() {
    this.list = comments;
  });

  app.controller('CommentController', function() {
    this.comment = {};

    this.addComment = function(list) {
      list.push(this.comment);
      this.comment = {};
    };
  });

  var comments = [
    {
      body: 'Example Comment 1', author: 'test@test.com'
    },
    {
      body: 'Example Comment 2', author: 'test@test.org'
    }
  ];
})();
