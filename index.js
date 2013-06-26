var dom = require('dom'),
    domready  = require('domready'),
    UAParser = require('ua-parser-js');


domready(function() {
  var parser = new UAParser();
  var ua = parser.getResult();

  // only do this on mobile
  if (ua.device.type != "mobile") return;

  var all = document.body.getElementsByTagName("*");

  for (var i=0, max=all.length; i < max; i++) {
    var elm = dom(all[i])
      , html = elm.html();

    // if we can find it then replace with touch
    elm.html(html.replace(/click/g, 'touch'));
  }
});
