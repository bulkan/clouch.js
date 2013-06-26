var dom = require('dom'),
    domready  = require('domready'),
    UAParser = require('ua-parser-js');


domready(function() {
  var parser = new UAParser();
  var ua = parser.getResult();


  // only do this on mobile
  if (!ua.mobile) return;

  var all = document.body.getElementsByTagName("*");

  for (var i=0, max=all.length; i < max; i++) {
    var html = dom(all[i]).html();

    if(html.match('click')){
      console.log(dom(all[i]).html());
    }
  }
});
