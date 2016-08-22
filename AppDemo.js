var myApp = new Framework7({
  pushState: true,
  swipeBackPage: true,

  preprocess: function (content, url, next) {
    if (url === 'people.html') {
      var template = Template7.compile(content);
      var resultContent = template({
        title: 'People',
        people: ['John', 'Ivan', 'Mary']
      });

      return resultContent;
    } else if (url === 'about.html') {
      var template = Template7.compile(content);
      var resultContent = template();

      return resultContent;
    }
  },
  onAjaxStart: function (xhr) {
    myApp.showIndicator();
  },
  onAjaxComplete: function (xhr) {
    myApp.hideIndicator();
  }
});

var mainView = myApp.addView('.view-main', {
  dynamicNavbar: true
});

var $$ = Framework7.$;

$$(document).on('pageInit', function (e) {
  var page = e.detail.page;

  if (page.name === 'about') {
    myApp.alert('Here comes about page');
  }

  if (page.name !== 'index') {
    mainView.hideToolbar();
  } else {
    mainView.showToolbar();
  }
});