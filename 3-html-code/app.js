// Write a node.JS program that read and shows in the console the html code of one external page. The link of the external page should be read from a file link.txt

var fs = require('fs')
var request = require('request')
var url = fs.readFileSync('link.txt', 'utf-8')

request(url, function (err, response, body) {
  if (err) throw err;
  console.log(body);

  /*

  var regExp = /src='.*'><\/script>/g
  var itemsFound = body.match(regExp)
  var aJsLoaded = itemsFound.map( function( urlJs ) {
    var urlCleaned = urlJs.replace("src=\'", '').replace("\'></script>", '')
    var oUrl = url.parse(urlCleaned);
    var pathName = oUrl.pathname
    var fileName = pathName.split('/').pop()
    return fileName

  })
  console.log(aJsLoaded);

 */


});

